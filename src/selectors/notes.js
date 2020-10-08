import moment from 'moment'

// Get visible notes

export default (notes, { text, sortBy, goingOn, startDate, endDate }) => {
  return notes.filter((note) => {
    const createdAtMoment = moment(note.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const goingOnMatch = note.goingOn.toLowerCase().includes(goingOn.toLowerCase())
    const textMatch = note.vara.toLowerCase().includes(text.toLowerCase()) || 
      note.acao.toLowerCase().includes(text.toLowerCase()) ||
      note.process.toLowerCase().includes(text.toLowerCase()) ||
      note.client.toLowerCase().includes(text.toLowerCase()) ||
      note.counterPart.toLowerCase().includes(text.toLowerCase()) ||
      note.lawyer.toLowerCase().includes(text.toLowerCase())
      

    return startDateMatch && endDateMatch && textMatch && goingOnMatch
  // eslint-disable-next-line array-callback-return
  }).sort((a, b) => {
    if(sortBy === 'vara') {
      return a.vara.toLowerCase() < b.vara.toLowerCase() ? -1 : 1
    } else if(sortBy === 'acao') {
      return a.acao.toLowerCase() < b.acao.toLowerCase() ? -1 : 1
    } else if(sortBy === 'process') {
      return a.process.toLowerCase() < b.process.toLowerCase() ? -1 : 1
    } else if(sortBy === 'client') {
      return a.client.toLowerCase() < b.client.toLowerCase() ? -1 : 1
    } else if(sortBy === 'counterpart') {
      return a.counterPart.toLowerCase() < b.counterPart.toLowerCase() ? -1 : 1
    } else if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? 1 : -1
    }
  })
}
