import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

const store = configureStore({
  reducer: {
    reducer:{
        user:useReducer
    }
  },
});