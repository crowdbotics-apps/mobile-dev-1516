import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';

import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";
import CalendarNavigator from "../features/Calendar/navigator";
import TutorialNavigator from "../features/Tutorial/navigator";
import { MessengerNavigator } from "../features/Messenger/navigator";
import {EmailAuthNavigator} from '../features/EmailAuth/navigator';
import { CameraNavigator } from "../features/UserCamera/navigator";

//@BlueprintImportInsertion
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';
import { AddItemBlueprintNavigator } from '../features/AddItemBlueprint/navigator';
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';
import { ProfilesBlueprintNavigator } from '../features/ProfilesBlueprint/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    
    MapsScreen: {
      screen: GoogleMapsNavigator
    },
    
    
    Calendar: {
      screen: CalendarNavigator
    },
    
    
    EmailAuth: {
      screen: EmailAuthNavigator,
    },
    
    
    Tutorial: {
      screen: TutorialNavigator
    },
    
    
    UserCamera: {
      screen: CameraNavigator
    },
    
    
    Messenger: {
      screen: MessengerNavigator
    },
    

    //@BlueprintNavigationInsertion
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
AddItemBlueprint: { screen: AddItemBlueprintNavigator },
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },
ProfilesBlueprint: { screen: ProfilesBlueprintNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
