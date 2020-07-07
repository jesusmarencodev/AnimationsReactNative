import React, {useState} from 'react'
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'

const Animation5 = () => {

    const [animation] = useState(new Animated.Value(1));


    const pressBtn = () => {
        Animated.spring(animation, {
            toValue : .8
        }).start();
    }

    const unPressBtn = () => {
        Animated.spring(animation,{
            toValue : 1,
            friction : 4,//rebote, mas bajo mayor rebote, mas alto menor rebote
            tension : 60 // miestras menor sea el numero mas suave es el movimiento

        }).start();
    }

    const styleAnimation = {
        transform : [{scale : animation}]
    }


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPressIn={()=>pressBtn()}
                onPressOut={()=>unPressBtn()}
            >
                <Animated.View style={[styles.btn, styleAnimation]}>
                    <Text style={styles.text}>Iniciar Sesion</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Animation5

const styles = StyleSheet.create({
    container : {
        marginTop : 5,
        alignItems : 'center',
    },
    btn : {
        backgroundColor : 'blue',
        width : 280,
        height : 80,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        color : '#FFF',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 28
        
    },
})
