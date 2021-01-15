import React from 'react'
import Iframe from 'react-iframe'

const Banner = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="image-cont animate-right">
                    <div className="contact-pic"></div>
                    <div className="social">
                        <div className="headline">עקבו אחרינו:</div>
                        <a href="https://www.facebook.com/NeoPolitan.Haifa" target="_blank"
                        ><i className="fab fa-facebook"></i>בפייסבוק</a
                        >
                        <a
                            href="https://www.instagram.com/neopolitan_pizzeria"
                            target="_blank"
                        ><i className="fab fa-instagram"></i>באינסטגרם</a>
                    </div>
                </div>
                <div className="map animate-left">
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.43972132852053!2d35.000800928003116!3d32.819010532237456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbb6789ced9d1%3A0x546cc7c004febace!2z16DXkNeV16TXldec15nXmNefIE5lb1BvbGl0YW4!5e0!3m2!1sen!2sil!4v1586883694789!5m2!1sen!2sil"
                        width="800"
                        height="550"
                        frameborder="0"
                        style="border: 0;"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                    />
                    <div className="address">כתובת : חיפה , רחוב הנמל 37</div>
                </div>
            </div>
        </section>
    )
}



export default Banner
