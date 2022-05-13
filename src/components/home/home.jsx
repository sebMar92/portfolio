import React, { useRef, useState } from 'react';
import Slider from '../slider/slider.jsx';
import Header from '../header/header.jsx';
import Navbar from '../navbar/navbar.jsx';
import Selector from '../selector/selector.jsx';
import './home.css';

export default function Home() {
  const [language, setLanguage] = useState(false);
  const aboutMe = useRef(null);
  const goToAbout = () =>
    aboutMe.current.scrollIntoView({
      behavior: 'smooth',
    });
  const projects = useRef(null);
  const goToProjects = () =>
    projects.current.scrollIntoView({
      behavior: 'smooth',
    });
  const dogs = useRef(null);
  const goToDogs = () =>
    dogs.current.scrollIntoView({
      behavior: 'smooth',
    });
  const tech = useRef(null);
  const goToTech = () =>
    tech.current.scrollIntoView({
      behavior: 'smooth',
    });
  const scrap = useRef(null);
  const goToScrap = () =>
    scrap.current.scrollIntoView({
      behavior: 'smooth',
    });
  const contact = useRef(null);
  const goToContact = () =>
    contact.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <div id="home-wrapper">
      <Navbar
        goToAbout={goToAbout}
        goToProjects={goToProjects}
        goToDogs={goToDogs}
        goToTech={goToTech}
        goToScrap={goToScrap}
        goToContact={goToContact}
        language={language}
      />
      <Selector language={language} setLanguage={setLanguage} id="language-selector" />
      <Header
        tag="h1"
        title={language ? "Hi, I'm Sebastián Martínez." : 'Hola, soy Sebastián Martínez.'}
        ref={aboutMe}
      />
      <Header
        tag="h2"
        title={language ? 'FullStack Developer' : 'Desarrollador FullStack'}
        classes="handwritten"
      />

      <h2 className="tags">{'<p>'}</h2>
      <div>
        {language ? (
          <p>
            I have worked for years in an environment where respect and meeting deadlines
            are essential, so I thrive working in a team and I am used to working under
            time pressure. I personally enjoy learning new things and working hard to
            solve logical problems. I see every challenge as an opportunity to grow.
            <br />I have training in JavaScript, Node, Express, React, Redux, HTML5, CSS3,
            SQL and PostgreSQL.
          </p>
        ) : (
          <p>
            He trabajado años en ambiente donde es primordial el respeto y el cumplimiento
            de plazos, por lo que prospero trabajando en equipo y estoy acostumbrado a
            trabajar bajo la presión del tiempo. Personalmente disfruto de aprender cosas
            nuevas y trabajar duro para resolver problemas lógicos. Veo cada desafío como
            una oportunidad para crecer.
            <br />
            Tengo conocimientos de JavaScript, Node, Express, React, Redux, HTML5, CSS3,
            SQL y PostgreSQL.
          </p>
        )}
      </div>
      <h2 className="tags">{'</p>'}</h2>

      <Header tag="h1" title={language ? 'Projects' : 'Proyectos'} ref={projects} />
      <Slider
        screenImg="/images/dogsgif.gif"
        title="Dogs App"
        ref={dogs}
        description="Designed and developed a web page that recieves data from an external API and has it's own database. It displays a list of dog breeds with their information, it allows the creation of new breeds in the database, as well as their filtering and ordering."
      />
      <Slider
        screenImg="/images/techgif.gif"
        celImg="/images/celtechgif.gif"
        title="TechStore"
        ref={tech}
        description="Designed and developed a web page that recieves data from an external API and has it's own database. It displays a list of dog breeds with their information, it allows the creation of new breeds in the database, as well as their filtering and ordering."
      />
      <Slider
        screenImg="/images/scrapgif.gif"
        title="WebScrap Api"
        ref={scrap}
        description="Designed and developed a web page that recieves data from an external API and has it's own database. It displays a list of dog breeds with their information, it allows the creation of new breeds in the database, as well as their filtering and ordering."
      />

      <Header tag="h1" title={language ? 'Contact me' : 'Contáctame'} ref={contact} />
    </div>
  );
}
