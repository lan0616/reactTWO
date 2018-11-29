import React, { Component } from 'react';
class LeftSide extends Component {
    
    render() {
        let {leftArr} =this.props;
        return (
            <ul>
            {
               leftArr.length&&leftArr.map((item,idx)=>{
                  return(<li key={idx} onClick={this.qq}>{item.tit}</li>)
               })
            }
                
            </ul>
        );
    }
}

export default LeftSide;