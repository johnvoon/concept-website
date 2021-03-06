import _ from 'lodash';
import axios from 'axios';
import slug from 'slug';
import { normalize, arrayOf } from 'normalizr';

// Normalize data

export function normalizeResponseData(data, schema) {
  if (Array.isArray(data)) {
    return normalize(data, arrayOf(schema));
  } else {
    return normalize(data, schema);
  }
}

// Options list

export function createOptionsList(normalizedData, key) {
  return Object.keys(normalizedData).map(id =>
    `${id} - ${normalizedData[id][key]}`
  );
}

// Sort data

export function sortPosts(posts, ids, prop="created") {
  if (prop === "created") {
    return ids.sort((a, b) => {
      return new Date(posts[b].created) - new Date(posts[a].created);
    });
  } else {
    return ids.sort((a, b) => {
      if (posts[a][prop] < posts[b][prop]) return -1;
      if (posts[a][prop] > posts[b][prop]) return 1;
      return 0; 
    });
  }
}

export function sort(data, ids, prop, order) {
  return ids.sort((a, b) => {
    if (order === 'ascending') {
      if (data[a][prop] < data[b][prop]) return -1;
      if (data[a][prop] > data[b][prop]) return 1;
      return 0;
    } else {
      if (data[b][prop] < data[a][prop]) return -1;
      if (data[b][prop] > data[a][prop]) return 1;
      return 0;
    }
  });
}

export function sortByDate(data, ids, order) {
  return ids.sort((a, b) => {
    if (order === 'ascending') {
      return new Date(data[a].created) - new Date(data[b].created);
    } else {
      return new Date(data[b].created) - new Date(data[a].created);  
    }
  });
}

// Filter data

export function filter(filterValues, data) {
  const keywords = String(filterValues).toLowerCase().trim().split(/\s+/);
  return Object.keys(data).filter(id => {
    const recordTerms = _.values(data[id]).join(" ").toLowerCase();
    return keywords.every(keyword => {
      return recordTerms.indexOf(keyword) >= 0;
    });
  });
}

// Text conversion

export function slugify(string) {
  return slug(string, { lower: true, remove: /\&/g });
}

export function camelize(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

// Form Validations

export const required = value => 
  value ? undefined : 'Required';

export const passwordRequired = value =>
  value ? undefined : 'Please enter your password.';

export const maxLength = max => value => 
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const number = value => 
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const username = value =>
  value && !/^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$/.test(value) ?
  'Invalid username' : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;

export const passwordMatch = password => value =>
  value && password !== value ? "Passwords don't match" : undefined;

export const asyncValidateUserIdentity = (value) => {
  return axios.post(
    `${API_URL}/api/users/validate`, value)
    .then(() => undefined) // important, otherwise returns uncaught in promise error on form submit
    .catch(({response, message}) => { // eslint-disable-line no-unused-vars
      const { status, data } = response;
      if (status === 404 &&
        ['username', 'email'].every(key => 
          Object.keys(value).indexOf(key) > -1)) {
        throw { username: data.username,
                email: data.email };
      }
      if (status === 404 && 
        Object.keys(value).includes('username')) {
        throw { username: data.username };
      }
      if (status === 404 && 
        Object.keys(value).includes('email')) {
        throw { email: data.email };
      } 
    });
};

export const asyncValidatePostTitle = (value) => {
  return axios.post(
    `${API_URL}/api/posts/validate`, value)
    .then(() => undefined) // important, otherwise will return uncaught in promise error on form submit
    .catch(({response, message}) => { // eslint-disable-line no-unused-vars
      const { status, data } = response;
      if (status === 404 && 
        Object.keys(value).includes('title')) {
        throw { title: data.title };
      }
    });
};