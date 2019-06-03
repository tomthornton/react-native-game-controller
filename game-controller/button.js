import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Haptic } from 'expo';
import {Ctx} from './context';

export default function Button (props) {
  return (
            <TouchableOpacity 
                onPressIn={()=>{ Haptic.impact(Haptic.ImpactFeedbackStyle.Heavy);}}
                onPressOut={()=>{Haptic.impact(Haptic.ImpactFeedbackStyle.Light);}}
                style={{backgroundColor: props.color, height: 50, width: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(255,255,255,0.4)', borderWidth: 1}}>
                <Text style={{color: 'white', fontSize: 20}}>{props.name}</Text>
            </TouchableOpacity>
  );
}