(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_GridSum");
            this.set_titletext("Sample_GridSum");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sum", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"},{"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "SALARY","type" : "INT","size" : "256"},{"id" : "BONUS","type" : "INT","size" : "256"}]},"Rows" : [{"EMP_ID" : "KR010","EMP_NAME" : "Melon","DEPT_NAME" : "Education Team","SALARY" : "9000","BONUS" : "5000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US050","EMP_NAME" : "Jackson","DEPT_NAME" : "Education Team","SALARY" : "6000","BONUS" : "1200","CORP_NAME" : "America corporation"},{"EMP_ID" : "KR240","EMP_NAME" : "Jennie","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "2000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP150","EMP_NAME" : "Dennis?","DEPT_NAME" : "Support Team","SALARY" : "5000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "US020","EMP_NAME" : "Andrew","DEPT_NAME" : "Support Team","SALARY" : "6500","BONUS" : "800","CORP_NAME" : "America corporation"},{"EMP_ID" : "KR200","EMP_NAME" : "Jungkook","DEPT_NAME" : "Sales Team","SALARY" : "7000","BONUS" : "900","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP230","EMP_NAME" : "Adam","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "1000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR080","EMP_NAME" : "JiYoung","DEPT_NAME" : "Support Team","SALARY" : "8500","BONUS" : "4000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "KR140","EMP_NAME" : "Kate","DEPT_NAME" : "Sales Team","SALARY" : "7300","BONUS" : "3000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US020","EMP_NAME" : "Max","DEPT_NAME" : "Sales Team","SALARY" : "3500","BONUS" : "3000","CORP_NAME" : "America corporation"},{"EMP_ID" : "JP020","EMP_NAME" : "Ted","DEPT_NAME" : "Support Team","SALARY" : "6800","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR030","EMP_NAME" : "Adam","DEPT_NAME" : "Education Team","SALARY" : "8600","BONUS" : "2000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "KR230","EMP_NAME" : "Belle","DEPT_NAME" : "Support Team","SALARY" : "7700","BONUS" : "5000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP040","EMP_NAME" : "Lexy","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "2000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP050","EMP_NAME" : "Lucy","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR110","EMP_NAME" : "Kein","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "1200","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP110","EMP_NAME" : "Juliana","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "800","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR130","EMP_NAME" : "Kara","DEPT_NAME" : "Sales Team","SALARY" : "5000","BONUS" : "900","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "JP030","EMP_NAME" : "Maria","DEPT_NAME" : "Support Team","SALARY" : "6500","BONUS" : "4000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP010","EMP_NAME" : "Eddy","DEPT_NAME" : "Education Team","SALARY" : "7000","BONUS" : "3000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "JP120","EMP_NAME" : "Sarah","DEPT_NAME" : "Sales Team","SALARY" : "8000","BONUS" : "5000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "KR120","EMP_NAME" : "Ivy","DEPT_NAME" : "Sales Team","SALARY" : "8500","BONUS" : "3000","CORP_NAME" : "Korea corporation"},{"EMP_ID" : "US030","EMP_NAME" : "Noel","DEPT_NAME" : "Sales Team","SALARY" : "7300","BONUS" : "400","CORP_NAME" : "America corporation"},{"EMP_ID" : "US240","EMP_NAME" : "Arnold","DEPT_NAME" : "Support Team","SALARY" : "5600","BONUS" : "3000","CORP_NAME" : "America corporation"},{"EMP_ID" : "US230","EMP_NAME" : "Alex","DEPT_NAME" : "Education Team","SALARY" : "3500","BONUS" : "1200","CORP_NAME" : "America corporation"},{"EMP_ID" : "US580","EMP_NAME" : "John","DEPT_NAME" : "Sales Team","SALARY" : "6000","BONUS" : "800","CORP_NAME" : "America corporation"},{"EMP_ID" : "US050","EMP_NAME" : "Steven","DEPT_NAME" : "Education Team","SALARY" : "8000","BONUS" : "900","CORP_NAME" : "America corporation"},{"EMP_ID" : "JP140","EMP_NAME" : "Donald","DEPT_NAME" : "Education Team","SALARY" : "5000","BONUS" : "1000","CORP_NAME" : "Japan corporation"},{"EMP_ID" : "US040","EMP_NAME" : "Ray","DEPT_NAME" : "Support Team","SALARY" : "9000","BONUS" : "3000","CORP_NAME" : "America corporation"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20.00","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("GridSum");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","60","980","565",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Grid Sum");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grd_sum","10","10","700","493",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_positionstep("0");
            obj.set_binddataset("ds_sum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Corporation\"/><Cell col=\"1\" text=\"Department\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Name\"/><Cell col=\"4\" text=\"Salary\"/><Cell col=\"5\" text=\"Bonus\"/><Cell col=\"6\" text=\"Level\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMP_ID\"/><Cell col=\"3\" text=\"bind:EMP_NAME\" displaytype=\"expr:dataset.getRowLevel(currow) &gt; 0 ? &quot;number&quot; : &quot;normal&quot;\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\" displaytype=\"text\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button01","722","42","166","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("2) subsumtext");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","722","11","170","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("1) group - corp, dept");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button03","722","124","166","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("average");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02","722","73","166","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("3) suppress");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button04","722","155","166","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("reverse");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Group Range");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grd_sum","10","10","760","493",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_positionstep("0");
            obj.set_binddataset("ds_sum");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"48\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Corporation\"/><Cell col=\"1\" text=\"Department\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Name\"/><Cell col=\"4\" text=\"GroupRangeStart\"/><Cell col=\"5\" text=\"GroupRangeCount\"/><Cell col=\"6\" text=\"Level\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMP_ID\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" expr=\"dataset.getGroupRangeStart(currow)\"/><Cell col=\"5\" expr=\"dataset.getGroupRangeCount(currow)\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\" displaytype=\"text\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button05","792","11","170","26",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("GroupRange");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_GuideExec");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

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
        this.registerScript("Sample_GridSum.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_sum.keystring = "G:-CORP_NAME,+DEPT_NAME";
        };

        this.Button01_onclick = function(obj,e)
        {
        	var sExpr = 'expr:dataset.getRowLevel(currow) == 2 ? CORP_NAME + " Sum" : CORP_NAME';

        	this.Tab00.Tabpage1.form.grd_sum.setCellProperty("body", 0, "subsumtext", sExpr);

        	sExpr = 'expr:dataset.getRowLevel(currow) == 0 ? DEPT_NAME : (dataset.getRowLevel(currow) == 1 ? DEPT_NAME + " Sum" : "")';
        	this.Tab00.Tabpage1.form.grd_sum.setCellProperty("body", 1, "subsumtext", sExpr);

        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Tab00.Tabpage1.form.grd_sum.setCellProperty("body", 0, "suppress", "1");
        	this.Tab00.Tabpage1.form.grd_sum.setCellProperty("body", 1, "suppress", "2");
        	this.Tab00.Tabpage1.form.grd_sum.setCellProperty("body", 1, "suppressalign", "middle");
        };

        this.Button03_onclick = function(obj,e)
        {
        	var objColumnInfo = this.ds_sum.getColumnInfo("SALARY");
        	objColumnInfo.prop = "AVG";
        	this.ds_sum.updateSortGroup();
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.ds_sum.reversesubsum = true;
        	this.Tab00.Tabpage1.form.grd_sum.summarytype = "top";
        };

        this.Button05_onclick = function(obj,e)
        {
        	//group
        	this.ds_sum.keystring = "G:-CORP_NAME,+DEPT_NAME";

        	//subsumtext
        	var sExpr = 'expr:DEPT_NAME + " Count: " + dataset.getGroupRangeCount(currow)';
        	this.Tab00.Tabpage2.form.grd_sum.setCellProperty("body", 1, "subsumtext", sExpr);

        	//getSum, getGroupRangeStart, getGroupRangeCount
        	sExpr = 'dataset.getRowLevel(currow) > 0 ? dataset.getSum("SALARY", dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow)) : EMP_NAME';
        	this.Tab00.Tabpage2.form.grd_sum.setCellProperty("body", 3, "expr", sExpr);

        	//displaytype
        	sExpr = 'expr:dataset.getRowLevel(currow) > 0 ? "number" : "normal"';
        	this.Tab00.Tabpage2.form.grd_sum.setCellProperty("body", 3, "displaytype", sExpr);

        	//suppress
        	this.Tab00.Tabpage2.form.grd_sum.setCellProperty("body", 0, "suppress", "1");
        	this.Tab00.Tabpage2.form.grd_sum.setCellProperty("body", 1, "suppress", "2");
        };

        this.Tab00_onchanged = function(obj,e)
        {
        	//init
        	this.ds_sum.keystring = "";
        	this.ds_sum.reversesubsum = false;
        	this.Tab00.Tabpage1.form.grd_sum.summarytype = "default";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Tab00.Tabpage1.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Tab00.Tabpage1.form.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Tab00.Tabpage1.form.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Tab00.Tabpage1.form.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Tab00.Tabpage2.form.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("Sample_GridSum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
