package com.nour.plantes.entities;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity

@AllArgsConstructor
public class Plante {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPlante;
	private String nomPlante;
	private String couleur;
	private Date dateRendezVous;
	
	
	

	@ManyToOne
	private Type type;
	
	@OneToMany (mappedBy = "plante")
	 private List<Image> images;

	
	public Plante() {
	super();
	}
	
	public Long getIdPlante() {
		return idPlante;
		}
		public void setIdPlante(Long idPlante) {
		this.idPlante = idPlante;
		}
		public String getNomPlante() {
		return nomPlante;
		}
		public void setNomPlante(String nomPlante) {
		this.nomPlante = nomPlante;
		}
		public String getCouleur() {
		return couleur;
		}
		public void setCouleur(String couleur) {
		this.couleur = couleur;
		}
		public Date getDateRendezVous() {
		return dateRendezVous;
		}
		public void setDateRendezVous(Date dateRendezVous) {
		this.dateRendezVous = dateRendezVous;
		}
	
		
		public Type getType() {
			return type;
		}
		public void setType(Type type) {
			this.type = type;
		}
		public List<Image> getImages() {
			return images;
		}
		public void setImages(List<Image> images) {
			this.images = images;
		}

		public Plante( String nomPlante, String couleur, Date dateRendezVous, List<Image> images,
				Type type) {
			super();
			this.nomPlante = nomPlante;
			this.couleur = couleur;
			this.dateRendezVous = dateRendezVous;
			this.images = images;
			this.type = type;
		}

		@Override
		public String toString() {
			return "Plante [nomPlante=" + nomPlante + ", couleur=" + couleur + ", dateRendezVous=" + dateRendezVous
					+ ", images=" + images + ", type=" + type + "]";
		}
		
		
		}