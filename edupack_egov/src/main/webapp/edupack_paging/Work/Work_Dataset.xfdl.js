(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Dataset");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","41","23","375","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dataset 기능");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","46","81","574","219",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:POSITION\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:SALARY\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:GENDER\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","46","325","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("컬럼, 레코드 갯수");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","46","383","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컬럼 추가");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","46","443","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("단일 조건 데이터");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","46","505","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("다수 조건 데이터");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","46","565","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("데이터 목록 구하기");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","300","383","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("데이터 정렬");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","300","325","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("데이터 필터");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","300","443","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("필터 초기화");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","300","505","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("원본 데이터");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","300","565","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("LIKE 필터");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","450","565","43","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","544","325","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("평균구하기");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","780","323","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("행 삽입");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","544","383","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("데이터 변경");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn13","544","443","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("변경 전 데이터");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn14","544","505","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("데이터 조건 삭제");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn15","544","565","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제한 레코드");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn16","780","383","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("데이터 변경 여부");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn17","780","443","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("reset,clear");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","640","81","570","224",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_temp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn18","780","506","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("데이터 복사");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn19","780","566","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Append Data");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn20","1020","326","193","274",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("로우 복사");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn21","50","623","193","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("데이터 10000");
            obj.set_font("20px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_Dataset.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var nColCnt=this.ds_emp.getColCount();	//this.ds_emp.colcount;
        	var nRowCnt=this.ds_emp.getRowCount();	//this.ds_emp.rowcount;

        	for(var i=0;i<nColCnt;i++){
        		var sColId=this.ds_emp.getColID(i);
        		var objCol=this.ds_emp.getColumnInfo(i);
        		trace(objCol.id+":"+objCol.type+":"+objCol.size);
        	}

        	trace(nColCnt+":"+nRowCnt)//필터된 개수를 가져감
        };


        this.btn01_onclick = function(obj,e)
        {
        	this.ds_emp.addColumn("COL_CHK","STRING",10);//칼럼명 타입 사이즈
        };

        this.btn02_onclick = function(obj,e)
        {
        	var nRow=this.ds_emp.findRow("EMP_ID","KR000");
        	if(nRow==-1){
        		trace("일치하는 데이터가 없습니다 ");
        	}
        	else{
        		var sName=this.ds_emp.getColumn(nRow,"EMP_NAME");
        		trace(sName);
        	}

        	var sName2=this.ds_emp.lookup("EMP_ID","KR240","EMP_NAME");//아이디가 KR240인 NAME컬럼을 찾는다

        };

        this.btn03_onclick = function(obj,e)
        {
        	//부서코드가 40,여자인 사람의 성명
        	var nRow=this.ds_emp.findRowExpr("DEPT_CODE=='40'&&GENDER=='F'");
        	var sName=this.ds_emp.getColumn(nRow,"EMP_NAME");
        	trace(sName);
        	};

        this.btn04_onclick = function(obj,e)
        {
        // 	for(var i=0;i<this.ds_emp.rowcount;i++){
        // 		var sDept=this.ds_emp.getColumn(i,"DEPT_CODE");
        // 		if(sDept=='40'){
        // 			var sName=this.ds_emp.getColumn(i);
        // 			trace(sName);
        // 		}
        // 	}

        	var arrRow=this.ds_emp.extractRows("DEPT_CODE=='40'");
        	for(var i=0;i<arrRow.length;i++){
        		var sName=this.ds_emp.getColumn(arrRow[i],"EMP_NAME");
        		trace(sName);
        	}
        };

        this.btn05_onclick = function(obj,e)
        {
        	this.ds_emp.keystring="S:+DEPT_CODE-HIRE_DATE";
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.ds_emp.filter("DEPT_CODE=='40'");
        };

        this.btn07_onclick = function(obj,e)
        {
        	this.ds_emp.filter("");
        };

        this.btn08_onclick = function(obj,e)
        {
        	var nRow1=this.ds_emp.getRowCount();
        	var nRow2=this.ds_emp.getRowCountNF();//NF는 필터된 내용 포함해서

        	trace(nRow1+':'+nRow2);
        };


        this.btn09_onclick = function(obj,e)
        {
        	var sText=this.edt00.value;
        	this.ds_emp.filter("EMP_NAME.toUpperCase().indexOf('"+ sText.toUpperCase() +"') > -1");

        };

        this.btn10_onclick = function(obj,e)
        {
        	var nAvg=this.ds_emp.getAvg("SALARY");
        	trace(nAvg);
        	var nAvg1=this.ds_emp.getCaseAvg("GENDER=='M'","SALARY",0,-1,false);//3번째 인자 범위0(처음),-1(마지막),false까지 붙이면 합쳐서 평균
        	var nAvg2=this.ds_emp.getCaseAvg("GENDER=='F'","SALARY");
        	trace(nAvg1+":"+nAvg2);
        };

        this.btn11_onclick = function(obj,e)
        {
        	var nRow=this.ds_emp.insertRow(this.ds_emp.rowposition);
        	var nType=this.ds_emp.getRowType(nRow);
        	trace(nRow+":"+nType);
        };

        this.btn12_onclick = function(obj,e)
        {
        	this.ds_emp.setColumn(this.ds_emp.rowposition,"EMP_NAME","유태식");
        	var nType=this.ds_emp.getRowType(this.ds_emp.rowposition);
        	trace(nType);
        };

        this.btn13_onclick = function(obj,e)
        {
        	var sCurName=this.ds_emp.getColumn(this.ds_emp.rowposition,"EMP_NAME");
        	var sOrgName=this.ds_emp.getOrgColumn(this.ds_emp.rowposition,"EMP_NAME");
        	trace(sCurName+":"+sOrgName);
        };

        this.btn14_onclick = function(obj,e)
        {
        // 	var nCnt=this.ds_emp.rowcount;
        // 	for(var i=nCnt;i>=0;i--){
        // 		var sDept=this.ds_emp.getColumn(i,"DEPT_CODE");
        // 		if(sDept=="40"){
        // 			this.ds_emp.deleteRow(i);
        // 	}
        //
        // 		var nCnt=this.ds_emp.rowcount;
        // 	for(var i=nCnt;i>=0;i--){
        // 		var sDept=this.ds_emp.getColumn(i,"DEPT_CODE");
        // 		if(sDept=="40"){
        // 			this.ds_emp.deleteRow(i);
        // 	}

        	//포지션이 50인 사람 지욱
        	var arrRow=this.ds_emp.extractRows("POSITION=='50'");
        	this.ds_emp.deleteMultiRows(arrRow);
        	//this.ds_emp.filter("POSITION=='50'");
        	//this.ds_emp.deleteAll();
        	//this.ds_emp.filter("");

        };

        this.btn15_onclick = function(obj,e)
        {
        	var nCnt=this.ds_emp.getDeletedRowCount();
        	var sName=this.ds_emp.getDeletedColumn(0,"EMP_NAME");
        	trace(nCnt+":"+sName);
        };

        this.btn16_onclick = function(obj,e)
        {
        	var rtn=this.fnCheckData(this.ds_emp);
        	if(rtn){
        		alert("변경된 데이터가 있습니다. 그래도 종료하시겠습니까?");
        	}
        };

        //데이터 변경 여부 체크
        this.fnCheckData=function(objDS)
        {
        	if(objDS.getDeletedRowCount()>0){
        		//변경된거
        		return true;
        	}
        	for(var i=0;i<objDS.rowcount;i++){
        		var nType=objDS.getRowType(i);
        		if(nType==2||nType==4){
        			//변경된거
        			return true;
        		}
        	}
        	//변경 안된거
        	return false;
        }

        this.btn17_onclick = function(obj,e)
        {
        /*	this.ds_emp.reset();*/
        /*	this.ds_emp.clearData();*///데이터 틀은 있음
        	this.ds_emp.clear();//데이터 틀까지 삭제

        	trace(this.ds_emp.saveXML());//데이터를 XML형태로 확인
        };

        this.btn18_onclick = function(obj,e)
        {
        	this.ds_temp.copyData(this.ds_emp); //this.ds_temp.assign(this.ds_emp); 입력 변경 삭제등등의 데이터까지 복사
        	this.grd01.binddataset="ds_temp";//아닐때는 그냥 보이는 자료만 복사
        	this.grd01.createFormat();//스크리브에서 그리드에 자동적으로 디자인을 생성시키는 것
        };



        this.btn19_onclick = function(obj,e)
        {
        	this.ds_temp.appendData(this.ds_emp);
        };


        this.btn20_onclick = function(obj,e)
        {
        	var nFromRow=this.ds_emp.findRow("EMP_ID","KR240");
        	var nToRow=this.ds_temp.addRow();
        	var sCol="DEPT_CODE=EMP_ID, POSITION=EMP_NAME";
        	this.ds_temp.copyRow(nToRow,this.ds_emp,nFromRow,sCol);
        };


        this.ds_emp_cancolumnchange = function(obj,e)
        {
        	trace("111-ds_emp_cancolumnchange");

        	var nRow=obj.findRowExpr("EMP_ID == '"+e.newvalue+"' && currow !=" + e.row);
        	if(nRow > -1){
        		alert("데이터 중복");
        		return false;
        	}
        };

        this.ds_emp_oncolumnchanged = function(obj,e)
        {
        	trace("222-ds_emp_oncolumnchange");
        };

        this.btn21_onclick = function(obj,e)
        {
        	this.ds_emp.clearData();
        	this.ds_emp.enableevent=false;//안넣으면 매우 느려짐
        	for(var i=0; i<10000;i++){
        		this.ds_emp.addRow();
        		this.ds_emp.setColumn(i,"EMP_NAME","Insert Data"+i.toString());
        	}
        	this.ds_emp.enableevent=true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.btn07.addEventHandler("onclick",this.btn07_onclick,this);
            this.btn08.addEventHandler("onclick",this.btn08_onclick,this);
            this.btn09.addEventHandler("onclick",this.btn09_onclick,this);
            this.edt00.addEventHandler("onchanged",this.edt00_onchanged,this);
            this.btn10.addEventHandler("onclick",this.btn10_onclick,this);
            this.btn11.addEventHandler("onclick",this.btn11_onclick,this);
            this.btn12.addEventHandler("onclick",this.btn12_onclick,this);
            this.btn13.addEventHandler("onclick",this.btn13_onclick,this);
            this.btn14.addEventHandler("onclick",this.btn14_onclick,this);
            this.btn15.addEventHandler("onclick",this.btn15_onclick,this);
            this.btn16.addEventHandler("onclick",this.btn16_onclick,this);
            this.btn17.addEventHandler("onclick",this.btn17_onclick,this);
            this.btn18.addEventHandler("onclick",this.btn18_onclick,this);
            this.btn19.addEventHandler("onclick",this.btn19_onclick,this);
            this.btn20.addEventHandler("onclick",this.btn20_onclick,this);
            this.btn21.addEventHandler("onclick",this.btn21_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
        };
        this.loadIncludeScript("Work_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
