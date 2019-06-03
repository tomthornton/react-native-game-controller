import React, {useState, useContext, useEffect} from 'react';
import {Animated, View, Text} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Haptic } from 'expo';
import { Ctx } from './context';


export default joystick = (props) => {
    const [controller, updateController] = useContext(Ctx);
    const [active, setActive] = useState(false);
    const radius = 30
    const [slope, setSlope] = useState(0);
    const [duration, setDuration] = useState(0);
    const [velocity,  setVelocity] = useState(0);
    const [vector, setVector] = useState({x:0,y:0});

    const startJoystick = (event) => {
            setActive(true);
            setDuration(duration+1);
            const X = event.nativeEvent.translationX;
            const Y = event.nativeEvent.translationY;
            const absY = Math.abs(Y);
            const absX = Math.abs(X);
            setSlope(absY < absX ? Y/X : X/Y);
            /* const movementVelocity = {x: Math.round(event.nativeEvent.velocityX),y: Math.round(event.nativeEvent.velocityY)} */
            if(absX + absY > radius) {
                setVelocity(1)
                if(slope > 0) {
                    const sign = X > 0 && Y > 0 ? 1 : -1
                    setVector({
                            x: absX > absY ? Math.round(radius*sign) : Math.round(radius*slope*sign), 
                            y: absX > absY ? Math.round(radius*slope*sign) : Math.round(radius*sign)});
                } else {
                    const sign = absX > absY ? 1 : -1;
                    if (X > 0) {
                        setVector({
                            x: absX > absY ? Math.round(radius*sign): Math.round(radius*slope*sign),
                            y: absX > absY ? Math.round(radius*slope*sign): Math.round(radius*sign)});
                    } else {
                        setVector({
                            x: absX > absY ? Math.round(radius*sign*-1) : Math.round(radius*sign*slope*-1),
                            y: absX > absY ? Math.round(radius*sign*slope*-1) : Math.round(radius*sign*-1)});
                    }
                }
            } else {
                setVelocity(((Math.sqrt(Math.pow(X,2)+Math.pow(Y,2)))/radius).toFixed(2));
                setVector({
                    x: event.nativeEvent.translationX, 
                    y: event.nativeEvent.translationY});
            }
            updateController({type: 'JOYSTICK', payload: {
                duration: duration,
                velocity: velocity,
                slope: slope,
                x: vector.x,
                y: vector.y
            }})
        }

    const stopJoystick = () => {
        setActive(false);
        setVelocity(0);
        setSlope(0);
        setVector({x: 0, y:0});
        Haptic.impact(Haptic.ImpactFeedbackStyle.Medium);
        updateController({type: 'JOYSTICK', payload: {
            duration: 0,
            velocity: velocity,
            slope: slope,
            x: 0,
            y: 0
        }})

    }
    useEffect(()=> {
        
        setDuration(active ? duration+1 : 0);
        updateController({type: 'JOYSTICK', payload: {
            duration: active ? duration+1 : 0,
            velocity: velocity,
            slope: slope,
            x: vector.x,
            y: vector.y
        }})
    },[active, duration])

    return(
            <View>
                <PanGestureHandler onGestureEvent={(e)=>startJoystick(e)} onHandlerStateChange={()=> stopJoystick()}>
                    <View style={{height: 90, width: 90, borderRadius: 90/2, borderColor: 'rgba(255,255,255,0.5)', borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Animated.View style={{backgroundColor: 'white', height: 60, width: 60, borderRadius: 60/2, opacity: 0.9,
                        transform: [
                            {translateX: vector.x},
                            {translateY: vector.y}
                        ]
                        }}>
                        </Animated.View>
                    </View>
                </PanGestureHandler>
            </View>
    )
}