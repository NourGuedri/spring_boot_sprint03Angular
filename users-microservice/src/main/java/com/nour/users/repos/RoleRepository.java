package com.nour.users.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nour.users.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	Role findByRole(String role);
}