package com.Manu.Employee_Management_System.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="employee_list")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String department;
}
