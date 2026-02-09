(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2110fm");
            this.set_titletext("스탭 페이지");
            this.set_background("white");
            this.set_border("1px solid #d5d5d5");
            if (Form == this.constructor)
            {
                this._setFormPosition(910,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::form/workout1.jpg\')");
            obj.set_stretch("fit");
            obj.set_positionstep("1");
            obj.set_border("1px solid #d5d5d5");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::form/workout2.jpg\')");
            obj.set_stretch("fit");
            obj.set_positionstep("2");
            obj.set_border("1px solid #d5d5d5");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/workout3.jpg\')");
            obj.set_stretch("fit");
            obj.set_positionstep("3");
            obj.set_border("1px solid #d5d5d5");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01_00_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'imagerc::form/Logo_darkMode1.png\')");
            obj.set_stretch("fit");
            obj.set_positionstep("0");
            obj.set_border("0px none");
            obj.set_background("#242323");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",910,490,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("4");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2110fm.xfdl", function() {
        this.fvStep = 0;
        this.elapseTime = 3000;

        this.form_onload = function(obj,e)
        {
        	this.stepselector.visible = false;
        	this.stepshowtype = "action";

        	this.setTimer(0, this.elapseTime);
        };

        this.Step_ontimer = function(obj,e)
        {
        	if (e.timerid == 0){
        		if (this.fvStep == 3) {
        			this.fvStep = 0;
        			this.stepselector.stepindex = 0;
        		}
        		else {
        			this.stepselector.stepindex = (++this.fvStep);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Step_ontimer,this);
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("gybs2110fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
