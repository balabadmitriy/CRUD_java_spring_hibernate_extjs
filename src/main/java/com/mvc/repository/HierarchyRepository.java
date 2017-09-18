package com.mvc.repository;

import com.mvc.domain.HierarchyOfDepartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HierarchyRepository extends JpaRepository<HierarchyOfDepartment,Long>{
}
