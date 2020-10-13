import React from 'react'
import Link from "next/link";

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import { H5, H3, PBlack, SmallP, BigP } from '../../components/Text'
import { Form } from '../../components/Layout'
import { InputField, CheckBox } from '../../components/Inputs'
import { PrimaryButton } from '../../components/Button'

const Login = () => {

  const onLogin = data => {
    console.log(data)
    console.log("form submitted")
    // history.push("/dashboard/explore");
  }

  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all"
  });

  return (
    <div>
      <Form>
        <form 
          onSubmit={handleSubmit(onLogin)} 
          className="flex flex-col mx-auto justify-center space-y-3"
        >
          <img src="/images/logo_text.svg" alt="logo-text" />
          <BigP>
            Welcome back! Please login to your account.
          </BigP>

          <div className="inputs flex flex-col">
            <InputField
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="mt-8 p-4"
              ref={
                register({
                  required: "Email is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email."
                  }
              })}
            >
            </InputField>

            <ErrorMessage 
              errors={errors} 
              name="email" 
              as={<SmallP 
                fontSize="12px"
                className="mt-1 mb-1 text-red-400 text-sm"
              />}
            >
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <SmallP key={type} >{message}</SmallP>
                ))
              }
            </ErrorMessage>

            <InputField
              placeholder="Password"
              id="password"
              name="password"
              ref={register({
                required: "Password is required.",
              })}
              className="mt-2 p-4"
            >
            </InputField>
            <ErrorMessage 
              errors={errors} 
              name="password" 
              as={<SmallP 
                fontSize="12px"
                className="mt-1 mb-1 text-red-400 text-sm"
              />}
            >
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <SmallP key={type} >{message}</SmallP>
                ))
              }
            </ErrorMessage>

           
          <div className="md:flex md:justify-between mt-8">
            <div className="flex items-center">
              <CheckBox
                name="rememberMe"
                id="rememberMe"
                className="w-3 h-4"
                color="#"
              />
              <label htmlFor="rememberMe">
              <PBlack
                fontSize="16px"
                color="#616161"
                className="ml-2 cursor-pointer"
              >
                Remember me
              </PBlack>
              </label>
            </div>
              <Link 
                href="/forgotPassword"
              >
                Forgot Password
              </Link>
          </div>

            <PrimaryButton
              className="mt-10 mx-auto"
            >
              LOGIN
            </PrimaryButton>

            <div className="mt-8 mx-auto font-bold">
              <Link 
                href="/dashboard/signUp"
              >
                <a>
                  Create an account
                </a>
              </Link>

            </div>
            
          </div>
        </form>
          
      </Form>
    </div>
  )
}

export default Login;