package com.example.memory_backend.repository;

import com.example.memory_backend.model.Diary;
import com.example.memory_backend.model.Photos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photos, Integer> {
    
}
