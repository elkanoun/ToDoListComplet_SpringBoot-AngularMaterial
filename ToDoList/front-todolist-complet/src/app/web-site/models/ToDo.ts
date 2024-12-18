import { StatusToDo } from "../enumerations/status-todo.enum";

export interface ToDo{
    id:number;
    dateCreation:string;
    nomToDo:string;
    estimation:string;
    isDone:boolean;
    dateRealisation:string;
    dureeRealisation:string;
    statusTodo:string;
    isImportant:boolean;
    nomCompletUser:string;
}