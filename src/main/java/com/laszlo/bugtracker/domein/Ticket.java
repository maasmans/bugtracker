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
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

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
	private String projectId;
	@JsonIgnore
	private LocalDateTime created;
	private String createdString;
	
	private String type;
	private String priority;
	private String status;

	
//	private User submitter;
//	private User assignee;

	
	
	Ticket(){
		this.created = LocalDateTime.now();
		DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
		this.createdString = this.created.format(myFormatObj).toString();
		System.out.println("Time created is:" + this.createdString);
		
	}

}
