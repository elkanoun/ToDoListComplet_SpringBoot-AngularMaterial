package smartsofts.api.todolist.exceptions;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import smartsofts.api.todolist.validators.ValidationMessage;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class ErrorDTO {
	
	private Integer httpCode;
	private ErrorCodes code;
	private String message;
	private List<ValidationMessage> errors=new ArrayList<>();
	
	

}
