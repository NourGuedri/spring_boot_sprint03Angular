package com.nour.users.restControllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.nour.users.entities.User;
import com.nour.users.service.UserService;
import com.nour.users.service.register.RegistrationRequest;

@RestController
@CrossOrigin(origins = "*")
public class UserRestController {
@Autowired
UserService userService;
@GetMapping("all")
public List<User> getAllUsers() {
return userService.findAllUsers();
}

@PostMapping("/register") 
public User register(@RequestBody  RegistrationRequest request) 
{ 
	System.out.println("received");
 return userService.registerUser(request); 
} 
@GetMapping("/verifyEmail/{token}")
public User verifyEmail(@PathVariable("token") String token){
return userService.validateToken(token);
}

}