package com.login.sample.springbootlogin.repository;

import com.login.sample.springbootlogin.document.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users, Long> {
    Users findByEmail(String email);
    Users findByEmailAndPassword(String email, String password);
}
