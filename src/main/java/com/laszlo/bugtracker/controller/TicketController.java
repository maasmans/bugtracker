package com.laszlo.bugtracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laszlo.bugtracker.domein.Project;
import com.laszlo.bugtracker.domein.Ticket;

@RestController
@RequestMapping("/api/ticket")
public class TicketController {
	@Autowired
	TicketRepository<Ticket> ticketRepository;
	@Autowired
	ProjectRepository<Project> projectRepository;
		
	@GetMapping("/")
	public Iterable<Ticket> getTickets() {
		System.out.println("getTickets called");
		return ticketRepository.findAll();
	}
	
	@PostMapping("/")
	public Ticket addTicket(@RequestBody Ticket ticket) {
		System.out.println("addTicket called");
		return ticketRepository.save(ticket);
	}
	
	//POST MAPPING TEST MET PROJECT ID
	@PostMapping("/{id}")
	public Ticket addTicketWithProject(@RequestBody Ticket ticket,@PathVariable(value = "id") String projectId) {
		System.out.println("addTicketWithProject called");
		Project project = projectRepository.findById(Long.parseLong(projectId)).get();
		Ticket ticketReturnen = ticketRepository.save(ticket);
		project.addTicket(ticket);
		projectRepository.save(project);
		System.out.println("Ticket toegevoegd aan project?.");
		return ticketReturnen;
	}
	
	@DeleteMapping("/{id}")
	public void deleteTicketById(@PathVariable(value = "id") String ticketId) {
		System.out.println("deleteTicketById called");
		ticketRepository.deleteById(Long.parseLong(ticketId));
	}

//	@GetMapping("/{id}"){
//		
//	}
//	
//	@GetMapping("/{id}")
//	public Contactpersoon verkrijgContactpersoon(@PathVariable(value = "id") String contactpersoonId) {
//		return contactpersoonService.getContactpersoonById(Long.parseLong(contactpersoonId));
//	}
//	
//	
//	
//	@DeleteMapping("/{id}")
//	public void verwijderContactpersoon(@PathVariable(value = "id") String contactpersoonId) {
//		contactpersoonService.deleteContactpersoon(Long.parseLong(contactpersoonId));
//	}
//	
//	@PutMapping("/{id}")
//	public Contactpersoon vernieuwContactpersoon(@PathVariable(value = "id") String contactpersoonId, @RequestBody Contactpersoon contactpersoonDetails) {
//		return contactpersoonService.updateContactpersoon(Long.parseLong(contactpersoonId), contactpersoonDetails);
//	}
}
