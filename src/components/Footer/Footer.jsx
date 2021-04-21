import React, { useState } from 'react';
import style from './Footer.module.scss';
import youtubeLogo from '../../files/images/YoutubeLogo.png';
import fbLogo from '../../files/images/fblogo.png';
import instagramLogo from '../../files/images/instagramLogo.png';
import footerLogo from '../../files/images/footerLogo.png';
import AddressFooter from './AddressFooter';



const Footer = (props) => {
      return (
          
          <footer className={style.footer}>
                <div className={style.footerSocMedia}>
                    <div className={style.footerAddress}>
                        <img src={footerLogo} alt=""/>
                        <div className={style.footerContact}>
                            <AddressFooter/>
                        </div>
                    </div>
                    <div className={style.footerSocial}>
                        <img src={youtubeLogo} alt=""/>
                        <img src={fbLogo} alt=""/>
                        <img src={instagramLogo} alt=""/>
                    </div>
                </div>
                <div className={style.footerContactMedia}>
                        <AddressFooter/>
                </div>
          </footer>
      )
}
export default Footer;