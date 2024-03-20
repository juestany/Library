package com.example.library.infrastructure.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="loans", schema = "library")
public class LoanEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "loanId")
    private long loanId;

//    @ManyToOne
//    @JoinColumn(name = "bookId")
//    private BookEntity book;

    @ManyToOne
    @JoinColumn(name = "userId")
    private UserEntity user;

    @Basic
    @Column(name="loanDate")
    private LocalDate loanDate;

    @Basic
    @Column(name = "loanPeriod")
    private LocalDate loanPeriod;

    @Basic
    @Column(name = "returnDate")
    private LocalDate returnDate;

    public long getLoanId() {
        return loanId;
    }

    public void setLoanId(long id) {
        this.loanId = id;
    }

//    public BookEntity getBook() {
//        return book;
//    }
//
//    public void setBook(BookEntity book) {
//        this.book = book;
//    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public LocalDate getLoanDate() {
        return loanDate;
    }

    public void setLoanDate(LocalDate loanDate) {
        this.loanDate = loanDate;
    }

    public LocalDate getLoanPeriod() {
        return loanPeriod;
    }

    public void setLoanPeriod(LocalDate loanPeriod) {
        this.loanPeriod = loanPeriod;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }
}
