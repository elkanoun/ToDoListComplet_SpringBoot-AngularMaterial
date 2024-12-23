package smartsofts.api.todolist.dtos;




import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import lombok.Data;

@Data
public abstract class BaseSearchRequest<M> {
	
	private String id;
    private int page = 0;
    private int size = 20;
    private Sort.Direction sortDirection = Sort.Direction.DESC;
    private String sortColumn = "id";

    //private Long celluleId;

    public Pageable getPageable() {
        return PageRequest.of(this.page, this.size, Sort.by(this.sortDirection, this.sortColumn));
    }

    public abstract Specification<M> getSearchSpecification();
	

}
