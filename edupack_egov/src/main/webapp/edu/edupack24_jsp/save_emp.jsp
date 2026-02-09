<%@ page contentType = "text/xml; charset=UTF-8" %>
<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro.java.xapi.data.*" %>
<%@ page import = "com.nexacro.java.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>                                                                         
<%@ include file="../connection_edu.jsp" %>
<%! 
    // Dataset value
    public String  dsGet(DataSet ds, int rowno, String colid) throws Exception
    {
        String value;
        value = ds.getString(rowno, colid);
        if( value == null )
            return "";
        else
            return value;
    } 
%>

<%
    int nErrorCode = 0;
    String strErrorMsg = "START";

    // HttpPlatformRequest
    // Http 요청으로부터 데이터(PlatformData)를 수신받는다.
    HttpPlatformRequest pReq = new HttpPlatformRequest(request);                                                                                                       
    pReq.receiveData();
    PlatformData in_pData = pReq.getData();

    VariableList in_varList = in_pData.getVariableList();
    String sVar1 = in_varList.getString("in_var1");
    DataSet ds = in_pData.getDataSet("in_emp");

    try {    
        /******* JDBC Connection *******/
        Connection conn = null;
        Statement  stmt = null;
        ResultSet  rs   = null;

        try {    
            conn = DriverManager.getConnection(url, id , pw);
            stmt = conn.createStatement();

            String SQL = "";
            int    i;        
            /******** DELETE ********/
            for( i = 0; i < ds.getRemovedRowCount(); i++ )
            {
                String sEmpID = ds.getRemovedData(i, "EMP_ID").toString();
                SQL = "DELETE FROM TBL_EMPLOYEES WHERE EMP_ID = '" + sEmpID + "'";
                stmt.executeUpdate(SQL);
            }

            /******** INSERT, UPDATE ********/
            for( i = 0; i < ds.getRowCount(); i++ )
            {
                int rowType = ds.getRowType(i);
                if( rowType == DataSet.ROW_TYPE_INSERTED )
                {
                    SQL = "INSERT INTO TBL_EMPLOYEES        	\n" +
                          "           ( EMP_ID,             			\n" +
                          "             EMP_NAME,           		\n" +
                          "             DEPT_CODE,          		\n" +
                          "             POSITION,          			\n" +
                          "             GENDER,             			\n" +
                          "             HIRE_DATE,          		\n" +
                          "             MARRIED,            			\n" +
                          "             SALARY,             			\n" +
                          "             SKILL,             			\n" +
                          "             HOBBY,              			\n" +
                          "             MEMO )              			\n" +
                          "     VALUES('" + dsGet(ds, i, "EMP_ID")    + "',	\n" +
                          "            '" + dsGet(ds, i, "EMP_NAME")  + "',	\n" +
                          "            '" + dsGet(ds, i, "DEPT_CODE") + "',	\n" +  
                          "            '" + dsGet(ds, i, "POSITION")  + "',	\n" +
                          "            '" + dsGet(ds, i, "GENDER")    + "',	\n" +                
                          "            '" + dsGet(ds, i, "HIRE_DATE") + "',	\n" +
                          "            '" + dsGet(ds, i, "MARRIED")   + "',	\n" +                
                          "            '" + dsGet(ds, i, "SALARY")    + "',	\n" +                
                          "            '" + dsGet(ds, i, "SKILL")     + "',	\n" +                
                          "            '" + dsGet(ds, i, "HOBBY")     + "',	\n" +                
                          "            '" + dsGet(ds, i, "MEMO")      + "')  ";                            
                            //System.out.println(">>> insert : "+SQL);
                }
                else if( rowType == DataSet.ROW_TYPE_UPDATED )
                {
                    String sOrgEmpID = ds.getSavedData(i, "EMP_ID").toString(); 
                    SQL = "UPDATE TBL_EMPLOYEES     \n" +
                          "   SET EMP_ID    = '" + dsGet(ds, i, "EMP_ID")    + "'	\n" +
                          "     , EMP_NAME  = '" + dsGet(ds, i, "EMP_NAME")  + "'	\n" +
                          "     , DEPT_CODE = '" + dsGet(ds, i, "DEPT_CODE") + "'\n" +  
                          "     , POSITION  = '" + dsGet(ds, i, "POSITION")  + "'	\n" +
                          "     , GENDER    = '" + dsGet(ds, i, "GENDER")    + "'	\n" +
                          "     , HIRE_DATE = '" + dsGet(ds, i, "HIRE_DATE") + "'	\n" +
                          "     , MARRIED   = '" + dsGet(ds, i, "MARRIED")   + "'	\n" +
                          "     , SALARY    = '" + dsGet(ds, i, "SALARY")    + "'	\n" +
                          "     , SKILL     = '" + dsGet(ds, i, "SKILL")     + "'		\n" +
                          "     , HOBBY     = '" + dsGet(ds, i, "HOBBY")     + "'	\n" +
                          "     , MEMO      = '" + dsGet(ds, i, "MEMO")      + "'	\n" +
                          " WHERE EMP_ID = '" + sOrgEmpID + "'";

                // System.out.println(">>> update : "+SQL);
                }                    
                stmt.executeUpdate(SQL);
            }
            //conn.commit();

        } 
        catch (SQLException e) {
            nErrorCode  = -1;
            strErrorMsg = e.getMessage();
        }    

        /******** JDBC Close ********/
        if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
        if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}

        nErrorCode  = 0;
        strErrorMsg = "SUCC";

    } 
    catch (Throwable th) {
        nErrorCode  = -1;
        strErrorMsg = th.getMessage();
    }
    
    // PlatformData 
    PlatformData out_pData = new PlatformData();

    VariableList out_varList = out_pData.getVariableList();
    out_varList.add("ErrorCode", nErrorCode);
    out_varList.add("ErrorMsg" , strErrorMsg);
    out_varList.add("out_var"  , sVar1);

    HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8");
    pRes.setData(out_pData);
    pRes.sendData();
%>
