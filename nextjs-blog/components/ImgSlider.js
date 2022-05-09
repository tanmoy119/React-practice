import Styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
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
      );
};

export default ImgSlider;

const Carousel = Styled(Slider)`
    margin-top:20px;

    .slick-list{
        overflow: visible;
    }

    button{
        z-index:1;
    }
`;

const Wrap = Styled.div`
    img{
        outline:none;
        border:5px solid transparent;
        border-radius: 40px;
        height:400px;
        width:100%;
    }
`;
