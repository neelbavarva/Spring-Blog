package com.example.backend.dto;

public class UserRequest {
    private String jwtToken;

    public UserRequest(){}

    public UserRequest(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

    @Override
    public String toString() {
        return "UserRequest{" +
                "jwtToken='" + jwtToken + '\'' +
                '}';
    }
}
