import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealList = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  const renderMealItem = itemData => {
    const isFavourite = favouriteMeals.some(
      meal => meal.id === itemData.item.id
    );
    return (
      <MealItem
        duration={itemData.item.duration}
        title={itemData.item.title}
        image={itemData.item.imageURL}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavourite
            }
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  }
});

export default MealList;
