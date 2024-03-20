package com.example.library.controller;

import com.example.library.infrastructure.entity.LoanEntity;
import com.example.library.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/loans")
public class LoanController {

    private final LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService) {
        this.loanService = loanService;
    }

    @GetMapping
    public List<LoanEntity> getAllLoans() {
        return loanService.getAll();
    }

    @GetMapping("/{id}")
    public LoanEntity getOne(@PathVariable long id) {
        return loanService.getOne(id);
    }

    @PostMapping
    public ResponseEntity<LoanEntity> create(@RequestBody LoanEntity loan) {
        var newLoan = loanService.create(loan);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        loanService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
