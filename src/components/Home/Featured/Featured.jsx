/* eslint-disable no-unused-vars */
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import FeatureCard from './FeatureCard';

const Featured = () => {
  const carsData = [
    {
      id: 0,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      name: "School-Beginner Level",
      price: "22,440",
    },
    {
      id: 1,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      name: "School-Intermediate Level",
      price: "54,890",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      name: "School-Advance Level",
      price: "75,890",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      name: "College Level",
      price: "55,789",
    },

  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  
  return (
    <div className=" container mt-14">
      <h1 className=" font-bold text-4xl text-center">
        Featured <span className=" text-[#1E3A8A]">Courses</span>
      </h1>

      <p className=" text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
        laborum!
      </p>

      <div className=" mt-8">
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Featured