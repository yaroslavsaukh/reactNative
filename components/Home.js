import { useEffect, useState } from 'react'
import { View, Image, ScrollView, Text, ImageBase, StyleSheet } from 'react-native'

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/yaroslavsaukh/files/main/news.json")
            .then((response) => response.json())
            .then((data) => setNews(data));
    }, []);

    return (
        <ScrollView>
            <View><Text style={{ marginTop: 50, marginLeft: 150, fontWeight: '400', fontSize: 22 }}>НОВИНИ</Text></View>
            <View>
                <View style={hm_styles.card}>
                    {news.map(el => <View key={el.id}>
                        <Image style={hm_styles.image} source={{ uri: el.image }} />
                        <Text style={hm_styles.title}>{el.title}</Text>
                        <Text style={hm_styles.text}>{el.text}</Text>
                        <Text style={hm_styles.date}>{el.date}</Text>
                    </View>)}
                    <View><Text
                        style={hm_styles.me}>Саух Ярослав Васильович ІПЗ-19-1</Text></View>
                </View>
            </View>
        </ScrollView>
    )
}

const hm_styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 300,
        margin: 25,
    },
    text: {
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 300,
        margin: 15,
    },
    date: {
        margin: 10,
        fontWeight: 700,
    },
    image: {
        width: 360,
        height: 250,
        marginTop: 50,
        marginLeft: 15,
        marginBottom: -10,
        resizeMode: 'contain',
    },
    me: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        marginTop: 70,
        fontWeight: '300',
        fontSize: 15,
    }
});
export default Home