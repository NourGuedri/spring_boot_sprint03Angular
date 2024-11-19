package com.nour.plantes.service;

import java.util.List;

import com.nour.plantes.dto.PlanteDTO;
import com.nour.plantes.entities.Plante;
import com.nour.plantes.entities.Type;

public interface PlanteService {
	PlanteDTO savePlante(PlanteDTO p);
	

	void deletePlante(Plante p);
	 void deletePlanteById(Long id);
	 PlanteDTO getPlante(Long id);
	 List<PlanteDTO> getAllPlantes();
	List<Plante> findByNomPlante(String nom);
	List<Plante> findByNomPlanteContains(String nom);
	List<Plante> findByCouleur(String nom, String couleur);
	List<Plante> findByType (Type type);
	List<Plante> findByTypeIdType(Long id);
	List<Plante> findByOrderByNomPlanteAsc();
	List<Plante> trierPlantesNomsCouleur();
	PlanteDTO convertEntityToDto (Plante plante);
	Plante convertDtoToEntity(PlanteDTO planteDto);
	Plante updatePlante(Plante p);

}
