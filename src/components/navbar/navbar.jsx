import React from 'react';
import './navbar.css';

export default function Navbar({
  goToAbout,
  goToProjects,
  goToDogs,
  goToTech,
  goToScrap,
  goToContact,
  goToTdd,
  language,
}) {
  return (
    <div id="navbar-container">
      <h4 className="hoverable" onClick={goToAbout}>
        {language ? 'About me' : 'Sobre mi'}
      </h4>
      <h4 className="hoverable" onClick={goToProjects}>
        {language ? 'Projects' : 'Proyectos'}
      </h4>
      <h5 className="hoverable" onClick={goToTdd}>
        ToDoList.tdd
      </h5>
      <h5 className="hoverable" onClick={goToTech}>
        TechStore
      </h5>
      <h5 className="hoverable" onClick={goToDogs}>
        Dogs App
      </h5>
      <h5 className="hoverable" onClick={goToScrap}>
        WebScrap Api
      </h5>
      <h4 className="hoverable" onClick={goToContact}>
        {language ? 'Contact' : 'Contáctame'}
      </h4>
    </div>
  );
}
