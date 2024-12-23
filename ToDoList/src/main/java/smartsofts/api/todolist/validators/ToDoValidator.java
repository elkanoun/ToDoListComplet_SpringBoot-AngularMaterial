package smartsofts.api.todolist.validators;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import smartsofts.api.todolist.dtos.ToDoDTO;

@Component
@AllArgsConstructor
public class ToDoValidator {
	
	//propriétées
	//service!
	private final HttpServletRequest webRequest;
	private final MessageSource messageSource;
	
	//imp méthode validation ajout toDo
	public List<ValidationMessage> isValid(@NotNull ToDoDTO dto){
		List<ValidationMessage> messages = new ArrayList<>();
		
		if(Objects.isNull(dto.getDateCreation())){
            messages.add(ValidationMessage.builder().field("dateCreation").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(!StringUtils.hasText(dto.getNomToDo())){
            messages.add(ValidationMessage.builder().field("nomToDo").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(Objects.isNull(dto.getEstimation())){
            messages.add(ValidationMessage.builder().field("estimation").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(Objects.isNull(dto.getIsDone())){
            messages.add(ValidationMessage.builder().field("isDone").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(Objects.isNull(dto.getDateRealisation())){
            messages.add(ValidationMessage.builder().field("dateRealisation").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(!StringUtils.hasText(dto.getNomToDo())){
            messages.add(ValidationMessage.builder().field("dureeRealisation").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(Objects.isNull(dto.getDateCreation())){
            messages.add(ValidationMessage.builder().field("statusTodo").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(Objects.isNull(dto.getIsImportant())){
            messages.add(ValidationMessage.builder().field("isImportant").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
		
		if(!StringUtils.hasText(dto.getNomCompletUser())){
            messages.add(ValidationMessage.builder().field("nomCompletUser").message(messageSource.getMessage("form.field.required", null, webRequest.getLocale())).build());
        }
			
		return messages;
	}
	

}
