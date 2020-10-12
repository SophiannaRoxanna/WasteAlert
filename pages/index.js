import React from 'react'
import Link from "next/link"

import { H5, H3, PBlack, SmallP, BigP } from '../components/Text'
import { Login } from '../components/Layout'
import { InputField } from '../components/Inputs'
import { PrimaryButton } from '../components/Button'

const Index = () => {
  return (
    <div>
      <Login>
        <div className="flex flex-col mx-auto mt-24 space-y-3">
          <img src="/images/logo_text.svg" alt="logo-text" />
          <BigP>
            Welcome back! Please login to your account.
          </BigP>

          <div className="inputs flex flex-col">
            <InputField
              placeholder="Username"
              required
              className="mt-10 p-4"
            >
            </InputField>

            <InputField
              placeholder="Username"
              required
              className="mt-10 p-4"
            >
            </InputField>

            <PrimaryButton
              className="mt-10 mx-auto"
            >
              LOGIN
            </PrimaryButton>
          </div>

        </div>
          
      </Login>
    </div>
  )
}

export default Index;