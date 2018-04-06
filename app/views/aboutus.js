import React from 'react';
import Component from 'react';
import { render } from 'react-dom';
  
  const about1 = () => (
    <h1>About with const_keyword, auto returing html</h1>
  );

  class about2 extends React.Component {

    constructor() {
      super();
      this.mahi = 56;
      this.servie_url = "test";
      this.state = {service_response : 'Not received', unused_attr : 98};
    }
     
    onItemClick = (e) => {
        var obj = this; 
        
        ws_request(obj.servie_url,{},function(data){  
            if(data.results)
            {
                data = data.results;
                data = JSON.stringify(data);
            }            
            obj.mahi = 800;
            data = "At "+(new Date()) + " : "+data;
            obj.setState({service_response:data, later_created_property:'Orval'});
            if(obj.servie_url == "test")
            {
                obj.servie_url = "/ws/test";
            }   
            else
            {
                obj.servie_url = "test";
            }
        });
    }

    simplefun = function(){      
      return "I am returned by a simple JS function";
    }

    render(){
      return (
        <div>
          <button className="ajax-btn" onClick={this.onItemClick} >Click to Call AJAX</button>          
          <div>Property of class not chnagable by setstate {this.mahi}</div>
          <div>{this.simplefun()}</div>
          <div>later_created_property_in_state :{this.state.later_created_property}</div>
          <div>Property of state :     
              <span className="service-result">{this.state.service_response}</span>              
          </div>          
        </div>
      );
    }      
  }


export {
  about1, about2
};