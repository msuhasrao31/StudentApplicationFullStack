package com.studentapp.studentapplication.service;

import com.studentapp.studentapplication.dto.StudentDTO;
import com.studentapp.studentapplication.dto.StudentSaveDTO;
import com.studentapp.studentapplication.dto.StudentUpdateDTO;

import java.util.List;

public interface StudentService {
    String addStudent(StudentSaveDTO studentSaveDTO);

    List<StudentDTO> getAllStudents();

    String updateStudent(StudentUpdateDTO studentUpdateDTO);

    boolean deleteStudent(int id);
}