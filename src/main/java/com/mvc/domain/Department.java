package com.mvc.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity(name = "department")
public class Department implements Serializable{

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "department_name")
    private String departmentName;

    @Column(name = "department")@JsonBackReference
    @OneToMany(mappedBy = "department",fetch = FetchType.LAZY)
    private List<Employee> employees;

   /* @Column(name = "parent")@JsonBackReference
    @OneToMany(mappedBy = "parent",fetch = FetchType.LAZY)
    private List<HierarchyOfDepartment> ofDepartments;*/
    public Department() {
    }

    public Department(String departmentName) {
        this.departmentName = departmentName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

   /*
   public List<HierarchyOfDepartment> getOfDepartments() {
        return ofDepartments;
    }

    public void setOfDepartments(List<HierarchyOfDepartment> ofDepartments) {
        this.ofDepartments = ofDepartments;
    }*/
}
