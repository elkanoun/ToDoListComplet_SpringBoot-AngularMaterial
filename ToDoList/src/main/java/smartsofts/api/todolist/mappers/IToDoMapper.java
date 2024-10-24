package smartsofts.api.todolist.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Named;
import org.mapstruct.ReportingPolicy;

import lombok.extern.slf4j.Slf4j;
import smartsofts.api.todolist.dtos.ReferentialDTO;
import smartsofts.api.todolist.dtos.ToDoDTO;
import smartsofts.api.todolist.entities.ToDo;

@Slf4j
@Mapper(componentModel = "spring",
        
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        config = BaseMapperConfiguration.class
        )
public abstract class IToDoMapper extends BaseMapper<ToDo, ToDoDTO> {
	
	@Override
    @Named("toEntity")
    public abstract ToDo mapToEntity(ToDoDTO dto);


    @Override
    @Named("toDTO")
    public abstract ToDoDTO mapToDTO(ToDo entity);
    
    @Named("toDTOs")
    public abstract List<ToDoDTO> mapToDTOs(List<ToDo> entities);

    @Override
    @Named("toReferential")
    public abstract ReferentialDTO mapToReferential(ToDo entity);

}
