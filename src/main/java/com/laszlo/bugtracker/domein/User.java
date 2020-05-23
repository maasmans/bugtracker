package com.laszlo.bugtracker.domein;

import java.util.Date;
import java.util.List;

public abstract class User {
	private long userId;
	private String firstName;
	private String lastName;
	private String email;
	
	private List ticketsOwned; 
	private List ticketsFollowing;
	
	private String loginStatus;
	private Date registerDate;
	private String password;
	
}
