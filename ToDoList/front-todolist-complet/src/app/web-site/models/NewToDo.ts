import { StatusToDo } from "../enumerations/status-todo.enum";

export interface NewToDo{
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