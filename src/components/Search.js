import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function Search({
  options,
  onChange,
  value,
  name,
  onOptionClick,
}) {
  return (
    <Autocomplete
    sx={{ width: 275, margin:5 }}
      options={options}
      inputValue={value}
      renderOption={(props, option, state) => (
        <li key={option.value} style={{padding:'15px'}} onClick={() => onOptionClick(option.value)}>
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="search 👀"
          name={name}
          onChange={onChange}
          fullWidth
          type="search"
        />
      )}
    />
  );
}
