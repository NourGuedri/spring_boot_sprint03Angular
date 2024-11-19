package com.nour.plantes;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.nour.plantes.entities.Plante;
import com.nour.plantes.entities.Type;
import com.nour.plantes.repos.PlanteRepository;
@SpringBootTest
class PlantesApplicationTests {

	@Autowired
	private PlanteRepository planteRepository;
	
	@Test
	public void testFindPlante()
	{
	Plante p = planteRepository.findById(1L).get();
	System.out.println(p);
	}
	@Test
	public void testUpdatePlante()
	{
	Plante p = planteRepository.findById(1L).get();
	p.setCouleur("violet");
	planteRepository.save(p);
	}
	@Test
	public void testDeletePlante()
	{
	planteRepository.deleteById(1L);;
	}

	@Test
	public void testListerTousPlantes()
	{
	List<Plante> pls = planteRepository.findAll();
	for (Plante p : pls)
	{
	System.out.println(p);
	}
	}
	 @Test
	 public void testFindByNomPlante()
	 {
	 List<Plante> pls = planteRepository.findByNomPlante("rose");
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 }
	 }
	 @Test
	 public void testFindByNomPlanteContains ()
	 {
	 List<Plante> pls=planteRepository.findByNomPlanteContains("ro");
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 } }
	 @Test
	 public void testfindByCouleur()
	 {
	 List<Plante> pls = planteRepository.findByCouleur("rose", "Violet");
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 }
	 }
	 @Test
	 public void testfindByType()
	 {
	 Type type = new Type();
	 type.setIdType(1L);
	 List<Plante> pls = planteRepository.findByType(type);
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 }
	 }
	 
	 @Test
	 public void findByTypeIdType()
	 {
	 List<Plante> pls = planteRepository.findByTypeIdType(1L);
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 }
	  }
	 @Test
	 public void testfindByOrderByNomPlanteAsc()
	 {
	 List<Plante> pls =planteRepository.findByOrderByNomPlanteAsc();
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 }
	 }
	 
	 @Test
	 public void testTrierPlantesNomsCouleur()
	 {
	 List<Plante> pls = planteRepository.trierPlantesNomsCouleur();
	 for (Plante p : pls)
	 {
	 System.out.println(p);
	 }
	 }
	
	}