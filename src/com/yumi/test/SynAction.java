package com.yumi.test;

import com.opensymphony.xwork2.ActionSupport;

public class SynAction extends ActionSupport {
	 
	private static final long serialVersionUID = -3833760938262963880L;
	
	private String name;
	private String bookID;

   public String execute() throws Exception {
	   if("SECRET".equals(name)) {
		   return SUCCESS;
	   }
	   else {
		   return ERROR;
	   }
   }
   
   public String openEditPage() throws Exception {
	   
	   return SUCCESS;
   }
   
   public String getName() {
      return name;
   }

	   /**
	 * @return the bookID
	 */
	public String getBookID() {
		return bookID;
	}

	/**
	 * @param bookID the bookID to set
	 */
	public void setBookID(String bookID) {
		this.bookID = bookID;
	}

	public void setName(String name) {
	      this.name = name;
	   }
}
	