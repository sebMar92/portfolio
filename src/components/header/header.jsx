import React, { forwardRef } from 'react';
import './header.css';
const Header = forwardRef(({ tag, title, classes }, ref) => {
  return (
    <div className="header-container" ref={ref}>
      <div className="h1-container">
        <h1 className="tags">{`<${tag}>`}</h1>
        <h1 className={`header ${classes}`}>{title}</h1>
        <h1 className="tags">{`</${tag}>`}</h1>
      </div>
    </div>
  );
});
export default Header;
