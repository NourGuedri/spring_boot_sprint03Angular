package com.nour.plantes.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nour.plantes.entities.Type;
import com.nour.plantes.repos.TypeRepository;

@RestController
@RequestMapping("/api/type")
@CrossOrigin("*")
public class TypeRESTController {
	@Autowired
	TypeRepository typeRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Type> getAllTypes() {
		return typeRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Type getTypeById(@PathVariable("id") Long id) {
		return typeRepository.findById(id).get();
	}

	// POST REQUEST THAT GETS THE the type as a request body and saves it to the database
	@RequestMapping(method = RequestMethod.POST)
	public Type createType(@RequestBody Type type) {
		return typeRepository.save(type);
	}
	@RequestMapping(value="/{id}",method=RequestMethod.DELETE)
	public void deleteType(@PathVariable("id") Long id) {
		typeRepository.deleteById(id);
	}

}