import moment from 'moment'
// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  goingOn: 'goingon',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_VARA':
      return {
        ...state,
        sortBy: 'vara'
      }
    case 'SORT_BY_ACAO':
      return {
        ...state,
        sortBy: 'acao'
      }
    case 'SORT_BY_PROCESS':
      return {
        ...state,
        sortBy: 'process'
      }
    case 'SORT_BY_CLIENT':
      return {
        ...state,
        sortBy: 'client'
      }  
    case 'SORT_BY_COUNTERPART':
      return {
        ...state,
        sortBy: 'counterpart'
      }
    case 'SORT_BY_LAWYER':
      return {
        ...state,
        sortBy: 'lawyer'
      }
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_GOINGON_FILTER':
      return {
        ...state,
        goingOn: action.goingOn
      }  
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};
