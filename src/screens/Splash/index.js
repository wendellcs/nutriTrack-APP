import { Text, View, Image, TouchableOpacity, Animated } from "react-native";
import { useRef, useEffect } from "react";

import { generalStyles } from "../../assets/style/generalStyles";
import { styles } from './splashStyle'
import { ImageBackground } from "react-native-web";
import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from "@react-navigation/native";

const bgImage = "../../assets/images/bg-gradient.svg"

export default function Splash(){
    const navigation = useNavigation()

    const spinAnim = useRef(new Animated.Value(0)).current;
    
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: false,
            })
        ).start();
    }, []);

    return (
        <View style={generalStyles.container}>
            <ImageBackground style={styles.backgroundImage} resizeMode='cover' source = {require(bgImage)}>
             <View style ={styles.foregroundView}>
                <View style={generalStyles.logoStyle}>
                    <Image 
                        source = {require("../../assets/images/logo.png")}
                    />
                </View>

                <Text style = {generalStyles.title}>NutriTrack</Text>

                <Text style={generalStyles.normalText}>Sua jornada fitness começa aqui!</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                    <Text style={styles.buttonText}>Começar agora</Text>
                </TouchableOpacity>

                <Animated.View style ={{transform: [{ rotate: spin }]}}>
                    <AntDesign name="loading" style = {generalStyles.iconStyle}/>
                </Animated.View>
            </View>
            </ImageBackground>

        </View>
    )
}