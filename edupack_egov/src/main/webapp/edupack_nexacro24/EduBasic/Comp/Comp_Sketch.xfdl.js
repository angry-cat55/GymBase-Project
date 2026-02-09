(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Sketch");
            this.set_titletext("Comp_Sketch");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL_IMG","type" : "BLOB","size" : "256"}]},"Rows" : [{"COL_IMG" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Sketch");
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
            obj.set_text("[Property] editmode = \"none\" | \"stroke\" | \"text\" | \"erase\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Sketch("Sketch00","20.00","321","470","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Sketch00");
            obj.set_editmode("stroke");
            obj.set_border("1px solid #acacac");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20.00","228","82","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("brush color");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","136","470","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "stroke","datacolumn" : "stroke"},{"codecolumn" : "text","datacolumn" : "text"},{"codecolumn" : "erase","datacolumn" : "erase"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("stroke");
            obj.set_value("stroke");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","187","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[Method] setBrushColor(), setBrushSize(), setEraseSize()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","259","74","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("brush size");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","110.00","228","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "black","datacolumn" : "black"},{"codecolumn" : "blue","datacolumn" : "blue"},{"codecolumn" : "red","datacolumn" : "red"},{"codecolumn" : "yellow","datacolumn" : "yellow"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("black");
            obj.set_value("black");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","110.00","259","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio02_innerdataset = new nexacro.NormalDataset("Radio02_innerdataset", obj);
            Radio02_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2px"},{"codecolumn" : "4","datacolumn" : "4px"},{"codecolumn" : "6","datacolumn" : "6px"},{"codecolumn" : "8","datacolumn" : "8px"}]});
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_text("2px");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20.00","290","71","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("erase size");
            obj.set_cssclass("sta_WF_GuideTitle3");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03","110.00","290","300","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio03_innerdataset = new nexacro.NormalDataset("Radio03_innerdataset", obj);
            Radio03_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2px"},{"codecolumn" : "4","datacolumn" : "4px"},{"codecolumn" : "6","datacolumn" : "6px"},{"codecolumn" : "8","datacolumn" : "8px"}]});
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_text("2px");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","530.00","60","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("save image");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("[Method] loadSketch(), saveSketch()");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","758.00","314","222","126",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"100\"/></Rows><Band id=\"head\"><Cell text=\"IMAGE\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_IMG\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","530","314","220","100",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Sketch("Sketch01","530.00","136","220","100",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Sketch01");
            obj.set_editmode("stroke");
            obj.set_border("1px solid #acacac");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530","241","143","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("saveSketch()");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","530","288","73","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("imageViewer");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","758.00","288","86","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("dataset, grid");
            obj.set_cssclass("sta_WF_GuideRefer");
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
        this.registerScript("Comp_Sketch.xfdl", function() {
        this.Radio_onitemchanged = function(obj,e)
        {
        	this.Sketch00.editmode = this.Radio00.value;
        	this.Sketch00.setBrushColor(this.Radio01.value);
        	this.Sketch00.setBrushSize(this.Radio02.value);
        	this.Sketch00.setEraseSize(this.Radio03.value);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Sketch00.saveSketch();
        //	this.ImageViewer00.image = this.Sketch00.value;
        	var a = this.ds_data.setColumn(0, "EMP_NAME", this.Sketch00.value);
        	trace(this.ds_data.saveXML())
        	trace(this.Sketch00.value);
        };

        this.fn_exec = function(obj,e)
        {
        	this.Sketch01.saveSketch();
        	this.ImageViewer00.image = this.Sketch01.value;
        	var objImage = this.Sketch01.value.getBase64String().split("data:image/png;base64,");
        	this.ds_data.setColumn(0, "COL_IMG", objImage[1]);
        	trace(this.ds_data.saveXML())
        };

        this.form_onload = function(obj,e)
        {
        	this.Sketch01.setBrushColor("blue");
        	this.Sketch01.setBrushSize("8");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio02.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Radio03.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
        };
        this.loadIncludeScript("Comp_Sketch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
