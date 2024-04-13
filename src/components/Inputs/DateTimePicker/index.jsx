import TextInput from "../TextInput";
import { CalendarDays } from "lucide-react";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers";

import PropTypes from "prop-types";
import { forwardRef } from "react";

import "./styles.css";

const DateTimePicker = forwardRef(({ placeholder, label, ...rest }, ref) => {
  return (
    <div className="bg-transparent flex flex-col gap-2">
      {label && <label className="text-sm text-pink-primary">{label}</label>}
      <MuiDateTimePicker
        ref={ref}
        components={{
          OpenPickerIcon: CalendarDays,
        }}
        mask="__/__/____ __:__"
        inputFormat="DD/MM/YYYY HH:mm"
        ampm={false}
        ampmInClock={false}
        renderInput={(params) => (
          <TextInput variant="standard" placeholder={placeholder} {...params} />
        )}
        sx={{
          width: "100% !important",
        }}
        {...rest}
      />
    </div>
  );
});

DateTimePicker.displayName = "DateTimePicker";

DateTimePicker.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default DateTimePicker;
