(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp");
            this.set_titletext("Employees");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","20","0","158","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Open Popup Form");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","60","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Send Parameter");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","95","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("String");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","126","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Number");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","157","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Object");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_string","120","95","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_data","120","157","305","170",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","515.00","60","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Modal Popup");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modal","515","95","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Execute(basic)");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modeless","515","176","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Execute");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","515.00","141","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Modeless Popup");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","515.00","222","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Use PopupDiv");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","550.00","360","340","286",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","240.00","237","80","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Close");
            obj.set_cssclass("btn_WF_FillRed");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Grid("grd_data","20.00","50","300","170",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("st_title","0","0",null,"35","0",null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Title");
            obj.set_text("PopupDiv");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_pdiv1","621","257","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Center");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pdiv2","515","257","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Component");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_number","120","126","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("111000");
            obj.set_format("#,###");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

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
        this.registerScript("Popup_Base.xfdl", function() {

        this.btn_modal_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame("popupModal", 0, 0, 480, 420);
        	objChildFrame.formurl = "EduBasic::Popup/Popup_BaseSub.xfdl";
         	objChildFrame.openalign = "center middle";
         	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";
        	objChildFrame.dragmovetype = "all";
        	objChildFrame.showtitlebar = true;
        	objChildFrame.set_titlebarheight(40);

        	var objParam = {param_title : "Modal Popup"
        	              , param_string : this.edt_string.value
        	              , param_number : this.msk_number.value
        				  , param_object : this.ds_data};
        	objChildFrame.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");

        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}

        	if(strPopupID == "popupModal"){

        		try {
        			var objJson = JSON.parse(strReturn);
        			this.edt_string.value = objJson.rtn1;
        			this.msk_number.value = objJson.rtn2;

        		} catch (e) {
        			if(strReturn.indexOf("||") > 0){
        				this.edt_string.value = strReturn.split("||")[0];
        				this.msk_number.value = strReturn.split("||")[1];
        			}
        			else{
        				this.edt_string.value = strReturn;
        			}
        		}
        	}
        };

        this.fn_return = function(pObj)
        {
        	this.ds_data.copyData(pObj);
        };

        this.btn_modeless_onclick = function(obj,e)
        {
        	var nWidth  = 480;
        	var nHeight = 420;
        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nWidth  / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;

        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "dragmovetype=all"
        				   + " openalign='center middle'"
        				   + " resizable=false"
        				   + "  autosize=true"
        				   + " titletext=Modeless Popup"
        				   + " showtitlebar=false"
        				   + " titlebarheigh=40"
        				   + " showstatusbar=false";


        	var objParam = {param_title : "Modeless Popup"
        	              , param_string : this.edt_string.value
        	              , param_number : this.msk_number.value
        				  , param_object : this.ds_data};

        	nexacro.open("popupModeless"
        			   , "EduBasic::Popup/Popup_BaseSub.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nWidth
        			   , nHeight
        			   , this);
        };

        this.btn_pdiv1_onclick = function(obj,e)
        {
        	//center
        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(this.PopupDiv00.width  / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(this.PopupDiv00.height / 2) ;
        	this.PopupDiv00.trackPopup(nLeft, nTop);
        };

        this.btn_pdiv2_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, 0, obj.height);
        };

        this.PopupDiv00_btn_close_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_modal.addEventHandler("onclick",this.btn_modal_onclick,this);
            this.btn_modeless.addEventHandler("onclick",this.btn_modeless_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
            this.PopupDiv00.form.btn_close.addEventHandler("onclick",this.PopupDiv00_btn_close_onclick,this);
            this.btn_pdiv1.addEventHandler("onclick",this.btn_pdiv1_onclick,this);
            this.btn_pdiv2.addEventHandler("onclick",this.btn_pdiv2_onclick,this);
        };
        this.loadIncludeScript("Popup_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
