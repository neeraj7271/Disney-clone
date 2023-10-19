import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slice: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    //before rendering anything you must have something like div inside the Carousel component else it will provide the errors
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

// Here the Slider is the react slick component so instead of making it above inside the return we made it in styled component becaz we can style as we want
const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    button {
        z-index: 1;
    }
    
    ${'' /* slick-list is inbuilt css the npm provided overflow in hidden by default */}
    .slick-list{
        ${'' /* visible is done becoz to see the adjacent image carousels side by side */}
        overflow: visible;
    }

`;

const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border: 4px solid transparent;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8)
        }
    }
`;
