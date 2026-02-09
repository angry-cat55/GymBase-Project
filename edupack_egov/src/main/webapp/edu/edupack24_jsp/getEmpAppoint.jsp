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
String sEmpID = in_varList.getString("pEmpID");

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
		SQL  = "SELECT EMP_ID, APPOINT_DATE, APPOINT_TYPE, MEMO, START_DATE, DET_NAME AS APPOINT_TYPE_NAME	\n";
		SQL += "  FROM TBL_SYS_EMP_APPOINT A, TBL_COMMON_CODE B		\n";
		SQL += " WHERE A.APPOINT_TYPE = B.DET_CODE AND B.MST_CODE = 'APPOINT' AND EMP_ID = '" + sEmpID + "'";
		SQL += "ORDER BY APPOINT_DATE, APPOINT_TYPE		";
		
		
		rs = stmt.executeQuery(SQL);
	  
		DataSet ds = new DataSet("out_appoint");
		ds.addColumn("EMP_ID" 	   , DataTypes.STRING  ,(short)10 );
		ds.addColumn("APPOINT_DATE", DataTypes.DATE    ,(short)50 );
		ds.addColumn("APPOINT_TYPE", DataTypes.STRING  ,(short)10 );
		ds.addColumn("APPOINT_TYPE_NAME", DataTypes.STRING  ,(short)10 );
		ds.addColumn("MEMO"        , DataTypes.STRING  ,(short)10 );
		ds.addColumn("START_DATE"  , DataTypes.DATE    ,(short)10 );
			
		while(rs.next())
		{
			int row = ds.newRow();
			ds.set(row ,"EMP_ID"     , rs.getString("EMP_ID")  );
			ds.set(row ,"APPOINT_DATE", rs.getString("APPOINT_DATE")  );
			ds.set(row ,"APPOINT_TYPE", rs.getString("APPOINT_TYPE")  );
			ds.set(row ,"APPOINT_TYPE_NAME", rs.getString("APPOINT_TYPE_NAME")  );
			ds.set(row ,"MEMO"        , rs.getString("MEMO"));
			ds.set(row ,"START_DATE"  , rs.getString("START_DATE")  );
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
