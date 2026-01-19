package com.Manu.Employee_Management_System.Controller;

import com.Manu.Employee_Management_System.Entity.Employee;
import com.Manu.Employee_Management_System.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/HealthCheck")
    public String healthCheck() {
        return "Employee Management System is running!";
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return userService.createEmployee(employee);
    }

    // GET ALL Employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return userService.getAllEmployees();
    }

    // GET Employee by ID
    @GetMapping("/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return userService.getEmployeeById(id);
    }

    // UPDATE Employee by ID
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return userService.updateEmployee(id, employee);
    }

    // DELETE Employee by ID
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        userService.deleteEmployee(id);
        return "Employee deleted successfully!";
    }
}
