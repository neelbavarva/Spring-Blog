package com.example.backend.dto;

public class DeletePostResponse {
    private int status;
    private String message;

    public DeletePostResponse(){}

    public DeletePostResponse(int status, String message) {
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
        return "AddPostResponse{" +
                "status=" + status +
                ", message='" + message + '\'' +
                '}';
    }
}
