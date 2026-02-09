(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap4_Form");
            this.set_titletext("Exe2_Chap4_Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"EMP_NAME" : "Olivia","POS_CD" : "02","HIRE_DATE" : "20101003","SALARY" : "83490000","GENDER" : "W","MARRIED" : "1","MEMO" : "ivory","DEPT_CD" : "01","EMP_ID" : "KR180"},{"EMP_NAME" : "John","POS_CD" : "02","HIRE_DATE" : "20051011","SALARY" : "76010000","GENDER" : "M","MARRIED" : "0","MEMO" : "greenyellow","DEPT_CD" : "02","EMP_ID" : "KR190"},{"EMP_NAME" : "Dillon","POS_CD" : "03","HIRE_DATE" : "20150401","SALARY" : "62540000","GENDER" : "M","MARRIED" : "1","MEMO" : "lightpink","DEPT_CD" : "03","EMP_ID" : "JP110"},{"EMP_NAME" : "Jackson","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "99050000","GENDER" : "M","MARRIED" : "1","MEMO" : "aliceblue","DEPT_CD" : "02","EMP_ID" : "JP390"},{"EMP_NAME" : "Joseph","POS_CD" : "03","HIRE_DATE" : "20070304","SALARY" : "61220000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightgray","DEPT_CD" : "05","EMP_ID" : "CN300"},{"EMP_NAME" : "Maia","POS_CD" : "01","HIRE_DATE" : "20090512","SALARY" : "63030000","GENDER" : "W","MARRIED" : "0","MEMO" : "ivory","DEPT_CD" : "04","EMP_ID" : "KR310"},{"EMP_NAME" : "Adam","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88450000","GENDER" : "W","MARRIED" : "1","MEMO" : "greenyellow","DEPT_CD" : "04","EMP_ID" : "KR350"},{"EMP_NAME" : "Ray","POS_CD" : "01","HIRE_DATE" : "20160202","SALARY" : "67420000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightpink","DEPT_CD" : "02","EMP_ID" : "CN160"},{"EMP_NAME" : "Cameron","POS_CD" : "03","HIRE_DATE" : "20010303","SALARY" : "86250000","GENDER" : "M","MARRIED" : "1","MEMO" : "aliceblue","DEPT_CD" : "03","EMP_ID" : "KR260"},{"EMP_NAME" : "Aladdin","POS_CD" : "04","HIRE_DATE" : "20161003","SALARY" : "67390000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightgray","DEPT_CD" : "05","EMP_ID" : "JP140"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"}]},"Rows" : [{"EMP_ID" : "AA001","EMP_NAME" : "Olivia","DEPT_CD" : "01","SALARY" : "3000"},{"EMP_ID" : "AA002","EMP_NAME" : "John","DEPT_CD" : "02","SALARY" : "6000"},{"EMP_ID" : "BB001","EMP_NAME" : "Jackson","DEPT_CD" : "03","SALARY" : "3000"},{"EMP_ID" : "BB002","EMP_NAME" : "Maia","DEPT_CD" : "04","SALARY" : "4000"},{"EMP_ID" : "CC001","EMP_NAME" : "Adam","DEPT_CD" : "01","SALARY" : "8000"},{"EMP_ID" : "DD001","EMP_NAME" : "Ray","DEPT_CD" : "02","SALARY" : "5000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Form");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe1");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Div("Div1","510","50","463","210",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button1","10","10","80","30",null,null,null,null,null,null,this.Div1.form);
            obj.set_taborder("0");
            obj.set_text("Save");
            this.Div1.addChild(obj.name, obj);

            obj = new Grid("Grid1","10","50","440","149",null,null,null,null,null,null,this.Div1.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autosizingtype("");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"128\"/><Column size=\"73\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"Annual Salary\"/><Cell col=\"2\" text=\"Married\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.Div1.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","70","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_2","10","110","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Exe2");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","190","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","230","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static2","280","190","136","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","280","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Exe3");
            obj.set_cssclass("sta_WF_GuideTitle3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_1","81","310","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("Nexacro");
            obj.set_positionstep("0");
            obj.set_text("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_2","81","350","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("Education");
            obj.set_positionstep("0");
            obj.set_text("Education");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","310","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Param1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","350","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Param2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","10","520","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","10","560","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","10","600","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_5");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","390","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Param3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","80","390","403","120",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("Dataset3");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMP_ID\"/><Cell col=\"1\" text=\"EMP_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","80","70","357","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("폼에 생성되어 있는 오브젝트/컴포넌트 정보를 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","80","110","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("컴포넌트ID String 값을 오브젝트로 만들기 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","80","190","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("타이머를 이용하여 시간 표현 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","80","230","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("타이머 해제 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","80","520","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("모달 팝업창 오픈, 파라메터 전송. 팝업창에서 파라메터 받기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","80","560","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("모달리스 팝업창 오픈, 파라메터 전송. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","80","600","407","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("부모창에서 팝업창 오브젝트 접근. ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div1.form
            obj = new Layout("default","",0,0,this.Div1.form,function(p){});
            this.Div1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap4_Form.xfdl", function() {
        // Exe 1-1
        this.btn_Exe1_1_onclick = function(obj,e)
        {
        	var arrObj = this.all;	//this.components;
        	for(var i=0; i<arrObj.length; i++)
        	{
        		trace(arrObj[i] + " : " + arrObj[i].id);
        	}

        //	this.fn_compList(this);
        };

        this.fn_compList = function(pObj)
        {
        	var arrObj = pObj.all;
        //	var arrObj = pObj.components;

        	for(var i=0; i<arrObj.length; i++)
        	{
        		trace(pObj.parent + " : " + pObj.valueOf() + " : " + arrObj[i] + " : " + arrObj[i].name);

        		var sType = arrObj[i].valueOf();
        		if(sType == "[object Div]"){
        			this.fn_compList(arrObj[i].form);
        		}
        		else if(sType == "[object Tab]"){
        			for(var j=0; j<arrObj[i].tabpages.length; j++){
        				//trace( arrObj[i].valueOf() + " : " + arrObj[i].tabpages[j].name);
        				this.fn_compList(arrObj[i].tabpages[j].form);
        			}
        		}
        	}
        }


        // Exe 1-2
        this.btn_Exe1_2_onclick = function(obj,e)
        {

        	var sGridID = this.Grid3.name;
        	trace(sGridID + " : " + typeof sGridID);

        	var objGrid = this.components[sGridID]; //this.components 이케 쓰는거 추천 eval함수 쓰는거보다.
        	trace(objGrid + " : " + typeof objGrid);
        };

        this.btn_Exe2_1_onclick = function(obj,e)
        {
        //	this.fn_getTime();
        	this.setTimer(123, 1000);
        };

        this.fn_getTime = function()
        {
        	var objDate = new Date();
            var nH = objDate.getHours("h");
            var nM = objDate.getMinutes();
            var nS = objDate.getSeconds();

            var sH = (nH.toString().length < 2 ? "0" + nH.toString() : nH.toString());
            var sM = (nM.toString().length < 2 ? "0" + nM.toString() : nM.toString());
            var sS = (nS.toString().length < 2 ? "0" + nS.toString() : nS.toString());

        	this.Static2.text=sH + " : " + sM + " : " + sS;
        }

        this.Form_ontimer = function(obj,e)
        {
        	if(e.timerid == 123){
        		this.fn_getTime();
        	}
        };

        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	this.killTimer(123);
        };

        // Exe 3-1
        this.btn_Exe3_1_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 400
        					  , 400
        					  , null
        					  , null
        					  , "Exe::Exe_Chap4_Form_Popup.xfdl");

        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	objChildFrame.set_dragmovetype("all");
        //	objChildFrame.set_resizable(false);
        //	objChildFrame.set_showstatusbar(false);

        	var objParam = { param1:this.Edit3_1.value
        	               , param2:this.Edit3_2.value
        				   , param3:this.Dataset3 };

        	objChildFrame.showModal( this.getOwnerFrame()
        	                       , objParam
        						   , this
        						   , "fn_popupCallback");
        };


        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "chf_popup1"){
        		trace("Return Value: " + strReturn);
        		var arrRtn = strReturn.split(":");
        		this.Edit3_1.set_value(arrRtn[0]);
        		this.Edit3_2.set_value(arrRtn[1]);
        	}
        };

        // Exe 3-3
        this.btn_Exe3_3_onclick = function(obj,e)
        {
        	var nW = 400;
        	var nH = 400;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;

        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "showtitlebar=true showstatusbar=false "
        	               + "resizable=true autosize=true titletext=Modeless Popup";

        	var objParam = { param1:this.Edit3_1.value
        	               , param2:this.Edit3_2.value
        				   , param3:this.Dataset3 };

        	nexacro.open("chf_popup2"
        	           , "Exe::Exe_Chap4_Form_Popup.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);

        };


        this.fn_return = function(objDs)
        {
            this.Dataset3.copyData(objDs);
        	trace(objDs.saveXML());
        }

        //Exe 3-5
        this.btn_Exe3_5_onclick = function(obj,e)
        {
        	var objPopup = nexacro.getPopupFrames();
        	for(var i=0; i<objPopup.length; i++)
        	{
        		var sPopup = objPopup[i].name;
        		trace("sPopup == " + sPopup);
        	}

        	var sRtn = objPopup["chf_popup2"].form.Edit3_1.value;
        	trace("Pupup Edit3_1 Value="+sRtn);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_2.addEventHandler("onclick",this.btn_Exe1_2_onclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
        };
        this.loadIncludeScript("Exe_Chap4_Form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
