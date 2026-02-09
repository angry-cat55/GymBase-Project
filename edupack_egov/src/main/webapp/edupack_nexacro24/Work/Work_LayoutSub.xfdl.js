(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Work_LayoutSub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img00","10","10",null,"150","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTeam","100","170","80","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("두산베어스");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Static("staWin","10","173","44","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("staAddr","10","217","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("서울 잠실");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,260,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Work_LayoutSub.xfdl", function() {

        this.Work_LayoutSub_onload = function(obj,e)
        {
        	var objParam = this.parent.param;

        	this.img00.image = objParam.imgPath;
        	this.staTeam.text = objParam.team;
        	this.staWin.text = objParam.win;
        	this.staAddr.text = objParam.addr;
        };

        this.Common_onclick = function(obj,e)
        {
        	alert(this.staTeam.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Work_LayoutSub_onload,this);
            this.img00.addEventHandler("onclick",this.Common_onclick,this);
            this.staTeam.addEventHandler("onclick",this.Common_onclick,this);
            this.staWin.addEventHandler("onclick",this.Common_onclick,this);
            this.staAddr.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("Work_LayoutSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
