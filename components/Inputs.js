import React, { useState, useContext, useRef } from 'react'
import styled from 'styled-components';

import { themeContext } from '../lib/themeContext';

import { P } from './Texts';

export const InputGroup = styled.input`
  width: ${props => props.width || "90%"};
  margin: ${props => props.margin || "0 auto"};
  position: ${props => props.position || "relative"};
  display: ${props => props.display || "flex"};
  align-items: ${props => props.alignItems || "baseline"};
` 

export const CheckBoxStyle = styled.input`
  background: transparent;

  &, &:after, &:before {
    border: 1px solid #CECAE1;
    border-radius: 5px;
  }
`

export const CheckBox = React.forwardRef(({
  className,
  id,
  name
}, ref) => {
  return (
    <CheckBoxStyle 
      type="checkbox"
      ref={ref}
      name={name}
      id={id}
      className={className}
    />
  )
})

export const DarkFormFieldStyle = styled.div`
  background: ${props => props.bg || "#F8F6FE"};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.icon && "space-between"};
  border: 1px solid #F0EEFA;
`

const DarkFormInput = styled.input`
  color: #47495C;
  font-size: ${props => props.fontSize || "16px"};
  background: transparent;
  padding: 8px 16px;

  &:placeholder {
    color: #CECAE1;
  }

  &:focus {
    outline: none;
  }
`

const DarkFormTextArea = styled.textarea`
  color: #47495C;
  font-size: ${props => props.fontSize || "16px"};
  background: transparent;
  padding: 8px 16px;

  &:placeholder {
    color: #CECAE1;
  }

  &:focus {
    outline: none;
  }
`

const DarkFormSelect = styled.select`
  color: #47495C;
  font-size: ${props => props.fontSize || "16px"};
  background: transparent;
  padding: 8px 16px;

  &:placeholder {
    color: #CECAE1;
  }

  &:focus {
    outline: none;
  }
`

export const DarkFormField = React.forwardRef(({
  className,
  containerClass, 
  icon,
  iconClick,
  iconBefore,
  iconBeforeClass,
  iconBeforeClick,
  id,
  inputClassName,
  label, 
  name, 
  required,
  placeholder,
  type 
  }, ref ) => {
  
  return (
    <div className={`mb-6 ${containerClass}`}>
      { label && (
        <label
          htmlFor={id}
          >
          <P
            fontSize="14px"
            fontFamily="semi"
            color="#47495C"
            className="mb-2"
          >
            {label}
            {
              required && (
                <span className=""
                  style={{
                    color: "#E62250"
                  }}
                >*</span>
              )
            }
          </P>
        </label>
      )}

      <DarkFormFieldStyle 
        className={className} 
      >
        {
          iconBefore && (
            <div
              className="h-full flex-shrink-0 py-2 px-4"
              onClick={iconBeforeClick}
            >
              <img 
                src={iconBefore}
                alt=""
                className={iconBeforeClass}
              />
            </div>
          )
        }

        <DarkFormInput
          type={type}
          ref={ref}
          id={id}
          name={name}
          className={`flex-grow ${inputClassName}`}
          placeholder={placeholder}
        />
        {
          icon && (
            <div
              className="h-full flex-shrink-0 py-2 px-4 cursor-pointer"
              onClick={iconClick}
            >
              <img 
                src={icon}
                alt=""
              />
            </div>
          )
        }

      </DarkFormFieldStyle>
    </div>
  )
});

export const DarkTextArea = React.forwardRef(({
  className,
  containerClass, 
  icon,
  iconClick,
  iconBefore,
  iconBeforeClass,
  iconBeforeClick,
  id,
  inputClassName,
  label, 
  name, 
  placeholder,
  type,
  required,
  rows,
  columns 
  }, ref ) => {
  
  return (
    <div className={`mb-6 ${containerClass}`}>
      { label && (
        <label
          htmlFor={id}
          >
          <P
            fontSize="14px"
            fontFamily="semi"
            color="#47495C"
            className="mb-2"
          >
            {label}
            {
              required && (
                <span  
                  style={{
                    color: "#E62250"
                  }}
                >*</span>
              )
            }
          </P>
        </label>
      )}

      <DarkFormFieldStyle 
        className={className} 
      >
        {
          iconBefore && (
            <div
              className="h-full flex-shrink-0 py-2 px-4"
              onClick={iconBeforeClick}
            >
              <img 
                src={iconBefore}
                alt=""
                className={iconBeforeClass}
              />
            </div>
          )
        }

        <DarkFormTextArea
          ref={ref}
          rows={rows}
          id={id}
          name={name}
          className={`flex-grow ${inputClassName}`}
          placeholder={placeholder}
        />
        {
          icon && (
            <div
              className="h-full flex-shrink-0 py-2 px-4 cursor-pointer"
              onClick={iconClick}
            >
              <img 
                src={icon}
                alt=""
              />
            </div>
          )
        }

      </DarkFormFieldStyle>
    </div>
  )
});

export const DarkSelectInput = React.forwardRef(({
  className,
  children,
  containerClass, 
  icon,
  iconClick,
  iconBefore,
  iconBeforeClass,
  iconBeforeClick,
  id,
  inputClassName,
  label, 
  name, 
  required,
  placeholder,
  type 
  }, ref ) => {
  
  return (
    <div className={`mb-6 ${containerClass}`}>
      { label && (
        <label
          htmlFor={id}
          >
          <P
            fontSize="14px"
            fontFamily="semi"
            color="#47495C"
            className="mb-2"
          >
            {label}
            {
              required && (
                <span className=""
                  style={{
                    color: "#E62250"
                  }}
                >*</span>
              )
            }
          </P>
        </label>
      )}

      <DarkFormFieldStyle 
        className={className} 
      >
        {
          iconBefore && (
            <div
              className="h-full flex-shrink-0 py-2 px-4"
              onClick={iconBeforeClick}
            >
              <img 
                src={iconBefore}
                alt=""
                className={iconBeforeClass}
              />
            </div>
          )
        }

        <DarkFormSelect
          type={type}
          ref={ref}
          id={id}
          name={name}
          className={`flex-grow px-4 ${inputClassName}`}
          placeholder={placeholder}
        >
          {children}
        </DarkFormSelect>
        {
          icon && (
            <div
              className="h-full flex-shrink-0 py-2 px-4 cursor-pointer"
              onClick={iconClick}
            >
              <img 
                src={icon}
                alt=""
              />
            </div>
          )
        }

      </DarkFormFieldStyle>
    </div>
  )
});

export const InputField = styled.input`
  height: ${props => props.h};
  max-height: ${props => props.maxH};
  min-height: ${props => props.minH};
  width: ${props => props.w};
  max-width: ${props => props.maxW};
  min-width: ${props => props.minW};
  color: ${props => props.color};
  background: ${props => props.bg || "transparent"};
  padding: ${props => props.p};
  font-family: ${props => props.fontFamily || "medium"};
  font-size: ${props => props.fontSize};
  transition: 0.3s ease-out;

  border: none;
  border-bottom: 2px solid ${props => props.borderColor || props.color};

  &:placeholder {
    color: #26262645;
  }

  &:focus {
    outline: none;
  } 

  &:-internal-autofill-selected {
    color: ${props => props.color} !important;
    font: ${props => props.fontFamily || "medium"} !important;

  }
  
  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "36px"};
    padding: ${props => props.smallSize && "20px 5px 10px"};
    
  }

  @media (min-width: 1020px) {
    width: ${props => props.largeW}
  }
`

export const SelectInput = styled.select`
  height: ${props => props.h};
  max-height: ${props => props.maxH};
  min-height: ${props => props.minH};
  width: ${props => props.w};
  max-width: ${props => props.maxW};
  min-width: ${props => props.minW};
  border: none;
  color: ${props => props.color};
  background: ${props => props.bg || "transparent"};
  padding: ${props => props.p};
  font-family: ${props => props.fontFamily || "medium"};
  font-size: ${props => props.fontSize};
  transition: 0.3s ease-out;
  
  option {
    background: #F8F6FE;
    color: #232323
  }

  border: none;
  border-bottom: 2px solid ${props => props.borderColor || props.color};

  &:placeholder {
    color: #26262645;
  }

  &:focus {
    outline: none;
  } 

  &:-internal-autofill-selected {
    color: ${props => props.color} !important;
    font: ${props => props.fontFamily || "medium"} !important;

  }

  @media (max-width: 600px) {
    height: fit-content;
    font-size: ${props => props.smallSize || "16px"};
    padding: 20px 5px 10px;
    
    option {
      font-size: ${props => props.smallSize || "16px"};
    }
  }

  @media (min-width: 600px) {
    height: ${props => props.largeH};
  }

  @media (min-width: 1020px) {
    width: ${props => props.largeW};
  }
`

export const SelectToggleStyle = styled.button`
  min-width: 198px;
  height: ${props => props.h || "40px"};
  position: relative;
  border: ${props => props.border || "1px solid #B4B0D1"};
  border-radius: 3px;
  padding: 10px 20px;
  color: ${props => props.color};
  background: ${props => props.bg};

  img {
    transition: 0.3s ease ;

    &.active {
      transform: rotate(180deg);
    }
  }

  &:hover {
    background: #F8F6FE;
  }
  
  &:focus {
    outline: ${props => props.outline || "solid 1px #393649"};
  }

  @media (max-width: 600px) {
    width: ${props => props.smallwidth || "100%"}
  }
`

const SelectDropdownStyle = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  z-index: 100;
  width: ${props => props.w || "273px"};
  border: 1px solid #B4B0D1;
  border-radius: 3px;
  background: ${props => props.bg};
  
  @media (max-width: 600px) {
    width: ${props => props.smallwidth || "100%"}
  }
`

const SelectOptionStyle = styled.button`
  color: ${props => props.color || "#393649"};

  &:hover {
    background: #F8F6FE;
  }
`

export const SelectDropDown = props => {

  const { options } = props;
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const changeView = option => {
    setSelected(option)
    props.changeView(option)
  }

  const { theme, toggleTheme, isDark } = useContext(themeContext);


  return (
    <SelectToggleStyle 
      className={`flex items-center justify-between ${props.className}`}
      onClick={() => setToggle(!toggle)}
      // onBlur={() => setToggle(false)}
      color={props.toggleColor}
    >
      {selected}
      {isDark ? (
        <img src={arrowDownDark} alt="" className={`${toggle ? "active" : ""}`} />
      ) : (
        <img src={arrowDown} alt="" className={`${toggle ? "active" : ""}`} />
      )}

      { toggle && (
        <SelectDropdownStyle className="py-2" bg={theme.background}>
          {
            options.map((option, idx) => (
              <SelectOptionStyle 
                key={idx}
                onClick={() => changeView(option)}
                color={props.optionColor}
                className="block w-full text-left p-2 text-lg"
              >
                {option}
              </SelectOptionStyle>
            ))
          }
        </SelectDropdownStyle>
      )}

    </SelectToggleStyle>
  )
}

export const DarkSelectDropDown = props => {

  const { options } = props;
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const changeView = option => {
    setSelected(option)
    props.changeView(option)
  }

  // const { theme, toggleTheme, isDark } = useContext(themeContext);


  return (
    <SelectToggleStyle 
      className={`flex items-center justify-between ${props.className}`}
      onClick={() => setToggle(!toggle)}
      // onBlur={() => setToggle(false)}
      color={props.toggleColor}
      outline="1px solid #442ECF"
      h="50px"
      bg={props.toggleBg}
      border="1px solid #F0EEFA"
    >
      {selected}
      {/* {isDark ? ( */}
        {/* <img src={arrowDownDark} alt="" className={`${toggle ? "active" : ""}`} /> */}
      {/* ) : ( */}
        <img src={arrowDarkDown} alt="" className={`${toggle ? "active" : ""}`} />
      {/* )} */}

      { toggle && (
        <SelectDropdownStyle 
          className="py-2 w-full" 
          bg={props.optionBg}
          w="100%"
        >
          {
            options.map((option, idx) => (
              <SelectOptionStyle 
                key={idx}
                onClick={() => changeView(option)}
                color={props.optionColor}
                className="block w-full text-left p-2 text-lg"
              >
                {option}
              </SelectOptionStyle>
            ))
          }
        </SelectDropdownStyle>
      )}

    </SelectToggleStyle>
  )
}