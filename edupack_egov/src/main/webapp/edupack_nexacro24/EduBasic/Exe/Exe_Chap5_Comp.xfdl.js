(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe_Chap5_Comp");
            this.set_titletext("Exe2_Chap5_Comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset2", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL_NAME","type" : "STRING","size" : "50"},{"id" : "COL_SIZE","type" : "INT","size" : "10"},{"id" : "COL_COLOR","type" : "STRING","size" : "10"}]},"Rows" : [{"COL_NAME" : "Olivia","COL_SIZE" : "200","COL_COLOR" : "gold"},{"COL_NAME" : "John","COL_SIZE" : "150","COL_COLOR" : "greenyellow"},{"COL_NAME" : "Jackson","COL_SIZE" : "250","COL_COLOR" : "pink"},{"COL_NAME" : "Maia","COL_SIZE" : "100","COL_COLOR" : "khaki"},{"COL_NAME" : "Adam","COL_SIZE" : "80","COL_COLOR" : "lavender"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static06","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exercise - Common");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","40","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Exe 1 - Position & Position Base");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","81","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("3_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_5","10","241","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("3_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20",null,null,"186","70","193",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_positionstep("1");
            obj.set_binddataset("Dataset2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"COL_NAME\"/><Cell col=\"1\" text=\"COL_SIZE\"/><Cell col=\"2\" text=\"COL_COLOR\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:COL_SIZE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:COL_COLOR\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div2","476","70","418","148",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div");
            obj.set_positionstep("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_3","10","161","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("3_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","121","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_4","10","201","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Exe 3 - Dynamic Creation");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","80","83","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("컴포넌트 동적 생성");
            obj.set_cssclass("sta_WF_GuideDesc");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00","80","119","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("동적 생성힌 컴포넌트 삭제");
            obj.set_cssclass("sta_WF_GuideDesc");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","80","200","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div 안에 동적 생성힌 컴포넌트 삭제");
            obj.set_cssclass("sta_WF_GuideDesc");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_01","80","160","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div 안에 컴포넌트 동적 생성");
            obj.set_cssclass("sta_WF_GuideDesc");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_02","80","241","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("컴포넌트에 동적 이벤트 생성");
            obj.set_cssclass("sta_WF_GuideDesc");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","363","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Exe 2 - Unit em, rem");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","-17","409","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Divfont","81","409","288","26",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var rdo_Divfont_innerdataset = new nexacro.NormalDataset("rdo_Divfont_innerdataset", obj);
            rdo_Divfont_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "10px 'Arial'"},{"codecolumn" : "1","datacolumn" : "20px 'Arial'"},{"codecolumn" : "2","datacolumn" : "30px 'Arial'"}]});
            obj.set_innerdataset(rdo_Divfont_innerdataset);
            obj.set_text("");
            obj.set_value("10px \'Arial\'");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","-15","440","36.54em","3.15em",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Button Position :  width = \"10.00 em\" , height = \"2.00 em\" , font = \"13px\"");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Div("div_em","20.00","483","400","175",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            obj.set_font("26px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_em","20.00","10","11em","2em",null,null,null,null,null,null,this.div_em.form);
            obj.set_taborder("1");
            obj.set_value("w: 11em == 143px");
            obj.set_textAlign("center");
            obj.set_text("w: 11em == 143px");
            this.div_em.addChild(obj.name, obj);

            obj = new Button("btn_em","20","edt_em:14","11em","2.00em",null,null,null,null,null,null,this.div_em.form);
            obj.set_taborder("0");
            obj.set_text("h: 2em == 26px");
            this.div_em.addChild(obj.name, obj);

            obj = new Static("Static11","483","409","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_text("Mainframe  ");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Mainfont","601","409","288","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var rdo_Mainfont_innerdataset = new nexacro.NormalDataset("rdo_Mainfont_innerdataset", obj);
            rdo_Mainfont_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "10px 'Arial'"},{"codecolumn" : "1","datacolumn" : "20px 'Arial'"},{"codecolumn" : "2","datacolumn" : "30px 'Arial'"}]});
            obj.set_innerdataset(rdo_Mainfont_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","485","440","41.25rem","41",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Button Position :  width = \"10.83 rem\" , height = \"2.00 rem\" ");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_font("600 0.9rem/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_rem","519","483","400","175",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            obj.set_font("26px/normal \"Segoe UI\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rem","20.00","10","11.916666666666666rem","2.1666666666666665rem",null,null,null,null,null,null,this.div_rem.form);
            obj.set_taborder("1");
            obj.set_value("w: 11.92rem == 143px");
            obj.set_textAlign("center");
            obj.set_text("w: 11.92rem == 143px");
            this.div_rem.addChild(obj.name, obj);

            obj = new Button("btn_rem","20","edt_rem:14","11.92rem","2.17rem",null,null,null,null,null,null,this.div_rem.form);
            obj.set_taborder("0");
            obj.set_text("h: 2.17rem == 26px");
            this.div_rem.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_6","20","517","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("3_6");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_02_00","90","517","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("컴포넌트에 동적 바인드");
            obj.set_cssclass("sta_WF_GuideDesc");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bind","260","517","176","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("script bind");
            obj.set_positionstep("1");
            obj.set_text("script bind");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_grip","400","304","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cursor("nw-resize");
            obj.set_image("url(\'theme://images/img_SB_Grip.png\')");
            this.addChild(obj.name, obj);

            obj = new Div("div_base","10","72",null,null,"img_grip:-7","img_grip:-7",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_border("1px solid #9c9c9c");
            obj.set_background("#f2f2f2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_base","20","190",null,"30","300",null,null,null,null,null,this.div_base.form);
            obj.set_taborder("0");
            obj.set_text("btn_base");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("btn_per","100","110","50%","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("1");
            obj.set_text("Get Width");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("btn_arrange","btn_base:10","190","200","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("2");
            obj.set_text("Get Left");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static02","70","0","260","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("3");
            obj.set_text("left=\"100\" right = \"100\" width=null");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","60","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("4");
            obj.set_text("null");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static03","10","80","124","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("5");
            obj.set_text("Percent(%)");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static04","134","80","210","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("6");
            obj.set_text("width = \"50%\"");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static05","10","160","134","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("7");
            obj.set_text("Position Base");
            obj.set_cssclass("sta_WF_LabelTxt");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static06","144","160","170","30",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("8");
            obj.set_text("left=\"btn_base:10\"");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("btn_null","100","30",null,"30","100",null,null,null,null,null,this.div_base.form);
            obj.set_taborder("9");
            obj.set_text("Get Width");
            this.div_base.addChild(obj.name, obj);

            obj = new TextArea("txt_log","div_base:10","73","220","div_base:50%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div2
            obj = new Layout("default","",0,0,this.Div2.form,function(p){});
            this.Div2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_em.form
            obj = new Layout("default","",0,0,this.div_em.form,function(p){});
            this.div_em.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_rem.form
            obj = new Layout("default","",0,0,this.div_rem.form,function(p){});
            this.div_rem.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_base.form
            obj = new Layout("default","",0,0,this.div_base.form,function(p){});
            this.div_base.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap5_Comp.xfdl", function() {

        this._split_num = 24;


        // Exe 1
        this.fn_getWidth = function(obj,e)
        {
        	var sTxt = "";
        	sTxt  = "obj.width = " + obj.width + "\n";
        	sTxt += "obj.getOffsetWidth() = " + obj.getOffsetWidth() + "\n";
        	sTxt += "obj.getPixelWidth() = " + obj.getPixelWidth();

        	this.txt_log.value=sTxt;
        };

        this.fn_getWidthPer = function(obj,e)
        {
        	var sTxt = "";
        	sTxt  = "obj.width = " + obj.width + "\n";
        	sTxt += "obj.getOffsetWidth() = " + obj.getOffsetWidth() + "\n";
        	sTxt += "obj.getPixelWidth() = " + obj.getPixelWidth();

        	this.txt_log.value=sTxt;
        };

        this.fn_getArrange = function(obj,e)
        {
        	var sTxt = "";
        	sTxt  = "obj.left = " + obj.left + "\n";
        	sTxt += "obj.getOffsetLeft() = " + obj.getOffsetLeft() + "\n";
        	sTxt += "obj.getPixelLeft() = " + obj.getPixelLeft();

        	this.txt_log.value=sTxt;
        };



        this.obj_ondrag = function(obj,e)
        {
        	return true;
        };

        this.obj_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;
        };

        this.Form_ondragmove = function(obj,e)
        {
        	e.sourceobject.move(e.clientx-e.sourceobject.nX, e.clienty-e.sourceobject.nY);
        	this.resetScroll();
        };

        // Exe2-1 Div font change
        this.rdo_Divfont_onitemchanged = function(obj,e)
        {
        	this.div_em.form.font = this.rdo_Divfont.text;
        	this.div_rem.form.font = this.rdo_Divfont.text;

        	if(this.rdo_Divfont.value ==1)
        	{
        		this.div_em.form.edt_em.value = "w: 10em == 200px";
        		this.div_em.form.btn_em.text = "h: 3em == 60px";

        	} else if(this.rdo_Divfont.value ==2)
        	{
        		this.div_em.form.edt_em.value = "w: 10em == 300px";
        		this.div_em.form.btn_em.text = "h: 3em == 90px";
        	} else if(this.rdo_Divfont.value ==0)
        	{
        		this.div_em.form.edt_em.value = "w: 10em == 100px";
        		this.div_em.form.btn_em.text = "h: 3em == 30px";
        	}

        	this.divmove();
        };


        // Exe2-1 Mainframe font change
        this.rdo_Mainfont_onitemchanged = function(obj,e)
        {

        	this.parent.parent.font = this.rdo_Mainfont.text;
        	this.resetScroll();
        	this.divmove();

        	if(this.rdo_Mainfont.value ==1)
        	{
        		this.div_rem.form.edt_rem.value = "w: 10rem == 200px";
        		this.div_rem.form.btn_rem.text = "h: 3rem == 60px";

        	} else if(this.rdo_Mainfont.value ==2)
        	{
        		this.div_rem.form.edt_rem.value = "w: 10rem == 300px";
        		this.div_rem.form.btn_rem.text = "h: 3rem == 90px";

        	} else if(this.rdo_Mainfont.value ==0)
        	{
        		this.div_rem.form.edt_rem.value = "w: 10rem == 100px";
        		this.div_rem.form.btn_rem.text = "h: 3rem == 30px";
        	}

        };

        this.divmove = function()
        {
        	this.div_em.form.resetScroll();
        	this.div_rem.form.resetScroll();
        }



        // Form onload 이벤트에서 실행할 함수
        this.form_onload = function(obj, e) {
            this.adjustFontSize();
        }

        // 화면 크기 변경 시 호출되는 이벤트
        this.form_onsize = function(obj, e) {
            this.adjustFontSize();
        }

        // 화면 크기에 따라 폰트 크기 변경
        this.adjustFontSize = function() {

            var width = this.getOffsetWidth();  // 현재 화면의 가로 크기 가져오기
        	var comp = this.components;

        	if (comp && comp.length)
        	{
        		var font =  'normal 600 0.8rem/normal "Segoe UI,Malgun Gothic"';
        		var font2 =  'normal 600 1.0rem/normal "Segoe UI,Malgun Gothic"';

        		for (var i = 0; i < comp.length ; i++)
        		{
        			if (comp[i] && comp[i].taborder > this._split_num)
        			{
        				if (width <= 1000) {

        					comp[i].set_font(font);
        					this.resetScroll();

        				} else {

        					comp[i].set_font(font2);  // 화면 가로 크기가 601px 이상일 때 폰트 크기 18px로 설정
        					this.resetScroll();
        				}

        			}
        		}
        		this.rdo_Mainfont_onitemchanged();
        		this.divmove();
        	}


        }


        // Exe 3-1(Create Components on Form)
        this.btn_Exe2_1_onclick = function(obj,e)
        {
        	var objBtn = new Button();

        	objBtn.init("btn_Comp", 320, 80, 150, 100);
        	this.addChild("btn_Comp", objBtn);
        	objBtn.positionstep = 1;
        	objBtn.text="Created Button";
        	objBtn.background="skyblue";
        	objBtn.show();
        };

        // Exe 3-2(Destroy Components on Form)
        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	var objBtn = this.removeChild("btn_Comp");
        	objBtn.destroy();
        	objBtn = null;
        };


        // Exe 3-3 (Create Components on Div)
        this.btn_Exe2_3_onclick = function(obj,e)
        {
        	var objDivBtn = new Button();
        	objDivBtn.init("btn_divComp", 20, 10, 150, 100);
        	this.Div2.form.addChild("btn_divComp", objDivBtn);
        	objDivBtn.text="Created Div Button";
        	objDivBtn.background="greenyellow";
        	objDivBtn.show();
        };


        // Exe3-4 (Destroy Components on Div)
        this.btn_Exe2_4_onclick = function(obj,e)
        {
        	var objBtn = this.Div2.form.removeChild("btn_divComp");
        	objBtn.destroy();
        	objBtn = null;

        };

        // Exe3-5 Add Event Handler
        this.btn_Exe2_5_onclick = function(obj,e)
        {
        	if(!this.isValidObject(this.btn_Comp)){
        		this.btn_Exe2_1_onclick();
        	}
        	this.btn_Comp.addEventHandler("onclick", this.fn_temp, this);

        };

        this.fn_temp = function()
        {
        	this.alert("Add Event Handler");
        };

        // Exe3- d Data Binding
        this.btn_Exe2_6_onclick = function(obj,e)
        {
        	var objBindItem = new BindItem();
        	objBindItem.init("item00", "edt_bind", "value", "Dataset2", "COL_NAME");
        	this.addChild("item00", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item01", "edt_bind", "width", "Dataset2", "COL_SIZE");
        	this.addChild("item01", objBindItem);
        	objBindItem.bind();

        	objBindItem = new BindItem();
        	objBindItem.init("item02", "edt_bind", "background", "Dataset2", "COL_COLOR");
        	this.addChild("item02", objBindItem);
        	objBindItem.bind();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.Form_ondragmove,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_5.addEventHandler("onclick",this.btn_Exe2_5_onclick,this);
            this.btn_Exe2_3.addEventHandler("onclick",this.btn_Exe2_3_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe2_4.addEventHandler("onclick",this.btn_Exe2_4_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static08_00.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static08_00_00.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static08_01.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static08_02.addEventHandler("onclick",this.Static08_onclick,this);
            this.rdo_Divfont.addEventHandler("onitemchanged",this.rdo_Divfont_onitemchanged,this);
            this.Static05.addEventHandler("onclick",this.Static00_00_00_onclick,this);
            this.rdo_Mainfont.addEventHandler("onitemchanged",this.rdo_Mainfont_onitemchanged,this);
            this.div_rem.form.edt_rem.addEventHandler("onchanged",this.div_unit00_Edit00_onchanged,this);
            this.btn_Exe2_6.addEventHandler("onclick",this.btn_Exe2_6_onclick,this);
            this.Static08_02_00.addEventHandler("onclick",this.Static08_onclick,this);
            this.img_grip.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_grip.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.div_base.form.btn_base.addEventHandler("onclick",this.div_base_btn_base_onclick,this);
            this.div_base.form.btn_per.addEventHandler("onclick",this.fn_getWidthPer,this);
            this.div_base.form.btn_arrange.addEventHandler("onclick",this.fn_getArrange,this);
            this.div_base.form.btn_null.addEventHandler("onclick",this.fn_getWidth,this);
        };
        this.loadIncludeScript("Exe_Chap5_Comp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
