import React from "react"
import { View, Text } from "react-native"
import Swipeout from 'react-native-swipeout';
var swipeoutBtns = [
    {
        text: 'Xóa đi',
        onPress: () => {
            alert('kaka')
        },
        backgroundColor: 'blue',
        color: 'black'
    },
    {
        text: 'Bỏ bố m ra',
        onPress: () => {
            alert('kaka')
        },
        backgroundColor: 'yelow',
        color: 'red'
    },

]

const Bai1 = () => {
    return (
        <View style={{justifyContent: 'center',  flex: 1}}>
            <Swipeout right={swipeoutBtns} >
                <View style={{backgroundColor: 'red'}}>
                    <Text>Swipe me left</Text>
                </View>
            </Swipeout>
        </View>
    )
}

export default Bai1