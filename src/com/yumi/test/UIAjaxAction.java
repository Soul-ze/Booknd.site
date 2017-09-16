/**
 * 
 */
package com.yumi.test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
// import javax.servlet.http.HttpServletRequest;

// import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

/**
 * @author bubbles
 *
 */



public class UIAjaxAction extends ActionSupport {

	private static final long serialVersionUID = -5336352203685314815L;
	/* 返回值为map对象 */
	private Map<String, Object> map;
	String test;
	
	BGService bgs = new BGService();
	
	public String login() throws Exception {
		// HttpServletRequest request = ServletActionContext.getRequest();
		// userName = request.getParameter("userName");
		// test = request.getParameter("password");
		

		int flag = 1;
		
		map = new HashMap<>();
		if(flag == 1) {
			map.put("result", "success");
			return SUCCESS;
		}
		else {
			map.put("result", "fail");
			return ERROR;
		}
	}

	public String queryNameFromMysql() throws Exception {
		map = new HashMap<>();
		List<String> names;
		
		names = bgs.getNames();
		for(int i=0;i<names.size();i++) {
			map.put("name"+i, names.get(i));
		}
		map.put("size", names.size());
		return SUCCESS;
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
	
}
