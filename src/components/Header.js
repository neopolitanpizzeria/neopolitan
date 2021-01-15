import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="mobile-burger">
                        <div id="hamburger" className="hamburglar is-closed">
                            <div className="burger-icon">
                                <div className="burger-container">
                                    <span className="burger-bun-top"></span>
                                    <span className="burger-filling"></span>
                                    <span className="burger-bun-bot"></span>
                                </div>
                            </div>

                            <div className="burger-ring">
                                <svg className="svg-ring">
                                    <path
                                        className="path"
                                        fill="none"
                                        stroke="#fff"
                                        stroke-miterlimit="10"
                                        stroke-width="4"
                                        d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
                                    />
                                </svg>
                            </div>
                            {/* <!-- the masked path that animates the fill to the ring --> */}

                            <svg width="0" height="0">
                                <mask id="mask">
                                    <path
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="#ff0000"
                                        stroke-miterlimit="10"
                                        stroke-width="4"
                                        d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
                                    />
                                </mask>
                            </svg>
                            <div className="path-burger">
                                <div className="animate-path">
                                    <div className="path-rotation"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-nav">
                        <ul className="mbl-nav-wrapper">
                            <li><a href="#about">אודות</a></li>
                            <li><a href="#menu">תפריט</a></li>
                            <li><a href="#gallery">גלריה</a></li>
                            <li><a href="#contact">צור קשר</a></li>
                        </ul>
                    </div>

                    <ul className="nav-wrapper">
                        <li><a href="#">עמוד הבית</a></li>
                        <li><a href="#about">אודות</a></li>
                        <li><a href="#menu">תפריט</a></li>
                        <li><a href="#gallery">גלריה</a></li>
                        <li><a href="#contact">צור קשר</a></li>
                    </ul>
                    <a href="#" className="logo"> </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
