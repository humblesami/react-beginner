import React from 'react';
import Component from 'react';
import { render } from 'react-dom';
  
  function about1() {
    return (<h1>About with consto      
    </h1>);
  };

  class about2 extends React.Component {

    constructor() {
      super();
      this.mahi = 56;
      this.state = {locs : 'Sami', kl : 98};      
    }
     
    onItemClick = (e) => {
      console.log(this);
      console.log(this.mahi);
      var obj = this;
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=lahore",
        success:function(data){  
          data = data.results;  
          data = JSON.stringify(data);
          obj.setState({locs:data, newattr:'Orval'})
        }
      });
    }

    koifun = function(){      
      return 77;
    }

    render(){
      return (
        <div>
          <button onClick={this.onItemClick} >Ham safar tha</button>
          <h1>
            About2 with Simple Fun -- 
            {this.mahi} -- new attr:{this.state.newattr}
            -- {this.koifun()}-- {this.state.locs}
          </h1>
        </div>
      );
    }      
  }


export {
  about1, about2
};