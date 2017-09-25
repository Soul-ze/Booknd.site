package com.yumi.test;

public class AuthorPreview {
	int authorID;
	String NAME;
	int searchWeight;
	/**
	 * @return the authorID
	 */
	public int getAuthorID() {
		return authorID;
	}

	/**
	 * @param authorID the authorID to set
	 */
	public void setAuthorID(int authorID) {
		this.authorID = authorID;
	}

	/**
	 * @return the nAME
	 */
	public String getNAME() {
		return NAME;
	}

	/**
	 * @param nAME the nAME to set
	 */
	public void setNAME(String nAME) {
		NAME = nAME;
	}

	public AuthorPreview(int authorID,String NAME) {
		this.authorID = authorID;
		this.NAME = NAME;
	}
}
