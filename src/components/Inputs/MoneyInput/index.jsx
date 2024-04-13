import { NumericFormat } from "react-number-format";
import TextInput from "../TextInput";

import PropTypes from "prop-types";
import { forwardRef } from "react";

const MoneyInput = forwardRef(({ onChange, ...rest }, ref) => {
  return (
    <NumericFormat
      ref={ref}
      customInput={TextInput}
      prefix="R$ "
      thousandSeparator="."
      decimalSeparator=","
      fixedDecimalScale
      valueIsNumericString
      onValueChange={({ value }) => onChange(value)}
      {...rest}
    />
  );
});

MoneyInput.displayName = "MoneyInput";

MoneyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default MoneyInput;
