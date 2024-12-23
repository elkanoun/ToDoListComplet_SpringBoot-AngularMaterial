package smartsofts.api.todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import smartsofts.api.todolist.entities.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

	AppUser findByUsername(String username);

}
