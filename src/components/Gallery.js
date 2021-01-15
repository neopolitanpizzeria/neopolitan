import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop'


const Gallery = () => {

    const [imagesCouple, setImageCouple] = useState([]);


    const mapDataToState = (data) => {
        let couple = [];
        for (let i = 0; i < data.length; i++) {
            couple = [...couple, { img1: data[i], img2: data[i + 1] }];
            ++i;
        }
        setImageCouple(couple);
    }

    useEffect(() => {
        Tabletop.init({
            key: '1-JCNCnF_WSlFpiZ2zJFXtq-9bLnAp7sVbMNtaOsmOU0',
            simpleSheet: true
        })
            .then(data => mapDataToState(data))
            .catch(err => console.log(err))

    }, [])



    return (
        <>

            <div className="banner info animate-bottom" id="gallery">
                גלריה
		</div>

            {/* <!-- bootstrap carusel --> */}
            <div
                dir="ltr"
                id="myCarousel"
                className="carousel slide animate-top"
                data-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    {
                        imagesCouple.map((item, index) => (
                            <li key={index} data-target="#myCarousel" data-slide-to={`${index}`} class={`${index == 0 ? 'active' : ' '}`}></li>
                        ))
                    }

                </ol>

                <div className="carousel-inner desktop">
                    {
                        imagesCouple.map((item, index) => (
                            <div key={index + 5000} className={`item ${index == 0 ? 'active' : ' '}`}>
                                <img src={item.img1.imageURL} alt={item.img1.imageURL} />
                                <img src={item.img2.imageURL} alt={item.img2.imageURL} />
                            </div>
                        ))
                    }



                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default Gallery
