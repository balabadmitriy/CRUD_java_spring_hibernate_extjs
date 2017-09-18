package com.mvc.controller;

import com.mvc.domain.Employee;

public class CheckEmployee {
    private boolean success;
    private Employee data;


    public CheckEmployee(boolean success, Employee data) {
        this.success = success;
        this.data = data;
    }

    public CheckEmployee() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Employee getData() {
        return data;
    }

    public void setData(Employee data) {
        this.data = data;
    }
}
