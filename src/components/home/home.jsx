import React, { useRef, useState } from 'react';
import Slider from '../slider/slider.jsx';
import Header from '../header/header.jsx';
import Navbar from '../navbar/navbar.jsx';
import Selector from '../selector/selector.jsx';
import './home.css';
import ScrollSign from '../scrollSign/scrollSign.jsx';

export default function Home() {
  const [language, setLanguage] = useState(true);
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
  const tddtdl = useRef(null);
  const goToTdd = () =>
    tddtdl.current.scrollIntoView({
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
        goToTdd={goToTdd}
        goToTech={goToTech}
        goToScrap={goToScrap}
        goToContact={goToContact}
        language={language}
      />
      <ScrollSign />
      <Selector language={language} setLanguage={setLanguage} />
      <section>
        <h2 className="tags">{'<section>'}</h2>
        <div className="indent">
          <Header
            tag="h1"
            title={
              language ? `Hi, I'm Sebastián Martínez.` : 'Hola, soy Sebastián Martínez.'
            }
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
                I have worked for years in an environment where respecting each other and
                meeting deadlines are essential, so{' '}
                <span className="bold">
                  I thrive working in a team and I'm used to working under the pressure of
                  time
                </span>
                . I personally enjoy learning new things and working hard to solve logical
                problems. I see every challenge as an opportunity to grow.
                <br /> <br />I have training in{' '}
                <span className="bold">
                Javascript, Typescript, Node.js, Express.js, Sequelize, Apollo GraphQL, PostgreSQL, React, Redux, Next.js, HTML5, CSS3, Styled Components, TailwindCSS and Jest
                </span>
                .
              </p>
            ) : (
              <p>
                He trabajado años en ambiente donde es primordial el respeto y el
                cumplimiento de plazos, por lo que
                <span className="bold">
                  {' '}
                  prospero trabajando en equipo y estoy acostumbrado a trabajar bajo la
                  presión del tiempo.{' '}
                </span>
                Personalmente disfruto de aprender cosas nuevas y trabajar duro para
                resolver problemas lógicos. Veo cada desafío como una oportunidad para
                crecer.
                <br /> <br />
                Tengo conocimientos de{' '}
                <span className="bold">
                Javascript, Typescript, Node.js, Express.js, Sequelize, Apollo GraphQL, PostgreSQL, React, Redux, Next.js, HTML5, CSS3, Styled Components, TailwindCSS y Jest
                </span>
                .
              </p>
            )}
          </div>
          <h2 className="tags">{'</p>'}</h2>
        </div>
        <h2 className="tags">{'</section>'}</h2>
      </section>
      <hr />

      <section>
        <h2 className="tags">{'<section>'}</h2>

        <div className="indent">
          <Header tag="h1" title={language ? 'Projects' : 'Proyectos'} ref={projects} />
          <Slider
            screenImg="/images/tddgif.gif"
            title="ToDoList.tdd"
            ref={tddtdl}
            url="https://github.com/sebMar92/ToDoList.tdd"
            description={
              language
                ? `ToDoList.tdd is the first app I created using Test Driven Development (TDD). For this, I designed unit and integration tests for both the backend and the frontend, and then wrote the code that passes those tests. Since the goal of the project was to learn how to use testing libraries, the visual design is simple and inspired by the terminal interface. The main library used to create the tests is Jest`
                : 'ToDoList.tdd es mi primer aplicación creada utilizando la metodología de trabajo de desarrollo dirigido por tests (TDD en inglés). Para ello diseñé tests unitarios y de integración tanto para el backend como el frontend, para luego escribir el código que pase esos tests. Dado que el objetivo del proyecto fue aprender a usar librerías de testing, el diseño es sencillo e inspirado en la interface de la terminal. La librería principal utilizada para crear los tests es Jest'
            }
          />
          <hr className="short-line" />
          <Slider
            screenImg="/images/techgif.gif"
            celImg="/images/celtechgif.gif"
            title="TechStore"
            ref={tech}
            url="https://github.com/sebMar92/e-commerce-backend"
            description={
              language
                ? `TechStore is an e-commerce carried out in a group, under the SCRUM work methodology. In addition to the essential functions for searching and buying products, both users with and without a registered account can use the shopping cart and wishlist, it has its own login system and an extensive administration panel. It has integration with Google Auth as a sign up / log in alternative and with MercadoPago to handle payments. The main technologies used were Javascript, Node, Express, React, Redux and TailwindCSS`
                : 'TechStore es un e-commerce realizado en grupo, bajo la metodología de trabajo SCRUM. Además de las funciones escenciales para la búsqueda y compra de productos, tanto usuarios con y sin cuenta pueden utilizar el carro de compra y lista de favoritos, tiene un sistema propio de registro de cuentas y un extenso panel de administración. Cuenta con integración con Google Auth como alternativa de registro y con MercadoPago para manejar los pagos. Las tecnologías principales utilizadas fueron Javascript, Node, Express, React, Redux y TailwindCSS'
            }
          />
          <hr className="short-line" />
          <Slider
            screenImg="/images/dogsgif.gif"
            title="Dogs App"
            ref={dogs}
            url="https://github.com/sebMar92/Henry-PI-Dogs"
            description={
              language
                ? 'Dogs App is a SPA that receives information from an external API and displays it as a catalog. It also has its own database for the creation of dog breeds by users, and allows their filtering and ordering. Javascript, Node, Express, React, Redux and CSS were used to make it'
                : 'Dogs App es una aplicación de página única que recibe información de razas de perros desde una API externa y la exhibe en modo de catálogo. Tiene también una base de datos propia para la creación de razas por usuarios, y un sistema combinable de filtros y ordenamientos. Se utilizó Javascript, Node, Express, React, Redux y CSS para su creación'
            }
          />
          <hr className="short-line" />
          <Slider
            screenImg="/images/scrapgif.gif"
            title="WebScrap Api"
            ref={scrap}
            url="https://github.com/sebMar92/web-scrap-api"
            description={
              language
                ? 'This project consists of a small single-endpoint API that takes payroll information from the Chilean Internal Revenue Service page, and returns it in json format conveniently arranged. It was created using Javascript, Express and Puppeteer'
                : 'Este proyecto consiste en una pequeña API de un solo endpoint que toma la información de una nómina de la página del Servicio de Impuestos Internos de Chile, y la devuelve en formato json ordenada de forma conveniente. Fue creada usando Javascript, Express y Puppeteer'
            }
          />
        </div>
        <h2 className="tags">{'</section>'}</h2>
      </section>
      <hr />

      <section>
        <h2 className="tags">{'<section>'}</h2>
        <div className="indent">
          <Header tag="h1" title={language ? 'Contact me' : 'Contáctame'} ref={contact} />
          <div id="contact-container">
            <h2 className="tags">{'<p>'}</h2>
            {language ? (
              <p>
                I'm currently open to work, and there's nothing in web development I don't
                enjoy doing, so{' '}
                <span className="bold">
                  I'm interested both in Back End and Front End job positions.
                </span>
                <br />
                <br />
                If you wish to know more about me, or want to reach me about an open
                position,{' '}
                <span className="bold">
                  don't hesitate to contact me through any of these options!
                </span>
              </p>
            ) : (
              <p>
                Actualmente estoy abierto a trabajar, y no hay nada en el desarrollo web
                que no disfrute, por lo que{' '}
                <span className="bold">
                  estoy interesado en puestos de trabajo de Back End y Front End.
                </span>
                <br />
                <br />
                Si deseas saber más sobre mí, o querés comunicarte conmigo sobre un puesto
                vacante,{' '}
                <span className="bold">
                  no dudes en contactarme a través de cualquiera de estas opciones!
                </span>
              </p>
            )}
            <h2 className="tags">{'</p>'}</h2>
            <div id="icons-container">
              <a
                href={`https://www.linkedin.com/in/sebastian-martinez-developer${language ? "/?locale=en_US" : "/"}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  src="/images/linkedinicon-200.png"
                  alt="linkedin button"
                />
              </a>
              <a href="https://github.com/sebMar92" target="_blank" rel="noreferrer">
                <img
                  className="icon"
                  src="/images/githubicon-200.png"
                  alt="github button"
                />
              </a>
              <a href="mailto:sebmar92@gmail.com" target="_blank" rel="noreferrer">
                <img
                  className="icon"
                  src="/images/gmailicon-200.png"
                  alt="gmail button"
                />
              </a>
            </div>
          </div>
        </div>

        <h2 className="tags">{'</section>'}</h2>
      </section>
    </div>
  );
}
