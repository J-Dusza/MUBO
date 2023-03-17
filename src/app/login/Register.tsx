import { TextField } from "@mui/material";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/utils/firebase/firebase.utils";
import { useQuery } from "@tanstack/react-query";
import { RegisterInputSchema } from "@/shared/models";
import { fromZodError } from "zod-validation-error";
import { SafeParseReturnType } from "zod";
import { isObjKey } from "@/utils/typeGuard";

type Props = {};

const defaultFormFields = {
  email: "",
  name: "",
  lastname: "",
  password: "",
  confirmpassword: "",
  policy: false,
  newsletter: false,
};
const defaultErrors = {
  email: "",
  name: "",
  lastname: "",
  password: "",
  confirmpassword: "",
  policy: "",
};

const Register = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errors, setErrors] = useState(defaultErrors);
  const {
    email,
    name,
    lastname,
    password,
    confirmpassword,
    policy,
    newsletter,
  } = formFields;

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;

    setErrors(() => {
      return { ...errors, [name]: "" };
    });
    setFormFields(() => {
      return { ...formFields, [name]: value };
    });
  };
  const handlePolicyChange = () => {
    setErrors({ ...errors, policy: "" });
    setFormFields({ ...formFields, policy: !formFields.policy });
    console.log(policy);
  };

  const validate = () => {
    const parsedInput = RegisterInputSchema.safeParse({
      email,
      name,
      lastname,
      password,
    });

    const newErrors = {
      email: "",
      name: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      policy: "",
    };

    if (password !== confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }
    if (!policy) {
      newErrors.policy = "*   This field is required   *";
    }

    if (!parsedInput.success) {
      parsedInput.error.issues.map((error) => {
        const name = error.path[0];
        if (isObjKey(name, newErrors)) {
          newErrors[name] = error.message;
        }
      });
    }
    setErrors(newErrors);
    return true;
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setErrors(defaultErrors);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (validate() === false) {
      return;
    }

    try {
      const authUser = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (typeof authUser === "undefined") {
        throw "There has been a connection error";
      }
      const additionalInfo = {
        displayName: `${name} ${lastname}`,
        newsletter: newsletter,
      };
      await createUserDocumentFromAuth(authUser.user, additionalInfo);
      resetFormFields();
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;

      if (message === "auth/email-already-in-use") {
        setErrors({ ...errors, email: "E-Mail already in use" });
      } else {
        console.log("An error occured during registration ", message);
      }
    }
  };

  return (
    <div className="lg:w-1/2 lg:p-20 bg-[url('/metro-bw.jpg')] bg-cover text-toxic-200 p-8 md:px-28 lg:px-12">
      <h2 className="py-12 font-semibold text-4xl uppercase text-center">
        create an account
      </h2>
      {}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center space-y-7  bg-black bg-opacity-50 p-16 backdrop-blur-xl max-w-5xl mx-auto">
          {/* TEXT FIELDS */}
          <RegisterInput
            label="E-Mail"
            autocomplete="email"
            name="email"
            value={email}
            onChange={handleChange}
            error={errors.email}
          />
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <RegisterInput
              label="Name"
              autocomplete="name"
              name="name"
              value={name}
              onChange={handleChange}
              error={errors.name}
            />
            <RegisterInput
              label="Last Name"
              autocomplete="family-name"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              error={errors.lastname}
            />
          </div>
          <RegisterInput
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            error={errors.password}
          />
          <RegisterInput
            label="Confirm Password"
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={handleChange}
            error={errors.confirmpassword}
          />

          {/* CHECKBOXES */}

          <div className="flex flex-col gap-3 w-full pt-10 pb-5">
            <div className="w-full flex flex-row gap-8 text-sm text-zinc-300">
              <input
                id="terms"
                type="checkbox"
                name="policy"
                className={`checkbox checkbox-success ${
                  errors.policy && "checkbox-error"
                }`}
                onChange={handlePolicyChange}
                checked={policy}
              />
              <div>
                <label
                  htmlFor="terms"
                  className={`${errors.policy && "text-red-500"}`}
                >
                  I agree to terms & conditions and understand the privacy
                  policy
                </label>
                <p className="py-2 text-red-500 font-semibold">
                  {errors.policy}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row gap-8 text-sm text-zinc-300">
              <input
                id="newsletter"
                type="checkbox"
                name="newsletter"
                className="checkbox checkbox-success"
                onChange={() => {
                  setFormFields({
                    ...formFields,
                    newsletter: !formFields.newsletter,
                  });
                  console.log(newsletter);
                }}
                checked={newsletter}
              />
              <label htmlFor="newsletter">
                Sign up for the newsletter and recieve special offers
              </label>
            </div>
          </div>

          {/* SUBMIT FORM BUTTON */}

          <button
            className="btn btn-wide btn-warning btn-outline"
            type="submit"
          >
            sign up
          </button>
        </div>
      </form>
    </div>
  );
};

type RegisterInputProps = {
  label: string;
  autocomplete?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
  error: string;
};

const RegisterInput = (props: RegisterInputProps) => {
  return (
    <TextField
      error={Boolean(props.error)}
      helperText={props.error}
      focused
      sx={{ input: { color: "white" } }}
      color="secondary"
      variant="standard"
      label={props.label}
      autoComplete={props.autocomplete}
      name={props.name}
      value={props.value}
      type={props.type}
      className="w-full caret-toxic-200"
      onChange={props.onChange}
    />
  );
};

export default Register;
