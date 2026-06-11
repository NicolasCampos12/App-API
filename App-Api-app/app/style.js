
import { use } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#3fb39aff',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,

        borderBottomColor: 'black',
        borderBottomWidth: 3,        
        borderStyle: 'dashed',
    },
    list: {
        fontSize: 18,
        color: '#fff',
        
    },
    listContainer: {
        backgroundColor: '#1c5246ff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        gap: 10,
    },
    bg: {
        flex: 1,
        backgroundColor: '#696666ff',
        padding: 20,
    },
    usersContainer: {
        backgroundColor: '#1c5246ff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '80%',
        alignItems: 'center',
        gap: 10,
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
    },
    link:{
        textDecorationLine: 'none',
        backgroundColor: '#3fb39aff',
        padding: 10,
        borderRadius: 5,
        width: '20%',
        alignItems: 'center',
        marginBottom: 20,
    },
    button:{
        backgroundColor: '#3fb39aff',
        padding: 10,
        borderRadius: 5,
        width: '200px',
        alignItems: 'center',
    },
});

export default styles;

