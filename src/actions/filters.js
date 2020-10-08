// SORT_BY_VARA
export const sortByVara = () => ({
  type: 'SORT_BY_VARA'
})

// SORT_BY_ACAO
export const sortByAcao = () => ({
  type: 'SORT_BY_ACAO'
})

// SORT_BY_PROCESS
export const sortByProcess = () => ({
  type: 'SORT_BY_PROCESS'
})

// SORT_BY_CLIENT
export const sortByClient = () => ({
  type: 'SORT_BY_CLIENT'
})

// SORT_BY_COUNTERPART
export const sortByCounterPart = () => ({
  type: 'SORT_BY_COUNTERPART'
})

// SORT_BY_LAWYER
export const sortByLawyer = () => ({
  type: 'SORT_BY_LAWYER'
})

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_GOINGON
export const setGoingOnFilter = (goingOn = '') => ({
  type: 'SET_GOINGON_FILTER',
  goingOn
})
// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
  
// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
  
// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})