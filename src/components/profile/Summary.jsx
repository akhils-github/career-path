import { GET_SUMMARY, newRequest, UPDATE_SUMMARY } from "@/api";
import { formatDuration, parseDuration } from "@/utils/helper";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pen } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Summary({ userData }) {
  const queryClient = useQueryClient();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const { isLoading, error, data } = useQuery({
    queryKey: ["profileSummary"],
    queryFn: () =>
      newRequest.get(`${GET_SUMMARY}`).then((res) => {
        console.log(res);
        return res;
      }),
    select: (response) => response.data,
    staleTime: 0,
    cacheTime: 0,
  });

  console.log(data);
  const [isEdit, setIsEdit] = useState(false);
  const {
    current_job_title,
    summary_text,
    current_salary,
    total_experience,
    total_gulf_experience,
    awards,
    projects,
  } = data ?? {};

  useEffect(() => {
    if (data) {
      const total = parseDuration(total_experience)
      const gulf = parseDuration(total_gulf_experience)
      console.log(gulf)
      setValue("current_job_title", current_job_title);
      setValue("summary_text", summary_text);
      setValue("current_salary", current_salary);
      setValue("total_year", total?.years);
      setValue("total_month", total?.months);
      setValue("gulf_year", gulf?.years);
      setValue("gulf_month", gulf?.months);
      setValue("awards", awards);
      setValue("projects", projects);
    }
  }, [data]);
  // resolver: yupResolver(schema),
  const onSubmit = (data) => {
    setLoader(true);
    handleProfile(data);
  };
  const handleProfile = async (data) => {
    console.log(data);
    const formData = {
      total_experience: formatDuration(data?.total_year,data?.total_month),
      total_gulf_experience: formatDuration(data?.gulf_year,data?.gulf_month),
      awards: data?.awards,
      projects: data?.projects,
      current_salary: data?.current_salary,
      current_job_title: data?.current_job_title,
      summary_text: data?.summary_text,
    };
    console.log(formData)
    try {
      const res =
         await newRequest.put(UPDATE_SUMMARY,
          formData
        );
        console.log(res);
      if (res.status == 200) {
        queryClient.invalidateQueries(["profileSummary"]);
        setIsEdit(false);
        setLoader(false);
        toast.success("Headline sucessfull");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-3 py-6 bg-white mb-4 pb-6 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-6 w-full">
          <div className="bg-[#1F69FF66] rounded-full size-10 flex items-center justify-center">
            <img src="/icons/building.svg" alt="" className="size-5" />
          </div>
          <div className="w-full ">
            <div className="mb-5">
              <h3 className="font-bold ">Professional Summary</h3>
            </div>
            {!isEdit ? (
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="text-sm text-[#000000B2]">
                    {/* {current_job_title} */} Career Snapshot
                  </p>
                  <p className="">{summary_text}</p>
                </div>

                <div className="flex gap-4">
                  <div className="">
                    <p className="text-sm text-[#000000B2]">
                      Total Work Experience
                    </p>
                    <p>{total_experience}</p>
                  </div>
                  <div className="">
                    <p className="text-sm text-[#000000B2]">
                      Total Gulf Experience
                    </p>
                    <p>{total_gulf_experience}</p>
                  </div>
                  <div className="">
                    <p className="text-sm text-[#000000B2]">
                      Current / Latest Monthly salary
                    </p>
                    <p>
                      {current_salary}
                      {/* {employer_details?.monthly_salary} */}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#000000B2]">
                    Major Achievements / Projects
                  </p>
                  <p className="">{projects}</p>
                </div>
                <div>
                  <p className="text-sm text-[#000000B2]">Honors and Awards</p>
                  <p className="">{awards}</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="my-3 flex flex-col gap-y-3 b  w-full"
              >
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Career Snapshot
                  </label>
                  <textarea
                    {...register("summary_text")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-20 rounded-md px-2"
                  />
                </div>
                <div className="grid grid-cols-2 w-full gap-x-4 items-center px-3 space-y-1 whitespace-nowrap ">
                  <div className="flex  group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Total Work Experience
                    </label>
                    <div className="flex gap-1 my-3 items-center">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        {...register("total_year")}
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Years</p>
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        {...register("total_month")}
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Months</p>
                    </div>
                  </div>

                  <div className="flex group flex-col space-y-1">
                    <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                      Total Gulf Experience
                    </label>
                    <div className="flex gap-1  my-3 items-center">
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        {...register("gulf_year")}
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Years</p>
                      <input
                        className="border border-[#407FFF] bg-[#E9EFFE] w-full h-10 rounded-md px-2"
                        type="text"
                        {...register("gulf_month")}
                        placeholder="Tell us your industry"
                      />
                      <p className="text-sm">Months</p>
                    </div>
                  </div>
                </div>
                <div className="flex group flex-col space-y-1 px-3">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Current / Latest Monthly salary
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-16 h-10 rounded-md px-2"
                      type="text"
                      // {...register("headline")}
                      placeholder="Tell us your industry"
                    />
                    <input
                      className="border border-[#407FFF] bg-[#E9EFFE] w-32 h-10 rounded-md px-2"
                      type="text"
                      {...register("current_salary")}
                      placeholder="Tell us your industry"
                    />
                  </div>
                </div>
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Major Achievements / Projects
                  </label>
                  <textarea
                    {...register("projects")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-16 rounded-md px-2"
                  />
                </div>
                <div className="flex px-3 group flex-col space-y-1">
                  <label className="text-[#3A3A3A] text-base group-focus-within:text-[#2E2E2E] font-medium">
                    Honors & Awards
                  </label>
                  <textarea
                    {...register("awards")}
                    className="border border-[#407FFF] bg-[#E9EFFE] w-full h-16 rounded-md px-2"
                  />
                </div>

                <div className="flex gap-2 items-center px-3 mt-3">
                  <button className="flex justify-center items-center text-white bg-[#1E3964] rounded-full w-20 h-8">
                    Save
                  </button>
                  <div
                    onClick={() => setIsEdit(!isEdit)}
                    className="flex justify-center items-center cursor-pointer text-[#1E3964] font-medium border-2 border-[#1E3964] rounded-full w-20 h-8"
                  >
                    Cancel
                  </div>
                </div>
              </form>
            )}
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
    </div>
  );
}
