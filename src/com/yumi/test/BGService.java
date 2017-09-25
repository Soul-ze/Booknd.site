package com.yumi.test;

import java.util.ArrayList;
import java.sql.*;
import com.mysql.jdbc.Connection;

public class BGService  {
		
	public int createBook(Book book) {
		int bookID = -1;
		Connection conn = DBSupport.createConnection();
		String sql="insert into books(ISBN,TITLE,AUTHORID,COVERURL,INTRO,PUBLISHER,PUBLISHDATE,PRICE) "
				+ "values(?,?,?,?,?,?,?,?)";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, book.getIsbn());
			pstmt.setString(2, book.getTitle());
			pstmt.setInt(3, book.getAuthorID());
			pstmt.setString(4, book.getCoverURL());
			pstmt.setString(5, book.getIntro());
			pstmt.setString(6, book.getPublisher());
			pstmt.setString(7, book.getPublishDate());
			pstmt.setInt(8, book.getPrice());
			pstmt.executeUpdate();
			DBSupport.close(pstmt);
			sql = "SELECT LAST_INSERT_ID()";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			if (rs.next()) {  
				bookID = rs.getInt(1);  
		    }
			DBSupport.close(pstmt);
			DBSupport.close(rs);
			sql="update books set COVERURL=? where BOOKID=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, bookID+book.getCoverURL());
			pstmt.setInt(2, bookID);
			pstmt.executeUpdate();
			DBSupport.close(pstmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return bookID;
	}
	
	public int updateBook(Book book) {
		int bookID = book.getBookID();
		Connection conn = DBSupport.createConnection();
		String sql="update books set ISBN=?,TITLE=?,AUTHORID=?,COVERURL=?,"
				+ "INTRO=?,PUBLISHER=?,PUBLISHDATE=?,PRICE=? "
				+ "where BOOKID=?";
		PreparedStatement pstmt;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, book.getIsbn());
			pstmt.setString(2, book.getTitle());
			pstmt.setInt(3, book.getAuthorID());
			pstmt.setString(4, bookID + book.getCoverURL());
			pstmt.setString(5, book.getIntro());
			pstmt.setString(6, book.getPublisher());
			pstmt.setString(7, book.getPublishDate());
			pstmt.setInt(8, book.getPrice());
			pstmt.setInt(9, book.getBookID());
			pstmt.executeUpdate();
			DBSupport.close(pstmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return bookID;
	}
	
	public ArrayList<BookPreview> getBooks(String search) {
		ArrayList<BookPreview> booksPreview = new ArrayList<BookPreview>(); 
		Connection conn = DBSupport.createConnection();
		String sql = "select * from books";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				String title = rs.getString("TITLE");
				double searchWeight = SBC(search,title);
				if(searchWeight != 0) {
					// 匹配成功
					String author = getAuthorName(rs.getInt("AUTHORID"),conn);
					String coverURL = rs.getString("COVERURL");
					int bookID = rs.getInt("BOOKID");
					BookPreview book = new BookPreview(title,author,coverURL,bookID);
					book.searchWeight = searchWeight;
					booksPreview.add(book);
				}
			}
			DBSupport.close(pstmt);
			DBSupport.close(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return booksPreview;
	}

	public ArrayList<BookPreview> getAuthorBooks(int authorID) {
		ArrayList<BookPreview> booksPreview = new ArrayList<BookPreview>(); 
		Connection conn = DBSupport.createConnection();
		String sql = "select * from books where AUTHORID = ?";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, authorID);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				String title = rs.getString("TITLE");
				String author = getAuthorName(authorID,conn);
				String coverURL = rs.getString("COVERURL");
				int bookID = rs.getInt("BOOKID");
				BookPreview book = new BookPreview(title,author,coverURL,bookID);
				booksPreview.add(book);
			}
			DBSupport.close(pstmt);
			DBSupport.close(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return booksPreview;
	}
	
	public ArrayList<AuthorPreview> getAuthors(String search) {
		ArrayList<AuthorPreview> authorsPreview = new ArrayList<AuthorPreview>(); 
		Connection conn = DBSupport.createConnection();
		String sql = "select AUTHORID,NAME from authors";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while(rs.next()) {
				String name = rs.getString("NAME");
				int searchWeight = SCC(search,name);
				if(searchWeight != -1) {
					// 匹配成功
					int authorID = rs.getInt("AUTHORID");
					AuthorPreview author = new AuthorPreview(authorID,name);
					author.searchWeight = searchWeight;
					authorsPreview.add(author);
				}
			}
			DBSupport.close(pstmt);
			DBSupport.close(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return authorsPreview;
	}
	
	public Book getTargetBook(int bookID) {
		Book book = null;
		Connection conn = DBSupport.createConnection();
		String sql = "select * from books where BOOKID = ?";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, bookID);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				int authorID = rs.getInt("AUTHORID");
				Author author = getTargetAuthor(authorID);
				String isbn = rs.getString("ISBN");
				String title = rs.getString("TITLE");
				String authorName = getAuthorName(rs.getInt("AUTHORID"),conn);
				String coverURL = rs.getString("COVERURL");
				String intro = rs.getString("INTRO");
				String publisher = rs.getString("PUBLISHER");
				String publishDate = rs.getString("PUBLISHDATE");
				String authorIntro = getAuthorIntro(rs.getInt("AUTHORID"),conn);
				String avatarURL = author.getPhoto();
				int authorAge = author.getAge();
				String authorCountry = author.getCountry();
				int price = rs.getInt("PRICE");
				//TODO 修改封装对象
				book = new Book(bookID, authorID, isbn, title, authorName, coverURL, 
						intro, publisher, publishDate , avatarURL, authorAge, 
						authorCountry, authorIntro, price);
			}
			DBSupport.close(pstmt);
			DBSupport.close(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return book;
	}
	
	public Author getTargetAuthor(int authorID) {
		Author author = null;
		Connection conn = DBSupport.createConnection();
		String sql = "select * from authors where AUTHORID = ?";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, authorID);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				String name = rs.getString("NAME");
				int age = rs.getInt("AGE");
				String country = rs.getString("COUNTRY");
				String photo = rs.getString("PHOTO");
				String intro = rs.getString("INTRO");
				author = new Author(authorID, name, age, country, photo, intro);
			}
			DBSupport.close(pstmt);
			DBSupport.close(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return author;
	}
	
	public int SCC(String inputName,String sqlName) {
		inputName = inputName.toLowerCase();
		sqlName = sqlName.toLowerCase();
		int flag = sqlName.indexOf(inputName);
		return flag;
	}
	
	public double SBC(String inputBook,String sqlBook) {
		inputBook = inputBook.toLowerCase();
		sqlBook = sqlBook.toLowerCase();
		double flag = 0;
		int sqlLenght = sqlBook.length();
		int inputLenght = inputBook.length();
		String subString;
		for(int i = sqlLenght; i > 0; i--) {
			for(int j = 0;j < (inputLenght-i+1); j++) {
				subString = inputBook.substring(j, j+i);
				if(sqlBook.indexOf(subString) != -1) {
					flag += (1.0*subString.length()*subString.length())/(sqlLenght*inputLenght);
				}
			}
		}
		return flag;
	}
	
	public int createAuthor(Author author) {
		Connection conn = DBSupport.createConnection();
		String sql="insert into authors(NAME,AGE,COUNTRY,PHOTO,INTRO) values(?,?,?,?,?)";
		PreparedStatement pstmt;
		ResultSet rs;
		int authorCreateID = -1;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, author.getName());
			pstmt.setInt(2, author.getAge());
			pstmt.setString(3, author.getCountry());
			pstmt.setString(4, author.getPhoto());
			pstmt.setString(5, author.getIntro());
			pstmt.executeUpdate();
			DBSupport.close(pstmt);
			sql = "SELECT LAST_INSERT_ID()";
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			if (rs.next()) {  
				authorCreateID = rs.getInt(1);  
		    }
			DBSupport.close(pstmt);
			DBSupport.close(rs);
			sql="update authors set PHOTO=? where AUTHORID=?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, authorCreateID+author.getPhoto());
			pstmt.setInt(2, authorCreateID);
			pstmt.executeUpdate();
			DBSupport.close(pstmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return authorCreateID;
	}
	
	public int updateAuthor(Author author) {
		int authorID = author.getAuthorID();
		Connection conn = DBSupport.createConnection();
		String sql="update authors set NAME=?,AGE=?,COUNTRY=?,PHOTO=?,INTRO=? where AUTHORID=?";
		PreparedStatement pstmt;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, author.getName());
			pstmt.setInt(2, author.getAge());
			pstmt.setString(3, author.getCountry());
			pstmt.setString(4, authorID + author.getPhoto());
			pstmt.setString(5, author.getIntro());
			pstmt.setInt(6, author.getAuthorID());
			pstmt.executeUpdate();
			DBSupport.close(pstmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		return authorID;
	}

	public String getAuthorName(int authorID,Connection conn) {
		String name = "NAMELESS";
		String sql = "select NAME from authors where AuthorID = ?";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, authorID);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				name = rs.getString("NAME");
			}
			DBSupport.close(rs);
			DBSupport.close(pstmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return name;
	}
	
	public String getAuthorIntro(int authorID,Connection conn) {
		String intro = "";
		String sql = "select INTRO from authors where AuthorID = ?";
		PreparedStatement pstmt;
		ResultSet rs;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, authorID);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				intro = rs.getString("INTRO");
			}
			DBSupport.close(rs);
			DBSupport.close(pstmt);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return intro;
	}
	
	
}
