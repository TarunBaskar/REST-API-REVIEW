package com.example.demo.service;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Model.TelevisionDetails;
import com.example.demo.repository.TelevisonRepository;



@Service
public class TelevisionService {

	@Autowired
	TelevisonRepository repository;
	
	public String addTelevisionDetailsData(TelevisionDetails television) {
		repository.save(television);
		return "TelevisionDetails Data is Added";
	}
	
	public List<TelevisionDetails> getTelevisionDetailsData(){
		return  repository.findAll();
	}
//	
//	public String findTelevisionDetailById(int id) {
//		return repository.findById(id);
//	}
//	
	public  String updateTelevisionDetailsData(TelevisionDetails television) {
		repository.save(television);
		return "TelevisionDetailsData is Updated";
	}
	public String deleteById(int id) {
		repository.deleteById(id);
		return "TelevisionDetails no "+id+" is Deleted";
	}
     
	//sorting
	public List<TelevisionDetails> getTelevisionDetailsSorted(String field){
		return repository.findAll(Sort.by(Sort.Direction.DESC,field));
	}
	
	//pagination
	public List<TelevisionDetails> getTelevisionDetailsWithPagination( int offset,int pageSize){
		Page<TelevisionDetails> page=repository.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	//sorting and paging
	public List<TelevisionDetails> getTelevisionDetailsWithPagingAndSorting(int offset,int pageSize,String field){
		PageRequest paging =PageRequest.of(offset, pageSize,Sort.by(field));
		Page<TelevisionDetails> page = repository.findAll(paging);
		return page.getContent();
	}


}
