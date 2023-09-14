import React from 'react'
import logo from './Vector.svg'
import hamburger from './Group3.svg'
import x from './Group.svg'
function Header() {
  return (
    <div>
        <header className="header">
<div className="container header__container">
    <a href="./index.html" className="header__logo">
        <img src={logo} alt="header__logo"/>
    </a>
    <button className="header__open">
        <img src={hamburger} alt=""/>
    </button>


    <nav className="nav active">
        <button className="header__close">
            <img src={x} alt=""/>
        </button>
        <ul className="nav__list">
            <li className="nav__item">
                <a href="#" className="nav__link">
                    Home
                </a>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">
                    About
                </a>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">
                    Offers
                </a>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">
                    Services
                </a>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link active">
                    How can we help you?
                </a>
            </li>
        </ul>
    </nav>
</div>
</header>
    </div>
  )
}

export default Header