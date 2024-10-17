package smartsofts.api.todolist.mappers;

import org.mapstruct.MapperConfig;
import org.mapstruct.MappingInheritanceStrategy;

@MapperConfig(
        componentModel = "spring",
        mappingInheritanceStrategy = MappingInheritanceStrategy.AUTO_INHERIT_FROM_CONFIG,
        builder = @org.mapstruct.Builder(disableBuilder = true)
)
public interface BaseMapperConfiguration {

}
