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

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
	
	try { 
		conn = DriverManager.getConnection(url, id , pw);
		stmt = conn.createStatement();
		
		//=============================
		//저장 처리 안함
		//=============================
		
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

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
