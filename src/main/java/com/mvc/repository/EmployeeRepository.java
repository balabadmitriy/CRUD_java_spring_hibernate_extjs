package com.mvc.repository;

import com.mvc.domain.Employee;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
@Qualifier("employeeRepository")
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("select em from com.mvc.domain.Employee em where em.firstName= :firstName and em.lastName= :lastName")
    List<Employee> findByNameAndLastName(@Param("firstName") String firstName, @Param("lastName") String  lastName);

    @Query("select em from com.mvc.domain.Employee em where em.firstName LIKE CONCAT('%',:search,'%') or em.lastName LIKE CONCAT('%',:search,'%')")
    Collection<Employee> findByNameAndLastName(@Param("search")String search);
/*
    @Query("select em from com.mvc.domain.Employee em where em.firstName = :firstName")
    List<Employee> findByName(@Param("firstName")String firstName);*/

}
