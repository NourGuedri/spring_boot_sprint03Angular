package com.nour.plantes.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nour.plantes.dto.PlanteDTO;
import com.nour.plantes.entities.Plante;
import com.nour.plantes.entities.Type;
import com.nour.plantes.repos.ImageRepository;
import com.nour.plantes.repos.PlanteRepository;
@Service
public class PlanteServiceImpl  implements PlanteService{
	@Autowired
	PlanteRepository planteRepository;
	@Autowired
	ImageRepository imageRepository;
	@Override
	public void deletePlante(Plante p) {
	planteRepository.delete(p);
	}
	 @Override
	public void deletePlanteById(Long id) {
	planteRepository.deleteById(id);
	}
	 
	 @Override
	 public PlanteDTO savePlante(PlanteDTO p) {
	  return convertEntityToDto( planteRepository.save(convertDtoToEntity(p)));
	 }
	
	 @Override
	 public Plante updatePlante(Plante p) {

	 Plante plUpdated = planteRepository.save(p);

	 return plUpdated;
	 }


	 @Override
	 public PlanteDTO getPlante(Long id) {
	 return convertEntityToDto( planteRepository.findById(id).get());
	 }
	 @Override
	 public List<PlanteDTO> getAllPlantes() 
	 {return planteRepository.findAll().stream().map(this::convertEntityToDto).collect(Collectors.toList());
			 //OU BIEN
			 /*List<Plante> pls = planteRepository.findAll();
			 List<PlanteDTO> listprodDto = new ArrayList<>(prods.size());
			 for (Plante p : pls)
			 listprodDto.add(convertEntityToDto(p));
			 return listprodDto;*/
			 }
	
	@Override
	public List<Plante> findByNomPlante(String nom) {
	return planteRepository.findByNomPlante(nom);
	}
	@Override
	public List<Plante> findByNomPlanteContains(String nom) {
	return planteRepository.findByNomPlanteContains(nom);
	}
	@Override
	public List<Plante> findByCouleur(String nom, String couleur) {
	return planteRepository.findByCouleur(nom, couleur);
	}
	@Override
	public List<Plante> findByType(Type type) {
	return planteRepository.findByType(type);
	}
	@Override
	public List<Plante> findByTypeIdType(Long id) {
	return planteRepository.findByTypeIdType(id);
	}
	@Override
	public List<Plante> findByOrderByNomPlanteAsc() {
	return planteRepository.findByOrderByNomPlanteAsc();
	}
	@Override
	public List<Plante> trierPlantesNomsCouleur() {
	return planteRepository.trierPlantesNomsCouleur();
	}
	
	/*@Override
	public PlanteDTO convertEntityToDto(Plante plante) {
		 PlanteDTO planteDTO = new PlanteDTO();
	 planteDTO.setIdPlante(plante.getIdPlante());
	 planteDTO.setNomPlante(plante.getNomPlante());
//	 planteDTO.setCouleur(plante.getCouleur()); pour masqauer la couleur
	 planteDTO.setDateRendezVous(plante.getDateRendezVous());
//	 planteDTO.setType(plante.getType());
	 return planteDTO;

	return PlanteDTO.builder()
	.idPlante(plante.getIdPlante())
	.nomPlante(plante.getNomPlante())
	.couleur(plante.getCouleur())
//	pour masqauer la couleur
	.dateRendezVous(plante.getDateRendezVous())
	.type(plante.getType())
//	on va masquer le type et afficher juste le nom du type
//	.nomType(plante.getType().getNomType())
	.build();
	}*/

	/*@Override
	public Plante convertDtoToEntity(PlanteDTO planteDto) {
	Plante plante = new Plante();
	plante.setIdPlante(planteDto.getIdPlante());
	plante.setNomPlante(planteDto.getNomPlante());
	plante.setCouleur(planteDto.getCouleur());
	plante.setDateRendezVous(planteDto.getDateRendezVous());
	plante.setType(planteDto.getType());
	 return plante;
		
	}*/
	@Override
	public Plante convertDtoToEntity(PlanteDTO planteDto) {
	Plante plante = new Plante();
	plante = modelMapper.map(planteDto, Plante.class);
	return plante;
	
	}
	@Autowired
	ModelMapper modelMapper;
	@Override
	public PlanteDTO convertEntityToDto(Plante plante) {
	modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);	
	PlanteDTO planteDTO = modelMapper.map(plante, PlanteDTO.class);
	 return planteDTO;
	 }


	}