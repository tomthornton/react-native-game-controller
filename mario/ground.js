import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Ground () {
    return (
        <View style={styles.ground}>
                    <View style={styles.groundTop}>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                        <Image source={require('../assets/images/ground.png')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                        <Image source={require('../assets/images/ground_bottom.png')}/>
                    </View>  
                </View>
    )
}

const styles = StyleSheet.create({
    ground: {
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        backgroundColor: 'blue',
        width: 347,
        overflow: 'hidden'
    },
    groundTop: {
        flexDirection: 'row'
    }
})