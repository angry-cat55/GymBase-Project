(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("App_Environment");
            this.set_titletext("App_Environment");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Environment");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","60","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Variables");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getVariable","20.00","136","109","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Get Variable");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("sta_variable","135.00","136","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GuideResult");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_variable","135.00","167","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("NEXACRO");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setVariable","20.00","167","109","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Set Variable");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20.00","313","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Cookies");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20.00","348","475","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("{Method] getCookieVariable(), setCookieVariable()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getCookie","20.00","389","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Get Cookie");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cookie","btn_getCookie:15","389","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GuideResult");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cookie","135","420","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("NEXACRO");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","530","60","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("HTTP Header");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","530.00","95","468","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[Method] getHTTPHeaderVariable(), setHTTPHeaderVariable()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getHeader","530.00","136","95","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Get Header");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("sta_header","btn_getHeader:15","136","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_GuideResult");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_header","640.00","167","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("NEXACRO");
            obj.set_text("NEXACRO");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setHeader","530","167","95","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Set Header");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","530.00","313","300","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Property, Script");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","530.00","348","468","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[Method] getEnvironment()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("btn_callScript","530.00","389","102","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Call Script");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20.00","95","475","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Method] getEnvironmentVariable(), setEnvironmentVariable()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","20.00","198","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var strValue = nexacro.getEnvironmentVariable(\"env_var1\");\nnexacro.setEnvironmentVariable(\"env_var1\", \"NEXACRO\");");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc2","530","198","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("strValue = nexacro.getHTTPHeaderVariable(\"env_hreader1\");\nnexacro.setHTTPHeaderVariable(\"env_hreader1\", \"NEXACRO\");");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc4","530","450","470","90",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var objEnv = nexacro.getEnvironment();\nvar strValue = objEnv.locale;\nobjEnv.env_script();");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc3","20","450","470","90",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            obj.set_value("var strValue = nexacro.getCookieVariable(\"env_cookie1\");\nnexacro.setCookieVariable(\"env_cookie1\", \"NEXACRO\");");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setVariable00","20","420","109","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Set Cookie");
            obj.set_cssclass("btn_WF_GuideExec");
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
        this.registerScript("App_Environment.xfdl", function() {

        /********************************************************************
        	Environment Variable
        *********************************************************************/
        this.btn_getVariable_onclick = function(obj,e)
        {
        	var strValue = nexacro.getEnvironmentVariable("env_var1");
        	this.sta_variable.text = strValue;
        };

        this.btn_setVariable_onclick = function(obj,e)
        {
        	var strValue = this.edt_variable.value;
        	nexacro.setEnvironmentVariable("env_var1", strValue);
        };

        /********************************************************************
        	Environment Cookies
        *********************************************************************/
        this.btn_getCookie_onclick = function(obj,e)
        {
        	var strValue = nexacro.getCookieVariable("env_cookie1");
        	this.sta_cookie.text = strValue;
        };

        this.btn_setCookie_onclick = function(obj,e)
        {
        	var strValue = this.edt_cookie.value;
        	nexacro.setCookieVariable("env_cookie1", strValue);
        };

        /********************************************************************
        	Environment HTTP Header
        *********************************************************************/
        this.btn_getHeader_onclick = function(obj,e)
        {
        	var strValue = nexacro.getHTTPHeaderVariable("env_header1");
        	this.sta_header.text = strValue;
        };

        this.btn_setHeader_onclick = function(obj,e)
        {
        	var strValue = this.edt_header.value;
        	nexacro.setHTTPHeaderVariable("env_header1", strValue);
        };

        /********************************************************************
        	Environment Object
        *********************************************************************/
        this.btn_callScript_onclick = function(obj,e)
        {
        	var objEnv = nexacro.getEnvironment();
        	objEnv.efn_script();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_getVariable.addEventHandler("onclick",this.btn_getVariable_onclick,this);
            this.btn_setVariable.addEventHandler("onclick",this.btn_setVariable_onclick,this);
            this.btn_getCookie.addEventHandler("onclick",this.btn_getCookie_onclick,this);
            this.btn_getHeader.addEventHandler("onclick",this.btn_getHeader_onclick,this);
            this.btn_setHeader.addEventHandler("onclick",this.btn_setHeader_onclick,this);
            this.btn_callScript.addEventHandler("onclick",this.btn_callScript_onclick,this);
            this.btn_setVariable00.addEventHandler("onclick",this.btn_setCookie_onclick,this);
        };
        this.loadIncludeScript("App_Environment.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
