(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Sample");
            this.set_titletext("Exe2_Sample");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL_CHK","type" : "STRING","size" : "1"},{"id" : "CORP_CODE","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "POS_CODE","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "20"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "BONUS","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "PHONE_NO","type" : "STRING","size" : "11"},{"id" : "E_MAIL","type" : "STRING","size" : "50"},{"id" : "BIRTH_DAY","type" : "DATE","size" : "20"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "WEDD_DAY","type" : "DATE","size" : "20"},{"id" : "IMG_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Melon","EMP_ID" : "KR040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "5000","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp13.png","COL_CHK" : "0","E_MAIL" : "Melon@nexacro.com","PHONE_NO" : "0105339755","BIRTH_DAY" : "19890325","WEDD_DAY" : "19910519"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","EMP_NAME" : "Elsa","EMP_ID" : "KR240","POS_CODE" : "30","HIRE_DATE" : "20110508","SALARY" : "7000","BONUS" : "2000","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp10.png","E_MAIL" : "Elsa@nexacro.com","PHONE_NO" : "0107401829","BIRTH_DAY" : "19700122","WEDD_DAY" : "20051004"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","EMP_NAME" : "Bts","EMP_ID" : "KR210","POS_CODE" : "10","HIRE_DATE" : "20091021","SALARY" : "5000","BONUS" : "3000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp19.png","E_MAIL" : "Bts@nexacro.com","PHONE_NO" : "0104293599","BIRTH_DAY" : "19781222","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","EMP_NAME" : "Ted ","EMP_ID" : "CN210","POS_CODE" : "10","HIRE_DATE" : "20091021","SALARY" : "6000","BONUS" : "1200","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp19.png","E_MAIL" : "Ted@nexacro.com","PHONE_NO" : "0107726763","BIRTH_DAY" : "19640204","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","EMP_NAME" : "Diana","EMP_ID" : "JP020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "6500","BONUS" : "800","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp11.png","E_MAIL" : "Diana@nexacro.com","PHONE_NO" : "0107314011","BIRTH_DAY" : "19720513","WEDD_DAY" : "19871015"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Issac","EMP_ID" : "CN010","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "7000","BONUS" : "900","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp10.png","E_MAIL" : "Issac@nexacro.com","PHONE_NO" : "0104316461","BIRTH_DAY" : "19940512","WEDD_DAY" : "19980502"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","EMP_NAME" : "Henry ","EMP_ID" : "CN220","POS_CODE" : "20","HIRE_DATE" : "20110928","SALARY" : "8000","BONUS" : "1000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp20.png","E_MAIL" : "Henry@nexacro.com","PHONE_NO" : "0102320795","BIRTH_DAY" : "19970926"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Kate ","EMP_ID" : "KR050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8500","BONUS" : "4000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp14.png","E_MAIL" : "Kate@nexacro.com","PHONE_NO" : "0106348086","BIRTH_DAY" : "19861119"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","EMP_NAME" : "Twice","EMP_ID" : "KR140","POS_CODE" : "20","HIRE_DATE" : "20101109","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp18.png","E_MAIL" : "Twice@nexacro.com","PHONE_NO" : "0101251107","BIRTH_DAY" : "19790318","WEDD_DAY" : "20050203","SALARY" : "7300","BONUS" : "3000"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","EMP_NAME" : "Dennis ","EMP_ID" : "JP130","POS_CODE" : "30","HIRE_DATE" : "20130102","SALARY" : "5600","BONUS" : "5000","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp17.png","E_MAIL" : "Dennis@nexacro.com","PHONE_NO" : "0104457429","BIRTH_DAY" : "19600427","WEDD_DAY" : "19880505"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Max ","EMP_ID" : "CN020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "3500","BONUS" : "3000","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp11.png","E_MAIL" : "Max@nexacro.com","PHONE_NO" : "0109825316","BIRTH_DAY" : "19691021","WEDD_DAY" : "19861022"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Jackson","EMP_ID" : "KR020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "6800","BONUS" : "3000","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp11.png","E_MAIL" : "Jackson@nexacro.com","PHONE_NO" : "0103173402","BIRTH_DAY" : "19700302","WEDD_DAY" : "19971030"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "Adam","EMP_ID" : "KR030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "8600","BONUS" : "2000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp15.png","E_MAIL" : "Adamr@nexacro.com","PHONE_NO" : "0104643738","BIRTH_DAY" : "19890618"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","EMP_NAME" : "Belle","EMP_ID" : "KR230","POS_CODE" : "20","HIRE_DATE" : "20161120","SALARY" : "7700","BONUS" : "5000","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp14.png","E_MAIL" : "Belle@nexacro.com","PHONE_NO" : "0102989094","BIRTH_DAY" : "19760227","WEDD_DAY" : "19910519"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","EMP_NAME" : "Lexy","EMP_ID" : "JP040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "2000","GENDER" : "W","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp13.png","E_MAIL" : "Lexy@nexacro.com","PHONE_NO" : "0107956572","BIRTH_DAY" : "19780808","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","EMP_NAME" : "Lucy","EMP_ID" : "JP050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8000","BONUS" : "3000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp14.png","E_MAIL" : "Lucy@nexacro.com","PHONE_NO" : "0107903476","BIRTH_DAY" : "19770924","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","EMP_NAME" : "Kein ","EMP_ID" : "KR110","POS_CODE" : "20","HIRE_DATE" : "20180201","SALARY" : "9000","BONUS" : "1200","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp15.png","E_MAIL" : "Kein@nexacro.com","PHONE_NO" : "0108938528","BIRTH_DAY" : "19800206","WEDD_DAY" : "20050407"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","EMP_NAME" : "Juliana","EMP_ID" : "JP110","POS_CODE" : "20","HIRE_DATE" : "20180201","SALARY" : "7000","BONUS" : "800","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp15.png","E_MAIL" : "Juliana@nexacro.com","PHONE_NO" : "0108234435","BIRTH_DAY" : "19610312","WEDD_DAY" : "20130416"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","EMP_NAME" : "Kara","EMP_ID" : "KR130","POS_CODE" : "30","HIRE_DATE" : "20130102","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp17.png","E_MAIL" : "Kara@nexacro.com","PHONE_NO" : "0106851530","BIRTH_DAY" : "19641212","WEDD_DAY" : "19880623","SALARY" : "5000","BONUS" : "900"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR30","EMP_NAME" : "Andrew ","EMP_ID" : "KR220","POS_CODE" : "20","HIRE_DATE" : "20110928","SALARY" : "6000","BONUS" : "1000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp20.png","E_MAIL" : "Andrew@nexacro.com","PHONE_NO" : "0108230482","BIRTH_DAY" : "19751109"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","EMP_NAME" : "Maria","EMP_ID" : "JP030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "6500","BONUS" : "4000","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp12.png","E_MAIL" : "Maria@nexacro.com","PHONE_NO" : "0105053225","BIRTH_DAY" : "19810531"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP10","EMP_NAME" : "Eddy","EMP_ID" : "JP010","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "7000","BONUS" : "3000","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::emp/img_emp10.png","E_MAIL" : "Eddy@nexacro.com","PHONE_NO" : "0107218351","BIRTH_DAY" : "19731019","WEDD_DAY" : "19890505"},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","EMP_NAME" : "Sarah","EMP_ID" : "JP120","POS_CODE" : "20","HIRE_DATE" : "20171020","SALARY" : "8000","BONUS" : "5000","GENDER" : "W","MARRIED" : "0","IMG_URL" : "imagerc::emp/img_emp16.png","E_MAIL" : "Sarah@nexacro.com","PHONE_NO" : "0105784137","BIRTH_DAY" : "19821130"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR20","EMP_NAME" : "Ivy","EMP_ID" : "KR120","POS_CODE" : "20","HIRE_DATE" : "20171020","SALARY" : "8500","BONUS" : "3000","GENDER" : "W","MARRIED" : "0","IMG_URL" : "imagerc::img_emp16.png","E_MAIL" : "Ivy@nexacro.com","PHONE_NO" : "0107642474","BIRTH_DAY" : "19790905","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Noel ","EMP_ID" : "CN030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "7300","BONUS" : "400","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::img_emp12.png","E_MAIL" : "Noel@nexacro.com","PHONE_NO" : "0104794523","BIRTH_DAY" : "19970717","WEDD_DAY" : "20140720"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","EMP_NAME" : "Arnold","EMP_ID" : "CN240","POS_CODE" : "30","HIRE_DATE" : "20110508","SALARY" : "5600","BONUS" : "3000","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::img_emp10.png","E_MAIL" : "Arnold@nexacro.com","PHONE_NO" : "0102255131","BIRTH_DAY" : "19920531","WEDD_DAY" : "19971116"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN20","EMP_NAME" : "Alex ","EMP_ID" : "CN230","POS_CODE" : "20","HIRE_DATE" : "20161120","SALARY" : "3500","BONUS" : "1200","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::img_emp14.png","E_MAIL" : "Alex@nexacro.com","PHONE_NO" : "0106638982","BIRTH_DAY" : "19730718","WEDD_DAY" : "20010602"},{"COL_CHK" : "0","CORP_CODE" : "KR","DEPT_CODE" : "KR10","EMP_NAME" : "John ","EMP_ID" : "KR010","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "6000","BONUS" : "800","GENDER" : "M","MARRIED" : "1","IMG_URL" : "imagerc::img_emp10.png","E_MAIL" : "John@nexacro.com","PHONE_NO" : "0109863248","BIRTH_DAY" : "19730621","WEDD_DAY" : "20090305"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Steven ","EMP_ID" : "CN050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8000","BONUS" : "900","GENDER" : "M","MARRIED" : "0","IMG_URL" : "imagerc::img_emp14.png","E_MAIL" : "Steven@nexacro.com","PHONE_NO" : "0103786348","BIRTH_DAY" : "19661021","WEDD_DAY" : ""},{"COL_CHK" : "0","CORP_CODE" : "JP","DEPT_CODE" : "JP20","EMP_NAME" : "Donald ","EMP_ID" : "JP140","POS_CODE" : "20","HIRE_DATE" : "20101109","SALARY" : "5000","BONUS" : "1000","GENDER" : "W","MARRIED" : "1","IMG_URL" : "imagerc::img_emp18.png","E_MAIL" : "Donald@nexacro.com","PHONE_NO" : "0108208010","BIRTH_DAY" : "19840814","WEDD_DAY" : "20180201"},{"COL_CHK" : "0","CORP_CODE" : "CN","DEPT_CODE" : "CN10","EMP_NAME" : "Ray ","EMP_ID" : "CN040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "3000","GENDER" : "W","MARRIED" : "0","IMG_URL" : "imagerc::img_emp13.png","E_MAIL" : "Ray@nexacro.com","PHONE_NO" : "0101330259","BIRTH_DAY" : "19930402"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP_CODE","type" : "STRING","size" : "32"},{"id" : "CORP_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"CORP_CODE" : "KR","CORP_NAME" : "Korea Corp."},{"CORP_CODE" : "JP","CORP_NAME" : "Japen Corp."},{"CORP_CODE" : "CN","CORP_NAME" : "China Corp."}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"},{"id" : "CORP_CODE","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "KR10","DEPT_NAME" : "Education(KR)","CORP_CODE" : "KR"},{"DEPT_CODE" : "KR20","DEPT_NAME" : "Marketing(KR)","CORP_CODE" : "KR"},{"DEPT_CODE" : "KR30","DEPT_NAME" : "Sales(KR)","CORP_CODE" : "KR"},{"DEPT_CODE" : "JP10","DEPT_NAME" : "Education(JP)","CORP_CODE" : "JP"},{"DEPT_CODE" : "JP20","DEPT_NAME" : "Sales(JP)","CORP_CODE" : "JP"},{"DEPT_CODE" : "CN10","DEPT_NAME" : "Education(CN)","CORP_CODE" : "CN"},{"DEPT_CODE" : "CN20","DEPT_NAME" : "Marketing(CN)","CORP_CODE" : "CN"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "POS_CODE","type" : "string","size" : "32"},{"id" : "POS_NAME","type" : "string","size" : "32"}]},"Rows" : [{"POS_CODE" : "10","POS_NAME" : "Manager"},{"POS_CODE" : "20","POS_NAME" : "Staff"},{"POS_CODE" : "30","POS_NAME" : "Intern"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_filter", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL_ID","type" : "STRING","size" : "10"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "10"},{"id" : "MENU_NAME","type" : "STRING","size" : "50"},{"id" : "LEVEL","type" : "STRING","size" : "10"}]},"Rows" : [{"MENU_ID" : "Fix","MENU_NAME" : "Fix","LEVEL" : "0"},{"MENU_ID" : "FixCancel","MENU_NAME" : "Fix Cancel","LEVEL" : "0"},{"MENU_ID" : "Hide","MENU_NAME" : "Hide","LEVEL" : "0"},{"MENU_ID" : "HideCancel","MENU_NAME" : "Hide Cancel","LEVEL" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_corpDept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"},{"id" : "CORP_CODE","type" : "STRING","size" : "256"},{"id" : "CORP_NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "KR10","DEPT_NAME" : "Education(KR)","CORP_CODE" : "KR","CORP_NAME" : "Korea Corp."},{"DEPT_CODE" : "KR20","DEPT_NAME" : "Marketing(KR)","CORP_CODE" : "KR","CORP_NAME" : "Korea Corp."},{"DEPT_CODE" : "KR30","DEPT_NAME" : "Sales(KR)","CORP_CODE" : "KR","CORP_NAME" : "Korea Corp."},{"DEPT_CODE" : "JP10","DEPT_NAME" : "Education(JP)","CORP_CODE" : "JP","CORP_NAME" : "Japen Corp."},{"DEPT_CODE" : "JP20","DEPT_NAME" : "Sales(JP)","CORP_CODE" : "JP","CORP_NAME" : "Japen Corp."},{"DEPT_CODE" : "CN10","DEPT_NAME" : "Education(CN)","CORP_CODE" : "CN","CORP_NAME" : "China Corp."},{"DEPT_CODE" : "CN20","DEPT_NAME" : "Marketing(CN)","CORP_CODE" : "CN","CORP_NAME" : "China Corp."}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","10","193","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Sample");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","50",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","562","50","77","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Sort");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_type","650","50","286","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var div_search_form_rdo_type_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_type_innerdataset", obj);
            div_search_form_rdo_type_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Default"},{"codecolumn" : "D","datacolumn" : "Corp, Dept"},{"codecolumn" : "E","datacolumn" : "Empl"}]});
            obj.set_innerdataset(div_search_form_rdo_type_innerdataset);
            obj.set_text("Default");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","10","50","72","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("Filter");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_col","129","50","120","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_filter");
            obj.set_codecolumn("COL_ID");
            obj.set_datacolumn("COL_ID");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_value","329","50","110","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_filter","444","50","90","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Filter");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_type","254","50","70","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cmb_type_innerdataset = new nexacro.NormalDataset("div_search_form_cmb_type_innerdataset", obj);
            div_search_form_cmb_type_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "==","datacolumn" : "=="},{"codecolumn" : "!=","datacolumn" : "!="},{"codecolumn" : ">","datacolumn" : ">"},{"codecolumn" : "<","datacolumn" : "<"},{"codecolumn" : "like","datacolumn" : "like"}]});
            obj.set_innerdataset(div_search_form_cmb_type_innerdataset);
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10","10","114","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("Corp/Dept");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_corp","129","10","150","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_corp");
            obj.set_codecolumn("CORP_CODE");
            obj.set_datacolumn("CORP_NAME");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_dept","284","10","150","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_detail",null,"5","30","30","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_icon("URL(\"imagerc::img_btn_collapse.png\")");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_padding("0px 0px 0px 5px");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","div_search:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"106\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"22\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"Corp.\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"ID\"/><Cell col=\"5\" text=\"Name\"/><Cell col=\"6\" text=\"Position\"/><Cell col=\"7\" text=\"Hire Date\"/><Cell col=\"8\" text=\"Salary\"/><Cell col=\"9\" text=\"Bonus\"/><Cell col=\"10\" text=\"Per(%)\"/><Cell col=\"11\" text=\"Gender\"/><Cell col=\"12\" text=\"Married\"/><Cell col=\"13\" text=\"Wedd Day\"/><Cell col=\"14\" text=\"Phone No\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" textAlign=\"center\" text=\"expr:dataset.rowcount - currow\"/><Cell col=\"2\" text=\"bind:CORP_CODE\" displaytype=\"combocontrol\" combodataset=\"ds_corp\" combodatacol=\"CORP_NAME\" combocodecol=\"CORP_CODE\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" suppress=\"0\"/><Cell col=\"4\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\" expandshow=\"expr:(dataset.rowposition == currow ? &quot;show&quot; : &quot;hide&quot;)\"/><Cell col=\"5\" text=\"bind:EMP_NAME\"/><Cell col=\"6\" text=\"bind:POS_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"POS_CODE\" combodatacol=\"POS_NAME\"/><Cell col=\"7\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:SALARY\" edittype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"mask\" maskeditlimitbymask=\"integer\"/><Cell col=\"9\" text=\"bind:BONUS\" maskeditformat=\"#,###\" edittype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" text=\"expr:Math.round(BONUS/SALARY*100) + &quot;%&quot;\" displaytype=\"progressbarcontrol\" progressbarblocksize=\"10\" progressbarblockgap=\"1\"/><Cell col=\"11\" displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_gender_m.png&quot; : &quot;imagerc::img_gender_w.png&quot;\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:WEDD_DAY\" displaytype=\"date\" edittype=\"expr:MARRIED == &quot;1&quot; ? &quot;date&quot; : &quot;none&quot;\" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:PHONE_NO\" edittype=\"text\" editinputtype=\"digit\" editmaxlength=\"0\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;BONUS&quot;)\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"expr:Math.round(dataset.getSum(&quot;BONUS&quot;) / dataset.getSum(&quot;SALARY&quot;) * 100) + &quot;%&quot;\" maskeditformat=\"###%\" textAlign=\"right\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format><Format id=\"default_E\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"Photo\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Corp.\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" rowspan=\"2\" text=\"Per&#13;&#10;(%)\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Phone No\"/><Cell row=\"1\" col=\"2\" text=\"ID\"/><Cell row=\"1\" col=\"3\" text=\"Department\"/><Cell row=\"1\" col=\"4\" text=\"Hire Date\"/><Cell row=\"1\" col=\"5\" text=\"Bonus\"/><Cell row=\"1\" col=\"7\" text=\"Married\"/><Cell row=\"1\" col=\"8\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:IMG_URL\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:CORP_CODE\" displaytype=\"combotext\" combodataset=\"ds_corp\" combodatacol=\"CORP_NAME\" combocodecol=\"CORP_CODE\"/><Cell col=\"4\" text=\"bind:POS_CODE\" displaytype=\"combotext\" combodataset=\"ds_pos\" combocodecol=\"POS_CODE\" combodatacol=\"POS_NAME\"/><Cell col=\"5\" text=\"bind:SALARY\" edittype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"mask\" maskeditlimitbymask=\"integer\"/><Cell col=\"6\" rowspan=\"2\" text=\"expr:Math.round(BONUS/SALARY*100) + &quot;%&quot;\" progressbarsmooth=\"true\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"imagecontrol\" text=\"expr:GENDER == &quot;M&quot; ? &quot;imagerc::img_gender_m.png&quot; : &quot;imagerc::img_gender_w.png&quot;\"/><Cell col=\"8\" text=\"bind:PHONE_NO\" edittype=\"text\" editinputtype=\"digit\" editmaxlength=\"0\"/><Cell row=\"1\" col=\"2\" text=\"bind:EMP_ID\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA-###\"/><Cell row=\"1\" col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\" suppress=\"0\"/><Cell row=\"1\" col=\"4\" text=\"bind:HIRE_DATE\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell row=\"1\" col=\"5\" text=\"bind:BONUS\" maskeditformat=\"#,###\" edittype=\"mask\" textAlign=\"right\"/><Cell row=\"1\" col=\"7\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"8\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("pMnu_menu","1010","7","200","110",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("LEVEL");
            obj.set_enablecolumn("ENABLE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ret",null,"8","97","30","337",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Retrieve");
            obj.set_textPadding("0px 0px 0px 5px");
            obj.set_icon("URL(\"imagerc::img_btn_retrieve.png\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"8","69","30","263",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Add");
            obj.set_icon("URL(\"imagerc::img_btn_add.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"8","86","30","172",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Delete");
            obj.set_icon("URL(\"imagerc::img_btn_del.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"8","76","30","91",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"8","76","30","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Close");
            obj.set_icon("URL(\"imagerc::img_btn_close.png\")");
            obj.set_textPadding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDiv_corpDept","1020","160","350","200",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_corpDept","5","4",null,null,"5","10",null,null,null,null,this.pDiv_corpDept.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_corpDept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"64\"/><Column size=\"114\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Corp\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:CORP_NAME\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.pDiv_corpDept.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDiv_corpDept.form
            obj = new Layout("default","",0,0,this.pDiv_corpDept.form,function(p){});
            this.pDiv_corpDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Sample.xfdl", function() {

        // Form Onload
        this.Exe_Sample_onload = function(obj,e)
        {
        	this.div_search.form.scrolltype="none";
            this.fn_setFilterColID()
            this.fn_compList(this);
        };


        //Search Button Form-1) Corp, Dept Combo Filter
        //참조 : Exe_Dataset.xfdl  ->  Exe3_4 문제
        this.div_search_cmb_corp_onitemchanged = function(obj,e)
        {

        };

        //Search Button Form-2) Column Filter ( ==, >=, <=, like )
        // Dataset ColumnID
        //참조 : Exe_Grid.xfdl  ->  Exe1_3 문제
        this.fn_setFilterColID = function()
        {

        }

        //Search Button Form-2) Column Filter Button
        //참조 : Exe_Dataset.xfdl  ->  Exe3_4문제 ,   btn_Exe3_Filter_onclick 이벤트 :like 검색
        this.div_search_btn_filter_onclick = function(obj,e)
        {

        };

        //Search Button Form-3) Search Area Expand/Collapse
        this.div_search_btn_detail_onclick = function(obj,e)
        {
            var nSize1 = 38;
            var nSize2 = 72;
            var nHeight = this.div_search.height;
            nHeight = (nHeight == nSize1 ? nSize2 : nSize1);
        	this.div_search.height=nHeight;

            var sIcon1 = "imagerc::img_btn_expand.png";
            var sIcon2 = "imagerc::img_btn_collapse.png";
            var sMarker = this.div_search.form.btn_detail.icon;
            sMarker = (sMarker == sIcon1 ? sIcon2 : sIcon1);
            this.div_search.form.btn_detail.icon=sMarker;

        };

        //Search Button Form-4) Data Sort - Corp,Dept / EMP_NAME
        //참조 : Exe_dataset.xfdl  -> Exe3_3 문제 : keyString
        this.div_search_rdo_type_onitemchanged = function(obj,e)
        {
            //Sort: Corp,Dept
            //formatid:"default"
            if(e.postvalue == "D"){

            }
            //Sort: Empl
            //formatid:"default_E"
            else if(e.postvalue == "E"){

            }
            //Sort: Default
            //formatid:"default"
            else{

            }
        };

        //Search Button Form - Add
        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_emp.insertRow(this.ds_emp.rowposition);
        };

        //Search Button Form-5) - Delete
        //참조 : Exe_Dataset.xfdl  ->  Exe4_4 문제 : deleteMultiRows
        this.btn_del_onclick = function(obj,e)
        {
            // Delete Row
            // var nRow = this.ds_emp.findRow("COL_CHK", "1");
            // this.ds_emp.deleteRow(nRow);

            // Delete Meulti Rows

        };


        //Search Button Form-6) - Save
        //참조 : Exe_Dataset.xfdl  ->  Dataset6_cancolumnchange 이벤트
        this.btn_save_onclick = function(obj,e)
        {
            for(var i=0; i<this.ds_emp.rowcount; i++){
                var sID = this.ds_emp.getColumn(i, "EMP_ID");


            }
        };

        //Search Button Form-7) - Close
        //참조 : Exe_Dataset.xfdl  ->  btn_Exe4_Check_onclick 이벤트
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        	//var sRtn = this.fn_dataCheck();
        };

        this.fn_dataCheck = function()
        {

            return false;
        };

        //Search Button Form-8) Component Event Set
        //참조 : Exe_Form.xfdl  ->  fn_compList 이벤트
        this.fn_compList = function(pObj)
        {

        }

        //Grid-1) CheckBox Select ALL
        //참조 : Exe_Grid.xfdl ->  Grid1_onheadclick 이벤트
        this.grd_emp_onheadclick = function(obj,e)
        {

        };

        //Grid-2) Corp Dept Multi Combo
        //참조 : Exe_Div_PopupDiv.xfdl  ->  Exe1_1 문제 :trackPopupByComponent
        this.grd_emp_oncellclick = function(obj,e)
        {
        	if(sColID == "CORP_CODE" && e.fromreferenceobject.id == "dropbutton"){

        	}
        };

        //Grid-2) PopupDiv Return
        //참조 : Exe_Div_PopupDiv.xfdl ->  PopupDiv1_btn_Exe1_Close_onclick 이벤트
        this.pDiv_corpDept_grd_corpDept_oncelldblclick = function(obj,e)
        {

        };

        //Grid-3) Expand Button - Popup Open
        //참조 : Exe_Form.xfdl   Exe3_1 문제 :showModal
        this.grd_emp_onexpandup = function(obj,e)
        {
            var objChildFrame = new ChildFrame();
                objChildFrame.init();

                objChildFrame.dragmovetype="all";
                objChildFrame.openalign="center middle";
                objChildFrame.overlaycolor="RGBA(196,196,196,0.5)";

                var sCorp = this.ds_emp.getColumn(this.ds_emp.rowposition, "CORP_CODE");
                var sDept = this.ds_emp.getColumn(this.ds_emp.rowposition, "DEPT_CODE");
                var objParam = {};

        };

        //참조 : Exe_Form.xfdl  -> Exe3_1 콜백함수
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined || strReturn == ""){
        		return;
        	}

        };

        // Duplication Check
        //참조 : Exe_Dataset.xfdl  -> Dataset6_cancolumnchange 이벤트
        this.ds_emp_cancolumnchange = function(obj,e)
        {

        };

        //Grid-4 Detail Open
        //참조 : Exe_Form.xfdl  ->  Exe3_3 문제 :open
        this.grd_emp_oncelldblclick = function(obj,e)
        {
        	var nW = 380;
        	var nH = 200;
        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);

        	var sOpenStyle = "showtitlebar=true showstatusbar=false "
        	               + "resizable=true autosize=false titletext=Emp Detail";

        	var objParam = { param1:this.ds_emp
                           , parma2:this.ds_emp.rowposition };

        };

        //Grid-5 PopupMenu Fix, Hide
        //참조 : Exe_Grid.xfdl   ->  Exe3_2 ~ Exe3_5 문제
        this.grd_emp_onrbuttonup = function(obj,e)
        {
            var objApp = nexacro.getApplication();
        	var x = nexacro.toNumber(nexacro.System.getCursorX())-nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));
        	var y = nexacro.toNumber(nexacro.System.getCursorY())-nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0));

        };


        //참조 : Exe_Grid.xfdl  ->  Exe3_2 ~ Exe3_5 문제
        this.grd_emp.arrHide = [];
        this.pMnu_menu_onmenuclick = function(obj,e)
        {
            if(e.id == "Fix"){

            }
            else if(e.id == "FixCancel"){

            }
            else if(e.id == "Hide"){

            }
            else if(e.id == "HideCancel"){

            }
        };


        // Sort Function Sample -  Grid Head Click
        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;
        this.fn_sort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;
            var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = obj.getCellText(-1, e.cell);

        	if(sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        		objDs.keystring="S:-" + sColId[1];
        	}
        	else if(sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK){
        		obj.setCellProperty("head", e.cell, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        		objDs.keystring="S:+" + sColId[1];
        	}
        	else{
        		obj.setCellProperty("head", e.cell, "text", sHeadText + this.CONST_ASC_MARK);
        		objDs.keystring="S:+" + sColId[1];
        	}

        	if(this.nPrevCell > -1 && this.nPrevCell != e.cell){
        		var sPrevText = obj.getCellText(-1, this.nPrevCell);
        		obj.setCellProperty("head", this.nPrevCell, "text", sPrevText.substr(0, sPrevText.length - 1));
        	}

        	this.nPrevCell = e.cell;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.div_search.form.rdo_type.addEventHandler("onitemchanged",this.div_search_rdo_type_onitemchanged,this);
            this.div_search.form.btn_filter.addEventHandler("onclick",this.div_search_btn_filter_onclick,this);
            this.div_search.form.cmb_corp.addEventHandler("onitemchanged",this.div_search_cmb_corp_onitemchanged,this);
            this.div_search.form.btn_detail.addEventHandler("onclick",this.div_search_btn_detail_onclick,this);
            this.grd_emp.addEventHandler("oncelldblclick",this.grd_emp_oncelldblclick,this);
            this.grd_emp.addEventHandler("onexpandup",this.grd_emp_onexpandup,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.grd_emp.addEventHandler("oncellclick",this.grd_emp_oncellclick,this);
            this.grd_emp.addEventHandler("onrbuttonup",this.grd_emp_onrbuttonup,this);
            this.pMnu_menu.addEventHandler("onmenuclick",this.pMnu_menu_onmenuclick,this);
            this.btn_ret.addEventHandler("onclick",this.btn_ret_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.pDiv_corpDept.form.grd_corpDept.addEventHandler("oncelldblclick",this.pDiv_corpDept_grd_corpDept_oncelldblclick,this);
            this.ds_emp.addEventHandler("oncolumnchanged",this.ds_emp_oncolumnchanged,this);
            this.ds_emp.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_filter.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_filter.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_filter.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
        };
        this.loadIncludeScript("Exe_Sample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
