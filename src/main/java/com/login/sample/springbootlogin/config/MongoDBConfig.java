package com.login.sample.springbootlogin.config;

import com.login.sample.springbootlogin.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = UserRepository.class)
@Configuration
public class MongoDBConfig {

    @Bean
    CommandLineRunner CommandLineRunner(UserRepository userRepository){
        return strings -> {
            //userRepository.save(user);


        };
    }
}
