package com.example.fullstack.auth.service;

import com.example.fullstack.auth.dto.AuthRequest;
import com.example.fullstack.auth.dto.AuthResponse;
import com.example.fullstack.auth.entity.AuthUser;
import com.example.fullstack.auth.repository.AuthUserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HexFormat;

@Service
public class AuthService {
    private static final String REGISTER_SUCCESS_MESSAGE = "đã tạo tk đăng nhập thành công";
    private static final String LOGIN_SUCCESS_MESSAGE = "hello world";
    private static final String LOGIN_ERROR_MESSAGE = "tài khoản hoặc mật khẩu đã bị login sai xin vui lòng thử lại";

    private final AuthUserRepository authUserRepository;

    public AuthService(AuthUserRepository authUserRepository) {
        this.authUserRepository = authUserRepository;
    }

    public ResponseEntity<AuthResponse> register(AuthRequest request) {
        if (isBlank(request.username()) || isBlank(request.password())) {
            return ResponseEntity.badRequest()
                    .body(new AuthResponse(false, "username và password không được để trống", null));
        }

        String username = request.username().trim();
        if (authUserRepository.existsByUsername(username)) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new AuthResponse(false, "tài khoản đã tồn tại", username));
        }

        authUserRepository.save(new AuthUser(username, hashPassword(request.password())));
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AuthResponse(true, REGISTER_SUCCESS_MESSAGE, username));
    }

    public ResponseEntity<AuthResponse> login(AuthRequest request) {
        if (isBlank(request.username()) || isBlank(request.password())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new AuthResponse(false, LOGIN_ERROR_MESSAGE, null));
        }

        String username = request.username().trim();
        String passwordHash = hashPassword(request.password());

        return authUserRepository.findByUsername(username)
                .filter(user -> user.getPasswordHash().equals(passwordHash))
                .map(user -> ResponseEntity.ok(new AuthResponse(true, LOGIN_SUCCESS_MESSAGE, user.getUsername())))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(new AuthResponse(false, LOGIN_ERROR_MESSAGE, null)));
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }

    private String hashPassword(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] bytes = digest.digest(password.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(bytes);
        } catch (NoSuchAlgorithmException exception) {
            throw new IllegalStateException("SHA-256 is not available", exception);
        }
    }
}
