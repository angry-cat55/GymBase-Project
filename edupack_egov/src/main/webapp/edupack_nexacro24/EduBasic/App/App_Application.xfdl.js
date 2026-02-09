(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("App_Application");
            this.set_titletext("Application");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Applications");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","131","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("getApplication");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getVariable","19","190","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Get Variable");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("sta_variable","btn_getVariable:5","190","250","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GuideResult");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20.00","95","367","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Variable (Application Variables > Variables)");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","530","95","403","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Dataset (Application Variables > Datasets)");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20.00","292","463","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Object (Applications > Application_Desktop > mainframe)");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static14_00","530","292","584","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Script (Applications > Application_Desktop > Script)");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_callScript","530","387","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Call Script");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","20.00","125","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var objApp = nexacro.getApplication();\nvar strValue = objApp.gv_var1");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc2","530","125","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var objApp = nexacro.getApplication();\nvar nCount = objApp.gds_data.rowcount;");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc4","530","322","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var objApp = nexacro.getApplication();\nobjApp.afn_script()");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc3","20","322","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var objApp = nexacro.getApplication();\nvar nWidth = objApp.mainframe.width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("App_Application.xfdl", function() {
        this.btn_getVariable_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var strValue = objApp.gv_var1
        	this.sta_variable.text = strValue;
        };

        this.btn_callScript_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	objApp.afn_script()
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_getVariable.addEventHandler("onclick",this.btn_getVariable_onclick,this);
            this.btn_callScript.addEventHandler("onclick",this.btn_callScript_onclick,this);
        };
        this.loadIncludeScript("App_Application.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
