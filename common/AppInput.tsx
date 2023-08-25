import React from 'react'
import AppView from './AppView'
import { StyleSheet, TextInput } from 'react-native'
import { Color } from '../constant'


type AppProps = {
    style?: object
    onChange?: (v:string) => void
    value?: string
    placeholder?: string
    keyboardType?: string | any
    placeholderStyle?:object
}


const AppInput: React.FC<AppProps> = (props) => {
    return (
        <TextInput
            onChangeText={props.onChange}
            placeholder={props.placeholder}
            style={[style.input,props.style]}
            value={props.value}
            keyboardType={props.keyboardType}
            placeholderTextColor={Color.sub_text}
        />
    )
}

const style = StyleSheet.create({
    input: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 45,
        borderWidth: 1,
        borderColor: Color.main_bg,
        width: "100%",
        paddingHorizontal:10,
        color:Color.text_color
    }
})

export default AppInput
