import React from 'react';
import './selector.css';

export default function Selector({ language, setLanguage }) {
  return (
    <div id="selector-container">
      <div
        className={`option ${language ? 'selected' : 'unselected'}`}
        onClick={() => setLanguage(true)}
      >
        {language ? 'English' : 'ENG'}
      </div>
      <div
        className={`option ${language ? 'unselected' : 'selected'}`}
        onClick={() => setLanguage(false)}
      >
        {language ? 'ESP' : 'Español'}
      </div>
    </div>
  );
}
