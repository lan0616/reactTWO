/*
 * @Author: mikey.liucuilan 
 * @Date: 2018-11-05 09:56:27 
 * @Last Modified by: mikey.liucuilan
 * @Last Modified time: 2018-11-05 21:42:48
 */

import React, { Component } from 'react';
import LeftSide from 'view/LeftSide.jsx';
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
   
    this.state={
      leftArr:[]
    }
  }
  componentDidMount(){
    axios.get('/api/data').then((data)=>{
      console.log(data.data.data);
      this.setState({
         leftArr:data.data.data
      })
    })
  
     

  }
  render() {
    let {leftArr} =this.state;
    return (
      <div className="App">
      <LeftSide leftArr={leftArr}></LeftSide>
      
      </div>
    );
  }
}

export default App;
