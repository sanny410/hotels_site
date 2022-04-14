import React from "react";
import './header.css'

const Footer = () => {
    return(
        <div className="app_footer">
            <footer>
                <div className='footer_box_logo'>
                    <img src={require("../../assets/icons/logotype.png")} className='logotype' alt="" />
                    <p>Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»</p>
                </div>
                <div className='footer_box_col'>
                    <a href=""><b>Навигация</b></a>
                    <a href="">О нас</a>
                    <a href="">Новости</a>
                    <a href="">Служба поддержки</a>
                    <a href="">Услуги</a>
                </div>
                <div className='footer_box_col'>
                    <a href=""><b>О нас</b></a>
                    <a href="">О сервисе</a>
                    <a href="">Наша команда</a>
                    <a href="">Вакансии</a>
                    <a href="">Инвесторы</a>
                </div>
                <div className='footer_box_col'>
                    <a href=""><b>Служба поддержки</b></a>
                    <a href="">Соглашения</a>
                    <a href="">Сообщества</a>
                    <a href="">Связь с нами</a>
                </div>
                <div className='footer_box_col'>
                    <a href=""><b>Подписка</b></a>
                    <p>Получайте специальные предложения и новости сервиса</p>
                    <input type='email' defaultValue='Email' />
                </div>
            </footer>
            <div className='copyright'>
                <p id='copyright'>Copyright © 2021 Toxin отель. Все права зачищены.</p>
                <img className='icon' src="../../assets/icons/inst.png" alt="" />
                <img className='icon' src="../../assets/icons/facebook.png" alt="" />
                <img className='icon' src="../../assets/icons/twiter.png" alt="" />
            </div>
        </div>
    )
}

export default Footer