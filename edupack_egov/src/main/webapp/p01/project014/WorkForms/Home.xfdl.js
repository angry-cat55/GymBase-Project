(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Home");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gymList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Id","type" : "STRING","size" : "256"},{"id" : "Name","type" : "STRING","size" : "256"},{"id" : "Region","type" : "STRING","size" : "256"},{"id" : "OwnerName","type" : "STRING","size" : "256"},{"id" : "UploadDate","type" : "STRING","size" : "256"},{"id" : "ImgUrl","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{},{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_membetshipList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Id","type" : "STRING","size" : "256"},{"id" : "GymId","type" : "STRING","size" : "256"},{"id" : "StartDay","type" : "STRING","size" : "256"},{"id" : "EndDay","type" : "STRING","size" : "256"},{"id" : "Price","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_Gym","58","60","362","620",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Sta_RecentGym","28","20","164","50",null,null,null,null,null,null,this.Div_Gym.form);
            obj.set_taborder("0");
            obj.set_text("최근 등록 헬스장");
            obj.set_background("pink");
            this.Div_Gym.addChild(obj.name, obj);

            obj = new Grid("Grd_GymList","29","80","307","452",null,null,null,null,null,null,this.Div_Gym.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_gymList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Region\"/><Cell col=\"3\" text=\"OwnerName\"/><Cell col=\"4\" text=\"UploadDate\"/><Cell col=\"5\" text=\"ImgUrl\"/></Band><Band id=\"body\"><Cell text=\"bind:Id\"/><Cell col=\"1\" text=\"bind:Name\"/><Cell col=\"2\" text=\"bind:Region\"/><Cell col=\"3\" text=\"bind:OwnerName\"/><Cell col=\"4\" text=\"bind:UploadDate\"/><Cell col=\"5\" text=\"bind:ImgUrl\"/></Band></Format></Formats>");
            this.Div_Gym.addChild(obj.name, obj);

            obj = new Div("Div_Membership","450","50","362","620",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Sta_RecentMembership","28","20","164","50",null,null,null,null,null,null,this.Div_Membership.form);
            obj.set_taborder("0");
            obj.set_text("최근 올라온 정기권");
            obj.set_background("pink");
            this.Div_Membership.addChild(obj.name, obj);

            obj = new Grid("Grd_MembershipList","29","80","307","452",null,null,null,null,null,null,this.Div_Membership.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_membetshipList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"GymId\"/><Cell col=\"2\" text=\"StartDay\"/><Cell col=\"3\" text=\"EndDay\"/><Cell col=\"4\" text=\"Price\"/></Band><Band id=\"body\"><Cell text=\"bind:Id\"/><Cell col=\"1\" text=\"bind:GymId\"/><Cell col=\"2\" text=\"bind:StartDay\"/><Cell col=\"3\" text=\"bind:EndDay\"/><Cell col=\"4\" text=\"bind:Price\"/></Band></Format></Formats>");
            this.Div_Membership.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","888","50","362","620",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","28","20","164","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("최근 등록 헬스장");
            obj.set_background("pink");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div_Temp","-20","0","362","620",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Sta_Temp","28","20","164","50",null,null,null,null,null,null,this.Div00_00_00.form.Div_Temp.form);
            obj.set_taborder("0");
            obj.set_text("sadasdsadsadsa");
            obj.set_background("pink");
            this.Div00_00_00.form.Div_Temp.addChild(obj.name, obj);

            obj = new Grid("Grd_Temp","28","75","307","452",null,null,null,null,null,null,this.Div00_00_00.form.Div_Temp.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.Div00_00_00.form.Div_Temp.addChild(obj.name, obj);

            obj = new Div("Div_Gym00","40","740","362","620",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Sta_RecentGym","28","20","164","50",null,null,null,null,null,null,this.Div_Gym00.form);
            obj.set_taborder("0");
            obj.set_text("최근 등록 헬스장");
            obj.set_background("pink");
            this.Div_Gym00.addChild(obj.name, obj);

            obj = new Grid("Grd_GymList","29","80","307","452",null,null,null,null,null,null,this.Div_Gym00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_gymList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Region\"/><Cell col=\"3\" text=\"OwnerName\"/><Cell col=\"4\" text=\"UploadDate\"/><Cell col=\"5\" text=\"ImgUrl\"/></Band><Band id=\"body\"><Cell text=\"bind:Id\"/><Cell col=\"1\" text=\"bind:Name\"/><Cell col=\"2\" text=\"bind:Region\"/><Cell col=\"3\" text=\"bind:OwnerName\"/><Cell col=\"4\" text=\"bind:UploadDate\"/><Cell col=\"5\" text=\"bind:ImgUrl\"/></Band></Format></Formats>");
            this.Div_Gym00.addChild(obj.name, obj);

            obj = new Div("Div_Membership00","433","730","362","620",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Sta_RecentMembership","28","20","164","50",null,null,null,null,null,null,this.Div_Membership00.form);
            obj.set_taborder("0");
            obj.set_text("최근 올라온 정기권");
            obj.set_background("pink");
            this.Div_Membership00.addChild(obj.name, obj);

            obj = new Grid("Grd_MembershipList","29","80","307","452",null,null,null,null,null,null,this.Div_Membership00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_membetshipList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"GymId\"/><Cell col=\"2\" text=\"StartDay\"/><Cell col=\"3\" text=\"EndDay\"/><Cell col=\"4\" text=\"Price\"/></Band><Band id=\"body\"><Cell text=\"bind:Id\"/><Cell col=\"1\" text=\"bind:GymId\"/><Cell col=\"2\" text=\"bind:StartDay\"/><Cell col=\"3\" text=\"bind:EndDay\"/><Cell col=\"4\" text=\"bind:Price\"/></Band></Format></Formats>");
            this.Div_Membership00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","870","730","362","620",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","28","20","164","50",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("최근 등록 헬스장");
            obj.set_background("pink");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div_Temp","-20","0","362","620",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Sta_Temp","28","20","164","50",null,null,null,null,null,null,this.Div00_00_00_00.form.Div_Temp.form);
            obj.set_taborder("0");
            obj.set_text("sadasdsadsadsa");
            obj.set_background("pink");
            this.Div00_00_00_00.form.Div_Temp.addChild(obj.name, obj);

            obj = new Grid("Grd_Temp","28","75","307","452",null,null,null,null,null,null,this.Div00_00_00_00.form.Div_Temp.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.Div00_00_00_00.form.Div_Temp.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div_Gym.form
            obj = new Layout("default","",0,0,this.Div_Gym.form,function(p){});
            this.Div_Gym.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_Membership.form
            obj = new Layout("default","",0,0,this.Div_Membership.form,function(p){});
            this.Div_Membership.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form.Div_Temp.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form.Div_Temp.form,function(p){});
            this.Div00_00_00.form.Div_Temp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_Gym00.form
            obj = new Layout("default","",0,0,this.Div_Gym00.form,function(p){});
            this.Div_Gym00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div_Membership00.form
            obj = new Layout("default","",0,0,this.Div_Membership00.form,function(p){});
            this.Div_Membership00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form.Div_Temp.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form.Div_Temp.form,function(p){});
            this.Div00_00_00_00.form.Div_Temp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00_00.form,function(p){});
            this.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Home.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
