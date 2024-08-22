import { Bold, Italic, List, MapPin, Pen } from "lucide-react";
import React, { useState } from "react";
import {
  COUNTRIES,
  CURRENCIES,
  FUNCTIONAL_AREAS,
  GET_EMPLOYMENT,
  INDUSTRIES,
  newRequest,
  SUB_INDUSTRIES,
} from "../../api";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { customSelectStyles } from "@/utils/customStyles";
import { monthsData, yearsListing } from "@/constants/selectDate";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];
export default function Employment({ details }) {
  const [loader, setLoader] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [workingStatus, setWorkingStatus] = useState("");

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["employmentDetails"],
    queryFn: () =>
      newRequest.get(`${GET_EMPLOYMENT}`).then((res) => {
        console.log(res);
        return res;
      }),
    select: (response) => response.data,
    staleTime: 0,
    cacheTime: 0,
  });
  console.log(data);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });

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

  // GET all start months and year
  const [startMonths, setStartMonths] = useState("");
  let monthList = monthsData?.map((i) => {
    return { id: i.id, value: i.value, label: i.name };
  });
  console.log(yearsListing);
  let yearList = yearsListing?.map((i) => {
    return { id: i, value: i, label: i };
  });
  console.log(yearList);
  const handleStartMonths = (i) => {
    setStartMonths(i);
  };
  // Get all start years
  const [startYear, setStartYear] = useState("");
  const handleStartYear = (i) => {
    setStartYear(i);
  };

  // GET all end months
  const [endMonths, setEndMonths] = useState("");
  const handleEndMonths = (i) => {
    setEndMonths(i);
  };
  const [endYear, setEndYear] = useState("");
  const handleEndYear = (i) => {
    setEndYear(i);
  };
  const onSubmit = (data) => {
    setLoader(true);
    handleEmployment(data);
  };
  const handleEmployment = async () => {
    const formData = {
      designation: "demon",
      employer_name: "slayer",
      working_status: "yes",
      start_month: "February",
      start_year: 2021,
      end_month: "November",
      end_year: 2023,
      monthly_salary: 6000,
      employer_country: {
        id: 1,
      },
      employer_state: {
        id: 1,
      },
      currency: {
        id: 1,
      },
    };

    try {
      const res = await newRequest.put(`${PROFILE_CREATE}`, formData);
      if (res.status == 200) {
        setLoader(false);
        toast.success("Employment Updated  sucessfully");
        setIsEdit(false);
        // queryClient.invalidateQueries([""]);
      }
    } catch (error) {
      setLoader(false);
      if (error.response.status === 422) {
        toast.error("already exists");
      }
      console.error(error);
    }
  };
  console.log(data);
  return (
    <div className="w-full bg-white px-4 py-6 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-4 w-full">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
            <img src="/icons/bag.svg" alt="" className="size-5" />
          </div>
          <div className="w-full">
            <h3 className="font-bold">Employment History</h3>
            <div className="mt-5 w-full">
              {!isEdit ? (
                <div className="flex flex-col gap-y-3 w-full">
                  {data &&
                    data?.map(
                      ({
                        id,
                        employer_name,
                        designation,
                        employer_country,
                        employer_state,
                        description,
                        start_year,
                        start_month,
                        end_month,
                        end_year,
                        company_website,
                      }) => (
                        <div
                          key={id}
                          className=" bg-[#E9EFFE] py-3 w-full rounded-md"
                        >
                          <div className="flex justify-between px-3 py-3">
                            <div className="flex gap-6">
                              <div className="bg-[#FF5722]/40 rounded-full size-8 flex items-center justify-center">
                                <MapPin className="text-[#FF5722] size-5" />
                              </div>

                              <div className="flex flex-col w-fit">
                                <h3 className=" font-medium">{designation}</h3>
                                <p className="text-sm text-[#000000B2]">
                                  {employer_name}, {employer_country?.name},{" "}
                                  {employer_state?.name}
                                </p>
                                {/* <p className="text-sm">( Retail, Fashion )</p> */}
                                <p className="">Job Description</p>
                                <p className="text-sm">{description}</p>
                              </div>
                            </div>

                            <div className="flex gap-5">
                              <div className="text-xs flex flex-col gap-y-1">
                                <p className=" whitespace-nowrap">
                                  {start_month} {start_year} - {end_month}{" "}
                                  {end_year} (17 Years, 11 Months)
                                </p>
                                <p className=" text-end">
                                  Website :
                                  <span className="text-blue-600">
                                    <a href="www.abcgroup.com">
                                      {company_website}
                                    </a>
                                  </span>
                                </p>
                              </div>
                              <div
                                onClick={() => setIsEdit(!isEdit)}
                                className="border-2 cursor-pointer rounded-full w-fit px-2  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
                              >
                                <span>Edit</span>
                                <Pen className="size-3 fill-[#275DF5]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                </div>
              ) : (
                <div className="max-w-2xl flex flex-col gap-y-3">
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
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
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
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
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
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
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Designation / Role
                    </label>

                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Employer Name
                    </label>

                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Employer Website
                    </label>

                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Employers Location
                    </label>

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
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Are you currently working here ?
                    </label>
                    <div className="flex gap-5 items-center">
                      <div
                        onClick={() => setWorkingStatus("yes")}
                        className={`rounded-full border cursor-pointer  w-14 h-8 flex items-center justify-center ${
                          workingStatus === "yes"
                            ? "active-option"
                            : "border-[#808080]"
                        }`}
                      >
                        Yes
                      </div>
                      <div
                        onClick={() => setWorkingStatus("no")}
                        className={`rounded-full cursor-pointer border w-fit px-3 h-8 flex justify-center items-center
                  ${
                    workingStatus === "no"
                      ? "active-option"
                      : "border-[#808080]"
                  }   `}
                      >
                        No
                      </div>
                    </div>
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
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
                              selected={startYear}
                              value={startYear}
                              onChange={(selectedOption) => {
                                handleStartYear(selectedOption);
                                field.onChange(selectedOption);
                              }}
                              components={{
                                IndicatorSeparator: () => null,
                              }}
                              options={yearList}
                              isSearchable={true}
                              styles={customSelectStyles}
                              placeholder="Select"
                              className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                            />
                          )}
                        />
                      </div>
                      {workingStatus === "no" && (
                        <>
                          <p className="text-center">To</p>
                          <div className="flex gap-2 col-span-4">
                            <Controller
                              name="endMonth"
                              control={control}
                              defaultValue=""
                              rules={{ required: false }}
                              render={({ field }) => (
                                <Select
                                  // required
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
                              rules={{ required: false }}
                              render={({ field }) => (
                                <Select
                                  // required
                                  selected={endYear}
                                  value={endYear}
                                  onChange={(selectedOption) => {
                                    handleEndYear(selectedOption);
                                    field.onChange(selectedOption);
                                  }}
                                  components={{
                                    IndicatorSeparator: () => null,
                                  }}
                                  options={yearList}
                                  isSearchable={true}
                                  styles={customSelectStyles}
                                  placeholder="Select"
                                  className="rounded border border-[#C7C7C7] w-40 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                                />
                              )}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex px-3 group flex-col space-y-2">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Monthly Salary
                    </label>
                    <div className="flex items-center gap-x-1.5 w-[60%]">
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
                            className="rounded border border-[#C7C7C7] w-32 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
                          />
                        )}
                      />
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                    </div>
                  </div>
                  <div className="h-48 mx-3 border-2 border-[#407FFF] rounded bg-[#E9EFFE]">
                    <div className="border-b-2 border-[#3467F6] h-10 flex items-center justify-between px-3">
                      <p className="font-bold">Job Description</p>
                      <div className="flex items-center gap-2 font-bold">
                        <Bold className="size-4 text-gray-600  cursor-pointer" />
                        <Italic className="size-4 text-gray-600  cursor-pointer" />
                        <List className="size-4 text-gray-600  cursor-pointer" />
                      </div>
                    </div>
                    <textarea
                      className="w-full px-3 h-36  bg-transparent pt-2"
                      placeholder="Share your roles, responsibilities etc..."
                    />
                  </div>

                  <div className="flex gap-4 px-3 my-6">
                    <button className="h-10 w-24  bg-[#1E3964] rounded-full text-white flex items-center justify-center">
                      Save
                    </button>
                    <div className="h-10 w-56 cursor-pointer bg-[#1E3964] rounded-full text-white flex items-center justify-center">
                      Remove this Employment
                    </div>
                    <div
                      onClick={() => setIsEdit(false)}
                      className="h-10 w-24 border cursor-pointer border-[#1E3964] rounded-full text-[#1E3964] flex items-center justify-center"
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {!isEdit && (
          <div className=" text-blue-600 w-24">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
