import {FETCH_DOCUMENTS_REQUEST, FETCH_DOCUMENTS_SUCCESS, FETCH_DOCUMENTS_FAILURE} from '../constants/actionTypes'

export const fetchDocumentsRequest = () => {
   return {
      type: FETCH_DOCUMENTS_REQUEST
    }
}
export const fetchDocumentsSuccess = (documents) => {
  return {
    type: FETCH_DOCUMENTS_SUCCESS,
    payload: documents
  }
}
export const fetchDocumentsFailure = (error) => {
  return {
    type: FETCH_DOCUMENTS_FAILURE,
    payload: error
  }
}

export const fetchDocuments = () => {
  console.log('actionsss')
  return (dispatch) => {
    dispatch(fetchDocumentsRequest())
    fetch('http://localhost:8080/api/mytest')
    .then(response => response.json())
    .then(data => {
      const documents = data
      dispatch(fetchDocumentsSuccess(documents))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchDocumentsFailure(errorMsg))
    })
  }
}

export default fetchDocuments;