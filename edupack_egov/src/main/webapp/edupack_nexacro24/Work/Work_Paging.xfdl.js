(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_Paging");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"},{"id" : "USE_YN","type" : "STRING","size" : "256"},{"id" : "REG_USER","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","1015","40","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","51","131","1143","485",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","9","14","182","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드 페이징");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_Paging.xfdl", function() {
        this.btn00_onclick = function(obj,e)
        {
        	// ds ID : dsSample
        	// 전달 파라미터 X
        	// 호출 url : edu/getSampleList.do
        	// 자바 메소드 명 : getSampleList()

        // 	this.transaction("getSampleList"
        // 					,"SvcUrl::edu/getSampleList.do"
        // 					,""
        // 					,"dsSample=outSample"
        // 					,""
        // 					,"fnCallback");



        	var strSvcUrl = "edu/getSampleList.do";
        	var inData    = "";
        	var outData   = "dsSample=outSample";
        	var strArg    = "";

        	this.gfnTransaction("getSampleList", strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("Work_Paging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
