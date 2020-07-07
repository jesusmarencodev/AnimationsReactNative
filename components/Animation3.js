import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation3 = () => {

    const [animation] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(
            animation, {
                toValue : 60, 
                duration : 1000, 
            } 
            
        ).start(); 
    }, [])



    return (
        <View>
            <Animated.Text
                style={[styles.text, {fontSize : animation}]}
            >Animation3</Animated.Text>
        </View>

    )
}

export default Animation3

const styles = StyleSheet.create({
    text : {
        fontSize :30,
        textAlign : 'center',
    }
})
