import { SignUpInput } from "@itachiuchiha/medium-blog";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../config";

const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [postInputs, setPostInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/v1/user/${type}`);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        {/* HEADER */}
        <div>
          <div className="px-10 flex flex-col items-center gap-2">
            <h1 className="text-5xl lg:text-4xl font-bold">
              {type === "signin"
                ? "Log in to your account"
                : "Create an account"}
            </h1>
            <div className="text-zinc-400 ">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="pl-2 underline"
              >
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>

          {/* INPUTS */}
          <div className="flex flex-col gap-4 pt-7">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Enter your name ..."
                onChange={(e: ChangeEvent) => {
                  setPostInputs({
                    ...postInputs,
                    name: (e.target as HTMLInputElement).value,
                  });
                }}
              />
            )}
            <LabelledInput
              label="Email"
              placeholder="Enter your email ..."
              onChange={(e: ChangeEvent) => {
                setPostInputs({
                  ...postInputs,
                  email: (e.target as HTMLInputElement).value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="Enter your password ..."
              onChange={(e: ChangeEvent) => {
                setPostInputs({
                  ...postInputs,
                  password: (e.target as HTMLInputElement).value,
                });
              }}
            />
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5 w-full"
            >
              {type === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent) => void;
}

function LabelledInput({ label, placeholder, onChange }: LabelledInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type="text"
        id={label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

export default Auth;
