
import { useState } from "react";

import {
    SafeAreaView,
    StyleSheet,
    Dimensions
} from "react-native";

import {
    Card,
    Text
} from "react-native-paper";

import Programmers from "../Data/Programmers";

const getProgrammerPorId = (id) => {
    return Programmers.find(p => p.id == id)
}

export default ({ route, navigation }) => {
    const [programmer, setProgrammer] = useState(getProgrammerPorId(route.params.id))

    return (
        <SafeAreaView>
            <Card>
                <Card.Cover
                    source={{ uri: programmer.image }}
                    style={styles.image}
                />
                <Card.Content>
                    <Text variant="headlineLarge" style={styles.title}>{programmer.name}</Text>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        height:    Dimensions.get('window').width * 1, 
        objectFit: 'contain'
    },
    title: {
        marginTop: 9,
        fontSize:  24
    }
});
