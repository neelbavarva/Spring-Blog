package com.example.backend.dto;

public class RegisterResponse {
    private int status;
    private String message;

    public RegisterResponse(){

    }

    public RegisterResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "RegisterResponse{" +
                "status=" + status +
                ", message='" + message + '\'' +
                '}';
    }
}
