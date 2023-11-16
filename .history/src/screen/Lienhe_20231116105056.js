import { StyleSheet, Text,TextInput, View, Image, FlatList, TouchableOpacity, Modal, SectionList} from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ModalPicker } from './ModalPicker';
import SelectDropdown from 'react-native-select-dropdown'
import { textSpanContainsTextSpan, textSpanIntersectsWith } from 'typescript';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Lienhe = (props) => {
    
      
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.vector} source={require('../image/vector_left.png')}></Image>
                <Text style={styles.text_header}>Liên hệ</Text>
            </View>
                <View style={styles.container2}>
      <SectionList
        sections={[
          {title: 'Phòng Kỹ thuật', data: ['Nguyễn Trung Hải', 'Nguyễn Trung Hải', 'Nguyễn Trung Hải']},
          {
            title: 'Phòng hành chính',
            data: [ 
              'Nguyễn Trung Hải',
              'Nguyễn Trung Hải',
              'Nguyễn Trung Hải',
              'Nguyễn Trung Hải'
            ]
          },
        ]}
        renderItem={({item}) => 
        <View style={styles.itemlist}>
        <Image style={styles.itemlistimg} source={require('../image')}></Image>
        <View  style={styles.itemlist2}>
            <Text style={styles.item}>{item}</Text>
            <Text style={styles.item2}>Trưởng Phòng iT</Text>
            
                
            
        </View>
            <Pressable>
        <Image style={styles.itemlistimg2} source={require('./image/vector_right.png')}></Image>
            </Pressable>
        </View>
        }
        renderSectionHeader={({section}) => (
            <View style={styles.itemlist}>
          <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
        
      />
    </View>
                
            
        </View>
    )
}
export default Lienhe

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: 450,
        height: 300,
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 24,
        flexDirection: 'column',
    },
    header:{
        width: 200,
        height: 50
    },
    vector: {
        width: 30,
        height: 30,
        top: 30,
        left: 24,
        padding: 5.7,
    },
    text_header:{
        top: 0,
        height: 36,
        left: 130,
        fontFamily: 'Poppins',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 36,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#000000DE',
    },
    container2: {
        //flex: 1,
        paddingTop: 22,
        marginBottom: 10,
        width: 600,
        height: 700,
        top: 36,
      },
      sectionHeader: {
        height: 30,
        top: 5,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'white',
      },
      item: {
        top: -20,
        padding: 10,
        fontSize: 18,
        height: 80,
        left: 8,
        backgroundColor: '#F1F4F5',
        flexDirection: 'column'
      },
      item2: {
        top: -60,
        left: 15,
      },
      itemlist:{
        padding: 10,
        backgroundColor: '#F1F4F5',
        flexDirection: 'row',
        left: 8,
      },
      itemlist2:{
        height: 70,
        padding: 10,
        backgroundColor: '#F1F4F5',
        flexDirection: 'column',
        left: 8,
      },
      itemlistimg:{
        width: 60,
        height: 60,
        left: 5,

      },
      itemlistimg2:{
        width: 30,
        height: 30,
        left: 120,
        alignSelf: 'center',
      },
      
})