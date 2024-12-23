package smartsofts.api.todolist.app.security;

import smartsofts.api.todolist.entities.AppRole;
import smartsofts.api.todolist.entities.AppUser;

public interface AccountService {

	public AppUser saveUser(String username,String password,String confirmedPassword);
	public AppRole save(AppRole role);
	public AppUser loadUserByUsername(String username);
	public void addRoleToUser(String username,String rolename);

}
