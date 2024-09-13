import { useField } from "formik";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

function FormInput(props: FormInputProps) {
  const { label, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col mt-6 w-full">
      <label>{label}:</label>
      <input
        {...field}
        {...rest}
        className=" mt-1 p-2 border-[1px] border-solid border-secondary  rounded-md text-sm"
      />
      {meta.error && meta.touched && (
        <p className="mt-1 text-md text-red">{meta.error}</p>
      )}
    </div>
  );
}

export default FormInput;
