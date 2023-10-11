import React from "react";
import { TouchableOpacity, View } from "react-native";
import { store } from "./src/Store";
import {useDispatch, useSelector} from 'react-redux'
import { UseSelector } from "react-redux";
import { ApproveItem, incNumber } from "./src/actions";
const App =()=>{
   const Mystate=useSelector((state)=> state.changeTheNumber)

  const dispatch=useDispatch()
  const Approve_App=()=>{
    console.log("hhhhh",Mystate);
  }
  return(
    <View style={{flex:1,backgroundColor:'orange'}}>
      <TouchableOpacity onPress={()=>{
       dispatch(incNumber)
       //Approve_App()
      }} style={{height:50,width:300,backgroundColor:'cyan'}}>

      </TouchableOpacity>

    </View>
  )
}
export default App