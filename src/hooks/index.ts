import { useState } from "react";

export const useField = ({ type }:any) => {
    const [value, setValue] = useState("");

    const onChange = (event:any) => {
      setValue(event.target.value);
    }
    return {
      type,
      value,
      onChange
    }
};
