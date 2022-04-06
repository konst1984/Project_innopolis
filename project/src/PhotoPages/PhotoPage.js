import {useEffect} from "react";
import './PhotoPage.css';
import CounterLikes from "./CounterLikes";

function PhotoPage () {



    useEffect( () =>{



    let toolDesktop = document.getElementsByClassName('upload__tools__input__line');

    toolDesktop=[...toolDesktop];
    
    let uploadImg = document.querySelector('.upload__image img');


    for(let i=0; i < toolDesktop.length;i++){

        toolDesktop[i].addEventListener('change', () => {
            if(i === 0){
                uploadImg.width= toolDesktop[i].value;

                uploadImg.height= toolDesktop[i].value * 1.7;
            }
            if ( i === 1){
                uploadImg.style.filter=`contrast(${toolDesktop[i].value})`;
            }
            if (i === 2){
                uploadImg.style.filter=`hue-rotate(${toolDesktop[i].value}deg)`
            }
        })
    }


    // const toolsIcon = document.getElementsByClassName('upload__tools__item__icon');



    let inputIconMobile = document.getElementsByClassName('input-mobile');

    let  upToolsWrap = document.getElementsByClassName('upload__tools__wrapper');

    inputIconMobile=[...inputIconMobile];


        let inputRangeMobile = document.getElementsByClassName('upload__tools__input__line');

        window.addEventListener('resize',() => resize())

        function disabledTools(){
            resetStyle();
            for(let i = 0; i < upToolsWrap.length;i++ ){
                inputRangeMobile[i].disabled = true
                upToolsWrap[i].style.display= "none";
                upToolsWrap[0].style.display= "block";
            }
        }

        function unDisabledTools(){
            for(let i = 0; i < upToolsWrap.length;i++ ){
                inputRangeMobile[i].disabled = false;
                upToolsWrap[i].style.display= "block";
            }
        }


        function resize(){
            if(document.documentElement.clientWidth < 650) {
                resetStyle();
                disabledTools()
            }
            else {
                unDisabledTools();
            }
        }


        if (window.innerWidth < 650){
            resetStyle();
            disabledTools()
        }
        else {
            unDisabledTools();
        }

    inputIconMobile.forEach((element,index) => {

        element.addEventListener('click', () => {

            for(let i = 0; i < upToolsWrap.length;i++ ){

                upToolsWrap[i].style.display= "none";
            }

            inputRangeMobile[index].disabled = false

            upToolsWrap[index].style.display="block";
        })
    });

    let btnReset = document.querySelector('.upload__box-btn__reset');

        btnReset.addEventListener('click',()=>resetStyle());
    function resetStyle() {

        uploadImg.width = "300";

        uploadImg.height= "400";

        uploadImg.style.filter=`contrast(1)`;

        uploadImg.style.filter=`hue-rotate(0deg)`;

        inputRangeMobile[0].value= "50%";
    }


},[])



    return (
        <>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero__box">
                            <h1 className="title-common hero__title-common" style={{  width: 'fit-content',
                                color: '#ffffff',margin: 'auto'
                            }}>Фотографии пользователей</h1>
                        </div>
                    </div>
                </section>
                <section className="panorama">
                    <h2 className="title-common panorama__title-common container">Взгляните на фотографии, которые
                        выкладывают
                        пользователи! Видите, как не хватает ваших?</h2>
                    <div className="panorama__wrapper">
                        <img src="/images/panorama-desktop.png" alt="Подвесной мост"/>
                            <div className="container panorama__marker__container ">
                                <div className="panorama__marker__elem">Панорама дня</div>
                            </div>
                    </div>
                    <div className="container">
                        <div className="panorama__wrapper-tag">
                            <div className="tag panorama__tag">
                                <div className="tag__author panorama__tag__author">Aннa <span className="tag__span">(5 минут назад)</span>
                                </div>
                                <CounterLikes name="tag__like panorama__tag__like" likeName='Anna'/>
                                <div className="tag__message">Прыгать или нет? Напишите в комментарии свой совет и
                                    смотрите прямую трансляцию
                                    в перископе, задавайте свои вопросы!
                                </div>
                            </div>
                        </div>
                        <div className="gallery">
                            <div className="gallery__grid">
                                <div className="gallery__item">
                                    <div className="gallery__item__img">
                                        <img src="/images/photo-1-desktop.png" alt="Фото"/>
                                    </div>
                                    <div className="tag gallery__tag">
                                        <div className="tag__author gallery__tag__autor">Левон<span
                                            className="tag__span">(5 часов назад)</span></div>
                                        <div className="tag__message">Вчера он на луну летал, сегодня в руки к нам
                                            попал.
                                        </div>
                                        <CounterLikes name="tag__like gallery__tag__like" likeName='Levon'/>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="gallery__item__img">
                                        <img src="/images/photo-2-desktop.png" alt="Фото"/>
                                    </div>
                                    <div className="tag gallery__tag">
                                        <div className="tag__author gallery__tag__autor">Антон<span
                                            className="tag__span">(12 часов назад)</span></div>
                                        <div className="tag__message">Соседи будут рады!</div>
                                        <CounterLikes name="tag__like gallery__tag__like" likeName='Anton'/>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="gallery__item__img">
                                        <img src="/images/photo-3-desktop.png" alt="Фото"/>
                                    </div>
                                    <div className="tag gallery__tag">
                                        <div className="tag__author gallery__tag__autor">Борис<span
                                            className="tag__span">(20 часов назад)</span></div>
                                        <div className="tag__message">Здесь могла быть ваша цитата о высоком и вечном.
                                        </div>
                                        <CounterLikes name="tag__like gallery__tag__like" likeName='Boris'/>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="gallery__item__img">
                                        <img src="/images/photo-4-desktop.png" alt="Фото"/>
                                    </div>
                                    <div className="tag gallery__tag">
                                        <div className="tag__author gallery__tag__autor">Сергей<span
                                            className="tag__span">(20часов назад)</span></div>
                                        <div className="tag__message">Самая кубанская в мире!</div>
                                        <CounterLikes name="tag__like gallery__tag__like" likeName='Sergei'/>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="gallery__item__img">
                                        <img src="/images/photo-5-desktop.png" alt="Фото"/>
                                    </div>
                                    <div className="tag gallery__tag">
                                        <div className="tag__author gallery__tag__autor">Максим<span
                                            className="tag__span">(40 часов назад)</span></div>
                                        <div className="tag__message">Где снег-то?</div>
                                        <CounterLikes name="tag__like gallery__tag__like" likeName='Maxim'/>
                                    </div>
                                </div>
                                <div className="gallery__item">
                                    <div className="gallery__item__img">
                                        <img src="/images/photo-6-desktop.png" alt="Фото"/>
                                    </div>
                                    <div className="tag gallery__tag">
                                        <div className="tag__author gallery__tag__autor">Надежда<span
                                            className="tag__span">(45 часов назад)</span>
                                        </div>
                                        <div className="tag__message">Всем GM и взаимные лайки!</div>
                                        <CounterLikes name="tag__like gallery__tag__like" likeName='Nadegda'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="upload">
                    <div className="container upload__container">
                        <h2 className="title-common upload__title-common container">Затмите их всех!
                            Выкладывайте все, что накопилось в телефоне!</h2>
                        <div className="upload__wrapper">
                            <div className="upload__box-scale">
                                <div className="upload__image">
                                    <img src="/images/photo-7-desktop.png" alt="Зимняя дорога"/>
                                </div>
                            </div>
                            <form className="upload__form flex" action="#" id="form">
                                <div className="upload__tools">
                                    <div className="upload__tools__item">
                                        <span className="upload__tools__item__icon"><img src="/images/crop.svg"
                                                                                         alt="Размер"/></span>
                                        <input type="button" className="upload__tools__item__input-crop input-mobile"/>
                                        <div className="upload__tools__wrapper">
                                            <input className="input-range input-range_hidden upload__tools__input__line" id="crop"
                                                   type="range" name="crop"  defaultValue={'150'} min="5" max="300" step="1"/>
                                        </div>
                                    </div>
                                    <div className="upload__tools__item">
                                        <span className="upload__tools__item__icon"><img src="/images/fill.svg"
                                                                                         alt="Насыщенность"/></span>
                                        <input type="button" className="upload__tools__item__input-fill input-mobile"/>
                                        <div className="upload__tools__wrapper">
                                            <input
                                                className="input-range upload__tools__input__line upload__tools__input__fill"
                                                id="fill"
                                                type="range" defaultValue={'50'} name="fill"/>
                                        </div>
                                    </div>
                                    <div className="upload__tools__item">
                                        <span className="upload__tools__item__icon"><img src="/images/contrast.svg"
                                                                                         alt="Контраст"/></span>
                                        <input type="button"
                                               className="upload__tools__item__input-contrast input-mobile"/>
                                        <div className="upload__tools__wrapper">
                                            <input className="input-range upload__tools__input__line" id="contrast"
                                                   type="range" defaultValue={'50'} name="contrast"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="upload__tools__item upload__tools__item-mobile">
                                    <div className="upload__tools__wrapper-mobile">
                                    <input
                                        className="input-range upload__tools__input__line upload__tools__input__line_mobile"
                                        type="range"
                                        name="mobile" min="0" max="300" step="1"/>
                                    </div>
                                </div>
                                <div className="upload__box-btn flex">
                                    <button className="button upload__box-btn__submit " type="submit">Запостить</button>
                                    <button className="button upload__box-btn__reset" type="reset">Отмена</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PhotoPage