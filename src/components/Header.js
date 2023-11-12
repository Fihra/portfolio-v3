import React from 'react';
import data from '../data.json';

const Header = () => {
  const { header_roles } = data;


  const showRoles = () => {
    return header_roles.map((role, i) => {
      if(i < header_roles.length -1){
        return <>
        <h2>{role}</h2><span className="header-dot">{'\u2B24'}</span>
      </>
      } else {
        return(
          <h2>{role}</h2>
        ) 
      }
      
    })
  }

  return (
    <div className="header-container">
      <h1>Fabian Fabro</h1>
      <section className="header-roles-container">
      {showRoles()}
      </section>
    </div>
  );
}

export default Header;
