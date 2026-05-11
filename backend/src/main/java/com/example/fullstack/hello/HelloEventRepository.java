package com.example.fullstack.hello;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HelloEventRepository extends JpaRepository<HelloEvent, Long> {
}
