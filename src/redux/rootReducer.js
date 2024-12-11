import { combineReducers } from "@reduxjs/toolkit";
import FeatureSlice from "./reducers/featureSlice";

export const rootReducer = combineReducers({
    feature:FeatureSlice
})