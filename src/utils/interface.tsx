/**
 * Interface ITask.
 */
export interface ITask {
    Id : number;
    TaskName: string;
    Status: number;
    Disable: boolean;
}

/**
 * Interface ITasks.
 */
export interface ITasks{
    tasks: ITask[];
}



