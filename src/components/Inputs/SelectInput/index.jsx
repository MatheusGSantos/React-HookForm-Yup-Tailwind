import { MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import "./styles.css";

const OPTIONS = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
];

const SelectInput = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full text-white">
      {label && (
        <label className="text-sm text-pink-primary" htmlFor={name}>
          {label}
        </label>
      )}

      <Select
        variant="standard"
        {...rest}
        ref={ref}
        SelectDisplayProps={{ style: { color: "white" } }}
      >
        {OPTIONS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
});

SelectInput.displayName = "SelectInput";

SelectInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SelectInput;
