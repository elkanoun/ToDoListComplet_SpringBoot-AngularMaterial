package smartsofts.api.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import smartsofts.api.todolist.entities.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
	
	//search avec mc
	ToDo findByNomToDo(String mc);

}
