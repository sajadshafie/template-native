import React from 'react'
import { Image } from 'react-native'

type Props = {
    source?: any
    style?: object
    alt?: string
}

const AppImage: React.FC<Props> = (props) => {
    return (
        <Image
            alt={props.alt}
            style={[ props.style]}
            source={props.source}
        />
    )
}
export default AppImage