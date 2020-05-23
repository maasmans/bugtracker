package com.laszlo.bugtracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import com.laszlo.bugtracker.domein.Ticket;

public class TicketService {
	@Autowired
	TicketRepository ticketRepository;
	
	public Ticket addTicket(@RequestBody Ticket ticket) {
		return (Ticket)ticketRepository.save(ticket);
}
}
