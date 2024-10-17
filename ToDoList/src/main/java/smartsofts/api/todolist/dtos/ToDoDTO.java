package smartsofts.api.todolist.dtos;

import java.time.LocalDate;

import lombok.Data;
import smartsofts.api.todolist.entities.StatusTodo;

@Data
public class ToDoDTO {
	
	private Long id;
	private LocalDate dateCreation;
	private String nomToDo;
	private String estimation;
	private Boolean isDone;
	private LocalDate dateRealisation;
	private String dureeRealisation;
	private StatusTodo statusTodo;
	private Boolean isImportant;
	private String nomCompletUser;

}
