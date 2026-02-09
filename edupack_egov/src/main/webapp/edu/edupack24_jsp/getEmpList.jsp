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
	
int    nErrorCode  = 0;
String strErrorMsg = "START";

HttpPlatformRequest pReq = new HttpPlatformRequest(request);
pReq.receiveData();
PlatformData in_pData = pReq.getData();

VariableList in_varList = in_pData.getVariableList();
String sStatus   = in_varList.getString("pStatus");
String sName     = in_varList.getString("pName");
String sDept     = in_varList.getString("pDept");
String sDateFrom = in_varList.getString("pDateFrom");
String sDateTo   = in_varList.getString("pDateTo");

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
		SQL  = "SELECT A.EMP_ID    \n" +
			   "     , A.EMP_NAME  \n" +
			   "     , A.DEPT_CODE    \n" +
			   "     , B.DEPT_NAME  \n" +
			   "     , A.POSITION     \n" +
			   "     , A.GENDER     \n" +
			   "     , A.HIRE_DATE  \n" +
			   "     , A.MEMO       \n" +
			   "     , A.PHONE_NO    \n" +
			   "     , A.EMAIL     	\n" +
			   "     , A.STATUS    	\n" +
			   "     , '0' AS CHK   \n" +
			   "  FROM TBL_SYS_EMP A     \n" +
			   "     , TBL_DEPARTMENT B    " +
			   " WHERE A.DEPT_CODE = B.DEPT_CODE        \n" ;		
		
		if(sStatus != null && sStatus.length() != 0 && !sStatus.equals("undefined") && !sStatus.equals("ALL"))	// ALL:전체 선택시
		{
			SQL += " AND A.STATUS = '" + sStatus + "'";
		}
		if(sName != null && sName.length() != 0 && !sName.equals("undefined"))
		{
			SQL += " AND A.EMP_NAME like '%" + sName + "%'";
		}
		if(sDept != null && sDept.length() != 0 && !sDept.equals("undefined"))
		{
			SQL += " AND B.DEPT_NAME like '%" + sDept + "%'";
		}
		if(sDateFrom != null && sDateFrom.length() != 0 && !sDateFrom.equals("undefined"))
		{
			SQL += " AND A.HIRE_DATE >= '" + sDateFrom + "'";
		}
		if(sDateTo != null && sDateTo.length() != 0 && !sDateTo.equals("undefined"))
		{
			SQL += " AND A.HIRE_DATE <= '" + sDateTo + "'";
		}
				   
		SQL += " ORDER BY B.DEPT_NAME, A.POSITION, A.EMP_NAME";
		
System.out.println("==========================================");		
System.out.println(SQL);		
System.out.println("==========================================");		
		
		rs = stmt.executeQuery(SQL);
	  
		DataSet ds = new DataSet("out_emp");
		ds.addColumn("EMP_ID" 	  ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("EMP_NAME"  ,DataTypes.STRING  ,(short)50 );
		ds.addColumn("DEPT_CODE"    ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("DEPT_NAME"  ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("POSITION"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("GENDER"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("HIRE_DATE"  ,DataTypes.DATE    ,(short)10 );
		ds.addColumn("MEMO"       ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("PHONE_NO"   ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("EMAIL"      ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("STATUS"     ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("CHK"        ,DataTypes.STRING  ,(short)10 );
			
		while(rs.next())
		{
			int row = ds.newRow();
			ds.set(row ,"EMP_ID"       ,rs.getString("EMP_ID")  );
			ds.set(row ,"EMP_NAME"     ,rs.getString("EMP_NAME"));
			ds.set(row ,"DEPT_CODE"       ,rs.getString("DEPT_CODE")  );
			ds.set(row ,"DEPT_NAME"     ,rs.getString("DEPT_NAME")  );
			ds.set(row ,"POSITION"        ,rs.getString("POSITION")   );
			ds.set(row ,"GENDER"        ,rs.getString("GENDER")   );
			ds.set(row ,"HIRE_DATE"     ,rs.getString("HIRE_DATE"));
			ds.set(row ,"MEMO"          ,rs.getString("MEMO")     );
			ds.set(row ,"PHONE_NO"      ,rs.getString("PHONE_NO") );
			ds.set(row ,"EMAIL"         ,rs.getString("EMAIL")    );
			ds.set(row ,"STATUS"        ,rs.getString("STATUS")   );
			ds.set(row ,"CHK"           ,rs.getString("CHK")      );
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
