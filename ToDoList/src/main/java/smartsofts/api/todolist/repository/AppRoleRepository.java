package smartsofts.api.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import smartsofts.api.todolist.entities.AppRole;

public interface AppRoleRepository extends JpaRepository<AppRole, Long> {

	AppRole findByRoleName(String rolename);

}
