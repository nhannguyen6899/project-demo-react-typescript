import React, { useState } from "react";
import { ITask } from "../../../utils/interface";
import { FormAddOrUpdate } from '../FormAddOrUpdate/index';

export const Update: React.FC<IUpdateTask> = ({task, updateTask, setToggleEditing}) => {
    
    const [taskUpdate, setTaskUpdate] = useState(task);
    
    return (
        <FormAddOrUpdate
            task={taskUpdate}
            setTask={setTaskUpdate}
            addOrUpdateTask={updateTask}
            setToggleEditing={setToggleEditing}
        />
    );
}

/**
 * Interface IUpdate
 */
 export interface IUpdateTask{
    task: ITask;
    updateTask: any;
    setToggleEditing: any;
}