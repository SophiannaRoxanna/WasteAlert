import React, {
  useState
} from 'react'
import styled from 'styled-components';
import { H5, TextLink, P } from './Texts';

import arrowDarkDown from '../assets/downArrow.svg';
import errorIcon from '../assets/Error Icon.svg';
import successIcon from '../assets/successIcon.svg';
import { PrimaryButton } from './Buttons';

export const SuggestionCard = styled.div`
  padding: ${props => props.padding || "24px 68px"};
  border: 1px solid #F5F4FA;
  border-radius: 4px;

  img.small {
    width: 54px;
    height: 36px
  }

  &:hover {
    background: #F8F6FE;
  }
`

export const TopicCardStyle = styled.button`
  background: ${props => props.bg || "#FFFFFF"};
  border-radius: 4px;
  border: ${props => props.selected ? "2px solid #442ECF": "2px solid transparent"};
  border: ${props => props.border};
  transition: 0.3s ease;

  &:hover {
    border: 2px solid #442ECF;
  }
  
  &:focus {
    outline: none;
    border: 2px solid #442ECF;
  }
`

export const TopicCard = ({
  img, 
  title,
  subTitle, 
  button,
  className, 
  selected,
  topic,
  border,
  onClick
}) => {

  return (
    <TopicCardStyle 
      className={`p-6 w-full text-left flex items-center cursor-pointer ${className}`}
      selected={selected}
      border={border}
      onClick={() => onClick(topic)}
    >
      {
        img && (
          <div className="p-3 rounded-full mr-6"
            style={{
              background: "#442ECF05",
            }}
          >
            <img src={img} alt="" className="w-6 h-6" />
          </div>
        )
      }
      <div>
        <H5 color="#22202D">
          {title}
        </H5>
        <TextLink color="#716E8B" className="mt-2">
          {subTitle}
        </TextLink>
        <PrimaryButton 
          className="mt-2 mx-auto flex">
          {button}
        </PrimaryButton>
      </div>

    </TopicCardStyle>
  )
}

export const PreviewItemStyle = styled.div`
  background: #FFFFFF;
  border: 1px solid #E4E3EE;
  border-radius: 4px;

  img {
    transition: 0.3s ease ;

    &.expanded {
      transform: rotate(180deg);
    }
  }
`

export const PreviewItem = ({
  fields
}) => {
  const {
    key,
    title, 
    type, 
    description,
    notEmpty,
    required
  } = fields;

  const [expanded, setExpanded] = useState(false);

  return (
    <PreviewItemStyle className="p-6 mb-6" onClick={() => setExpanded(!expanded)}>
      <div className="flex items-center justify-between cursor-pointer">
        <H5 color="#9490B1" fontFamily="regular">
          <span style={{
            color: "#0D024E",
            marginRight: "4px"
        }}>
            {title} 
          </span>
          ({type})
        </H5>
        <img src={arrowDarkDown} alt="" className={expanded ? "expanded" : ""} />
      </div>

      {expanded && (
        <>
          <H5 color="#0D024E" fontFamily="regular" className="my-6">
            {description}
          </H5>

          {key && (
            <P color="#0D024E" fontFamily="regular">
              <span style={{
                color: "#B4B0D1",
                marginRight: "15px"
            }}>
                Key
              </span>
              ({key})
            </P>
          )}

          {type && (
            <P color="#0D024E" fontFamily="regular">
              <span style={{
                color: "#B4B0D1",
                marginRight: "15px"
            }}>
                Type
              </span>
              ({type})
            </P>
          )}

          {notEmpty && (
            <P color="#0D024E" fontFamily="regular">
              <span style={{
                color: "#B4B0D1",
                marginRight: "15px"
            }}>
                Not Empty
              </span>
              ({notEmpty})
            </P>
          )}

          <P color="#0D024E" fontFamily="regular">
            <span style={{
              color: "#9490B1",
              marginRight: "15px"
          }}>
              Required
            </span>
            {required ? ('Yes') : ('No')}
          </P>
            
        </>

      )}
    </PreviewItemStyle>
  )

}

export const NotificationBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.success ? "#3BC97E" : "#E14170"};
`

export const NotificationBar = props => (
  <NotificationBarStyle 
    className="absolute top-0 left-0 py-3 w-full" 
    success={props.success}
  >
    <img 
      src={props.success ? successIcon : errorIcon}
      alt=""
      className="mr-4"
    />
    <P color={props.color || "#FFFFFF"}>
      {props.message}
    </P>
  </NotificationBarStyle>
)