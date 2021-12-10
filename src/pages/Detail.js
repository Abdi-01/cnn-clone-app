import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Text, Icon } from 'react-native-elements'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const DetailPage = (props) => {
    console.log("detail data", props.location.state)
    const { title, author, content, publishedAt, description, url, urlToImage, source } = props.location.state
    return (
        <View style={{ flex: 1 }}>
            <Icon
                containerStyle={{ position: "absolute" }}
                raised
                name='arrow-left'
                type='font-awesome'
                color='#2d3436'
                size={15}
                onPress={() => console.log('hello')} />
            <Image source={{ uri: urlToImage }} style={{ height: hp(42) }} />
            <View style={desain.detailContainer}>
                <Text h4>{title}</Text>
                <Text style={{ color: "gray" }}>{source.name} | {publishedAt}</Text>
                <View style={{ paddingTop: 32 }}>
                    <Text style={{ textAlign: "justify" }}>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const desain = StyleSheet.create({
    detailContainer: {
        marginTop: hp(-3),
        padding: 32,
        backgroundColor: "white",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        flex: 1
    }
})
export default DetailPage;