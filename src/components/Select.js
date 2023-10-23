import React, { useContext, createContext, useState, useEffect } from "react";

const SelectContext = createContext(null);

export const useSelect = () => {
  return useContext(SelectContext);
};

const Select = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.value);
  }, []);

  return (
    <div className="select-container">
      <SelectContext.Provider value={{ value, setValue }}>
        <div onClick={(e) => setOpen((e) => !e)}>{value}</div>
        {open && props.children}
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
