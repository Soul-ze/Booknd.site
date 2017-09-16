package com.yumi.test;

import com.opensymphony.xwork2.ActionSupport;

public class SynAction extends ActionSupport {
	 
	private static final long serialVersionUID = -3833760938262963880L;
	
	private String name;

	   public String execute() throws Exception {
		   if("SECRET".equals(name)) {
			   return SUCCESS;
		   }
		   else {
			   return ERROR;
		   }
	   }
	   
	   public String getName() {
	      return name;
	   }

	   public void setName(String name) {
	      this.name = name;
	   }
}
	