package com.mvc.service.impl;

import com.mvc.domain.Department;
import com.mvc.domain.Employee;
import com.mvc.repository.DepartmentRepository;
import com.mvc.repository.EmployeeRepository;
import com.mvc.service.CRUDEntities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service("employeeService")
public class EmployeeServiceImpl implements CRUDEntities<Employee>{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    private Long total;

    //    @Transactional
    @Override
    public Boolean add(Employee employee) {
        List<Employee> employees = employeeRepository.findByNameAndLastName(employee.getFirstName(), employee.getLastName());

        Long id = Long.parseLong(employee.getDepartment().getDepartmentName());
        Department department = departmentRepository.findOne(id);
        employee.setDepartment(department);
        if (employees.isEmpty()) {
            employeeRepository.save(employee);
            this.total = employeeRepository.count();
            return true;
        }
        return false;
    }

    @Override
    public void update(Employee employee1) {
        Employee employee =employeeRepository.findOne(employee1.getId());
        employee.setFirstName(employee1.getFirstName());
        employee.setLastName(employee1.getLastName());
        employee.setPosition(employee1.getPosition());
        employee.setDepartment(departmentRepository.findByName(employee1.getDepartment().getDepartmentName()).get(0));
        employeeRepository.save(employee);

    }

    @Override
    public Collection<Employee> getEntities(String search, String limit, String page) {
        int pageInt = 0;
        int size = 0;

            pageInt = Integer.parseInt(page) - 1;
            size = Integer.parseInt(limit);

        if (search == null || search.equals("")) {
            Pageable limitPage = new PageRequest(pageInt, size);
            Page<Employee> employeePage = employeeRepository.findAll(limitPage);

            this.total = employeeRepository.count();
            Collection<Employee> dto = new ArrayList<>();
            employeePage.getContent().forEach(empl -> dto.add(empl));
            return dto;
        }
        else {
            List<Employee> employees = (List<Employee>) employeeRepository.findByNameAndLastName(search);
            Collection<Employee> employeeList = new ArrayList<>();
            if(employees.size() != 0) {
                int limitOfSearch = (pageInt + 1) * size;
                int start = pageInt * size;

                if (limitOfSearch > employees.size()) {
                    limitOfSearch = employees.size();
                }
                if(limitOfSearch == start)
                {
                    start=0;
                    limitOfSearch=5;
                }
                for (int i = start; i < limitOfSearch; i++) {
                    employeeList.add(employees.get(i));
                }
                this.total = Long.valueOf(employees.size());
            }
            return employeeList;
        }
    }

    @Override
    public Long getTotal() {
        return this.total;
    }

    @Override
    public String delete(Employee employee) {
        employeeRepository.delete(employee);
//        this.total = employeeRepository.count();
        return "delete";
    }
}
