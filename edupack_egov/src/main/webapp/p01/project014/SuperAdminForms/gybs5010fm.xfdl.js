(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gybs5010fm");
            this.set_titletext("헬스장 승인 화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_currentInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOTAL_USER_COUNT","type" : "STRING","size" : "256"},{"id" : "TOTAL_ADMIN_COUNT","type" : "STRING","size" : "256"},{"id" : "SALE_MARKET_COUNT","type" : "STRING","size" : "256"},{"id" : "NEW_USER_COUNT_30D","type" : "STRING","size" : "256"},{"id" : "NEW_GYM_COUNT_30D","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pendingGymList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "ADDRESS","type" : "STRING","size" : "256"},{"id" : "TEL_NO","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"},{"id" : "OWNER_ID","type" : "STRING","size" : "256"},{"id" : "REG_DATE","type" : "STRING","size" : "256"},{"id" : "IMG_PATH","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_updateGym", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_CODE","type" : "STRING","size" : "256"},{"id" : "NEW_STATUS","type" : "STRING","size" : "256"},{"id" : "REJECT_REASON","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_totalUserCount", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOTAL_USER_COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_totalGymCount", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOTAL_GYM_COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_monthlyNewUsers", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MONTH","type" : "STRING","size" : "256"},{"id" : "COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_monthlyNewGyms", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MONTH","type" : "STRING","size" : "256"},{"id" : "COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_top5Gyms", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GYM_NAME","type" : "STRING","size" : "256"},{"id" : "COUNT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_growthData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CURRENT_MONTH_COUNT","type" : "STRING","size" : "256"},{"id" : "PREVIOUS_MONTH_COUNT","type" : "STRING","size" : "256"},{"id" : "GROWTH_PERCENT","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalRate", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "APPROVAL_RATE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_soldMarketRate", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SOLD_RATE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static0","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","Static0:-720","Static0:-450","1440","900",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#edecf2");
            obj.set_border("1px solid #000000");
            obj.set_borderRadius("20px");
            obj.set_text("");
            obj.set_boxShadow("inset 0px 0px 10px 0px rgba(0,0,0,0.25)");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","0","0",null,null,"0","808",null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_boxShadow("0px 0px 10px 0px rgba(0,0,0,0.25)");
            obj.set_text("");
            obj.set_border("0px none,0px none,1px solid #000000");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"20","140",null,"15","20",null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("0");
            obj.set_text("로그아웃");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_cssclass("GB_Button");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","20","16","238","58",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::form/Logo_r.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","btn_logout:-128","btn_logout:-42","35","35",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::form/logout.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_stretch("fixaspectratio");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new Button("btn_dashBoard","409","20","139","49",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("3");
            obj.set_text("대시보드");
            obj.set_cssclass("GB_Button");
            obj.set_textAlign("right");
            obj.set_padding("0px 10px 0px 0px");
            obj.set_border("0px none");
            obj.set_font("normal 700 14pt/normal \"맑은 고딕\"");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new Button("btn_managePendingGym","601","20","207","49",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("4");
            obj.set_text("등록 대기 헬스장");
            obj.set_cssclass("GB_Button");
            obj.set_textAlign("right");
            obj.set_padding("0px 10px 0px 0px");
            obj.set_border("0px none");
            obj.set_font("normal 700 14pt/normal \"맑은 고딕\"");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","416","27","35","35",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("5");
            obj.set_image("url(\'imagerc::form/dashboard.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_stretch("fixaspectratio");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","604","27","35","35",null,null,null,null,null,null,this.div_main.form.div_top.form);
            obj.set_taborder("6");
            obj.set_image("url(\'imagerc::form/pendingGym.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_stretch("fixaspectratio");
            this.div_main.form.div_top.addChild(obj.name, obj);

            obj = new Div("div_work","20","div_top:10",null,null,"20","400",null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.addChild(obj.name, obj);

            obj = new ImageViewer("img_gymPhoto","10","20",null,null,"806","20",null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_stretch("fit");
            obj.set_enable("true");
            obj.set_tabstop("true");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gymName00","630","110","105","35",null,null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_post","sta_gymName00:15","110",null,"35","10",null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("readonly");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_borderRadius("5px");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gymName","630","65","105","35",null,null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("2");
            obj.set_text("헬스장 이름");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00","1040","20","105","35",null,null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_gymName","sta_gymName:15","65",null,"35","10",null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_cssclass("readonly");
            obj.set_enable("false");
            obj.set_text("");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00_00","630","155","105",null,null,"20",null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("6");
            obj.set_text("상세 설명");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new TextArea("txtArea_Desc","sta_gymName00_00_00:15","153",null,null,"10","20",null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("7");
            obj.set_scrollbartype("none none");
            obj.set_wordWrap("english");
            obj.set_color("#000000");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            obj.set_borderRadius("5px");
            obj.set_enable("false");
            obj.set_cssclass("readonly");
            obj.set_padding("10px");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("edt_gymTelNo","sta_gymName00_00:15","20",null,"35","10",null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("8");
            obj.set_letterSpacing("5px");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_color("#000000");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            obj.set_textAlign("left");
            obj.set_enable("false");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_cssclass("readonly");
            obj.set_autoselect("true");
            obj.set_padding("0px 0px 0px 10px");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gymName00_00_01","630","20","105","35",null,null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("9");
            obj.set_text("관리자 ID");
            obj.set_font("normal bold 11pt/normal \"맑은 고딕\"");
            obj.set_border("0px none,2px solid #d4d4d4,0px none,0px none");
            obj.set_color("#000000");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_trainerID","sta_gymName00_00_01:15","20",null,"35","420",null,null,null,null,null,this.div_main.form.div_work.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("readonly");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_borderRadius("5px");
            this.div_main.form.div_work.addChild(obj.name, obj);

            obj = new Button("btn_refresh",null,"28","35","35","1112",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_background("url(\'imagerc::form/refresh.png\') no-repeat center center /contain transparent");
            obj.set_border("0px none");
            obj.set_font("normal 700 11pt/normal \"맑은 고딕\"");
            obj.set_text("15");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_activeReject","20","div_work:10",null,null,"20","20",null,null,null,null,this.div_main.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.addChild(obj.name, obj);

            obj = new Grid("grd_pendingList","10","20",null,null,"806","20",null,null,null,null,this.div_main.form.div_activeReject.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_pendingGymList");
            obj.set_autofittype("col");
            obj.set_border("1px solid #d4d4d4");
            obj.set_borderRadius("5px");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"280\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Gym&#13;&#10;Code\" background=\"#efefef\" color=\"#000000\" font=\"normal 700 13px/normal &quot;맑은 고딕&quot;\"/><Cell col=\"1\" text=\"헬스장 이름\" background=\"#efefef\" color=\"#000000\" font=\"normal 700 13px/normal &quot;맑은 고딕&quot;\"/><Cell col=\"2\" text=\"신청 일자\" background=\"#efefef\" color=\"#000000\" font=\"normal 700 13px/normal &quot;맑은 고딕&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:GYM_CODE\" font=\"normal 13px/normal &quot;맑은 고딕&quot;\" color=\"#000000\" textAlign=\"center\" border=\"1px solid #e4e4e4\"/><Cell col=\"1\" text=\"bind:GYM_NAME\" font=\"normal 13px/normal &quot;맑은 고딕&quot;\" color=\"#000000\" padding=\"5px 10px\" wordWrap=\"english\" autosizecol=\"none\" border=\"1px solid #e4e4e4\"/><Cell col=\"2\" text=\"bind:REG_DATE\" font=\"normal 13px/normal &quot;맑은 고딕&quot;\" color=\"#000000\" textAlign=\"center\" border=\"1px solid #e4e4e4\"/></Band></Format></Formats>");
            this.div_main.form.div_activeReject.addChild(obj.name, obj);

            obj = new Div("div_toggle","785",null,"80","40",null,"318",null,null,null,null,this.div_main.form.div_activeReject.form);
            obj.set_taborder("2");
            obj.set_url("SuperAdminForms::gybs5011fm.xfdl");
            obj.set_background("transparent");
            this.div_main.form.div_activeReject.addChild(obj.name, obj);

            obj = new Button("btn_proceed","grd_pendingList:20",null,"80","35",null,"320",null,null,null,null,this.div_main.form.div_activeReject.form);
            obj.set_taborder("5");
            obj.set_text("처리");
            obj.set_cssclass("GB_Button");
            obj.set_font("normal 11pt/normal \"맑은 고딕\"");
            this.div_main.form.div_activeReject.addChild(obj.name, obj);

            obj = new TextArea("txtArea_rejectReason","grd_pendingList:20","btn_proceed:20",null,null,"10","20",null,null,null,null,this.div_main.form.div_activeReject.form);
            obj.set_taborder("1");
            obj.set_font("normal 500 11pt/normal \"맑은 고딕\"");
            obj.set_letterSpacing("1px");
            obj.set_padding("10px 0px 10px 10px");
            obj.set_textAlign("left");
            obj.set_wordWrap("english");
            obj.set_scrollbartype("none none");
            obj.set_enable("false");
            obj.set_borderRadius("5px");
            obj.set_color("#000000");
            this.div_main.form.div_activeReject.addChild(obj.name, obj);

            obj = new Static("sta_active","div_toggle:10",null,"40","35",null,"320",null,null,null,null,this.div_main.form.div_activeReject.form);
            obj.set_taborder("3");
            obj.set_text("승인");
            obj.set_textAlign("center");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_main.form.div_activeReject.addChild(obj.name, obj);

            obj = new Static("sta_reject","735",null,null,"35","div_toggle:10","320",null,null,null,null,this.div_main.form.div_activeReject.form);
            obj.set_taborder("4");
            obj.set_text("반려");
            obj.set_textAlign("center");
            obj.set_font("normal 600 11pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            this.div_main.form.div_activeReject.addChild(obj.name, obj);

            obj = new Div("div_dashboard","10","div_top:10",null,null,"10","10",null,null,null,null,this.div_main.form);
            obj.set_taborder("4");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.div_main.addChild(obj.name, obj);

            obj = new Div("div_monthlyNewGyms","10",null,"600","300",null,"10",null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Div("div_monthlyNewUsers","10",null,"600","300",null,"div_monthlyNewGyms:10",null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("2");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_background("#ffffff");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Div("div_totalUserCount","10","10","295",null,null,"div_monthlyNewUsers:10",null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("0");
            obj.set_background("linear-gradient(to right top,#6eaddd 0%,#6eaddd 10%,#87d0e2  90%,#87d0e2 100%) #ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_totalUser","0","22",null,"50","0",null,null,null,null,null,this.div_main.form.div_dashboard.form.div_totalUserCount.form);
            obj.set_taborder("0");
            obj.set_text("GymBase 총 회원 수");
            obj.set_font("normal 700 15pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            this.div_main.form.div_dashboard.form.div_totalUserCount.addChild(obj.name, obj);

            obj = new Static("sta_totalUserCnt","0","80",null,"50","0",null,null,null,null,null,this.div_main.form.div_dashboard.form.div_totalUserCount.form);
            obj.set_taborder("1");
            obj.set_font("normal 700 14pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.div_main.form.div_dashboard.form.div_totalUserCount.addChild(obj.name, obj);

            obj = new Div("div_totalGymCount","div_totalUserCount:10","10","295",null,null,"div_monthlyNewUsers:10",null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to right top,#6eaddd 0%,#6eaddd 10%,#87d0e2  90%,#87d0e2 100%) #ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_boxShadow("0px 0px 5px 0px rgba(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_totalGymCnt","0","80",null,"50","0",null,null,null,null,null,this.div_main.form.div_dashboard.form.div_totalGymCount.form);
            obj.set_taborder("0");
            obj.set_font("normal 700 14pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            obj.set_text("0");
            this.div_main.form.div_dashboard.form.div_totalGymCount.addChild(obj.name, obj);

            obj = new Static("sta_totalGym","0","22",null,"50","0",null,null,null,null,null,this.div_main.form.div_dashboard.form.div_totalGymCount.form);
            obj.set_taborder("1");
            obj.set_text("GymBase 총 헬스장 수");
            obj.set_font("normal 700 15pt/normal \"맑은 고딕\"");
            obj.set_color("#000000");
            obj.set_textAlign("center");
            this.div_main.form.div_dashboard.form.div_totalGymCount.addChild(obj.name, obj);

            obj = new Div("div_top5Gyms","div_totalGymCount:20","10","400","379",null,null,null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Div("div_growthData","div_monthlyNewUsers:20",null,"400","379",null,"10",null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Div("div_approvalRate","div_top5Gyms:20","10",null,"379","10",null,null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Static("sta_growthPercent","755","716","150","40",null,null,null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_font("normal 500 12pt/normal \"맑은 고딕\"");
            obj.set_textAlign("center");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Div("div_soldRate","1050","399",null,"379","10",null,null,null,null,null,this.div_main.form.div_dashboard.form);
            obj.set_taborder("8");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            obj.set_borderRadius("10px");
            obj.set_text("");
            obj.set_url("Cmm::CmmRmateChartAll.xfdl");
            obj.set_boxShadow("0px 0px 5px 0px RGBA(0,0,0,0.25)");
            this.div_main.form.div_dashboard.addChild(obj.name, obj);

            obj = new Static("gybs5010fm645645",null,null,null,null,null,null,null,null,null,null,this);
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_main.form.div_top.form
            obj = new Layout("default","",0,0,this.div_main.form.div_top.form,function(p){});
            this.div_main.form.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_work.form
            obj = new Layout("default","",0,0,this.div_main.form.div_work.form,function(p){});
            this.div_main.form.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_activeReject.form.div_toggle
            obj = new Layout("default","",0,0,this.div_main.form.div_activeReject.form.div_toggle.form,function(p){});
            this.div_main.form.div_activeReject.form.div_toggle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_activeReject.form
            obj = new Layout("default","",0,0,this.div_main.form.div_activeReject.form,function(p){});
            this.div_main.form.div_activeReject.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_monthlyNewGyms
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_monthlyNewGyms.form,function(p){});
            this.div_main.form.div_dashboard.form.div_monthlyNewGyms.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_monthlyNewUsers
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_monthlyNewUsers.form,function(p){});
            this.div_main.form.div_dashboard.form.div_monthlyNewUsers.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_totalUserCount.form
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_totalUserCount.form,function(p){});
            this.div_main.form.div_dashboard.form.div_totalUserCount.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_totalGymCount.form
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_totalGymCount.form,function(p){});
            this.div_main.form.div_dashboard.form.div_totalGymCount.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_top5Gyms
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_top5Gyms.form,function(p){});
            this.div_main.form.div_dashboard.form.div_top5Gyms.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_growthData
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_growthData.form,function(p){});
            this.div_main.form.div_dashboard.form.div_growthData.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_approvalRate
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_approvalRate.form,function(p){});
            this.div_main.form.div_dashboard.form.div_approvalRate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form.div_soldRate
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form.div_soldRate.form,function(p){});
            this.div_main.form.div_dashboard.form.div_soldRate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form.div_dashboard.form
            obj = new Layout("default","",0,0,this.div_main.form.div_dashboard.form,function(p){});
            this.div_main.form.div_dashboard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_main.form
            obj = new Layout("default","",0,0,this.div_main.form,function(p){});
            this.div_main.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1600,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_main.form.div_work.form.img_gymPhoto","image","ds_pendingGymList","IMG_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_main.form.div_work.form.edt_gymName","value","ds_pendingGymList","GYM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_main.form.div_work.form.edt_post","value","ds_pendingGymList","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_main.form.div_work.form.edt_gymTelNo","value","ds_pendingGymList","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_main.form.div_work.form.txtArea_Desc","value","ds_pendingGymList","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_main.form.div_work.form.edt_trainerID","value","ds_pendingGymList","OWNER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_main.form.div_dashboard.form.div_totalUserCount.form.sta_totalUserCnt","text","ds_totalUserCount","TOTAL_USER_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_main.form.div_dashboard.form.div_totalGymCount.form.sta_totalGymCnt","text","ds_totalGymCount","TOTAL_GYM_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","SuperAdminForms::gybs5011fm.xfdl");
            this._addPreloadList("fdl","Cmm::CmmRmateChartAll.xfdl");
        };
        
        // User Script
        this.addIncludeScript("gybs5010fm.xfdl","Lib::rMateChartH5.xjs");
        this.registerScript("gybs5010fm.xfdl", function() {
        this.executeIncludeScript("Lib::rMateChartH5.xjs"); /*include "Lib::rMateChartH5.xjs"*/;
        this.fvApp = nexacro.getApplication();
        this.countDown = 1000; // 1초마다 버튼 숫자 변경
        this.refresh = 15;
        this.fv_sCurGymCode = "";
        this.isFisrtChart = false; // false : 차트 세팅된 적 없음

        this.layoutStr1;
        this.layoutStr2;
        this.layoutStr3;
        this.layoutStr4;
        this.layoutStr5;

        this.chartData1;
        this.chartData2;
        this.chartData3;
        this.chartData4;
        this.chartData5;

        this.gybs5010fm_onload = function(obj,e)
        {
        	this.setTimer(0, this.countDown);
        	// 등록 대기 헬스장 화면일 경우
        	if (this.div_main.form.div_dashboard.visible == false) {
        		var nRow = this.ds_pendingGymList.rowposition;
        		if (nRow > -1) {
        			this.fv_sCurGymCode = this.ds_pendingGymList.getColumn(nRow, "GYM_CODE");
        		}
        		else {
        			this.fv_sCurGymCode = "";
        		}
        		trace("등록 대기 헬스장 새로고침");
        		this.getInfos();
        	}

        	// 대시보드 화면일 경우
        	else {
        		trace("대시보드 새로고침");

        		var strSvcUrl = "p014/getSuperAdminDashboardInfo.do";
        		var inData    = "";
        		var outData   = "ds_totalUserCount=ds_totalUserCount ds_totalGymCount=ds_totalGymCount ds_monthlyNewUsers=ds_monthlyNewUsers ds_monthlyNewGyms=ds_monthlyNewGyms ds_top5Gyms=ds_top5Gyms ds_growthData=ds_growthData ds_approvalRate=ds_approvalRate ds_soldMarketRate=ds_soldMarketRate";
        		var strArg    = "";

        		this.gfnTransaction("getSuperAdminDashboardInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        	}
        };

        this.gybs5010fm_ontimer = function(obj,e)
        {
        	if (e.timerid == 0) { // 1초가 지났을 경우
        		if (this.refresh == 0) { // 카운트가 0일 경우 새로고침
        			this.refresh = 15;
        			// 반려 사유 작성 중이면 새로고침 취소
        			if (!this.div_main.form.div_activeReject.form.txtArea_rejectReason.value) {
        				this.gybs5010fm_onload();
        			}
        		}
        		else { // 카운트다운
        			this.refresh -= 1;
        		}
        		this.setTimer(0, this.countDown);
        		this.div_main.form.btn_refresh.text = this.refresh;
        	}
        };

        this.getInfos = function ()
        {
        	var strSvcUrl = "p014/getAdminInfo.do";
        	var inData    = "";
        	var outData   = "ds_currentInfo=ds_currentInfo ds_pendingGymList=ds_pendingGymList";
        	var strArg    = "";

        	this.gfnTransaction("getAdminInfo", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };
        this.div_main_btn_refresh_onclick = function(obj,e)
        {
        	this.refresh = 15;
        	this.div_main.form.btn_refresh.text = this.refresh;
        	this.gybs5010fm_onload();
        };

        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	if (svcId == "getAdminInfo") {
        		// 가져온 데이터가 없으면 버튼 비활성화
        		if (this.ds_pendingGymList.getRowCount() == 0) {
        			this.div_main.form.div_activeReject.form.btn_proceed.enable = false;
         			this.div_main.form.div_activeReject.form.div_toggle.enable = false;
         			this.div_main.form.div_activeReject.form.txtArea_rejectReason.enable = false;
        		}
        		// 로드 전 보고있던 데이터 정보 적용
        		if(this.fv_sCurGymCode) {
        			var nFindRow = this.ds_pendingGymList.findRow("GYM_CODE", this.fv_sCurGymCode);
        			if(nFindRow > -1){
        				this.div_main.form.div_activeReject.form.grd_pendingList.selectRow(nFindRow);
        			}
        		}
        	}
        	else if (svcId == "updateGymStatus") {
        		this.gybs5010fm_onload();
        	}

        	else if (svcId == "getSuperAdminDashboardInfo") {
        		// 처음 차트 생성일 경우 세팅 함수
        		if (this.isFisrtChart == false) {
        			this.fnFisrtSetChart();
        			this.isFisrtChart = true;
        		}
        		// 첫 차트 생성이 아닐 경우 데이터, 레이아웃 변경 함수
        		else {
        			this.fnResetChartDataLayout()
        		}
        	}
        };

        this.fnToggleChanged = function() {
        	var sToggleValue = this.div_main.form.div_activeReject.form.div_toggle.form.getValue();
        	trace(sToggleValue);

        	if (sToggleValue == "APPROVE") {
        		this.div_main.form.div_activeReject.form.txtArea_rejectReason.enable = false;
        		this.div_main.form.div_activeReject.form.txtArea_rejectReason.value = null;
        	}
        	else if (sToggleValue == "REJECT") {
        		this.div_main.form.div_activeReject.form.txtArea_rejectReason.enable = true;
        	}
        }

        this.ds_pendingGymList_onrowposchanged = function(obj,e)
        {
        	this.div_main.form.div_activeReject.form.txtArea_rejectReason.enable = false;
        	this.div_main.form.div_activeReject.form.txtArea_rejectReason.value = null;
        	this.div_main.form.div_activeReject.form.div_toggle.form.fnOff();
        };

        this.div_main_div_top_btn_logout_onclick = function(obj,e)
        {
        	this.fvApp.mainframe.Main.formurl = "AboutAccount::gybs1010fm.xfdl";
        };

        this.div_main_div_activeReject_btn_proceed_onclick = function(obj,e)
        {
        	var sToggleValue = this.div_main.form.div_activeReject.form.div_toggle.form.getValue();
        	if (sToggleValue == "APPROVE") {
        		trace("승인");
        		this.gfnAlert("confirm.approve.gym", "", "confirm.approve.gym", "fnMsgCallback");
        	}
        	else if (sToggleValue == "REJECT") {
        		trace("반려");
        		if (this.div_main.form.div_activeReject.form.txtArea_rejectReason.value == null || this.div_main.form.div_activeReject.form.txtArea_rejectReason.value == "") {
        			this.gfnAlert("msg.err.no.reject.reason", "", "msg.err.no.reject.reason", "fnMsgCallback");
        			return;
        		}
        		else {
        			this.gfnAlert("confirm.reject.gym", "", "confirm.reject.gym", "fnMsgCallback");
        		}
        	}
        };

        this.fnMsgCallback = function (strId, strVal)
        {
        	var sToggleValue = this.div_main.form.div_activeReject.form.div_toggle.form.getValue();
        	if (strId == "confirm.approve.gym") {
        		if (strVal == true) {
        			this.fnUpdateGymStatus(sToggleValue);
        		}
        		else {
        			return;
        		}
        	}
        	else if (strId == "confirm.reject.gym") {
        		if (strVal == true) {
        			this.fnUpdateGymStatus(sToggleValue);
        		}
        		else {
        			return;
        		}
        	}
        };

        this.fnUpdateGymStatus = function (status)
        {
        	var nGymCode = this.ds_pendingGymList.getColumn(this.ds_pendingGymList.rowposition, "GYM_CODE");
        	var sRejectReason = "";
        	if (status == "REJECT") {
        		sRejectReason = this.div_main.form.div_activeReject.form.txtArea_rejectReason.value;
        	}
        	this.div_main.form.div_activeReject.form.txtArea_rejectReason.value = null;
        	this.ds_updateGym.clearData();
        	this.ds_updateGym.addRow();
        	this.ds_updateGym.setColumn(0, "GYM_CODE", nGymCode);
        	this.ds_updateGym.setColumn(0, "NEW_STATUS", status);
        	this.ds_updateGym.setColumn(0, "REJECT_REASON", sRejectReason);

        	var strSvcUrl = "p014/updateGymStatus.do";
        	var inData    = "ds_updateGym=ds_updateGym";
        	var outData   = "";
        	var strArg    = "";

        	this.gfnTransaction("updateGymStatus", strSvcUrl, inData, outData, strArg, "fnCallback", true);
        };

        this.div_main_div_top_btn_dashBoard_onclick = function(obj,e)
        {
        	this.div_main.form.div_work.visible = false;
        	this.div_main.form.div_activeReject.visible = false;
        	this.div_main.form.div_dashboard.visible = true;
        	this.div_main_btn_refresh_onclick();
        };

        this.div_main_div_top_btn_managePendingGym_onclick = function(obj,e)
        {
        	this.div_main.form.div_work.visible = true;
        	this.div_main.form.div_activeReject.visible = true;
        	this.div_main.form.div_dashboard.visible = false;
        	this.div_main_btn_refresh_onclick();
        };

        this.fnFisrtSetChart = function ()
        {
        	trace("차트 설정");


        	var nMaxCnt1 = (nexacro.toNumber(this.ds_monthlyNewUsers.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyNewUsers.getMax("COUNT")) / 10));
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF" borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="올해 월별 신규 회원 가입 현황" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        				+'<SubCaption text="( 명 )ㅤ" color="#000000" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="MONTH"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="' + nMaxCnt1 + '" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="COUNT" displayName="가입 수">'
        				   		+'<showDataEffect>'
        							+ '<SeriesClip duration="1000"/>'
        						+'</showDataEffect>'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';
        	 this.div_main.form.div_dashboard.form.div_monthlyNewUsers.form.fnSetChart("chart1", this.layoutStr1, this.rMateChartDataSetToXml(this.ds_monthlyNewUsers));



        	var nMaxCnt2 = (nexacro.toNumber(this.ds_monthlyNewGyms.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyNewGyms.getMax("COUNT")) / 10));
        	this.layoutStr2 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="올해 월별 신규 헬스장 등록 현황" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        				+'<SubCaption text="( 건 )ㅤ" color="#000000" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="MONTH"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="' + nMaxCnt2 + '" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="COUNT" displayName="등록 수">'
        				   		+'<showDataEffect>'
        							+ '<SeriesClip duration="1000"/>'
        						+'</showDataEffect>'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';
        	 this.div_main.form.div_dashboard.form.div_monthlyNewGyms.form.fnSetChart("chart2", this.layoutStr2, this.rMateChartDataSetToXml(this.ds_monthlyNewGyms));



        	this.layoutStr3 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="연간 거래량 TOP 5 헬스장" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="GYM_NAME" field="COUNT" labelPosition="inside" color="#ffffff" startAngle="136">'
        							 /* Pie2DChart 정의 후 Pie2DSeries labelPosition="inside"정의합니다 */
        								   +'<showDataEffect>'
        								   /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
        										+'<SeriesSlide duration="1000"/>'
        				 /* SeriesSlide 효과는 시리즈 데이터가 데이터로 표시될 때 한쪽에서 미끄러지듯 나타나는 효과를 적용합니다. */
        					/* elementOffset : effect를 지연시키는 시간을 지정합니다 default:20 */
        					/* minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0 */
        								 /* 이 값보다 짧은 시간에 effect가 실행되지 않습니다. */
        				  /* offset : effect개시의 지연시간을 설정합니다 default:0 */
        				  /* perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다. */
        					/* direction : left:왼쪽, right:오른쪽, up:위, down:아래 default는 left입니다. */
        								   +'</showDataEffect>'
        							  +'</Pie2DSeries>'
        						 +'</series>'
        					  +'</Pie2DChart>'
        				  +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_top5Gyms.form.fnSetChart("chart3", this.layoutStr3, this.rMateChartDataSetToXml(this.ds_top5Gyms));



        	var nMax = 0;
        	if (nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT")) > nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"))) {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	else {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	this.layoutStr4 =
                    '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                        +'<Options>'
                            +'<Caption text="전체 거래 증감률" textAlign="center" fontSize="16" color="#000000" paddingTop="20"/>'
                            +'<SubCaption text="(전월 동기간 대비)" textAlign="center" fontSize="12" color="#000000" paddingTop="3" paddingBottom="5"/>'
                            +'<Legend defaultMouseOverAction="true" useVisibleCheck="true" />'
                        +'</Options>'
                        +'<Column2DChart seriesMouseOverAction="none" showDataTips="true" columnWidthRatio="0.55" selectionMode="single" paddingBottom="25">'
                            +'<horizontalAxis>'
                                +'<CategoryAxis categoryField="Month" padding="1"/>'
                            +'</horizontalAxis>'
                            +'<verticalAxis>'
                                +'<LinearAxis maximum="' + nMax + '"/>'
                            +'</verticalAxis>'
                            +'<series>'
                                +'<Column2DSeries labelPosition="outside" yField="PREVIOUS_MONTH_COUNT" displayName="지난 달" showValueLabels="[2]">'
                                        +'<showDataEffect>'
                                            +'<SeriesInterpolate duration="1200" elementOffset="60"/>'
                                        +'</showDataEffect>'
                                +'</Column2DSeries>'
                                +'<Column2DSeries labelPosition="outside" yField="CURRENT_MONTH_COUNT" displayName="이번 달" showValueLabels="[2]">'
                                        +'<showDataEffect>'
                                            +'<SeriesInterpolate duration="1200" elementOffset="60"/>'
                                        +'</showDataEffect>'
                                +'</Column2DSeries>'
                            +'</series>'
                        +'</Column2DChart>'
                    +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_growthData.form.fnSetChart("chart4", this.layoutStr4, this.rMateChartDataSetToXml(this.ds_growthData));

        	var nRate = nexacro.toNumber(this.ds_approvalRate.getColumn(0, "APPROVAL_RATE"));
        	trace(nRate);
        	this.chartData5 = [nRate];
        	this.layoutStr5 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="전체 양도 처리 현황" fontSize="16" color="#000000" paddingTop="20" paddingBottom="95" textAlign="center"/>'
                +'</Options>'
                +'<Gauge minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="53" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'
                    +'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="13" horizontalCenter="3" verticalCenter="30" text="승인 비율" color="#5191ff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_approvalRate.form.fnSetChart("chart5", this.layoutStr5, this.chartData5);



        	var nRate = nexacro.toNumber(this.ds_soldMarketRate.getColumn(0, "SOLD_RATE"));
        	trace(nRate);
        	this.chartData6 = [nRate];
        	this.layoutStr6 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="전체 정기권 판매 현황" fontSize="16" color="#000000" paddingTop="20" paddingBottom="95" textAlign="center"/>'
                +'</Options>'
                +'<Gauge minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="53" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'
                    +'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="13" horizontalCenter="3" verticalCenter="30" text="판매 완료 비율" color="#5191ff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_soldRate.form.fnSetChart("chart6", this.layoutStr6, this.chartData6);



        	this.div_main.form.div_dashboard.form.sta_growthPercent.text = "지난달 대비 " + this.ds_growthData.getColumn(0, "GROWTH_PERCENT");
        };



        // 라벨 클릭 함수
        this.labelClickFunc = function(value){
            alert(value);
        }

        // 수치 라벨 사용자 정의 함수
        window.valueFunc = function(value){

           return value.toFixed(0) + "%";
        }

        // 데이터 팁 사용자 정의 함수
        this.dataTipFunc = function(value){
            return value + "%";
        }

        //게이지 값 랜덤 변경 함수
        this.changeValue = function()
        {
            // 게이지의 값을 변경할려면 setData 함수를 사용하세요.
            document.getElementById("chart1").setData([parseInt(Math.random()*100)]);
        }

        // 게이지 값 보관.
        this.gaugeValue;

        // 게이지 value change 이벤트 핸들러 함수.
        this.changeFunction = function(value)
        {
            this.gaugeValue = value;
        }

        // 확인
        this.commitValue = function()
        {
            alert(this.gaugeValue);
        }
        this.fnResetChartDataLayout = function(obj,e)
        {
        	trace("차트 데이터, 레이아웃 변경");
        	var nMaxCnt1 = (nexacro.toNumber(this.ds_monthlyNewUsers.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyNewUsers.getMax("COUNT")) / 10));
        	this.layoutStr1 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="올해 월별 신규 회원 가입 현황" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        				+'<SubCaption text="( 명 )ㅤ" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="MONTH"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="' + nMaxCnt1 + '" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="COUNT" displayName="가입 수">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_monthlyNewUsers.form.fnSetLayout(this.layoutStr1);
        	this.div_main.form.div_dashboard.form.div_monthlyNewUsers.form.fnSetData(this.rMateChartDataSetToXml(this.ds_monthlyNewUsers));



        	var nMaxCnt2 = (nexacro.toNumber(this.ds_monthlyNewGyms.getMax("COUNT")) + (nexacro.toNumber(this.ds_monthlyNewGyms.getMax("COUNT")) / 10));
        	this.layoutStr2 = '<rMateChart backgroundColor="#FFFFFF"  borderThickness="1" borderStyle="none">'
        		 +'<Options>'
        			  +'<Caption text="올해 월별 신규 헬스장 등록 현황" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        				+'<SubCaption text="( 건 )ㅤ" color="#000000" textAlign="right" />'
        			 +'<Legend />'
        		 +'</Options>'
        		 +'<NumberFormatter id="numFmt" precision="0"/>'
        		   +'<Line2DChart showDataTips="true" dataTipDisplayMode="axis" paddingTop="0">'
        			 +'<horizontalAxis>'
        				   +'<CategoryAxis categoryField="MONTH"/>'
        			  +'</horizontalAxis>'
        			  +'<verticalAxis>'
        				 +'<LinearAxis minimum="0" maximum="' + nMaxCnt2 + '" interval="10" />' // <-- 여기 조절해서 좌측 수치 최대값, 간격 조절
        			 +'</verticalAxis>'
        				+'<series>'
        				   +'<Line2DSeries yField="COUNT" displayName="등록 수">'
        				  +'</Line2DSeries>'
        				+'</series>'
        			  +'<annotationElements>'
        				   +'<CrossRangeZoomer enableZooming="false" horizontalLabelFormatter="{numFmt}" horizontalStrokeEnable="false"/>'
        			   +'</annotationElements>'
        		  +'</Line2DChart>'
        	 +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_monthlyNewGyms.form.fnSetLayout(this.layoutStr2);
        	this.div_main.form.div_dashboard.form.div_monthlyNewGyms.form.fnSetData(this.rMateChartDataSetToXml(this.ds_monthlyNewGyms));



        	this.layoutStr3 = '<rMateChart backgroundColor="#FFFFFF" borderStyle="none" >'
        					  +'<Options>'
        						  +'<Caption text="연간 거래량 TOP 5 헬스장" fontSize="16" color="#000000" paddingTop="20" textAlign="center" />'
        						  +'<Legend useVisibleCheck="true"/>'
        					   +'</Options>'
        					 +'<Pie2DChart showDataTips="true">'
        				   /* Pie2D 차트 생성시에 필요한 Pie2DChart 정의합니다. */
        				   /* showDataTips : 데이터에 마우스를 가져갔을 때 나오는 Tip을 보이기/안보이기 속성입니다. */
        						  +'<series>'
        							   +'<Pie2DSeries nameField="GYM_NAME" field="COUNT" labelPosition="inside" color="#ffffff" startAngle="136">'
        							 /* Pie2DChart 정의 후 Pie2DSeries labelPosition="inside"정의합니다 */
        // 								   +'<showDataEffect>'
        // 								   /* 차트 생성시에 Effect를 주고 싶을 때 shoDataEffect정의합니다 */
        // 										+'<SeriesSlide duration="0"/>'
        // 				 /* SeriesSlide 효과는 시리즈 데이터가 데이터로 표시될 때 한쪽에서 미끄러지듯 나타나는 효과를 적용합니다. */
        // 					/* elementOffset : effect를 지연시키는 시간을 지정합니다 default:20 */
        // 					/* minimumElementDuration : 각 엘리먼트의 최소 지속 시간을 설정합니다 default:0 */
        // 								 /* 이 값보다 짧은 시간에 effect가 실행되지 않습니다. */
        // 				  /* offset : effect개시의 지연시간을 설정합니다 default:0 */
        // 				  /* perElementOffset : 각 엘리먼트의 개시 지연시간을 설정합니다. */
        // 					/* direction : left:왼쪽, right:오른쪽, up:위, down:아래 default는 left입니다. */
        // 								   +'</showDataEffect>'
        							  +'</Pie2DSeries>'
        						 +'</series>'
        					  +'</Pie2DChart>'
        				  +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_top5Gyms.form.fnSetLayout(this.layoutStr3);
        	this.div_main.form.div_dashboard.form.div_top5Gyms.form.fnSetData(this.rMateChartDataSetToXml(this.ds_top5Gyms));



        	var nMax = 0;
        	if (nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT")) > nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"))) {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("CURRENT_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	else {
        		nMax = nexacro.toNumber(this.ds_growthData.getMax("PREVIOUS_MONTH_COUNT"));
        		nMax = nMax + (nMax / 10)
        	}
        	this.layoutStr4 =
                    '<rMateChart backgroundColor="#FFFFFF" borderStyle="none">'
                        +'<Options>'
                            +'<Caption text="전체 거래 증감률" textAlign="center" fontSize="16" color="#000000" paddingTop="20"/>'
                            +'<SubCaption text="(전월 동기간 대비)" textAlign="center" fontSize="12" color="#000000" paddingTop="3" paddingBottom="5"/>'
                            +'<Legend defaultMouseOverAction="true" useVisibleCheck="true" />'
                        +'</Options>'
                        +'<Column2DChart seriesMouseOverAction="none" showDataTips="true" columnWidthRatio="0.55" selectionMode="single" paddingBottom="25">'
                            +'<horizontalAxis>'
                                +'<CategoryAxis categoryField="Month" padding="1"/>'
                            +'</horizontalAxis>'
                            +'<verticalAxis>'
                                +'<LinearAxis maximum="' + nMax + '"/>'
                            +'</verticalAxis>'
                            +'<series>'
                                +'<Column2DSeries labelPosition="outside" yField="PREVIOUS_MONTH_COUNT" displayName="지난 달" showValueLabels="[2]">'
        //                             +'<showDataEffect>'
        //                                 +'<SeriesInterpolate2 offset="0" elementOffset="800"/>'
        //                             +'</showDataEffect>'
                                +'</Column2DSeries>'
                                +'<Column2DSeries labelPosition="outside" yField="CURRENT_MONTH_COUNT" displayName="이번 달" showValueLabels="[2]">'
        //                             +'<showDataEffect>'
        //                                 +'<SeriesInterpolate2 offset="200" elementOffset="800"/>'
        //                             +'</showDataEffect>'
                                +'</Column2DSeries>'
                            +'</series>'
                        +'</Column2DChart>'
                    +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_growthData.form.fnSetLayout(this.layoutStr4);
        	this.div_main.form.div_dashboard.form.div_growthData.form.fnSetData(this.rMateChartDataSetToXml(this.ds_growthData));

        	var nRate = nexacro.toNumber(this.ds_approvalRate.getColumn(0, "APPROVAL_RATE"));
        	this.chartData5 = [nRate];
        	this.layoutStr5 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="전체 양도 처리 현황" fontSize="16" color="#000000" paddingTop="20" paddingBottom="95" textAlign="center"/>'
                +'</Options>'
                +'<Gauge showAnimation="false" minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="53" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'

        			+'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="13" horizontalCenter="3" verticalCenter="30" text="승인 비율" color="#5191ff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_approvalRate.form.fnSetLayout(this.layoutStr5);
        	this.div_main.form.div_dashboard.form.div_approvalRate.form.fnSetData(this.chartData5);


        	var nRate = nexacro.toNumber(this.ds_soldMarketRate.getColumn(0, "SOLD_RATE"));
        	trace(nRate);
        	this.chartData6 = [nRate];
        	this.layoutStr6 =
            '<rMateChart paddingBottom="50">'
                +'<Options>'
                    +'<Caption text="전체 정기권 판매 현황" fontSize="16" color="#000000" paddingTop="20" paddingBottom="95" textAlign="center"/>'
                +'</Options>'
                +'<Gauge showAnimation="false" minimum="0" maximum="100" minimumAngle="0" maximumAngle="360" innerRatio="0.85" fontSize="53" labelJsFunction="valueFunc" dataTipJsFunction="dataTipFunc" valueChangeFunction="changeFunction" labelXOffset="3" labelYOffset="-20" foregroundColors="[#1e90f2]" backgroundColors="[#afcdff]" color="#1e90f2" labelClickJsFunction="labelClickFunc" bounceAnimating="false" easingFunction="EaseInOutCirc" roundedCorners="true">'
                    +'<backgroundElements>'
                        +'<CanvasElement>'
                            +'<CanvasLabel fontWeight="bold" height="23" fontSize="13" horizontalCenter="3" verticalCenter="30" text="판매 완료 비율" color="#5191ff"/>'
                        +'</CanvasElement>'
                    +'</backgroundElements>'
                +'</Gauge>'
            +'</rMateChart>';
        	this.div_main.form.div_dashboard.form.div_soldRate.form.fnSetLayout(this.layoutStr6);
        	this.div_main.form.div_dashboard.form.div_soldRate.form.fnSetData(this.chartData6);


        	this.div_main.form.div_dashboard.form.sta_growthPercent.text = "지난달 대비 " + this.ds_growthData.getColumn(0, "GROWTH_PERCENT");
        };

        this.div_main_div_dashboard_Button00_onclick = function(obj,e)
        {
        	this.ds_monthlyNewUsers.setColumn(0, "COUNT", this.ds_monthlyNewUsers.getColumn(0, "COUNT") + 10);
        	this.ds_monthlyNewGyms.setColumn(0, "COUNT", this.ds_monthlyNewGyms.getColumn(0, "COUNT") + 10);
        	this.ds_monthlyNewUsers.setColumn(0, "COUNT", this.ds_monthlyNewUsers.getColumn(0, "COUNT") + 10);
        	this.ds_monthlyNewGyms.setColumn(0, "COUNT", this.ds_monthlyNewGyms.getColumn(0, "COUNT") + 10);
        	this.ds_top5Gyms.setColumn(0, "COUNT", this.ds_top5Gyms.getColumn(0, "COUNT") + 10);
        	this.ds_growthData.setColumn(0, "CURRENT_MONTH_COUNT", this.ds_growthData.getColumn(0, "CURRENT_MONTH_COUNT") + 10);
        	this.ds_approvalRate.setColumn(0, "APPROVAL_RATE", this.ds_approvalRate.getColumn(0, "APPROVAL_RATE") + 10);

        	this.fnResetChartDataLayout();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gybs5010fm_onload,this);
            this.addEventHandler("ontimer",this.gybs5010fm_ontimer,this);
            this.div_main.form.div_top.form.btn_logout.addEventHandler("onclick",this.div_main_div_top_btn_logout_onclick,this);
            this.div_main.form.div_top.form.ImageViewer00.addEventHandler("onclick",this.div_main_div_top_btn_logout_onclick,this);
            this.div_main.form.div_top.form.btn_dashBoard.addEventHandler("onclick",this.div_main_div_top_btn_dashBoard_onclick,this);
            this.div_main.form.div_top.form.btn_managePendingGym.addEventHandler("onclick",this.div_main_div_top_btn_managePendingGym_onclick,this);
            this.div_main.form.btn_refresh.addEventHandler("onclick",this.div_main_btn_refresh_onclick,this);
            this.div_main.form.div_activeReject.form.btn_proceed.addEventHandler("onclick",this.div_main_div_activeReject_btn_proceed_onclick,this);
            this.ds_pendingGymList.addEventHandler("onrowposchanged",this.ds_pendingGymList_onrowposchanged,this);
        };
        this.loadIncludeScript("gybs5010fm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
