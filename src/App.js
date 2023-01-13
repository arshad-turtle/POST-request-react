import React from 'react'


export default class  App extends React.Component{
  constructor(){
  super()
  this.state = {
    name:"",
    salary:"",
    age:""
  }
  }
  submit()
  {
    let url ="https://dummy.restapiexample.com/api/v1/create"
    let data = this.state
    fetch(url,{
      method: 'POST',
      headers: {
      "Content-Type" : "application/json",
      "Accept":"application/json"
      },
      body: JSON.stringify(data)
    }).then( (result) => {
      result.json().then((resp) => {
        console.warn("resp ",resp);
      })
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>

        <h1> simple rest api </h1>
        <input type="text" name ="name" value={this.state.name} onChange={(data) => {  this.setState({name:data.target.value})} } /> <br /> <br/>
        <input type="text" name ="salary" value={this.state.salary} onChange={(data) => {  this.setState({salary:data.target.value})}} /> <br /> <br/>
        <input type="text" name ="age" value={this.state.age} onChange={ (data) => { this.setState({age: data.target.value})} } /> <br /> <br/>
        <button onClick={() => {this.submit()}}>Submit Data</button>

      </div>
    )
  }
}
