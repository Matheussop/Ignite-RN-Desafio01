import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface IHeader{
  theme: boolean
}

export function Header({theme}: IHeader) {
  return (
    <View style={theme ? [styles.header, {backgroundColor: '#483C67'}] : styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});
