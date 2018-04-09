import React from 'react';
var base_url = window.location.origin+"";


  function afterfot() {
    return (        
        <div className="after-footer-scripts">
            <script src={base_url + "/assets/vendor/animsition/js/animsition.min.js"}></script>
            <script src={base_url + "/assets/vendor/bootstrap/js/popper.js"}></script>
            <script src={base_url + "/assets/vendor/bootstrap/js/popper.js"}></script>
            <script src={base_url + "/assets/vendor/bootstrap/js/bootstrap.min.js"}></script>                
            <script src={base_url + "/assets/vendor/select2/select2.min.js"}></script>                
            <script src={base_url + "/assets/js/main.js"}></script>
            <script src={base_url + "/assets/js/custom.js"}></script>
        </div>        
    );
  }
  
  export default  afterfot;

