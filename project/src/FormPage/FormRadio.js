import React, {useState} from 'react';
import styles from './FormRadio.module.css'


const FormRadio = (props) => {
    const[color, setColor] = useState('#E5E5E5')
    const items = ["Pink для IOS", "Pink для Android", "Pink для Windows"]
    let choiceColor = ['#E5E5E5' , '#283645' , 'red']

    function colorHover(){
      setColor( choiceColor[1])
     }
    function colorUnHover(){
        setColor( choiceColor[0])
    }
    function colorDown(){
        setColor( choiceColor[2])
    }
    function colorUp(){
        setColor( choiceColor[0])
    }


    return (
        <>
            <div className={`${styles["intro__systems__box"]} flex`}>
                <input className={styles["radio"]} id={props.id} name="system" type="radio"
                       value={props.value} defaultChecked={props.checked}/>
                <span  style={{borderColor: color}}/>
                <label className={styles['intro__systems__label']}  htmlFor={props.id} onMouseEnter={colorHover} onMouseLeave={colorUnHover} onMouseDown={colorDown} onMouseUp={colorUp}>Pink для {props.value}</label>
            </div>

        </>
    );
};

export default FormRadio;



