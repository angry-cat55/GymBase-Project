(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_WebView");
            this.set_titletext("Comp_WebView");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("WebView");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] url");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","131","211","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("url = \"https://www.tobesoft.com\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","530.00","60","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("html page");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[Method] callScript(), [Event] onusernotify");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new WebView("WebView00","20","157","470","350",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("https://www.tobesoft.com");
            obj.set_border("1px solid #dedede");
            this.addChild(obj.name, obj);

            obj = new WebView("WebView01","530","157","470","350",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #dedede");
            obj.set_url("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530","514","95","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("get \"Name\"");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","645","512","95","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set \"Name\"");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("sta_url","530","130","421","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("url = \"http://localhost\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","530.00","545","480","120",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","886","512","109","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","760","512","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("function call");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_WebView.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.fn_loadHtml();
        };

        this.fn_loadHtml = function()
        {
        	var url = "";
        	if(system.navigatorname == "nexacro"){
        		url = "https://edu.tobesoft.com/edu/nexacroN24/Html_Form.html";
        	}
        	else{
        		url  = window.location.protocol + "//" + window.location.host;
        		url +="/File/Html_Form.html";
        	}
        	this.WebView01.url = url;
        	this.sta_url.text = 'url = "' + url + '"';
        };

        this.WebView01_onusernotify = function(obj,e)
        {
        	this.alert(e.userdata);

        	var strDesc = `this.WebView01_onusernotify = function(obj:nexacro.WebView,e:nexacro.WebUserNotifyEventInfo)
	               {
        				        alert(e.userdata);
        				   }`;

	this.txt_desc1.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        };


        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.txt_desc1);
        };


        this.fn_result = function(obj, objTxt)
        {
        	var strText = obj.text;
        	var strDesc = ``;
        	switch(strText) {
        		case 'get "Name"':
        			var rtn = this.WebView01.callScript("document.getElementById('name').value");
        			this.alert("Name:" + rtn);
        			strDesc += `var rtn = this.WebView01.callScript("document.getElementById('name').value")
			            result: ${this.WebView01.callScript("document.getElementById('name').value")}`;
			break;
        		case 'set "Name"':
        			this.WebView01.callScript("document.getElementById('name').value='" + this.Edit00.value + "'")
        			strDesc += `this.WebView01.callScript("document.getElementById('name').value='" + this.Edit00.value + "'")`;
        			break;
        		case 'function call':
        			this.WebView01.callScript("htmlFunction('" + this.Edit00.value + "')");
        			strDesc += `this.WebView01.callScript("htmlFunction('" + this.Edit00.value + "')")`;
        			break;
        		default:
        			break;
        	}

        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.WebView01.addEventHandler("onusernotify",this.WebView01_onusernotify,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
        };
        this.loadIncludeScript("Comp_WebView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
