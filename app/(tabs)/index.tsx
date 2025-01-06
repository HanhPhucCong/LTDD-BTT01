import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

type RootStackParamList = {
    IntroScreen: undefined;
    HomePage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function IntroScreen({ navigation }: any) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('HomePage'); 
        }, 10000);

        return () => clearTimeout(timer); 
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hành Phúc Công</Text>
            <Text style={styles.text}>Sinh ngày: 28/12/2003</Text>
            <Text style={styles.text}>Quê quán: Quảng Ngãi</Text>
            <Text style={styles.text}>Mã số sinh viên: 21110817</Text>
        </View>
    );
}

function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page!</Text>
            <Text style={styles.text}>This is the main page of your app.</Text>
        </View>
    );
}

export default function App() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    text: {
        fontSize: 18,
        marginBottom: 8,
    },
});
