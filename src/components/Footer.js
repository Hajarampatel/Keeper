import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    
    // <footer>
    <footer className="con" >
    <p>  Made with <span role="img"> ❤️ </span> By <a className="naam" rel="noopener noreferrer" target="_blank" href="https://hajarampatel.github.io/HAJA-RAM/"> <b> HAJA RAM </b></a> ⓒ {year}  </p>
    </footer>
    // </footer>

  );
}

export default Footer;
