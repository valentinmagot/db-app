import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

class TableComp extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.getHeader = this.getHeader.bind(this);
      this.getRowsData = this.getRowsData.bind(this);
      this.getKeys = this.getKeys.bind(this);
      this.state = { //state is by default an object
         athletes: [{id: "", firstname: "", lastname: "", email: "", dob: ""}],
      }
   }
   
  getKeys = function () {
      if(this.props.data[0] != null){
        return Object.keys(this.props.data[0]);
      }
        
  }

  getHeader = function () {
      var keys = this.getKeys();
      if(this.props.data[0] != null){
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }
  }

  getRowsData = function () {
      var items = this.props.data;
      var keys = this.getKeys();
      return items.map((row, index) => {
          return <tr key={index}><RenderRow key ={index}  data={row} keys={keys}/></tr>
      })
  }
   renderTableData() {
    return this.state.athletes.map((athletes, index) => {
       const { id, firstname, lastname, identified_gender, email, dob } = athletes //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{firstname}</td>
             <td>{lastname}</td>
             <td>{identified_gender}</td>
             <td>{email}</td>
             <td>{dob}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = Object.keys(this.state.athletes[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    let title = this.props.title;
      return (
        <div>
        <h1 id='title'>{title}</h1>
        <Table>
            <thead>
                <tr>{this.getHeader()}</tr>
                </thead>
            <tbody>
                {this.getRowsData()}
            </tbody>
        </Table>
     </div>
      )
   }
}

const RenderRow = function(props) {
    return props.keys.map((key, index)=> {
        return <td key={props.data[key]}>{props.data[key]}</td>
      })
}

export default TableComp //exporting a component make it reusable and this is the beauty of react