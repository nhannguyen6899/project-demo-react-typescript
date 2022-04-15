import React from "react";
import { ITask } from "../../../utils/interface";
import '../FormAddOrUpdate/index.css';

export const FormAddOrUpdate: React.FC<IFormAddOrUpdate> = ({task, setTask, addOrUpdateTask, setToggleEditing}) => {
    
    // handle input change event
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setTask({ ...task, [event.target.name]: newValue });
    };

    // handle select change event
    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setTask({ ...task, [event.target.name]: newValue });
    };

    // handle form submit event
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (task.TaskName == ''){
            alert('Task name is empty');
            return;
        }
        if (task.Status == 0){
            alert('Please select status');
            return;
        }
        // check task.Id != 0 is update then set setToggleEditing(false) to show table
        if (task.Id != 0){
            setToggleEditing(false);
        }
        addOrUpdateTask(task);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className="div-taskname">
                    <label>Task Name</label>
                    <input type="text" name="TaskName" value={task.TaskName} onChange={handleChangeInput} />
                </div>
                <div className="div-status">
                    <label>Status</label>
                    <select name="Status" value={task.Status} onChange={handleChangeSelect}>
                        <option value={0} selected>Choose your option</option>
                        <option value={1}>New</option>
                        <option value={2}>Active</option>
                        <option value={3}>Complete</option>
                    </select>
                </div>
                <div className="div-btn-add">
                    <button>{task.Id == 0 ? 'Save' : 'Update'}</button>
                </div>
            </div>
        </form>
    );
};

/**
 * Interface IFormCreateOrUpdate.
 */
 export interface IFormAddOrUpdate{
    task: ITask;
    setTask: any;
    addOrUpdateTask: any;
    setToggleEditing: any;
}