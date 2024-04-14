import dayjs from "dayjs";

/* eslint-disable react/prop-types */
function outputToString(value) {
  if (value === null || value === undefined) {
    return "Empty";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number") {
    return value.toString();
  }

  if (dayjs.isDayjs(value)) {
    return value.format("YYYY-MM-DD HH:mm:ss");
  }

  if (value instanceof Date) {
    return value.toUTCString();
  }

  return JSON.stringify(value);
}

export function Output({ errors, formData }) {
  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <div className="flex flex-col gap-4 text-white w-full">
        <h2>Errors</h2>
        {Object.entries(errors).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex items-center justify-between text-xs px-2"
            >
              <p className="text-pink-primary">{key}</p>
              <p>{value.message}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 text-white w-full">
        <h2>Data</h2>
        {Object.entries(formData).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex items-center justify-between text-xs px-2"
            >
              <p className="text-pink-primary">{key}</p>
              <p>{outputToString(value)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
