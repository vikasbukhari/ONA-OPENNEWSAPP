import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import constants from '../assets/constants';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Home from '../screens/home';
import Categories from '../screens/categories';
import Settings  from '../screens/settings';
import SingleNews from '../screens/SingleNews';
import HomePostsDisplay from '../components/HomePageItemsLoader';
import HomeSlider from '../components/HomeSlider';
import CategoryView from '../screens/CategoryView';

// Stacks
const HomeStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const settingsStack = createStackNavigator();
const DisplayStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Screen Stack
function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="HomeTab"
          component={Home}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_BG },}} 
        />

        <HomeStack.Screen
          name="ViewNews"
          component={SingleNews}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_BG },}} 
        />

        <HomeStack.Screen
          name="HomePostsDisplay"
          component={HomePostsDisplay}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_BG },}} 
        />

        <HomeStack.Screen
          name="HomeSlider"
          component={HomeSlider}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_BG },}} 
        />

      </HomeStack.Navigator>
    );
  }


// Categories Stack Screen
function CategoriesStackScreen() {
    return (
      <CategoriesStack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: constants.LIGHT_THEME_BG,
            elevation: 0, 
          },
        }}
      >
      
      <CategoriesStack.Screen
          name="Categories"
          component={Categories}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_LIGHT_BLUE_BG },}} 
      />

      <CategoriesStack.Screen
          name="CategoryView"
          component={CategoryView}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_LIGHT_BLUE_BG },}} 
      />
      
      <CategoriesStack.Screen
          name="ViewNews"
          component={SingleNews}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_LIGHT_BLUE_BG },}} 
      />

      </CategoriesStack.Navigator>
    );
  }

// Settings Stack Screen

function SettingsStackScreen() {
    return (
      <settingsStack.Navigator>
        <settingsStack.Screen
          name="Categories"
          component={Settings}
          options={{headerShown: false, cardStyle: { backgroundColor: constants.LIGHT_THEME_BG },}} 
        />
      </settingsStack.Navigator>
    );
  }

// Navigator Export
export default function MyNavigator() {
    return (

      <NavigationContainer>

       {/* Tab Navigator Start */}

        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{
            tabBarShowLabel: false,    
            tabBarStyle: {
              height: 60,             
              elevation: 50,
              backgroundColor: constants.LIGHT_THEME_BG,
            },
          }}
        >
      
           <Tab.Screen 
            name="CategoriePage" 
            component={CategoriesStackScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    let color = focused ? constants.LIGHT_THEME_PRIMARY_COLOR: constants.LIGHT_THEME_TEXT_COLOR;
                    let icon = focused ? "ios-grid" : "ios-grid-outline";
                    let size = focused ? 30 : 24;
                    return(
                    <Icon name={icon} size={size} color={color} />
                )},
                tabBarLabel: 'Categories',
                tabBarActiveTintColor: constants.LIGHT_THEME_PRIMARY_COLOR,
                tabBarInactiveTintColor: constants.LIGHT_THEME_TEXT_COLOR,
                 }}
             />

        <Tab.Screen name="Home" 
            component={HomeStackScreen}
            options={
            {
               headerShown: false,
               tabBarIcon: ({focused}) => {
                   let color = focused ? constants.LIGHT_THEME_PRIMARY_COLOR: constants.LIGHT_THEME_TEXT_COLOR;
                   let icon = focused ? "home" : "ios-home-outline";
                   let size = focused ? 30 : 24;
                   return(
                   <Icon name={icon} size={size} color={color}  />
               )},
               // tabBarLabel: 'Home',
               tabBarActiveTintColor: constants.LIGHT_THEME_PRIMARY_COLOR,
               tabBarInactiveTintColor: constants.LIGHT_THEME_TEXT_COLOR,
           }
       }/>

        <Tab.Screen 
            name="SettingsPage" 
            component={SettingsStackScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    let color = focused ? constants.LIGHT_THEME_PRIMARY_COLOR: constants.LIGHT_THEME_TEXT_COLOR;
                    let icon = focused ? "settings" : "settings-outline";
                    let size = focused ? 30 : 24;
                    return(
                    <Icon name={icon} size={size} color={color} />
                )},
                    tabBarLabel: 'Settings',
                    tabBarActiveTintColor: constants.LIGHT_THEME_PRIMARY_COLOR,
                    tabBarInactiveTintColor: constants.LIGHT_THEME_TEXT_COLOR,
          }}/>
        </Tab.Navigator> 
      </NavigationContainer>
    );
  }