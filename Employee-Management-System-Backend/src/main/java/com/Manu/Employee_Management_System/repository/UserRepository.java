package com.Manu.Employee_Management_System.repository;

import com.Manu.Employee_Management_System.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Employee, Long> {
}
