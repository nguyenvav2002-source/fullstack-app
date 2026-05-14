package com.example.fullstack.auth.dto;

public record AuthResponse(boolean success, String message, String username) {
}
