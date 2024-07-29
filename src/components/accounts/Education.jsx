// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import Select from "react-select";
// import { customSelectStyles } from "../../utils/customStyles";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { yearsListing } from "../../constants/selectDate";

// export default function EducationDetail({
//   loader,
//   educationStatus,
//   setEducationStatus,
//   control,
//   register,
//   errors,
// }) {
//   // year listing
//   let yearList = yearsListing?.map((i) => {
//     return { id: i, value: i, label: i };
//   });
//   const [selectedYear, setSelectedYear] = useState("");
//   const handleYear = (i) => {
//     setSelectedYear(i);
//   };

//   return (
//     <div className="bg-white px-8 py-6">
//       <div className="px-3 pb-6">
//         <h5 className="heading">Education and Cetifications</h5>
//         <p className="text-sm">
//           Give the
//           <span className="font-bold uppercase">Highest education </span> and
//           your Professional Certifications
//         </p>
//         <div className="flex gap-4 items-center mt-3">
//           <div
//             onClick={() => setEducationStatus("basic")}
//             className={`rounded-full border cursor-pointer  w-72 h-8 flex items-center justify-center ${
//               educationStatus === "basic" ? "active-option" : "border-[#808080]"
//             }`}
//           >
//             Basic (Bachelors/Diploma/School)
//           </div>
//           <div
//             onClick={() => setEducationStatus("masters")}
//             className={`rounded-full cursor-pointer border w-20 h-8 flex justify-center items-center
//                   ${
//                     educationStatus === "masters"
//                       ? "active-option"
//                       : "border-[#808080]"
//                   }   `}
//           >
//             Masters
//           </div>
//           <div
//             onClick={() => setEducationStatus("doctorate")}
//             className={`rounded-full cursor-pointer border w-28 h-8 flex justify-center items-center
//                   ${
//                     educationStatus === "doctorate"
//                       ? "active-option"
//                       : "border-[#808080]"
//                   }   `}
//           >
//             Doctorate
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col gap-y-4 max-w-2xl">
//         <div className="flex px-3 group flex-col space-y-2">
//           <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
//             Course
//           </label>
//           <Controller
//             name="course"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => (
//               <Select
//                 // required
//                 // selected={selectedState}
//                 // value={selectedState}
//                 // onChange={(selectedOption) => {
//                 //   handleState(selectedOption);
//                 //   field.onChange(selectedOption);
//                 // }}
//                 components={{
//                   IndicatorSeparator: () => null,
//                 }}
//                 // options={stateLists}
//                 isSearchable={true}
//                 styles={customSelectStyles}
//                 placeholder="Select"
//                 className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
//               />
//             )}
//           />
//           {/* {errors.state && (
//         <span className="text-xs font-medium text-red-500">
//           {errors.state?.message}
//         </span>
//       )} */}
//                     
//         </div>
//         <div className="flex px-3 group flex-col space-y-2">
//           <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
//             Specialization
//           </label>
//           <Controller
//             name="specialization"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => (
//               <Select
//                 // required
//                 // selected={selectedState}
//                 // value={selectedState}
//                 // onChange={(selectedOption) => {
//                 //   handleState(selectedOption);
//                 //   field.onChange(selectedOption);
//                 // }}
//                 components={{
//                   IndicatorSeparator: () => null,
//                 }}
//                 // options={stateLists}
//                 isSearchable={true}
//                 styles={customSelectStyles}
//                 placeholder="Select"
//                 className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
//               />
//             )}
//           />
//           {/* {errors.state && (
//         <span className="text-xs font-medium text-red-500">
//           {errors.state?.message}
//         </span>
//       )} */}
//                     
//         </div>
//         <div className="flex px-3 group flex-col space-y-2">
//           <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
//             University / Institute
//           </label>
//           <Controller
//             name="university"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => (
//               <Select
//                 // required
//                 // selected={selectedState}
//                 // value={selectedState}
//                 // onChange={(selectedOption) => {
//                 //   handleState(selectedOption);
//                 //   field.onChange(selectedOption);
//                 // }}
//                 components={{
//                   IndicatorSeparator: () => null,
//                 }}
//                 // options={stateLists}
//                 isSearchable={true}
//                 styles={customSelectStyles}
//                 placeholder="Select"
//                 className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
//               />
//             )}
//           />
//           {/* {errors.state && (
//         <span className="text-xs font-medium text-red-500">
//           {errors.state?.message}
//         </span>
//       )} */}
//                     
//         </div>
//         <div className="flex px-3 group flex-col space-y-2">
//           <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
//             Institute Location
//           </label>
//           <input
//             type="text"
//             className="input-box"
//             {...register("instituteLocation", { required: true })}
//           />
//           {/* {errors.state && (
//         <span className="text-xs font-medium text-red-500">
//           {errors.state?.message}
//         </span>
//       )} */}
//                     
//         </div>

//         <div className="flex px-3 group flex-col space-y-2">
//           <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
//             Passing Year
//           </label>
//           <Controller
//             name="passingYear"
//             control={control}
//             defaultValue=""
//             rules={{ required: true }}
//             render={({ field }) => (
//               <Select
//                 // required
//                 selected={selectedYear}
//                 value={selectedYear}
//                 onChange={(selectedOption) => {
//                   handleYear(selectedOption);
//                   field.onChange(selectedOption);
//                 }}
//                 components={{
//                   IndicatorSeparator: () => null,
//                 }}
//                 options={yearList}
//                 isSearchable={true}
//                 styles={customSelectStyles}
//                 placeholder="Select"
//                 className="rounded border border-[#C7C7C7] w-36 focus:border-[#2E2E2E] text-sm border-opacity-60 h-10 text-zinc-500"
//               />
//             )}
//           />{" "}
//           {/* {errors.state && (
//         <span className="text-xs font-medium text-red-500">
//           {errors.state?.message}
//         </span>
//       )} */}
//                     
//         </div>
//         <button className="bg-[#1E3964] w-72 mt-4 h-10  rounded-full text-sm px-1.5 justify-center flex items-center text-white gap-2 ">
//           {loader ? (
//             <div className="flex items-center gap-3">
//               <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
//               creating please wait...
//             </div>
//           ) : (
//             <>
//               <p>Great Start. Move to the next step!</p>
//               <ArrowRight className="size-5" />
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customSelectStyles } from "../../utils/customStyles";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { yearsListing } from "../../constants/selectDate";
import { useQuery } from "@tanstack/react-query";
import {
  COURSES_LIST,
  LOCATIONS_LIST,
  newRequest,
  SPECIALIZATION,
} from "../../api";

export default function EducationDetail({
  loader,
  educationStatus,
  setEducationStatus,
  register,
  control,
  errors,
}) {
  // const { register, control } = useForm();
  // year listing
  let yearList = yearsListing?.map((i) => {
    return { id: i, value: i, label: i };
  });
  const [selectedYear, setSelectedYear] = useState("");
  const handleYear = (i) => {
    setSelectedYear(i);
  };

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
  const [location, setLocation] = useState("");
  const { data: locationListing } = useQuery({
    queryKey: ["locationListing"],
    queryFn: () => newRequest.get(LOCATIONS_LIST).then((res) => res.data),
  });
  console.log(locationListing);
  let locationList = locationListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleLocation = (i) => {
    setLocation(i);
  };

  return (
    <div className="bg-white px-8 py-6">
      <div className="px-3 pb-6">
        <h5 className="heading">Education and Cetifications</h5>
        <p className="text-sm">
          Give the
          <span className="font-bold uppercase">Highest education </span> and
          your Professional Certifications
        </p>
        <div className="flex gap-4 items-center mt-3">
          <div
            onClick={() => setEducationStatus("basic")}
            className={`rounded-full border cursor-pointer  w-72 h-8 flex items-center justify-center ${
              educationStatus === "basic" ? "active-option" : "border-[#808080]"
            }`}
          >
            Basic (Bachelors/Diploma/School)
          </div>
          <div
            onClick={() => setEducationStatus("masters")}
            className={`rounded-full cursor-pointer border w-20 h-8 flex justify-center items-center
                  ${
                    educationStatus === "masters"
                      ? "active-option"
                      : "border-[#808080]"
                  }   `}
          >
            Masters
          </div>
          <div
            onClick={() => setEducationStatus("doctorate")}
            className={`rounded-full cursor-pointer border w-28 h-8 flex justify-center items-center
                  ${
                    educationStatus === "doctorate"
                      ? "active-option"
                      : "border-[#808080]"
                  }   `}
          >
            Doctorate
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 max-w-2xl">
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
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
          {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                    
        </div>
        <div className="flex px-3 group flex-col space-y-2">
          <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
            University/ Institute
          </label>
          <input
            type="text"
            className="input-box"
            {...register("university", { required: false })}
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
            // rules={{ required: true }}
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
