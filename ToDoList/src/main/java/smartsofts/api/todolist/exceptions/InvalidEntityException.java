package smartsofts.api.todolist.exceptions;

import java.util.List;

import lombok.Getter;
import smartsofts.api.todolist.validators.ValidationMessage;

public class InvalidEntityException extends RuntimeException {
	
	@Getter
	private ErrorCodes errorCode;
	@Getter
	private List<ValidationMessage> errors;
		
		public InvalidEntityException(String message) {
			super(message);
		}
		
		public InvalidEntityException(String message, Throwable cause) {
			super(message, cause);
		}
		
		public InvalidEntityException(String message, Throwable cause, ErrorCodes errorCode) {
			super(message, cause);
			this.errorCode=errorCode;
		}
		
		public InvalidEntityException(String message, ErrorCodes errorCode, List<ValidationMessage> errors) {
			super(message);
			this.errorCode=errorCode;
			this.errors=errors;
		}		

}
