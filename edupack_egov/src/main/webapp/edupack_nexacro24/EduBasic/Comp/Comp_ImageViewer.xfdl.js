(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_ImageViewer");
            this.set_titletext("Comp_ImageViewer");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ImageViewer");
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
            obj.set_text("[Property] image");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","131","317","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("image = \"theme://images/sta_LOGIN_Tobe.png\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","157","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/sta_LOGIN_Tobe.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","309","131","317","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("imege = \"imagerc::img_nexacro.png\"");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","309","157","250","79",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_image("url(\'imagerc::img_nexacro.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20.00","290","462","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("stretch");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20.00","325","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[Property] stretch = \"none\" | \"fit\" | \"fixaspectratio\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","36.00","370","248","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "none","datacolumn" : "none"},{"codecolumn" : "fit","datacolumn" : "fit"},{"codecolumn" : "fixaspectratio","datacolumn" : "fixaspectratio"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","624","157","250","79",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_image("url(\'https://www.tobesoft.com/assets/images/sub/bg/logoType_tobesoft_mo.png\')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","624","131","251","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("imege = \"https://www.tobesoft.com/...\"");
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
        this.registerScript("Comp_ImageViewer.xfdl", function() {

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.ImageViewer01.stretch = e.postvalue;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("Comp_ImageViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
