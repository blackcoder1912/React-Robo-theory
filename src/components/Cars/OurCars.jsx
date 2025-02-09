/* eslint-disable react/jsx-key */
import React from "react";
import Cars from "./CarsCard";
import CarsCard from "./CarsCard";

const OurCars = () => {
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

  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Courses</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {carsData.map((item) => {
          return (
            <div>
              <CarsCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCars;