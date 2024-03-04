import React from 'react';
import bannerImg from '../../assets/hotbuys.avif';
import costcobadge from '../../assets/costco-direct-vector-badge.svg';
import round1 from '../../assets/round1.svg';
import round2 from '../../assets/round2.svg';
import round3 from '../../assets/round3.svg';
import round4 from '../../assets/round4.svg';
import product1 from '../../assets/p1.avif';
import product2 from '../../assets/p2.avif';
import product3 from '../../assets/p3.avif';
import product4 from '../../assets/p4.avif';
import tool1 from '../../assets/q1.avif';
import tool2 from '../../assets/q2.avif';
import tool3 from '../../assets/q3.avif';
import tool4 from '../../assets/q4.avif';

export const Products = () => {
  return (
    <>
      <div className="bg-[#C33936] rounded-t-[10px] w-[98%] m-auto mt-2">
        <div className="m-auto">
          <img src={bannerImg} width="100%" className="pt-7" alt="Banner" />
        </div>
        <div className="bg-[#F0EFE7] text-center">
          <p className="pt-4">VALID 2/24/24 - 3/3/24 | WHILE SUPPLIES LAST</p>
        </div>
      </div>

      <div className="card w-[98%] m-auto bg-[#e6e6e6] round-b">
        <div className="top m-auto flex flex-col justify-center">
          <div className="topChild flex flex-col md:flex-row justify-evenly gap-5 items-center">
            <img src={costcobadge} alt="Costco Badge" width="400px" />
            <div className="md:flex md:items-center">
              <h1 className="text-3xl font-bold md:text-center">
                Benefit from Buying More
              </h1>
              <hr className="w-6 font-thin border-black md:rotate-90" />
              <div className="md:text-center">
                <p>Combine with other promotions for additional savings!</p>
                <p>Delivery in 3-5 Days in Most Areas*</p>
              </div>
            </div>
          </div>

          <div className="bottomChild flex flex-col md:flex-row justify-center m-auto">
            <div className="box mb-4 md:mb-0">
              <div className="heading flex bg-blue-500 items-center">
                <img src={round1} width="90px" alt="Round 1" />
                <h1>SAVE $100</h1>
              </div>
              <div className="p-img">
                <img src={product1} alt="Product 1" />
              </div>
            </div>
            <div className="box mb-4 md:mb-0">
              <div className="heading flex bg-blue-500 items-center">
                <img src={round2} width="90px" alt="Round 2" />
                <h1>SAVE $100</h1>
              </div>
              <div className="p-img">
                <img src={product2} alt="Product 2" />
              </div>
            </div>
            <div className="box mb-4 md:mb-0">
              <div className="heading flex bg-blue-500 items-center">
                <img src={round3} width="90px" alt="Round 3" />
                <h1>SAVE $100</h1>
              </div>
              <div className="p-img">
                <img src={product3} alt="Product 3" />
              </div>
            </div>
            <div className="box">
              <div className="heading flex bg-blue-500 items-center">
                <img src={round4} width="90px" alt="Round 4" />
                <h1>SAVE $100</h1>
              </div>
              <div className="p-img">
                <img src={product4} alt="Product 4" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#333333] text-white text-center">
          ONLINE-ONLY | LIMIT 2 REDEMPTIONS PER MEMBERSHIP | *SEE ITEM PAGE FOR DETAILS
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-[40px] mt-4 tool">
        <div className="tool-cards">
          <img src={tool1} alt="Tool 1" />
        </div>
        <div className="tool-cards">
          <img src={tool2} alt="Tool 2" />
        </div>
        <div className="tool-cards">
          <img src={tool3} alt="Tool 3" />
        </div>
        <div className="tool-cards">
          <img src={tool4} alt="Tool 4" />
        </div>
      </div>
    </>
  );
};

export default Products;
