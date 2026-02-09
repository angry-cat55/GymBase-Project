(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleCommonCode");
            this.set_titletext("공통코드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MST_CODE","type" : "STRING","size" : "256"},{"id" : "MST_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MST_CODE","type" : "STRING","size" : "256"},{"id" : "MST_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MST_CODE","type" : "STRING","size" : "256"},{"id" : "MST_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MST_CODE","type" : "STRING","size" : "256"},{"id" : "MST_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MST_CODE","type" : "STRING","size" : "256"},{"id" : "MST_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta10","20","320","218","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("공통코드 목록");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","sta10:0","506","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsComCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"72\"/><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"MST_CODE\"/><Cell col=\"1\" text=\"MST_NAME\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:MST_CODE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:MST_NAME\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0",null,"100.00%","10",null,"-280",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_guide1");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10",null,null,"10","0","-280",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_guideRed");
            obj.set_visible("false");
            obj.set_text("h10");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","680","355","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","680","502","250","129",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_hobby");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"193\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","547","502","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취미코드 - User Code");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","654","320","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("데이터셋 ID로 가져오기");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","547","355","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("직급코드 - Default");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","547","386","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("재직상태 - \"전체\"");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","418","320","56","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Clear");
            obj.set_cssclass("btn_WF_LineGray");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","680","386","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("1");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","680","417","250","80",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","14","13","180","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn00","479","320","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("컴포넌트 ID로 가져오기");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","829","320","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("서비스 호출하여 가져오기");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"250","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("공통코드 가져오기\n방식 1 : gdsComCode 에서 가져오기 - this.gfnGetCommonCode(arrCode) 호출\n방식 2: 서비스 호출하여 가져오기 - this.gfnSearchCode(arrCode) 호출\n\n배열(arrCode)에 조회할 공통코드 정보를 추가 후 함수를 호출 \n    codeGroup : 공통코드 구분코드\n    obj : 공통코드 적용할 component or dataset        \n    first  : 첫번째 row에 추가할 값                    \n        0: 전체(ALL) 표현 - 코드값은 \"ALL\"                    \n        1: 선택하세요 표현 - 코드값은 \"\"\n        2: 사용자 지정 코드/명을 \":\" 구분자로 지정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","547","417","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("지역코드 - \"선택하세요\"");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleCommonCode.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 공통코드
        *  @FileName 	SampleCommonCode.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/03/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2023/03/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        this.Form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.grd_list.binddataset = "gdsComCode";
        	var arrCode = new Array();
        	arrCode.push({mstCode:"POSITION", obj:this.Combo00});
        	arrCode.push({mstCode:"STATUS", obj:this.Radio00           , first:"0"});
        	arrCode.push({mstCode:"AREA", obj:this.Div00.form.Combo00, first:"1"});
        	arrCode.push({mstCode:"HOBBY", obj:this.ds_hobby          , first:"2:AAA:NEXACRO"});
            this.gfnGetCommonCode(arrCode);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.grd_list.binddataset = "gdsComCode";
            var arrCode = new Array();
        	arrCode.push({mstCode:"POSITION", obj:this.ds_pos});
        	arrCode.push({mstCode:"STATUS", obj:this.ds_status, first:"0"});
        	arrCode.push({mstCode:"AREA", obj:this.ds_area, first:"1"});
        	arrCode.push({mstCode:"HOBBY", obj:this.ds_hobby, first:"2:AAA:NEXACRO"});
            this.gfnGetCommonCode(arrCode);
        };

        this.fn_callback = function()
        {
            this.alert("공통코드 조회 후 처리");
        }


        this.Button01_onclick = function(obj,e)
        {
        	this.Combo00.index = -1;
        	this.Radio00.index = -1;
        	this.Div00.form.Combo00.index = -1;

            this.ds_pos.clear();
            this.ds_area.clear();
            this.ds_status.clear();
            this.ds_hobby.clear();

        };


        this.btn01_onclick = function(obj,e)
        {
        	this.grd_list.binddataset = "gdsTemp";
        	var arrCode = new Array();
        	arrCode.push({mstCode:"POSITION", obj:this.ds_pos});
        	arrCode.push({mstCode:"STATUS", obj:this.ds_status, first:"0"});
            this.gfnSearchCode(arrCode, "fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
        };
        this.loadIncludeScript("SampleCommonCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
