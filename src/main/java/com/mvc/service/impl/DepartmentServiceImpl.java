package com.mvc.service.impl;

import com.mvc.domain.Department;
import com.mvc.repository.DepartmentRepository;
import com.mvc.service.CRUDEntities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service("departmentService")
public class DepartmentServiceImpl implements CRUDEntities<Department> {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Boolean add(Department department) {
        return null;
    }

    @Override
    public void update(Department department) {

    }

    @Override
    public Collection<Department> getEntities(String search, String limit, String start) {
        return departmentRepository.findAll();
    }

    @Override
    public String  delete(Department department) {
        return null;
    }

    @Override
    public Long getTotal() {
        return null;
    }
}
