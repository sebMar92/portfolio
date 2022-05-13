import React, { forwardRef, useEffect, useRef, useState } from 'react';
import Header from '../header/header.jsx';
import './slider.css';

const Slider = forwardRef(({ screenImg, title, description, celImg }, ref) => {
  const [active, setActive] = useState(false);
  const slide = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    if (slide) {
      const slideInAt =
        window.scrollY + window.innerHeight - slide.current.offsetHeight / 2;
      const imageBottom = slide.current.offsetTop + slide.current.offsetHeight;
      const isHalfShown = slideInAt > slide.current.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      isHalfShown && isNotScrolledPast ? setActive(true) : setActive(false);
    }
  };
  return (
    <div ref={ref}>
      <div ref={slide} className={`slider-wrapper`}>
        <div className="text-container">
          <Header tag="h2" title={title} classes="handwritten" />
          <h2 className="tags">{'<p>'}</h2>

          {description.split('. ').map((line) => {
            return (
              <p>
                {line}
                <br />
              </p>
            );
          })}
          <h2 className="tags">{'</p>'}</h2>
        </div>
        <div className={`moving-part ${active ? 'active' : 'inactive'}`}>
          <h2 className="tags">{'<img>'}</h2>
          <div className="screen-container">
            <img src={screenImg} className="content" alt="project-preview" />
            {celImg && (
              <img
                src={celImg}
                className="cellphone"
                alt="project-on-cellphone-preview"
              />
            )}
            <h2 className="tags">{'</img>'}</h2>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Slider;