import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

function nested ({ match }){ 
    return(
      <div>
        <h2>Topic us</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rout1`}>Root1</Link>
          </li>
          <li>
            
            <Link to='/topics/more/rout2'>Root2</Link>
          </li>
          <li>
            <Link to={`${match.url}/rout3`}>Root3</Link>
          </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => <h3>More nested topics.</h3>}/>
      </div>
    );
  }
    
    function Topic ({ match }) 
    {
      return(
        <div>
          <h3>{match.params.topicId}</h3>
        </div>
      );
    } 
  
    export default nested;