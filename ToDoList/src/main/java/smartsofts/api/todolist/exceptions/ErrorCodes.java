package smartsofts.api.todolist.exceptions;

public enum ErrorCodes {
	
	ToDo_NOT_FOUND(1000),
	ToDo_NOT_VALID(1001)
	//ToDoList_NOT_FOUND(2000),
	;
	
	private int code;
	
	private ErrorCodes(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	

}
