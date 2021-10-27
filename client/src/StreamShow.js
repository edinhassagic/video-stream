import React, { Component } from 'react';
import {ReactFlvPlayer} from 'react-flv-player'
import Header from './Header';
import './page.css'

class Index extends Component {
  
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
          <div >
             <Header /> 
          </div>
          <div className="flv">
          <ReactFlvPlayer
          url={`http://localhost:8000/live/${id}.flv`}
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />

          </div>
        
      </div>
    );
  }
}

export default Index;