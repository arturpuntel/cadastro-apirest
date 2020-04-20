package com.cadastro.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cadastro.apirest.models.Cadastro;

public interface CadastroRepository extends JpaRepository<Cadastro, Long>{
	Cadastro findById(long id);

}