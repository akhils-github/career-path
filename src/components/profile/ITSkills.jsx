import { CERTIFICATION_VIEW, newRequest } from "@/api";
import { monthsData, yearsListing } from "@/constants/selectDate";
import { customSelectStyles } from "@/utils/customStyles";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

export default function ITSkills() {
  const [isEdit, setIsEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const queryClient = useQueryClient();
  
  const { data } = useQuery({
    queryKey: ["certificationListing"],
    queryFn: () => newRequest.get(CERTIFICATION_VIEW).then((res) => res.data),
  });
  console.log(data);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedData) {
      setValue("certification_name", selectedData?.certification_name);
    }
  }, [selectedData]);
  useEffect(() => {
    if (selectedData) {
      const lables= {id: selectedData?.pass_year, value:selectedData?.pass_year, label: selectedData?.pass_year}

      setValue("pass_year", selectedData?.pass_year);
      setEndYear(lables)
    }
  }, [selectedData]);
  useEffect(() => {
    if (selectedData) {
      const lables= {id: selectedData?.study_year, value:selectedData?.study_year, label: selectedData?.study_year}
      setValue("study_year", selectedData?.study_year);
      setStartMonths(lables)
    }
  }, [selectedData]);
  useEffect(() => {
    if (selectedData) {
      const lables= {id: selectedData?.study_month, value:selectedData?.study_month, label: selectedData?.study_month}
      setValue("study_month", selectedData?.study_month);
      handleStartYear(lables)
    }
  }, [selectedData]);


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


  const [endYear, setEndYear] = useState("");
  const handleEndYear = (i) => {
    setEndYear(i);
  };
  const onSubmit = (data) => {
    setLoader(true);
    handleProfile(data);
  };
  const handleProfile = async (data) => {
    const formData = {
      skills: data?.skills,
    };
    try {
      const res =
        //  await newRequest.put(
        //   `${PROFILE_UPDATE}${profile?.id}/`,
        //   formData
        // );
        console.log(res);
      if (res.status == 200) {
        queryClient.invalidateQueries(["profileListing"]);
        setIsEdit(false);
        setLoader(false);
        toast.success("Headline sucessfull");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-white px-4 py-4 rounded-md">
      <div className="flex justify-between  w-full">
        <div className="flex gap-4 w-full ">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
            <img src="/icons/brain.svg" alt="" className="size-5" />
          </div>
          <div className=" w-full">
            <h3 className="font-bold w-full col-span-3">
              IT Skills / Certifications
            </h3>
            {!isEdit ? (
              <div className="grid grid-cols-3 gap-y-3 gap-x-4 w-full">
                {data?.map(
                  ({
                    id,
                    certification_name,
                    pass_year,
                    study_year,
                    study_month,
                    member,
                  }) => (
                    <div
                      key={id}
                      className=" bg-[#E9EFFE] py-3  px-2 rounded-md"
                    >
                      {console.log(selectedData)}
                      <div className="flex gap-1 justify-between">
                        <div className="">
                          <p>{certification_name}</p>
                          <p>{pass_year}</p>
                          <p className="text-sm">
                            {study_year} Years {study_month} Months
                          </p>
                        </div>
                        <div
                          onClick={() => {setIsEdit(!isEdit);
                            setSelectedData({ // Set only the selected item
                              id,
                              certification_name,
                              pass_year,
                              study_year,
                              study_month,
                              member
                            });
                          }}
                          className="border-2 cursor-pointer rounded-full w-fit px-1.5  h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
                        >
                          <span>Edit</span>
                          <Pen className="size-2 fill-[#275DF5]" />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="max-w-md flex flex-col gap-y-3 my-4">
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Skill / Certification Name
                  </label>
                  <input
                    {...register("certification_name")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                    type="text"
                    placeholder="Tell us your industry"
                  />
                </div>
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Last Used
                  </label>

                  <Controller
                    name="pass_year"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        required
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
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Total Experience
                  </label>
                  <div className="flex items-center gap-x-3">
                    <Controller
                      name="study_year"
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
                    <p className="text-sm">Year</p>
                    <Controller
                      name="study_month"
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
                    <p className="text-sm">Months</p>
                  </div>
                </div>

                <div className="flex gap-4 px-2 my-4">
                  <button className="h-10 w-24  bg-[#1E3964] rounded-full text-white flex items-center justify-center">
                    Save
                  </button>

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
        {!isEdit && (
          <div className="w-20 text-blue-600 ">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
