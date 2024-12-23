package smartsofts.api.todolist.app.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import smartsofts.api.todolist.entities.AppRole;
import smartsofts.api.todolist.entities.AppUser;
import smartsofts.api.todolist.repository.AppRoleRepository;
import smartsofts.api.todolist.repository.AppUserRepository;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {

	private AppUserRepository appUserRepository;
    private AppRoleRepository appRoleRepository;
    @Bean
    public BCryptPasswordEncoder getBCryptPasswordEncoder() {
    	return new BCryptPasswordEncoder();
    }
    
    
    public AccountServiceImpl(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
    }

    @Override
    public AppUser saveUser(String username, String password, String confirmedPassword) {
        AppUser  user=appUserRepository.findByUsername(username);
        if(user!=null) throw new RuntimeException("User already exists");
        if(!password.equals(confirmedPassword)) throw new RuntimeException("Please confirm your password");
        AppUser appUser=new AppUser();
        appUser.setUsername(username);
        appUser.setActived(true);
        appUser.setPassword(getBCryptPasswordEncoder().encode(password));
        appUserRepository.save(appUser);
        addRoleToUser(username,"USER");
        return appUser;
    }

    
	@Override
    public AppRole save(AppRole role) {
        return appRoleRepository.save(role);
    }

    @Override
    public AppUser loadUserByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public void addRoleToUser(String username, String rolename) {
        AppUser appUser=appUserRepository.findByUsername(username);
        AppRole appRole=appRoleRepository.findByRoleName(rolename);
        appUser.getRoles().add(appRole);
    }

}
