import React, { useState } from 'react';
import style from './RoomSliders.module.scss';
import kitchenPhoto from '../../files/images/kitchen.png';
import livingRoom from '../../files/images/livingRoom.png';
import bathRoom from '../../files/images/bathRoom.png';
import arrowRight from '../../files/images/arrowRight.png';
import SlidersScroll from './SlidersScroll/SlidersScroll';
import '../../App.scss';

const RoomSliders = (props) => {
   
    const photos = [
        {
            id: 1,
            name: 'Living room',
            photo: <img src={livingRoom} alt=""/>,
            description: "Get the modern luxury kitchen look. Explore chef driven interiors and decor."
        },
        {
            id: 2,
            name: 'Kitchen',
            photo: <img src={kitchenPhoto} alt=""/>,
            description: "Get these gorgeous modern living room. Refresh your own space today."
        },
        {
            id: 3,
            name: 'Bathroom',
            photo: <img src={bathRoom} alt=""/>,
            description: "If there's a room that deserves a little luxury, it's the bathroom."
        },
        {
            id: 4,
            name: 'Terrace',
            photo: <img src={bathRoom} alt=""/>,
            description: "If there's a room that deserves a little luxury, it's the bathroom."
        }
    ]
    const [photoId, setPhotoId] = useState(1)
    

      return (
        <div className={style.carousel}>
            <SlidersScroll />
            <div className={style.slidersName} >
                {photos.map( r => <div className={ r.id === photoId ? style.active : style.notactive} onClick={() => setPhotoId(r.id)}>{r.name}</div>)}
            </div>
            <div className={style.images}> 
                {photos.filter((el) => el.id === photoId)[0].photo}
                    <div className={style.sliderDescription}>
                        {photos.filter((el) => el.id === photoId)[0].description}
                        <a className={style.descriptionBtn} href="#">More <img src={arrowRight} alt=""/></a>
                    </div>
                
            </div>  
        </div>
      );
}
export default RoomSliders;