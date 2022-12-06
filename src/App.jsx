import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <div className="container text-center p-5 mt-5 text-muted " >
    <h1 className="display-3">Ed Westfield Jr.</h1>
    <h3 className="display-6">西田爱德</h3>
    <ul className="list-unstyled">
      <li>Attorney</li>
      <li>Graphic Designer</li>
      <li>Web Developer</li>
      <li>Software Engineer</li>
    </ul>
    <div>
    <a className="link-secondary" href="https://github.com/edwestfieldjr">github.com/edwestfieldjr</a>
    </div>
  </div>
);
