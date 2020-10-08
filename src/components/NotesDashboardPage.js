import React from 'react'
import NoteList from './NoteList'
import NoteListFilters from './NoteListFilters'
import NotesSummary from './NotesSummary'

const NotesDashboardPage = () => (
    <div>
      <NotesSummary />
      <NoteListFilters />
      <NoteList />
    </div>
)

export default NotesDashboardPage