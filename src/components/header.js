import React, { useState } from "react";

export default function Header() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  return (
    <header>
      <span onClick={openNav}>
        <i class='bx bx-menu bx-md'></i>
      </span>
    </header>
  );
}
