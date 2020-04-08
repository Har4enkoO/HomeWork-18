import React from 'react';
import {
  Link
} from "react-router-dom";

import './index.css';

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/photo">Photo</Link>
        </li>
        <li>
          <Link to="/contact-list">Contact-List</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
}
