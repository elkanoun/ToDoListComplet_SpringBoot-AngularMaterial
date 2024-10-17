package smartsofts.api.todolist.service;

import java.util.List;

import smartsofts.api.todolist.entities.ToDo;

public interface IToDoMetier {
	
public ToDo saveToDo(ToDo toDo);
	
	public ToDo searchToDo(String mc);
	
	public List<ToDo> findAll();
	
	public ToDo updateToDo(ToDo toDo);
	
	public void deleteToDo(Long id);

}
