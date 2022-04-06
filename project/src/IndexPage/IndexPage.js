import '../CommonStyles/CommonStyles.css';
import './IndexPage.css'
import PlaceMap from "../PlaceMap/PlaceMap";
import {useState} from "react";


function IndexPage(){

    const comments = [
        {
            "name": "Николай Петров",
            "age": "25 лет",
            "profession" : "водитель трамвая",
            "text":"«Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи! А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии!»"
        },
        {
            "name": "Соколов Иван",
            "age": "35 лет",
            "profession" : "ведущий специалист",
            "text": "«А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии! Потрясающе!»"
        },
        {
            "name": "Сидельников Кирилл",
            "age": "30 лет",
            "profession" : "предприниматель",
            "text": "«Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи!Невероятно!»"
        }
    ]


    const service =[
        {
            "nameTarif": "база",
            "price":  "1.99 USD",
            "img_first" : "./images/yes.svg",
            "img_second": "./images/no.svg",
            "img_third" : "./images/no.svg"

        },
        {
            "nameTarif": "cтандарт",
            "price":  "3.99 USD",
            "img_first" : "./images/yes.svg",
            "img_second": "./images/yes.svg",
            "img_third" : "./images/no.svg"

        },
        {
            "nameTarif": "анлим",
            "price":  "7.99 USD",
            "img_first" : "./images/yes.svg",
            "img_second": "./images/yes.svg",
            "img_third" : "./images/yes.svg"

        },
    ]


    const[commentText, setCommentText] = useState(0)

    const[imgCheck, setImageCheck] = useState(0)

        let indexElem = commentText;
        slideElem(indexElem);

        function showInfo(n){
            slideElem(indexElem += n);
            setCommentText(indexElem);
        }

        function slideElem(n) {
            if (n > comments.length - 1){
                n = 0;
            }
            if (n < 0) {
                n = comments.length - 1;
            }
            indexElem = n;
            return indexElem;
        }

         function currentDot(n){
            slideElem(indexElem = n);
             setCommentText(indexElem);
        }


        function checkSlider(number){
            setImageCheck(number)
         }



    return(
        <div>
            <main>
                <section className="hero" >
                    <div className="container hero__container">
                        <div className="hero__wrapper" style={{paddingBottom: '0'
                        }}>
                            <h1 className="title hero__title hero__title_mobile">Взгляните на жизнь иначе!</h1>
                            <div className="hero__image">
                                <picture>
                                    <source media="(max-width: 580px)" srcSet="/images/HandPhone660.png"/>
                                    <source media="(min-width: 320px)" srcSet="/images/Frame4.png"/>
                                    <img src="/images/Frame4.png" alt="Рука с Iphone"/>
                                </picture>
                            </div>
                            <div className="hero__content">
                                <h2 className="title hero__title ">Взгляните на жизнь иначе!</h2>
                                <button className="button hero__button">Скачать приложение</button>
                                <div className="hero__os flex">
                                    <span><img src="/images/apple-logo.svg" alt="Apple"/></span>
                                    <span><img src="/images/android-logo.svg" alt="Android"/></span>
                                    <span><img src="/images/microsoft-logo.svg" alt="Windows"/></span>
                                </div>
                                <p className="hero__describe text-light">
                                    Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="apps">
                    <div className="container apps__container">
                        <h2 className="title apps__title"><span className="title__span-mobile title">Устали от серости мегаполиса?</span> Нам
                            есть, что вам предложить!</h2>
                        <div className="apps__wrapper flex">
                            <div className="apps__images flex">
                                <div className="apps__img"><img src="/images/appsElem1.png" alt="Мобильный телефон с черно-белым экраном"/></div>
                                <div className="apps__img"><img src="/images/appsElem2.png" alt="Мобильный телефон с крачным экраном"/></div>
                                <div className="apps__img">
                                    <img src="./images/appsElem3.png" alt="Iphone с смайлом"/>
                                </div>
                            </div>
                            <div className="apps__describe flex">
                                <div className="apps__describe__item flex">
                                    <p className="title apps__describe__title title_bold ">Поднимает
                                        настроение</p>
                                    <p className="apps__describe__text">Приложение позволит вам победить осеннюю хандру
                                        и депрессию буквально в несколько кликов!</p>
                                </div>
                                <div className="apps__describe__item">
                                    <p className="title apps__describe__title title_bold ">Меняет мир вокруг</p>
                                    <p className="apps__describe__text">Сделайте снимок и украсьте его смайликом или
                                        текстовой подписью, чтобы усилить эффект
                                    </p>
                                </div>
                                <div className="apps__describe__item">
                                    <p className="title title_bold apps__describe__title">Заводит новых друзей</p>
                                    <p className="apps__describe__text">Ставьте лайки, комментируйте, делитесь
                                        фотографиями с друзьями
                                        и заводите новых</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="timer">
                    <div className="container timer__container">
                        <div className="timer__effect flex">
                            <div className="timer__effect__img">
                                <img src="/images/timer.svg" alt="Таймер"/>
                            </div>
                            <div className="timer__effect__content flex">
                                <h3 className="title timer__effect__title title_bold ">Эффект на 24 часа!</h3>
                                <p className="timer__effect__text">Британские ученые провели исследования и доказали,
                                    что положительный эффект от использования приложения длится целые сутки!</p>
                                <p className="timer__effect__text timer__effect__text_details">
                                    <a className="timer__effect__link link text-color" href="foo" target="_blank"
                                    rel="noopener noreferrer">Узнать больше об исследовании</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="comments">
                    <div className="container comments__container">
                        <div className="comments__info flex">
                            <p className="quotes"><img src="/images/quotes.svg" alt="кавычки"/></p>
                            <p className="comments__text">{comments[commentText].text}</p>
                            <div className="comments__author">
                                <p className="comments__author__name bold">{comments[commentText].name}</p>
                                <p className="comments__author__info">{comments[commentText].age + ', ' + comments[commentText].profession}</p>
                            </div>
                            <div className="dots comments__dots">
                                <span className="dot comments__dot"  onClick={(event) => currentDot(0)}/>
                                <span className="dot comments__dot" onClick={(event) => currentDot(1)}/>
                                <span className="dot comments__dot" onClick={(event) => currentDot(2)}/>
                            </div>
                            <button className="comments__arrow comments__arrow_next" type="button" onClick={() => showInfo(1)}/>
                            <button className="comments__arrow comments__arrow_prev" type="button" onClick={() => showInfo(-1)}/>
                        </div>
                    </div>
                </div>
                <div className="service">
                    <div className="container service__container">
                        <div className="service__package__mobile">
                            <div className="service__cell service__cell_th  flex">
                                <p className="service__cell__tarif service__cell__tarif__mobile">{service[imgCheck].nameTarif}</p>
                                <p className="service__cell__price service__cell__price__mobile">{service[imgCheck].price}</p>
                            </div>
                            <div className="service__cell__box flex">
                                <div className="service__cell service__cell_tr service__cell_tr_mobile flex">
                                    <p className="service__cell__name service__cell__name_mobile ">Розовый фильтр</p>
                                    <p className="service__cell__name service__cell__name_mobile ">Смайлики</p>
                                    <p className="service__cell__name service__cell__name_mobile ">Комментарии</p>
                                </div>
                                <div className="service__cell service__cell_tr service__cell_tr_mobile flex">
                                    <div className="service__cell__check">
                                        <img className="service__img__mobile" src={service[imgCheck].img_first} alt="да"/>
                                    </div>
                                    <div className="service__cell__check">
                                        <img className="service__img__mobile" src={service[imgCheck].img_second} alt="да"/>
                                    </div>
                                    <div className="service__cell__check">
                                        <img className="service__img__mobile" src={service[imgCheck].img_third} alt="нет"/>
                                    </div>
                                </div>
                            </div>
                            <div className="dots service__dots">
                                <span className="dot service__dot" data-number="0"  onClick={(event)=> checkSlider(event.target.dataset.number)}/>
                                <span className="dot service__dot" data-number="1" onClick={(event)=> checkSlider(event.target.dataset.number)}/>
                                <span className="dot service__dot"   data-number="2" onClick={(event)=>  checkSlider(event.target.dataset.number)}/>
                            </div>
                        </div>
                        <div className="service__package">
                            <div className="service__cell service__cell_empty"></div>
                            <div className="service__cell service__cell_th flex">
                                <p className="service__cell__tarif">база</p>
                                <p className="service__cell__price">1,99 USD</p>
                            </div>
                            <div className="service__cell  service__cell_hit service__cell_th flex">
                                <p className="service__cell__tarif">стандарт</p>
                                <p className="service__cell__price">3,99 USD</p>
                            </div>
                            <div className="service__cell service__cell_th flex">
                                <p className="service__cell__tarif">анлим</p>
                                <p className="service__cell__price">9,99 USD</p>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <p className="service__cell__name ">Розовый фильтр</p>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_plus-left"></span>
                                <span className="service__cell__sign service__cell__sign_plus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_plus-left"></span>
                                <span className="service__cell__sign service__cell__sign_plus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_plus-left"></span>
                                <span className="service__cell__sign service__cell__sign_plus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <p className="service__cell__name ">Смайлики</p>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_minus-left"></span>
                                <span className="service__cell__sign service__cell__sign_minus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_plus-left"></span>
                                <span className="service__cell__sign service__cell__sign_plus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_plus-left"></span>
                                <span className="service__cell__sign service__cell__sign_plus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <p className="service__cell__name ">Комментарии</p>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_minus-left"></span>
                                <span className="service__cell__sign service__cell__sign_minus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_minus-left"></span>
                                <span className="service__cell__sign service__cell__sign_minus-right"></span>
                            </div>
                            <div className="service__cell service__cell_tr flex">
                                <span className="service__cell__sign service__cell__sign_plus-left"></span>
                                <span className="service__cell__sign service__cell__sign_plus-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="contact-details">
                    <div className="container contact-details__container">
                        <div className="contact-details__wrapper">
                            <h2 className="title contact-details__title">
                                Остались вопросы?Свяжитесь с нами!</h2>
                            <div className="contact-details__info flex">
                                <div className="contact-details__item contact-details__phone">
                                    <p className="contact-details__phone__caption bold">Звоните:</p>
                                    <p className="contact-details__phone__number"><a className="contact-details__link link text-color"
                                                                              href="tel:+7812556666">+7 (812)
                                        555-66-66</a></p>
                                </div>
                                <div className="contact-details__item contact-details__location">
                                    <p className="contact-details__location__caption bold">Приезжайте в гости:</p>
                                    <address className="contact-details__location__address"><a
                                        className="contact-details__link contact-details__link_address link text-color"
                                        href="https://yandex.ru/maps/2/saint-petersburg/house/bolshaya_konyushennaya_ulitsa_19_8/Z0kYdQVjSEQPQFtjfXVyeXpgYQ==/?ll=30.323117%2C59.938635&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=17">ул. Большая Конюшенная, 19/8</a></address>
                                </div>
                                <div className="contact-details__item contact-details__email">
                                    <p className="contact-details__email__caption bold">Пишите:</p>
                                    <p className="contact-details__email__address"><a
                                        className="contact-details__link link text-color"
                                        href="mailto:mail@htmlacademy.ru?subject=Вопрос" target="_blank"
                                        rel="noopener noreferrer">mail@htmlacademy.ru</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PlaceMap/>
                </section>
            </main>
        </div>
    );
}

export default IndexPage;