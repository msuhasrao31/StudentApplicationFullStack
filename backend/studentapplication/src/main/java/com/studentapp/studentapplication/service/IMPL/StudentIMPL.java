package com.studentapp.studentapplication.service.IMPL;

import com.studentapp.studentapplication.dto.StudentDTO;
import com.studentapp.studentapplication.dto.StudentSaveDTO;
import com.studentapp.studentapplication.dto.StudentUpdateDTO;
import com.studentapp.studentapplication.entity.Student;
import com.studentapp.studentapplication.repo.StudentRepo;
import com.studentapp.studentapplication.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentIMPL implements StudentService {


    @Autowired
    private StudentRepo studentRepo;

    @Override
    public String addStudent(StudentSaveDTO studentSaveDTO) {

        Student student = new Student(
                studentSaveDTO.getStudentName(),
                studentSaveDTO.getAddress(),
                studentSaveDTO.getMobile(),
                studentSaveDTO.isActive()
        );

        studentRepo.save(student);

        return student.getStudentName();
    }

    @Override
    public List<StudentDTO> getAllStudents() {

        List<Student> getStudents = studentRepo.findAll();
        List<StudentDTO> studentDTOList = new ArrayList<>();

        for (Student s : getStudents) {
            StudentDTO studentDTO = new StudentDTO(

                    s.getStudentId(),
                    s.getStudentName(),
                    s.getAddress(),
                    s.getMobile(),
                    s.isActive()

            );
            studentDTOList.add(studentDTO);
        }


        return studentDTOList;

    }

    @Override
    public String updateStudent(StudentUpdateDTO studentUpdateDTO) {

        if (studentRepo.existsById(studentUpdateDTO.getStudentId())) {

            Student student = studentRepo.getById(studentUpdateDTO.getStudentId());
            student.setStudentName(studentUpdateDTO.getStudentName());
            student.setAddress(studentUpdateDTO.getAddress());
            student.setMobile(studentUpdateDTO.getMobile());
            student.setActive(studentUpdateDTO.isActive());

            studentRepo.save(student);

        } else {
            System.out.println("Student ID no Exist");
        }


        return null;
    }

    @Override
    public boolean deleteStudent(int id) {

        if (studentRepo.existsById(id)) {
            studentRepo.deleteById(id);
        } else {
            System.out.println("Student ID no Exist");
        }

        return false;
    }
}