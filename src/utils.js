import _ from 'lodash';
import axios from 'axios';


// Options list

export function createOptionsList(normalizedData, key) {
  return Object.keys(normalizedData).map(id =>
    `${id} - ${normalizedData[id][key]}`
  );
}

// Sort data

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
  return Object.keys(data).filter((id) => {
    return _.some(data[id], containsIgnoreCase.bind(null, filterValues));
  });
}

export function containsIgnoreCase(filterValues, record) {
  filterValues = String(filterValues).toLowerCase().trim();
  record = String(record).toLowerCase().trim();

  return record.indexOf(filterValues) >= 0;
}

// Form Validations

export const required = value => 
  value ? undefined : 'Required';

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

export const asyncValidate = (value) => {
  console.log(value);
  return axios.post(
    'http://localhost:8000/api/users/validate', value)
    .catch(({response, message}) => {
      const { status, data } = response;
      if (status === 404 &&
        ['username', 'email'].every(key => 
          Object.keys(value).indexOf(key) > -1)) {
        throw { username: data.username,
                email: data.email }
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
}
