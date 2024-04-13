import PropTypes from "prop-types";

export function Button({ children, ...rest }) {
  return (
    <button
      className="bg-pink-primary px-4 py-2 rounded-md text-white font-medium w-full hover:bg-pink-secondary transition-colors col-span-1"
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
