import {
  CITIES,
  COUNTRIES,
  LANGUAGES,
  newRequest,
  RELIGION,
  STATES,
} from "@/api";
import { useUserStore } from "@/lib/user";
import { customSelectStyles } from "@/utils/customStyles";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

export default function PersonalDetails() {
  const [isEdit, setIsEdit] = useState(false);
  const [loader, setLoader] = useState(false);
  const queryClient = useQueryClient();
  const { user } = useUserStore((state) => state);
  const [visaStatus, setVisaStatus] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isLicense, setIsLicense] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

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

  // GET all Countries
  const [countries, setCountries] = useState("");
  const { data: countriesListing } = useQuery({
    queryKey: ["countriesListing"],
    queryFn: () => newRequest.get(COUNTRIES).then((res) => res.data),
  });

  let countriesList = countriesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i?.name };
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
    return { id: i.id, value: i.id, label: i?.name };
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
    return { id: i.id, value: i.id, label: i?.name };
  });
  const handleCities = (i) => {
    setSelectedCities(i);
  };

  // handle nationality
  const [selectedNationality, setSelectedNationality] = useState("");
  const handleNationality = (i) => {
    setSelectedNationality(i);
  };
  const [selectedDriving, setSelectedDriving] = useState("");
  const handleDriving = (i) => {
    setSelectedDriving(i);
  };

  // get All Languages
  const [selectedLanguage, setselectedLanguage] = useState("");
  const { data: languagesListing } = useQuery({
    queryKey: ["languagesListing"],
    queryFn: () => newRequest.get(LANGUAGES).then((res) => res.data),
  });

  let languagesList = languagesListing?.map((i) => {
    return { id: i.id, value: i.id, label: i?.name };
  });
  const handleLanguages = (i) => {
    setselectedLanguage(i);
  };

  // get All Religion
  const [selectedReligion, setSelectedReligion] = useState("");
  const { data: religionListing } = useQuery({
    queryKey: ["religionListing"],
    queryFn: () => newRequest.get(RELIGION).then((res) => res.data),
  });
  let religionList = religionListing?.map((i) => {
    return { id: i.id, value: i.id, label: i.name };
  });
  const handleReligion = (i) => {
    setSelectedReligion(i);
  };
  const {
    profile_photo,
    first_name,
    middle_name,
    last_name,
    email,
    alternate_email,
    progress,
    mobile_number,
    alternate_number,
    profile,
    date_of_birth,
    gender,
    marital_status,
    driving_license,
    visa_status,
    linkedin_url,
    nationality,
    country,
    state,
    city,
    languages,
    religion,
    license_issued_from,
  } = user ?? {};

  useEffect(() => {
    if (user) {
      setValue("date_of_birth", date_of_birth);
      setValue("linkedin_url", linkedin_url);
      setValue("alternate_number", alternate_number);
      setValue("alternate_email", alternate_email);
    }
  }, [user]);
console.log(country)
  useEffect(() => {
    if (user) {
      const data = { id: country?.id, value: country?.id, label: country?.name };
      setValue("country", data);
      setCountries(data);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      const data = { id: city?.id, value: city?.id, label: city?.name };
      setValue("city", data);
      setSelectedCities(data);
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      const data = { id: state?.id, value: state?.id, label: state?.name };
      setValue("state", data);
      setStates(data);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const data = {
        id: nationality?.id,
        value: nationality?.id,
        label: nationality?.name,
      };
      setValue("nationality", data);
      setSelectedNationality(data);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const data = {
        id: license_issued_from?.id,
        value: license_issued_from?.id,
        label: license_issued_from?.name,
      };
      setValue("license_issued_from", data);
      setSelectedDriving(data);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const data = {
        id: religion?.id,
        value: religion?.id,
        label: religion?.name,
      };
      setValue("religion", data);
      setSelectedReligion(data);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const data = {
        id: languages?.id,
        value: languages?.id,
        label: languages?.name,
      };
      setValue("languages", data);
      setselectedLanguage(data);
    }
  }, [user]);
  const onSubmit = (data) => {
    setLoader(true);
    handleProfile(data);
  };
  const handleProfile = async (data) => {
    const formData = {
      skills: data?.skills,
    };
    formData.append("gender", selectedGender);
    formData.append("marital_status", maritalStatus);
    formData.append("driving_license", isLicense);
    formData.append("visa_status", visaStatus);
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
    <div className=" bg-white  rounded-md px-4 py-3">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
              <img src="/icons/person.svg" alt="" className="size-5" />
            </div>
            <div>
              <h3 className="font-bold pb-4">Personal Details</h3>
            </div>
          </div>
          {!isEdit && (
            <div
              onClick={() => setIsEdit(!isEdit)}
              className="border-2 cursor-pointer rounded-full w-fit px-2.5  h-8 flex gap-2 justify-center items-center border-[#275DF5] text-[#275DF5] bg-[#E9EFFE]"
            >
              <span>Edit</span>
              <Pen className="size-4 fill-[#275DF5]" />
            </div>
          )}
        </div>
        {!isEdit ? (
          <div className="rounded-md pl-20 capitalize">
            {/* <div className="flex justify-between"> */}
            <div className="grid  grid-cols-3  gap-x-3 gap-y-6">
              <div className=" ">
                <p className="text-sm">Date of Birth</p>
                <p>{date_of_birth}</p>
              </div>

              <div className="">
                <p className="text-sm">Gender</p>
                <p>{gender}</p>
              </div>
              <div className="">
                <p className="text-sm">Nationality</p>
                <p>{nationality?.name}</p>
              </div>
              <div className="">
                <p className="text-sm">Maritel Status</p>
                <p>{marital_status}</p>
              </div>
              <div className="">
                <p className="text-sm">Driving License</p>
                <p>
                  {driving_license} ({license_issued_from?.name})
                </p>
              </div>
              <div className="">
                <p className="text-sm">Current Location</p>
                <p>Dubai, UAE</p>
              </div>
              <div className="">
                <p className="text-sm">Visa Status for Current Location</p>
                <p>{visa_status}</p>
              </div>
              <div className="">
                <p className="text-sm">Visa Expiry</p>
                <p>January 2025</p>
              </div>
              <div className="">
                <p className="text-sm">Language Known</p>
                <p>Arabic</p>
              </div>
              <div className="">
                <p className="text-sm">Religion</p>
                <p>{religion?.name}</p>
              </div>
              <div className="">
                <p className="text-sm">Alternate Email Address</p>
                <p>{alternate_email}</p>
              </div>
              <div className="">
                <p className="text-sm">Alternate Contact Number</p>
                <p>{alternate_number}</p>
              </div>
              <div>
                <p className="text-sm">LinkedIn URL</p>
                <a
                  href={linkedin_url}
                  className="text-sm lowercase  text-blue-600"
                >
                  {linkedin_url}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-16 max-w-2xl flex flex-col gap-y-3">
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Date of Birth
              </label>
              <input
                {...register("date_of_birth")}
                className="border border-[#407FFF] bg-[#E9EFFE] w-56 h-10 rounded-md px-2"
                type="date"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Gender
              </label>

              <div className="flex gap-4 items-center">
                <div
                  onClick={() => setSelectedGender("male")}
                  className={`rounded-full border cursor-pointer  w-24 h-7 flex items-center justify-center ${
                    selectedGender === "male"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Male
                </div>
                <div
                  onClick={() => setSelectedGender("female")}
                  className={`rounded-full border cursor-pointer  w-24 h-7 flex items-center justify-center ${
                    selectedGender === "female"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Female
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Nationality
              </label>
              <Controller
                name="nationality"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
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
                    placeholder="Tell us your Country"
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
                  />
                )}
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
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
                    maritalStatus === "other"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Other
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Do you have a Driving License ?
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
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Driving License issued from
              </label>
              <Controller
                name="license_issued_from"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    selected={selectedDriving}
                    value={selectedDriving}
                    onChange={(selectedOption) => {
                      handleDriving(selectedOption);
                      field.onChange(selectedOption);
                    }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={countriesList}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Tell us your Country"
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
                  />
                )}
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Current Location
              </label>
              <div className="grid grid-cols-3 gap-x-3">
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
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
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
                      placeholder="Tell us your Country"
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
                    />
                  )}
                />
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
                      placeholder="Tell us your Country"
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                What is your visa status in the residing Country ?
              </label>

              <div className="flex flex-wrap max-w-xl group my-2 items-center gap-3 ">
                <div
                  onClick={() => setVisaStatus("citizen")}
                  className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                    visaStatus === "citizen"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Citizen
                </div>
                <div
                  onClick={() => setVisaStatus("entry")}
                  className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                    visaStatus === "entry"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Visit Visa / Entry Visa
                </div>
                <div
                  onClick={() => setVisaStatus("student")}
                  className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                    visaStatus === "student"
                      ? "active-option"
                      : "border-[#808080]"
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
                    visaStatus === "family"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Dependent Visa / Family Visa
                </div>
                <div
                  onClick={() => setVisaStatus("freelancer")}
                  className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                    visaStatus === "freelancer"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Freelancer Visa
                </div>

                <div
                  onClick={() => setVisaStatus("others")}
                  className={`rounded-full border cursor-pointer  w-fit px-2 text-sm h-7 flex items-center justify-center ${
                    visaStatus === "others"
                      ? "active-option"
                      : "border-[#808080]"
                  }`}
                >
                  Others
                </div>
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Visa Expiry
              </label>

              <input
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Languages Known (Max 3)
              </label>

              <Controller
                name="languages"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    required
                    selected={selectedLanguage}
                    value={selectedLanguage}
                    onChange={(selectedOption) => {
                      handleLanguages(selectedOption);
                      field.onChange(selectedOption);
                    }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={languagesList}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Tell us your Country"
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
                  />
                )}
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
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
                    selected={selectedReligion}
                    value={selectedReligion}
                    onChange={(selectedOption) => {
                      handleReligion(selectedOption);
                      field.onChange(selectedOption);
                    }}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    options={religionList}
                    isSearchable={true}
                    styles={customSelectStyles}
                    placeholder="Tell us your Country"
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md"
                  />
                )}
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Alternate Email Address
              </label>

              <input
                {...register("alternate_email")}
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                Alternate Contact Number
              </label>
              <div className="flex items-center gap-3">
                <input
                  className="border border-[#407FFF] bg-[#E9EFFE] w-20 h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
                <input
                  {...register("alternate_number")}
                  className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                  type="text"
                  placeholder="Tell us your industry"
                />
              </div>
            </div>
            <div className="flex px-3 group flex-col space-y-1">
              <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                LinkedIn URL
              </label>

              <input
                {...register("linkedin_url")}
                className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                type="text"
                placeholder="Tell us your industry"
              />
            </div>

            <div className="flex gap-4 px-3 my-6">
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
  );
}
