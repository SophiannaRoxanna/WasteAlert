import React, { 
  useState, 
  useEffect, 
  useContext, 
  useRef
} from 'react'
import styled from 'styled-components';
import { 
  Link,
  useHistory
} from 'react-router-dom';

import { useForm, ErrorMessage  } from "react-hook-form";

import { themeContext } from '../lib/themeContext';

import Layout from '../components/Layout';
import { P, BigP } from '../components/Texts';
import { InputField } from '../components/Inputs';

import { PrimaryButton, LinkButton } from '../components/Button';

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
`

const Home = props => {

  const history = useHistory();
 
  const { theme } = useContext(themeContext);

  const [search, setSearch] = useState({
    need: "",
    zipCode: ""
  })
  
  
  const getNeed = ({need}) => {
    need = need[0].toUpperCase() + need.slice(1);
    setSearch({...search, need: need});
  }
  
  const watchZipCode = ({target}) => {
    const { value }  = target;
    setSearch({...search, zipCode: value});
  }
  
  const submitSearch = ({zipCode}) => {
    setSearch({...search, zipCode: zipCode});
    history.push(`/results/${search.need}/${search.zipCode}`);
  }
  

  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all"
  });

  return (
    <Layout>
      <Main className=" px-6 lg:px-0 ">
        <section className="py-32 w-full md:w-4/5 lg:w-3/5 mx-auto">
          <P 
            fontSize="18px"
            color={theme.lightFont}
            className={search.need !== "" && "opacity-25"}
          >
            How can we help you?
          </P>
          <form onSubmit={handleSubmit(getNeed)} className="w-full">
            <div className={`flex flex-wrap md:flex-no-wrap items-end mt-6 max-w-full ${search.need !== "" ? "opacity-25" : ""}`}>
              <BigP
                color={theme.primaryFont}
                className="mr-6 md:flex-shrink-0"
              >
                I need
              </BigP>
              <InputField
                type="text"
                id="need"
                name="need"
                w="135px"
                largeW="170px"
                ref={register()}
                className="w-full"
                fontSize="54px"
                color={theme.purpleFont}
                onFocus={() => setSearch({need: "", zipCode: ""})}
              />
            </div>
          </form>

          {
            search.need !== "" && (
              <form onSubmit={handleSubmit(submitSearch)} className="w-full">
                <div className="flex flex-wrap md:flex-no-wrap items-end mt-6 max-w-full">
                  <BigP
                    color={theme.primaryFont}
                    className="mr-6 md:flex-shrink-0"
                  >
                    My zipcode is
                  </BigP>
                  <InputField
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    w="135px"
                    largeW="170px"
                    ref={register({
                      maxLength: {
                        value: 5,
                      }
                    })}
                    maxLength={5}
                    fontSize="54px"
                    color={theme.purpleFont}
                    onChange={watchZipCode}
                    // onFocus={() => setSearch({...search, zipCode: ""})}
                    autoFocus={search.need !== "" && true}
                  />
                </div>

                {
                  search.zipCode.length >= 5 && (
                    <PrimaryButton className="mt-16">
                      Search
                    </PrimaryButton>
                  )
                }

                {
                  search.zipCode.length < 5 && (
                    <LinkButton
                      color={theme.purpleFont}
                      fontSize="24px"
                      smallSize="18px"
                      className="mt-10 block"
                    >
                      Use current location
                    </LinkButton>
                  )
                }
              </form>
            )
          }



        </section>
      </Main>
    </Layout>
  )
}

export default Home;