package smartsofts.api.todolist.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
	
	//method trait EntityNotFoundException
	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<ErrorDTO> handleException(EntityNotFoundException exception, WebRequest webRequest){
		final HttpStatus notFound=HttpStatus.NOT_FOUND;
		
		final ErrorDTO errorDto = ErrorDTO.builder()
		    .code(exception.getErrorCode())
		    .httpCode(notFound.value())
		    .message(exception.getMessage()) //to verify getMessage from EntityNotFoundException
		    .build();
		
		return new ResponseEntity<>(errorDto, notFound);
	}	
	
	//method trait InvalidEntityException
	@ExceptionHandler(InvalidEntityException.class)
	public ResponseEntity<ErrorDTO> handleException(InvalidEntityException exception, WebRequest webRequest){
		final HttpStatus badRequest = HttpStatus.BAD_REQUEST;
		
		final ErrorDTO errorDto = ErrorDTO.builder()
		.code(exception.getErrorCode())
		.httpCode(badRequest.value())
		.message(exception.getMessage()) //to verify getMessage from InvalidEntityException
		.errors(exception.getErrors())
		.build();
		
		return new ResponseEntity<>(errorDto, badRequest);
	}

}
