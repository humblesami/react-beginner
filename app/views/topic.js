import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

function Topics ({ match }){ 
  return(
    <div>
      <h2>Topic us</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          
          <Link to='/topics/components'>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/>
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

  export default Topics;