import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";

import { customSelectStyles } from "../../utils/customStyles";
import { CITIES, COUNTRIES, newRequest, STATES } from "../../api";
export default function PersonalDetail({
  register,
  control,
  gender,
  setGender,
  countriesListing,
}) {
  // GET all Countries

  const [countries, setCountries] = useState("");

  let countriesList = countriesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleCountries = (i) => {
    setCountries(i);
  };

  // GET all States
  const [states, setStates] = useState("");
  const { data: statesListing } = useQuery({
    queryKey: ["statesListing"],
    queryFn: () => newRequest.get(STATES).then((res) => res.data),
  });

  let statesList = statesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleStates = (i) => {
    setStates(i);
  };

  // GET all cities
  const [selectedCities, setSelectedCities] = useState("");
  const { data: citiesListing } = useQuery({
    queryKey: ["citiesListing"],
    queryFn: () => newRequest.get(CITIES).then((res) => res.data),
  });

  let citiesList = citiesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleCities = (i) => {
    setSelectedCities(i);
  };

  // handle nationality
  const [selectedNationality, setSelectedNationality] = useState("");
  const handleNationality = (i) => {
    setSelectedNationality(i);
  };
  return (
    <div>
      {" "}
      <div className="bg-white px-16 py-6">
        <div className="px-3 pb-6">
          <h5 className="text-2xl font-semibold">Personal Details</h5>
          <p className="text-sm">Tell us more about yourself.</p>
        </div>
        <div className="flex flex-col gap-y-4 max-w-3xl">
          <div className="grid grid-cols-3">
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                First Name
              </label>
              <input
                type="text"
                className="input-box"
                {...register("first_name", { required: true })}
              />
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Middle Name
              </label>
              <input 
               {...register("middle_name", { required: true })}
              type="text" className="input-box" />
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Last Name
              </label>
              <input
                type="text"
                className="input-box"
                {...register("last_name", { required: true })}
              />
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Gender
            </label>
            <div className="flex gap-5 items-center">
              <div
                onClick={() => setGender("male")}
                className={`rounded-full border cursor-pointer  w-24 h-7 flex items-center justify-center ${
                  gender === "male" ? "active-option" : "border-[#808080]"
                }`}
              >
                Male
              </div>
              <div
                onClick={() => setGender("female")}
                className={`rounded-full border cursor-pointer  w-24 h-7 flex items-center justify-center ${
                  gender === "female" ? "active-option" : "border-[#808080]"
                }`}
              >
                Female
              </div>
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Current Location
            </label>
            <div className="grid grid-cols-3 gap-x-3">
              <div className="flex group flex-col space-y-2">
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      selected={countries}
                      value={countries}
                      onChange={(selectedOption) => {
                        handleCountries(selectedOption);
                        field.onChange(selectedOption);
                      }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      options={countriesList}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Tell us your Country"
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
              <div className="flex group flex-col space-y-2">
                <Controller
                  name="state"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      selected={states}
                      value={states}
                      onChange={(selectedOption) => {
                        handleStates(selectedOption);
                        field.onChange(selectedOption);
                      }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      options={statesList}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Tell us your State"
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
              <div className="flex group flex-col space-y-2">
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      selected={selectedCities}
                      value={selectedCities}
                      onChange={(selectedOption) => {
                        handleCities(selectedOption);
                        field.onChange(selectedOption);
                      }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      options={citiesList}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Tell us your City"
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
            </div>
          </div>

          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Nationality
            </label>
            <Controller
              name="nationality"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  selected={selectedNationality}
                  value={selectedNationality}
                  onChange={(selectedOption) => {
                    handleNationality(selectedOption);
                    field.onChange(selectedOption);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  options={countriesList}
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
              Mobile Number
            </label>
            <div className="flex gap-4 items-center">
              <div>
                <input

                 type="text" className="input-box !w-20" />
              </div>
              {/* <div className="!w-28 ">
                <Controller
                  name="ss"
                  control={control}
                  defaultValue=""
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
                      className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-11 text-zinc-500"
                    />
                  )}
                />
              </div> */}
              <div>
                <input
                  type="text"
                  className="input-box !w-96"
                  {...register("mobile_number", { required: true })}
                />
              </div>
            </div>
                      
          </div>
        </div>
      </div>
    </div>
  );
}
