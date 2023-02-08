import { styled } from '@mui/system';
// import styled from 'styled-components';
import { Camera20Filled } from '@fluentui/react-icons';

import { RiPencilFill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';

const UserForm = styled('form')`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 35px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    /* justify-content: space-between; */
    gap: 52px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: column;
    justify-content: none;
    gap: 32px;
  }
`;

const ContainerWrappFoto = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 233px;
    height: 233px;
    margin-bottom: 13px;
    border-radius: 50%;
    background-color: grey;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 8px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 0;
    }
  }

  label {
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    transition: ${props => props.theme.tranistions.normal};

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.accent};
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const FotoIcon = styled(Camera20Filled)`
  margin-right: 4px;
  width: 22px;
  height: 22px;
  color: ${props => props.theme.colors.accent};
`;

const ContainerWrappInfo = styled('div')`
  display: flex;
  flex-direction: column;

  gap: 12px;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    gap: 15px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-grow: 1;
  }
`;
const InfoInputThumb = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-family: ${props => props.theme.fonts[0]};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.text.s};
    line-height: ${props => props.theme.lineHeights.xs};
    letter-spacing: 0.04em;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-weight: ${props => props.theme.fontWeights.medium};
      font-size: ${props => props.theme.fontSizes.text.l};
      line-height: 1.39;
    }
  }
`;

const InputWrapp = styled('div')`
  margin-left: auto;
  display: flex;
  align-items: center;

  input {
    width: 159px;
    margin-right: 9px;
    padding: 4px 18px;
    border-radius: 40px;
    border: 1px solid rgba(245, 146, 86, 0.5);
    background-color: ${props => props.theme.colors.commonBackground};

    font-family: ${props => props.theme.fonts[0]};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.text.s};
    line-height: ${props => props.theme.lineHeights.xs};
    letter-spacing: 0.04em;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 216px;
      margin-right: 24px;
      padding: 4px 12px;

      font-size: ${props => props.theme.fontSizes.text.l};
      line-height: 1.39;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    }
  }
`;

const ButtonWrapp = styled('button')`
  outline: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.commonBackground};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 32px;
    height: 32px;
  }
`;

const InfoChangeIcon = styled(RiPencilFill)`
  width: 12px;
  height: 12px;
  color: ${props => props.theme.colors.accent};
  /* color: ${props => props.theme.colors.placeholderText}; */
  scale: 1;

  transition: ${props => props.theme.tranistions.normal};

  &:hover,
  &:focus {
    scale: 1.2;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

const InfoSubmitIcon = styled(BsCheckLg)`
  width: 12px;
  height: 12px;
  /* color: ${props => props.theme.colors.placeholderText}; */
  color: ${props => props.theme.colors.accent};
  scale: 1;

  transition: ${props => props.theme.tranistions.normal};
  &:hover,
  &:focus {
    scale: 1.2;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

const styles = {
  UserForm,
  ContainerWrappInfo,
  ContainerWrappFoto,
  FotoIcon,
  InputWrapp,
  InfoInputThumb,
  ButtonWrapp,
  InfoChangeIcon,
  InfoSubmitIcon,
};
export default styles;
