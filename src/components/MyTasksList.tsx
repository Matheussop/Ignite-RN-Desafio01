import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface IFlatListHeaderComponent{
  theme: boolean
}

function FlatListHeaderComponent({theme}: IFlatListHeaderComponent) {
  return (
    <View>
      <Text style={theme ? [ styles.header, {color: '#67E480'}] : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress = {() => onPress(item.id)}
            onLongPress = {() => onLongPress(item.id)}
            style={item.done == true ?  theme ? [styles.taskButtonDone, {backgroundColor: '#44475A'}] : styles.taskButtonDone :  theme ? [styles.taskButton, {backgroundColor: 'transparent'}] : styles.taskButton}
            //TODO - use onPress, onLongPress and style props
          >
            <View 
              testID={`marker-${index}`}
              style={item.done == true ? theme ? [styles.taskMarkerDone,{backgroundColor: '#67E480'}] : styles.taskMarkerDone : theme ? [styles.taskMarker,{borderColor: '#67E480'}] : styles.taskMarker}
            />
            <Text 
              style={item.done == true ? theme ? [styles.taskTextDone,{color: '#67E480'}] : styles.taskTextDone : theme ? [styles.taskText,{color: '#67E480'}] : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={[{
        marginHorizontal: 24,
        marginTop: 32,
      },
      theme ? {backgroundColor: '#1F1F1F'} : {backgroundColor: '#FFFFFF'}]}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})