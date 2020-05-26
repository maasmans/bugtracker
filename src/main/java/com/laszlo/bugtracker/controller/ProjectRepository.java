package com.laszlo.bugtracker.controller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.laszlo.bugtracker.domein.Project;
import com.laszlo.bugtracker.domein.Ticket;

@Repository
public interface ProjectRepository<T extends Project> extends CrudRepository<T, Long> {

}
