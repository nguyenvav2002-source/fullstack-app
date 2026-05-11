package com.example.fullstack.hello;

public record HelloResponse(String message, String databaseStatus, long requestCount) {
}
