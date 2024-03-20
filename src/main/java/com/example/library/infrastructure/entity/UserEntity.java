package com.example.library.infrastructure.entity;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="users", schema = "library")
public class UserEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name="userId")
    private long userId;

    @OneToMany(mappedBy = "user")
    private Set<LoanEntity> loans = new HashSet<>();

    @Basic
    @Column(name="username", unique = true)
    private String username;

    @Basic
    @Column(name="password")
    private String password;

    @Basic
    @Column(name="role")
    private String role;

    @Basic
    @Column(name="email", unique = true)
    private String email;

    @Basic
    @Column(name="fullUsername")
    private String fullUsername;

    public Set<LoanEntity> getLoans() {
        return loans;
    }

    public void setLoans(Set<LoanEntity> loans) {
        this.loans = loans;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long id) {
        this.userId = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullUsername() {
        return fullUsername;
    }

    public void setFullUsername(String fullUsername) {
        this.fullUsername = fullUsername;
    }
}
