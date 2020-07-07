import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation2 = () => {

    const [animation] = useState(new Animated.Value(0));
    const [animation2] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animation, {
                toValue : 450, 
                duration : 1000, 

            } 
            
        ).start(); 
        Animated.timing(
            animation2, {
                toValue : 100, 
                duration : 1000, 

            } 
            
        ).start(); 
    }, [])



    return (
        <Animated.View
            style={[
                styles.box,
                {
                    width : animation,
                    height : animation2
                }
            ]}    
        >

        </Animated.View>

    )
}

export default Animation2

const styles = StyleSheet.create({
    box : {
        width : 100,
        height : 100,
        backgroundColor : 'cornflowerblue'
    }
})
