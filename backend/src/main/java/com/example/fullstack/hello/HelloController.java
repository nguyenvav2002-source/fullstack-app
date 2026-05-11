package com.example.fullstack.hello;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    private final HelloEventRepository helloEventRepository;

    public HelloController(HelloEventRepository helloEventRepository) {
        this.helloEventRepository = helloEventRepository;
    }

    @GetMapping("/hello")
    public HelloResponse hello() {
        helloEventRepository.save(new HelloEvent());

        return new HelloResponse(
                "Hello World from Angular + Spring Boot + MySQL!",
                "connected",
                helloEventRepository.count()
        );
    }
}
