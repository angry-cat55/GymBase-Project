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
	  
		/******* SQL ************/
		String SQL;
		SQL  = "SELECT MST_CODE, DET_CODE as CODE , DET_NAME as NAME FROM TBL_COMMON_CODE WHERE MST_CODE IN ('POSITION','STATUS')";
		
		rs = stmt.executeQuery(SQL);
	  
		DataSet ds_pos = new DataSet("out_pos");
		ds_pos.addColumn("CODE", DataTypes.STRING, (short)10 );
		ds_pos.addColumn("NAME", DataTypes.STRING, (short)10 );
		
		DataSet ds_status = new DataSet("out_status");
		ds_status.addColumn("CODE", DataTypes.STRING, (short)10 );
		ds_status.addColumn("NAME", DataTypes.STRING, (short)10 );

		int row;
		while(rs.next())
		{
			if(rs.getString("MST_CODE").equals("POSITION")){
				row = ds_pos.newRow();
				ds_pos.set(row ,"CODE" ,rs.getString("CODE"));
				ds_pos.set(row ,"NAME" ,rs.getString("NAME"));
			}
			else{
				row = ds_status.newRow();
				ds_status.set(row ,"CODE" ,rs.getString("CODE"));
				ds_status.set(row ,"NAME" ,rs.getString("NAME"));
			}
		}
		  
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds_pos);
		out_pData.addDataSet(ds_status);

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
