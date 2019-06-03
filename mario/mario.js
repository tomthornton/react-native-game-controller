import React, {useContext, useEffect, useState} from 'react';
import { Image, View } from 'react-native';
import {Ctx} from '../game-controller/context';

export default function Mario () {
    const [controller] = useContext(Ctx);
    const [direction, setDirection] = useState('180deg');
    const [position, setPosition] = useState({x: 335/2,});
    const joystick = controller.joystick;
    const boundary = 335;
    const standing = require('../assets/images/mario_still.png');
    const walking = require('../assets/images/mario_walking.gif');
    const duration = controller.joystick.duration;
    const speed = 3;
    useEffect(()=> {
        if(controller.joystick.x !== 0) {
            setDirection(controller.joystick.x > 0 ? '180deg' : '360deg');
        }
        setPosition({
            x:  controller.joystick.x > 0 ?
                position.x <= boundary ? 
                    position.x + speed :
                    position.x :
                position.x >= 0 ?
                    position.x - speed :
                    position.x,
            y: 0
        })
        
    }, [duration]);

    return (
        <Image
            source={
                duration > 0 ? 
                    position.x >= boundary || position.x <= 0?
                        standing : walking : standing}
            style={{
                position: 'absolute',
                bottom: 118,
                left: position.x,
                transform:[
                    {rotateY: direction}

                ]}
            }
            /* style={
                {transform: [
                    {translateX: position.x},
                    {translateY: position.y},
                    {rotateY: direction}
            ]}} */
        />
    );

}