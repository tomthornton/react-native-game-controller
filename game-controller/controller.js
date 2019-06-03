import React, { useState, useContext, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Haptic } from 'expo';
import Button from './button';
import Joystick from './joystick';
import {Ctx} from './context';

export default function Controller (props) {
    const [controllerData, setControllerData] = useContext(Ctx);
  return (
      <View style={{
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'black'}}>
        <View style={{position: 'absolute', backgroundColor: 'rgba(255,255,255,0.1)', height: 100, width: '50%', top: 0, borderColor: 'white', borderWidth: 1, borderRadius: 10, display: 'none'}}>

        </View>
        <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
            <Joystick context={props.context}/>
        </View>
          <View style={{width: '50%', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems:'flex-end', justifyContent: 'space-evenly', width: '100%'}}>
                <Button name='A' color='blue'/>
                <Button name='B' color='red'/>
            </View>
          </View>
      </View>
  );
}
