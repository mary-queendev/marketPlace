import React from "react";
import { Text } from "react-native";

export default function AppErrorMessage({error, visible}){
    if(!visible|| !error) return null;
    return(
        <Text style={{color: "red"}}>{error}</Text>
    )
}