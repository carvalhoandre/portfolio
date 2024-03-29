/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import Bikcraft from "../../assets/portfolio/bikcraft.svg";
import Store from "../../assets/portfolio/store.svg";
import Countries from "../../assets/portfolio/countries.svg";

import "./styles.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

export default class Portfolio extends Component {
  render() {
    return (
      <section
        className="portfolio section"
        id="portfolio"
        aria-labelledby="label-portfolio"
      >
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent work</span>

        <div className="portfolio_container container">
          <div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              className="mySwiper"
              autoplay={{
                delay: 5000,
              }}
            >
              {/* Portfolio one */}
              <SwiperSlide>
                <div className="portfolio_content grid">
                  <img
                    src={Store}
                    alt="portfolio_image"
                    className="portfolio_img"
                  />

                  <div className="portfolio_data">
                    <h3 className="portfolio_title">ac Store</h3>
                    <p className="portfolio_description">
                      Discover modern watches blending style and function.
                    </p>
                    <a
                      href="https://acstore.netlify.app/"
                      className="button button--flex button--samll portfolio_button"
                      target="_blank"
                    >
                      Go!
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Portfolio two */}
              <SwiperSlide>
                <div className="portfolio_content grid">
                  <img
                    src={Bikcraft}
                    alt="portfolio_image"
                    className="portfolio_img"
                  />

                  <div className="portfolio_data">
                    <h3 className="portfolio_title">ac Bikcraft</h3>
                    <p className="portfolio_description">
                      Passionate team crafting unique bicycles for exceptional
                      experiences.
                    </p>
                    <a
                      href="https://acbikcraft.netlify.app/"
                      className="button button--flex button--samll portfolio_button"
                      target="_blank"
                    >
                      Go!
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Portfolio three */}
              <SwiperSlide>
                <div className="portfolio_content grid">
                  <img
                    src={Countries}
                    alt="portfolio_image"
                    className="portfolio_img"
                  />

                  <div className="portfolio_data">
                    <h3 className="portfolio_title">ac Countries</h3>
                    <p className="portfolio_description">
                      Querying and presenting information about countries using
                      the RestCountries API.
                    </p>
                    <a
                      href="https://accountries.netlify.app/"
                      className="button button--flex button--samll portfolio_button"
                      target="_blank"
                    >
                      Go!
                      <i className="uil uil-arrow-right button_icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="coming">
            <p className="portfolio_description">
              Coming soon apps demo on Play Store and App Store
            </p>
            <div className="coming_icons">
              <i className="uil uil-google-play coming_icon" />
              <i className="uil uil-apple-alt coming_icon" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
