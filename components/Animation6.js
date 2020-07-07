import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation6 = () => {
    const [animation] = useState(new Animated.Value(0));
    const [animation2] = useState(new Animated.Value(-50));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation2, {
                    toValue : -30,
                    duration : 0,
                }),
                Animated.timing(animation, {
                    toValue : 60,
                    duration : 500
                }),
                Animated.timing(animation2, {
                    toValue : 30,
                    duration : 500,
                }),
                Animated.timing(animation, {
                    toValue : 0,
                    duration : 500
                }),
                Animated.timing(animation2, {
                    toValue : -30,
                    duration : 500,
                }),
            ])
        ).start()
    }, [])


    const styleAnimation = {
        transform : [
            {translateY : animation},
            {translateX : animation2}
        ]
    }


    return (
        <View style={{alignItems :'center', marginTop : 5}}>
            <Animated.View style={[styles.box, styleAnimation]}>

            </Animated.View>
        </View>
    )
}

export default Animation6

const styles = StyleSheet.create({
    box : {
        width : 10,
        height : 10, 
        backgroundColor : 'red',
    },
})
