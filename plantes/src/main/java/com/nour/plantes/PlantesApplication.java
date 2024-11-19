package com.nour.plantes;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.nour.plantes.entities.Plante;

import aj.org.objectweb.asm.Type;

@SpringBootApplication
public class PlantesApplication  implements CommandLineRunner{
	@Bean
	public ModelMapper modelMapper()
	{
	return new ModelMapper();
	}
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;
	public static void main(String[] args) {
	SpringApplication.run(PlantesApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
	repositoryRestConfiguration.exposeIdsFor(Plante.class,Type.class);
	}
	}
