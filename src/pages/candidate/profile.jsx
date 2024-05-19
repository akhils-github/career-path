import React from "react";
import { Link } from "react-router-dom";

export default function ProfileDetail() {
  return (
    <div className="max-w-7xl -mt-12 min-h-screen overflow-y-min mx-auto rounded ">
      {/* search */}
      <div className="text-[#2c2c2c] rounded-md px-5 bg-white gap-4 flex pt-5 pb-5 h-44  shadow">
        <div className="-mt-12 p-3 bg-white w-36  rounded shadow-md">
          <img
            className=" cursor-pointer  rounded"
            src="/images/profile/stark.png"
          />
        </div>
        <div className="bg-[#275DF51A] flex flex-col px-5 pt-2 rounded w-[85%]">
          <div>
            <h3>Forrest Gump</h3>
            <p>Graphic Designer at Ghd Global</p>
          </div>
          <div className="flex gap-2">
            <div>
              <p>Sadasd, Bahrain</p>
            </div>
            <div>
              <p>walapa@getmola.com</p>
            </div>
            <div>
              <p>+2343 - 453453453</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#FCAF3233]"></div> */}
      </div>
      <div></div>
      {/* offers */}
      <div className="text-[#2c2c2c] gap-2 flex pt-5 pb-7 flex-col">
        <h3 className="font-bold text-[0.94rem]">Today's Offer</h3>
        <div className="grid mt-2 grid-cols-3 w-full justify-center items-center gap-2">
          <img
            className="shadow-sm cursor-pointer"
            src="/images/profile/stark.png"
          />
          <img
            className="shadow-sm cursor-pointer"
            src="/images/profile/stark.png"
          />
          <img
            className="shadow-sm cursor-pointer"
            src="/images/profile/stark.png"
          />
        </div>
      </div>
      {/* category */}
      <div className="text-[#2c2c2c] rounded-md px-5 bg-white gap-2 flex pt-5 pb-7 flex-col shadow">
        <h3 className="font-bold">Categories</h3>
        <div className="w-full border-b border-b-zinc-300 pb-5 grid grid-cols-9 gap-5 text-[#707070]">
          {/* {servicesCategory?.map((i, index) => (
            <div
              key={i?.id}
              onClick={() => setSelectedCategory(i)}
              className="flex items-center gap-1 cursor-pointer group flex-col"
            >
              <div
                className={`flex bg-white rounded-full border group-hover:border-blue transition-all duration-500 w-20 items-center justify-center h-20 ${
                  selectedCategory?.id == i?.id
                    ? "border-blue"
                    : "border-blue/10"
                }`}
              >
                <img
                  src={i?.categoryimage && JSON.parse(i?.categoryimage)?.path}
                  className="h-10"
                  alt={i?.category}
                />
              </div>
              <h5 className="text-[0.8rem] text-center font-semibold">
                {i?.category}
              </h5>
            </div>
          ))} */}
        </div>
        <>
          {/* {selectedCategory ? (
            <>
              <div className="flex justify-between mt-5 mb-2">
                <h3 className="font-bold text-[0.94rem]">
                  {selectedCategory?.category} Services
                </h3>
                <Link className="text-[0.84rem] font-bold text-blue/70 underline underline-offset-2">
                  View All
                </Link>
              </div>
              {isSubCategoryLoading ? (
                <div className="flex items-center justify-center my-10 w-full gap-3">
                  <img
                    className="w-10 object-contain"
                    src="/gif/load.gif"
                    alt="loader"
                  />
                </div>
              ) : (
                <div className="w-full grid grid-cols-4 gap-5 text-[#707070]">
                  {servicesSubCategory?.paginatedData?.slice(0, 8)?.map((i) => (
                    <Link
                      to={`/customer/service/${i?.id}`}
                      key={i?.id}
                      style={{
                        backgroundImage: `url(${
                          i?.image && JSON.parse(i?.image)?.path
                        })`,
                      }}
                      className="flex relative h-44 bg-contain justify-end px-3 pb-5 bg-no-repeat cursor-pointer flex-col"
                    >
                      <h5 className="text-[0.8rem] text-white max-w-32 font-semibold">
                        {i?.subcategory}
                      </h5>
                      <div className="absolute top-3 text-[#00B507] bg-white rounded text-[0.7rem] py-1 flex items-center shadow px-2 font-bold right-4">
                        {i?.activeVendorsCount} Active crews
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : null} */}
        </>
      </div>
      {/* services */}
      <div className="text-[#2c2c2c] gap-2 flex pt-2 flex-col">
        <h3 className="font-bold text-[0.94rem] mt-4">Services</h3>
        <div className="grid grid-cols-3 mt-2 gap-3 max-md:justify-center">
          {/* {servicesListing?.subCategories?.map((i, index) => (
            <Link
              to={`/customer/service/${i?.id}`}
              key={i?.id}
              style={{
                backgroundImage: `url(${
                  i?.subcategoryimage && JSON.parse(i?.subcategoryimage)?.path
                })`,
              }}
              className="flex rounded-xl relative h-44 bg-cover justify-end px-5 pb-5 bg-no-repeat cursor-pointer flex-col"
            >
              <h5 className="text-[0.8rem] text-white max-w-32 font-semibold">
                {i?.subcategory}
              </h5>
            </Link>
          ))} */}
        </div>
      </div>
      {/* crew */}
      <div className="text-[#2c2c2c] gap-2 flex pt-5 pb-7 flex-col">
        <h3 className="font-bold text-[0.94rem]">Most Rated</h3>
        <div className="grid grid-cols-3 gap-3 max-md:justify-center">
          {/* {mostratedvendors?.sortedData?.map((i, index) => (
            <CrewCard key={index} list={i} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
