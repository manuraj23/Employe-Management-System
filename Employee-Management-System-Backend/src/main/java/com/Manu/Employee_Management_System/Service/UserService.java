package com.Manu.Employee_Management_System.Service;

import com.Manu.Employee_Management_System.Entity.Employee;
import com.Manu.Employee_Management_System.repository.UserRepository;
import jakarta.websocket.server.ServerEndpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Employee createEmployee(Employee employee) {
        return userRepository.save(employee);
    }

    // Get All Employees
    public List<Employee> getAllEmployees() {
        return userRepository.findAll();
    }

    // Get Employee By ID
    public Optional<Employee> getEmployeeById(Long id) {
        return userRepository.findById(id);
    }

    // Update Employee By ID
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee existing = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        existing.setFirstName(employeeDetails.getFirstName());
        existing.setLastName(employeeDetails.getLastName());
        existing.setEmail(employeeDetails.getEmail());
        existing.setDepartment(employeeDetails.getDepartment());

        return userRepository.save(existing);
    }

    // Delete Employee By ID
    public void deleteEmployee(Long id) {
        userRepository.deleteById(id);
    }
}
