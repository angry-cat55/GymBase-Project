(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Radio");
            this.set_titletext("Comp_Radio");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "DAY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","EMP_NAME" : "Melon","DAY" : "SUN"},{"CODE" : "02","EMP_NAME" : "Jackson","DAY" : "MON"},{"EMP_NAME" : "Jennie","CODE" : "05","DAY" : "FRI"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"},{"id" : "READONLY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML","READONLY" : "0"},{"CODE" : "02","NAME" : "CSS","READONLY" : "0"},{"CODE" : "03","NAME" : "JavaScript","READONLY" : "0"},{"CODE" : "04","NAME" : "JAVA","READONLY" : "0"},{"CODE" : "05","NAME" : "C/C++","READONLY" : "0"},{"CODE" : "06","NAME" : "Python","READONLY" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Radio");
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
            obj.set_text("[Property] innerdataset, codecolumn, datacolumn");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","131","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("innerdataset - ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","157","140","150",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","259.00","131","191","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("innerdataset - set code, data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","259.00","157","140","160",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday"},{"codecolumn" : "MON","datacolumn" : "Monday"},{"codecolumn" : "TUE","datacolumn" : "Tuesday"},{"codecolumn" : "WED","datacolumn" : "Wednesday"},{"codecolumn" : "THU","datacolumn" : "Thursday"},{"codecolumn" : "FRI","datacolumn" : "Friday"},{"codecolumn" : "STA","datacolumn" : "Saturday"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio1","800.00","157","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_code");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20.00","514","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("column, row count");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20.00","549","470","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text(" [Property] columncount, rowcount, \r\ndirection = \"horizontal\" | \"vertical\"");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","599","205","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("columncount = 3 or rowcount = 2");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio04","20","625","300","75",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var Radio04_innerdataset = new nexacro.NormalDataset("Radio04_innerdataset", obj);
            Radio04_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday"},{"codecolumn" : "MON","datacolumn" : "Monday"},{"codecolumn" : "TUE","datacolumn" : "Tuesday"},{"codecolumn" : "WED","datacolumn" : "Wednesday"},{"codecolumn" : "THU","datacolumn" : "Thursday"},{"codecolumn" : "FRI","datacolumn" : "Friday"},{"codecolumn" : "STA","datacolumn" : "Saturday"}]});
            obj.set_innerdataset(Radio04_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static09","370.00","599","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("direction");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio05","370.00","625","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio05_innerdataset = new nexacro.NormalDataset("Radio05_innerdataset", obj);
            Radio05_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "horizontal","datacolumn" : "horizontal"},{"codecolumn" : "vertical","datacolumn" : "vertical"}]});
            obj.set_innerdataset(Radio05_innerdataset);
            obj.set_text("horizontal");
            obj.set_value("horizontal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20.00","707","211","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("columncount = -1 & rowcount = -1");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio06","20","733","680","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio06_innerdataset = new nexacro.NormalDataset("Radio06_innerdataset", obj);
            Radio06_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "SUN","datacolumn" : "Sunday"},{"codecolumn" : "MON","datacolumn" : "Monday"},{"codecolumn" : "TUE","datacolumn" : "Tuesday"},{"codecolumn" : "WED","datacolumn" : "Wednesday"},{"codecolumn" : "THU","datacolumn" : "Thursday"},{"codecolumn" : "FRI","datacolumn" : "Friday"},{"codecolumn" : "STA","datacolumn" : "Saturday"}]});
            obj.set_innerdataset(Radio06_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20.00","330","63","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("※ ds_code");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","356","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_code");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"144\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","259.00","330","142","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("※ data bind - ds_data");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","260.00","356","230","106",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_data");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"DAY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:DAY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_desc1","530.00","260","470","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_positionstep("0");
            obj.set_cssclass("txt_WF_GuideDesc");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","530.00","229","188","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("text");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","530.00","198","188","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("value = \"03\"");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","530.00","167","173","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("index = -1");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","530.00","136","166","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("index = 0");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","530.00","95","470","36",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text(" [Property] index, value, text");
            obj.set_cssclass("sta_WF_GuideScript");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","530.00","60","332","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("index, value, text");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","800.00","131","195","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("id = Radio1");
            obj.set_cssclass("sta_WF_GuideRefer");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,800,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Radio00","value","ds_data","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Radio01","value","ds_data","DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_Radio.xfdl", function() {
        this.fn_exec = function(obj,e)
        {
        	this.fn_result(obj, this.Radio1, this.txt_desc1);
        };

        this.fn_result = function(obj, objComp, objTxt)
        {
        	var strText = obj.text;	// index = "0,2
        	var strDesc = ``
        	strDesc = `this.${objComp.name}.${strText}`;
        	switch(strText) {
        		case 'index = 0':
        			objComp.index = 0 ;
        			break;
        		case 'index = -1':
        			objComp.index = -1;
        			break;
        		case 'value = "03"':
        			objComp.value = "03";
        			break;
        		case 'text':
        			strDesc += `\n//Result
			            ${objComp.text}`
			break;
        		default:
        			break;
        	}
        	//백틱 줄바꿈 사용하면 제너레이트시 줄바꿈 앞에 공백 들어가서 제거 필요
        	objTxt.value = strDesc.split('\n').map(line => line.trimStart()).join('\n');
        }

        this.Radio05_onitemchanged = function(obj,e)
        {
        	this.Radio04.direction = e.postvalue;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Radio05.addEventHandler("onitemchanged",this.Radio05_onitemchanged,this);
            this.Button03.addEventHandler("onclick",this.fn_exec,this);
            this.Button02.addEventHandler("onclick",this.fn_exec,this);
            this.Button01.addEventHandler("onclick",this.fn_exec,this);
            this.Button00.addEventHandler("onclick",this.fn_exec,this);
        };
        this.loadIncludeScript("Comp_Radio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
