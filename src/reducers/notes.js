// Notes Reducer

const notesReducerDefaultState = []

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.note
      ]
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          }
        } else {
          return note;
        }
      })
    case 'SET_NOTES':
      return action.notes
    default:
      return state
  }
}
