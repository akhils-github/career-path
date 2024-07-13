import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customSelectStyles } from "../../utils/customStyles";
import { useQuery } from "@tanstack/react-query";
import {
  COUNTRIES,
  CURRENCIES,
  FUNCTIONAL_AREAS,
  INDUSTRIES,
  STATES,
  SUB_INDUSTRIES,
  newRequest,
} from "../../api";
import { monthsData } from "../../constants/selectDate";

export default function EmploymentDetail({ register, control }) {
  // GET all INDUSTRIES

  const [industries, setIndustries] = useState("");
  const { data: industryListing } = useQuery({
    queryKey: ["industryListing"],
    queryFn: () => newRequest.get(INDUSTRIES).then((res) => res.data),
  });
  console.log(industryListing);
  let industryList = industryListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleIndustry = (i) => {
    setIndustries(i);
  };

  // GET all SUB INDUSTRIES
  const [subIndustries, setSubIndustries] = useState("");
  const { data: subIndustryListing } = useQuery({
    queryKey: ["subIndustryListing"],
    queryFn: () => newRequest.get(SUB_INDUSTRIES).then((res) => res.data),
  });

  let subIndustryList = subIndustryListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleSubIndustry = (i) => {
    setSubIndustries(i);
  };
  // GET all FUNCTIONAL_AREAS
  const [functionalArea, setFunctionalArea] = useState("");
  const { data: functionalAreaListing } = useQuery({
    queryKey: ["functionalAreaListing"],
    queryFn: () => newRequest.get(FUNCTIONAL_AREAS).then((res) => res.data),
  });
  console.log(functionalAreaListing);
  let functionalAreaList = functionalAreaListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleFunctionalArea = (i) => {
    setFunctionalArea(i);
  };

  // GET all Countries

  const [countries, setCountries] = useState("");
  const { data: countriesListing } = useQuery({
    queryKey: ["countriesListing"],
    queryFn: () => newRequest.get(COUNTRIES).then((res) => res.data),
  });

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
  // GET all currency
  const [currency, setCurrency] = useState("");
  const { data: currencyListing } = useQuery({
    queryKey: ["currencyListing"],
    queryFn: () => newRequest.get(CURRENCIES).then((res) => res.data),
  });

  let currencyList = currencyListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleCurrency = (i) => {
    setCurrency(i);
  };

  // GET all start months
  const [startMonths, setStartMonths] = useState("");
  let monthList = monthsData?.map((i) => {
    return { id: i.id, value: i.value, label: i.name };
  })
  const handleStartMonths = (i) => {
    setStartMonths(i);
  };
  // GET all end months
  const [endMonths, setEndMonths] = useState("");;
  const handleEndMonths = (i) => {
    setEndMonths(i);
  };

  return (
    <>
      <div className=" bg-white my-2 px-8 py-6 flex flex-col gap-2 rounded">
        <h5 className="heading">Your Profile Headline</h5>
        <p>Give a small description to explain you better.</p>
        <input
          type="text"
          className="input-box"
          {...register("profileHeading", { required: true })}
          placeholder="Budling Designer in construction / Civil Engineering with 4 years experience"
        />
      </div>
      <div className="bg-white px-8 py-6">
        <div className="px-3 pb-6">
          <h5 className="heading">Your current or latest Employment Details</h5>
          <p>
            Give insights of your professional journey. We will make it more
            colorful!
          </p>
        </div>
        <form className="flex flex-col gap-y-4 max-w-2xl">
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Industry
            </label>
            <Controller
              name="industry"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  selected={industries}
                  value={industries}
                  onChange={(selectedOption) => {
                    handleIndustry(selectedOption);
                    field.onChange(selectedOption);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  options={industryList}
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
              Sub-Industry
            </label>
            <Controller
              name="subIndustry"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  selected={subIndustries}
                  value={subIndustries}
                  onChange={(selectedOption) => {
                    handleSubIndustry(selectedOption);
                    field.onChange(selectedOption);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  options={subIndustryList}
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
              Functional Area
            </label>
            <Controller
              name="functionalArea"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  required
                  selected={functionalArea}
                  value={functionalArea}
                  onChange={(selectedOption) => {
                    handleFunctionalArea(selectedOption);
                    field.onChange(selectedOption);
                  }}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  options={functionalAreaList}
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
              Designation
            </label>
            <input
              type="text"
              className="input-box"
              {...register("designation", { required: true })}
            />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>

          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Employer Name
            </label>
            <input
              type="text"
              className="input-box"
              {...register("employerName", { required: true })}
            />
            {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Employer Location
            </label>
            <div className="grid grid-cols-2 gap-6 ">
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
                    placeholder="Country"
                    className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                )}
              />
              {/* {errors.state && (
            <span className="text-xs font-medium text-red-500">
              {errors.state?.message}
            </span>
          )} */}
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
                    placeholder="State"
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
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Are you currently working here ?
            </label>
            <div className="flex gap-5 items-center">
              <div className="rounded-full border border-[#808080] w-14 h-8 flex items-center justify-center">
                Yes
              </div>
              <div className="rounded-full border border-[#808080] w-56 h-8 flex justify-center items-center ">
                This is my latest employer
              </div>
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Working Period
            </label>
            <div className="grid grid-cols-9  gap-2 items-center w-full">
              <div className="flex gap-3 col-span-4">
                <Controller
                  name="startMonth"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      selected={startMonths}
                      value={startMonths}
                      onChange={(selectedOption) => {
                        handleStartMonths(selectedOption);
                        field.onChange(selectedOption);
                      }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      options={monthList}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Select"
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
                <Controller
                  name="startYear"
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
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
              </div>

              <p className="text-center">To</p>
              <div className="flex gap-2 col-span-4">
                <Controller
                  name="endMonth"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      required
                      selected={endMonths}
                      value={endMonths}
                      onChange={(selectedOption) => {
                        handleEndMonths(selectedOption);
                        field.onChange(selectedOption);
                      }}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      options={monthList}
                      isSearchable={true}
                      styles={customSelectStyles}
                      placeholder="Select"
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
                <Controller
                  name="endYear"
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
                      className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Monthly Salary
            </label>
            <div className="grid grid-cols-2 gap-4 items-center">
              <Controller
                name="currency"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    selected={currency}
                    value={currency}
                    onChange={(selectedOption) => {
                      handleCurrency(selectedOption);
                      field.onChange(selectedOption);
                    }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={currencyList}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Select"
                    className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                  />
                )}
              />
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
            </div>
          </div>
        </form>
      </div>
      <div className=" bg-white my-2 px-8 py-6 flex flex-col gap-2 rounded">
        <h5 className="heading">Key Professional Skills</h5>
        <p>
          Mention your professional skills which can be applied in your work
          place
        </p>
        <input
          type="text"
          className="input-box"
          {...register("skills", { required: true })}
          placeholder="Budling Designer in construction / Civil Engineering with 4 years experience"
        />
      </div>
    </>
  );
}
