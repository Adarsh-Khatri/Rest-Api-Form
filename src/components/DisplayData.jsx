import React, { Component } from 'react'

export default class DisplayData extends Component {
  render() {
    let { data, status, time, statusText } = this.props.response;
    return (
      <div className="container my-5">
        {
          <>
            <h2 className='fw-bold'>Response:</h2>
            <h3 className='text-info'>
              {JSON.stringify(data)}
            </h3>
          </>
        }
        <div className="row">
          <h2 className='fw-bold'>Status: <span className='text-success'>{status} {statusText}</span></h2>
          <h2 className='fw-bold'>Time Taken: <span className='text-warning'>{time}ms</span></h2>
        </div>
      </div>
    )
  }
}








{/* <div className="row bg-dark text-light lead fw-bold">
                <div className="col-sm-1">UserId</div>
                <div className="col-sm-1">ID</div>
                <div className="col-sm-4">Title</div>
                <div className="col-sm-6">Body</div>
              </div>
              {data.map(d =>
                <div className='row bg-light'>
                  <div className="col-sm-1 border">{d.userId}</div>
                  <div className="col-sm-1 border">{d.id}</div>
                  <div className="col-sm-4 border">{d.title}</div>
                  <div className="col-sm-6 border">{d.body}</div>
                </div>
              )} */}




            //   <div className='row text-info bg-light rounded rounded-5'>
            //   <h4 className="fw-bold">UserID: {data.userId}</h4>
            //   <h4 className="fw-bold">ID: {data.id}</h4>
            //   <h4 className="fw-bold">Title: {data.title}</h4>
            //   <h4 className="fw-bold">Body: {data.body}</h4>
            // </div>