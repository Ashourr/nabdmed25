import React, { useEffect, useState } from "react";
import "./slider.css";
import Slider from "react-slick";
import img from "../../imges/download.jpeg";

function Sliderimg(props) {
  let [sliderimg, setsliderimg] = useState([]);

  useEffect(() => {
    fetch("https://almutamayizun.videosep.com/api/sidebar-banner")
      .then((res) => res.json())
      .then((data) => setsliderimg(data.data));
  }, []);

  let i = 1;

  let imgList = sliderimg.map((item, index) => {
    return (
      <div key={index} className="servicediv">
        <div className="service">
          <div className="ser-atim">
            <div className={`ser-cont `}>
              <div className={`po`}>
                <p>{i < 10 ? "0" + i++ : i}</p>
              </div>
              <img width={"100%"} src={item.cover} alt=".." />
              <h6>{props.langs === "en" ? item.name_ar : item.name}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pausehOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-imges">
      <div className="container-lg p-0">
        <div className={`sliderimg ${props.langs}`}>
          <div className="sliderback">
            <img src={img} alt="..." />
          </div>
        </div>
        <div style={{ marginTop: "-200px" }}>
          <Slider {...settings}>{imgList}</Slider>
        </div>
      </div>
    </div>
  );
}

export default Sliderimg;
