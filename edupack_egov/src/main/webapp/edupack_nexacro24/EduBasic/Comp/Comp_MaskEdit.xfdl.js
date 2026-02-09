(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_MaskEdit");
            this.set_titletext("Comp_MaskEdit");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "STR1","type" : "STRING","size" : "256"},{"id" : "STR2","type" : "STRING","size" : "256"},{"id" : "STR3","type" : "STRING","size" : "256"},{"id" : "NUM1","type" : "STRING","size" : "256"},{"id" : "NUM2","type" : "STRING","size" : "256"},{"id" : "NUM3","type" : "STRING","size" : "256"}]},"Rows" : [{"STR2" : "nx1Ab","STR1" : "NX123","STR3" : "0710011234567","NUM1" : "1250000.25","NUM2" : "1200.50","NUM3" : "1200.5"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","970","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] type = \"number\" | \"string\" , format");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","141","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("type = \"string\"");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","167","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("format = \"AA-###\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","20","193","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","160.00","167","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("format = \"aa-@@@\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","160.00","193","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("string");
            obj.set_format("aa-@@@");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","300.00","167","178","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("format = \"######-#{######}\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","300.00","193","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_format("######-#{######}");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","224","395","54",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"string1\"/><Cell col=\"1\" text=\"string2\"/><Cell col=\"2\" text=\"string3\"/></Band><Band id=\"body\"><Cell text=\"bind:STR1\"/><Cell col=\"1\" text=\"bind:STR2\"/><Cell col=\"2\" text=\"bind:STR3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","530.00","141","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("type = \"number\"");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","530.00","167","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("format = \"#,#\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","530.00","193","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("#,#");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","670.00","167","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("format = \"#,#.##\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","670.00","193","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_format("#,#.##");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","810.00","167","112","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("format = \"#,#.00\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","810.00","193","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_format("#,#.00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","530.00","224","395","54",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"number1\"/><Cell col=\"1\" text=\"number2\"/><Cell col=\"2\" text=\"number3\"/></Band><Band id=\"body\"><Cell text=\"bind:NUM1\"/><Cell col=\"1\" text=\"bind:NUM2\"/><Cell col=\"2\" text=\"bind:NUM3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20.00","320","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("value, space");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20.00","355","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[Property] value, clipmode = \"includespace\" | \"excludespace\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","391","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("type = \"AA-###\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit1","20","417","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","125.00","417","96","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("get value");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","244","417","230","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "includespace","datacolumn" : "includespace"},{"codecolumn" : "excludespace","datacolumn" : "excludespace"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("includespace");
            obj.set_value("includespace");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc","20","448","350","60",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","529","320","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("locale");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","529","355","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("[Property] locale = \"ko_KR\" | \"en_US\" | \"en_JP\" ...");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","529","391","99","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("fr_FR / France");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","529","417","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_format("#,#.00");
            obj.set_value("1200.50");
            obj.set_locale("fr_FR");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","671","391","109","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("de_DE / Germany");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","670","417","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_format("#,#.00");
            obj.set_value("1200.50");
            obj.set_locale("de_DE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","MaskEdit00","value","ds_data","STR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","MaskEdit01","value","ds_data","STR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","MaskEdit02","value","ds_data","STR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","MaskEdit03","value","ds_data","NUM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","MaskEdit04","value","ds_data","NUM2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","MaskEdit05","value","ds_data","NUM3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_MaskEdit.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	var objComp = this.MaskEdit1;
        	var objDesc = this.txt_desc;
        	var strDesc;

        	objComp.clipmode = this.Radio00.value;
        	strDesc = `${this.Radio00.value}
	           value: "${objComp.value}", length: ${typeof objComp.value === "undefined" ? "" : objComp.value.length}`;

	objDesc.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');

        };
        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.MaskEdit1.value = "";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("Comp_MaskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
