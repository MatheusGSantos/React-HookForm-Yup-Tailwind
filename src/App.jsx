import { Controller, FormProvider, useForm } from "react-hook-form";
import { Box } from "./components/Box";
import { Output } from "./components/Output";
import {
  DateTimePicker,
  MoneyInput,
  SelectInput,
  TextInput,
} from "./components/Inputs";
import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

function App() {
  const [formData, setFormData] = useState({});
  const {
    control,
    formState: { errors },
    handleSubmit,
    ...rest
  } = useForm();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main className="flex items-center justify-center gap-10 h-screen bg-page">
      <FormProvider {...rest}>
        <form>
          <Box>
            <Controller
              name="textInput"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Text"
                  placeholder="Type something"
                  {...field}
                />
              )}
            />

            <Controller
              name="moneyInput"
              control={control}
              render={({ field }) => (
                <MoneyInput
                  label="Monetary"
                  placeholder="Type something"
                  {...field}
                />
              )}
            />

            <ScopedCssBaseline>
              <Controller
                name="dateTimePicker"
                control={control}
                render={({ field }) => (
                  <DateTimePicker label="DateTime Picker" {...field} />
                )}
              />
            </ScopedCssBaseline>

            <Controller
              name="select"
              control={control}
              render={({ field }) => <SelectInput label="Select" {...field} />}
            />

            <Button
              type="button"
              onClick={handleSubmit((data) => setFormData(data))}
            >
              Submit
            </Button>
          </Box>
        </form>
      </FormProvider>

      <Box>
        <Output errors={errors} formData={formData} />
      </Box>
    </main>
  );
}

export default App;
