(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Performance_tracelog");
            this.set_titletext("enableredraw");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "84"},{"Column0" : "2","Column1" : "824+"},{"Column0" : "3","Column1" : "42+6"},{"Column0" : "5","Column1" : "87468762"},{"Column0" : "1","Column1" : "46"},{"Column0" : "2","Column1" : "65"},{"Column0" : "3","Column1" : "321"},{"Column0" : "5","Column1" : "4"},{"Column0" : "1","Column1" : "6"},{"Column0" : "2","Column1" : "684"},{"Column0" : "3","Column1" : "84"},{"Column0" : "5","Column1" : "6"},{"Column0" : "0","Column1" : "684"},{"Column0" : "2","Column1" : "84"},{"Column0" : "3","Column1" : "46"},{"Column0" : "1","Column1" : "4"},{"Column0" : "2","Column1" : "+8"},{"Column0" : "2","Column1" : "842"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "1","Column1" : "+874"},{"Column0" : "2","Column1" : "842"},{"Column0" : "3","Column1" : "847+2"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "5","Column1" : "2+"},{"Column0" : "5","Column1" : "2+"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","8","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid enableredraw properties");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","59",null,null,"311","81",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_extendsizetype("row");
            obj.set_scrollbartype("auto auto");
            obj.set_scrolltype("vertical");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"142\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"grd_WF_headStyle\"/><Cell col=\"1\" cssclass=\"grd_WF_headStyle\" expr=\"currow+1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stCnt","310","236",null,"30","497",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","310","116","193","51",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("enableredraw=true\r\n(default)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","310","60","193","51",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("reload");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","310","172","193","51",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enableredraw\r\n(false->true)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","309","274","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Time(Seconds)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mk_time","429","274","68","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("0");
            obj.set_enable("false");
            obj.set_color("red");
            obj.set_font("bold 14px/normal \"Verdana\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stCnt00",null,"275","290","30","401",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Performance_grid_enableredraw.xfdl", function() {
        var sStartTime;
        this.Button00_onclick = function(obj,e)
        {
        	var objDate = new Date();
        	sStartTime = objDate.getTime();

        	this.Dataset00.filter("Column0 == '1' || Column0 == '2' ");

        	for(var i=0; i<this.Dataset00.rowcount; i++) {
        		if(this.Dataset00.getColumn(i, "Column0") == '2') {
        			this.Grid00.setRealRowSize(i, 10, -1,  false );
        		} else {
        			this.Grid00.setRealRowSize(i, 15, -1,  false );
        		}
        	}
        	this.Grid00.setOffsetHeight(this.Grid00.getRealRowFullSize()+1);
        	this.resetScroll();

        	objDate = new Date();
        	this.mk_time.value = (objDate.getTime()-sStartTime)/1000 ;

        };

        this.Button01_onclick = function(obj,e)
        {
        	var objDate = new Date();
        	sStartTime = objDate.getTime();

        	this.Dataset00.filter("Column0 == '1' || Column0 == '2' ");

        	this.Grid00.enableredraw = false; /* enableredraw=false */
        	for(var i=0; i<this.Dataset00.rowcount; i++) {
        		if(this.Dataset00.getColumn(i, "Column0") == '2') {
        			this.Grid00.setRealRowSize(i, 10, -1,  false );
        		} else {
        			this.Grid00.setRealRowSize(i, 15, -1,  false );
        		}
        	}
        	this.Grid00.setOffsetHeight(this.Grid00.getRealRowFullSize()+1);
        	this.Grid00.enableredraw = true; /* enableredraw=true */
        	this.resetScroll();

        	objDate = new Date();
        	this.mk_time.value = (objDate.getTime()-sStartTime)/1000 ;

        };

        this.Performance_tracelog_onload = function(obj,e)
        {
        	this.stCnt.text = "Number of data : " + this.gfn_appendComma(this.Dataset00.rowcount);
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Performance_tracelog_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Performance_grid_enableredraw.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
