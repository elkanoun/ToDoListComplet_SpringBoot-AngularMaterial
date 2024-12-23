package smartsofts.api.todolist.entities;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity @Table(name = "todos")
@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class ToDo implements Serializable {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private LocalDate dateCreation;
	private String nomToDo;
	private String estimation;
	private Boolean isDone;
	private LocalDate dateRealisation;
	private String dureeRealisation;
	
	@Enumerated(EnumType.STRING)
	private StatusTodo statusTodo;
	private Boolean isImportant;
	private String nomCompletUser;
	

}
