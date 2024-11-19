package com.nour.plantes.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nour.plantes.entities.Image;
public interface ImageRepository extends JpaRepository<Image , Long> {
}