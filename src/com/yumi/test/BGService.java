package com.yumi.test;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import com.mysql.jdbc.Connection;

public class BGService  {
		
	public List<String> getNames() {
		Connection conn = DBSupport.createConnection();
		String sql = "select * from testmytable";
		List<String> names = new ArrayList<String>();
		Statement s = DBSupport.getStatement(conn);
		ResultSet rs  = DBSupport.getResultSet(s, sql);
		try {
			while(rs.next()) {
				names.add(rs.getString("NAME"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		DBSupport.close(conn);
		DBSupport.close(s);
		DBSupport.close(rs);
		return names;
	}
	
}
