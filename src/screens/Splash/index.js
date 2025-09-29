import { Text, View, Image } from "react-native";

import { generalStyles } from "../../assets/style/generalStyles";
import { styles } from './splashStyle'
import { ImageBackground } from "react-native-web";

export default function Splash(){
    return (
        <View>
            <ImageBackground style={styles.backgroundImage} resizeMode='cover' source = {require('../../assets/images/bg-gradient.svg')}>
                <View style ={styles.foregroundView}>
                    <View style={generalStyles.logoStyle}>
                        <Image source = {require('../../assets/images/logo.png')}/>
                    </View>

                    <Text style = {generalStyles.title}>NutriTrack</Text>

                    <Text style={generalStyles.normalText}>Sua jornada fitness começa aqui!</Text>
                </View>
            </ImageBackground>

        </View>
    )
}