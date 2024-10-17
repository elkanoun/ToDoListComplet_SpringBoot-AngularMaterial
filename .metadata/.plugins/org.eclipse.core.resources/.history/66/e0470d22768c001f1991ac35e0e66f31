package smartsofts.api.todolist.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import jakarta.persistence.criteria.Predicate;
import lombok.Data;
import lombok.EqualsAndHashCode;
import smartsofts.api.todolist.entities.ToDo;

@Data @EqualsAndHashCode(callSuper = true)
public class ToDoSearchRequest extends BaseSearchRequest<ToDo> {
	//critaires requestSearch!
	private String label; //nomToDo
	
	@Override
	public Specification<ToDo> getSearchSpecification() {
		return (root, query, criteriaBuilder) -> {
			List<Predicate> predicates = new ArrayList<>();
			
			if(Objects.nonNull(this.getId())) {
				predicates.add(criteriaBuilder.equal(root.get("id"), this.getId()));
			}
			if(StringUtils.hasLength(this.getLabel())) {
				predicates.add(criteriaBuilder.like(root.get("nomToDo"), "%" + this.getLabel() + "%"));
			}
				
			return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
		};
				
	}

}
