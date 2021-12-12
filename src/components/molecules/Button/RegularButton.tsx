import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import IconIcomoon from '../../atoms/IconIcomoon/IconIcomoon';

interface PropTypes {
  buttonSize: string;
  buttonColor: string;
  buttonLabel: string;
  buttonIcon: string;
  type:'button' | 'submit' | 'reset';
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const StyledRegularButton = styled.button < PropTypes > `
  border-radius: 14px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.grey200};
  margin-right: 10px;
  border: none;
  font-size: inherit;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5) inset, 0 0 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  > span {
    margin-right: 5px;
    vertical-align: text-bottom;
  }
  ${(props) => props.buttonColor
    && css`
      background: linear-gradient(
        to top right,
        ${({ theme }) => darken(0.13, theme[props.buttonColor])},
        ${({ theme }) => theme[props.buttonColor]}
      );
      box-shadow: 0 2px 4px ${({ theme }) => darken(0.15, theme[props.buttonColor])},
        0 2px 2px 2px rgba(10, 10, 10, 0.7);
      transition: box-shadow 200ms linear;
      &:hover,
      &:active {
        box-shadow: 0 2px 4px ${({ theme }) => darken(0.15, theme[props.buttonColor])},
          0 1px 2px  rgba(0, 0, 0, 0.4);
        transition: all 200ms linear;
      }
    `};
  ${(props) => props.buttonSize === 'buttonBig'
    && css`
      font-size: 2.3rem;
      padding: 15px 25px;
      text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
    `}

  ${(props) => props.buttonSize === 'buttonSmall'
    && css`
      font-size: 1.5rem;
      padding: 5px 15px;
    `}
`;

const RegularButton: React.FC<PropTypes> = ({
  buttonSize, buttonColor, buttonLabel, buttonIcon, type, onClick,
}) => (
  // @ts-ignore
  <StyledRegularButton
    type={type}
    buttonSize={buttonSize}
    buttonColor={buttonColor}
    onClick={onClick}
  >
    {!!buttonIcon && <IconIcomoon iconName={buttonIcon} spin={false} />}
    {buttonLabel}
  </StyledRegularButton>
);

// RegularButton.propTypes = {
//   buttonSize: PropTypes.oneOf(['buttonSmall', 'buttonMedium', 'buttonBig']),
//   buttonColor: PropTypes.string,
//   buttonLabel: PropTypes.string,
//   type: PropTypes.string,
//   buttonIcon: PropTypes.string,
//   onClick: PropTypes.func,
// };

// RegularButton.defaultProps = {
//   buttonSize: 'buttonMedium',
//   buttonColor: 'primary',
//   buttonLabel: '',
//   type: 'button',
//   buttonIcon: '',
//   onClick: undefined,
// };

export default RegularButton;
