import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';

import Checkins from '~/pages/Checkins';

import HelpOrders from '~/pages/HelpOrders';

import HelpNew from '~/pages/HelpNew';

import Answers from '~/pages/Answers';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkins,
            HelpOrders,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4d7a',
              inactiveTintColor: '#eee',
              style: {
                borderTop: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            },
          }
        ),
        Nav: createSwitchNavigator({
          HelpNew,
          Answers,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
