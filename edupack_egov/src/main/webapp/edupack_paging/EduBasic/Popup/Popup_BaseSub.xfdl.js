(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PopupSub");
            this.set_titletext("Form_PopupSub");
            this.set_border("1px solid #9c9c9c");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_one","30","343","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("default");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_obj","252","343","91","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("opener call");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_data","140","117","310","155",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_child");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30","308","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("return data");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_multi1","105","343","84","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("separator");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_multi2","194","343","53","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("json");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","55","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("string");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_string","140","55","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","86","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("number");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_number","140","86","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("#,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","117","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("object");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","20","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("get parameter");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","398","91","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","424","91","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","348","343","56","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("close");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,420,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_BaseSub.xfdl", function() {
        this.form_onload = function(obj,e)
        {
         	var objFrame = this.getOwnerFrame();
        //	objFrame.titlebar.closebutton.set_visible(false);
        	objFrame.titlebar.closebutton.visible = false;
        	this.titletext = objFrame.param_title;

        	this.edt_string.value = objFrame.param_string;
        	this.msk_number.value = objFrame.param_number;
        	this.ds_child.copyData(objFrame.param_object);


        	if(objFrame.param_title == "Modeless Popup"){
        		this.btn_one.enable = false;
        		this.btn_multi1.enable = false;
        		this.btn_multi2.enable = false;
        	}

        };


        // return one value
        this.btn_one_onclick = function(obj,e)
        {
        	var rtn = this.edt_string.value;
        	this.close(rtn);
        };

        // return multi value 1
        this.btn_multi1_onclick = function(obj,e)
        {
        	var rtn1 = this.edt_string.value;
        	var rtn2 = this.msk_number.value;
        	this.close(rtn1 + "||" + rtn2);
        };

        // return multi value 2
        this.btn_multi2_onclick = function(obj,e)
        {
        	var objRtn = { rtn1 : this.edt_string.value,
        	               rtn2 : this.msk_number.value }
        	this.close(JSON.stringify(objRtn));
        };

        // return Object -  Parent Function Call
        this.btn_obj_onclick = function(obj,e)
        {
        	this.opener.fn_return(this.ds_child);
        	this.close();
        };

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_child.addRow();
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	this.ds_child.deleteRow(this.ds_child.rowposition);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_one.addEventHandler("onclick",this.btn_one_onclick,this);
            this.btn_obj.addEventHandler("onclick",this.btn_obj_onclick,this);
            this.btn_multi1.addEventHandler("onclick",this.btn_multi1_onclick,this);
            this.btn_multi2.addEventHandler("onclick",this.btn_multi2_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("Popup_BaseSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
