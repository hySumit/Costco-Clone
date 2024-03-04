import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {
  return <div className="next-arrow" onClick={onClick} />;
};

const PrevArrow = ({ onClick }) => {
  return <div className="prev-arrow" onClick={onClick} />;
};

export const Slider2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const cardStyle = {
    border: "1px solid #ddd",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "4px",
  };

  const ratingStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    color: "#f39c12",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[50px] mb-[50px] w-[97%] m-auto">
      <Slider {...settings}>
        {data.map((e) => (
          <div key={e.id}>
            <div style={cardStyle} className="card">
              <img src={e.image} alt={e.title} style={imageStyle} />

              <p>{e.title.slice(0, 20)}</p>

              <p>₹ {e.price}</p>
              <div style={ratingStyle}>
                <IoStarSharp /> {e.rating.rate} <MdPeopleAlt /> {e.rating.count}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
