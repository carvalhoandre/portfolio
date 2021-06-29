import React, { Component } from 'react'
import './styles.css'

import { getTheme, setTheme } from '../../services/theme'

const initialState = {
    nav: false,
    theme: getTheme()
}

export default class Header extends Component {

    state = {
        ...initialState
    }

    render() {
        return (
            <>
                {this.state.nav === true ? (
                    <header className="header" id="header">
                        <nav className="nav container">

                            <div className={`nav_menu ${this.state.nav === true ? 'show-menu' : ''}`} id="nav-menu">
                                <ul className="nav_list grid" onClick={() => this.setState({ nav: false })}>
                                    <li className="nav_item">
                                        <a href="#home" className="nav_link">
                                            <i className={`uil uil-estate nav_icon`} />
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#about" className="nav_link">
                                            <i className={`uil uil-user nav_icon`} />
                                            About
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#skills" className="nav_link">
                                            <i className={`uil uil-file-alt nav_icon`} />
                                            Skills
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#services" className="nav_link">
                                            <i className={`uil uil-bag nav_icon`} />
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#portfolio" className="nav_link">
                                            <i className={`uil uil-scenery nav_icon`} />
                                            Portfolio
                                        </a>
                                    </li>
                                    <li className="nav_item">
                                        <a href="#contactme" className="nav_link">
                                            <i className={`uil uil-message nav_icon`} />
                                            Contactme
                                        </a>
                                    </li>
                                </ul>
                                <div onClick={() => this.setState({ nav: false })}>
                                    <i className="uil uil-times nav_close nav_icon" id="nav-close" />
                                </div>
                            </div>
                        </nav>
                    </header>
                ) : (
                    <header className="header" id="header">
                        <nav className="nav container">
                            <div className={`nav_header ${this.state.nav === true ? 'close-menu' : 'show-menu'}`} id="nav-menu">
                                <a href="/" className="nav_logo">André</a>
                                <div className="nav_btns">
                                    {/* theme change button */}
                                    <i
                                        className={`change-theme uil uil-${this.state.theme === 'dark' ? 'sun' : 'sun'}`} 
                                        id="theme-button"
                                        onClick={(() => {
                                            this.state.theme === 'dark' ? setTheme('light') : setTheme('dark')
                                            window.location.reload();
                                        })}
                                    />
                                    <div className="nav_toggle nav_icon" id="nav-toggle">
                                        <i 
                                            className="uil uil-apps" 
                                            onClick={() => this.setState({ nav: true })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                )}
            </>
        )
    }
}