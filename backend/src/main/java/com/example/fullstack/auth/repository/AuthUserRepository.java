package com.example.fullstack.auth.repository;

import com.example.fullstack.auth.entity.AuthUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AuthUserRepository extends JpaRepository<AuthUser, Long> {
    boolean existsByUsername(String username);

    Optional<AuthUser> findByUsername(String username);
}
