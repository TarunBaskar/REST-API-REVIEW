package com.example.demo.Controller;


import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.TelevisionDetails;
import com.example.demo.service.TelevisionService;


@CrossOrigin
@RestController
public class TelevisionController {
	@Autowired
	TelevisionService service;
	
	@GetMapping("/Television")
	public List<TelevisionDetails> TelevisionData(){
		return service.getTelevisionDetailsData();
	}
	
//	@GetMapping("/Television/{id}")
//	public String findId(@RequestParam int id) {
//		return service.findTelevisionDetailById(id);
//	}
	
	@PostMapping("/postTelevision")
	public String addTelevisionData(@RequestBody TelevisionDetails Television) {
		service.addTelevisionDetailsData(Television);
		return "Product Added "+Television.getId();
	}
	
	@PutMapping("/putTelevision")
	public String update(@RequestBody TelevisionDetails Television) {
		return service.updateTelevisionDetailsData(Television);
	}
	
	@DeleteMapping("/Television")
	public String delete(@RequestParam int id) {	
		return service.deleteById(id);
	}
	//Sorting
	@GetMapping("/Television/{field}")
	public List<TelevisionDetails> TelevisionWithSort(@PathVariable String field){
		return service.getTelevisionDetailsSorted(field);
	}
	 //pagination
	@GetMapping("/Television/{offset}/{pageSize}")
	public List<TelevisionDetails> TelevisionWithPagination(@PathVariable int offset,@PathVariable int pageSize){
		return service.getTelevisionDetailsWithPagination(offset,pageSize);
	}
	
	
	//sorting and paging
	@GetMapping("/Television/{offset}/{pageSize}/{field}")
	public List<TelevisionDetails> getTelevisionWithPaginationAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field){
		return service.getTelevisionDetailsWithPagingAndSorting(offset,pageSize,field);
	}
}
