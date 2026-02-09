(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleWords");
            this.set_titletext("용어사전");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtDesc","20","60",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("- 프로젝트 내에서 사용하는 용어에 대한 목록이다.\n- 용어는 AppVariables의 gdsWord에서 관리한다.\n- 업무화면에서 용어는 아래와 같이 사용한다.\n   this.gfnGetWord(\"date.end\"); // 종료일자");
            this.addChild(obj.name, obj);

            obj = new Button("btnWord",null,"170","66","26","150",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Word");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMessage","20","btnWord:5",null,null,"20","28",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gdsWord");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"용어 ID\" expandchar=\"word\"/><Cell col=\"1\" text=\"한글\" expandchar=\"korean\"/><Cell col=\"2\" text=\"English\" expandchar=\"english\"/></Band><Band id=\"body\"><Cell text=\"bind:WORD\" edittype=\"readonly\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:KO\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:EN\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFrom",null,"17","226","26","305",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_value("Please enter");
            obj.set_text("Please enter");
            this.addChild(obj.name, obj);

            obj = new Button("btnChange",null,"17","49","26","251",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전환");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTo",null,"17","226","26","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("pleaseEnter");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGubn",null,"17","126","26","536",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboGubn_innerdataset = new nexacro.NormalDataset("cboGubn_innerdataset", obj);
            cboGubn_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "카멜표기법"},{"codecolumn" : "2","datacolumn" : "도트표기법"},{"codecolumn" : "3","datacolumn" : "구글번역기"}]});
            obj.set_innerdataset(cboGubn_innerdataset);
            obj.set_text("도트표기법");
            obj.set_value("2");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new WebView("webGoogle","140","52","860","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("용어 사전");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Button("btnWord2",null,"txtDesc:10","126","26","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("String Resource");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
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
        this.registerScript("SampleWords.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 용어사전
        *  @FileName 	SampleWords.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/02/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/02/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */



        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description Camel 표기법으로 전환
        */
        this.fnCamel = function(strFrom)
        {
        	var arrFrom = strFrom.split(" ");
        	var strReturn = "";

        	for (var i=0; i<arrFrom.length; i++)
        	{
        		var strChange = arrFrom[i].toLowerCase();
        		if (i == 0) {
        			strReturn += strChange;
        		}
        		else {
        			strReturn += strChange.substring(0,1).toUpperCase()+strChange.substring(1);
        		}
        	}

        	this.edtTo.value = strReturn;
        	trace("strFrom : " + strFrom + " / strReturn : " + strReturn);
        };

        /**
         * @description Dot(.) 표기법으로 전환
        */
        this.fnDot = function(strFrom)
        {
        	var arrFrom = strFrom.split(" ");
        	var strReturn = "";

        	for (var i=0; i<arrFrom.length; i++)
        	{
        		var strChange = arrFrom[i].toLowerCase();

        		if (i == 0) {
        			strReturn += strChange;
        		}
        		else {
        			strReturn += "." + strChange;
        		}
        	}

        	this.edtTo.value = strReturn;
        	trace("strFrom : " + strFrom + " / strReturn : " + strReturn);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnChange_onclick = function(obj,e)
        {
        	if (this.cboGubn.value == 1) {
        		this.fnCamel(this.edtFrom.value);
        	}
        	else {
        		this.fnDot(this.edtFrom.value);
        	}
        };

        this.cboGubn_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == 3) {
        		this.webGoogle.url = "https://translate.google.co.kr/";
        		this.webGoogle.visible = true;
        		this.webGoogle.height = 450;
        	}
        	else {
        		this.webGoogle.url = "";
        		this.webGoogle.visible = false;
        		this.webGoogle.height = 0;
        	}
        };

        this.btnWord_onclick = function(obj,e)
        {
        	var objDs = this.grdMessage.getBindDataset();
        	var sWordId = objDs.getColumn(objDs.rowposition, "WORD");
            var sWord = this.gfnGetWord(sWordId);
            this.alert(sWord);

        };

        this.btnWord2_onclick = function(obj,e)
        {
        	//String Resource 이용
        	var sWord = this.fnGetStringResource("employee.management");
        	this.alert(sWord);
        };


        this.fnGetStringResource = function (sWord)
        {
        //	Environment > Property > usestringresource 지정
         	nexacro.loadStringResource("ko");
        	var objApp = this.gfnGetApplication();
        	var sVal = nexacro.getStringResourceValue(sWord);
        	if(this.gfnIsNull(sVal)){
        		sVal = sWord;
        	}
        	return sVal;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.btnWord.addEventHandler("onclick",this.btnWord_onclick,this);
            this.edtFrom.addEventHandler("oneditclick",this.edtFrom_oneditclick,this);
            this.btnChange.addEventHandler("onclick",this.btnChange_onclick,this);
            this.cboGubn.addEventHandler("onitemchanged",this.cboGubn_onitemchanged,this);
            this.btnWord2.addEventHandler("onclick",this.btnWord2_onclick,this);
        };
        this.loadIncludeScript("SampleWords.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
