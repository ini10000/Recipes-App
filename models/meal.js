class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageURL,
    duration,
    ingerdients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageURL = imageURL;
    this.affordability = affordability;
    this.complexity = complexity;
    this.duration = duration;
    this.ingerdients = ingerdients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegetarian = isVegetarian;
    this.isVegan = isVegan;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
