import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarNewsCard from "./CarNewsCard";

const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      desc: "AI-driven robots set to revolutionize industrial automation.",
    },
    {
      id: 1,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      desc: "Breakthrough in machine learning: Self-learning robots in action!",
    },
    {
      id: 2,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      desc: "Next-gen robotics enhancing STEM education worldwide.",
    },
    {
      id: 3,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      desc: "Humanoid robots making strides in healthcare and assistance.",
    },
    {
      id: 4,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      desc: "RoboTheory introduces a new interactive AI-learning module!",
    },
    {
      id: 5,
      img: "https://ik.imagekit.io/iybmlyxnd/caed.png?updatedAt=1739001897761",
      desc: "Exploring the impact of AI and robotics in modern education.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
    <div className="container mt-14">
      <h1 className="font-bold text-4xl text-center">
        Recent <span className="text-[#6495ED]">Tech Insights</span>
      </h1>

      <p className="text-center text-gray-600">
        Stay updated with the latest trends in AI, robotics, and automation.
      </p>

      <div className="mt-8">
        <Slider {...settings}>
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarNews;
