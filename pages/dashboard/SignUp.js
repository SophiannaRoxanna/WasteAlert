import React, { useRef } from 'react'
import Link from "next/link"

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import base_url from "../api/base_url";

import { H5, H3, PBlack, SmallP, BigP } from '../../components/Text'
import { Form } from '../../components/Layout'
import { InputField, CheckBox } from '../../components/Inputs'
import { PrimaryButton } from '../../components/Button'

const SignUp = () => {

  const onLogin = data => {

    let formdata = new FormData();
    formdata.append("u_name", data.uname);
    formdata.append("u_firstname", data.fname);
    formdata.append("u_lastname", data.lname);
    formdata.append("u_email", data.email);
    formdata.append("u_password", data.password);

    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    // history.push("/dashboard/explore");
    fetch(`${base_url}/register`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  const { register, errors, handleSubmit, watch } = useForm({
    validateCriteriaMode: "all"
  });
  
  const Password = useRef({});
  Password.current = watch("password", "");


  return (
    <div>
      <Form>
        <form
          onSubmit={handleSubmit(onLogin)} 
          className="max-h-screen overflow-y-auto "
        >
        <div className="flex flex-col mx-auto mt-8 space-y-3 lg:w-4/6 pb-10">
          <img src="/images/logo_text.svg" alt="logo-text" />
          <BigP>
            Welcome! Please complete to create your account.
          </BigP>

          <div className="inputs flex flex-col">
            <div className="flex justify-between space-x-3">
              <InputField
                type="text"
                id="fname"
                name="fname"
                placeholder="Firstname"
                className="p-4"
                ref={
                  register({
                    required: "First name is required."
                })}
              >
              </InputField>


              <InputField
                type="text"
                id="lname"
                name="lname"
                className="p-4"
                placeholder="Lastname"
                ref={
                  register({
                    required: "Last name is required."
                })}
              >
              </InputField>

            </div>
            <div className="flex items-center justify-between">
              <ErrorMessage 
                errors={errors} 
                name="fname" 
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

              <ErrorMessage 
                errors={errors} 
                name="lname" 
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

            </div>

              <InputField
                type="text"
                id="uname"
                name="uname"
                placeholder="Username"
                className="mt-2 p-4"
                ref={
                  register({
                    required: "Username is required.",
                    pattern: {
                      message: "Please enter a username."
                    }
                })}
              >
              </InputField>

              <ErrorMessage 
              errors={errors} 
              name="uname" 
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
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-2 p-4"
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
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-2 p-4"
                ref={register({
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long"
                  }
                })}
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

              <InputField
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
                className="mt-2 p-4"
                ref={
                  register({
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/,
                      message: "Please enter a valid password."
                    },
                    validate: (value) => value === Password.current || "The passwords do not match"
                })}
              >
              </InputField>

              <ErrorMessage 
              errors={errors} 
              name="cpassword" 
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
           
          <div className="md:flex md:justify-between mt-6 mx-auto">
            <div className="flex items-center">
              <CheckBox
                name="rememberMe"
                id="rememberMe"
                className="w-3 h-4"
                color="#"
                required
              />
              <label htmlFor="rememberMe">
              <PBlack
                fontSize="16px"
                color="#616161"
                className="ml-2 cursor-pointer"
              >
                I agree with terms and conditions.
              </PBlack>
              </label>
            </div>
          </div>

            <PrimaryButton className="mt-8 mx-auto">
              SIGN UP
            </PrimaryButton>

            <div className="flex mt-6 mx-auto space-x-1">
              <PBlack>
                Already have an account?
              </PBlack>
              <Link href="/dashboard/login">
              <a className="font-bold">
                Sign in
              </a>
              </Link>

            </div>
            
          </div>
        </div>
      </form>
          
      </Form>
    </div>
  )
}

export default SignUp;