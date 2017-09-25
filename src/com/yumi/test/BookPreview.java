package com.yumi.test;

public class BookPreview {
	String title;
	String author;
	String coverURL;
	int bookID;
	double searchWeight;

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the author
	 */
	public String getAuthor() {
		return author;
	}

	/**
	 * @param author the author to set
	 */
	public void setAuthor(String author) {
		this.author = author;
	}

	/**
	 * @return the coverURL
	 */
	public String getCoverURL() {
		return coverURL;
	}

	/**
	 * @param coverURL the coverURL to set
	 */
	public void setCoverURL(String coverURL) {
		this.coverURL = coverURL;
	}

	/**
	 * @return the bookID
	 */
	public int getBookID() {
		return bookID;
	}

	/**
	 * @param bookID the bookID to set
	 */
	public void setBookID(int bookID) {
		this.bookID = bookID;
	}

	public BookPreview(String title,String author,String coverURL,int bookID) {
		super();
		this.title = title;
		this.author = author;
		this.coverURL = coverURL;
		this.bookID = bookID;
	}
}
