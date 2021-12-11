import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from './useWindowSize';

interface pageInitSettingsTypes {
    appTheme: string;
    appThemeHandler(event: React.MouseEvent<HTMLButtonElement>): void | undefined;
    appLanguage: 'pl' | 'en';
    langSwitcherHandler(event: React.ChangeEvent<HTMLInputElement>): void | undefined;
    navPosition: string;
    navPositionHandler(event: React.ChangeEvent<HTMLInputElement>): void | undefined;
    isMobile: boolean;
    rememberSettings: boolean;
    rememberSettingsHandler(event: React.ChangeEvent<HTMLInputElement>): void | undefined;
    isAdminPage: boolean,
}

export const useAppSettings = (pageInitSettings: any): pageInitSettingsTypes => {
  // @ts-ignore
  const storedValues = JSON.parse(localStorage.getItem('appSettings'));

  const [isAdminPage, setIsAdminPage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const regex = /administration/g;
    const found = location.pathname.match(regex);
    setIsAdminPage(Boolean(found));
  }, [location]);

  const [appTheme, setAppTheme] = useState(
    storedValues ? storedValues.appTheme : pageInitSettings.appTheme,
  );

  const [appLanguage, setAppLanguage] = useState(
    storedValues ? storedValues.appLanguage : pageInitSettings.appLanguage,
  );

  const [navPosition, setNavPosition] = useState(
    storedValues ? storedValues.navPosition : pageInitSettings.navPosition,
  );
  const [isMobile, setIsMobile] = useState(false);
  const [rememberSettings, setRememberSettings] = useState(!!storedValues);
  const size = useWindowSize();
  useEffect(() => {
    setIsMobile(size.width ? size.width <= 768 : false);
  }, []);

  useEffect(() => {
    setIsMobile(size.width ? size.width <= 768 : false);
    isMobile && setNavPosition('menu-top');
  }, [size]);

  useEffect(() => {
    if (rememberSettings) {
      localStorage.setItem(
        'appSettings',
        JSON.stringify({
          appTheme,
          navPosition,
          appLanguage,
        }),
      );
    } else {
      localStorage.removeItem('appSettings');
    }
  }, [rememberSettings]);

  useEffect(() => {
    if (rememberSettings) {
      localStorage.removeItem('appSettings');
      localStorage.setItem(
        'appSettings',
        JSON.stringify({
          appTheme,
          navPosition,
          appLanguage,
        }),
      );
    }
  }, [appTheme, navPosition, appLanguage]);
  const appThemeHandler = useCallback(
    (e) => {
      setAppTheme(e.target.dataset.apptheme);
    },
    [appTheme],
  );

  const langSwitcherHandler = useCallback((e) => {
    setAppLanguage(e.target.checked ? 'en' : 'pl');
  }, [appLanguage]);

  const navPositionHandler = useCallback((e) => {
    setNavPosition(e.target.checked ? 'sidebar' : 'menu-top');
  }, [navPosition]);

  const rememberSettingsHandler = useCallback((e) => {
    setRememberSettings(e.target.checked);
  }, [rememberSettings]);

  return {
    appTheme,
    appThemeHandler,
    appLanguage,
    langSwitcherHandler,
    navPosition,
    navPositionHandler,
    isMobile,
    rememberSettings,
    rememberSettingsHandler,
    isAdminPage,
  };
};
