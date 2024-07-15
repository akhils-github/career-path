import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";

import { customSelectStyles } from "../../utils/customStyles";
import { LANGUAGES, newRequest, RELIGION } from "../../api";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisaStatus(props) {
  const {
    register,
    control,
    visaStatus,
    setVisaStatus,
    maritalStatus,
    setMaritalStatus,
    isLicense,
    setIsLicense,
    countriesListing,
    loader,
  } = props;

  // GET all Countries

  const [countries, setCountries] = useState("");

  let countriesList = countriesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleCountries = (i) => {
    setCountries(i);
  };
  // get All Languages
  const [languages, setLanguages] = useState("");
  const { data: languagesListing } = useQuery({
    queryKey: ["languagesListing"],
    queryFn: () => newRequest.get(LANGUAGES).then((res) => res.data),
  });

  let languagesList = languagesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleLanguages = (i) => {
    setLanguages(i);
  };

  // get All Religion
  const [religion, setReligion] = useState("");
  const { data: religionListing } = useQuery({
    queryKey: ["religionListing"],
    queryFn: () => newRequest.get(RELIGION).then((res) => res.data),
  });

  let religionList = religionListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleReligion = (i) => {
    setReligion(i);
  };
  return (
    <div className="bg-white px-16 py-6">
      <div className="px-3 pb-6">
        <h5>Visa Status for Current Location</h5>
        <div className="flex flex-wrap max-w-xl group my-2 items-center gap-3 ">
          <div
            onClick={() => setVisaStatus("citizen")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "citizen" ? "active-option" : "border-[#808080]"
            }`}
          >
            Citizen
          </div>
          <div
            onClick={() => setVisaStatus("entry")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "entry" ? "active-option" : "border-[#808080]"
            }`}
          >
            Visit Visa / Entry Visa
          </div>
          <div
            onClick={() => setVisaStatus("student")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "student" ? "active-option" : "border-[#808080]"
            }`}
          >
            Student Visa
          </div>
          <div
            onClick={() => setVisaStatus("work")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "work" ? "active-option" : "border-[#808080]"
            }`}
          >
            Work Visa / Employment Visa
          </div>
          <div
            onClick={() => setVisaStatus("family")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "family" ? "active-option" : "border-[#808080]"
            }`}
          >
            Dependent Visa / Family Visa
          </div>
          <div
            onClick={() => setVisaStatus("freelancer")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "freelancer" ? "active-option" : "border-[#808080]"
            }`}
          >
            Freelancer Visa
          </div>

          <div
            onClick={() => setVisaStatus("others")}
            className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
              visaStatus === "others" ? "active-option" : "border-[#808080]"
            }`}
          >
            Others
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 max-w-xl">
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            className="input-box !w-44"
            {...register("dateOfBirth", { required: true })}
          />
          {/* {errors.state && (
    <span className="text-xs font-medium text-red-500">
      {errors.state?.message}
    </span>
  )} */}
                    
        </div>
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Languages Known (Max 3)
          </label>
          <Controller
            name="languages"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
              isMulti
                required
                selected={languages}
                value={languages}
                onChange={(selectedOption) => {
                  handleLanguages(selectedOption);
                  field.onChange(selectedOption);
                }}
                options={languagesList}
                components={{
                  IndicatorSeparator: () => null,
                }}
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
            Religion
          </label>
          <Controller
            name="religion"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                required
                selected={religion}
                value={religion}
                onChange={(selectedOption) => {
                  handleReligion(selectedOption);
                  field.onChange(selectedOption);
                }}
                options={religionList}
                components={{
                  IndicatorSeparator: () => null,
                }}
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
            Marital Status
          </label>
          <div className="flex gap-3 max-w-xl flex-wrap items-center">
            <div
              onClick={() => setMaritalStatus("single")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                maritalStatus === "single"
                  ? "active-option"
                  : "border-[#808080]"
              }`}
            >
              Single
            </div>
            <div
              onClick={() => setMaritalStatus("Married")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                maritalStatus === "Married"
                  ? "active-option"
                  : "border-[#808080]"
              }`}
            >
              Married
            </div>
            <div
              onClick={() => setMaritalStatus("Divorced")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                maritalStatus === "Divorced"
                  ? "active-option"
                  : "border-[#808080]"
              }`}
            >
              Divorced
            </div>
            <div
              onClick={() => setMaritalStatus("Widower")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                maritalStatus === "Widower"
                  ? "active-option"
                  : "border-[#808080]"
              }`}
            >
              Widow(er)
            </div>

            <div
              onClick={() => setMaritalStatus("other")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                maritalStatus === "other" ? "active-option" : "border-[#808080]"
              }`}
            >
              Other
            </div>
          </div>
        </div>
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            Do you have a Driving License?
          </label>
          <div className="flex gap-5 items-center">
            <div
              onClick={() => setIsLicense("yes")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                isLicense === "yes" ? "active-option" : "border-[#808080]"
              }`}
            >
              Yes
            </div>
            <div
              onClick={() => setIsLicense("no")}
              className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                isLicense === "no" ? "active-option" : "border-[#808080]"
              }`}
            >
              No
            </div>
          </div>
        </div>
        {isLicense === "yes" && (
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Driving License issued from
            </label>
            <Controller
              name="licenseIssued"
              control={control}
              defaultValue=""
              rules={{ required: false }}
              render={({ field }) => (
                <Select
                  // required
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
        )}

        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            LinkedIn URL
          </label>
          <input
            type="url"
            className="input-box "
            {...register("linkedin_url", { required: true })}
          />
          {/* {errors.state && (
    <span className="text-xs font-medium text-red-500">
      {errors.state?.message}
    </span>
  )} */}
                               
        </div>
      </div>

      <div className="flex gap-3 items-baseline">
        <button className="bg-[#1E3964] w-44 mt-4 h-10  rounded-full text-sm px-1.5 justify-center flex items-center text-white gap-2 ">
          {loader ? (
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
              creating ...
            </div>
          ) : (
            <>
              <p>Go to my Profile!</p>
              <ArrowRight className="size-5" />
            </>
          )}
        </button>
        <Link to="/profile" className="text-[#275DF5] text-sm">
          Skip, I will fill these details
        </Link>
      </div>
    </div>
  );
}
