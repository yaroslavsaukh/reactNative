import React, {Button, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={{marginTop: 70, marginBottom: 50, fontWeight: '400', fontSize: 22}}>РЕЄСТРАЦІЯ</Text>

            <View>
            <Text style={styles.text}>Електронна пошта</Text>
            <TextInput style={styles.input}/>
            </View>

            <View>
            <Text style={styles.text}>Пароль</Text>
            <TextInput style={styles.input}/>
            </View>

            <View>
            <Text style={styles.text}>Пароль(ще раз)</Text>
            <TextInput style={styles.input}/>
            </View>

            <View>
            <Text style={styles.text}>Прізвище</Text>
            <TextInput style={styles.input}/>
            </View>

            <View>
            <Text style={styles.text}>Ім'я</Text>
            <TextInput style={styles.input}/>
            </View>

            <Button color={'#EE781C'} title="Зареєструватися"/>

            <View>
            <Text style={styles.me}>Саух Ярослав Васильович ІПЗ-19-1</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        width: 370,
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        borderRadius: 25,
    },
    text: {
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    me: {
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 15,
        marginTop: 80,
        marginBottom:40,
    }
})

export default Profile;
