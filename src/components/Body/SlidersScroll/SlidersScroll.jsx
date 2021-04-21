import React from 'react';
import style from './SlidersScroll.module.scss';
import arrowUp from '../../../files/images/arrowsUp.png';
import arrowDown from '../../../files/images/arrowsDown.png';


const SlidersScroll = (props) => {
      return (
        <div className={style.slidersScroll}>
            <img src={arrowUp} alt=""/>
                scroll <br/> for view  <br/>services
            <img src={arrowDown} alt=""/>
        </div>
      );
}
export default SlidersScroll;