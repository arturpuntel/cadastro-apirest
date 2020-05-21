package com.cadastro.apirest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EventController {
	
	@RequestMapping("/cadastrarEvento")
	public String form() {
		return "events/formEvent";
	}

}
