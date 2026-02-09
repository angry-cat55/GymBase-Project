<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>
<%@ include file="../connection_edu.jsp" %>
<%
// PlatformData
PlatformData out_pData = new PlatformData();
String slayout= (request.getParameter("layout") == null) ? "" : request.getParameter("layout");
	
int    nErrorCode  = 0;
String strErrorMsg = "START";

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
	
	try { 
		conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
	  
		/******* SQL ************/
		String SQL;
		SQL  = "SELECT EMP_ID    \n" +
			   "     , EMP_NAME  \n" +
			   "     , DEPT_CODE    \n" +
			   "     , POSITION     \n" +
			   "     , GENDER     \n" +
			   "     , HIRE_DATE  \n" +
			   "     , MARRIED    \n" +
			   "     , SALARY     \n" +
			   "     , MEMO       \n" +
			   "  FROM TBL_EMPLOYEES     \n" +
			   " WHERE EMP_ID = '11'        \n" ;
		
		SQL += " ORDER BY DEPT_CODE, EMP_NAME";
		
		rs = stmt.executeQuery(SQL);
	  
		DataSet ds = new DataSet("out_emp");
		if(slayout.equals("layout"))
		{
			ds.addColumn("EMP_ID" 	  ,DataTypes.STRING  ,(short)10 );
			ds.addColumn("EMP_NAME"  ,DataTypes.STRING  ,(short)50 );
			ds.addColumn("DEPT_CODE"    ,DataTypes.STRING  ,(short)10 );
			ds.addColumn("POSITION"     ,DataTypes.STRING  ,(short)10 );
			ds.addColumn("GENDER"     ,DataTypes.STRING  ,(short)10 );
			ds.addColumn("HIRE_DATE"  ,DataTypes.DATE    ,(short)10 );
			ds.addColumn("MARRIED"    ,DataTypes.STRING  ,(short)10 );
			ds.addColumn("SALARY"     ,DataTypes.INT     ,(short)10 );
			ds.addColumn("MEMO"       ,DataTypes.STRING  ,(short)10 );
		}		
		while(rs.next())
		{
			int row = ds.newRow();
			ds.set(row ,"EMP_ID"       ,rs.getString("EMP_ID")  );
			ds.set(row ,"EMP_NAME"     ,rs.getString("EMP_NAME"));
			ds.set(row ,"DEPT_CODE"       ,rs.getString("DEPT_CODE")  );
			ds.set(row ,"POSITION"        ,rs.getString("POSITION")   );
			ds.set(row ,"GENDER"        ,rs.getString("GENDER")   );
			ds.set(row ,"HIRE_DATE"     ,rs.getString("HIRE_DATE"));
			ds.set(row ,"MARRIED"       ,rs.getString("MARRIED")  );
			ds.set(row ,"SALARY"        ,rs.getString("SALARY")   );
			ds.set(row ,"MEMO"          ,rs.getString("MEMO")     );
		}
		  
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);

		// #2 dataset -> PlatformData
		//DataSetList dsList = out_pData.getDataSetList();
		//dsList.add(ds);

		nErrorCode  = 0;
		strErrorMsg = "SUCC";
		
	} catch (SQLException e) {
		nErrorCode = -1;
		strErrorMsg = e.getMessage();
	}    
	
	/******** JDBC Close ********/
	if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
			
	} catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
}

VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);


/*
Variable varErrCD = new Variable("ErrorCode");
varErrCD.set(nErrorCode);

Variable varErrMSG = new Variable("ErrorMsg");
varErrMSG.set(strErrorMsg);

out_pData.addVariable(varErrCD);
out_pData.addVariable(varErrMSG);
*/

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
