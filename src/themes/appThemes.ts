import {
  complement, darken, rgba,
} from 'polished';
import { commonColors } from './commonCollors';
import { backgroundImages } from './backgroundImages';

export const darkTheme = {
  globalBackgroundImage: backgroundImages.firstAidKit,
  globalBackgroundColor: '#121218',
  // cardsBackgroundColor: rgba(33, 33, 33, 0.5),
  themeName: 'dark',
  // appBoxShadowColor: 'rgba(0,0,0,.9)',
  // menuBackgroundImage: backgroundImages.randomGray,
  // menuGradient: '#242323 0%, #303030 20%, #383838 40%, #383838 60%, #303030 80%, #242323 100%',
  // sidebarBackgroundImage: backgroundImages.gridNoise,
  color: commonColors.grey200,
  primary: darken(0.1, commonColors.blue),
  secondary: darken(0.1, commonColors.orange),
  success: commonColors.green,
  info: commonColors.cyan,
  danger: commonColors.red,
  warning: commonColors.yellow,
};

export const lightTheme = {
  globalBackgroundImage: backgroundImages.nastyFabric,
  globalBackgroundColor: rgba(commonColors.grey100, 0.25),
  cardsBackgroundColor: '#f5f5f5',
  themeName: 'light',
  // appBoxShadowColor: 'rgba(150,150,150,.5)',
  // menuBackgroundImage: backgroundImages.randomGray,
  // menuGradient: '#272727 0%, #4d4d4d 20%, #616161 40%, #616161 60%, #4d4d4d 80%, #272727 100%',
  // sidebarBackgroundImage: backgroundImages.lowContrastLinen,
  color: commonColors.grey800,
  primary: commonColors.cyan,
  secondary: complement(commonColors.cyan),
  success: commonColors.green,
  info: commonColors.cyan,
  danger: commonColors.red,
  warning: commonColors.yellow,
};

export const chocolateTheme = {
  globalBackgroundImage: backgroundImages.debutLight,
  globalBackgroundColor: '#4b2727',
  // cardsBackgroundColor: rgba(98, 43, 33, 0.5),
  themeName: 'chocolate',
  // appBoxShadowColor: 'rgba(0,0,0,.9)',
  // menuBackgroundImage: backgroundImages.randomGray,
  menuGradient: '#371911 0%, #3f1c13 20%, #4b2117 40%, #4b2117 60%, #3f1c13 80%, #371911 100%',
  // sidebarBackgroundImage: backgroundImages.gridNoise,
  color: commonColors.grey200,
  primary: commonColors.cyan,
  secondary: darken(0.05, complement(commonColors.teal)),
  success: commonColors.green,
  info: commonColors.cyan,
  danger: commonColors.red,
  warning: commonColors.yellow,
};
