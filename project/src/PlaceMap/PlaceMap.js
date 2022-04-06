import React from "react";
import {Map, YMaps} from 'react-yandex-maps';


    const PlaceMap = () => {

        return(
            <div className={'contact-details__map'}>
                <YMaps>
                        <Map defaultState={{ center: [59.938635, 30.323118], zoom: 13 }}
                             width="100%"
                             height="520px"
                        />

                </YMaps>
            </div>
        )
}

export default PlaceMap;