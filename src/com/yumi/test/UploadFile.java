package com.yumi.test;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class UploadFile extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2167189981531527336L;

	private File fileTest;      //接收这个上传的文件  
    private String fileTestFileName;     //Struts2提供的格式，在文件名后+FileName就是上传文件的名字
	private String fileTestContentType;
	
	private Map<String, Object> map;
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

	public String uploadFile() throws Exception {
		String[] str = { ".jpg", ".jpeg", ".bmp", ".gif",".png" };  
        //限定文件大小是4MB  
        if(fileTest == null || fileTest.length() > 4194304 ){  
        	System.out.println("Error1");
        }  
        for (String s : str) {  
            if (fileTestFileName.endsWith(s)) {  
            	map = new HashMap<String, Object>();
                String realPath = ServletActionContext.getServletContext().getRealPath("/images");//实际路径  
                File saveFile = new File(new File(realPath),fileTestFileName);  //在该实际路径下实例化一个文件  
                //判断父目录是否存在  
                if(!saveFile.getParentFile().exists()){  
                    saveFile.getParentFile().mkdirs();
                }  
                map.put("URL", realPath);
                //执行文件上传  
                //FileUtils 类名 org.apache.commons.io.FileUtils;  
                //是commons-io包中的，commons-fileupload 必须依赖 commons-io包实现文件上次，实际上就是将一个文件转换成流文件进行读写  
                
                try{
                	FileUtils.copyFile(fileTest, saveFile);
                	
                }
                catch(IOException e) {
                	e.printStackTrace();
                }
               
            }  
        }  
		return SUCCESS;
	}
	   
	
}
