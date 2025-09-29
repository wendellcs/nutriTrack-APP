import { StyleSheet } from "react-native"

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
        color: '#36B47A',
        fontWeight: 'bold',
        fontSize: '28px',
        margin: '10px'
    },

    normalText: {
        color: '#FFF',
        fontSize: '16px'
    }
})