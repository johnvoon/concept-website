import {
  CHANGE_PAGE_LENGTH,
  CHANGE_PAGE_NUMBER,
  CHANGE_SELECTED_RECORD,
  CHANGE_ADMIN_OPERATION,
  SORT_DATA,
  FILTER_ADMIN_DATA,
  RECORDS_LOADED,
  RECORD_ADDED,
  RECORD_EDITED,
  RECORD_DELETED,
  COMMENT_VISIBILITY_CHANGED,
  LOAD_FORM_DATA,
  SHOW_MODAL,
  HIDE_MODAL,
  RESET_STATE
} from 'constants/actionTypes';

export function changePageLength(value) {
  return {
    type: CHANGE_PAGE_LENGTH,
    value
  };
}

export function changePageNumber(value) {
  return {
    type: CHANGE_PAGE_NUMBER,
    value
  };
}

export function changeSelectedRecord(value) {
  return {
    type: CHANGE_SELECTED_RECORD,
    value
  };
}

export function changeAdminOperation(value) {
  return {
    type: CHANGE_ADMIN_OPERATION,
    value
  };
}

export function sortData(sortBy) {
  return {
    type: SORT_DATA,
    sortBy
  };
}

export function filterAdminData(value) {
  return {
    type: FILTER_ADMIN_DATA,
    value
  };
}

export function recordsLoaded(records, recordIds) {
  return {
    type: RECORDS_LOADED,
    records,
    recordIds
  };
}

export function recordAdded(entities, addedRecord, addedRecordId) {
  return {
    type: RECORD_ADDED,
    entities,
    addedRecord,
    addedRecordId
  };
}

export function recordEdited(entities, editedRecord, editedRecordId) {
  return {
    type: RECORD_EDITED,
    entities,
    editedRecord,
    editedRecordId
  };
}

export function recordDeleted(entities, records, recordIds) {
  return {
    type: RECORD_DELETED,
    entities,
    records,
    recordIds,
  };
}

export function commentVisibilityChanged(entities, commentId) {
  return {
    type: COMMENT_VISIBILITY_CHANGED,
    entities,
    commentId
  };
}

export function loadFormData(formData) {
  return {
    type: LOAD_FORM_DATA,
    formData
  };
}

export function showModal() {
  return {
    type: SHOW_MODAL
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL
  };
}

export function resetState() {
  return {
    type: RESET_STATE
  };
}