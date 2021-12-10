import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import HeaderComp from '../components/HeaderComp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import axios from 'axios';
import { Link } from 'react-router-native';

const API_URL = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=56e93abee1e94703a4c99090376efa3b"
const HomePage = (props) => {

    const [kategori, setKategori] = useState([
        "Terbaru", "Teknologi", "Bisnis", "Nasional", "Sport"
    ])

    const [selectedKategori, setSelectKategori] = useState(0)

    const [berita, setBerita] = useState([])

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getBerita()
    }, [])

    const getBerita = async () => {
        try {
            // refresh true
            setRefresh(true)
            // get data berita
            let res = await axios.get(API_URL)
            if (res.data.totalResults > 0) {
                setBerita(res.data.articles)
            }
            // refresh false
            setRefresh(false)
        } catch (error) {
            console.log(error);
        }
    }

    const printKategori = () => {
        return kategori.map((value, index) => {
            return <Text style={selectedKategori == index ? desain.activeKategori : desain.kategori} key={index.toString()}>
                {value}
            </Text>
        })
    }

    const printBerita = () => {
        return berita.map((value, index) => {
            return <Card key={index.toString()} containerStyle={{ margin: 0, marginBottom: hp(1), padding: 5 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image source={{ uri: value.urlToImage }} style={{ width: 75, height: 75 }} />
                    <Text style={{ fontWeight: "800", padding: 8, width: "80%" }}>{value.title}</Text>
                </View>
            </Card>
        })
    }

    return (
        <View style={{ backgroundColor: "white" }}>
            <HeaderComp />
            <View style={desain.barKategori}>
                {printKategori()}
            </View>
            <View >
                <Image style={{ width: wp(100), height: hp(30) }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GKtGZ98jPOHl1e-RZoOx4EqxzZwV-7R9ieXuPJdpaf3bHThtIASUhvVB57xk0GLVqXI&usqp=CAU" }} />
                <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
                    <Text h4 >"Harga Cryptocurrency Meningkat"</Text>
                    <Text style={{ textAlign: "justify", color: "gray" }}>
                        Hal ini tertuang dalam Peraturan Bappebti Nomor 8 Tahun 2021 tentang Pedoman Penyelenggaraan Perdagangan Pasar Fisik Aset Kripto (Crypto Asset) di Bursa Berjangka. Aturan ini ditetapkan pada 29 Oktober 2021 lalu.
                    </Text>
                </View>
            </View>
            {/* <ScrollView style={{ height: hp(45) }} >
                {printBerita()}
            </ScrollView> */}
            <View style={{ height: hp(40) }}>
                <FlatList
                    data={berita}
                    renderItem={({ item }) => (
                        <Card containerStyle={{ margin: 0, marginBottom: hp(1), padding: 5 }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Image source={{ uri: item.urlToImage }} style={{ width: 75, height: 75 }} />
                                <View style={{ padding: 8, width: "75%" }}>
                                    <Text style={{ fontWeight: "700" }}>{item.title}</Text>
                                    <Link to="">
                                        <Text style={{ textAlign: "right" }}>Read More</Text>
                                    </Link>
                                </View>
                            </View>
                        </Card>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refresh}
                    onRefresh={getBerita}
                />
            </View>
        </View>
    )
}


const desain = StyleSheet.create({
    barKategori: {
        marginTop: -1.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp("2%"),
        backgroundColor: "#2d3436"
    },
    activeKategori: {
        color: "white",
        fontWeight: "800",
        borderBottomWidth: 2,
        borderBottomColor: "white",
        paddingBottom: 5
    },
    kategori: {
        color: "gray",
        fontWeight: "400"
    }
})
export default HomePage;