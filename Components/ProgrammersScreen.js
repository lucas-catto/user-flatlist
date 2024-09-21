
import React from 'react';

import {
    View,
    FlatList,
    StyleSheet,
    Image,
} from 'react-native';

import {
    List
} from 'react-native-paper';

import Programmers from '../Data/Programmers'

export default props => {
    const Item = ({ elemento: item }) => {
        return (
            <List.Item
                title={item.name}
                left={
                    props =>
                        <Image {...props}
                            style={styles.logo}
                            source={{ uri: item.image }}
                        />
                }
                onPress={() =>
                    props.navigation.navigate("ProgrammerDetail", {id: item.id})
                }
            />
        )
    };

    return (
        <View>
            <FlatList
                data={Programmers}
                renderItem={({ item }) => <Item elemento={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    logo: {
        width:        87,
        height:       87,
        borderRadius: 16,
    },
});
