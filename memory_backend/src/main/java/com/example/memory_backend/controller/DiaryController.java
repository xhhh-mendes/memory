package com.example.memory_backend.controller;


import com.example.memory_backend.model.Diary;
import com.example.memory_backend.repository.DiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/v1")
public class DiaryController {

    @Autowired
    private DiaryRepository diaryRepository;

    // get all diaries
    @GetMapping("/diary")
    public List<Diary> getAllDairies(){
        return diaryRepository.findAll();
    }

    // save the given diary to repository
    @PostMapping("/diary")
    public Diary createDiary(@RequestBody Diary diary){
        System.out.println(diary.getContent());
        System.out.println(diary.getCreateTime());
        return diaryRepository.save(diary);
    }



}
