import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import { staggerText, staggerReveal, fadeInUp, handleHover, handleHoverExit, handleWokrReturn, handleWokr, staggerRevealClose } from "./Animations";

const pages = [
  { name: "Social Network", image: "assets/img.webp", link: "https://aleksandrovfe.github.io/socialnetwork/#/socialnetwork/profile" },
  { name: "Presentation Page", image: "assets/img4.webp", link: "https://aleksandrovfe.github.io/pattern/" },
  { name: "Phone Catalog", image: "assets/img3.webp", link: "https://aleksandrovfe.github.io/react_phone-catalog/#/" },
  { name: "Todo App", image: "assets/img2.webp", link: "https://aleksandrovfe.github.io/react_todo-app/#/" },
];

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let workBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div ref={(el) => (reveal1 = el)} className="menu-secondary-background-color"></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div ref={(el) => (workBackground = el)} className="menu-work-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)} ref={(el) => (line1 = el)} to="/About-me">
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)} ref={(el) => (line2 = el)} to="/Skills">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)} ref={(el) => (line3 = el)} to="/Contact-me">
                      Contact me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <p>
                  I aim to improve my skills in web-developing as well as to learn new frameworks, IT languages, and approaches. New interesting
                  tasks, which push me to increase my level, motivate me a lot and inspire to complete new more difficult ones.
                </p>
              </div>
              <div className="list-links">
                My works:
                {pages.map((el) => (
                  <a
                    href={el.link}
                    className="link-to-work"
                    key={el.name}
                    onMouseEnter={() => handleWokr(el.image, workBackground)}
                    onMouseOut={() => handleWokrReturn(workBackground)}
                  >
                    {el.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
