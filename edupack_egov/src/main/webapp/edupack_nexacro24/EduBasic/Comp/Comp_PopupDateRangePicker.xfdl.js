(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_PopupDateRangePicker");
            this.set_titletext("Comp_PopupDateRangePicker");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_day", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "date","type" : "STRING","size" : "256"},{"id" : "text_color","type" : "STRING","size" : "256"},{"id" : "bg_color","type" : "STRING","size" : "256"},{"id" : "border_color","type" : "STRING","size" : "256"},{"id" : "hint_text","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"date" : "20241003","text_color" : "red","bg_color" : "yellow","border_color" : "1px solid red","hint_text" : "meeting","readonly" : "0"},{"date" : "20241015","text_color" : "blue","bg_color" : "yellow","border_color" : "1px solid blue","readonly" : "0","hint_text" : "education"},{"date" : "20241016","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0","readonly" : "1","hint_text" : ""},{"date" : "20241017","text_color" : "#7f7f7f","bg_color" : "#e0e0e0","border_color" : "1px solid #e0e0e0","readonly" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","429","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("PopupDateRangePicker (reference DateRangePicker)");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","82",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Method] trackPopup(), trackPopupByComponent(), trackPopupCenter()\r\n[Property] useclosebutton = true | false");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","20","182","109","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("trackPopup()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20","213","188","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("trackPopupByComponent()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","20","275","470","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new PopupDateRangePicker("PopupDateRangePicker00","540","220","390","350",null,null,null,null,null,null,this);
            obj.set_useclosebutton("true");
            obj.set_useheadline("true");
            obj.set_closebuttonsize("60 30");
            obj.set_displaytype("date");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","20","244","152","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("trackPopupCenter()");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc2","20","430","470","70",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","540","95","210","50",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_labeltext("start date");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField01","770","95","210","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_labeltext("end date");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","530","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("date range calendar");
            obj.set_cssclass("sta_WF_GuideTitle2");
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
        this.registerScript("Comp_PopupDateRangePicker.xfdl", function() {

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.DateRangePicker00.displaytype = this.Radio00.value;
        	this.DateRangePicker01.headlinedateformat = this.Radio01.value;
        	this.DateRangePicker01.headlinetimeformat = this.Radio02.value;
        };

        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.PopupDateRangePicker00, this.txt_desc1);
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;	// index = "0,2
        	var strDesc = ``;
        	switch(strText) {
        		case 'trackPopup()':
        			var objApp = nexacro.getApplication();
        			var nLeft = (objApp.mainframe.width / 2); // - Math.round(objComp.width / 2);
        			var nTop  = (objApp.mainframe.height / 2) - Math.round(objComp.height / 2);
        			objComp.trackPopup("start", nLeft, nTop);
        			strDesc = `var objApp = nexacro.getApplication();
					   var nLeft = (objApp.mainframe.width / 2);
        			           var nTop  = (objApp.mainframe.height / 2) - Math.round(this.PopupDateRangePicker00.height / 2);
        			           this.PopupDateRangePicker00.trackPopup("start", nLeft, nTop);`;
			break;
        		case 'trackPopupByComponent()':
        			objComp.trackPopupByComponent( "start", obj, 0, obj.height);
        			strDesc = `this.PopupDateRangePicker00.trackPopupByComponent("start", obj, 0, obj.height);`
        			break;

        		case 'trackPopupCenter()':
        			objComp.trackPopupCenter("start");
        			strDesc = `this.PopupDateRangePicker00.trackPopupCenter("start");`
        			break;
        		default:
        			break;
        	}
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }

        this.PopupDateRangePicker00_oncloseup = function(obj,e)
        {
        	var strDesc = `start date: ${obj.startdate}
	               end date: ${obj.enddate}`;
	this.txt_desc2.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');

        	this.DateField00.value = obj.startdate;
        	this.DateField01.value = obj.enddate;
        };

        this.DateField_ondropdown = function(obj,e)
        {
        	this.PopupDateRangePicker00.trackPopupByComponent("start", this.DateField00, 0, obj.height);
        	e.preventDefault();
        };


        this.fn_getDay = function(nDay, sType)
        {
        	if(typeof nDay != "number")	nDay = 0;
        	if(typeof sType == "undefined")	sType = "date";
        	var now = new Date();
        	now.setDate(now.getDate() + nDay);

        	var year = now.getFullYear();
        	var month = String(now.getMonth() + 1).padStart(2, '0');  // 월은 0부터 시작하므로 +1
            var day = String(now.getDate()).padStart(2, '0');
        	var hours = String(now.getHours()).padStart(2, '0');
        	var minutes = String(now.getMinutes()).padStart(2, '0');
        	var seconds = String(now.getSeconds()).padStart(2, '0');
        	var strDate = `${year}${month}${day}`;
        	if(sType == "datetime")
        		strDate += `${hours}${minutes}${seconds}`;
        	else if(sType == "time")
        		strDate = `${hours}${minutes}${seconds}`;

        	trace(strDate);
        	return strDate;
        }
        this.form_onload = function(obj,e)
        {
        	this.DateField00.value = this.fn_getDay(2, "date");
        	this.DateField01.value = this.fn_getDay(10, "date");
        	this.PopupDateRangePicker00.startdate = this.fn_getDay(2, "date");
        	this.PopupDateRangePicker00.enddate = this.fn_getDay(10, "date");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.PopupDateRangePicker00.addEventHandler("oncloseup",this.PopupDateRangePicker00_oncloseup,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.DateField00.addEventHandler("ondropdown",this.DateField_ondropdown,this);
            this.DateField01.addEventHandler("ondropdown",this.DateField_ondropdown,this);
        };
        this.loadIncludeScript("Comp_PopupDateRangePicker.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
