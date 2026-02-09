(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_CheckBox");
            this.set_titletext("Comp_CheckBox");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_check", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "value","type" : "STRING","size" : "256"}]},"Rows" : [{"value" : "1"},{"value" : "0"},{"value" : "true"},{"value" : "false"},{"value" : "Y"},{"value" : "N"},{"value" : "ABC"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","470","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Basic Usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","20.00","95","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox \"true\"");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","160.00","95","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CheckBox \"false\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","171","470","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("true, false value");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","206","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[Property] truevalue, falsevalue");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","247","322","208",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_check");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"value\"/><Cell col=\"1\" text=\"default\"/><Cell col=\"2\" text=\"true &quot;Y&quot;, false &quot;N&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:value\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:value\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:value\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","349.00","270","80","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("default");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","439.00","270","140","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("true \"Y\", false \"N\"");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20.00","515",null,"35","530",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20.00","550","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[Property] iconPosition = \"left\" | \"top\" | \"right\" | \"bottom\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","20.00","591","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("position - left");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","150.00","591","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("position - top");
            obj.set_iconPosition("top");
            obj.set_textAlign("center");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","280.00","591","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("position - right");
            obj.set_iconPosition("right");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","410.00","591","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("position - bottom");
            obj.set_iconPosition("bottom");
            obj.set_textAlign("center");
            obj.set_value("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","CheckBox02","value","ds_check","value");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","CheckBox03","value","ds_check","value");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_CheckBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
