import {FETCH_DOCUMENTS_REQUEST, FETCH_DOCUMENTS_SUCCESS, FETCH_DOCUMENTS_FAILURE} from '../constants/actionTypes'

const initialState = {
    loading: false,
    documents: [],
    error: ''
}

const documentReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DOCUMENTS_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_DOCUMENTS_SUCCESS: return {
      loading: false,
      documents: action.payload,
      error: ''
    }
    case FETCH_DOCUMENTS_FAILURE: return {
      loading: false,
      documents: [],
      error: action.payload
    }
    default: return state;
  }
}

export default documentReducer;