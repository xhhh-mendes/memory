package com.example.memory_backend.controller;

import com.example.memory_backend.model.Diary;
import com.example.memory_backend.model.Photos;
import com.example.memory_backend.repository.DiaryRepository;
import com.example.memory_backend.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/v1")
public class PhotoController {

    @Autowired
    private PhotoRepository photoRepository;

    // get all diaries
    @GetMapping("/photos")
    public List<Photos> getAllPhotos(){
        return photoRepository.findAll();
    }

    // save the given diary to repository
    @PostMapping("/photos")
    public Photos createPhoto(@RequestBody Photos photo){
        return photoRepository.save(photo);
    }
}
