import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Ctx} from './context';


export default function Debugger() {
    const [controller] = useContext(Ctx);
    return(
        <View style={styles.devBox}>
            <View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                    <Text style={styles.devTextBold}>Slope</Text>
                    <Text style={styles.devTextLight}>
                        
                    </Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                    <Text style={styles.devTextBold}>Duration</Text>
                    <Text style={styles.devTextLight}>
                        {controller.joystick.duration}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    devBox: {
        position: 'absolute',
        top: 30,
        left: 30,
        zIndex: 10,
        flexDirection: 'row'
    },
    devTextBold: {
      fontSize: 12,
      backgroundColor: 'rgba(0,0,0,1)',
      fontWeight: 'bold',
      padding: 5,
      textAlign: 'center',
      textTransform: 'capitalize',
      color: 'white',
      width: 90
    },  
    devTextLight: {
      fontSize: 12,
      width: 100,
      padding: 5,
      color: 'black',
      backgroundColor: 'rgba(255,255,255,1)',
      textAlign: 'center',
      borderColor: 'rgba(0,0,0,0.5)',
      borderWidth: 1,
    }
});