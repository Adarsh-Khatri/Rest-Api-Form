import React, { Component } from 'react'

export default class Form extends Component {

  state = {
    form: { method: '', fetchURL: '', data: '' },
    methodArr: ['GET', 'POST']
  }


  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState(pre => ({ form: { ...pre.form, [name]: value } }))
  }

  postingData = () => {
    this.props.handleSubmit(this.state.form)
  }

  makeDropDown = (label, startValue, arr) => {
    return (
      <div className='form-group my-3'>
        <label htmlFor="method" className='form-label fw-bold lead'>{label}</label>
        <select className='form-select' name="method" id="method" onChange={this.handleChange}>
          <option value="" selected disabled>{startValue}</option>
          {
            arr.map(opt => <option value={opt}>{opt}</option>)
          }
        </select>
      </div>
    )
  }

  makeInputField = (label, name, value, placeH) => {
    return (
      <div className="form-group my-3">
        <label htmlFor={name} className='form-label fw-bold lead'>{label}</label>
        <input type="text" id={name} className='form-control' name={name} value={value} placeholder={placeH} onChange={this.handleChange} />
      </div>
    )
  }

  render() {
    let { form, methodArr } = this.state;
    let { method, fetchURL, data } = form;
    return (
      <div className="container bg-light rounded rounded-5 p-5">
        <div className="row">
          <h1 className='fw-bold text-center'>REST API FORM</h1>
        </div>
        <div className="row">
          {this.makeDropDown('Method', 'Select Method', methodArr)}
        </div>
        <div className="row">
          {this.makeInputField('URL', 'fetchURL', fetchURL, 'Enter Fetch URL')}
        </div>
        <div className="row">
          {this.makeInputField('Data', 'data', data, 'Enter Data')}
        </div>
        <div className="row mt-3">
          <div>
            <button className='btn btn-primary' onClick={this.postingData}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}
