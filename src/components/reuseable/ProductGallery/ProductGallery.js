'use client';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Card from '../Products/Card/Card';
import CardOutOfStock from '../Products/Card/CardOutOfStock';
import GoPrevious from './SliderButtons/GoPrevious';
import GoNext from './SliderButtons/GoNext';
import './ProductGallery.css';

const slidesToShowCheck = (n, totalElementent) => {
  // console.log(totalElementent);
  if (totalElementent !== '') {
    // return n;
    if (totalElementent > n) {
      // console.log(n);
      return n;
    }
    return totalElementent;
  }
};

function ProductGallery() {
  const [totalNumberOfProducts, setTotalNumberOfProducts] = useState(7);
  const [showSlider, setShowSlider] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (totalNumberOfProducts > 6 && screenWidth > 1399) {
      setShowSlider(true);
    }

    // console.log("showSlider", showSlider);
  }, [totalNumberOfProducts, screenWidth]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    // console.log('window.innerWidth = ', window.innerWidth);
    if (window.innerWidth < 1400) {
      let calculation = (214 + 8) * totalNumberOfProducts > window.innerWidth;
      // console.log('calculation = ', calculation);

      if (calculation) {
        setShowSlider(true);
      } else {
        setShowSlider(false);
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShowCheck(6, totalNumberOfProducts),
    // slidesToShow: 5,
    slidesToScroll: slidesToShowCheck(6, totalNumberOfProducts),
    initialSlide: 0,
    prevArrow: <GoPrevious />,
    nextArrow: <GoNext />,
    responsive: [
      {
        breakpoint: (214 + 8) * 6, // (214+8) * 6 px আগ পর্যন্ত 5টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(5, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(5, totalNumberOfProducts),
          //infinite: true,
          //dots: true
        },
      },
      {
        breakpoint: (214 + 8) * 5, // (214+8) * 5 px আগ পর্যন্ত 4টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(4, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(4, totalNumberOfProducts),
          //initialSlide: 3
        },
      },
      {
        breakpoint: (214 + 8) * 4, // (214+8) * 4 px আগ পর্যন্ত 3টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(3, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(3, totalNumberOfProducts),
        },
      },
      {
        breakpoint: (214 + 8) * 3, // (214+8) * 3 px আগ পর্যন্ত 2টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(2, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(2, totalNumberOfProducts),
        },
      },
      {
        breakpoint: 380, // (214+8) * 2px আগ পর্যন্ত একটা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(1, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(1, totalNumberOfProducts),
        },
      },
    ],
  };

  return (
    <div>
      {!showSlider && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center gap-[30px] place-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <CardOutOfStock />
        </div>
      )}

      {showSlider && (
        <Slider {...settings}>
          <div className="px-4">
            <Card />
          </div>

          <div className="px-4">
            <Card />
          </div>

          <div className="px-4">
            <Card />
          </div>

          <div className="px-4">
            <Card />
          </div>

          <div className="px-4">
            <Card />
          </div>

          <div className="px-4">
            <Card />
          </div>

          <div className="px-4">
            <CardOutOfStock />
          </div>
        </Slider>
      )}
    </div>
  );
}

export default ProductGallery;
