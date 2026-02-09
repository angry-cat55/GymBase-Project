<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page contentType = "text/html; charset=UTF-8" %>
<%@ include file="../connection_edu.jsp" %>
<%

HttpPlatformRequest pReq = new HttpPlatformRequest(request);
pReq.receiveData();
PlatformData in_pData = pReq.getData();
VariableList in_varList = in_pData.getVariableList();
String deptCode = in_varList.getString("deptCode");
String empName  = in_varList.getString("empName");
String empId    = in_varList.getString("empId");

int    nErrorCode = 0;
String sErrorMsg  = "";

//Response PlatformData
PlatformData out_pData = new PlatformData();

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	
	try { 
		conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
	  
		/******* SQL ************/
       /******* SQL ************/
        String SQL;
        SQL  = "SELECT EMP_ID             		\n" +
                     "                ,EMP_NAME          	\n" +
                     "                ,DEPT_CODE      		\n" +
                     "                ,POSITION           		\n" +
                     "                ,GENDER             		\n" +
                     "                ,HIRE_DATE          		\n" +
                     "                ,MARRIED            		\n" +
                     "                ,SALARY             		\n" +
                     "                ,MEMO               		\n" +
                     "                ,SKILL              		\n" +
                     "                ,HOBBY              		\n" +
                     "    FROM TBL_EMPLOYEES 	\n" +
                     " WHERE 1=1                		\n" ;
        
        if(deptCode != null && deptCode.length() != 0 && !deptCode.equals("undefined"))
        {
            SQL += "AND DEPT_CODE = '" + deptCode + "'";
        }
        if(empName != null && empName.length() != 0 && !empName.equals("undefined"))
        {
            SQL += "AND EMP_NAME LIKE '%" + empName + "%'";
        }
        if(empId != null && empId.length() != 0 && !empId.equals("undefined"))
        {
            SQL += "AND EMP_ID = '" + empId + "'";
        }
        SQL += " ORDER BY DEPT_CODE, EMP_NAME";
        
        ResultSet rs = stmt.executeQuery(SQL);
      
        DataSet ds = new DataSet("out_emp");
        ds.addColumn("EMP_ID",    DataTypes.STRING, 5);
        ds.addColumn("EMP_NAME",  DataTypes.STRING, 50);
        ds.addColumn("DEPT_CODE", DataTypes.STRING, 5);
        ds.addColumn("POSITION",  DataTypes.STRING, 5);
        ds.addColumn("HIRE_DATE", DataTypes.DATE,   20);
        ds.addColumn("SALARY",    DataTypes.INT,    12);
        ds.addColumn("GENDER",    DataTypes.STRING, 1);
        ds.addColumn("MARRIED",   DataTypes.STRING, 10);
        ds.addColumn("SKILL",     DataTypes.STRING, 50);
        ds.addColumn("HOBBY",     DataTypes.STRING, 50);
        ds.addColumn("MEMO",      DataTypes.STRING, 2000);
            
        while(rs.next())
        {
            int row = ds.newRow();
            ds.set(row, "EMP_ID",     rs.getString("EMP_ID"));
            ds.set(row, "EMP_NAME",   rs.getString("EMP_NAME"));
            ds.set(row, "DEPT_CODE",  rs.getString("DEPT_CODE"));
            ds.set(row, "POSITION",   rs.getString("POSITION"));
            ds.set(row, "HIRE_DATE",  rs.getString("HIRE_DATE"));
            ds.set(row, "SALARY",     rs.getString("SALARY"));
            ds.set(row, "GENDER",     rs.getString("GENDER"));
            ds.set(row, "MARRIED",    rs.getString("MARRIED"));
            ds.set(row, "SKILL",      rs.getString("SKILL"));
            ds.set(row, "HOBBY",      rs.getString("HOBBY"));
            ds.set(row, "MEMO",       rs.getString("MEMO"));
        }		
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);

		// #2 dataset -> PlatformData
		//DataSetList dsList = out_pData.getDataSetList();
		//dsList.add(ds);

		nErrorCode  = 0;
		sErrorMsg = "Success";
		
	} catch (SQLException e) {
		nErrorCode = -1;
		sErrorMsg  = e.getMessage();
	}    
	
	/******** JDBC Close ********/
	if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; sErrorMsg = e.getMessage();}
	if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; sErrorMsg = e.getMessage();}
			
	} catch (Throwable th) {
		nErrorCode = -1;
		sErrorMsg = th.getMessage();
}

VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , sErrorMsg);

/*
Variable varErrCD = new Variable("ErrorCode");
varErrCD.set(nErrorCode);

Variable varErrMSG = new Variable("ErrorMsg");
varErrMSG.set(sErrorMsg);

out_pData.addVariable(varErrCD);
out_pData.addVariable(varErrMSG);
*/

PlatformResponse pRes = new PlatformResponse(response.getOutputStream(), PlatformType.CONTENT_TYPE_JSON);
pRes.setData(out_pData);
pRes.sendData();
%>