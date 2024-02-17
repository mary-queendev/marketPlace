import React from 'react';
import { Text, TextProps } from 'react-native';


export interface CustomText extends TextProps{
    text?: string;
    normalFont?: number;
    topicFont?: number;
    smallFont?: number;
}

export default function CustomText({
    text,
    normalFont= 14,
    topicFont= 16,
    smallFont= 12,
}: CustomText){
    return(
        <Text style={{fontSize: normalFont| topicFont| smallFont}}>{text}</Text>
    )
}