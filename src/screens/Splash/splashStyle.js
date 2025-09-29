import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: '100vh'
    },

    foregroundView: {
        backgroundColor: '#00000071',
        width: '340px',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '12px'
    },

})