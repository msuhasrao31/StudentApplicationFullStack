package com.studentapp.studentapplication.entity;

import jakarta.persistence.*;
import lombok.Getter;


@Getter
@Entity
@Table(name = "student")
public class Student {

    @Id
    @Column(name = "student_id", length = 50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;

    @Column(name = "student_name", length = 50)
    private String studentName;

    @Column(name = "address", length = 100)
    private String address;

    @Column(name = "mobile", length = 100)
    private String mobile;


    @Column(name = "active", columnDefinition = "TINYINT default 1")
    private boolean active;


    public Student(int studentId, String studentName, String address, String mobile, boolean active) {

        this.studentId = studentId;
        this.studentName = studentName;
        this.address = address;
        this.mobile = mobile;
        this.active = active;
    }

    public Student(String studentName, String address, String mobile, boolean active) {

        this.studentName = studentName;
        this.address = address;
        this.mobile = mobile;
        this.active = active;
    }


    public Student() {
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setActive(boolean active) {
        this.active = active;
    }


    @Override
    public String toString() {
        return "Student{" +
                "studentid=" + studentId +
                ", studentname='" + studentName + '\'' +
                ", address='" + address + '\'' +
                ", mobile=" + mobile +
                ", active=" + active +
                '}';
    }
}