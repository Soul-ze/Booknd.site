package com.yumi.test;
import java.sql.*;

import com.mysql.jdbc.Connection;

public class DBSupport {
	public static Connection createConnection() {
		Connection conn = null;
		String url="jdbc:mysql://localhost:3307/testmysql",
				username="root",
				password="KXqaqnbklkOetDA1";
				
		try {
			Class.forName("com.mysql.jdbc.Driver"); //加载MYSQL JDBC驱动程序
			conn = (Connection) DriverManager.getConnection(url, username, password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
	
	public static Statement getStatement(Connection conn){  
        Statement s=null;  
        try{  
            s = conn.createStatement();
        }catch (Exception e){  
            e.printStackTrace();  
        }  
        return s;  
    }  
	
	public static ResultSet getResultSet(Statement s,String mysql) {
		ResultSet rs = null;
		try {
			rs = s.executeQuery(mysql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	
	public static void close(Connection conn){  
        if(conn == null){  
            return;  
        }  
        try{  
            conn.close();  
            conn=null;  
        }catch (Exception e){  
            e.printStackTrace();  
        }  
    }
	
	public static void close(Statement s){  
        try{  
            s.close();
            s=null;  
        }catch(Exception e){  
            e.printStackTrace();  
        }  
    }
	
	public  static void close(ResultSet rs){  
        try{  
            rs.close();  
            rs=null;  
        }catch (Exception e){  
            e.printStackTrace();  
        }  
    }
	
}
