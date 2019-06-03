import React, {useContext, useEffect, useState} from 'react';
import { View, Image } from 'react-native';
import Background from './background';
import Mario from './mario';
import Ground from './ground';

export default function Scene () {
    return(
        <View style={{flexGrow: 1, top: 100, alignItems: 'center', borderColor: 'purple'}}>
                <Background/>
                <Mario/>
                <Ground/>
        </View>
    )
}