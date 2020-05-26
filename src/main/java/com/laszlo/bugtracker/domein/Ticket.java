package com.laszlo.bugtracker.domein;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;


@Entity
@Getter @Setter
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String description;
	@JsonIgnore
	private LocalDateTime created;
	private String createdString;
	
//	private User submitter;
//	private User assignee;
	
	
	
	
	
	
//	@Enumerated(EnumType.STRING)
//	private enum type {BUGS, OTHER};
	
	
	
	
	private enum status {FINISHED, IN_PROGRESS, ON_HOLD};
	private enum priority {LOW, MEDIUM, HIGH};
	
	
	Ticket(){
		this.created = LocalDateTime.now();
		DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		this.createdString = this.created.format(myFormatObj).toString();
		System.out.println(this.createdString);
		
	}
	
}
