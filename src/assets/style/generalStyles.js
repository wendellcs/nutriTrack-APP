import { StyleSheet } from "react-native"

import { colors } from "./variables"

export const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    },

    title: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 28,
        margin: '10px'
    },

    normalText: {
        color: '#FFF',
        fontSize: 16
    }
})