package com.yumi.test;

public class Book {
	int bookID;
	int authorID;
	String isbn;
	String title;
	String author;
	String coverURL;
	String intro;
	String publisher;
	String publishDate;
	String AvatarURL;
	int authorAge;
	String authorCountry;
	String authorIntro;
	int price;
	/**
	 * @return the avatarURL
	 */
	public String getAvatarURL() {
		return AvatarURL;
	}

	/**
	 * @param avatarURL the avatarURL to set
	 */
	public void setAvatarURL(String avatarURL) {
		AvatarURL = avatarURL;
	}

	/**
	 * @return the authorAge
	 */
	public int getAuthorAge() {
		return authorAge;
	}

	/**
	 * @param authorAge the authorAge to set
	 */
	public void setAuthorAge(int authorAge) {
		this.authorAge = authorAge;
	}

	/**
	 * @return the authorCountry
	 */
	public String getAuthorCountry() {
		return authorCountry;
	}

	/**
	 * @param authorCountry the authorCountry to set
	 */
	public void setAuthorCountry(String authorCountry) {
		this.authorCountry = authorCountry;
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



	/**
	 * @return the isbn
	 */
	public String getIsbn() {
		return isbn;
	}



	/**
	 * @param isbn the isbn to set
	 */
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}



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
	 * @return the intro
	 */
	public String getIntro() {
		return intro;
	}



	/**
	 * @param intro the intro to set
	 */
	public void setIntro(String intro) {
		this.intro = intro;
	}



	/**
	 * @return the publisher
	 */
	public String getPublisher() {
		return publisher;
	}



	/**
	 * @param publisher the publisher to set
	 */
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}



	/**
	 * @return the publishDate
	 */
	public String getPublishDate() {
		return publishDate;
	}



	/**
	 * @param publishDate the publishDate to set
	 */
	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}



	/**
	 * @return the price
	 */
	public int getPrice() {
		return price;
	}



	/**
	 * @param price the price to set
	 */
	public void setPrice(int price) {
		this.price = price;
	}

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
	 * @return the authorIntro
	 */
	public String getAuthorIntro() {
		return authorIntro;
	}

	/**
	 * @param authorIntro the authorIntro to set
	 */
	public void setAuthorIntro(String authorIntro) {
		this.authorIntro = authorIntro;
	}

	public Book(int bookID, int authorID, String isbn, String title, String author, String coverURL, String intro,
			String publisher, String publishDate, String avatarURL, int authorAge, String authorCountry,
			String authorIntro, int price) {
		super();
		this.bookID = bookID;
		this.authorID = authorID;
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.coverURL = coverURL;
		this.intro = intro;
		this.publisher = publisher;
		this.publishDate = publishDate;
		AvatarURL = avatarURL;
		this.authorAge = authorAge;
		this.authorCountry = authorCountry;
		this.authorIntro = authorIntro;
		this.price = price;
	}

	
}
