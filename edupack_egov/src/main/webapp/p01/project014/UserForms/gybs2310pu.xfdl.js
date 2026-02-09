(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs2310pu");
            this.set_titletext("헬스장 상세 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_machineTargetList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"},{"id" : "READONLY","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "CHEST","NAME" : "가슴","READONLY" : "0"},{"CODE" : "BACK","NAME" : "등","READONLY" : "0"},{"CODE" : "SHOULDER","NAME" : "어깨","READONLY" : "0"},{"CODE" : "TRAPS","NAME" : "승모","READONLY" : "0"},{"CODE" : "QUADS","NAME" : "대퇴사두","READONLY" : "0"},{"CODE" : "HAMS","NAME" : "햄스트링","READONLY" : "0"},{"CODE" : "GLUTES","NAME" : "둔근","READONLY" : "0"},{"CODE" : "CALVES","NAME" : "종아리","READONLY" : "0"},{"CODE" : "BICEPS","NAME" : "이두","READONLY" : "0"},{"CODE" : "TRICEPS","NAME" : "삼두","READONLY" : "0"},{"CODE" : "FOREARM","NAME" : "전완","READONLY" : "0"},{"CODE" : "ABS","NAME" : "복근","READONLY" : "0"},{"CODE" : "CARDIO","NAME" : "유산소","READONLY" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_gymInfo","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid #efefef");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","44","29","310","190",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("0");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_image("url(\'imagerc::gym_image/Gym01.png\')");
            obj.set_stretch("fit");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("Static00","375","40",null,"40","40",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("#ffffff");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Static("Static00_00","375","110",null,"40","40",null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_background("#ffffff");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","300","240","372","224",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.div_gymInfo.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","12","120","201",null,null,null,null,null,null,this.div_gymInfo.form.PopupDiv00.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.div_gymInfo.form.PopupDiv00.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","175","12","170","198",null,null,null,null,null,null,this.div_gymInfo.form.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_machineTargetList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonlycolumn("READONLY");
            obj.set_columncount("2");
            this.div_gymInfo.form.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_close","58","436","120","50",null,null,null,null,null,null,this.div_gymInfo.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.div_gymInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_gymInfo.form.PopupDiv00.form
            obj = new Layout("default","",0,0,this.div_gymInfo.form.PopupDiv00.form,function(p){});
            this.div_gymInfo.form.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_gymInfo.form
            obj = new Layout("default","",0,0,this.div_gymInfo.form,function(p){});
            this.div_gymInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,920,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs2310pu.xfdl", function() {

        this.div_gymInfo_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_gymInfo.form.btn_close.addEventHandler("onclick",this.div_gymInfo_btn_close_onclick,this);
        };
        this.loadIncludeScript("gybs2310pu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
