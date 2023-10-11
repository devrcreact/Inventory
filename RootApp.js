import React from "react";
import { View } from "react-native";
import  store from "./src/Store";
import App from "./App";
import { Provider } from "react-redux";


const RootApp =()=>{


  return(
    <Provider store={store}>
    <App/>
    </Provider>
  )
}
export default RootApp