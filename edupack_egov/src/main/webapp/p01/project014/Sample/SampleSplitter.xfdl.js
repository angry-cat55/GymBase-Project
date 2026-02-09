(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleSplitter");
            this.set_titletext("Splitter");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Category","type" : "STRING","size" : "256"},{"id" : "Region","type" : "String","size" : "256"},{"id" : "Rep","type" : "String","size" : "256"},{"id" : "Item","type" : "String","size" : "256"},{"id" : "Units","type" : "BIGDECIMAL","size" : "256"},{"id" : "UnitCost","type" : "BIGDECIMAL","size" : "256"}]},"Rows" : [{"Region" : "East","Rep" : "Jones","Item" : "Pencil","Units" : "95","UnitCost" : "1","Category" : "Main"},{"Region" : "Central","Rep" : "Kivell","Item" : "Binder","Units" : "50","UnitCost" : "19","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Pencil","Units" : "36","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Gill","Item" : "Pen","Units" : "27","UnitCost" : "19","Category" : "Sub"},{"Region" : "West","Rep" : "Sorvino","Item" : "Pencil","Units" : "56","UnitCost" : "2","Category" : "Main"},{"Region" : "East","Rep" : "Jones","Item" : "Binder","Units" : "60","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Andrews","Item" : "Pencil","Units" : "75","UnitCost" : "1","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Pencil","Units" : "90","UnitCost" : "4","Category" : "Sub"},{"Region" : "West","Rep" : "Thompson","Item" : "Pencil","Units" : "32","UnitCost" : "1","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Binder","Units" : "60","UnitCost" : "8","Category" : "Main"},{"Region" : "Central","Rep" : "Morgan","Item" : "Pencil","Units" : "90","UnitCost" : "4","Category" : "Sub"},{"Region" : "East","Rep" : "Howard","Item" : "Binder","Units" : "29","UnitCost" : "1","Category" : "Main"},{"Region" : "East","Rep" : "Parent","Item" : "Binder","Units" : "81","UnitCost" : "19","Category" : "Main"},{"Region" : "East","Rep" : "Jones","Item" : "Pencil","Units" : "35","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Smith","Item" : "Desk","Units" : "2","UnitCost" : "125","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Pen Set","Units" : "16","UnitCost" : "15","Category" : "Main"},{"Region" : "Central","Rep" : "Morgan","Item" : "Binder","Units" : "28","UnitCost" : "8","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Pen","Units" : "64","UnitCost" : "8","Category" : "Main"},{"Region" : "East","Rep" : "Parent","Item" : "Pen","Units" : "15","UnitCost" : "19","Category" : "Main"},{"Region" : "Central","Rep" : "Kivell","Item" : "Pen Set","Units" : "96","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Smith","Item" : "Pencil","Units" : "67","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "East","Rep" : "Parent","Item" : "Pen Set","Units" : "74","UnitCost" : "15","Category" : "Main"},{"Region" : "Central","Rep" : "Gill","Item" : "Binder","Units" : "46","UnitCost" : "8","Category" : "Sub"},{"Region" : "Central","Rep" : "Smith","Item" : "Binder","Units" : "87","UnitCost" : "15","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Binder","Units" : "4","UnitCost" : "4","Category" : "Main"},{"Region" : "West","Rep" : "Sorvino","Item" : "Binder","Units" : "7","UnitCost" : "19","Category" : "Main"},{"Region" : "Central","Rep" : "Jardine","Item" : "Pen Set","Units" : "50","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Andrews","Item" : "Pencil","Units" : "66","UnitCost" : "1","Category" : "Sub"},{"Region" : "East","Rep" : "Howard","Item" : "Pen","Units" : "96","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Gill","Item" : "Pencil","Units" : "53","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "Central","Rep" : "Gill","Item" : "Binder","Units" : "80","UnitCost" : "8","Category" : "Sub"},{"Region" : "Central","Rep" : "Kivell","Item" : "Desk","Units" : "5","UnitCost" : "125","Category" : "Sub"},{"Region" : "East","Rep" : "Jones","Item" : "Pen Set","Units" : "62","UnitCost" : "4","Category" : "Main"},{"Region" : "Central","Rep" : "Morgan","Item" : "Pen Set","Units" : "55","UnitCost" : "12.49","Category" : "Sub"},{"Region" : "Central","Rep" : "Kivell","Item" : "Pen Set","Units" : "42","UnitCost" : "23.95","Category" : "Sub"},{"Region" : "West","Rep" : "Sorvino","Item" : "Desk","Units" : "3","UnitCost" : "275","Category" : "Main"},{"Region" : "Central","Rep" : "Gill","Item" : "Pencil","Units" : "7","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "West","Rep" : "Sorvino","Item" : "Pen","Units" : "76","UnitCost" : "1","Category" : "Main"},{"Region" : "West","Rep" : "Thompson","Item" : "Binder","Units" : "57","UnitCost" : "19","Category" : "Main"},{"Region" : "Central","Rep" : "Andrews","Item" : "Pencil","Units" : "14","UnitCost" : "1.29","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Binder","Units" : "11","UnitCost" : "4","Category" : "Sub"},{"Region" : "Central","Rep" : "Jardine","Item" : "Binder","Units" : "94","UnitCost" : "19","Category" : "Sub"},{"Region" : "Central","Rep" : "Andrews","Item" : "Binder","Units" : "28","UnitCost" : "4","Category" : "Sub"},{"Category" : "Sub","Region" : "Central","Rep" : "Jardine","Item" : "Pencil","Units" : "90","UnitCost" : "4"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","20","210",null,"114","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter00","20","grd00:5",null,"6","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("type").set("vertical");
            obj.getSetter("background").set("#cccdcf");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"140","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("Splitter 기능 적용방법\n1. Splitter 컴포넌트 추가\n2. type 속성 확인(vertical, horizontal)\n3. form onload 이벤트에서 Splitter 초기화\n   - Splittter.addItem() 메소드로 item 적용\n   - Splittter.addSplitter() 메소드로 최대, 최소 position 기준 컴포넌트 세팅");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","20","Splitter00:5",null,"141","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","20","508",null,"170","540",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","359","12","90","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn01","359","45","90","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn02","358","78","90","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd01","10","10","341","142",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Splitter("Splitter01","div00:5","508","6","170",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("3");
            obj.getSetter("max").set("1000");
            obj.getSetter("cssclass").set("spl_WF_H");
            obj.getSetter("min").set("15");
            obj.getSetter("background").set("#cccdcf");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","Splitter01:5","508",null,"170","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","20","710","297","179",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category1\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter02","grd03:5","710","6","179",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("7");
            obj.getSetter("cssclass").set("spl_WF_H");
            obj.getSetter("min").set("15");
            obj.getSetter("max").set("1000");
            obj.getSetter("background").set("#cccdcf");
            this.addChild(obj.name, obj);

            obj = new Grid("grd04","Splitter02:5","710","344","179",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category2\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Splitter("Splitter03","grd04:5","710","6","179",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("9");
            obj.getSetter("max").set("1000");
            obj.getSetter("cssclass").set("spl_WF_H");
            obj.getSetter("min").set("-1");
            obj.getSetter("background").set("#cccdcf");
            this.addChild(obj.name, obj);

            obj = new Grid("grd05","Splitter03:5","710","299","179",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Category3\"/><Cell col=\"1\" text=\"Region\"/><Cell col=\"2\" text=\"Rep\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"Units\"/><Cell col=\"5\" text=\"UnitCost\"/></Band><Band id=\"body\"><Cell text=\"bind:Category\"/><Cell col=\"1\" text=\"bind:Region\"/><Cell col=\"2\" text=\"bind:Rep\"/><Cell col=\"3\" text=\"bind:Item\"/><Cell col=\"4\" text=\"bind:Units\"/><Cell col=\"5\" text=\"bind:UnitCost\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Splitter");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,920,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleSplitter.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 컴포넌트 및 연동 > Splitter
        *  @FileName 	SampleSplitter.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/02/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/02/03      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	//Splitter item 적용
        	this.Splitter00.addItem([{componentid:"grd00", offset:5, position:"top"}, {componentid:"grd01", offset:5, position:"bottom"}]);
        	this.Splitter01.addItem([{componentid:"div00", offset:5, position:"left"}, {componentid:"grd02", offset:5, position:"right"}]);

        	//Splitter 최소, 최대 position 기준 컴포넌트 적용
        	//순서 : top, bottom, left, right
        	this.Splitter00.addSplitter(this.stc, this.Splitter01, null, null);

        	this.Splitter02.addItem([{componentid:"grd03", offset:5, position:"left"}, {componentid:"grd04", offset:5, position:"right"}]);
        	this.Splitter03.addItem([{componentid:"grd04", offset:5, position:"left"}, {componentid:"grd05", offset:5, position:"right"}]);

        	this.Splitter02.addSplitter(null, null, null, this.Splitter03);
        	this.Splitter03.addSplitter(null, null, this.Splitter02, null);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
        };
        this.loadIncludeScript("SampleSplitter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
