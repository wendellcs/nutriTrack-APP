import { Text, View, Image, TouchableOpacity } from "react-native";

import { generalStyles } from "../../assets/style/generalStyles";
import { styles } from './splashStyle'
import { ImageBackground } from "react-native-web";

import { useNavigation } from "@react-navigation/native";

const bgImage = "../../assets/images/bg-gradient.svg"

export default function Splash(){
    const navigation = useNavigation()

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
            </View>
            </ImageBackground>

        </View>
    )
}