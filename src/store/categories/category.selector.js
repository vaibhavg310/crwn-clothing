import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],  // input selector
  (categoriesSlice) => categoriesSlice.categories // output selector
) 
// categoriesSlice in category array
// categoriesSlice.categories is individual category
// output will only run if input changes or updates

export const selectCategoriesMap = createSelector(
  [selectCategories],
   (categories) => {
     return categories.reduce((acc, category) => {
      const {title, items} = category;
      acc[title.toLowerCase()] = items;
      return acc;
  }, {});
}
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
  