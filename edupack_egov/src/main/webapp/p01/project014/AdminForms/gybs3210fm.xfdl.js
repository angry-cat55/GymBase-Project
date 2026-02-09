(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs3210fm");
            this.set_titletext("헬스장 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gymInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"},{"id" : "TEL_NO","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"},{"id" : "IMG_PATH","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gymMachineList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MACHINE_CODE","type" : "STRING","size" : "256"},{"id" : "MACHINE_NAME","type" : "STRING","size" : "256"},{"id" : "IS_OWNED","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "IMAGE_ID","type" : "STRING","size" : "256"},{"id" : "IMAGE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("#ffe5fe");
            this.addChild(obj.name, obj);

            obj = new Div("div_gym","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_gym.form);
            obj.set_taborder("13");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_gym.addChild(obj.name, obj);

            obj = new ImageViewer("img_gymPhoto","20","30",null,"270","20",null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            obj.set_stretch("fit");
            this.div_gym.addChild(obj.name, obj);

            obj = new Button("btn_searchPost","447","365",null,"35","20",null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("1");
            obj.set_text("주소 검색");
            obj.set_cssclass("GB_Button");
            obj.set_font("normal 9pt/normal \"Arial\"");
            obj.set_enable("true");
            obj.set_border("1px solid #d4d4d4");
            this.div_gym.addChild(obj.name, obj);

            obj = new Edit("edt_post","146","365",null,"35","86",null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_cssclass("readonly");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_tooltiptext("주소를 변경하려면\r\n주소 검색 버튼을 사용하세요.");
            obj.set_tooltiptype("hover");
            obj.set_borderRadius("5px");
            this.div_gym.addChild(obj.name, obj);

            obj = new Static("sta_gymName","20","320","105","35",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("7");
            obj.set_text("헬스장 이름");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_gym.addChild(obj.name, obj);

            obj = new Static("sta_gymName00","20","365","105","35",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("8");
            obj.set_text("주소");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_gym.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00","20","410","105","35",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("9");
            obj.set_text("전화번호");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_gym.addChild(obj.name, obj);

            obj = new Edit("edt_gymName","146","320",null,"35","20",null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("0");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_cssclass("readonly");
            obj.set_enable("true");
            obj.set_text("");
            this.div_gym.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00_00","20","455","105","139",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("10");
            obj.set_text("상세 설명");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_gym.addChild(obj.name, obj);

            obj = new TextArea("txtArea_Desc","146","453",null,"140","20",null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("3");
            obj.set_scrollbartype("none none");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_enable("true");
            obj.set_cssclass("readonly");
            obj.set_padding("10px");
            this.div_gym.addChild(obj.name, obj);

            obj = new WebView("webPost","30","636","30","28",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.div_gym.addChild(obj.name, obj);

            obj = new Button("btn_changeProfile","458","250","40","40",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("12");
            obj.set_background("url(\'imagerc::form/editProfile.png\') no-repeat right center /contain #ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("20px");
            obj.set_enable("true");
            this.div_gym.addChild(obj.name, obj);

            obj = new MaskEdit("edt_gymTelNo","146","410","362","35",null,null,null,null,null,null,this.div_gym.form);
            obj.set_taborder("2");
            obj.set_letterSpacing("2px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_color("#000000");
            obj.set_font("normal 10pt/normal \"맑은 고딕\"");
            obj.set_padding("0px 10px");
            obj.set_textAlign("left");
            obj.set_enable("true");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_cssclass("readonly");
            obj.set_autoselect("true");
            this.div_gym.addChild(obj.name, obj);

            obj = new Button("btn_rewrite",null,null,"80","45","178","40",null,null,null,null,this.div_gym.form);
            obj.set_taborder("4");
            obj.set_text("다음");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_tabstop("true");
            this.div_gym.addChild(obj.name, obj);

            obj = new Button("btn_quit",null,null,"80","45","268","40",null,null,null,null,this.div_gym.form);
            obj.set_taborder("14");
            obj.set_text("나가기");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_tabstop("true");
            this.div_gym.addChild(obj.name, obj);

            obj = new Div("div_intro","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_intro.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_intro.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,null,"140","50","193","40",null,null,null,null,this.div_intro.form);
            obj.set_taborder("0");
            obj.set_text("헬스장 등록하기");
            obj.set_borderRadius("10px");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            this.div_intro.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","115","60","300","165",null,null,null,null,null,null,this.div_intro.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/Logo_c.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_intro.addChild(obj.name, obj);

            obj = new Static("sta_welcome","10","270","508","90",null,null,null,null,null,null,this.div_intro.form);
            obj.set_taborder("3");
            obj.set_text("GymBase의 새로운 파트너가 되신 것을\r\n\r\n진심으로 환영합니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 14pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_intro.addChild(obj.name, obj);

            obj = new Static("Static00","10","371",null,"170","10",null,null,null,null,null,this.div_intro.form);
            obj.set_taborder("4");
            obj.set_text("기존의 복잡하고 번거로웠던 정기권 양도 절차와\r\n\r\n신규 회원 유치에 대한 고민을 이제 GymBase가 덜어드립니다.\r\n\r\n\r\n직관적인 등록 절차를 통해 관리자님의 소중한 시간을 아껴드리고,\r\n\r\n등록된 정보는 잠재 회원들을 위한 가장 강력한 홍보 수단이 될 것입니다.");
            obj.set_color("#000000");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.div_intro.addChild(obj.name, obj);

            obj = new Div("div_machine","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_machine.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_machine.addChild(obj.name, obj);

            obj = new Button("btn_ok","273",null,"170","45",null,"40",null,null,null,null,this.div_machine.form);
            obj.set_taborder("0");
            obj.set_text("네, 바로 할게요");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_tabstop("true");
            this.div_machine.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","190","80","150","150",null,null,null,null,null,null,this.div_machine.form);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'imagerc::form/successUploadGym.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_machine.addChild(obj.name, obj);

            obj = new Static("sta_text1","10","266",null,"80","10",null,null,null,null,null,this.div_machine.form);
            obj.set_taborder("3");
            obj.set_text("등록 신청이 완료되었습니다!\r\n\r\n운영자의 승인을 기다려주세요.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 15pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_machine.addChild(obj.name, obj);

            obj = new Static("sta_text2","10","361",null,"180","10",null,null,null,null,null,this.div_machine.form);
            obj.set_taborder("4");
            obj.set_text("미리 보유 기구 목록을 등록해두시면,\r\n\r\n승인 후 바로 회원들에게 헬스장을\r\n\r\n더욱 매력적으로 소개할 수 있습니다.\r\n\r\n\r\n지금 바로 등록을 진행할까요?");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_machine.addChild(obj.name, obj);

            obj = new Button("btn_no",null,null,"170","45","270","40",null,null,null,null,this.div_machine.form);
            obj.set_taborder("5");
            obj.set_text("아니요, 나중에 할래요");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_tabstop("true");
            this.div_machine.addChild(obj.name, obj);

            obj = new Static("sta_text2_00","10","sta_text2:0",null,"40","10",null,null,null,null,null,this.div_machine.form);
            obj.set_taborder("6");
            obj.set_text("(기구 목록은 \'헬스장 정보 수정\'에서 언제든 변경 가능합니다.)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 10pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_padding("0px");
            this.div_machine.addChild(obj.name, obj);

            obj = new Div("div_machineList","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_machineList.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_machineList.addChild(obj.name, obj);

            obj = new Button("btn_ok","270",null,"116","45",null,"40",null,null,null,null,this.div_machineList.form);
            obj.set_taborder("0");
            obj.set_text("기구 등록");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_tabstop("true");
            this.div_machineList.addChild(obj.name, obj);

            obj = new Button("btn_no",null,null,"116","45","267","40",null,null,null,null,this.div_machineList.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_background("#ffffff");
            obj.set_color("#000000");
            obj.set_borderRadius("10px");
            obj.set_edge("");
            obj.set_font("normal 600 11pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_tabstop("true");
            this.div_machineList.addChild(obj.name, obj);

            obj = new Grid("grd_machineList","50","50",null,"520","50",null,null,null,null,null,this.div_machineList.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_gymMachineList");
            obj.set_autofittype("col");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #d5d5d5");
            obj.set_fastvscrolltype("default");
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"기구 이름\" color=\"#000000\"/><Cell col=\"1\" text=\"보유 여부\" color=\"#000000\"/></Band><Band id=\"body\"><Cell text=\"bind:MACHINE_NAME\" color=\"#000000\" padding=\"0px 0px 0px 10px\" border=\"1px solid #d4d4d4\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"1px solid #d4d4d4\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" text=\"bind:IS_OWNED\"/></Band></Format></Formats>");
            this.div_machineList.addChild(obj.name, obj);

            obj = new Div("div_successMachine","Static00:-265","Static00:-350","530","700",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#efefef");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_boxShadow("0px 0px 15px 0px rgba(0,0,0,0.41)");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_background","10","10",null,null,"10","10",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Button("btn_gotoLogin",null,null,"140","50","193","40",null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("1");
            obj.set_text("로그인 화면으로");
            obj.set_borderRadius("10px");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_cssclass("GB_Login");
            obj.set_font("normal 600 13pt/normal \"Arial\"");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new ImageViewer("img_success","190","80","150","150",null,null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'imagerc::form/successMachine.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_text1","10","276",null,"80","10",null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("3");
            obj.set_text("기구 등록이 완료되었습니다. \r\n\r\n헬스장 등록 신청의 모든 절차가 끝났습니다.");
            obj.set_textAlign("center");
            obj.set_font("normal 600 15pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successMachine.addChild(obj.name, obj);

            obj = new Static("sta_text2","10","371",null,"160","10",null,null,null,null,null,this.div_successMachine.form);
            obj.set_taborder("4");
            obj.set_text("제출하신 정보는 운영자가 검토 후\r\n\r\n빠른 시일 내에 귀하의 헬스장 정보를 검토할 예정입니다.\r\n\r\n승인이 완료되면 즉시 서비스에 반영되며,\r\n\r\n그때부터 모든 관리 기능을 정상적으로 이용할 수 있습니다.");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_successMachine.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_gym.form
            obj = new Layout("default","",0,0,this.div_gym.form,function(p){});
            this.div_gym.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_intro.form
            obj = new Layout("default","",0,0,this.div_intro.form,function(p){});
            this.div_intro.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_machine.form
            obj = new Layout("default","",0,0,this.div_machine.form,function(p){});
            this.div_machine.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_machineList.form
            obj = new Layout("default","",0,0,this.div_machineList.form,function(p){});
            this.div_machineList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_successMachine.form
            obj = new Layout("default","",0,0,this.div_successMachine.form,function(p){});
            this.div_successMachine.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_gym.form.img_gymPhoto","image","ds_gymInfo","IMG_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_gym.form.edt_post","value","ds_gymInfo","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_gym.form.edt_gymName","value","ds_gymInfo","GYM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_gym.form.txtArea_Desc","value","ds_gymInfo","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_gym.form.edt_gymTelNo","value","ds_gymInfo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("gybs3210fm.xfdl", function() {
        this.fvApp = nexacro.getApplication();
        this.sUploadUrl = this.gfnGetServerUrl() + "upload/p01/p014/";
        this.newGymCode = 0;

        this.div_intro_btn_upload_onclick = function(obj,e)
        {
        	this.div_intro.visible = false;
        	this.div_gym.visible = true;
        };

        this.div_gym_btn_rewrite_onclick = function(obj,e)
        {
        	// 빈 항목 체크 후 반환
        	if (this.checkNull()) {
        		return;
        	}
        	// 형식이 올바를 경우 저장 confirm
        	else {
        		this.gfnAlert("confirm.upload.gym", "", "confirm.upload.gym", "fnMsgCallback");
        	}
        };

        this.fnMsgCallback = function (strId, strVal)
        {
        	if (strId == "confirm.upload.gym") {
        		if (strVal == true) {
        			// 새로운 헬스장 정보로 데이터셋(ds_gymInfo), 서버에 저장
        			this.fnUploadNewGymInfo();
        			this.div_gym.visible = false;
        			this.div_machine.visible = true;
        		}
        		else {
        			return;
        		}
        	}
        };

        this.checkNull = function()
        {
        	var sPhoneNo = this.div_gym.form.edt_gymTelNo.value;

        	if (this.gfnIsNull(this.div_gym.form.edt_gymName.value) ||
        		this.gfnIsNull(this.div_gym.form.edt_post.value) ||
        		this.gfnIsNull(this.div_gym.form.edt_gymTelNo.value) ||
        		this.gfnIsNull(this.div_gym.form.txtArea_Desc.value)) {
        		this.gfnAlert("msg.err.enter.alldata", "", "msg.err.enter.alldata", "fnMsgCallback");
        		return true
        	}
        	else if (sPhoneNo.length < 11) {
        		this.gfnAlert("msg.err.wrong.phone", "", "msg.err.wrong.phone", "fnMsgCallback");
        		return true;
        	}
        	else if (this.gfnIsNull(this.div_gym.form.img_gymPhoto.image)) {
        		this.gfnAlert("msg.err.no.gymImg.select", "", "msg.err.no.gymImg.select", "fnMsgCallback");
        		return true;
        	}
        	else return false;
        };

        this.fnUploadNewGymInfo = function ()
        {
        	var strSvcUrl = "p014/insertNewGymInfo.do";
        	var inData    = "ds_gymInfo=ds_gymInfo";
        	var outData   = "";
        	var strArg    = "paramID=" + this.fvApp.gds_accountInfo.getColumn(0, "ID");

        	this.gfnTransaction("insertNewGymInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_gym_btn_changeProfile_onclick = function(obj,e)
        {
        	this.dsUser.clearData();
        	this.FileDialog00.open("프로필 사진 선택", 1, "%DOCUMENT%");
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	var objFile = e.virtualfiles[0];
        	var sFileName = objFile.filename;

        	if (!/\.(jpe?g|png|gif)$/i.test(sFileName)) // 정규식으로 파일 유형 체크
        	{
        		this.gfnAlert("msg.err.no.img.select", "", "msg.err.no.img.select", "fnMsgCallback");
        		return;
        	}

        	this.FileUpTransfer00.clearFileList();
        	this.FileUpTransfer00.addFile(sFileName, objFile);
        	var nRow = this.dsUser.addRow();
        	this.dsUser.setColumn(nRow, "IMAGE_ID", sFileName);
        	this.dsUser.setColumn(nRow, "IMAGE_NAME", sFileName);

        	if (nexacro._Browser == "Runtime") {
        		// NRE
        		this.div_gym.form.img_gymPhoto.image = "URL('file://" + objFile.fullpath + "')";
        	}
        	else {
        		// NRE 아닐 때 (웹 브라우저)
        		var reader = new FileReader();
        		reader.targetForm = this;
        		reader.addEventListener("load"
        								,function() {
        									this.targetForm.div_gym.form.img_gymPhoto.image = this.result;
        								}
        								,false);
        		reader.readAsDataURL(objFile._handle);
        		// 파일을 base64 형태로 읽기
        	}
        	var sUrl = "SvcUrl::edu/uploadFile.do";
        	this.FileUpTransfer00.setPostData("userDir", "");
        	this.FileUpTransfer00.upload(sUrl);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var objDs = e.datasets[0];
        	this.dsUser.setColumn(0,"IMAGE_ID", objDs.getColumn(0, "file_id"));

        	var sImg = this.sUploadUrl + this.dsUser.getColumn(0, "IMAGE_ID");
        	this.div_gym.form.img_gymPhoto.image = sImg;
        	this.ds_gymInfo.setColumn(0, "IMG_PATH", sImg);
        };

        this.div_gym_webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);
        	if (strPost.indexOf("OK!!!:::") == 0) {
        		var aAddr = strPost.split(":::");
        		/*
        		trace("onusernotify -------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리          ==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리          ==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호                  ==> " +  aAddr[3] );
        		trace("array[4]=>도로명주소                    ==> " +	aAddr[4] );
        		trace("array[5]=>지번주소                      ==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("-------------------------------------------------------");
        		*/
        		this.div_gym.form.edt_post.value = aAddr[6];	// 조합형 주소여부에 따른 주소
        	}
        };

        this.div_gym_btn_searchPost_onclick = function(obj,e)
        {
        	this.gfnPostSearchDaum(this.div_gym.form.webPost);
        };

        this.div_gym_btn_quit_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        this.div_machine_btn_no_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AdminForms::gybs3211fm.xfdl";
        };

        this.div_machine_btn_ok_onclick = function(obj,e)
        {
        	this.div_machine.visible = false;
        	this.div_machineList.visible = true;

        	var strSvcUrl = "p014/getMachineList.do";
        	var inData    = "";
        	var outData   = "ds_gymMachineList=ds_gymMachineList";
        	var strArg    = "";

        	this.gfnTransaction("getMachineList", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_machineList_btn_ok_onclick = function(obj,e)
        {
        	var strSvcUrl = "p014/addSelectedGymMachines.do";
        	var inData    = "ds_gymMachineList=ds_gymMachineList";
        	var outData   = "";
        	var strArg    = "paramCode=" + this.fvApp.gds_accountInfo.getColumn(0, "GYM_CODE");

        	this.gfnTransaction("addSelectedGymMachines", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.fnCallback = function(svcId, errCd, errMsg) {
        	if (svcId == "insertNewGymInfo") {
        		this.fvApp.gds_accountInfo.setColumn(0, "GYM_CODE", this.newGymCode);
        	}
        	else if (svcId == "addSelectedGymMachines") {
        		this.div_machineList.visible = false;
        		this.div_successMachine.visible = true;
        	}
        }

        this.div_successMachine_btn_gotoLogin_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_gym.form.btn_searchPost.addEventHandler("onclick",this.div_gym_btn_searchPost_onclick,this);
            this.div_gym.form.webPost.addEventHandler("onusernotify",this.div_gym_webPost_onusernotify,this);
            this.div_gym.form.btn_changeProfile.addEventHandler("onclick",this.div_gym_btn_changeProfile_onclick,this);
            this.div_gym.form.btn_rewrite.addEventHandler("onclick",this.div_gym_btn_rewrite_onclick,this);
            this.div_gym.form.btn_quit.addEventHandler("onclick",this.div_gym_btn_quit_onclick,this);
            this.div_intro.form.btn_upload.addEventHandler("onclick",this.div_intro_btn_upload_onclick,this);
            this.div_machine.form.sta_background.addEventHandler("onclick",this.div_machine_sta_background_onclick,this);
            this.div_machine.form.btn_ok.addEventHandler("onclick",this.div_machine_btn_ok_onclick,this);
            this.div_machine.form.btn_no.addEventHandler("onclick",this.div_machine_btn_no_onclick,this);
            this.div_machineList.form.sta_background.addEventHandler("onclick",this.div_machine_sta_background_onclick,this);
            this.div_machineList.form.btn_ok.addEventHandler("onclick",this.div_machineList_btn_ok_onclick,this);
            this.div_machineList.form.btn_no.addEventHandler("onclick",this.div_machine_btn_no_onclick,this);
            this.div_successMachine.form.sta_background.addEventHandler("onclick",this.div_machine_sta_background_onclick,this);
            this.div_successMachine.form.btn_gotoLogin.addEventHandler("onclick",this.div_successMachine_btn_gotoLogin_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("gybs3210fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
