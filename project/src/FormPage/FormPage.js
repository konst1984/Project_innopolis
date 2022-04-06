import './FormPage.css'
import FormCheck from "./FormCheck";
import {useEffect} from "react";
import ModalWindows from "./ModalWindows";
import FormRadio from "./FormRadio";


function FormPage() {

    // const [color, setColor] = useState('#E5E5E5');
    // function colorMistake(){
    //     setColor('red')
    // }

    // const [userName, setUserName]=useState('');
    //  function inputName(e){
    //      setUserName(e.target.value);
    //      e.preventDefault()
    //  }
    //
    // const [userSurname, setUserSurname]=useState('');
    // function inputSurname(e){
    //     setUserSurname(e.target.value);
    //     e.preventDefault()
    // }
    //
    // const [userEmail, setUserEmail]=useState('');
    // function inputEmail(e){
    //     setUserEmail(e.target.value);
    //     e.preventDefault()
    // }
    //
    //
    //
    // // console.log( valid(userName));
    //
    // function valid (elem){
    //     if(!elem) {
    //         setColor('red');
    //     }
    //     else if (!String(elem)){
    //         setColor('red');
    //     }
    //     else {
    //         setColor('#E5E5E5');
    //     }
    // }
    // function validateEmail(email) {
    //     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(email);
    // }


    // let validName = valid(userName);
    // let validSurname = valid(userSurname);
    //
    // function outInfo() {
    //     if (!userEmail) {
    //         setColor('red');
    //
    //     } else if (!validateEmail(userEmail)) {
    //         setColor('red');
    //     } else {
    //         setColor('#E5E5E5');
    //
    //     }
    // }
    //
    // const [modalAlertWindow,setModalAlertWindow] = useState('none');
    // function showWindow(){
    //     setModalAlertWindow('flex')
    // }
    //
    // const [modalSubmitWindow,setModalSubmitWindow] = useState('none');
    // function showWindow(){
    //     setModalSubmitWindow('flex')
    // }
    //
    // let trueForm = function validForm(){
    //     function outInfo() {
    //         if (!userEmail) {
    //             setColor('red');
    //             return false
    //
    //         } else if (!validateEmail(userEmail)) {
    //             setColor('red');
    //             return false
    //         } else {
    //             setColor('#E5E5E5');
    //             return true
    //
    //         }
    //     }

        // valid(userSurname);
        // validEmail();
        // if( valid(userName) &&  valid(userSurname) && validEmail){
        //     setModalSubmitWindow('flex')
        //     setColor('#E5E5E5')
        // }
        // else  setModalAlertWindow('flex')
        //         setColor('red')

    // }

    useEffect(() => {



        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        let nameUserInput = document.getElementById('name');

        let surnameUserInput = document.getElementById('surname');

        let emailUserInput = document.getElementById('email');

        let modalWindowAlert = document.querySelector('.modal__window_alert');

        let modalWindowSubmit = document.querySelector('.modal__window_submit');

        let submitButtonForm = document.querySelector('.submit__input');


        submitButtonForm.addEventListener('click', outInfo);


        function valid (elem){
            if(!elem.value) {
                showMistake(elem);
            }
            else if (!String(elem.value)){
                showMistake(elem);
            }
            else {
                elem.style.borderColor = '#E5E5E5';
            }
        }

        function showMistake(item){
            item.style.borderColor ="red";
        }


        function outInfo(event) {

            if (!emailUserInput.value) {

                showMistake(emailUserInput);
            }
            else if (!validateEmail(emailUserInput.value)) {

                showMistake(emailUserInput);
            }
            else{
                emailUserInput.style.borderColor = '#E5E5E5';
            }

            valid(nameUserInput);
            valid(surnameUserInput);

            if(surnameUserInput.value && emailUserInput.value &&  nameUserInput.value ){

                modalWindowSubmit.style.display = "flex";
            }
            else {

                modalWindowAlert.style.display = "flex";

                submitButtonForm.disabled = true;
            }

            event.preventDefault();
        }



        document.querySelector('.modal__btn_submit').addEventListener('click', ()=>{

            modalWindowSubmit.style.display = "none";

        })

        document.querySelector('.modal__btn_alert').addEventListener('click', ()=>{
            modalWindowAlert.style.display = "none";
            submitButtonForm.disabled = false

        })


},[])



    return (
        <div>
            <main>
                <section className="hero">
                    <div className="container hero__container">
                        <ModalWindows name='modal__window modal__window_alert' title='Что-то пошло
                                не так!' text='Проверьте поля, выделенные
                                красным, скорее всего вы забыли
                                их заполнить' textButton='ок' clsBoxBtn='button__box button__box__alert'
                                      clsBtn='modal__btn modal__btn_alert'/>
                        <ModalWindows name='modal__window modal__window_submit' title='Ваша заявка
                                отправлена' text='Спасибо за ваше участие, ваша
                                заявка уже поступила к нам. В
                                ближайшее время мы рассмотрим
                                ее и оповестим вас' textButton='Зыкрыть окно' clsBoxBtn='button__box button__box__close'
                        clsBtn='modal__btn modal__btn_submit'/>
                        <div className="hero-wrapper">
                            <h1 className="title hero__caption " style={{  width: 'fit-content',
                                color: '#ffffff'
                            }}>Конкурс на самое безбашенное путешествие с Пинк</h1>
                        </div>
                    </div>
                </section>
                <section className="section-main">
                    <div className="container main-section__container ">
                        <h2 className="section-main__title">Поделитесь своей историей и получите шанс выиграть ценный
                            приз — 1000 миль на вашу бонусную карту! Пожалуйста, заполните форму ниже:</h2>
                        <form className="form flex" action="#" method="post" id="main-form">
                            <div className="intro flex">
                                <div className="intro__present flex">
                                    <div className="intro__present__box flex">
                                        <label className="label intro__present__label text-color text-uppercase"
                                               htmlFor="surname">фамилия:</label>
                                        <input className="input intro__present__input" id="surname" type="text"
                                               placeholder="Укажите фамилию *" required />
                                    </div>
                                    <div className="intro__present__box flex">
                                        <label className="label intro__present__label  text-color text-uppercase"
                                               htmlFor="name">имя:</label>
                                        <input className="input intro__present__input" id="name"
                                               placeholder="Введите ваше имя *" type="text" required />
                                    </div>
                                    <div className="intro__present__box flex">
                                        <label className="label intro__present__label text-color text-uppercase"
                                               htmlFor="lastname">отчество:</label>
                                        <input className="input intro__present__input" id="lastname" type="text"
                                               placeholder="Ну и отчество тоже"/>
                                    </div>
                                </div>
                                <div className="intro__systems border">
                                    <div
                                        className="legend legend_absolute intro__systems__legend text-color text-uppercase">С
                                        каким приложением путешествовали?
                                    </div>
                                    <div className="intro__systems__wrapper flex">
                                        <FormRadio value={'iOS'} id={'radio__ios'} checked={'checked'} />
                                        <FormRadio value={'Android'} id={'radio__android'} />
                                        <FormRadio value={'Windows'} id={'radio__windows'} />
                                    </div>
                                </div>
                            </div>
                            <div className="contacts border">
                                <div
                                    className="legend legend_absolute contacts__legend text-color text-uppercase">контактная
                                    информация
                                </div>
                                <div className="contacts__info flex">
                                    <div className="contacts__info__box flex">
                                        <input className="input contacts__input contacts__input_phone" id="phone"
                                               type="text" placeholder="Номер, пожалуйста"/>
                                            <label className="label contacts__label text-color text-uppercase"
                                                   htmlFor="input__phone">Номер телефона</label>
                                    </div>
                                    <div className="contacts__info__box flex">
                                        <input className="input contacts__input contacts__input_email" id="email"
                                               type="text" placeholder="Введите почту *" required />
                                            <label className="label contacts__label text-color text-uppercase"
                                                   htmlFor="input__email">Адрес почты</label>
                                    </div>
                                </div>
                            </div>
                            <div className="record border">
                                <div className="legend legend_absolute record__legend text-color text-uppercase">Ваши
                                    безбашенные достижения в путешествии
                                </div>
                                <div className="record__info">
                                    <FormCheck record={'Сделал селфи с акулой'}/>
                                    <FormCheck record={'Видел Чака Норриса'}/>
                                    <FormCheck record={'Удержал башню'}/>
                                    <FormCheck record={'Обгорел на пляже'}/>
                                    <FormCheck record={'Накупил сувениров'}/>
                                    <FormCheck record={'Разгромил отель'}/>
                                </div>
                            </div>
                            <div className="story">
                                <div className="story__info border">
                                    <div
                                        className="legend legend_absolute story__legend text-color text-uppercase">опишите
                                        свои эмоции
                                    </div>
                                    <textarea className="textarea" name="feeling" form="main-form" id=""
    placeholder="Можно прям в красках, не стесняясь в выражениях"/>
                                </div>
                            </div>
                            <div className="submit">
                                <div className="submit__box flex">
                                    <input className="input submit__input" type="button" value="Отправить форму" />
                                        <p className="submit__footnote text-uppercase"><span
                                            className="span-red">{'\u26B9'}</span> — обязательные <span
                                            className="span-hidden">для заполнения</span> поля</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default FormPage;
