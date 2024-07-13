import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customSelectStyles } from "../../utils/customStyles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { yearsListing } from "../../constants/selectDate";

export default function EducationDetail({ loader }) {
  const { register, control } = useForm();
  // year listing
  let yearList = yearsListing?.map((i) => {
    return { id: i, value: i, label: i };
  });
  const [selectedYear, setSelectedYear] = useState("");
  const handleYear = (i) => {
    setSelectedYear(i);
  };

  return (
    <div className="bg-white px-8 py-6">
      <div className="px-3 pb-6">
        <h5>Your current or latest Employment Details</h5>
        <p>
          Give insights of your professional journey. We will make it more
          colorful!
        </p>
      </div>
      <div className="flex flex-col gap-y-4 max-w-2xl">
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Course
          </label>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                // selected={selectedState}
                // value={selectedState}
                // onChange={(selectedOption) => {
                //   handleState(selectedOption);
                //   field.onChange(selectedOption);
                // }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                // options={stateLists}
                isSearchable={true}
                styles={customSelectStyles}
                placeholder="Select"
                className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
              />
            )}
          />
          {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                    
        </div>
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Specialization
          </label>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                // selected={selectedState}
                // value={selectedState}
                // onChange={(selectedOption) => {
                //   handleState(selectedOption);
                //   field.onChange(selectedOption);
                // }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                // options={stateLists}
                isSearchable={true}
                styles={customSelectStyles}
                placeholder="Select"
                className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
              />
            )}
          />
          {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                    
        </div>
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            University / Institute
          </label>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                // selected={selectedState}
                // value={selectedState}
                // onChange={(selectedOption) => {
                //   handleState(selectedOption);
                //   field.onChange(selectedOption);
                // }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                // options={stateLists}
                isSearchable={true}
                styles={customSelectStyles}
                placeholder="Select"
                className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
              />
            )}
          />
          {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                    
        </div>
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Institute Location
          </label>
          <input type="text" className="input-box" />
          {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                    
        </div>

        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Passing Year
          </label>
          <Controller
            name="passingYear"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                selected={selectedYear}
                value={selectedYear}
                onChange={(selectedOption) => {
                  handleYear(selectedOption);
                  field.onChange(selectedOption);
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={yearList}
                isSearchable={true}
                styles={customSelectStyles}
                placeholder="Select"
                className="rounded border border-[#C7C7C7] w-36 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
              />
            )}
          />{" "}
          {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                    
        </div>
        <button className="bg-[#1E3964] w-72 mt-4 h-10  rounded-full text-sm px-1.5 justify-center flex items-center text-white gap-2 ">
          {loader ? (
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              creating please wait...
            </div>
          ) : (
            <>
              <p>Great Start. Move to the next step!</p>
              <ArrowRight className="size-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
