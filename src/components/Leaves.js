import React from 'react';
import useLocal from '../utils/useLocal';
import NavBar from './NavBar';
import SideBar from './SideBar';

export default function Leaves() {
  useLocal();
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>hello world</div>
      </div>
    </div>
  )
}
