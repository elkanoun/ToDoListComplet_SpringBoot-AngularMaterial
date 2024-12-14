import { StatusToDo } from "../enumerations/status-todo.enum";

export interface ToDo{
    id:number;
    dateCreation:Date;
    nomToDo:string;
    estimation:string;
    isDone:boolean;
    dateRealisation:Date;
    dureeRealisation:string;
    statusTodo:StatusToDo;
    isImportant:boolean;
    nomCompletUser:string;
}