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
                this._setFormPosition(1000,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","30","20","156","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dataset 기능");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","30","85","550","255",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_ID\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:POSITION\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:SALARY\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:GENDER\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:MARRIED\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:SKILL\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:HOBBY\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:MEMO\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","30","357","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("컬럼 레코드 개수");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","199","357","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("컬럼 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","368","357","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("데이터 찾기 - 단일조건");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","537","357","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("데이터 찾기 - 다중조건");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00_00","706","357","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("데이터 목록 구하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","30","408","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("데이터 정렬");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","199","408","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("데이터 필터");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","368","408","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("필터 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","537","408","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("필터 후 레코드 검색");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00","706","408","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("LIKE 필터");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","875","414","40","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("a");
            obj.set_text("a");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01","30","459","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("평균 구하기");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_00","199","459","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("행 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_00_00","368","459","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("데이터 변경");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_00_00_00","537","459","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("변경 전 데이터 조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_00_00_00_00","706","459","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("특정 데이터들 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01","30","510","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제한 레코드 정보");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01_00","199","510","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("데이터 변경 여부");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01_00_00","368","510","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("리셋 or 클리어");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","597","86","388","255",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01_00_00_00","537","510","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("데이터 복사");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01_00_00_00_00","706","510","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("데이터 붙이기");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01_01","30","560","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("행 단위 복사");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_01_01_01_00","199","560","167","45",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("데이터 백개 입력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,720,this,function(p){});
            obj.set_mobileorientation("landscape");
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
        	var nColCnt = this.ds_emp.getColCount(); // == this.ds_emp.colcount;
        	var nRowCnt = this.ds_emp.getRowCount(); // == this.ds_emp.rowcount;

        	for (var i = 0; i < nColCnt; i++) {
        		var sColId = this.ds_emp.getColID(i); // i번째 인덱스의 컬럼을 읽어옴
        		trace(sColId);

        		var objCol = this.ds_emp.getColumnInfo(i); // 해당 컬럼의 정보 (id, type, size 등등)
        		trace(objCol.id + " : " + objCol.type + " : " + + objCol.size);
        	}

        	trace(nColCnt + " : " + nRowCnt);
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.ds_emp.addColumn("Col_CHK", "STRING", 10); // 사이즈의 기본값 : 256
        };

        this.btn02_onclick = function(obj,e)
        {
        	// 사원 번호(KR240)를 통해 이름 탐색
        	var nRow = this.ds_emp.findRow("EMP_ID", "KR240"); // 해당 행 인덱스를 반환 (없을 시 -1 반환)
        	if (nRow == -1) {
        		trace("일치하는 데이터가 없습니다.");
        	}
        	else {
        		var sName = this.ds_emp.getColumn(nRow, "EMP_NAME");
        		trace(sName);
        	}

        	var sName2 = this.ds_emp.lookup("EMP_ID", "KR240", "EMP_NAME"); // ~열이 ~인 행의 ~열 데이터를 반환하는 함수
        };

        this.btn02_00_onclick = function(obj,e)
        {
        	// 부서코드(40), 성별(여자)을 통해 이름 탐색
        	var nRow = this.ds_emp.findRowExpr("DEPT_CODE == '40' && GENDER == 'F'");
        	var sName = this.ds_emp.getColumn(nRow, "EMP_NAME");
        	trace(sName); // 처음 발견한 행에서 탐색 종료 -> 이후 행에서 동일한 조건의 이름이 있어도 찾지 못함
        };

        this.btn02_00_00_onclick = function(obj,e)
        {
        // 	for (var i = 0; i < this.ds_emp.rowcount; i++) {
        // 		var sDept = this.ds_emp.getColumn(i, "DEPT_CODE");
        // 		if (sDept == "40") {
        // 			var sName = this.ds_emp.getColumm(i);
        // 			trace(sName);
        // 		}
        // 	}

        	var arrRow = this.ds_emp.extractRows("DEPT_CODE == '40'");
        	for (var i = 0; i < arrRow.length; i++) {
        		var sName = this.ds_emp.getColumn(arrRow[i], "EMP_NAME");
        		trace(sName);
        	}


        };

        this.btn00_00_onclick = function(obj,e)
        {
        	this.ds_emp.keystring = ("S:+DEPT_CODE-HIRE_DATE");
        	// S : 정렬(쿼리의 ORDER BY), G : 그룹화(쿼리의 GROUP BY)
        	// + : 오름차순, - : 내림차순
        };

        this.btn00_00_00_onclick = function(obj,e)
        {
        	this.ds_emp.filter("DEPT_CODE == '40'");
        	// 필터 후 레코드 조회 등의 함수를 호출하면 필터된 쿼리의 데이터를 조사
        };

        this.btn00_00_00_00_onclick = function(obj,e)
        {
        	this.ds_emp.filter("");
        };

        this.btn00_00_00_00_00_onclick = function(obj,e)
        {
        	var nRow1 = this.ds_emp.getRowCount();
        	var nRow2 = this.ds_emp.getRowCountNF(); // 필터 전 데이터 조사
        	trace("필터 후(현재) 데이터 : " + nRow1 + ", 필터 전 데이터 : " + nRow2);
        };


        this.btn00_00_00_00_00_00_onclick = function(obj,e)
        {
        	var sText = this.edt00.value;
        	this.ds_emp.filter("EMP_NAME.toUpperCase().indexOf('" + sText.toUpperCase() + "') > -1");
        	// indexOf() :  해당 열 데이터에 '문자'가 있으면 그 인덱스를 반환, 없으면 -1 반환
        	// toUpperCase() : 해당 string을 모두 대문자로 변경
        };

        this.btn00_00_01_onclick = function(obj,e)
        {
        	var nAvg = this.ds_emp.getAvg("SALARY");
        	trace(nAvg);

        	var nAvg1 = this.ds_emp.getCaseAvg("GENDER == 'M'", "SALARY", 0, -1, false);
        	// 0(최상위)부터 -1(마지막)까지, false : 없는 데이터는 생략 (디폴트 = true);
        	var nAvg2 = this.ds_emp.getCaseAvg("GENDER == 'F'", "SALARY", 0, -1, false);
        	trace("남자 : " + nAvg1 + ", 여자 : " + nAvg2);
        };

        this.btn00_00_01_00_onclick = function(obj,e)
        {
        	var nRow = this.ds_emp.insertRow(this.ds_emp.rowposition); // 선택한 행의 인덱스에 새 행 추가
        	var nType = this.ds_emp.getRowType(nRow); // 행 인덱스 : 행 상태 번호
        	trace(nRow + " : " + nType);
        };


        this.btn00_00_01_00_00_onclick = function(obj,e)
        {
        	this.ds_emp.setColumn(this.ds_emp.rowposition, "EMP_NAME", "홍길동");
        	var nType = this.ds_emp.getRowType(this.ds_emp.rowposition);
        	trace(nType);
        };

        this.btn00_00_01_00_00_00_onclick = function(obj,e)
        {
        	var sCurName = this.ds_emp.getColumn(this.ds_emp.rowposition, "EMP_NAME");
        	var sOrgName = this.ds_emp.getOrgColumn(this.ds_emp.rowposition, "EMP_NAME");
        	// 데이터를 계속 바꿔도 원본(데이터셋)의 데이터만 저장함
        	trace("변경 전 : " + sOrgName + ", 변경 후 : " + sCurName);
        };

        this.btn00_00_01_00_00_00_00_onclick = function(obj,e)
        {
        	// 부서가 40인 데이터 삭제

        // 	for (var i = 0; i < this.ds_emp.rowcount; i++) {
        // 		var sDept = this.ds_emp.getColumn(i, "DEPT_CODE");
        // 		if (sDept == "40") {
        // 			this.ds_emp.deleteRow(i);
        // 		}
        // 	}
        // 이와 같이 위에서부터 아래로 반복문을 돌면, 인덱스가 꼬여서 제대로 삭제 처리가 안될  수 있음.
        // 그래서 아래와 같이 아래에서부터 위로 삭제해야 함.

        // 	for (var i = this.ds_emp.rowcount; i > 0; i--) {
        // 		var sDept = this.ds_emp.getColumn(i, "DEPT_CODE");
        // 		if (sDept == "40") {
        // 			this.ds_emp.deleteRow(i);
        // 		}
        // 	}

        // 	var arrRow = [0, 3, 6];
        // 	this.ds_emp.deleteMultiRows(arrRow);
        // 이처럼 특정 인덱스를 지정해서 멀티 삭제가 가능함.

        // 연습 : POSITION이 50인 사람 삭제
        	var arrRow = this.ds_emp.extractRows("POSITION == '50'");
        	this.ds_emp.deleteMultiRows(arrRow); // 배열로 삭제를 해도 아래 행부터 삭제 진행

        };

        this.btn00_00_01_01_onclick = function(obj,e)
        {
        	var nCnt = this.ds_emp.getDeletedRowCount();
        	var sName = this.ds_emp.getDeletedColumn(0, "EMP_NAME"); // 삭제된 레코드의 0번째 인덱스 정보 불러오기
        	trace(nCnt + " : " + sName);
        };

        this.btn00_00_01_01_00_onclick = function(obj,e)
        {
        	var rtn = this.fnCheckData(this.ds_emp);
        	if (rtn) {
        		alert("변경된 데이터가 있습니다. 그래도 종료하시겠습니까?");
        	}
        };

        // 데이터 변경 여부 체크
        this.fnCheckData = function(objDs)
        {
        	if (objDs.getDeletedRowCount() > 0) {
        		// 삭제된 거
        		return true;
        	}

        	for (var i = 0; i < this.ds_emp.rowcount; i++) {
        		var nType = this.ds_emp.getRowType(i);
        		if (nType ==2 || nType == 4) {
        			// 추가, 변경된 거
        			return true;
        		}
        	}
        	// 변경 안된 거
        	return false;
        }
        this.btn00_00_01_01_00_00_onclick = function(obj,e)
        {
        	// this.ds_emp.reset();
        	this.ds_emp.clearData();
        	// 실제 데이터의 삭제가 아닌 표면적인 데이터가 클리어됨
        	// this.ds_emp.clear();
        	// column의 정보까지 클리어
        	trace(this.ds_emp.saveXML());
        };

        this.btn00_00_01_01_00_00_00_onclick = function(obj,e)
        {
        	this.ds_temp.copyData(this.ds_emp); //  데이터 타입이 1번(수정X)인 데이터만 복사
        	// this.ds_temp.assign(this.ds_emp); => 기존 데이터셋을 그대로 복사
        	this.grd01.binddataset = "ds_temp";
        	this.grd01.createFormat();
        };

        this.btn00_00_01_01_00_00_00_00_onclick = function(obj,e)
        {
        	this.ds_temp.appendData(this.ds_emp);
        };

        this.btn00_00_01_01_01_onclick = function(obj,e)
        {
        	var nFromRow = this.ds_emp.findRow("EMP_ID", "KR240");
        	var nToRow = this.ds_temp.addRow();
        	var sCol = "DEPT_CODE=EMP_ID, POSITION=EMP_NAME";
        	this.ds_temp.copyRow(nToRow, this.ds_emp, nFromRow, sCol);
        };

        this.ds_emp_cancolumnchange = function(obj,e)
        {
        	// 변경될 때 실행됨
        	// 리턴값 가질 수 있음
        	trace("1 ds_emp_cancolumnchange");

        	var nRow = obj.findRowExpr("EMP_ID == '" + e.newvalue + "' && currow !=" + e.row);
        	if (nRow > -1) {
        		alert("데이터 중복");
        		return false
        		// false를 리턴하면 값이 변경되지 않음(oncolumnchanged 실행 X)
        		// 데이터 정합성 검사할 때 유용
        	}
        };

        this.ds_emp_oncolumnchanged = function(obj,e)
        {
        	// 변경된 후 실행됨
        	trace("2 ds_emp_oncolumnchanged");
        };

        // canrowposchange, onrowposchange는 행이 변경될 떄 실행


        this.btn00_00_01_01_01_00_onclick = function(obj,e)
        {
        	this.ds_emp.clearData();
        	this.ds_emp.enableevent = false;
        	for (var i = 0; i < 100; i++) {
        		this.ds_emp.addRow();
        		this.ds_emp.setColumn(i , "EMP_NAME", "Insert Data" + i.toString());
        		// 프로그램 내부적으로 can,onchanged 이벤트가 호출되므로 실행 속도가 느려짐
        	}
        	this.ds_emp.enableevent = true;
        	// 그래서 고반복 작업 앞뒤로 enableevent의 값을 변경하자.
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn02_00.addEventHandler("onclick",this.btn02_00_onclick,this);
            this.btn02_00_00.addEventHandler("onclick",this.btn02_00_00_onclick,this);
            this.btn00_00.addEventHandler("onclick",this.btn00_00_onclick,this);
            this.btn00_00_00.addEventHandler("onclick",this.btn00_00_00_onclick,this);
            this.btn00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_onclick,this);
            this.btn00_00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_00_onclick,this);
            this.btn00_00_00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_00_00_onclick,this);
            this.btn00_00_01.addEventHandler("onclick",this.btn00_00_01_onclick,this);
            this.btn00_00_01_00.addEventHandler("onclick",this.btn00_00_01_00_onclick,this);
            this.btn00_00_01_00_00.addEventHandler("onclick",this.btn00_00_01_00_00_onclick,this);
            this.btn00_00_01_00_00_00.addEventHandler("onclick",this.btn00_00_01_00_00_00_onclick,this);
            this.btn00_00_01_00_00_00_00.addEventHandler("onclick",this.btn00_00_01_00_00_00_00_onclick,this);
            this.btn00_00_01_01.addEventHandler("onclick",this.btn00_00_01_01_onclick,this);
            this.btn00_00_01_01_00.addEventHandler("onclick",this.btn00_00_01_01_00_onclick,this);
            this.btn00_00_01_01_00_00.addEventHandler("onclick",this.btn00_00_01_01_00_00_onclick,this);
            this.btn00_00_01_01_00_00_00.addEventHandler("onclick",this.btn00_00_01_01_00_00_00_onclick,this);
            this.btn00_00_01_01_00_00_00_00.addEventHandler("onclick",this.btn00_00_01_01_00_00_00_00_onclick,this);
            this.btn00_00_01_01_01.addEventHandler("onclick",this.btn00_00_01_01_01_onclick,this);
            this.btn00_00_01_01_01_00.addEventHandler("onclick",this.btn00_00_01_01_01_00_onclick,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("canrowposchange",this.ds_emp_canrowposchange,this);
        };
        this.loadIncludeScript("Work_Dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
