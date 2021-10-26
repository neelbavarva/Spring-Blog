package com.example.backend.dto;

public class LoginResponse {
    private String token;
    private int status;

    public LoginResponse(){
    }

    public LoginResponse(String token, int status) {
        this.token = token;
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "token='" + token + '\'' +
                ", status=" + status +
                '}';
    }
}
