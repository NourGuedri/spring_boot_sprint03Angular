package com.nour.plantes.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nour.plantes.entities.Type;

import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PlanteDTO {

	private Long idPlante;
	private String nomPlante;
	private String couleur; 
//	pour masquer la couleur
	private Date dateRendezVous;
	private Type type; 
//	on va masquer le type et afficher juste le nom du type
	private String nomType;
}
