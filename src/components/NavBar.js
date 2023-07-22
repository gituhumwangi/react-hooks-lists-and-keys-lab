import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}
    <a key={links}href="#home">home</a>
    <a key={links}href="#about">about</a>
    <a key={links}href="#projects">projects</a>
    </nav>;
}

export default NavBar;
