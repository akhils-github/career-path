import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customSelectStyles } from "../../utils/customStyles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EducationDetail() {
  const { register, control } = useForm();

  return (
    <div className="bg-white px-16 py-6">
      <div className="px-3 pb-6">
        <h5>Your current or latest Employment Details</h5>
        <p>
          Give insights of your professional journey. We will make it more
          colorful!
        </p>
      </div>
      <form className="flex flex-col gap-y-4 max-w-xl">
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
                required
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
                required
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
                required
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
            name="state"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                required
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
        <Link
          to={"/profile-detail"}
          className="bg-[#1E3964] mt-4 h-10 w-fit rounded-full text-sm px-3 flex items-center text-white gap-2 "
        >
          <p>Great Start. Move to the next step!</p>
          <ArrowRight className="size-5" />
        </Link>
      </form>
    </div>
  );
}
