export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    border: "none",
    backgroundColor: "#fff",
    textTransform: "capitalize",
    
  }),

  option: (provided) => ({
    ...provided,
    color: "#333",
  }),
  menuList: (base) => ({
    ...base,
    "::-webkit-scrollbar": {
      width: "1px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#3A3A3A",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#808080",
  }),
  input: (provided) => ({
    ...provided,
    color: "#808080",

  }),

}