import React from 'react'
import styled from 'styled-components';

/* Colors: */
const primary_font = "#292929";
const white_bg = "#FFFFFF";
const dashboard_bg = "#F5F6FA";
const accent = "#005105";
const header_text = "#212121";
const green_secondary = "#004C3F";
const light_font = "#616161";
const green_primary = "#00A388";
const primary_bg = "#F9F9F9";
const border = "#C9C9C9";
const border_secondary = "#707070";
const red_accent = "#B9121B";
const peimary_bg_light = "#F5F5FA";
const unnamed_color_6c63ff = "#6C63FF";
const primary_bg_add5f7 = "#ADD5F7";
const secondary_bg = "#65B3FF";
const boundary = "#2C1DFF";
const blue_accent = "#1976D2";
const header_bg = "#D1FFF7"; 
const green_light = "#D1FFF761";

/* Font/text values */
const unnamed_font_family_montserrat = "#Montserrat";
const unnamed_font_family_raleway = "#Raleway";
const unnamed_font_family_open_sans = "#OpenSans";
const unnamed_font_style_normal = "#normal";
const unnamed_font_weight_500 = "#500px";
const unnamed_font_weight_600 = "#600px";
const unnamed_font_weight_normal = "#normal";
const unnamed_font_weight_medium = "#medium";
const unamed_font_weight_bold = "#bold";
const unamed_font_size_12 = "#12px";
const unamed_font_size_14 = "#14px";
const unamed_font_size_16 = "#16px";
const unamed_font_size_18 = "#18px";
const unnamed_font_size_20 = "#20px";
const unnamed_font_size_24 = "#24px";
const unnamed_font_size_29 = "#29px";
const unnamed_font_size_32 = "#32px";
const unnamed_font_size_44 = "#44px";
const unnamed_character_spacing_0 = "#0px";
const unnamed_line_spacing_20 = "#20px";
const unnamed_line_spacing_22 = "#22px";
const unnamed_line_spacing_24 = "#24px";
const unnamed_line_spacing_29 = "#29px";
const unnamed_line_spacing_39 = "#39px";
const unnamed_line_spacing_54 = "#54px";
const unnamed_text_transform_uppercase = "#uppercase";

export const H1 = styled.h1`
  font-size: ${props => props.fontSize || unnamed_font_size_24};
  color: ${props => props.color || header_text};
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_600};
  line-height: ${unnamed_line_spacing_39};
  letter-spacing: ${unnamed_character_spacing_0};

  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "27px"}
  }
`

export const H2 = styled.h2`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_600};
  font-size: ${unnamed_font_size_32};
  line-height: ${unnamed_line_spacing_39};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || primary_font};
  
  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "27px"}
  }
`

export const H3 = styled.h3`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_600};
  font-size: ${props => props.fontSize || unnamed_font_size_24};
  line-height: ${unnamed_line_spacing_29};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || accent};

  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "27px"}
  }
`

export const H4 = styled.h4`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_500};
  font-size: ${props => props.fontSize || unnamed_font_size_24};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || header_text};
`

export const H5 = styled.h5`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_500};
  font-size: ${props => props.fontSize || 15};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || header_text};
`

export const H6 = styled.h6`
  font-family: ${unnamed_font_family_montserrat};
  font-size: ${props => props.fontSize || unnamed_font_size_20};
  font-weight: ${unnamed_font_weight_500};
  color: ${props => props.color || green_secondary};
  opacity: 0.95;
`

export const BigP = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-weight: ${unnamed_font_weight_normal};
  font-size: ${props => props.fontSize || "18px"};
  color: ${props => props.color || primary_font};
  opacity: 1; 

  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "36px"}
`

export const MediumP = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-weight: ${unnamed_font_weight_normal};
  font-size: ${props => props.fontSize || unnamed_font_size_14};
  color: ${props => props.color || primary_font};
  opacity: 0.90;
`

export const SmallP = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-weight: ${unnamed_font_weight_normal};
  font-size: ${props => props.fontSize || "12px"};
  color: ${props => props.color || primary_font};
  opacity: 0.90;

  @media (max-width: 600px) {
    font-size: ${props => props.smallSize || "16px"}
  }
`

export const NewPBlack = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_normal};
	font-size: ${props => props.fontSize || unnamed_font_size_12};
	line-height: ${unnamed_line_spacing_20};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || primary_font};
	opacity: ${0.75};
`

export const PBlack = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_normal};
	font-size: ${props => props.fontSize || 18};
	line-height: ${unnamed_line_spacing_29};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || primary_font};
`

export const PBoldBlack = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_500};
	font-size: ${props => props.fontSize || unnamed_font_size_12};
	line-height: ${unnamed_line_spacing_29};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || primary_font};
`

export const PSecGreen = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_normal};
	font-size: ${props => props.fontSize || unnamed_font_size_12};
	line-height: ${unnamed_line_spacing_24};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || green_secondary};
  opacity: ${0.75};
`

export const PWhite = styled.p`
  font-family: ${unnamed_font_family_montserrat};
  font-style: ${unnamed_font_style_normal};
  font-weight: ${unnamed_font_weight_normal};
  font-size: ${props => props.fontSize || unnamed_font_size_24};
	line-height: ${unnamed_line_spacing_29};
  letter-spacing: ${unnamed_character_spacing_0};
  color: ${props => props.color || white_bg};
`

export const TextLink = styled.p`
  font-size: ${props => props.fontSize || "14px"};
  font-family: ${props => props.fontFamily || "regular"};
  color: ${props => props.color};
`