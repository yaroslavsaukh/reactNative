import React, { ScrollViewBase, StyleSheet } from "react-native";
import { View, Text, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/yaroslavsaukh/files/main/images.json")
            .then((response) => response.json())
            .then((data) => setPhotos(data))
    }, []);
    return (
        <ScrollView>
            <View style={gl_styles.container}>
                <View><Text style={gl_styles.title}>ГАЛЕРЕЯ</Text></View>
                <View style={{alignContent:'center'}}>
                    {photos.map(el => <View key={el.id}>
                        <Image style={gl_styles.image} source={{ uri: el.image }} />
                    </View>)}
                    <View><Text
                        style={gl_styles.me}>Саух Ярослав Васильович ІПЗ-19-1</Text></View>
                </View>
            </View>
        </ScrollView>
    )
}

const gl_styles = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 400,
        marginTop: 50,
    },
    image: {
        width: 350,
        height: 280,
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        resizeMode: 'stretch'
    },
    me: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        marginTop: 70,
        fontWeight: '300',
        fontSize: 15,
    },
    container:{
        justifyContent:'center'
    }
})

export default Gallery;