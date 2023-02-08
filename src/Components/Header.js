import React from 'react';
import LogoCompleto from '../assets/LogoCompleto';
function Header(props) {
    return (
      <header className="bg-dark pb-5">
        <div className="p-4"style={{maxHeight:"20rem", maxWidth:"auto"}}>
          <LogoCompleto maxHeight="20rem" color="#fff"/>
        </div>
      </header>
    );
}

export default Header;