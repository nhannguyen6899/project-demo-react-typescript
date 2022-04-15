import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { ITask, ITasks } from "../../utils/interface";
import { Update } from "../TodoThings/UpdateTask/index";

export const Table: React.FC<ITasks & ITable> = ({tasks, updateTask, updateDisableTask, setStateComponentSearch, setStatesetShowActionFooter }) => {
  
  // state isEdit is to check display form update or table
  const [isEdit, setToggleEditing] = useState(false);

  // state task Update
  const [taskUpdate, setTaskUpdate] = useState<ITask>({
    Id: 0,
    TaskName: '',
    Status: 0,
    Disable: true
  });

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let idTask = parseInt(event.target.name);
    if (event.target.checked){
      updateDisableTask(idTask, false);
    } else {
      updateDisableTask(idTask, true);
    }
  };

  // handle the edit button click event
  const handleClickEdit = (task: ITask) => {
    // set value for taskUpdate
    setTaskUpdate(task);

    // set state to hidden components searh and ActionFooter
    setStateComponentSearch(false);
    setStatesetShowActionFooter(false);

    // set state isEdit is value !isEdit to show/hidden form update
    setToggleEditing(!isEdit);
  };
  
  // method addrow into table
  const addRow = () => {
    return tasks.map(function (object, i) {
      return (
        <tr key={i}>
          <td style={{paddingLeft: object.Status == 3 ? "17px" : "0px"}}>
            {object.Status != 3 && 
              <input name={object.Id.toString()} type="checkbox" onChange={handleChangeCheckBox} />
            }
            {" " + object.TaskName}
          </td>
          <td>
            {
             object.Status == 1 ? <span style={{color: "red"}}>New</span> : 
             object.Status == 2 ? <span style={{color: "green"}}>Active</span> : 
             object.Status == 3 ? <span style={{color: "black"}}>Complete</span> : '' 
            }
          </td>
          <td>
            <button disabled={object.Disable} className="btn btn-default" onClick={()=>handleClickEdit(object)}>
              <FaEdit />
            </button>
          </td>
        </tr>
      );
    });
  };

  // if state isEdit is true then return form update
  if (isEdit){
    return (
      <Update
        task={taskUpdate}
        updateTask={updateTask}
        setToggleEditing={setToggleEditing}
      />
    );
  }

  // if state isEdit is false then return table
  return (
    <table className="table">
      <tbody>
        {addRow()}
      </tbody>
    </table>
  );
}

/**
 * Interface ITable
 */
interface ITable {
    updateTask: (newData: ITask) => void;
    updateDisableTask: (id: number, disabled: boolean) => void;
    setStateComponentSearch: (value: boolean) => void;
    setStatesetShowActionFooter: (value: boolean) => void;
  }
  