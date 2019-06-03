import React, {useContext, useEffect, useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ctx } from '../game-controller/context';
import Scene from './scene';
import Debugger from '../game-controller/debugger';

export default function Game () {
    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {/* <Debugger/> */}
                <Scene/>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    devBox: {
        position: 'absolute',
        width: 190,
        left: 0,
        top: 0,
        zIndex: 10
    },
    groundTop: {
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
  
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      paddingBottom: '10%',
      alignItems: 'center',
      backgroundColor: 'black'
    }
});