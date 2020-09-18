import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Camera } from 'expo-camera'

export default () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [tackPictureMode, setTackPictureMode] = useState(false)
    const [picture, setPicture] = useState('')

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })();
    },[])

    if(hasPermission === null){
        return <View/>
    } else if (hasPermission === false){
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={ref => { this.camera = ref}}
                type={Camera.Constants.Type.front}
                style={styles.camera}
            ></Camera>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
        width: '100%',
        height: 380,
        marginBottom: 20
    },
    camera: {
        width: '100%',
        height: 400,
    }
})