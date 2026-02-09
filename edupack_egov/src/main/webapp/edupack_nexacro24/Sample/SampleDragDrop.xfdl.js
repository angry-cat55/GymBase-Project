(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleDragDrop");
            this.set_titletext("그리드 drag & drop");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "(주)가온누리엠 (4108500)","Column1" : "시내","Column2" : "M7106 (41085900)","Column3" : "대화역","Column4" : "서울역.YTN","Column5" : "유출입"},{"Column0" : "BRT (1100200)","Column1" : "시내","Column2" : "471 (11002001)","Column3" : "은평뉴타운공영차고지","Column4" : "AT센터양재꽃시장","Column5" : "미유출"},{"Column0" : "BRT (1100201)","Column1" : "시내","Column2" : "701 (11002002)","Column3" : "은평뉴타운공영차고지","Column4" : "종로2가","Column5" : "미유출"},{"Column0" : "BRT (1100202)","Column1" : "시내","Column2" : "N37 (11002003)","Column3" : "송파공영차고지(경유)","Column4" : "은평뉴타운10단지(중)","Column5" : "미유출"},{"Column0" : "강인교통 (2831900)","Column1" : "시내","Column2" : "302 (28040002)","Column3" : "송내역","Column4" : "왕산차고지","Column5" : "미유출"},{"Column0" : "강인여객 (2830100)","Column1" : "시내","Column2" : "103 (28030014)","Column3" : "동춘동종점","Column4" : "동춘동종점","Column5" : "미유출"},{"Column0" : "강인여객 (2830101)","Column1" : "시내","Column2" : "103-1 (28030020)","Column3" : "동춘동종점","Column4" : "동춘동종점","Column5" : "미유출"},{"Column0" : "강화선진버스 (2830200)","Column1" : "시내","Column2" : "700 (28032023)","Column3" : "강화터미널","Column4" : "종합터미널역","Column5" : "미유출"},{"Column0" : "강화선진버스 (2830201)","Column1" : "시내","Column2" : "700-1 (28032027)","Column3" : "강화터미널","Column4" : "종합터미널역","Column5" : "미유출"},{"Column0" : "강화선진버스 (2830202)","Column1" : "시내","Column2" : "800 (28302001)","Column3" : "강화터미널","Column4" : "종합터미널역","Column5" : "미유출"},{"Column0" : "강화운수 (4100100)","Column1" : "시내","Column2" : "2 (41001001)","Column3" : "마곡.하성종점","Column4" : "송정역(중)","Column5" : "유출입"},{"Column0" : "강화운수 (4100101)","Column1" : "시내","Column2" : "3000 (41001020)","Column3" : "강화터미널","Column4" : "신촌역2호선","Column5" : "유출입"},{"Column0" : "강화운수 (4100102)","Column1" : "시내","Column2" : "388 (41001024)","Column3" : "하늘빛마을일성트루웰","Column4" : "석수역1호선","Column5" : "유출입"},{"Column0" : "강화운수 (4100103)","Column1" : "시내","Column2" : "80 (41001016)","Column3" : "강화터미널","Column4" : "현대백화점","Column5" : "미유출"},{"Column0" : "강화운수 (4100104)","Column1" : "시내","Column2" : "88 (41001013)","Column3" : "강화터미널","Column4" : "경방타임스퀘어.신세계백화점","Column5" : "유출입"},{"Column0" : "강화운수 (4100105)","Column1" : "시내","Column2" : "88-1 (41001025)","Column3" : "현대아파트","Column4" : "경방타임스퀘어.신세계백화점","Column5" : "유출입"},{"Column0" : "경기고속 (4100200)","Column1" : "시내","Column2" : "1 (41002197)","Column3" : "시청","Column4" : "마을회관","Column5" : "미유출"},{"Column0" : "경기고속 (4100201)","Column1" : "시내","Column2" : "1-20 (41002480)","Column3" : "보건소.공설운동장","Column4" : "직동","Column5" : "미유출"},{"Column0" : "경기고속 (4100202)","Column1" : "시내","Column2" : "1-21 (41003544)","Column3" : "광주차고지","Column4" : "직동","Column5" : "미유출"},{"Column0" : "경기고속 (4100203)","Column1" : "시내","Column2" : "10-5 (41002049)","Column3" : "호평동차고지","Column4" : "당고개역","Column5" : "유출입"},{"Column0" : "경기고속 (4100204)","Column1" : "시내","Column2" : "1000 (41002085)","Column3" : "호평동차고지","Column4" : "잠실역1번.11번출구","Column5" : "유출입"},{"Column0" : "경기고속 (4100205)","Column1" : "시내","Column2" : "1000-1 (41002484)","Column3" : "호평동차고지","Column4" : "잠실역1번.11번출구","Column5" : "유출입"},{"Column0" : "경기고속 (4100206)","Column1" : "시내","Column2" : "1000-2 (41002591)","Column3" : "잠실역1번.11번출구","Column4" : "잠실역1번.11번출구","Column5" : "유출입"},{"Column0" : "경기고속 (4100207)","Column1" : "시내","Column2" : "1005 (41002089)","Column3" : "외대도서관앞","Column4" : "강남역(중)","Column5" : "유출입"},{"Column0" : "경기고속 (4100208)","Column1" : "시내","Column2" : "1005-1 (41003283)","Column3" : "구미동차고지","Column4" : "서울역버스환승센터(중)","Column5" : "유출입"},{"Column0" : "경기고속 (4100209)","Column1" : "시내","Column2" : "111 (41003277)","Column3" : "여주대하차장","Column4" : "여주대하차장","Column5" : "미유출"},{"Column0" : "경기고속 (4100210)","Column1" : "시내","Column2" : "112 (41002005)","Column3" : "상산곡동.공영차고지","Column4" : "강변역.테크노마트앞(D)","Column5" : "유출입"},{"Column0" : "경기고속 (4100211)","Column1" : "시내","Column2" : "114-1 (41002322)","Column3" : "곤지암터미널","Column4" : "이천터미널","Column5" : "미유출"},{"Column0" : "경기고속 (4100212)","Column1" : "시내","Column2" : "1150 (41002296)","Column3" : "외대도서관앞","Column4" : "서울역버스환승센터(중)","Column5" : "유출입"},{"Column0" : "경기고속 (4100213)","Column1" : "시내","Column2" : "116 (41002006)","Column3" : "종점","Column4" : "잠실역1번.11번출구","Column5" : "유출입"},{"Column0" : "경기고속 (4100214)","Column1" : "시내","Column2" : "116-1 (41002038)","Column3" : "정자역","Column4" : "원영화남아파트","Column5" : "미유출"},{"Column0" : "경기고속 (4100215)","Column1" : "시내","Column2" : "116-3 (41003285)","Column3" : "경희대차고지","Column4" : "상대원파출소.소방소","Column5" : "미유출"},{"Column0" : "경기고속 (4100216)","Column1" : "시내","Column2" : "119 (41002007)","Column3" : "종점","Column4" : "능동사거리","Column5" : "유출입"},{"Column0" : "경기고속 (4100217)","Column1" : "시내","Column2" : "13 (41003276)","Column3" : "광주터미널","Column4" : "강변역.테크노마트앞(D)","Column5" : "유출입"},{"Column0" : "경기고속 (4100218)","Column1" : "시내","Column2" : "1303 (41002093)","Column3" : "외대도서관앞","Column4" : "안양역","Column5" : "미유출"},{"Column0" : "경기고속 (4100219)","Column1" : "시내","Column2" : "1311 (41002504)","Column3" : "한라아파트.탑동입구","Column4" : "강남역도시에빛","Column5" : "유출입"},{"Column0" : "경기고속 (4100220)","Column1" : "시내","Column2" : "15 (41003037)","Column3" : "연대농장입구.도곡리종점","Column4" : "강변역(A)","Column5" : "유출입"},{"Column0" : "경기고속 (4100221)","Column1" : "시내","Column2" : "15-1 (41002270)","Column3" : "광주크리닉센터","Column4" : "남한산성(종점)","Column5" : "미유출"},{"Column0" : "경기고속 (4100222)","Column1" : "시내","Column2" : "1670 (41005113)","Column3" : "연대농장입구.도곡리종점","Column4" : "잠실역","Column5" : "유출입"},{"Column0" : "경기고속 (4100223)","Column1" : "시내","Column2" : "17 (41002003)","Column3" : "광주차고지","Column4" : "숭신여자중고교.래미안금광아파트","Column5" : "미유출"},{"Column0" : "경기고속 (4100224)","Column1" : "시내","Column2" : "17-1 (41002210)","Column3" : "광주차고지","Column4" : "숭신여자중고교.래미안금광아파트","Column5" : "미유출"},{"Column0" : "경기고속 (4100225)","Column1" : "시내","Column2" : "17-3 (41002207)","Column3" : "시청","Column4" : "봉골종점","Column5" : "미유출"},{"Column0" : "경기고속 (4100226)","Column1" : "시내","Column2" : "2 (41003126)","Column3" : "보건소.공설운동장","Column4" : "현산마을","Column5" : "미유출"},{"Column0" : "경기고속 (4100227)","Column1" : "시내","Column2" : "2-1 (41002167)","Column3" : "감오리식당","Column4" : "대주아파트종점","Column5" : "미유출"},{"Column0" : "경기고속 (4100228)","Column1" : "시내","Column2" : "2-2 (41002202)","Column3" : "보건소.공설운동장","Column4" : "용수2리마을회관","Column5" : "미유출"},{"Column0" : "경기고속 (4100229)","Column1" : "시내","Column2" : "2-21 (41002420)","Column3" : "보건소.공설운동장","Column4" : "대주아파트.종점","Column5" : "미유출"},{"Column0" : "경기고속 (4100230)","Column1" : "시내","Column2" : "2-22 (41002371)","Column3" : "세광아파트","Column4" : "대주아파트.종점","Column5" : "미유출"},{"Column0" : "경기고속 (4100231)","Column1" : "시내","Column2" : "2-23 (41002421)","Column3" : "세광아파트","Column4" : "세광아파트","Column5" : "미유출"},{"Column0" : "경기고속 (4100232)","Column1" : "시내","Column2" : "2-24 (41003655)","Column3" : "보건소.공설운동장","Column4" : "대주아파트.종점","Column5" : "미유출"},{"Column0" : "경기고속 (4100233)","Column1" : "시내","Column2" : "2-25 (41002323)","Column3" : "경안동주민센터.우체국앞","Column4" : "세광아파트","Column5" : "미유출"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txtDesc","20","60",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("1. 왼쪽의 Grid에서 row를 선택 후 Drag하여 오른쪽의 Grid로 Drop한다.\n2. 왼쪽의 Grid에서 row를 선택 후 Drag하여 하단의 TextArea에 Drop하면 Drag한 정보가 표시된다.");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","20","txtDesc:10","48.03921568627451%",null,null,"234",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_emp");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","grd00:5","txtDesc:10","47.549019607843135%",null,null,"234",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","grd00:5",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그리드 drag & drop");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleDragDrop.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 drag & drop
        *  @FileName 	SampleDragDrop.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/01/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
          /**
        * TextArea00_ondrop : 텍스트에어리어에 데이터 드랍시 이벤트
        * @param  : obj		   - [object]TextArea
        * @param  : e		   - [string]ClickEventInfo
        * @return : N/A
        * @example :
        */
        this.TextArea00_ondrop = function(obj,e)
        {
        	var str = this.TextArea00.value;
        	if( this.gfnIsNull(str) ) {
        		str = "드래그 Target >> " + e.dragdata;
        	}else{
        		str += "\n드래그 Target >> " + e.dragdata;
        	}
        	this.TextArea00.value = str;
        };

        this.grdTop_ondrag = function(obj,e)
        {
        	var arrData = [];
        	arrData[0] = obj.getSelectedRows();
        	arrData[1] = obj.name;
        	arrData[2] = obj;

        	e.dragdata = arrData;

        	return true;
        };

        this.Grid00_ondrop = function(obj,e)
        {
        	var sSelectRows = e.dragdata[0];
        	var objDragName = e.dragdata[1];
        	var objDragGrid = e.dragdata[2];
        	var objDragDs = objDragGrid.getBindDataset();
        	var objDs = obj.getBindDataset();

        	if (objDragName == obj.name){
        		if (obj.selecttype == "row") objDs.moveRow(sSelectRows, e.row);
         	}
        	else{
        		this.fnSetMoveData(objDragDs, objDs, sSelectRows, e.row);
         	}
        };

        /**
         * @class   그리드 Drag & Drop 이벤트 내부함수<br>
        	        데이터셋간 데이터이동
         * @param {Object}   objFromDs - 드래그 데이터셋
         * @param {Object}   objToDs - 드롭 데이터셋
         * @param {Number} FromRow - 시작로우
         * @param {Number} nToRow - 종료로우
         * @param {String}    [sMoveType] - 무브타입
         * @return  N/A
         * @example
         * this.fnSetMoveData(this.dsList, this.dsMain, 1, 2, "I");
         */
        this.fnSetMoveData = function(objFromDs, objToDs, nFromRow, nToRow, sMoveType)
        {
        	if (this.gfnIsNull(nToRow)) nToRow = -1;
        	if (this.gfnIsNull(sMoveType)) sMoveType = "I";
        	var arrFromRow;
        	var nRow;
        	var nInsertRow = nToRow;

        	if (nFromRow == -1) return;

        	if (typeof(nFromRow) == "number"){
        		arrFromRow = [];
        		arrFromRow.push(nFromRow);
        	}
        	else{
        		arrFromRow = nFromRow;
        	}

        	for (var i=0; i<arrFromRow.length; i++){
        		if (nToRow > -1){
        			if (sMoveType == "I") nRow = objToDs.insertRow(nInsertRow);
        			else nRow = objToDs.addRow();
        		}
        		else{
        			nRow = objToDs.addRow();
        		}
        		objToDs.copyRow(nRow, objFromDs, arrFromRow[i]);

        		nInsertRow++;
        	}

        	for (var i=arrFromRow.length-1; i>-1; i--){
        		objFromDs.deleteRow(arrFromRow[i]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.grd00.addEventHandler("ondrag",this.grdTop_ondrag,this);
            this.grd01.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.TextArea00.addEventHandler("ondrop",this.TextArea00_ondrop,this);
        };
        this.loadIncludeScript("SampleDragDrop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
