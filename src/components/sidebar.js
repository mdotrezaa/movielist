import React, { useState } from "react";

export default function Sidebar() {
  // Declare a new state variable, which we'll call "count"
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div id='mySidenav' class='sidenav'>
      <a className='closebtn' onClick={closeNav}>
        <i class='bx bx-x bx-md'></i>
      </a>
      <ul className='sidenavlist'>
        <li className='topnav'>
          <div className='avatar'>
            <img src={require("../assets/images/profile.jpg")} />
          </div>
          <div className='text'>Welcome, John Doe</div>
        </li>
        <li>
          <a href='/'>Dashboard</a>
        </li>
        <li>
          <a href='/genre'>Genre</a>
        </li>
        <li>
          <a href='/movie'>Movie</a>
        </li>
      </ul>
    </div>
  );
}
