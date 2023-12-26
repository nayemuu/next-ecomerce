'use client';

import Card from '@/components/reuseable/Products/Card/Card';
import CardOutOfStock from '@/components/reuseable/Products/Card/CardOutOfStock';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Products.css';

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

function Products() {
  const [totalNumberOfProducts, setTotalNumberOfProducts] = useState(5);
  const [showSlider, setShowSlider] = useState(false);

  const handleResize = () => {
    // console.log('window.innerWidth = ', window.innerWidth);
    let calculation = 214 * totalNumberOfProducts > window.innerWidth;
    // console.log('calculation = ', calculation);

    if (calculation) {
      setShowSlider(true);
    } else {
      setShowSlider(false);
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
    slidesToShow: slidesToShowCheck(7, totalNumberOfProducts),
    // slidesToShow: 5,
    slidesToScroll: slidesToShowCheck(7, totalNumberOfProducts),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 214 * 6, // 214 * 6 px আগ পর্যন্ত 5টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(5, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(5, totalNumberOfProducts),
          //infinite: true,
          //dots: true
        },
      },
      {
        breakpoint: 214 * 5, // 214 * 5 px আগ পর্যন্ত 4টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(4, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(4, totalNumberOfProducts),
          //initialSlide: 3
        },
      },
      {
        breakpoint: 214 * 4, // 214 * 4 px আগ পর্যন্ত 3টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(3, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(3, totalNumberOfProducts),
        },
      },
      {
        breakpoint: 214 * 3, // 214 * 3 px আগ পর্যন্ত 2টা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(2, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(2, totalNumberOfProducts),
        },
      },
      {
        breakpoint: 214 * 2, // 214 * 2px আগ পর্যন্ত একটা দেখাবে
        settings: {
          slidesToShow: slidesToShowCheck(1, totalNumberOfProducts),
          slidesToScroll: slidesToShowCheck(1, totalNumberOfProducts),
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="product-container bg-white rounded py-[24px] px-[16px]">
        <div className="border-b border-[#dee2e6] mb-4 flex items-baseline">
          <div className="border-b-2 border-[#38b449] text-xl font-bold pb-4">
            Mobile & Gadgets
          </div>
          <div className="ml-auto py-1.5 px-3 rounded text-white font-normal text-sm bg-[#38b449] hover:bg-[#28a745] transition-all cursor-pointer">
            View More
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center gap-[30px] place-items-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <CardOutOfStock />
          <CardOutOfStock />
        </div> */}

        {/* <div className="flex flex-wrap gap-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <CardOutOfStock />
          <CardOutOfStock />
        </div> */}

        {!showSlider && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-center gap-[30px] place-items-center">
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
              <CardOutOfStock />
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Products;
