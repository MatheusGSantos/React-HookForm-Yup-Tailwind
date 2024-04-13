import { forwardRef } from "react";

import PropTypes from "prop-types";

const TextInput = forwardRef(({ label, name, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full text-white">
      <label className="text-sm text-pink-primary" htmlFor={name}>
        {label}
      </label>
      <div className="group py-2 px-1 border-b border-white focus-within:border-pink-primary transition-colors text-xs">
        <input
          ref={ref}
          className="bg-transparent w-full focus:outline-none"
          id={name}
          name={name}
          {...rest}
        />
      </div>
    </div>
  );
});

TextInput.displayName = "TextInput";

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TextInput;
