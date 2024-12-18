package smartsofts.api.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import smartsofts.api.todolist.entities.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Long> {
	
	//search avec mc
	@Query("select t from ToDo t where t.nomToDo like :x")
	ToDo findByNomToDo(@Param("x") String mc);

}
