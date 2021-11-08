import React from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
import { StoreState } from '../../reducers';

import './Navbar.scss'

const Navbar= () =>{
  const sequence = useSelector((state: StoreState) => state.sequence);

  return (
    sequence.data.length ? (
  <nav>
  <ul>
    <li>
      <NavLink exact activeClassName="active" to="/">
        Transcripts
      </NavLink>
    </li>
    <li>
      <NavLink exact activeClassName="active" to="/TranscriptContainer">
        Transcripts from 10 Left
      </NavLink>
    </li>
  </ul>
</nav>
    ) : <></> 
  );
}
export default Navbar;