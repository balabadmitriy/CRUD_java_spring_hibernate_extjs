package com.mvc.repository;

import com.mvc.domain.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Long> {

    @Query("select dep from com.mvc.domain.Department dep where dep.departmentName = :name")
    List<Department> findByName(@Param("name") String name);
}
