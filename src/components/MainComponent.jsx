import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData';
import axios from 'axios';

export default class MainComponent extends Component {

  state = {
    response: { data: '', status: '', statusText: '', time: '', method: '' }, isSubmit: false
  }

  fetchData = async (obj) => {
    let baseURL = "https://rest-api-server-c97e.onrender.com";
    let response, startTime, endTime, timeTaken;
    try {
      startTime = Date.now();
      response = await axios.post(`${baseURL}/myserver`, obj)
      endTime = Date.now();
      timeTaken = endTime - startTime;
      console.log(response);
      this.setState({ response: { data: response.data, status: response.status, statusText: response.statusText, time: timeTaken, method: obj.method }, isSubmit: true });
    } catch (error) {
      endTime = Date.now();
      timeTaken = endTime - startTime;
      this.setState({ response: { data: error.response.data.message, status: error.response.status, statusText: error.response.statusText, time: timeTaken, method: obj.method }, isSubmit: true });
    }
  }

  handleSubmit = (obj) => {
    this.fetchData({ ...obj })
  }

  render() {
    let { response, isSubmit } = this.state;
    return (
      <div className="container">
        <Form handleSubmit={this.handleSubmit} />
        {isSubmit && <DisplayData response={response} />}
      </div>
    )
  }
}
