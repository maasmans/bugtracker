package com.laszlo.bugtracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laszlo.bugtracker.domein.Project;
import com.laszlo.bugtracker.domein.Ticket;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
	@Autowired
	ProjectRepository<Project> projectRepository;
	
	
	@GetMapping("/")
	public Iterable<Project> getProjects() {
		System.out.println("getProjects called");
		return projectRepository.findAll();
	}
	
	@PostMapping("/")
	public Project addProject(@RequestBody Project project) {
		System.out.println("addProject called");
		return projectRepository.save(project);
	}
//	VOORBEELD VOOR ADD TICKET
	public void addTicketToProject(Ticket ticket, Project project) {
//		Medewerker medewerker = medewerkerRepository.findById(medewerkerId).get();
//		Opdrachtgever opdrachtgever = opdrachtgeverRepository.findById(opdrachtgeverId).get();
		project.addTicket(ticket);
		projectRepository.save(project);
		System.out.println("Ticket toegevoegd aan project?.");
	}
	

}
