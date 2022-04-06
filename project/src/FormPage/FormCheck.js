import './FormPage.css'
import {useState} from "react";

function FormCheck (props){
    const[color, setColor] = useState()
    let choiceColor = ['#E5E5E5' , '#283645' , 'red']


    function colorHover(){
        setColor( choiceColor[1] )
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


    return(
        <>
            <div className="record__box"  onMouseEnter={colorHover} onMouseLeave={colorUnHover} onMouseDown={colorDown} onMouseUp={colorUp}>
                <input className="record__input" type="checkbox" />
                <p className="record__checkbox-custom" style={{borderColor: color}}/>
                <label className="label record__label">{props.record}</label>
            </div>
        </>
    )
}

export default FormCheck;