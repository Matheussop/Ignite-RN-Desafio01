import React, { useState } from 'react';

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

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks((oldState) => oldState.filter(skill =>
      skill.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}