package smartsofts.api.todolist.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.extern.slf4j.Slf4j;
import smartsofts.api.todolist.entities.ToDo;
import smartsofts.api.todolist.exceptions.EntityNotFoundException;
import smartsofts.api.todolist.repository.ToDoRepository;

@Service
@Slf4j
public class ToDoMetierImp implements IToDoMetier {
	
	private ToDoRepository toDoRepository;
	
	public ToDoMetierImp(ToDoRepository toDoRepository) {
		this.toDoRepository = toDoRepository;
	}
    
	//method saveToDo
	@Override
	@Transactional
	public ToDo saveToDo(ToDo toDo) {
		return toDoRepository.save(toDo);
	}
    
	//method searchToDo
	@Override
	@Transactional(readOnly = true)
	public ToDo searchToDo(String mc) {
		return toDoRepository.findByNomToDo(mc);
	}
    
	//method findAll
	@Override
	@Transactional(readOnly = true)
	public List<ToDo> findAll() {
		return toDoRepository.findAll();
	}
    
	//method findAll
	@Override
	@Transactional
	public ToDo updateToDo(ToDo toDo) {
		return toDoRepository.save(toDo);
	}
    
	//method deleteToDo
	@Override
	@Transactional
	public void deleteToDo(Long id) throws EntityNotFoundException {
		ToDo toDo = toDoRepository.getById(id);
		toDoRepository.delete(toDo);
	}

	
}
