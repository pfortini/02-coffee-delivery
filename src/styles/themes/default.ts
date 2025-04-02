import styled from 'styled-components';

export const defaultTheme = {
  'yellow-dark': '#C47F17',
  'yellow': '#DBAC2C',
  'yellow-light': '#F1E9C9',

  'purple-dark': '#4B2995',
  'purple': '#8047F8',
  'purple-light': '#EBE5F9',

  'base-title': '#272221',
  'base-subtitle': '#403937',
  'base-text': '#574F4D',
  'base-label': '#8D8686',
  'base-hover': '#D7D5D5',
  'base-button': '#E6E5E5',
  'base-input': '#EDEDED',
  'base-card': '#F3F2F2',
  'base-background': '#FAFAFA',

  'white': '#FFFFFF'
};

const BaseTitle = styled.h1`font-family: 'Baloo 2';`;
const BaseText = styled.h1`font-family: 'Roboto';`;

export const TitleXL = styled(BaseTitle)`font-size: 48px;line-height: 130%;font-weight: 800; color: ${props => props.color || props.theme['base-text']};`;
export const TitleL = styled(BaseTitle)`font-size: 32px;line-height: 130%;font-weight: 800; color: ${props => props.color || props.theme['base-text']};`;
export const TitleM = styled(BaseTitle)`font-size: 24px;line-height: 130%;font-weight: 800; color: ${props => props.color || props.theme['base-text']};`;
export const TitleS = styled(BaseTitle)`font-size: 20px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;
export const TitleXS = styled(BaseTitle)`font-size: 18px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;

export const TextLRegular = styled(BaseText)`font-size: 20px;line-height: 130%;font-weight: normal; color: ${props => props.color || props.theme['base-text']};`;
export const TextLBold = styled(BaseText)`font-size: 20px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;
export const TextMRegular = styled(BaseText)`font-size: 16px;line-height: 130%;font-weight: normal; color: ${props => props.color || props.theme['base-text']};`;
export const TextMBold = styled(BaseText)`font-size: 16px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;
export const TextS = styled(BaseText)`font-size: 14px;line-height: 130%;font-weight: normal; color: ${props => props.color || props.theme['base-text']};`;
export const TextSBold = styled(BaseText)`font-size: 14px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;
export const TextXS = styled(BaseText)`font-size: 12px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;

export const Tag = styled(BaseText)`font-size: 10px;line-height: 130%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;
export const ButtonG = styled(BaseText)`font-size: 14px;line-height: 160%;font-weight: bold; color: ${props => props.color || props.theme['base-text']};`;
export const ButtonM = styled(BaseText)`font-size: 12px;line-height: 160%;font-weight: normal; color: ${props => props.color || props.theme['base-text']};`;
