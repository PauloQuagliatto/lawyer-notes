import database from '../firebase/firebase'

// ADD_NOTE
export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
})

export const startAddNote = (noteData = {}) => {
  return (dispatch) => {
    const {
      vara = '',
      acao = '',
      process = '',
      client = '',
      address = '',
      phone = '',
      counterPart = '',
      lawyer = '',
      distribuition = 0,
      goingOn = '',
      providence = '',
      createdAt = 0
    } = noteData
    const note = { vara, acao, process, client, address, phone, counterPart, lawyer, distribuition, goingOn, providence, createdAt }

    return database.ref('notes').push(note).then((ref) => {
      dispatch(addNote({
        id: ref.key,
        ...note
      }))
    })
  }
}

// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
})

// START_REMOVE_NOTE
export const startRemoveNote = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`notes/${id}`).remove().then(() => {
      dispatch(removeNote({ id }))
    })
  }
}

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})

// START_EDIT_NOTE
export const startEditNote = (id, updates) => {
  return (dispatch) => {
    return database.ref(`notes/${id}`).set({
      id: id,
      ...updates
    }).then(() => {
      dispatch(editNote(id, updates))
    })
  }
}

//SET_NOTES
export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
})

//START_SET_NOTES
export const startSetNotes = () => {
  return (dispatch) => {
    return database.ref('notes').once('value').then((snapshot) => {
      const notes = []
      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setNotes(notes))
    })
  }
}