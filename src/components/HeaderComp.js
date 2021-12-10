import React from 'react';
import { Header, Image } from 'react-native-elements';

const HeaderComp = (props) => {

    return (
        <Header
            backgroundColor="#2d3436"
            leftComponent={<Image source={{ uri: "https://play-lh.googleusercontent.com/oU_CNtPRewrEfBWk3HM6yzZxe4rZQIH8-LRd7GT6m1naLW8wab4m-s1-2ZZuB2O4Lg" }}
                style={{ width: 35, height: 35 }} />}
            rightComponent={{ icon: "search", color:"white"}}
        />
    )
}

export default HeaderComp;