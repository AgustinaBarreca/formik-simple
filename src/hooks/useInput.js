import { useState } from 'react';

export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    // set in localStorage
  };

  const reset = () => {
    setValue(initialState);
  };

  // isValid

  return {
    value,
    onChange: handleChange,
    reset,
  };
};
