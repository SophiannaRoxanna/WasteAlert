import React, { 
  useState, 
  useEffect, 
  useContext, 
  useRef,
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

const LoginPage = props => {
  let history = useHistory();

  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);

  const onLogin = data => {
    console.log(data)
    history.push("/dashboard/explore");
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
        <H6 color="#22202D" fontSize="18px" className="mb-12">
          Sign in to share, access, and work with your data.
        </H6>

        <form onSubmit={handleSubmit(onLogin)}>
          <DarkFormField 
            type="email"
            id="email"
            name="email"
            ref={register({
              required: "Email is required.",
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
            ref={register({
              required: "Password is required.",
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
            Sign in
          </PrimaryButton>

          <div className="md:flex md:justify-between mt-4">
            <div className="flex items-center">
              <CheckBox
                ref={register()}
                name="rememberMe"
                id="rememberMe"
                className="w-5 h-5"
              />
             <label htmlFor="rememberMe">
              <P
                fontSize="14px"
                color="#2A2C3F"
                className="ml-2 cursor-pointer"
              >
                Remember me
              </P>
             </label>
            </div>
            <Link to="/forgotPassword">
              <TextLink
                color="#442ECF"
                fontFamily="semi"
              >
                Forgot Password?
              </TextLink>
            </Link>
          </div>
        </form>

        <div className="text-center mt-12">
          <Link to="/createAccount">
            <TextLink
              color="#442ECF"
              fontFamily="semi"
            >
              Create an account
            </TextLink>
          </Link>
        </div>

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

export default LoginPage;