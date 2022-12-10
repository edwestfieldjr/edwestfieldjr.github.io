import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <div className="container text-center p-1 mt-1 mt-xs-2 p-xs-2 mt-sm-3 p-sm-3 mt-md-4 p-md-4 mt-lg-5 p-lg-5 text-muted " >
    <h1 className="display-4">Ed Westfield Jr.</h1>
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
    <div>
    <a className="link-secondary" href="https://linkedin.com/in/edwestfieldjr/">linkedin.com/in/edwestfieldjr/</a>
    </div>
    <div>
    <a className="link-secondary" href="https://edwestfieldjr.com/">edwestfieldjr.com</a>
    </div>
  </div>
);
