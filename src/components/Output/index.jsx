import dayjs from "dayjs";

/* eslint-disable react/prop-types */
export function Output({ errors, formData }) {
  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <div className="flex justify-between">
        <h2>Errors</h2>
        <h2>{Object.keys(errors ?? {}).length ?? 0}</h2>
      </div>
      <div className="flex flex-col gap-4 text-white w-full">
        <h2>Data</h2>
        {Object.entries(formData).map(([key, value]) => {
          let displayValue = value;

          const isDayjs = dayjs.isDayjs(displayValue);

          if (isDayjs) {
            displayValue = displayValue.format("DD/MM/YYYY HH:mm");
          }

          return (
            <div
              key={key}
              className="flex items-center justify-between text-xs px-2"
            >
              <p className="text-pink-primary">{key}</p>
              <p>{displayValue?.length ? displayValue : "Empty"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
