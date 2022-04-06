import React from 'react';

const ModalWindows = ({title,text,textButton,name,clsBoxBtn,clsBtn}) => {


    return (
        <div>
            <div className={name}>
                <h2 className="modal__window__title">{title}</h2>
                <p className="modal__window__text">{text}</p>
                <div className={clsBoxBtn}>
                    <button className={clsBtn}>{textButton}</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindows;