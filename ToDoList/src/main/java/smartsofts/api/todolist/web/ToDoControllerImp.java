package smartsofts.api.todolist.web;



import java.util.List;
import java.util.Objects;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import smartsofts.api.todolist.dtos.ToDoDTO;
import smartsofts.api.todolist.exceptions.EntityNotFoundException;
import smartsofts.api.todolist.exceptions.ErrorCodes;
import smartsofts.api.todolist.exceptions.InvalidEntityException;
import smartsofts.api.todolist.mappers.IToDoMapper;
import smartsofts.api.todolist.service.IToDoMetier;
import smartsofts.api.todolist.validators.ToDoValidator;
import smartsofts.api.todolist.validators.ValidationMessage;

@RestController
@Slf4j
@CrossOrigin("*")
public class ToDoControllerImp implements IToDoController {

	private IToDoMetier iMetier;
	private ToDoValidator validator;
	private IToDoMapper mapper;

	public ToDoControllerImp(IToDoMetier iMetier, ToDoValidator validator, IToDoMapper mapper) {
		this.iMetier = iMetier;
		this.validator  = validator;
		this.mapper = mapper;
	}
    
	//method saveToDo
	@Override
	public ResponseEntity<ToDoDTO> saveToDo(ToDoDTO toDoDTO) {
		List<ValidationMessage> errors = validator.isValid(toDoDTO);

		if(Objects.isNull(toDoDTO)) {
			log.warn("toDoDTO is null!");
		}

		if(!errors.isEmpty()) {
			log.error("toDoDTO is invalide!");
			throw new InvalidEntityException("toDoDto n'est pas valide!", ErrorCodes.ToDo_NOT_VALID, errors);
		}

		ToDoDTO tDoDTO = mapper.mapToDTO(iMetier.saveToDo(mapper.mapToEntity(toDoDTO)));

		return new ResponseEntity<ToDoDTO>(toDoDTO, HttpStatus.OK);
	}
    
	//method searchToDo
	@Override
	public ResponseEntity<ToDoDTO> searchToDo(String mc) {
		if(!StringUtils.hasLength(mc)) {
			log.warn("mc est empty!");
		}

		ToDoDTO toDoDTO = mapper.mapToDTO(iMetier.searchToDo(mc));

		return new ResponseEntity<ToDoDTO>(toDoDTO, HttpStatus.FOUND);
	}
	
    //method findAll
	@Override
	public List<ToDoDTO> findAll() {
		List<ToDoDTO> listToDoDtos = mapper.mapToDTOs(iMetier.findAll());

		return listToDoDtos;
	}
    
	//method updateToDo
	@Override
	public ResponseEntity<ToDoDTO> updateToDo(ToDoDTO toDoDTO) {
		List<ValidationMessage> errors = validator.isValid(toDoDTO);

		if(Objects.isNull(toDoDTO)) {
			log.warn("toDoDTO is null!");
		}

		if(!errors.isEmpty()) {
			log.error("toDoDTO is invalide!");
			throw new InvalidEntityException("toDoDto n'est pas valide!", ErrorCodes.ToDo_NOT_VALID, errors);
		}

		ToDoDTO tDoDTO = mapper.mapToDTO(iMetier.updateToDo(mapper.mapToEntity(toDoDTO)));

		return new ResponseEntity<ToDoDTO>(toDoDTO, HttpStatus.OK);
	}
	
	//method deleteToDo
	@Override
	public ResponseEntity<HttpStatus> deleteToDo(Long id) {
		try {
			iMetier.deleteToDo(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} catch (EntityNotFoundException exception) {
			return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
		}
	}

}
