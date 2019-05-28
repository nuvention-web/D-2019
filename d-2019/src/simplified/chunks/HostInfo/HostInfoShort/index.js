import React, { Component, Fragment } from 'react';

class HostInfoShort extends Component {


    render() {
  
      return (
          <div>
              <div className='nameAndPhoto'>
                <h1>Kari</h1>
                <img src='static/img/kari.jpg' />
              </div>
              <div>
                  <p>
                      last analytics refresh: 05/28/2019
                  </p>
              </div>
          </div>
      );
    }
  }

  export default HostInfoShort;