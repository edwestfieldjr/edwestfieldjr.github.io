import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <div className="container text-center p-1 mt-1 mt-xs-2 p-xs-2 mt-sm-3 p-sm-3 mt-md-4 p-md-4 mt-lg-5 p-lg-5 text-muted ">
    <h1 className="display-4">Ed Westfield Jr.</h1>
    <h3 className="display-6">西田爱德</h3>
    {/* <ul className="list-unstyled text-monospace d-flex d-inline-flex small"> */}
    <ul className="list-inline small">
      <li class="list-inline-item">Attorney</li>
      <li class="list-inline-item">Graphic Designer</li>
      <li class="list-inline-item">Web Developer</li>
      <li class="list-inline-item">Software Engineer</li>
    </ul>
    <ul className="list-unstyled">
      <li><a className="link-secondary" href="https://github.com/edwestfieldjr">github.com/edwestfieldjr</a></li>
      <li><a className="link-secondary" href="https://linkedin.com/in/edwestfieldjr/">linkedin.com/in/edwestfieldjr/</a></li>
      <li><a className="link-secondary" href="https://edwestfieldjr.com/">edwestfieldjr.com</a></li>
    </ul>
  </div>
);
