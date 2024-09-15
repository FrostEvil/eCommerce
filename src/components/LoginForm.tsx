import FormInput from "./FormInput";
import { Formik, Form, FormikProps } from "formik";
import { basicSchema } from "../schemas/basicSchema";
import useLogin from "../hooks/useLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  email: string;
  password: string;
}

interface OtherProps {
  isSubmitting: boolean;
}
// interface SetIsLoginProps {
//   setIsLogin: Dispatch<SetStateAction<boolean>>;
// }

function LoginForm() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const loginStatus: { message: string; status?: boolean } =
    useLogin(loginData);

  if (loginStatus.status === true) {
    navigate(-1);
  }

  // useEffect(() => {
  //   if (loginStatus.status) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, [loginStatus.message]);

  const initalValues: LoginProps = {
    email: "",
    password: "",
  };

  return (
    <div className="mt-20 p-10 bg-primary rounded-xl">
      <h2>Please enter your e-mail and password:</h2>
      {loginData.email && (
        <p
          className={"mt-2 " + (loginStatus.status ? "text-green" : "text-red")}
        >
          {loginStatus.message}
        </p>
      )}
      <Formik
        initialValues={initalValues}
        validationSchema={basicSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          setLoginData(values);
        }}
      >
        {(props: OtherProps & FormikProps<LoginProps>) => (
          <Form className="flex flex-col items-center">
            <FormInput
              label="E-mail"
              name="email"
              type="text"
              placeholder="Enter email"
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <button
              disabled={props.isSubmitting}
              type="submit"
              className=" mt-8 border-[1px] border-solid border-secondary w-fit py-1 px-8 rounded-md bg-green hover:bg-green-hover duration-300"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
