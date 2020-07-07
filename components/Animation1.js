import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'

const Animation1 = () => {

    const [animation] = useState(new Animated.Value(0));//valor inicial de la animacion

    useEffect(() => {
        Animated.timing(
            animation, {//esto es lo que va a animar
                toValue : 1, //valor final de la animacion
                duration : 500, //tiempo en milisegundos que durara la animacion para llegar a su valor final en este caso 1

            } 
            
        ).start(); //el metodo start inicia la animacion
    }, [])

    //para asociar la animacion a un elemento del DOM el elemento debe estar presedido por
    //Animated.elemento (Animated.View por ejemplo)

    //por ultimo en los estilos del elemento le pasaremos la animacion creada como se ve a continuacion

    return (
        <Animated.View
            style={{opacity : animation}} /* en este caso de anima el opacity ira de 0 a 1 en 500 milisegundos */
        >
            <Text style={styles.text}>Animation1</Text>
        </Animated.View>
    )
}

export default Animation1

const styles = StyleSheet.create({
    text : {
        fontSize : 30,
        textAlign : 'center'
    }
})
