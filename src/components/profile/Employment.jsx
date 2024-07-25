import { Bold, Italic, List, MapPin, Pen } from "lucide-react";
import React, { useState } from "react";
import { newRequest } from "../../api";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];
export default function Employment({ details }) {
  const [loader, setLoader] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editor] = useState(() => withReact(createEditor()));
  console.log(details);
  const {
    id,
    employer_country,
    employer_state,
    currency,
    designation,
    employer_name,
    working_status,
    start_month,
    start_year,
    end_month,
    end_year,
    monthly_salary,
    member,
  } = details ?? {};
  console.log(id);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schema),
  });

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

  return (
    <div className="w-full bg-white px-4 py-6 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
            <img src="/icons/bag.svg" alt="" className="size-5" />
          </div>
          <div className="w-full">
            <h3 className="font-bold">Employment History</h3>
            <div className="mt-5">
              {!isEdit ? (
                <div className=" bg-[#E9EFFE] w-full rounded-md">
                  <div className="flex justify-between px-3 py-3">
                    <div className="flex gap-6">
                      <div className="bg-[#FF5722]/40 rounded-full size-8 flex items-center justify-center">
                        <MapPin className="text-[#FF5722] size-5" />
                      </div>

                      <div className="flex flex-col w-fit">
                        <h3 className=" font-medium">{designation}</h3>
                        <p>
                          {employer_name}, {employer_state?.name},{" "}
                          {employer_country?.name}
                        </p>
                        {/* <p className="text-sm">( Retail, Fashion )</p> */}
                        <p className="">Job Description</p>
                        <p className="text-sm">
                          Reference site about Lorem Ipsum, giving information
                          on its origins
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-5">
                      <div className="text-xs flex flex-col gap-y-1">
                        <p className=" whitespace-nowrap">
                          {start_month} {start_year} - {end_month} {end_year}{" "}
                          (17 Years, 11 Months)
                        </p>
                        <p className=" text-end">
                          Website :
                          <span className="text-blue-600">
                            <a href="www.abcgroup.com">www.abcgroup.com</a>
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
              ) : (
                <div className="max-w-2xl flex flex-col gap-y-3">
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Industry
                    </label>
                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Sub-Industry
                    </label>

                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your Sub-industry"
                    />
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Functional Area
                    </label>

                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
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

                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                      type="text"
                      placeholder="Tell us your industry"
                    />
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Are you currently working here ?
                    </label>
                    <div className="flex gap-4">
                      <div className="border border-[#3467F6] bg-[#E9EFFE] h-8 rounded-full w-20 flex items-center justify-center">
                        Yes
                      </div>
                      <div className="border border-[#3467F6] bg-[#E9EFFE] h-8 rounded-full w-56 flex items-center justify-center">
                        This is my latest employer
                      </div>
                    </div>
                  </div>
                  <div className="flex px-3 group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Working Period
                    </label>
                    <div className="grid grid-cols-5 gap-x-1.5 items-center justify-items-center">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2 "
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <div>To</div>
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2 "
                        type="text"
                        placeholder="Tell us your industry"
                      />
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
                      />
                    </div>
                  </div>
                  <div className="flex px-3 group flex-col space-y-2">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Monthly Salary
                    </label>
                    <div className="grid grid-cols-2 gap-x-1.5 w-[60%]">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        placeholder="Tell us your industry"
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
          <div className=" text-blue-600 w-20">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
