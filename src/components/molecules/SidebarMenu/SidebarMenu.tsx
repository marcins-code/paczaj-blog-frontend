import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { StyledSidebarLink } from '../../atoms/Link/Link';
import { PageContext } from '../../../context';
import { mainMenuItems } from '../../../languages/menus';
import { device } from '../../../themes/mediaBreakpoints';
// import gridNoise from '../../../assets/images/backgrounds/grid-noise.png';

// import Logo from '../Logo/Logo';
// import UserInfo from '../UserInfo/UserInfo';

const StyledNavigationWrapper = styled.div`
  position: absolute;
  width:250px;
   @media screen and ${device.max.laptop} {
    width:200px;
  }
`;
const StyledSidebarNav = styled.nav`
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  position: fixed;
`;

const StyledList = styled.ul`
  width: 200px;
  @media screen and ${device.min.laptop} {
    width: 220px;
  }
  display: block !important;
  list-style: none;

  li {
    margin: 18px  0 18px 37px;
  }
}
`;

const StyledDivider = styled.hr`
  border-color: #404040;
  border-style: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  border-width: 1px;
  margin: 0 5px;
`;

const SidebarMenu = () => {
  const nodeRef = useRef(null);
  const appContext = useContext(PageContext);
  // const authContext = useContext(AuthContext);
  const { appLanguage, navPosition } = appContext;

  return (

    <CSSTransition
      in={navPosition === 'sidebar'}
      timeout={1200}
      classNames={{ enter: 'slide-in-left', exit: 'slide-out-left' }}
      unmountOnExit
      nodeRef={nodeRef}
    >
      <StyledNavigationWrapper data-testid="sidebar-navigation">
        <StyledSidebarNav className="sidebar" ref={nodeRef} data-testid="sidebar-navigation-nav">
          {/* <Logo position="sidebar" /> */}
          <StyledDivider />
          {/* {authContext.isLoggedIn && ( */}
          {/* <> */}
          {/*  <UserInfo /> */}
          {/*  <StyledDivider /> */}
          {/* </> */}
          {/* ) } */}

          <StyledList>
            <li>
              <StyledSidebarLink to="/">Homepage</StyledSidebarLink>
            </li>
            {mainMenuItems.map((menuItem) => (
              <li key={menuItem.name_en}>
                <StyledSidebarLink to={menuItem.path}>
                  {appLanguage === 'pl' ? menuItem.name_pl : menuItem.name_en}
                </StyledSidebarLink>
              </li>
            ))}
          </StyledList>
          <StyledDivider />
          {/* {authContext.isLoggedIn && ( */}
          {/* <> */}
          {/*  <StyledList> */}
          {/*    {adminMenuItems.map((menuItem) => ( */}
          {/*      <li key={menuItem.name_en}> */}
          {/*        <StyledSidebarLink as={NavLink} to={menuItem.path} exact={menuItem.exact}> */}
          {/*          {appLanguage === 'pl' ? menuItem.name_pl : menuItem.name_en} */}
          {/*        </StyledSidebarLink> */}
          {/*      </li> */}
          {/*    ))} */}
          {/*  </StyledList> */}
          {/*  <StyledDivider /> */}
          {/* </> */}
          {/* )} */}
        </StyledSidebarNav>
      </StyledNavigationWrapper>

    </CSSTransition>

  );
};

export default SidebarMenu;
