package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.TelevisionDetails;

@Repository
public interface TelevisonRepository extends JpaRepository<TelevisionDetails,Integer>{
String findById(int id);
}
