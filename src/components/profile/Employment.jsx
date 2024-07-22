import { Pen } from "lucide-react";
import React, { useState } from "react";
import { newRequest } from "../../api";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function Employment({ details }) {
  const [loader, setLoader] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
    <div className=" bg-white px-4 py-5 rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
              Icon
            </div>
            <div>
              <h3 className="font-bold">Employment History</h3>
            </div>
          </div>
          <div className=" text-blue-600 ">
            <button className="flex gap-1 border border-blue-600 rounded-full px-2">
              Add +
            </button>
          </div>
        </div>

        <div className=" bg-[#E9EFFE]  ml-16 rounded-md">
          <div className="flex justify-between px-3 py-3">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">{designation}</h3>
                <p>
                  {employer_name}, {employer_state?.name},{" "}
                  {employer_country?.name}
                </p>
                {/* <p className="text-sm">( Retail, Fashion )</p> */}
                <p className="">Job Description</p>
                <p className="text-sm">
                  Reference site about Lorem Ipsum, giving information on its
                  origins
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-xs flex flex-col gap-y-1">
                <p className=" whitespace-nowrap">
                  {start_month} {start_year} - {end_month} {end_year} (17 Years,
                  11 Months)
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

        {/* <div className=" bg-[#E9EFFE] my-5  ml-16 rounded-md">
          <div className="flex justify-between px-3 py-3">
            <div className="flex gap-6">
              <div className="bg-[#1F69FF66] rounded-full size-12 flex items-center justify-center">
                Icon
              </div>
              <div>
                <h3 className=" font-medium">Graphic Designer</h3>
                <p>RS Group of companies, Sadasd, Kuwait.</p>
                <p className="text-sm">( Retail, Fashion )</p>
                <p className="">Job Description</p>
                <p className="text-sm">
                  Reference site about Lorem Ipsum, giving information on its
                  origins
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-xs flex flex-col gap-y-1">
                <p className=" whitespace-nowrap">
                  Jan 2006 - jan 2007 (17 Years, 11 Months)
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
        </div> */}
      </div>
    </div>
  );
}
