import React, { useState } from "react";
import { ITask } from "../../../utils/interface";
import { FormAddOrUpdate } from '../FormAddOrUpdate/index';

export const Create: React.FC<IAddTask> = ({addTask}) => {
    const initialValue: ITask = {
        Id : 0,
        TaskName: '',
        Status: 0,
        Disable: true
    };

    const [taskNew, setTaskNew] = useState(initialValue);
    
    return (
        <FormAddOrUpdate
            task={taskNew}
            addOrUpdateTask={addTask}
            setTask={setTaskNew}
            setToggleEditing={false}
        />
    ); 
}

/**
 * Interface IAddTask.
 */
 export interface IAddTask {
    addTask: any;
}