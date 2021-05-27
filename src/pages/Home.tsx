import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(true);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle || newTaskTitle != ""){
      const data: Task = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
      setTasks((oldState: Task[]) => [...oldState, data]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    // Não é necessário verificar se a task existe, poís este método so ira ativar 
    // quando o usuário clicar na task (ou seja ela precisa existir para que o método 
    // seja acionado)
    var newlistTask: Task[] = [];
    tasks.map((task) => {
      if(task.id === id){
        var auxTasks = task;
        auxTasks.done = !auxTasks.done;
        newlistTask.push(auxTasks)
      }else{
        newlistTask.push(task)
      }
    })
    setTasks(newlistTask)
  }

  function handleSwitchTheme(){
    setTheme(!theme);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState) => oldState.filter(skill =>
      skill.id !== id
    ))
  }

  return (
    <View style={theme ? {backgroundColor: '#1F1F1F', flex: 1} : {backgroundColor: 'white', flex: 1}}>
      <Header theme={theme}/>

      <TodoInput addTask={handleAddTask} theme={theme} />
      <View style={styles.viewSwitch}>
        <Text style={theme ? [styles.textSwitch,{color: '#67E480'}]: styles.textSwitch}>Change Theme</Text>
        <Switch 
          style={styles.switchButton} 
          onValueChange={handleSwitchTheme} 
          value={theme}
          thumbColor={theme ? '#988BC7' : '#273FAD'}
          trackColor={{true: '#483C67', false: '#273FAD'}}
        />
      </View>

      <MyTasksList 
        theme={theme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewSwitch:{
    flexDirection: 'row',
    paddingTop: 30,
    paddingHorizontal: 24
  },
  textSwitch:{
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#3D3D4D',
  },
  switchButton: {
    paddingHorizontal: 10,
  }
})