import React, { Component } from "react";
import "./styles.css";

const initialState = {
  moreOne: false,
  moreTwo: false,
  moreThree: false,
};

export default class Services extends Component {
  state = {
    ...initialState,
  };

  render() {
    return (
      <section className="services section" id="services" aria-labelledby="label-services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>

        <ul className="services_container container grid">
          {/* services one */}
          <li className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon" />
              <h3 className="services_title">
                Ui/Ux <br /> Designer
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services_button"
              onClick={() => {
                this.state.moreOne === true
                  ? this.setState({ moreOne: false })
                  : this.setState({ moreOne: true });
              }}
            >
              View More
              <i className="uil uil-arrow-right button_icon" />
            </span>

            <div
              className={`services_modal ${
                this.state.moreOne === true ? "active-modal" : ""
              }`}
            >
              <div className="services_modal-content">
                <h4 className="services_modal-title">
                  Ui/Ux <br /> Designer
                </h4>
                <i
                  className="uil uil-times services_modal-close"
                  onClick={() => {
                    this.state.moreOne === true
                      ? this.setState({ moreOne: false })
                      : this.setState({ moreOne: true });
                  }}
                />
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon" />
                    <p>I develop the user interface.</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon" />
                    <p>Creating Designs.</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon" />
                    <p>I create ux element interactions.</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* services two */}
          <li className="services_content">
            <div>
              <i className="uil uil-arrow services_icon" />
              <h3 className="services_title">
                Frontend <br /> Developer
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services_button"
              onClick={() => {
                this.state.moreTwo === true
                  ? this.setState({ moreTwo: false })
                  : this.setState({ moreTwo: true });
              }}
            >
              View More
              <i className="uil uil-arrow-right button_icon" />
            </span>

            <div
              className={`services_modal ${
                this.state.moreTwo === true ? "active-modal" : ""
              }`}
            >
              <div className="services_modal-content">
                <h4 className="services_modal-title">
                  Frontend <br /> Developer
                </h4>
                <i
                  className="uil uil-times services_modal-close"
                  onClick={() => {
                    this.state.moreTwo === true
                      ? this.setState({ moreTwo: false })
                      : this.setState({ moreTwo: true });
                  }}
                />

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon" />
                    <p>Apps for Android and IOS.</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon" />
                    <p>Web page development.</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon" />
                    <p>Models business.</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
