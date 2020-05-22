package com.cadastro.apirest.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cadastro.apirest.models.Cadastro;
import com.cadastro.apirest.repository.CadastroRepository;


@RestController
@RequestMapping(value="/api")
@CrossOrigin("*")
public class CadastroResource {
	
	@Autowired
	CadastroRepository cadastroRepository;
	
	/* Retorna uma lista de usuarios */
	@GetMapping("/cadastro")
	public List<Cadastro> listaUsuarios(){
		return cadastroRepository.findAll();
	}
	
	/* Retorna uma um unico usuario */
	@GetMapping("/cadastro/{id}")
	public Cadastro listaUsuarioUnico(@PathVariable(value="id") long id){
		return cadastroRepository.findById(id);
	}
	
	/* Salva um usuario */
	@PostMapping("/cadastro")
	public Cadastro salvaUsuario(@RequestBody Cadastro cadastro) {
		return cadastroRepository.save(cadastro);
	}
	
	/* Deleta um usuario */
	@DeleteMapping("/cadastro/{id}")
	public void deletaUsuario(@PathVariable(value="id") long id) {
		cadastroRepository.deleteById(id);
	
	}
	
	/* Atualzia um usuario */
	@PutMapping("/cadastro")
	public Cadastro atualizaUsuario(@RequestBody @Valid Cadastro cadastro) {
		return cadastroRepository.save(cadastro);
	}
 

}
