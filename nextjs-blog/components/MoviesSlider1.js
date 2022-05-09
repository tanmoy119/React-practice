import Styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";

const MoviesSlider1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false
    }
  return (
    <>
          <Carousel {...settings}>
          <Wrap>
                <img src="img1.jpg"/>
            </Wrap>
            <Wrap>
                <img src="img2.jpg"/>
            </Wrap>
            <Wrap>
                <img src="img4.jpg"/>
            </Wrap>
            <Wrap>
                <img src="img5.png"/>
            </Wrap>
            <Wrap>
                <img src="img6.jpeg"/>
            </Wrap>
            <Wrap>
                <img src="img7.jpg"/>
            </Wrap>
            <Wrap>
                <img src="img8.jpg"/>
            </Wrap>
          </Carousel>
    </>
  )
}

export default MoviesSlider1;



const Carousel = Styled(Slider)`
    margin-top:20px;

    .slick-list{
        overflow: visible;
    }
    li{
        color:transparent;
    }

    button{
        z-index:-1;
    }
`;

const Wrap = Styled.div`
    img{
        border:5px solid transparent;
        border-radius: 10px;
        height:100px;
        width:100%;
    }
`;
