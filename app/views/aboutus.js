import React from 'react';
import Component from 'react';
import { render } from 'react-dom';
  
  function about1() {
    return (<h1>About with simple fun</h1>);
  };

  class about2 extends React.Component {

    constructor() {
      super();
      this.mahi = 56;
      this.state = {locs : 'Sami', unused_attr : 98};
    }
     
    onItemClick = (e) => {
      var obj = this;
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=lahore",
        success:function(data){  
          data = data.results;
          this.mahi = 800;
          data = JSON.stringify(data);
          obj.setState({locs:data, later_created_property:'Orval'})
        }
      });
    }

    simplefun = function(){      
      return "This is simple JS function result";
    }

    render(){
      return (
        <div>
          <button onClick={this.onItemClick} >Click to Call AJAX</button>
          <div>Property of class not chnagable by setstate {this.mahi}</div>
          <div>{this.simplefun()}</div>
          <div>later_created_property_in_state :{this.state.later_created_property}</div>
          <div>Property of state : {this.state.locs}</div>
        </div>
      );
    }      
  }


export {
  about1, about2
};