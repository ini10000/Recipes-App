import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
  // mode: "modal",
  // initialRouteName: "MealDetail",
  defaultNavigationOptions: {
    headerTitle: "A Screen",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
};
const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  defaultStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
  },
  defaultStackNavOptions
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favourites",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
    },
    tabBarColor: Colors.accent,
    tabBarLabel:
      Platform.OS === "android" ? (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favourites</Text>
      ) : (
        "Favourites"
      )
  }
};

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  defaultStackNavOptions
);

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Colors.accent
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
