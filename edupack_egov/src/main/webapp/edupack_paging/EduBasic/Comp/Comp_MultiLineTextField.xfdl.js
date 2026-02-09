(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_MultiLineTextField");
            this.set_titletext("Comp_MultiLineTextField");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MultiLineTextField");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","60","462","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("basic usage");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[Property] labeltext, labelfloatingfixed, \r\nlabelposition = \"overlap\" | \"outside\" | \"inside\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","530","60","279","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("helper text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","530","325","126","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("usecharcount = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","21","325","297","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("labeltext = \"Memo\", labelfloatingfixed = true");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","159","250","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "overlap","datacolumn" : "overlap"},{"codecolumn" : "outside","datacolumn" : "outside"},{"codecolumn" : "inside","datacolumn" : "inside"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("overlap");
            obj.set_value("overlap");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00","20","190","250","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_labeltext("MultiLineTextField00");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField01","20","351","250","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_labeltext("Memo");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField02","530","180","250","110",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_labeltext("Memo");
            obj.set_usehelpertext("true");
            obj.set_helpertext("Please enter a note");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField03","530","351","250","110",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_labeltext("Memo");
            obj.set_usecharcount("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","530","95","470","59",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[Property] usehelpertext, helpertext, usecharcount");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","530","154","396","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("usehelpertext = true, helpertext = \"Please enter a note\"");
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
        this.registerScript("Comp_MultiLineTextField.xfdl", function() {

        this.Radio_onitemchanged = function(obj,e)
        {
        	this.MultiLineTextField00.labelposition = this.Radio00.value;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio_onitemchanged,this);
        };
        this.loadIncludeScript("Comp_MultiLineTextField.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
