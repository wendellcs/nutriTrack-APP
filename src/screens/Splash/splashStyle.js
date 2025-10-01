import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get('window');

import { colors } from "../../assets/style/variables";

export const styles = StyleSheet.create({
    backgroundImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: '100vh',
    },

    foregroundView: {
        backgroundColor: colors.transparentBg,
        width: '340px',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '12px'
    },

    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 40,
        marginTop: 20,
        borderRadius: 12,
    },

    buttonText: {
        color: colors.textColor,
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 1
    }

})