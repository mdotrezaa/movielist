import React, { useState } from 'react';

export default function Sidebar() {
  // Declare a new state variable, which we'll call "count"
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div id="mySidenav" class="sidenav">
        <a class="closebtn" onClick={closeNav}>&times;</a>
        <a href="/">Dashboard</a>
        <a href="/genre">Genre</a>
        <a href="/movie">Movie</a>
    </div>
  );
}