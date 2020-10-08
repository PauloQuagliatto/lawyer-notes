import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import MaskedInput from 'react-text-mask'

export default class NoteForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            vara: props.note ? props.note.vara : '',
            acao: props.note ? props.note.acao : '',
            process: props.note ? props.note.process : '',
            client: props.note ? props.note.client : '',
            address: props.note ? props.note.address : '',
            phone: props.note ? props.note.phone : '',
            counterPart: props.note ? props.note.counterPart : '',
            distribuition: props.note ? moment(props.note.distribuition) : moment(),
            goingOn: props.note ? props.note.goingOn : 'goingon',
            providence: props.note ? props.note.providence : '',
            createdAt: props.note ? moment(props.note.createdAt) : moment(),
            distribuitionFocused: false,
            createdFocused: false,
            error: '',
            displayFormat: 'DD/MM/YYYY'
        }
    }
    onVaraChange = (e) => {
        const vara = e.target.value
        this.setState(() => ({ vara }))
    }
    onAcaoChange = (e) => {
        const acao = e.target.value
        this.setState(() => ({ acao }))
    }
    onProcessChange = (e) => {
        const process = e.target.value
        this.setState(() => ({ process }))
    }
    onClientChange = (e) => {
        const client = e.target.value
        this.setState(() => ({ client }))
    }
    onAddressChange = (e) => {
        const address = e.target.value
        this.setState(() => ({ address }))
    }
    onPhoneChange = (e) => {
        const phone = e.target.value
        this.setState({ phone })
    }
    onCounterPartChange = (e) => {
        const counterPart = e.target.value
        this.setState(() => ({ counterPart }))
    }
    onDistribuitionChange = (distribuition) => {
        if (distribuition) {
            this.setState(() => ({ distribuition }))
        }
    }
    onCreatedAtChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onGoingOnChange = (e) => {
        const goingOn = e.target.value
        this.setState(() => ({ goingOn }))
    }
    onFocusDistribuitionChange = ({ focused }) => {
        this.setState(() => ({ distribuitionFocused: focused }))
    }
    onFocusCreatedChange = ({ focused }) => {
        this.setState(() => ({ createdFocused: focused }))
    }
    onProvidencenChange = (e) => {
        const providence = e.target.value
        this.setState(() => ({ providence }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.setState(() => ({ error: '' }))
        this.props.onSubmit({
            vara: this.state.vara,
            acao: this.state.acao,
            process: this.state.process,
            client: this.state.client,
            address: this.state.address,
            phone: this.state.phone,
            counterPart: this.state.counterPart,
            lawyer: 'Paulo Felix',
            distribuition: this.state.distribuition.valueOf(),
            goingOn: this.state.goingOn,
            providence: this.state.providence,
            createdAt: this.state.createdAt.valueOf()
        })
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Vara"
                    autoFocus
                    value={this.state.vara}
                    onChange={this.onVaraChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Ação"
                    value={this.state.acao}
                    onChange={this.onAcaoChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Processo"
                    value={this.state.process}
                    onChange={this.onProcessChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Cliente"
                    value={this.state.client}
                    onChange={this.onClientChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Endereço"
                    value={this.state.address}
                    onChange={this.onAddressChange}
                />
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]} 
                    className="text-input text-input__phone"
                    placeholder="Telefone"
                    guide={true}
                    onChange={onPhoneChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Contra Parte"
                    value={this.state.counterPart}
                    onChange={this.onCounterPartChange}
                />
                <div className="input-group__item">
                <p>Distribuição: </p>
                    <SingleDatePicker
                        date={this.state.distribuition}
                        onDateChange={this.onDistribuitionChange}
                        focused={this.state.distribuitionFocused}
                        onFocusChange={this.onFocusDistribuitionChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat={this.state.displayFormat}
                    />
                </div>
                <div className="input-group__item">
                    <p>Em Andamento: </p>
                    <select
                        className="select"
                        value={this.state.goingOn}
                        onChange={this.onGoingOnChange}
                    >
                        <option value="goingon">Sim</option>
                        <option value="closed">Não</option>
                    </select>
                </div>
                <textarea
                    className="textarea"
                    placeholder="Providências"
                    value={this.state.providence}
                    onChange={this.onProvidencenChange}
                ></textarea>
                <div className="input-group__item">
                    <p>Criado em: </p>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onCreatedAtChange}
                        focused={this.state.createdFocused}
                        onFocusChange={this.onFocusCreatedChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat={this.state.displayFormat}
                    />
                </div>
                <div>
                    <button className="btn">Salvar Cliente</button>
                </div>
            </form>
        )
    }
}