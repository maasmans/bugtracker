package com.laszlo.bugtracker.domein;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;


@Entity
@Getter @Setter
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String description;
	
//	private User submitter;
//	private User assignee;
	
	private enum type {BUGS, OTHER};
	private enum status {FINISHED, IN_PROGRESS, ON_HOLD};
	private enum priority {LOW, MEDIUM, HIGH};
	
	
	
}
