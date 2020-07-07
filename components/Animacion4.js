import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation4 = () => {

    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animation, {
                toValue : 360, 
                duration : 1000, 
            } 
            
        ).start(); 
    }, [])


    const interpolation = animation.interpolate({
        inputRange : [ 0, 360],
        outputRange : ['0deg', '360deg']
    })

    const styleAnimation = {
        transform : [ {rotate : interpolation} ]
    }



    return (
        <Animated.View
            style={[styles.text, styleAnimation]}
        >
           
        </Animated.View>

    )
}

export default Animation4

const styles = StyleSheet.create({
    text : {
        width : 100,
        height : 100,
        backgroundColor : 'cornflowerblue'
    }
})
