import React from 'react'
import styled from 'styled-components';

import rightArrow from '../assets/rightArrow.svg';
import rightArrowGray from '../assets/rightArrowGray.svg';

import { PrimaryButton, OutlineButton } from './Buttons';

const NewEntryFooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 50;
  background: #FFFFFF;
  box-shadow: 0px -2px 3px #00000014;
`

export const NewEntryFooter = ({selectedTopic, changeStep}) => {
  return (
    <NewEntryFooterStyle className="w-full flex justify-between items-center py-4 px-8">
      <PrimaryButton
        bg="#CF2E3210"
        hoverBg="#CF2E3250"
        color="#CF2E32"
      >
        Discard
      </PrimaryButton>

      <PrimaryButton
        className="flex items-center justify-between"
        onClick={() => changeStep("description")}
        disabled={((selectedTopic !== null) && (selectedTopic !== undefined)) ? false : true}
      >
        Description
        <img 
          src={((selectedTopic !== null) && (selectedTopic !== undefined)) ? rightArrow : rightArrowGray}
          alt="" 
        />
      </PrimaryButton>
    </NewEntryFooterStyle>
  )
}

const DescriptionFooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 50;
  background: #FFFFFF;
  box-shadow: 0px -2px 3px #00000014;
`

const RotateImg = styled.img`
  transform: rotate(180deg);
  filter: brightness(0)
`

export const DescriptionFooter = ({submitDetails, changeStep}) => {
  return (
    <DescriptionFooterStyle className="w-full flex justify-between items-center py-4 px-8">
      <PrimaryButton
        bg="#CF2E3210"
        hoverBg="#CF2E3250"
        color="#CF2E32"
      >
        Discard
      </PrimaryButton>

      <div className="flex items-center">

        <OutlineButton
          color="#393649"
          className="flex items-center justify-between"
          onClick={() => changeStep("select-topic")}
        >
          <RotateImg 
            src={rightArrow}
            alt="" 
          />
          Select a topic
        </OutlineButton>

        <PrimaryButton
          className="flex items-center justify-between ml-4"
          p="10px 20px"
          onClick={submitDetails}
        >
          Publish
          <img 
            src={rightArrow}
            alt="" 
          />
        </PrimaryButton>

      </div>
    </DescriptionFooterStyle>
  )
}

export const PublishFooter = ({submitDetails, changeStep, dataType}) => {
  return (
    <DescriptionFooterStyle className="w-full flex justify-between items-center py-4 px-8">
      <PrimaryButton
        bg="#CF2E3210"
        hoverBg="#CF2E3250"
        color="#CF2E32"
      >
        Discard
      </PrimaryButton>

      <div className="flex items-center">

        <OutlineButton
          color="#393649"
          className="flex items-center justify-between"
          onClick={() => changeStep("description")}
        >
          <RotateImg 
            src={rightArrow}
            alt="" 
          />
          Description
        </OutlineButton>

        <PrimaryButton
          className="flex items-center justify-between ml-4"
          p="10px 20px"
          onClick={submitDetails}
          disabled={((dataType !== null) && (dataType !== undefined)) ? false : true}
        >
          Save
          <img 
            src={rightArrow}
            alt="" 
          />
        </PrimaryButton>

      </div>
    </DescriptionFooterStyle>
  )
}

export const InputFooter = ({submitDetails, changeStep, dataType}) => {
  return (
    <DescriptionFooterStyle className="w-full flex justify-between items-center py-4 px-8">
      <PrimaryButton
        bg="#CF2E3210"
        hoverBg="#CF2E3250"
        color="#CF2E32"
      >
        Discard
      </PrimaryButton>

      <div className="flex items-center">
        <PrimaryButton
          className="flex items-center justify-between ml-4"
          p="10px 20px"
          onClick={submitDetails}
          disabled={((dataType !== null) && (dataType !== undefined)) ? false : true}
        >
          Save
          <img 
            src={rightArrow}
            alt="" 
          />
        </PrimaryButton>

      </div>
    </DescriptionFooterStyle>
  )
}