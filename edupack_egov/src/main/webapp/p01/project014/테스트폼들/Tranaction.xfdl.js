(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tranaction");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"},{"id" : "USE_YN","type" : "STRING","size" : "256"},{"id" : "REG_USER","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("GridSearch","180","291","890","269",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_sample");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("BtnSearch","373","117","156","59",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","51","73","263","71",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찐이야");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Tranaction.xfdl", function() {

        this.BtnSearch_onclick = function(obj,e)
        {
        	var strSvcUrl = "SvcUrl::edu/getSampleList.do";
        	var inData    = "";
        	var outData   = "ds_sample=dsSample";
        	var strArg    = "";

        	this.transaction("getSampleList", strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.BtnSearch.addEventHandler("onclick",this.BtnSearch_onclick,this);
        };
        this.loadIncludeScript("Tranaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
