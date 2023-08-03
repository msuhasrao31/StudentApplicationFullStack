package com.studentapp.studentapplication.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class StudentSaveDTO {

    private String studentName;
    private String address;
    private String mobile;
    private boolean active;
}