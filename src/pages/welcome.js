import React from 'react';
import './welcome.css';
import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <div>
    <h2>Welcome</h2>
    <h3>Select an action to get started</h3>
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <i className="fa-solid fa-phone"></i>
            <h3>Send Phone Call</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>Use our visual editor to dispatch phone calls </h3>
            <Link to="/sendcall" type="button">Get Started</Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
          <i class="fa-solid fa-microphone-lines"></i>          
            <h3>Voices</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>View the voices you have access to. Or clone a new voice. </h3>
            <a href="#" type="button">Get Started</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face face1">
          <div className="content">
          <i class="fa-solid fa-cart-shopping"></i>          
            <h3>Purchase Credits</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>Purchase more credits to send out more calls and support our platform </h3>
            <a href="#" type="button">Get Started</a>
          </div>
        </div>
      </div>

      {/* Repeat similar structure for other cards */}

    </div>
    </div>
  );
}

export default Welcome;
