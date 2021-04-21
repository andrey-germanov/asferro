import React, { useState } from 'react';
import style from './Footer.module.scss';
import mapPin from '../../files/images/mapPin.png';
import phone from '../../files/images/phone.png';



const AddressFooter = (props) => {
      return (
        <>
            <div className={style.footerAddressStreet}><img src={mapPin} alt=""/>43 Miriam St, Daly City <br/> CA, 94014, United States</div>
            <div className={style.footerAddressPhone}><img src={phone} alt=""/>+ 43-1-7104996</div>
        </>
      )
}
export default AddressFooter;