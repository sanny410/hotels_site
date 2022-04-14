import React from "react";
import './header.css'


const Header = () => {
    return(
        <div className="app_header">
            <header className="header">
                <div className='header__logo'>
                    <img src={require("../../assets/icons/logotype.png")} className='logotype' alt="" />
                        </div>
                <ul className='header__menu'>
                        <li className="header__menu_item">
                            <a href="">О нас</a>
                        </li>
                        <li className="header__menu_item">
                        <a href="">Услуги <img src="../../assets/icons/strelka_vniz.png" alt=""/></a>
                        </li>
                        <li className="header__menu_item">
                            <a href="">Вакансии</a>
                        </li>
                        <li className="header__menu_item">
                            <a href="">Соглашения <img src="../../assets/icons/strelka_vniz.png" alt=""/></a>
                        </li>
                        <li className="header__menu_item">
                            <a href="">Новости</a>
                        </li>
                        <li className="header__menu_item" id="enter">
                            <input type="button" value="Войти" className='button_enter' />
                        </li>
                        <li className="header__menu_btn" id="sign_up">
                            <input type="button" value="Зарегистрироваться" className='button_signUp' />
                        </li>
                    </ul>
            </header>
        </div>
    )
}

export default Header
