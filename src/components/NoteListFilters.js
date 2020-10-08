import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, setStartDate, setEndDate, sortByVara, sortByAcao, sortByProcess, sortByClient, sortByCounterPart, sortByLawyer, setGoingOnFilter } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

class NoteListFilters extends React.Component {
    state = {
        calendarFocused: null,
        displayFormat: 'DD/MM/YYYY',
        startDateText: 'Dia Inicial',
        endDateText: 'Dia Final'
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div className="content-container content-container__bigger">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Selecione a Ação"
                            value={this.props.filters.text}
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}
                        />
                    </div>
                    <div className="input-group__item">
                    <select
                            className="select"
                            value={this.props.filters.goigOn}
                            onChange={(e) => {
                                if (e.target.value === 'goingon') {
                                    this.props.dispatch(setGoingOnFilter(e.target.value))
                                } else if (e.target.value === 'closed') {
                                    this.props.dispatch(setGoingOnFilter(e.target.value))
                                }
                            }}
                    >
                        <option value="goingon">Em Andamento</option>
                        <option value="closed">Concluído</option>
                    </select>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate())
                                } else if (e.target.value === 'vara') {
                                    this.props.dispatch(sortByVara())
                                } else if (e.target.value === 'acao') {
                                    this.props.dispatch(sortByAcao())
                                } else if (e.target.value === 'process') {
                                    this.props.dispatch(sortByProcess())
                                } else if (e.target.value === 'client') {
                                    this.props.dispatch(sortByClient())
                                } else if (e.target.value === 'counterpart') {
                                    this.props.dispatch(sortByCounterPart())
                                } else if (e.target.value === 'advogado') {
                                    this.props.dispatch(sortByLawyer())
                                }
                            }}
                        >
                            <option value="date">Data</option>
                            <option value="vara">Vara</option>
                            <option value="acao">Ação</option>
                            <option value="process">Processo</option>
                            <option value="client">Cliente</option>
                            <option value="counterpart">Contra Parte</option>
                            <option value="lawyer">Advogado</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId="start"
                            endDate={this.props.filters.endDate}
                            endDateId="end"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            startDatePlaceholderText={this.state.startDateText}
                            endDatePlaceholderText={this.state.endDateText}
                            displayFormat={this.state.displayFormat}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { filters: state.filters }
}

export default connect(mapStateToProps)(NoteListFilters)