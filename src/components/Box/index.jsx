import PropTypes from "prop-types";

export function Box({ children }) {
  return (
    <div className="bg-gray-dark p-4 flex flex-col items-center justify-center gap-5 w-[400px] rounded-md">
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
