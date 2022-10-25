import React, {useState} from 'react';
import {
    View, 
    TouchableOpacity, 
    Text, 
    Modal, 
    FlatList, 
    StyleSheet,
    Dimensions,
    SafeAreaView,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

const {width} = Dimensions.get('window')

const Select = ({options, onChangeSelect, text, label}) => {
const [txt, setTxt] = useState(text)
const [selected, setSelected] = useState('')
const [modalVisible, setModalVisible] = useState(false)

function renderOption(item) {
    return (
        <TouchableOpacity style={[styles.optionsContainer, {backgroundColor: item.id == selected ? '#eee' : '#fff'}]} onPress={() => {
            onChangeSelect(item.id)
            setTxt(item.name)
            setModalVisible(false)
            setSelected(item.id)
        }}>
            <Text style={[styles.optionTxt, {fontWeight: item.id == selected ? 'bold' : 'normal'}]}>{item.name}</Text>
            {item.id == selected && (
                <Icon name={'check'} size={22} color={'green'}></Icon>)}
        </TouchableOpacity>
    )
}

    return (
        <>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity style={styles.container} 
        onPress={() => setModalVisible(true)}>
            <Text style={styles.txt} numberOfLines={1}>
                {txt} 
            </Text>
            <Icon></Icon>
        </TouchableOpacity>
        <Modal 
            animationType="slide" 
            visible={modalVisible} 
            onRequestClose={() => setModalVisible(false)}>
            <SafeAreaView>
                <View style={styles.headerModal}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        {/* icone para voltar */}
                    </TouchableOpacity>
                    <Text style={styles.modalTittle}>{text}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.modalCancel}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={options}
                    keyExtractor={item => String(item.id)} renderItem={({item}) => renderOption(item)}
                />
            </SafeAreaView>
        </Modal>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 12,
        marginHorizontal: 20,
        borderRadius: 8,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#CCC',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt: {
        color: '#555',
        fontSize: 16,
        MarginRight: 36,
        width: width - 90,
    },
    headerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    modalTittle: {
        fontSize: 18,
        fontColor: '#555'
    },
    modalCancel: {
        fontSize: 14,
        color: 'green',
        fontWeight: '600'
    },
    optionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        padding: 10
    },
    optionTxt: {
        fontSize: 16,
        color: '#555'
    },
    label: {
        fontSize: 16,
        color: '#555',
        paddingLeft: 20,
        paddingVertical: 10,
    }
})

export default Select