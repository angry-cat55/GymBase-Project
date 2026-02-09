(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Form");
            this.set_titletext("Exe_Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "POS_CD","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "10"}]},"Rows" : [{"FULL_NAME" : "Olivia","POS_CD" : "02","HIRE_DATE" : "20101003","SALARY" : "83490000","GENDER" : "W","MARRIED" : "1","MEMO" : "ivory","DEPT_CD" : "01","EMPL_ID" : "KR180"},{"FULL_NAME" : "John","POS_CD" : "02","HIRE_DATE" : "20051011","SALARY" : "76010000","GENDER" : "M","MARRIED" : "0","MEMO" : "greenyellow","DEPT_CD" : "02","EMPL_ID" : "KR190"},{"FULL_NAME" : "Dillon","POS_CD" : "03","HIRE_DATE" : "20150401","SALARY" : "62540000","GENDER" : "M","MARRIED" : "1","MEMO" : "lightpink","DEPT_CD" : "03","EMPL_ID" : "JP110"},{"FULL_NAME" : "Jackson","POS_CD" : "03","HIRE_DATE" : "20070206","SALARY" : "99050000","GENDER" : "M","MARRIED" : "1","MEMO" : "aliceblue","DEPT_CD" : "02","EMPL_ID" : "JP390"},{"FULL_NAME" : "Joseph","POS_CD" : "03","HIRE_DATE" : "20070304","SALARY" : "61220000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightgray","DEPT_CD" : "05","EMPL_ID" : "CN300"},{"FULL_NAME" : "Maia","POS_CD" : "01","HIRE_DATE" : "20090512","SALARY" : "63030000","GENDER" : "W","MARRIED" : "0","MEMO" : "ivory","DEPT_CD" : "04","EMPL_ID" : "KR310"},{"FULL_NAME" : "Adam","POS_CD" : "04","HIRE_DATE" : "20010109","SALARY" : "88450000","GENDER" : "W","MARRIED" : "1","MEMO" : "greenyellow","DEPT_CD" : "04","EMPL_ID" : "KR350"},{"FULL_NAME" : "Ray","POS_CD" : "01","HIRE_DATE" : "20160202","SALARY" : "67420000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightpink","DEPT_CD" : "02","EMPL_ID" : "CN160"},{"FULL_NAME" : "Cameron","POS_CD" : "03","HIRE_DATE" : "20010303","SALARY" : "86250000","GENDER" : "M","MARRIED" : "1","MEMO" : "aliceblue","DEPT_CD" : "03","EMPL_ID" : "KR260"},{"FULL_NAME" : "Aladdin","POS_CD" : "04","HIRE_DATE" : "20161003","SALARY" : "67390000","GENDER" : "W","MARRIED" : "1","MEMO" : "lightgray","DEPT_CD" : "05","EMPL_ID" : "JP140"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPL_ID","type" : "STRING","size" : "10"},{"id" : "FULL_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CD","type" : "STRING","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"}]},"Rows" : [{"EMPL_ID" : "AA001","FULL_NAME" : "Olivia","DEPT_CD" : "01","SALARY" : "3000"},{"EMPL_ID" : "AA002","FULL_NAME" : "John","DEPT_CD" : "02","SALARY" : "6000"},{"EMPL_ID" : "BB001","FULL_NAME" : "Jackson","DEPT_CD" : "03","SALARY" : "3000"},{"EMPL_ID" : "BB002","FULL_NAME" : "Maia","DEPT_CD" : "04","SALARY" : "4000"},{"EMPL_ID" : "CC001","FULL_NAME" : "Adam","DEPT_CD" : "01","SALARY" : "8000"},{"EMPL_ID" : "DD001","FULL_NAME" : "Ray","DEPT_CD" : "02","SALARY" : "5000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","8","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Form");
            obj.set_cssclass("sta_WF_FrmTitle");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_1","90","57","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("nexacro");
            obj.set_positionstep("0");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit3_2","90","91","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("platform");
            obj.set_positionstep("0");
            obj.set_text("platform");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","19","57","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Param1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","19","91","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Param2");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","89","296","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("3_1");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","89","333","36","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3_3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","19","125","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Param3");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","89","125","403","161",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset3");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"EMPL_ID\"/><Cell col=\"1\" text=\"FULL_NAME\"/><Cell col=\"2\" text=\"DEPT_CD\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPL_ID\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CD\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","135","296","515","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Modal");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","135","333","535","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Modeless");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Performance_form.xfdl", function() {
        this.paramDs;

        // Exe 3-1
        this.btn_Exe3_1_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 400
        					  , 300
        					  , null
        					  , null
        					  , "Performance::Performance_form_Popup.xfdl");

        	objChildFrame.openalign = "center middle";
        	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        	objChildFrame.dragmovetype = "all";
        //	objChildFrame.resizable = false;
        //	objChildFrame.showstatusbar = false;

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
        		this.Edit3_1.value = arrRtn[0];
        		this.Edit3_2.value = arrRtn[1];
        		trace(this.paramDs.saveXML());
        	}
        };

        // Exe 3-3
        this.btn_Exe3_3_onclick = function(obj,e)
        {
        	var nW = 400;
        	var nH = 300;

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
        	           , "Performance::Performance_form_Popup.xfdl"
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
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
        };
        this.loadIncludeScript("Performance_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
