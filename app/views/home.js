import React from 'react';

  function MyHomeWithAnyName() {
    return (
      <div>
        <link href="./assets/css/home-style.css" rel="stylesheet" />
        <h2>Home With simple function returing html using react</h2>      
      </div>
    );
  }
  
  export default  MyHomeWithAnyName;

  // instaed of above you can also return like
  //export default { keyname :  MyHomeWithAnyName}