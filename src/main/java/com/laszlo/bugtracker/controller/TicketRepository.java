package com.laszlo.bugtracker.controller;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.laszlo.bugtracker.domein.Ticket;


@Repository
public interface TicketRepository<T extends Ticket> extends CrudRepository<T, Long> {

}
