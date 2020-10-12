import React, { 
  useState, 
  useEffect, 
  useContext, 
  useRef 
} from 'react';
import styled from 'styled-components';
import {
  Link,
  useHistory
} from 'react-router-dom';

import { themeContext } from '../lib/themeContext';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


import eyeIcon from "../assets/eye-off.svg";

import { P, BigP, H2, H6, TextLink } from '../components/Texts';
import { InputField, DarkFormField, CheckBox } from '../../components/Inputs';
import { PrimaryButton, OutlineButton } from '../components/Buttons';
import { ThemeLessLayout } from '../../components/Layout';
import FormCard from '../components/FormCard';

const SignUpPage = props => {
  let history = useHistory();

  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({});

  const onSignUp = data => {
    setSubmitted(true);
    setUserData(data);
    setTimeout(() => {
      history.push("/login");
    }, 6000);
  }

  const showPassword = () => {
    console.log("clicked", show)
    if (show) {
      setShow(false)
      setPasswordType("password");
    } else {
      setShow(true)
      setPasswordType("text")
    }
  }
  
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all"
  });

  return (
    <ThemeLessLayout>
      <FormCard
        pVertical="64px"
        pHorizontal="56px"
        maxW="476px"
      >
        {!submitted ? (
          <>
            <H6 color="#22202D" fontSize="18px" className="mb-12">
              Sign up to share, access, and work with your data.
            </H6>

            <form onSubmit={handleSubmit(onSignUp)}>
              <DarkFormField 
                type="text"
                id="name"
                name="name"
                w="135px"
                ref={register({
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Please enter your full name"
                  }
                })}
                placeholder="Enter your full name"
                label="Name"
                className="w-full"
              />
              <ErrorMessage 
                errors={errors} 
                name="name" 
                as={<P 
                  fontSize="12px"
                  className="-mt-4 mb-4 text-red-400 text-sm"
                />}
              >
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <P key={type} >{message}</P>
                  ))
                }
              </ErrorMessage>

              <DarkFormField 
                type="email"
                id="email"
                name="email"
                w="135px"
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email."
                  }
                })}
                placeholder="example@mail.com"
                label="Email"
                className="w-full"
              />
              <ErrorMessage 
                errors={errors} 
                name="email" 
                as={<P 
                  fontSize="12px"
                  className="-mt-4 mb-4 text-red-400 text-sm"
                />}
              >
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <P key={type} >{message}</P>
                  ))
                }
              </ErrorMessage>

              <DarkFormField 
                type={passwordType}
                id="password"
                name="password"
                w="135px"
                ref={register({
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                icon={eyeIcon}
                iconClick={showPassword}
                placeholder="Use a strong password"
                label="Password"
                className="w-full"
              />
              <ErrorMessage 
                errors={errors} 
                name="password" 
                as={<P 
                  fontSize="12px"
                  className="-mt-4 mb-4 text-red-400 text-sm"
                />}
              >
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <P key={type} >{message}</P>
                  ))
                }
              </ErrorMessage>

              <PrimaryButton
                className="w-full"
              >
                Sign up
              </PrimaryButton>

            </form>

            <div className="text-center mt-12">
              <Link to="/login">
                <TextLink
                  color="#442ECF"
                  fontFamily="semi"
                >
                  Have an account already?
                </TextLink>
              </Link>
            </div>
          </>
        ) : (
          <>
            <P color="#5F5D77">
              Thanks for signing up to share and have access to your 
              data with Social Safety. All you have to do is confirm 
              the email sent to <span className="semi mr-2" style={{
                color: "#22202D"
              }}>
                {userData?.email}
              </span>
            </P>
          </>
        )}

      </FormCard>

      <div className="mt-16 flex justify-center">
        <Link to="/privacy">
          <TextLink
            color="#FFFFFF"
          >
            Privacy
          </TextLink>
        </Link>
        <Link to="/terms">
          <TextLink
            color="#FFFFFF"
            className="md:ml-2"
          >
            Terms
          </TextLink>
        </Link>
      </div>
    </ThemeLessLayout>
  )
}

export default SignUpPage;