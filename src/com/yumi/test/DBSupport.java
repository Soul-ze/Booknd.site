package com.yumi.test;
import java.sql.*;

import com.mysql.jdbc.Connection;

public class DBSupport {
	public static Connection createConnection() {
		Connection conn = null;
		/*****填写数据库相关信息(请查找数据库详情页)*****/
		/*
		String connName="jdbc:mysql://localhost:3307/testmysql?useUnicode=true&useSSL=true",
				username="root",
				password="KXqaqnbklkOetDA1";
		*/
		try {
			Class.forName("com.mysql.jdbc.Driver"); //加载MYSQL JDBC驱动程序
			conn = (Connection) DriverManager.getConnection(connName, username, password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
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
