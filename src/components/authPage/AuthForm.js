import React from "react";
import './authPage.scss'


const AuthForm = () => {
    return(
        <div className="auth-form">
            <form className='search'>
                <h2> Найдём номера под ваши пожелания</h2>
                <div className="search_content">
                    <div className='date'>
                        <div><label>Прибытие <br />
                            <input type='date' id='start'/>
                        </label>
                        </div>
                        <div>
                        <label>Выезд <br />
                            <input type="date" id='end'/>
                        </label>
                        </div>
                    </div>
                    <div className="guests">
                        <label>Гости <br />
                            <select id='guests' name='guests'>
                                <option>Сколько гостей</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </label></div>
                    <button value="Подобрать номер" id='number'>Подобрать номер
                        <img src={require('../../assets/icons/strelka_vpravo.png')} alt="" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm