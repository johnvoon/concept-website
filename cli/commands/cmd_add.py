import click
import random

from datetime import datetime
from faker import Faker
from flask import url_for

from snakeeyes.app import create_app
from snakeeyes.extensions import db
from snakeeyes.blueprints.user.models import User
from snakeeyes.blueprints.blog.models.post import Post
from snakeeyes.blueprints.blog.models.comment import Comment
from snakeeyes.blueprints.practice_area.models import PracticeArea
from snakeeyes.blueprints.staff.models import Staff
from snakeeyes.blueprints.client.models.client import Client
from snakeeyes.blueprints.client.models.case import Case

# Create an app context for the database connection.
app = create_app()
db.app = app

fake = Faker('en_AU')


def _log_status(count, model_label):
    """
    Log the output of how many records were created.

    :param count: Amount created
    :type count: int
    :param model_label: Name of the model
    :type model_label: str
    :return: None
    """
    click.echo('Created {0} {1}'.format(count, model_label))

    return None


def _bulk_insert(model, data, label):
    """
    Perform bulk insert and log it.

    :param model: Model being affected
    :type model: SQLAlchemy
    :param data: Data to be saved
    :type data: list
    :param label: Label for the output
    :type label: str
    :param skip_delete: Optionally delete previous records
    :type skip_delete: bool
    :return: None
    """
    with app.app_context():
        model.query.delete()

        db.session.commit()
        db.engine.execute(model.__table__.insert(), data)

        _log_status(model.query.count(), label)

    return None


@click.group()
def cli():
    """ Add items to database. """
    pass


@click.command()
def practice_areas():
    """
    Generate practice areas.
    """
    click.echo('Working...')
    
    data = []
    practice_areas = ["Dispute Resolution", "Criminal Law", "Family Law", "Mergers & Acquisitions"]
    with app.app_context():
        img_srcs = [url_for('static', filename='images/400/glass-architecture.jpg'), 
                    url_for('static', filename='images/400/building.jpg'),
                    url_for('static', filename='images/400/ipad.jpg'),
                    url_for('static', filename='images/400/pencils.jpg'),
                    url_for('static', filename='images/400/team_meeting.jpg'),
                    url_for('static', filename='images/400/suit.jpg')]

    for area in practice_areas:
        img_src = random.choice(img_srcs)
        params = {
            'area': area,
            'img_src': img_src
        }

        data.append(params)

    _bulk_insert(PracticeArea, data, 'practice areas')

@click.command()
def users():
    """
    Generate fake clients.
    """
    click.echo('Working...')

    data = []
    random_usernames = []

    for i in range(0, 99):
        random_usernames.append(fake.user_name())

    random_usernames.append(app.config['SEED_ADMIN_USERNAME'])
    random_usernames = list(set(random_usernames))

    for username in random_usernames:
        fake_datetime = fake.date_time_between(
            start_date='-1y', end_date='now').strftime('%s')
        created_on = datetime.utcfromtimestamp(
            float(fake_datetime)).strftime('%Y-%m-%dT%H:%M:%S Z')
        random_percent = random.random()
        role = 'public' if random_percent >= 0.5 \
               else 'staff' if random_percent >= 0.25 \
               else 'client'

        params = {
            'created_on': created_on,
            'updated_on': created_on,
            'role': role,
            'email': fake.email(),
            'username': username,
            'password': User.encrypt_password('password'),
            'first_name': fake.first_name(),
            'middle_name': fake.first_name(),
            'last_name': fake.last_name(),
            'unit_number': fake.building_number(),
            'street_address': fake.street_address(),
            'postcode': fake.postcode(),
            'state': fake.state(),
            'country': fake.country(),
            'phone_number': fake.phone_number(),
            'sign_in_count': random.random() * 100,
            'current_sign_in_on': created_on,
            'current_sign_in_ip': fake.ipv4(),
            'last_sign_in_on': created_on,
            'last_sign_in_ip': fake.ipv4()
        }

        if username == app.config['SEED_ADMIN_USERNAME']:
            password = User.encrypt_password(app.config['SEED_ADMIN_PASSWORD'])

            params['role'] = 'admin'
            params['password'] = password

        data.append(params)

    _bulk_insert(User, data, 'users')

@click.command()
def staff():
    """
    Generate fake staff.
    """
    click.echo('Working...')

    data = []
    users = db.session.query(User).filter(User.role == 'staff')
    with app.app_context():
        img_srcs = [url_for('static', filename='images/400/glass-architecture.jpg'), 
                    url_for('static', filename='images/400/building.jpg'),
                    url_for('static', filename='images/400/ipad.jpg'),
                    url_for('static', filename='images/400/pencils.jpg'),
                    url_for('static', filename='images/400/team_meeting.jpg'),
                    url_for('static', filename='images/400/suit.jpg')]
    positions = ['Trainee Solicitor',
                 'Senior Partner',
                 'Associate',
                 'Business Development Manager',
                 'Senior Associate',
                 'Managing Partner',
                 'Office Manager',
                 'Secretary',
                 'Paralegal']
    practice_area_ids = db.session.query(PracticeArea.id).all()

    for user in users:
        fake_datetime = fake.date_time_between(
            start_date='-1y', end_date='now').strftime('%s')
        date_joined = datetime.utcfromtimestamp(
            float(fake_datetime)).strftime('%Y-%m-%d')

        params = {
            'date_joined': date_joined,
            'position': random.choice(positions),
            'img_src': random.choice(img_srcs),
            'user_id': user.id,
            'practice_area_id': random.choice(practice_area_ids)
        }

        data.append(params)

    _bulk_insert(Staff, data, 'staff')

@click.command()
def clients():
    """
    Generate fake clients.
    """
    click.echo('Working...')

    data = []
    users = db.session.query(User).filter(User.role == 'client')

    for user in users:
        params = {
            'user_id': user.id
        }

        data.append(params)

    _bulk_insert(Client, data, 'clients')

@click.command()
def posts():
    """
    Generate fake blog posts.
    """
    click.echo('Working...')

    random_titles = []
    data = []

    for i in range(0, 200):
        random_titles.append(fake.sentence(nb_words=6, variable_nb_words=True))

    random_titles = list(set(random_titles))
    with app.app_context():
        img_srcs = [url_for('static', filename='images/400/glass-architecture.jpg'), 
                    url_for('static', filename='images/400/building.jpg'),
                    url_for('static', filename='images/400/ipad.jpg'),
                    url_for('static', filename='images/400/pencils.jpg'),
                    url_for('static', filename='images/400/team_meeting.jpg'),
                    url_for('static', filename='images/400/suit.jpg')]
    author_ids = db.session.query(Staff.id).all()
    practice_area_ids = db.session.query(PracticeArea.id).all()

    for title in random_titles:
        fake_datetime = fake.date_time_between(
            start_date='-1y', end_date='now').strftime('%s')
        created_on = datetime.utcfromtimestamp(
            float(fake_datetime)).strftime('%Y-%m-%dT%H:%M:%S Z')
        author_id = random.choice(author_ids)
        practice_area_id = random.choice(practice_area_ids)
        img_src = random.choice(img_srcs)
        body = '\n\n'.join(fake.paragraphs(nb=5))
        summary = fake.sentence(nb_words=10)

        params = {
            'created_on': created_on,
            'updated_on': created_on,
            'title': title,
            'body': body,
            'img_src': img_src,
            'summary': summary,
            'author_id': author_id,
            'practice_area_id': practice_area_id
        }

        data.append(params)

    _bulk_insert(Post, data, 'posts')

@click.command()
def comments():
    """
    Generate fake post comments.
    """
    click.echo('Working...')

    data = []
    post_ids = db.session.query(Post.id).all()
    user_ids = db.session.query(User.id).all()

    for i in range(0, 200):
        fake_datetime = fake.date_time_between(
            start_date='-1y', end_date='now').strftime('%s')
        created_on = datetime.utcfromtimestamp(
            float(fake_datetime)).strftime('%Y-%m-%dT%H:%M:%S Z')
        user_id = random.choice(user_ids)
        post_id = random.choice(post_ids)
        content = fake.sentence(nb_words=10, variable_nb_words=True)

        params = {
            'created_on': created_on,
            'updated_on': created_on,
            'user_id': user_id,
            'post_id': post_id,
            'content': content
        }

        data.append(params)

    _bulk_insert(Comment, data, 'comments')

@click.command()
def cases():
    """
    Generate fake cases.
    """
    click.echo('Working...')

    data = []
    clients = db.session.query(Client).all()
    practice_area_ids = db.session.query(PracticeArea.id).all()
    matters = ['HCA 2232/2015', 
               'Acquisition of business', 
               'Issue of demand letter against X company', 
               'Visa application', 
               'Sale of business',
               'Preparation of mortgage']

    for idx, matter in enumerate(matters):
        fake_datetime = fake.date_time_between(
            start_date='-1y', end_date='now').strftime('%s')
        file_open = datetime.utcfromtimestamp(
            float(fake_datetime)).strftime('%Y-%m-%d')
        params = {
            'matter': matter,
            'file_open': file_open,
            'practice_area_id': random.choice(practice_area_ids)
        }

        data.append(params)

    _bulk_insert(Case, data, 'cases')

    cases = db.session.query(Case).all()

    for client in clients:
        case = random.choice(cases)
        case.clients.append(client)
        db.session.add(case)
        db.session.commit()

@click.command()
@click.pass_context
def all(ctx):
    """
    Generate all data.

    :param ctx:
    :return: None
    """
    ctx.invoke(practice_areas)
    ctx.invoke(users)
    ctx.invoke(staff)
    ctx.invoke(clients)
    ctx.invoke(posts)
    ctx.invoke(comments)
    ctx.invoke(cases)

    return None

cli.add_command(practice_areas)
cli.add_command(users)
cli.add_command(staff)
cli.add_command(clients)
cli.add_command(posts)
cli.add_command(comments)
cli.add_command(cases)
cli.add_command(all)
