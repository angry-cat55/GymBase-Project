(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Layout_Position");
            this.set_titletext("Layout_Position");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_language", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "col_lang","type" : "STRING","size" : "256"},{"id" : "col_name","type" : "STRING","size" : "256"},{"id" : "col_gender","type" : "STRING","size" : "256"},{"id" : "col_date","type" : "STRING","size" : "256"},{"id" : "col_email","type" : "STRING","size" : "256"},{"id" : "col_telno","type" : "STRING","size" : "256"},{"id" : "col_address","type" : "STRING","size" : "256"}]},"Rows" : [{"col_name" : "name","col_gender" : "gender","col_date" : "birth date","col_email" : "e-mail","col_telno" : "phone number","col_address" : "address","col_lang" : "English"},{"col_name" : "성명","col_gender" : "성별","col_date" : "생일","col_email" : "전자우편","col_telno" : "전화번호","col_address" : "주소","col_lang" : "Korean"},{"col_name" : "なまえ","col_gender" : "せいべつ","col_date" : "たんじょうび","col_email" : "イーメール","col_telno" : "でんわばんごう","col_address" : "じゅうしょ","col_lang" : "Japanese"},{"col_date" : "cumpleaños","col_email" : "correo electrónico","col_telno" : "número de teléfono","col_address" : "domicilio","col_name" : "nombre","col_gender" : "sexo","col_lang" : "Spanish"},{"col_name" : "danh hiệu","col_gender" : "giới tính","col_date" : "sinh nhật","col_email" : "thư điện tử","col_telno" : "số điện thoại","col_address" : "địa chỉ","col_lang" : "Vietnamese"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_font", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "10px Dotum","datacolumn" : "10px Dotum"},{"codecolumn" : "15px Dotum","datacolumn" : "15px Dotum"},{"codecolumn" : "20px Dotum","datacolumn" : "20px Dotum"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_position","20","95","400","250",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","100.00","75","200","100",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("0");
            obj.set_text("Component");
            obj.set_cssclass("btn_WF_FillBlue");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static00","2.00","91","94","10",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GLineH");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static01","301.00","155","94","10",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GLineH");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static02","276.00","176","10","69",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static03","26.00","72","52","26",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("4");
            obj.set_text("left");
            obj.set_cssclass("sta_WF_Label");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static04","114.00","28","52","26",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("5");
            obj.set_text("top");
            obj.set_cssclass("sta_WF_Label");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static05","318.00","135","61","26",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("6");
            obj.set_text("right");
            obj.set_cssclass("sta_WF_Label");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static06","274","198","78","26",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("7");
            obj.set_text("bottom");
            obj.set_cssclass("sta_WF_Label");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static07","116.00","1","10","73",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static08","101","67","199","10",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GLineH");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static09","251","47","66","25",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("10");
            obj.set_text("width");
            obj.set_cssclass("sta_WF_Label");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static10","92","76","10","98",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("Static11","42","138","71","25",null,null,null,null,null,null,this.div_position.form);
            obj.set_taborder("12");
            obj.set_text("height");
            obj.set_cssclass("sta_WF_Label");
            this.div_position.addChild(obj.name, obj);

            obj = new Static("st_title","20","0","148","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","60","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Component Position");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_base","510","95","400","250",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btn_base","30","30","130","100",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("0");
            obj.set_text("Base Component\r\n\r\n(btn_base)");
            obj.set_cssclass("btn_WF_FillBlue");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static00","162.00","77","67","10",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GLineH");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button00","btn_base:70.00","50","130","60",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("2");
            obj.set_text("Button\r\n\r\nleft=\'btn_base:70\'");
            obj.set_cssclass("btn_WF_LineBlue");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static03","173","58","52","26",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("3");
            obj.set_text("left");
            obj.set_cssclass("sta_WF_Label");
            this.div_base.addChild(obj.name, obj);

            obj = new Button("Button01","30","btn_base:40","130","60",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("4");
            obj.set_text("Button\r\n\r\ntop=\'btn_base:40\'");
            obj.set_cssclass("btn_WF_LineBlue");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static03_00","91","137","52","26",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("5");
            obj.set_text("top");
            obj.set_cssclass("sta_WF_Label");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static02","91.00","131","10","38",null,null,null,null,null,null,this.div_base.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GLineV");
            this.div_base.addChild(obj.name, obj);

            obj = new Static("Static08","20","364","250","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Fit To Contents");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_name","20","401","58","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("name");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_gender","btn_name:10","401","67","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("gender");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_date","btn_gender:10","401","83","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("birth date");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","438","612","152",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_positionstep("1");
            obj.set_binddataset("ds_language");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell expr=\"currow == dataset.rowposition ? &quot;▶&quot; : &quot;&quot;\" background=\"#eff1f7\"/><Cell col=\"1\" text=\"bind:col_lang\" background=\"#eff1f7\" font=\"normal 600 13px/normal &quot;Segoe UI,Malgun Gothic&quot;\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:col_name\"/><Cell col=\"3\" text=\"bind:col_gender\"/><Cell col=\"4\" text=\"bind:col_date\"/><Cell col=\"5\" text=\"bind:col_email\"/><Cell col=\"6\" text=\"bind:col_telno\"/><Cell col=\"7\" text=\"bind:col_address\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_email","btn_date:10","401","63","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("e-mail");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_telno","btn_email:10","400","112","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("phone number");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_address","btn_telno:10","401","71","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("address");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","510","60","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Component Base Position");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_resize_grip","415","657","12","11",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_image("url(\'theme://images/icon_SB_Grip.png\')");
            obj.set_cursor("nw-resize");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_resize","20","405",null,null,"img_resize_grip:-6","img_resize_grip:-6",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","30",null,null,null,null,null,null,this.div_resize.form);
            obj.set_taborder("0");
            obj.set_text("120px * 30px");
            obj.set_background("#e8f5e9");
            obj.set_border("1px solid #388e3c,0px none,0px none,1px solid #388e3c");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static01","10","50",null,"40","10",null,null,null,null,null,this.div_resize.form);
            obj.set_taborder("1");
            obj.set_text("null * 40px");
            obj.set_background("#fff9c4");
            obj.set_border("1px solid #f57f17,1px solid #f57f17,0px none");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static02","10","100","120",null,null,"10",null,null,null,null,this.div_resize.form);
            obj.set_taborder("2");
            obj.set_text("120px * null");
            obj.set_background("#fff59d");
            obj.set_border("1px solid #e65100,0px none,1px solid #e65100,1px solid #e65100");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static03","140","100",null,null,"10","50",null,null,null,null,this.div_resize.form);
            obj.set_taborder("3");
            obj.set_text("null * null");
            obj.set_background("#efebe9");
            obj.set_border("1px solid #8d6e63");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static04",null,"10","90","30","96",null,null,null,null,null,this.div_resize.form);
            obj.set_taborder("4");
            obj.set_text("90px * 30px");
            obj.set_background("#e1f5fe");
            obj.set_border("1px solid #1565c0,1px solid #1565c0,0px none,0px none");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static05",null,"10","80","30","10",null,null,null,null,null,this.div_resize.form);
            obj.set_taborder("5");
            obj.set_text("90px * 30px");
            obj.set_background("#e1f5fe");
            obj.set_border("1px solid #1565c0,1px solid #1565c0,0px none,0px none");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static06","140",null,"30.150753768844222%","30",null,"10",null,null,null,null,this.div_resize.form);
            obj.set_taborder("7");
            obj.set_text("30% * 30px");
            obj.set_background("#fce4ec");
            obj.set_border("0px none,0px none,1px solid #ad1457,1px solid #ad1457");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static07","Static06:10",null,null,"30","10","10",null,null,null,null,this.div_resize.form);
            obj.set_taborder("6");
            obj.set_text("null * 30px");
            obj.set_background("#fce4ec");
            obj.set_border("0px none,0px none,1px solid #ad1457,1px solid #ad1457");
            obj.set_textAlign("center");
            this.div_resize.addChild(obj.name, obj);

            obj = new Static("Static03","20","370","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Move & Resize");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","250","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Unit em, rem");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","2010","-270","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Move & Resize");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","520","-260","250","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Component Base Position");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","20","210","15.30%","11.00%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Button02");
            obj.set_cssclass("btn_WF_Main");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","Button02:70","210","15.30%","11.00%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("static");
            obj.set_cssclass("sta_WF_GArea");
            obj.set_textAlign("center");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","Static06:70","210","17.60%","12.86%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_font");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Stati11","20","155",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","120",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","85",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","34","89","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("set font");
            obj.set_cssclass("sta_WF_LabelC");
            obj.set_textAlign("right");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Radio("absolute_size_rdo","160","88",null,"30","35.60%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_font");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("5");
            obj.set_padding("0px 10px");
            obj.set_positionstep("1");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","34","125","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("width change unit");
            obj.set_cssclass("sta_WF_LabelC");
            obj.set_textAlign("right");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Radio("change_width_rdo","160","123","28.40%","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_padding("0px 10px");
            obj.set_positionstep("1");
            var change_width_rdo_innerdataset = new nexacro.NormalDataset("change_width_rdo_innerdataset", obj);
            change_width_rdo_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "120px","datacolumn" : "120px"},{"codecolumn" : "20em","datacolumn" : "20em"},{"codecolumn" : "20rem","datacolumn" : "20rem"}]});
            obj.set_innerdataset(change_width_rdo_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","454","125","150","26",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_LabelC");
            obj.set_text("height change unit");
            obj.set_taborder("26");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Radio("change_height_rdo","604","123","28.40%","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_columncount("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_padding("0px 10px");
            obj.set_positionstep("1");
            var change_height_rdo_innerdataset = new nexacro.NormalDataset("change_height_rdo_innerdataset", obj);
            change_height_rdo_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "50px","datacolumn" : "50px"},{"codecolumn" : "6em","datacolumn" : "6em"},{"codecolumn" : "6rem","datacolumn" : "6rem"}]});
            obj.set_innerdataset(change_height_rdo_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("change_font_rdo","160","158",null,"30","4.10%",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_columncount("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_padding("0px 10px");
            obj.set_positionstep("1");
            var change_font_rdo_innerdataset = new nexacro.NormalDataset("change_font_rdo_innerdataset", obj);
            change_font_rdo_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "12px","datacolumn" : "12px"},{"codecolumn" : "2em","datacolumn" : "2em"},{"codecolumn" : "2rem","datacolumn" : "2rem"}]});
            obj.set_innerdataset(change_font_rdo_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","34","159","130","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("font change unit");
            obj.set_cssclass("sta_WF_LabelC");
            obj.set_textAlign("right");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_position.form
            obj = new Layout("default","",0,0,this.div_position.form,function(p){});
            this.div_position.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_base.form
            obj = new Layout("default","",0,0,this.div_base.form,function(p){});
            this.div_base.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_resize.form
            obj = new Layout("default","",0,0,this.div_resize.form,function(p){});
            this.div_resize.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","btn_name","text","ds_language","col_name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btn_gender","text","ds_language","col_gender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btn_date","text","ds_language","col_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","btn_email","text","ds_language","col_email");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","btn_telno","text","ds_language","col_telno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","btn_address","text","ds_language","col_address");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Static02","acceptvaluetype","ds_font","codecolumn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Layout_Position.xfdl", function() {
        this._split_num = 29;

        this.obj_ondrag = function(obj,e)
        {
        	return true;
        };

        this.obj_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;
        };

        this.form_ondragmove = function(obj,e)
        {
        	e.sourceobject.move(e.clientx-e.sourceobject.nX, e.clienty-e.sourceobject.nY);
        	this.resetScroll();
        //	this.div_resize.form.resetScroll();
        };

        this.ds_language_onrowposchanged = function(obj,e)
        {
        	this.btn_name.fittocontents = "width";
        	this.btn_gender.fittocontents = "width";
        	this.btn_date.fittocontents = "width";
        	this.btn_email.fittocontents = "width";
        	this.btn_telno.fittocontents = "width";
        	this.btn_address.fittocontents = "width";
        };


        this.form_onbindingvaluechanged = function(obj,e)
        {
        	this.resetScroll();
        };

        this.btn_name00_onclick = function(obj,e)
        {
        	obj.font = 'normal 600 18px/normal "Segoe UI,Malgun Gothic"';
        	this.resetScroll();
        };

        this.Button08_onclick = function(obj,e)
        {
        //	this.div_unit.form.Button02.font = 'normal 600 20px/normal "Segoe UI,Malgun Gothic"';
        	this.div_unit.form.font = 'normal 600 20px/normal "Segoe UI,Malgun Gothic"';
        	this.div_unit.form.resetScroll();

        }


        this.absolute_size_rdo_onitemchanged = function(obj,e)
        {
        	var comp = this.components;
        	for (var i = 0; i < comp.length ; i++)
        	{
        		if (comp[i] && comp[i].taborder > this._split_num)
        		{
        			comp[i].set_font(this.absolute_size_rdo.value);
        			comp[i].set_text(this.absolute_size_rdo.value);

        		}
        	}
        };

        this.change_width_rdo_onitemchanged = function(obj,e)
        {
        	// change width test
        	var comp = this.components;
        	if (comp && comp.length)
        	{
        		for (var i = 0; i < comp.length ; i++)
        		{
        			if (comp[i] && comp[i].taborder > this._split_num)
        			{
        				width = this.change_width_rdo.value;
        				comp[i].set_width(width);
        				comp[i].set_text(width);
        			}
        		}
        	}
        };

        this.change_height_rdo_onitemchanged = function(obj,e)
        {
        	// change height test
        	var comp = this.components;
        	if (comp && comp.length)
        	{
        		for (var i = 0; i < comp.length ; i++)
        		{
        			if (comp[i] && comp[i].taborder > this._split_num)
        			{
        				height = this.change_height_rdo.value;
        				comp[i].set_height(height);
        				comp[i].set_text(height);
        			}
        		}
        	}
        };

        this.change_font_rdo_onitemchanged = function(obj,e)
        {
        // change font test
        	var comp = this.components;

        	if (comp && comp.length)
        	{
        		var font = this.change_font_rdo.value;
        		font += " Malgun Gothic";

        		for (var i = 0; i < comp.length ; i++)
        		{
        			if (comp[i] && comp[i].taborder > this._split_num)
        			{
        				//trace(comp[i].taborder);
        				comp[i].set_font(font);
        				comp[i].set_text(font);

        			}
        		}


        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("onbindingvaluechanged",this.form_onbindingvaluechanged,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.img_resize_grip.addEventHandler("ondrag",this.obj_ondrag,this);
            this.img_resize_grip.addEventHandler("onlbuttondown",this.obj_onlbuttondown,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.absolute_size_rdo.addEventHandler("onitemchanged",this.absolute_size_rdo_onitemchanged,this);
            this.change_width_rdo.addEventHandler("onitemchanged",this.change_width_rdo_onitemchanged,this);
            this.change_height_rdo.addEventHandler("onitemchanged",this.change_height_rdo_onitemchanged,this);
            this.change_font_rdo.addEventHandler("onitemchanged",this.change_font_rdo_onitemchanged,this);
            this.ds_language.addEventHandler("onrowposchanged",this.ds_language_onrowposchanged,this);
        };
        this.loadIncludeScript("Layout_Position.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
