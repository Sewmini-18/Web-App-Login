package com.login.sample.springbootlogin.resource;

import com.login.sample.springbootlogin.document.Users;
import com.login.sample.springbootlogin.repository.UserRepository;
import com.login.sample.springbootlogin.services.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class UsersResource {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    public UsersResource(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public Users fetchUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public Users fetchUserByEmailAndPassword(String email, String password){
        return userRepository.findByEmailAndPassword(email,password);
    }

    @GetMapping("/home/users")
    public List<Users> getUsers(){
        return userRepository.findAll();
    }


    @PostMapping("/signup")
    public Users saveUsers(@Valid @RequestBody Users user) {
        user.setId(sequenceGeneratorService.generateSequence(Users.SEQUENCE_NAME));
        return userRepository.save(user);

    }

    @GetMapping("/home/users/{id}")
    public Optional<Users> findUser(@PathVariable long id){
        return userRepository.findById(id);
    }


    @PostMapping("/login")
    public Users loginUser(@RequestBody Users user) throws Exception {
        String tempEmail = user.getEmail();
        String tempPsw = user.getPassword();
        Users userobj = null;
        if (tempEmail != null && tempPsw != null) {
            userobj = fetchUserByEmailAndPassword(tempEmail, tempPsw);
        }
        if(userobj==null){
            throw new Exception("Bad Credintial");
        }
        return userobj;
    }


}