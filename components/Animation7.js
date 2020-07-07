import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation7 = () => {

    const [animation1] = useState(new Animated.Value(0));
    const [animation2] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animation1, {
                toValue : 300,
                duration : 1000
            }),
            Animated.spring(animation2, {
                toValue : 10,
            }),
            Animated.spring(animation2, {
                toValue : 1,
            }),
            Animated.timing(animation1, {
                toValue : 500,
                duration : 1000
            }),
        ]).start()
    }, [])




    const styleAnimation = {
        transform : [
            {translateY : animation1},
            {scale : animation2}
        ]
    }

    return (
        <View>
            <Animated.View style={[styles.box, styleAnimation]}>
            </Animated.View>
        </View>
    )
}

export default Animation7

const styles = StyleSheet.create({
    box :{
        width : 100,
        height : 100,
        backgroundColor : 'green',
    }
})
