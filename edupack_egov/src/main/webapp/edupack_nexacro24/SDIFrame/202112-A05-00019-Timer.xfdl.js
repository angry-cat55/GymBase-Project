(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Timer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","33","22","157","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시작");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","208","22","164","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("종료");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","34","110","116","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("3");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","36","80","192","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시간 설정 (분)");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","31","171","293","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "역방향"},{"codecolumn" : "1","datacolumn" : "순방향"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("순방향");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","214","105","150","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("00 : 00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("202112-A05-00019-Timer.xfdl", function() {
        this.firstTime;
        this.totalMin = 0;
        this.curMin = 0;

        this.Button00_onclick = function(obj, e)
        {
        	this.firstTime = this.Edit00.value;
        	this.totalMin = nexacro.toNumber(this.firstTime) * 60;
        	this.curMin = 0;
        	this.Radio00.set_enable(false);
        	this.Button00.set_enable(false);
        	this.setTimer(1, 1000);
        }

        this.Button01_onclick = function(obj, e)
        {
        	this.killTimer(1);
        	this.Static01.set_text("00:00");
        	this.Radio00.set_enable(true);
        	this.Button00.set_enable(true);
        }

        this.Min_Timer_ontimer = function(obj, e)
        {
        	if(e.timerid == 1)
        	{
        		if(this.Radio00.index == 0)
        		{
        			this.fn_reverse_Timer();
        		}
        		else
        		{
        			this.fn_Timer();
        		}
        	}
        }

        this.fn_reverse_Timer = function()
        {
        	var min = (nexacro.floor(this.totalMin / 60)).toString();
        	var sec = this.totalMin%60;
        	this.Static01.set_text(min.padLeft(2, "0") +" : " + (sec.toString()).padLeft(2, "0"));

        	if(this.totalMin == 0)
        	{
        		this.killTimer(1);
        		this.Radio00.set_enable(true);
        		this.Button00.set_enable(true);
        		alert("시간 초과");
        	}
        	this.totalMin--;
        }

        this.fn_Timer = function()
        {
        	var min = (nexacro.floor(this.curMin / 60)).toString();
        	var sec = (this.curMin % 60).toString();
        	this.Static01.set_text(min.padLeft(2, "0") + " : " + (sec.padLeft(2, "0")));
        	if(this.curMin == this.totalMin)
        	{
        		this.killTimer(1);
        		this.Radio00.set_enable(true);
        		this.Button00.set_enable(true);
        		this.curMin = 0;
        		alert("시간 완료");
        	}
        	this.curMin++;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Min_Timer_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("202112-A05-00019-Timer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
