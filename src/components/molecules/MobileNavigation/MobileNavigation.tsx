import React, { useContext } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { mainMenuItems } from '../../../languages/menus';
import { StyledMobileNavLink } from '../../atoms/Link/Link';
import { PageContext } from '../../../context';
import mobileImage from '../../../assets/images/background/debut-light.png';

const StyleMobileNavWrapper = styled.div`
  z-index: 310;
  width: 250px;
  height: 100vh;
  padding: 20px;
  background-color:  #36365e;
  background-image:url(${mobileImage});
  position: fixed;
  top: 0;
  box-shadow: 10px 0 7px rgba(0, 0, 0, 0.4);
`;

const StyledList = styled.ul`
  margin: 10px 20px;
  display: block !important;
  list-style: none;

  > li {
    margin: 20px 10px;
  }
`;

const MobileNavigation = () => {
  const appContext = useContext(PageContext);
  const { appLanguage } = appContext;

  return (
    <StyleMobileNavWrapper data-testid="mobile-navigation-wrapper">
      <StyledList>
        <li>
          <StyledMobileNavLink to="/">Homepage</StyledMobileNavLink>
        </li>
        {mainMenuItems.map((menuItem) => (
          <li key={menuItem.name_en}>
            <StyledMobileNavLink to={menuItem.path}>
              {appLanguage === 'pl' ? menuItem.name_pl : menuItem.name_en}
            </StyledMobileNavLink>
          </li>
        ))}
      </StyledList>
    </StyleMobileNavWrapper>
  );
};

export default MobileNavigation;
