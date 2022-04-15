import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import { SearchBar } from "./components/TodoThings/Search/index";
import { Create } from "./components/TodoThings/AddTask/index";
import { Table } from './components/TodoThings/index';
import { Footer } from './components/Footer';

import {ITask} from './utils/interface';

function App() {

  // state save list task after add/edit 
  const [tasks, setTasks] = useState<ITask[]>([]);
  // state list task filter to show table
  const [filterTasks, setFilterTasks] = useState<ITask[]>([]);
  // states to check show/hidden components
  const [isShowComponentSearch, setShowComponentSearch] = useState(false);
  const [isShowComponentCreate, setShowComponentCreate] = useState(false);
  const [isShowComponentTable, setShowComponentTable] = useState(true);
  const [isShowActionFooter, setShowActionFooter] = useState(true);

  // useEffect
  useEffect(() => {
    console.log('useEffect has been called!');
    // set state show or hidden components after data tasks change => like componentDidUpdate
    setShowComponentCreate(false);
    setShowActionFooter(true);
    setShowComponentTable(true);

    // set state filter = all tasks after data tasks change => like componentDidUpdate
    setFilterTasks(tasks);
  }, [tasks]);

  // function add task
  const addTask = (newTask: ITask) => {
    newTask.Id = tasks.length + 1;
    newTask.Disable = true;
    setTasks([...tasks, newTask]);
    setShowComponentCreate(false);
  }

  // function update task
  const updateTask = (newData: ITask) => {
    let indexTaskUpdate = tasks.findIndex(x => x.Id == newData.Id);
    tasks[indexTaskUpdate] = {...tasks[indexTaskUpdate], TaskName: newData.TaskName, Status: newData.Status, Disable: true};
    setTasks([...tasks]);
  }

  // function update disable task
  const updateDisableTask = (id: number, disabled: boolean) => {
    let indexTaskUpdate = tasks.findIndex(x => x.Id == id);
    tasks[indexTaskUpdate] = {...tasks[indexTaskUpdate], Disable: disabled};
    setTasks([...tasks]);
  }

  // function search task
  const searchTask = (keyword: string, status: number) => {
    let results = tasks.filter(x => x.TaskName.toLowerCase().includes(keyword.toLowerCase()));
    if (status != 999){
      results = results.filter(x => x.Status == status);
    }
    setFilterTasks([...results]);
  }
  
  return (
      <div className="container">
        {/* Render Header */}
        <Header />
        
        {/* Check state isShowComponentSearch to Render input search */}
        {isShowComponentSearch &&
          <SearchBar searchTask={searchTask} />
        }

        {/* Render Content */}
        <section id="content">
          {isShowComponentCreate && <Create addTask={addTask} />}
          {isShowComponentTable &&
            <Table
              tasks={filterTasks}
              updateTask={updateTask}
              updateDisableTask={updateDisableTask}
              setStateComponentSearch={setShowComponentSearch}
              setStatesetShowActionFooter={setShowActionFooter}
            />
          }
        </section>

        {/* Render Footer */}
        <Footer
          setShowComponentSearch={setShowComponentSearch}
          setShowComponentCreate={setShowComponentCreate}
          setShowComponentTable={setShowComponentTable}
          isShowActionFooter={isShowActionFooter}
          setShowActionFooter={setShowActionFooter}
          totalTask={filterTasks.length}
          searchTask={searchTask}
        />
       
      </div>
  );
}

export default App;
