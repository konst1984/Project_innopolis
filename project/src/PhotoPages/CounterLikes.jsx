import React, {useState} from 'react';

const CounterLikes = (props) => {

    const[likes,setLikes] = useState(Number(localStorage.getItem(props.likeName)));
    function countLikes(){
        setLikes(likes + 1)
        localStorage.setItem(props.likeName, (likes +1 ).toString());
    }


    return (
        <>
            <div className={props.name}>
                <div className="tag__like-count">Нравится: <span
                    className="tag__like-counter" >{likes}</span></div>
                <div className="tag__like-heart">
                    <img
                        className="tag__like-heart__icon"
                        src="/images/heart.svg"
                        alt="Сердечко"
                        onClick={countLikes}/>
                </div>
            </div>
        </>
    );
};

export default CounterLikes;