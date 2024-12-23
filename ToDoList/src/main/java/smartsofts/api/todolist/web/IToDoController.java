package smartsofts.api.todolist.web;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import smartsofts.api.todolist.dtos.ToDoDTO;


public interface IToDoController {
	
	@PostMapping(path = "/todos/save")
	public ResponseEntity<ToDoDTO> saveToDo(@RequestBody ToDoDTO toDoDTO);
	
	@GetMapping("/todos/todo")
	public ResponseEntity<ToDoDTO> searchToDo(@RequestParam("mc") String mc);
	
	@GetMapping("/todos")
	public List<ToDoDTO> findAll();
	
	@PutMapping("/todos/update")
	public ResponseEntity<ToDoDTO> updateToDo(ToDoDTO toDoDTO);
	
	@DeleteMapping("todos/delete/{id}")
	public ResponseEntity<HttpStatus> deleteToDo(@PathVariable Long id);

}
