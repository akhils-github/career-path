import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { customSelectStyles } from "../../utils/customStyles";
export default function PersonalDetail() {
  const { register, control } = useForm();
  return (
    <div>
      {" "}
      <div className="bg-white px-16 py-6">
        <div className="px-3 pb-6">
          <h5 className="text-2xl font-semibold">Personal Details</h5>
          <p className="text-sm">Tell us more about yourself.</p>
        </div>
        <form className="flex flex-col gap-y-4 max-w-3xl">
          <div className="grid grid-cols-3">
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                First Name
              </label>
              <input type="text" className="input-box" />
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Middle Name
              </label>
              <input type="text" className="input-box" />
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Last Name
              </label>
              <input type="text" className="input-box" />
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Gender
            </label>
            <div className="flex gap-5 items-center">
              <div className="rounded-full border border-[#808080] w-24 h-7 flex items-center justify-center">
                Male
              </div>
              <div className="rounded-full border border-[#808080] w-24 h-7 flex items-center justify-center">
                Female
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Industry
              </label>
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
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Industry
              </label>
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
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
            <div className="flex px-3 group flex-col space-y-2">
              <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
                Industry
              </label>
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
              {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                        
            </div>
          </div>

          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Nationality
            </label>
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
            {/* {errors.state && (
        <span className="text-xs font-medium text-red-500">
          {errors.state?.message}
        </span>
      )} */}
                      
          </div>
          <div className="flex px-3 group flex-col space-y-2">
            <label className="text-[#3A3A3A] text-[0.8rem] group-focus-within:text-[#2E2E2E] font-medium">
              Mobile Number
            </label>
            <div className="flex gap-4">
              <div>
                <input type="text" name="" id="" className="input-box !w-20" />
              </div>
              <div className="!w-28 ">
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
                      className="rounded border border-[#C7C7C7] w-full focus:border-[#2E2E2E] text-sm border-opacity-60 h-11 text-zinc-500"
                    />
                  )}
                />
              </div>
              <div>
                <input type="text" name="" id="" className="input-box !w-96" />
              </div>
            </div>
                      
          </div>
        </form>
      </div>
    </div>
  );
}
