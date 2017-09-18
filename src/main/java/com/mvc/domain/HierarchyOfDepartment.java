package com.mvc.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "hierarchy_of_department")
public class HierarchyOfDepartment implements Serializable{

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "parent")
    private Department parent;

    public HierarchyOfDepartment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Department getParent() {
        return parent;
    }

    public void setParent(Department parent) {
        this.parent = parent;
    }
}
