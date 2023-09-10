import React from "react";
import FooterList from "../list/FooterList";

const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul>
              <li>
                <span>Address</span>
                <p>
                  Suite 1506, ERAGON Building, 256 Fifth Avenue, CA 92006,
                  United States
                </p>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:34622063782">+34 (622) 06-37-82</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:info@icymediagency.es">
                  info@icymediagency.es
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;