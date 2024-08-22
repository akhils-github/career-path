import {
  COURSES_LIST,
  LOCATIONS_LIST,
  newRequest,
  SPECIALIZATION,
  UNIVERSITY_LIST,
} from "@/api";
import { customSelectStyles } from "../../utils/customStyles";
import Select from "react-select";
import { MapPin, Pen } from "lucide-react";
import React, { useState } from "react";
import {Controller, useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function EducationDetails() {
  const [isEdit, setIsEdit] = useState(true);
  const [loader, setLoader] = useState(false);
  const queryClient = useQueryClient();
  const [educationStatus, setEducationStatus] = useState("");

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

  //GET ALL COURSES
  const [courses, setCourses] = useState("");
  const { data: courseListing } = useQuery({
    queryKey: ["courseListing"],
    queryFn: () => newRequest.get(COURSES_LIST).then((res) => res.data),
  });
  console.log(courseListing);
  let courseList = courseListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleCourse = (i) => {
    setCourses(i);
  };

  //GET SPECIALIZATION
  const [specialization, setSpecialization] = useState("");
  const { data: specializationListing } = useQuery({
    queryKey: ["specializationListing"],
    queryFn: () => newRequest.get(SPECIALIZATION).then((res) => res.data),
  });
  console.log(specializationListing);
  let specializationList = specializationListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleSpecial = (i) => {
    setSpecialization(i);
  };

  //GET LOCATION LIST
  const [university, setUniversity] = useState("");
  const { data: universityListing } = useQuery({
    queryKey: ["universityListing"],
    queryFn: () => newRequest.get(UNIVERSITY_LIST).then((res) => res.data),
  });
  console.log(universityListing);
  let universityList = universityListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleUniversity = (i) => {
    setUniversity(i);
  };

  //GET UNIVERSITY LIST
  const [location, setLocation] = useState("");
  const { data: locationListing } = useQuery({
    queryKey: ["locationListing"],
    queryFn: () => newRequest.get(LOCATIONS_LIST).then((res) => res.data),
  });
  let locationList = locationListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleLocation = (i) => {
    setLocation(i);
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
    <div className=" py-4 px-4 bg-white  rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
              <img src="/icons/education.svg" alt="" className="size-5" />
            </div>
            <div>
              <h3 className="font-bold">Education Details</h3>
            </div>
          </div>
          <div className=" text-blue-600 ">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        </div>
        <div className="ml-16 py-3 px-2 mr-8   rounded-md">
          {isEdit ? (
            <div className="flex justify-between">
              <div className="flex gap-6">
                <div className="bg-[#FF5722]/40 rounded-full size-8 flex items-center justify-center">
                  <MapPin className="text-[#FF5722] size-5" />
                </div>
                <div>
                  <h3 className=" font-medium">
                    Bachelor of Arts, Arts&Humanities
                  </h3>
                  <p className="text-sm">URS Institute, Kuwait.</p>
                  <p className="text-xs">Year of Passing : 2015</p>
                </div>
              </div>
              <div className="flex gap-5 pr-5">
                <div
                  onClick={() => setIsEdit(!isEdit)}
                  className="border-2 cursor-pointer rounded-full w-fit px-1.5  h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
                >
                  <span>Edit</span>
                  <Pen className="size-2 fill-[#275DF5]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-md flex flex-col gap-y-3 my-4">
              <div className="flex px-3 group flex-col space-y-1">
                <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                  Qualification
                </label>
                <div className="flex gap-4 items-center mt-3">
                  <div
                    onClick={() => setEducationStatus("Basic")}
                    className={`rounded-full border cursor-pointer  w-fit px-3 h-8 flex items-center justify-center ${
                      educationStatus === "Basic"
                        ? "active-option"
                        : "border-[#808080]"
                    }`}
                  >
                    Basic(Bachelors/Diploma/School)
                  </div>
                  <div
                    onClick={() => setEducationStatus("Masters")}
                    className={`rounded-full border cursor-pointer  w-fit px-3 h-8 flex items-center justify-center ${
                      educationStatus === "Masters"
                        ? "active-option"
                        : "border-[#808080]"
                    }`}
                  >
                    Masters
                  </div>
                  <div
                    onClick={() => setEducationStatus("Doctorate")}
                    className={`rounded-full cursor-pointer border w-28 h-8 flex justify-center items-center
                  ${
                    educationStatus === "Doctorate"
                      ? "active-option"
                      : "border-[#808080]"
                  }   `}
                  >
                    Doctorate
                  </div>
                </div>
              </div>
              <div className="flex px-3 group flex-col space-y-1">
                <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                  Course
                </label>

                <Controller
            name="course"
            control={control}
            defaultValue=""
            // rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                selected={courses}
                value={courses}
                onChange={(selectedOption) => {
                  handleCourse(selectedOption);
                  field.onChange(selectedOption);
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={courseList}
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
                  Specialization
                </label>

                <Controller
            name="specialization"
            control={control}
            defaultValue=""
            // rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                selected={specialization}
                value={specialization}
                onChange={(selectedOption) => {
                  handleSpecial(selectedOption);
                  field.onChange(selectedOption);
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={specializationList}
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
                  University / Institute
                </label>

                <Controller
            name="university"
            control={control}
            defaultValue=""
            // rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                selected={university}
                value={university}
                onChange={(selectedOption) => {
                  handleUniversity(selectedOption);
                  field.onChange(selectedOption);
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={universityList}
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
                  Institute Location
                </label>

                <Controller
            name="instituteLocation"
            control={control}
            defaultValue=""
            // rules={{ required: true }}
            render={({ field }) => (
              <Select
                // required
                selected={location}
                value={location}
                onChange={(selectedOption) => {
                  handleLocation(selectedOption);
                  field.onChange(selectedOption);
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={locationList}
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
                  Passing Year
                </label>

                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-36 h-10 rounded-md px-2"
                  type="date"
                  placeholder="Tell us your industry"
                />
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
        {/* <div className=" bg-[#E9EFFE]  rounded-md">
          <div className="flex justify-between">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">
                  Bachelor of Arts, Arts&Humanities
                </h3>
                <p>URS Institute, Kuwait.</p>
                <p className="text-sm">Year of Passing : 2015</p>
              </div>
            </div>
            <div className="flex gap-5 pr-5">
              <div
                onClick={() => setIsEdit(!isEdit)}
                className="border-2 cursor-pointer rounded-full w-fit px-1.5  h-6 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
              >
                <span>Edit</span>
                <Pen className="size-2 fill-[#275DF5]" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
