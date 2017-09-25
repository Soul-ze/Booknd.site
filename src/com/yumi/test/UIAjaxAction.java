/**
 * 
 */
package com.yumi.test;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;
import com.opensymphony.xwork2.ActionSupport;

/**
 * @author bubbles
 *
 */

public class UIAjaxAction extends ActionSupport {

	private static final long serialVersionUID = -5336352203685314815L;
	/* 返回值为map对象 */
	private Map<String, Object> map;
	private File fileTest;      //接收这个上传的文件  
    private String fileTestFileName;     //Struts2提供的格式，在文件名后+FileName就是上传文件的名字
	private String fileTestContentType;
	private String HASH;
	private int bookID;
	private int authorID;
	private String search;
	BGService bgs = new BGService();
	
	public String searchBooks() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		String search = request.getParameter("search");
		int authorID = Integer.parseInt(request.getParameter("authorID"));
		ArrayList<BookPreview> booksPreview;
		map = new HashMap<String, Object>();
		
		if(authorID != -1) {
			// 进行作者指定书籍查询
			booksPreview = bgs.getAuthorBooks(authorID);
		}
		else {
			// 进行书名匹配模式查询
			booksPreview = bgs.getBooks(search);
		}
		
		
		BookComparator bookc = new BookComparator();
		booksPreview.sort(bookc);
		
		int size = 0;
		if(booksPreview.size() > 0) {
			// 有匹配结果
			size = booksPreview.size()>32?32:booksPreview.size();
			for(int i=0;i<size;i++) {
				map.put("book"+i, booksPreview.get(i));
			}
		}
		
		map.put("size",size);
		return SUCCESS;
	}
	
	public String searchAuthor() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		String search = request.getParameter("search");
		map = new HashMap<String, Object>();
		// TODO 对当前文本搜索作者匹配后返回封装数据(包括作者名和作者ID)
		ArrayList<AuthorPreview> auhtorsPreview = bgs.getAuthors(search);
		int size = 0;
		
		AuthorComparator authorc = new AuthorComparator();
		auhtorsPreview.sort(authorc);
		if(auhtorsPreview.size() > 0) {
			// 有匹配结果
			size = auhtorsPreview.size() > 5 ? 5:auhtorsPreview.size();
			for(int i=0;i<size;i++) {
				map.put("author"+i, auhtorsPreview.get(i));
			}
		}
		
		map.put("size", size);
		return SUCCESS;
	}
	
	public String getInfo() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		int bookID = Integer.parseInt(request.getParameter("bookID"));
		map = new HashMap<String, Object>();
		Book book = bgs.getTargetBook(bookID);
		map.put("book", book);
		return SUCCESS;
	}
	
	public String uploadCover() throws Exception {
		HttpServletRequest request=ServletActionContext.getRequest(); 
		String someHASH = request.getParameter("HASH");
		String[] str = { ".jpg", ".jpeg", ".bmp", ".gif",".png" };  
		String errorMess = "No error";
        //限定文件大小是4MB  
        if(fileTest == null || fileTest.length() > 4194304 ){  
        	errorMess = "文件不存在或超出大小";
        	System.out.println("errorMess");
        }  
        for (String s : str) {  
            if (fileTestFileName.endsWith(s)) {  
            	map = new HashMap<String, Object>();
            	String realPath = request.getServletContext().getRealPath("") + "/images";
                //String realPath = ServletActionContext.getServletContext().getRealPath("/images");//实际路径  
                File saveFile = new File(new File(realPath),someHASH+s);  //在该实际路径下实例化一个文件  
                //判断父目录是否存在  
                if(!saveFile.getParentFile().exists()){  
                    saveFile.getParentFile().mkdirs();
                }  
                map.put("URL", "images/"+someHASH+s);
                //执行文件上传  
                //FileUtils 类名 org.apache.commons.io.FileUtils;  
                //是commons-io包中的，commons-fileupload 必须依赖 commons-io包实现文件上次，实际上就是将一个文件转换成流文件进行读写  
                try{
                	FileUtils.copyFile(fileTest, saveFile);
                }
                catch(IOException e) {
                	e.printStackTrace();
                	errorMess = "存储文件失败";
                }
               
            }  
        }  
        map.put("Error",errorMess);
		return SUCCESS;
	}
	
	public String uploadAvatar() throws Exception {
		HttpServletRequest request=ServletActionContext.getRequest(); 
		String someHASH = request.getParameter("HASH");
		String[] str = { ".jpg", ".jpeg", ".bmp", ".gif",".png" };  
		String errorMess = "No error";
        //限定文件大小是4MB  
        if(fileTest == null || fileTest.length() > 4194304 ){  
        	errorMess = "文件不存在或超出大小";
        	System.out.println("errorMess");
        }  
        for (String s : str) {  
            if (fileTestFileName.endsWith(s)) {  
            	map = new HashMap<String, Object>();
            	String realPath = request.getServletContext().getRealPath("") + "/authors";
                //String realPath = ServletActionContext.getServletContext().getRealPath("/authors");//实际路径  
                File saveFile = new File(new File(realPath),someHASH+s);  //在该实际路径下实例化一个文件  
                //判断父目录是否存在  
                if(!saveFile.getParentFile().exists()){  
                    saveFile.getParentFile().mkdirs();
                }  
                map.put("URL", "authors/"+someHASH+s);
                //执行文件上传  
                //FileUtils 类名 org.apache.commons.io.FileUtils;  
                //是commons-io包中的，commons-fileupload 必须依赖 commons-io包实现文件上次，实际上就是将一个文件转换成流文件进行读写  
                try{
                	FileUtils.copyFile(fileTest, saveFile);
                }
                catch(IOException e) {
                	e.printStackTrace();
                	errorMess = "存储文件失败";
                }
            }  
        }  
        map.put("Error",errorMess);
		return SUCCESS;
	}
	
	public String uploadBook() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		Book book;
		Author author;
		int editMode = Integer.parseInt(request.getParameter("editMode"));
		int authorID = Integer.parseInt(request.getParameter("authorID"));
		int bookID = Integer.parseInt(request.getParameter("bookID"));
		String bookName = request.getParameter("bookName");
		String writerName = request.getParameter("writerName");
		String publisher = request.getParameter("publisher");
		String publishDate = request.getParameter("publishDate");
		String isbn = request.getParameter("isbn");
		int price = Integer.parseInt(request.getParameter("price"));
		String bookIntro = request.getParameter("bookIntro");
		String writerIntro = request.getParameter("writerIntro");
		int authorAge = Integer.parseInt(request.getParameter("authorAge"));
		String authorCountry = request.getParameter("authorCountry");
		String coverURL = request.getParameter("coverURL");
		String avatarURL = request.getParameter("avatarURL");
		int frequency = Integer.parseInt(request.getParameter("frequency"));
		int avatarFrequency = Integer.parseInt(request.getParameter("avatarFrequency"));
		
		String avatarPostfix = avatarURL.substring(avatarURL.lastIndexOf("."), avatarURL.length());
		
		author = new Author(authorID, writerName, authorAge, authorCountry, avatarPostfix, writerIntro);
		
		if(authorID == -1) {
			//创建作者，插入到作者表中，获取authorID
			authorID = bgs.createAuthor(author);
		}
		else {
			//已有作者，对作者信息进行更新
			authorID = bgs.updateAuthor(author);
		}
		
		String coverPostfix = coverURL.substring(coverURL.lastIndexOf("."), coverURL.length());

		book = new Book(bookID, authorID, isbn, bookName, writerName, coverPostfix, 
				bookIntro, publisher, publishDate , avatarPostfix, authorAge, 
				authorCountry, writerIntro, price);
		
		if(editMode == 0) {
			//为0则为添加书籍模式
			bookID = bgs.createBook(book);
			//TODO 更新bookID值
		}
		else {
			//为1则为编辑已有书籍模式
			bgs.updateBook(book);
		}
		
		if(frequency != -1) {
			//即更改了封面
			int lastIndex = coverURL.lastIndexOf(".");
			String newName = bookID + coverPostfix;
			String oldName = coverURL.substring(lastIndex-6, lastIndex) +  coverPostfix;
			String relativePath = request.getServletContext().getRealPath("");
			File bookCover = new File(relativePath + "/images/" + oldName);
			File targetCover = new File(relativePath + "/images/" + newName);
			if(targetCover.exists()) {
				targetCover.delete();
			}
			bookCover.renameTo(new File(relativePath + "/images/" + newName));
		}
		
		if(avatarFrequency != -1) {
			//即更改了头像
			int lastIndex = avatarURL.lastIndexOf(".");
			String newName = authorID + avatarPostfix;
			String oldName = avatarURL.substring(lastIndex-6, lastIndex) +  avatarPostfix;
			String relativePath = request.getServletContext().getRealPath("");
			File bookAvatar = new File(relativePath + "/authors/" + oldName);
			File targetAvatar = new File(relativePath + "/authors/" + newName);
			if(targetAvatar.exists()) {
				targetAvatar.delete();
			}
			bookAvatar.renameTo(new File(relativePath + "/authors/" + newName));
		}
			
		return SUCCESS;
	}

	public String getAuthorInfo() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		int authorID = Integer.parseInt(request.getParameter("authorID"));
		Author author = bgs.getTargetAuthor(authorID);
		map = new HashMap<String, Object>();
		map.put("author", author);
		return SUCCESS;
	}
	
	public String testJsonObject() throws Exception{
		map = new HashMap<String, Object>();
		BookPreview book = new BookPreview("title","author","coverURL",1234);
		System.out.println(book.title);
		System.out.println(book.author);
		System.out.println(book.coverURL);
		System.out.println(book.bookID);
		map.put("book1", book);
		map.put("state", "success");
		return SUCCESS;
	}

	class BookComparator implements Comparator<Object> {
		public int compare(Object o1, Object o2) {  
	        BookPreview p1 = (BookPreview) o1;  
	        BookPreview p2 = (BookPreview) o2;  
	        if (p1.searchWeight < p2.searchWeight)  
	            return 1;
	        else   
	            return -1;
	        
	    }
	}
	
	class AuthorComparator implements Comparator<Object> {
		public int compare(Object o1, Object o2) {  
	        AuthorPreview p1 = (AuthorPreview) o1;  
	        AuthorPreview p2 = (AuthorPreview) o2;  
	        if (p1.searchWeight < p2.searchWeight)  
	            return -1;
	        else 
	            return 1;
	    }
	}
	
	/**
	 * @return the map
	 */
	public Map<String, Object> getMap() {
		return map;
	}

	/**
	 * @param map the map to set
	 */
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	
	/**
	 * @return the fileTest
	 */
	public File getFileTest() {
		return fileTest;
	}

	/**
	 * @param fileTest the fileTest to set
	 */
	public void setFileTest(File fileTest) {
		this.fileTest = fileTest;
	}

	/**
	 * @return the fileTestFileName
	 */
	public String getFileTestFileName() {
		return fileTestFileName;
	}

	/**
	 * @param fileTestFileName the fileTestFileName to set
	 */
	public void setFileTestFileName(String fileTestFileName) {
		this.fileTestFileName = fileTestFileName;
	}

	/**
	 * @return the fileTestContentType
	 */
	public String getFileTestContentType() {
		return fileTestContentType;
	}

	/**
	 * @param fileTestContentType the fileTestContentType to set
	 */
	public void setFileTestContentType(String fileTestContentType) {
		this.fileTestContentType = fileTestContentType;
	}

	/**
	 * @return the hASH
	 */
	public String getHASH() {
		return HASH;
	}

	/**
	 * @param hASH the hASH to set
	 */
	public void setHASH(String hASH) {
		HASH = hASH;
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
	 * @return the search
	 */
	public String getSearch() {
		return search;
	}

	/**
	 * @param search the search to set
	 */
	public void setSearch(String search) {
		this.search = search;
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

}
