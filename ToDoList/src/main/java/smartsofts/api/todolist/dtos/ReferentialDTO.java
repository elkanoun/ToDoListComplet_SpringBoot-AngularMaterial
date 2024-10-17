package smartsofts.api.todolist.dtos;

import java.io.Serializable;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data@Builder@AllArgsConstructor @NoArgsConstructor
public class ReferentialDTO implements Serializable {
	
	private Long id;
    private String code;
    private String label;
    private Map<String, String> extras;

}
