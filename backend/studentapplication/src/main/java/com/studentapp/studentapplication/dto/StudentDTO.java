package com.studentapp.studentapplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class StudentDTO {

    private int studentId;
    private String studentName;
    private String address;
    private String mobile;
    private boolean active;

}