(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Exe2_Chap2_Grid");
            this.set_titletext("Exe2_Chap2_Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset1", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"}]},"Rows" : [{"DEPT_CODE" : "K10","EMP_NAME" : "John ","EMP_ID" : "KR010","HIRE_DATE" : "20120304","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Jackson","EMP_ID" : "KR020","HIRE_DATE" : "20160602","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Adam","EMP_ID" : "KR030","HIRE_DATE" : "20030805","SALARY" : "3000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K10","EMP_NAME" : "Melon","EMP_ID" : "KR040","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kein ","EMP_ID" : "KR110","HIRE_DATE" : "20180201","SALARY" : "1000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kara","EMP_ID" : "KR120","HIRE_DATE" : "20171020","SALARY" : "","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Twice","EMP_ID" : "KR130","HIRE_DATE" : "20130102","GENDER" : "W","MARRIED" : "1"},{"DEPT_CODE" : "K30","EMP_NAME" : "Bts","EMP_ID" : "KR210","HIRE_DATE" : "20091021","SALARY" : "1000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Andrew ","EMP_ID" : "KR220","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Belle","EMP_ID" : "KR230","HIRE_DATE" : "20161120","SALARY" : "6000","GENDER" : "W","MARRIED" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset2", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"}]},"Rows" : [{"DEPT_CODE" : "K10","EMP_NAME" : "John ","EMP_ID" : "KR010","HIRE_DATE" : "20120304","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Jackson","EMP_ID" : "KR020","HIRE_DATE" : "20160602","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Adam","EMP_ID" : "KR030","HIRE_DATE" : "20030805","SALARY" : "3000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K10","EMP_NAME" : "Melon","EMP_ID" : "KR040","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kein ","EMP_ID" : "KR110","HIRE_DATE" : "20180201","SALARY" : "1000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kara","EMP_ID" : "KR120","HIRE_DATE" : "20171020","SALARY" : "","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Twice","EMP_ID" : "KR130","HIRE_DATE" : "20130102","GENDER" : "W","MARRIED" : "1"},{"DEPT_CODE" : "K30","EMP_NAME" : "Bts","EMP_ID" : "KR210","HIRE_DATE" : "20091021","SALARY" : "1000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Andrew ","EMP_ID" : "KR220","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Belle","EMP_ID" : "KR230","HIRE_DATE" : "20161120","SALARY" : "6000","GENDER" : "W","MARRIED" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset4", this);
            obj.set_reversesubsum("true");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ORG_NAME","type" : "STRING","size" : "256"},{"id" : "ORG_CODE","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "256"},{"id" : "SALARY","type" : "INT","size" : "256"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "E_MAIL","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "WEDD_DAY","type" : "STRING","size" : "256"},{"id" : "COL_CHK","type" : "STRING","size" : "256"}]},"Rows" : [{"ORG_NAME" : "nexacro","ORG_CODE" : "NP","LEVEL" : "0"},{"ORG_NAME" : "Korea Corporation","ORG_CODE" : "KR","LEVEL" : "1"},{"ORG_NAME" : "Joseph","ORG_CODE" : "KR000","LEVEL" : "2","POSITION" : "Chairman","SALARY" : "7000","GENDER" : "W","PHONE_NO" : "0105339755","E_MAIL" : "Joseph@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19910519"},{"ORG_NAME" : "Management Group","ORG_CODE" : "KR1","LEVEL" : "2"},{"ORG_NAME" : "Anne","ORG_CODE" : "KR010","LEVEL" : "3","POSITION" : "Division Manager","SALARY" : "2000","GENDER" : "M","PHONE_NO" : "0107401829","E_MAIL" : "Anne@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20051004"},{"ORG_NAME" : "Education Team","ORG_CODE" : "KR11","LEVEL" : "3"},{"ORG_NAME" : "John ","ORG_CODE" : "KR101","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "9000","GENDER" : "M","PHONE_NO" : "0104293599","E_MAIL" : "John@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19871015"},{"ORG_NAME" : "Jackson","ORG_CODE" : "KR102","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "6000","GENDER" : "M","PHONE_NO" : "0107726763","E_MAIL" : "Jackson@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19980502"},{"ORG_NAME" : "Adam","ORG_CODE" : "KR103","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "3000","GENDER" : "M","PHONE_NO" : "0107314011","E_MAIL" : "Adamr@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Melon","ORG_CODE" : "KR104","LEVEL" : "4","POSITION" : "Officer","SALARY" : "6000","GENDER" : "W","PHONE_NO" : "0104316461","E_MAIL" : "Melon@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Kate ","ORG_CODE" : "KR105","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "8000","GENDER" : "M","PHONE_NO" : "0102320795","E_MAIL" : "Kate@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Sales Team","ORG_CODE" : "KR12","LEVEL" : "3"},{"ORG_NAME" : "Bts","ORG_CODE" : "KR106","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "1000","GENDER" : "M","PHONE_NO" : "0106348086","E_MAIL" : "Bts@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Andrew ","ORG_CODE" : "KR107","LEVEL" : "4","POSITION" : "Department Manager","SALARY" : "8000","GENDER" : "M","PHONE_NO" : "0101251107","E_MAIL" : "Andrew@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Belle","ORG_CODE" : "KR108","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "6000","GENDER" : "W","PHONE_NO" : "0104457429","E_MAIL" : "Belle@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19880505"},{"ORG_NAME" : "Elsa","ORG_CODE" : "KR109","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "7000","GENDER" : "W","PHONE_NO" : "0109825316","E_MAIL" : "Ann@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19861022"},{"ORG_NAME" : "Marketing Team","ORG_CODE" : "KR13","LEVEL" : "3","POSITION" : "Supervisor","SALARY" : "1000","GENDER" : "M","PHONE_NO" : "0103173402","E_MAIL" : "Lyle@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19971030"},{"ORG_NAME" : "Kein ","ORG_CODE" : "KR111","LEVEL" : "4","POSITION" : "Officer","SALARY" : "9000","GENDER" : "W","PHONE_NO" : "0104643738","E_MAIL" : "Kein@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Ivy","ORG_CODE" : "KR112","LEVEL" : "4","POSITION" : "Department Manager","SALARY" : "2000","GENDER" : "W","PHONE_NO" : "0102989094","E_MAIL" : "Ivy@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19910519"},{"ORG_NAME" : "Kara","ORG_CODE" : "KR113","LEVEL" : "4","POSITION" : "Officer","SALARY" : "3000","GENDER" : "W","PHONE_NO" : "0107956572","E_MAIL" : "Kara@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20050203"},{"ORG_NAME" : "Twice","ORG_CODE" : "KR114","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "5000","GENDER" : "W","PHONE_NO" : "0107903476","E_MAIL" : "Twice@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20130416"},{"ORG_NAME" : "Japen Corporation","ORG_CODE" : "JP","LEVEL" : "1","POSITION" : "Assistant Manager","SALARY" : "5000","GENDER" : "W","PHONE_NO" : "0107903476","E_MAIL" : "Isaiah@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20130416"},{"ORG_NAME" : "Oleg","ORG_CODE" : "JP000","LEVEL" : "2","POSITION" : "Chairman","SALARY" : "7000","GENDER" : "W","PHONE_NO" : "0105339755","E_MAIL" : "Oleg@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19910519"},{"ORG_NAME" : "Management Group","ORG_CODE" : "JP1","LEVEL" : "2"},{"ORG_NAME" : "Aladdin","ORG_CODE" : "JP010","LEVEL" : "3","POSITION" : "Division Manager","SALARY" : "2000","GENDER" : "M","PHONE_NO" : "0107401829","E_MAIL" : "Aladdin@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20051004"},{"ORG_NAME" : "Education Team","ORG_CODE" : "JP11","LEVEL" : "3","POSITION" : "Assistant Manager","SALARY" : "4000","GENDER" : "M","PHONE_NO" : "0106851530","E_MAIL" : "Evelyn@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19880623"},{"ORG_NAME" : "Cameron","ORG_CODE" : "JP101","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "9000","GENDER" : "M","PHONE_NO" : "0104293599","E_MAIL" : "Cameron@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19871015"},{"ORG_NAME" : "Duncan","ORG_CODE" : "JP102","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "6000","GENDER" : "M","PHONE_NO" : "0107726763","E_MAIL" : "Duncan@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19980502"},{"ORG_NAME" : "September","ORG_CODE" : "JP103","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "3000","GENDER" : "M","PHONE_NO" : "0107314011","E_MAIL" : "September@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Daquan","ORG_CODE" : "JP104","LEVEL" : "4","POSITION" : "Officer","SALARY" : "6000","GENDER" : "W","PHONE_NO" : "0104316461","E_MAIL" : "Daquan@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Channing","ORG_CODE" : "JP105","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "8000","GENDER" : "M","PHONE_NO" : "0102320795","E_MAIL" : "Channing@nexacro.com","MARRIED" : "0"},{"ORG_NAME" : "Sales Team","ORG_CODE" : "JP12","LEVEL" : "3","POSITION" : "Officer","SALARY" : "4000","GENDER" : "M","PHONE_NO" : "0107642474","E_MAIL" : "Lenore@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19890505"},{"ORG_NAME" : "Curran","ORG_CODE" : "JP106","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "1000","GENDER" : "M","PHONE_NO" : "0106348086","E_MAIL" : "Curran@nexacro.com","MARRIED" : "0","WEDD_DAY" : "20140720"},{"ORG_NAME" : "Idona","ORG_CODE" : "JP107","LEVEL" : "4","POSITION" : "Department Manager","SALARY" : "8000","GENDER" : "M","PHONE_NO" : "0101251107","E_MAIL" : "Idona@nexacro.com","MARRIED" : "0","WEDD_DAY" : "20150531"},{"ORG_NAME" : "Sopoline","ORG_CODE" : "JP108","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "6000","GENDER" : "W","PHONE_NO" : "0104457429","E_MAIL" : "Sopoline@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19880505"},{"ORG_NAME" : "Cedric","ORG_CODE" : "JP109","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "7000","GENDER" : "W","PHONE_NO" : "0109825316","E_MAIL" : "Cedric@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19861022"},{"ORG_NAME" : "Lyle","ORG_CODE" : "JP110","LEVEL" : "4","POSITION" : "Supervisor","SALARY" : "1000","GENDER" : "M","PHONE_NO" : "0103173402","E_MAIL" : "Lyle@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19971030"},{"ORG_NAME" : "Marketing Team","ORG_CODE" : "JP13","LEVEL" : "3"},{"ORG_NAME" : "Adam","ORG_CODE" : "JP111","LEVEL" : "4","POSITION" : "Officer","SALARY" : "9000","GENDER" : "W","PHONE_NO" : "0104643738","E_MAIL" : "Adam@nexacro.com","MARRIED" : "0","WEDD_DAY" : "19971116"},{"ORG_NAME" : "Hyatt","ORG_CODE" : "JP112","LEVEL" : "4","POSITION" : "Department Manager","SALARY" : "2000","GENDER" : "W","PHONE_NO" : "0102989094","E_MAIL" : "Hyatt@nexacro.com","MARRIED" : "1","WEDD_DAY" : "19910519"},{"ORG_NAME" : "Melanie","ORG_CODE" : "JP113","LEVEL" : "4","POSITION" : "Officer","SALARY" : "3000","GENDER" : "W","PHONE_NO" : "0107956572","E_MAIL" : "Melanie@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20050203"},{"ORG_NAME" : "Isaiah","ORG_CODE" : "JP114","LEVEL" : "4","POSITION" : "Assistant Manager","SALARY" : "5000","GENDER" : "W","PHONE_NO" : "0107903476","E_MAIL" : "Isaiah@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20130416"},{"ORG_NAME" : "Dakota","ORG_CODE" : "JP115","LEVEL" : "4","POSITION" : "Officer","SALARY" : "4000","GENDER" : "M","PHONE_NO" : "0108938528","E_MAIL" : "Dakota@nexacro.com","MARRIED" : "1","WEDD_DAY" : "20050407"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset3", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "POS_CODE","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "BONUS","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"},{"id" : "E_MAIL","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "IMG_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "K10","EMP_NAME" : "John ","EMP_ID" : "KR010","POS_CODE" : "10","HIRE_DATE" : "20120304","SALARY" : "6000","BONUS" : "300","GENDER" : "M","MARRIED" : "1","E_MAIL" : "John@nexacro.com","IMG_URL" : "Exe::img_emp10.png","PHONE_NO" : "0104293599"},{"DEPT_CODE" : "K10","EMP_NAME" : "Jackson","EMP_ID" : "KR020","POS_CODE" : "10","HIRE_DATE" : "20160602","SALARY" : "6000","BONUS" : "200","GENDER" : "M","MARRIED" : "1","E_MAIL" : "Jackson@nexacro.com","IMG_URL" : "Exe::img_emp11.png","PHONE_NO" : "0107726763"},{"DEPT_CODE" : "K10","EMP_NAME" : "Adam","EMP_ID" : "KR030","POS_CODE" : "20","HIRE_DATE" : "20030805","SALARY" : "3000","BONUS" : "50","GENDER" : "M","MARRIED" : "0","E_MAIL" : "Adamr@nexacro.com","IMG_URL" : "Exe::img_emp12.png","PHONE_NO" : "0107314011"},{"DEPT_CODE" : "K10","EMP_NAME" : "Melon","EMP_ID" : "KR040","POS_CODE" : "30","HIRE_DATE" : "20071001","SALARY" : "9000","BONUS" : "1000","GENDER" : "W","MARRIED" : "0","E_MAIL" : "Melon@nexacro.com","IMG_URL" : "Exe::img_emp13.png","PHONE_NO" : "0109086335"},{"DEPT_CODE" : "K10","EMP_NAME" : "Kate ","EMP_ID" : "KR050","POS_CODE" : "10","HIRE_DATE" : "20131120","SALARY" : "8000","BONUS" : "200","GENDER" : "M","MARRIED" : "0","E_MAIL" : "Kate@nexacro.com","IMG_URL" : "Exe::img_emp14.png","PHONE_NO" : "0102320795"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kein ","EMP_ID" : "KR110","POS_CODE" : "20","HIRE_DATE" : "20180201","SALARY" : "1000","BONUS" : "100","GENDER" : "M","MARRIED" : "1","E_MAIL" : "Kein@nexacro.com","IMG_URL" : "Exe::img_emp15.png","PHONE_NO" : "0106348086"},{"DEPT_CODE" : "K20","EMP_NAME" : "Ivy","EMP_ID" : "KR120","POS_CODE" : "20","HIRE_DATE" : "20171020","SALARY" : "9000","BONUS" : "300","GENDER" : "W","MARRIED" : "0","E_MAIL" : "Ivy@nexacro.com","IMG_URL" : "Exe::img_emp16.png","PHONE_NO" : "0101251107"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kara","EMP_ID" : "KR130","POS_CODE" : "30","HIRE_DATE" : "20130102","GENDER" : "W","MARRIED" : "1","E_MAIL" : "Kara@nexacro.com","IMG_URL" : "Exe::img_emp17.png","PHONE_NO" : "0104457429"},{"DEPT_CODE" : "K20","EMP_NAME" : "Twice","EMP_ID" : "KR140","POS_CODE" : "20","HIRE_DATE" : "20101109","GENDER" : "W","MARRIED" : "1","E_MAIL" : "Twice@nexacro.com","IMG_URL" : "Exe::img_emp18.png","PHONE_NO" : "0109825316"},{"DEPT_CODE" : "K30","EMP_NAME" : "Bts","EMP_ID" : "KR210","POS_CODE" : "10","HIRE_DATE" : "20091021","SALARY" : "1000","BONUS" : "500","GENDER" : "M","MARRIED" : "0","E_MAIL" : "Bts@nexacro.com","IMG_URL" : "Exe::img_emp19.png","PHONE_NO" : "0103173402"},{"DEPT_CODE" : "K30","EMP_NAME" : "Andrew ","EMP_ID" : "KR220","POS_CODE" : "20","HIRE_DATE" : "20110928","SALARY" : "8000","BONUS" : "30","GENDER" : "M","MARRIED" : "0","E_MAIL" : "Andrew@nexacro.com","IMG_URL" : "Exe::img_emp20.png","PHONE_NO" : "0104643738"},{"DEPT_CODE" : "K30","EMP_NAME" : "Belle","EMP_ID" : "KR230","POS_CODE" : "20","HIRE_DATE" : "20161120","SALARY" : "6000","BONUS" : "50","GENDER" : "W","MARRIED" : "1","E_MAIL" : "Belle@nexacro.com","IMG_URL" : "Exe::img_emp14.png","PHONE_NO" : "0102989094"},{"DEPT_CODE" : "K30","EMP_NAME" : "Elsa","EMP_ID" : "KR240","POS_CODE" : "30","HIRE_DATE" : "20110508","SALARY" : "7000","BONUS" : "100","GENDER" : "W","MARRIED" : "1","E_MAIL" : "Ann@nexacro.com","IMG_URL" : "Exe::img_emp10.png","PHONE_NO" : "0107956572"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"},{"id" : "CORP_CODE","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "K10","DEPT_NAME" : "Education(KR)","CORP_CODE" : "K"},{"DEPT_CODE" : "K20","DEPT_NAME" : "Marketing(KR)","CORP_CODE" : "K"},{"DEPT_CODE" : "K30","DEPT_NAME" : "Sales(KR)","CORP_CODE" : "K"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset5", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CORP","type" : "STRING","size" : "256"},{"id" : "DEPT","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"},{"id" : "SALARY","type" : "INT","size" : "256"},{"id" : "BONUS","type" : "INT","size" : "256"}]},"Rows" : [{"DEPT" : "Education","NAME" : "John ","ID" : "KR101","SALARY" : "6000","BONUS" : "300","CORP" : "Korea Corp."},{"DEPT" : "Education","NAME" : "Jackson","ID" : "KR102","SALARY" : "6000","BONUS" : "200","CORP" : "Korea Corp."},{"DEPT" : "Education","NAME" : "Adam","ID" : "KR103","SALARY" : "3000","BONUS" : "50","CORP" : "Korea Corp."},{"DEPT" : "Education","NAME" : "Melon","ID" : "KR104","SALARY" : "9000","BONUS" : "1000","CORP" : "Korea Corp."},{"DEPT" : "Education","NAME" : "Kate ","ID" : "KR105","SALARY" : "8000","BONUS" : "200","CORP" : "Korea Corp."},{"DEPT" : "Sales","NAME" : "Bts","ID" : "KR106","SALARY" : "1000","BONUS" : "500","CORP" : "Korea Corp."},{"DEPT" : "Sales","NAME" : "Andrew ","ID" : "KR107","SALARY" : "8000","BONUS" : "30","CORP" : "Korea Corp."},{"DEPT" : "Sales","NAME" : "Belle","ID" : "KR108","SALARY" : "6000","BONUS" : "50","CORP" : "Korea Corp."},{"DEPT" : "Sales","NAME" : "Elsa","ID" : "KR109","SALARY" : "7000","BONUS" : "100","CORP" : "Korea Corp."},{"DEPT" : "Marketing","NAME" : "Kein ","ID" : "KR110","SALARY" : "1000","BONUS" : "100","CORP" : "Korea Corp."},{"DEPT" : "Marketing","NAME" : "Ivy","ID" : "KR111","SALARY" : "9000","BONUS" : "300","CORP" : "Korea Corp."},{"DEPT" : "Marketing","NAME" : "Kara","ID" : "KR112","SALARY" : "","BONUS" : "","CORP" : "Korea Corp."},{"DEPT" : "Marketing","NAME" : "Twice","ID" : "KR113","SALARY" : "","BONUS" : "","CORP" : "Korea Corp."},{"CORP" : "Japen Corp.","DEPT" : "Education","NAME" : "John ","ID" : "KR101","SALARY" : "6000","BONUS" : "300"},{"CORP" : "Japen Corp.","DEPT" : "Education","NAME" : "Jackson","ID" : "KR102","SALARY" : "6000","BONUS" : "200"},{"CORP" : "Japen Corp.","DEPT" : "Education","NAME" : "Kate ","ID" : "KR105","SALARY" : "8000","BONUS" : "200"},{"CORP" : "Japen Corp.","DEPT" : "Sales","NAME" : "Bts","ID" : "KR106","SALARY" : "1000","BONUS" : "500"},{"CORP" : "Japen Corp.","DEPT" : "Sales","NAME" : "Andrew ","ID" : "KR107","SALARY" : "8000","BONUS" : "30"},{"CORP" : "Japen Corp.","DEPT" : "Sales","NAME" : "Belle","ID" : "KR108","SALARY" : "6000","BONUS" : "50"},{"CORP" : "Japen Corp.","DEPT" : "Sales","NAME" : "Elsa","ID" : "KR109","SALARY" : "7000","BONUS" : "100"},{"CORP" : "Japen Corp.","DEPT" : "Marketing","NAME" : "Kein ","ID" : "KR110","SALARY" : "1000","BONUS" : "100"},{"CORP" : "Japen Corp.","DEPT" : "Marketing","NAME" : "Ivy","ID" : "KR111","SALARY" : "9000","BONUS" : "300"},{"CORP" : "Japen Corp.","DEPT" : "Marketing","NAME" : "Twice","ID" : "KR113","SALARY" : "4000","BONUS" : "200"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset6", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"}]},"Rows" : [{"DEPT_CODE" : "K10","EMP_NAME" : "John ","EMP_ID" : "KR010","HIRE_DATE" : "20120304","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Jackson","EMP_ID" : "KR020","HIRE_DATE" : "20160602","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Adam","EMP_ID" : "KR030","HIRE_DATE" : "20030805","SALARY" : "3000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K10","EMP_NAME" : "Melon","EMP_ID" : "KR040","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kein ","EMP_ID" : "KR110","HIRE_DATE" : "20180201","SALARY" : "1000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kara","EMP_ID" : "KR120","HIRE_DATE" : "20171020","SALARY" : "","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Twice","EMP_ID" : "KR130","HIRE_DATE" : "20130102","GENDER" : "W","MARRIED" : "1"},{"DEPT_CODE" : "K30","EMP_NAME" : "Bts","EMP_ID" : "KR210","HIRE_DATE" : "20091021","SALARY" : "1000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Andrew ","EMP_ID" : "KR220","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Belle","EMP_ID" : "KR230","HIRE_DATE" : "20161120","SALARY" : "6000","GENDER" : "W","MARRIED" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset7", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "MARRIED","type" : "STRING","size" : "10"}]},"Rows" : [{"DEPT_CODE" : "K10","EMP_NAME" : "John ","EMP_ID" : "KR010","HIRE_DATE" : "20120304","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Jackson","EMP_ID" : "KR020","HIRE_DATE" : "20160602","SALARY" : "6000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K10","EMP_NAME" : "Adam","EMP_ID" : "KR030","HIRE_DATE" : "20030805","SALARY" : "3000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K10","EMP_NAME" : "Melon","EMP_ID" : "KR040","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kein ","EMP_ID" : "KR110","HIRE_DATE" : "20180201","SALARY" : "1000","GENDER" : "M","MARRIED" : "1"},{"DEPT_CODE" : "K20","EMP_NAME" : "Kara","EMP_ID" : "KR120","HIRE_DATE" : "20171020","SALARY" : "","GENDER" : "W","MARRIED" : "0"},{"DEPT_CODE" : "K20","EMP_NAME" : "Twice","EMP_ID" : "KR130","HIRE_DATE" : "20130102","GENDER" : "W","MARRIED" : "1"},{"DEPT_CODE" : "K30","EMP_NAME" : "Bts","EMP_ID" : "KR210","HIRE_DATE" : "20091021","SALARY" : "1000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Andrew ","EMP_ID" : "KR220","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "0"},{"DEPT_CODE" : "K30","EMP_NAME" : "Belle","EMP_ID" : "KR230","HIRE_DATE" : "20161120","SALARY" : "6000","GENDER" : "W","MARRIED" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static07","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Exe 1 - Grid1");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1","10","70","490","180",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"121\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3","10","70","980","220",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset3");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"139\"/><Column size=\"155\"/><Column size=\"99\"/><Column size=\"143\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"135\"/><Column size=\"192\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Dept\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"Date\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" text=\"Bonus\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Married\"/><Cell col=\"9\" text=\"Phone No\"/><Cell col=\"10\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:EMP_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:BONUS\"/><Cell col=\"7\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MARRIED\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:PHONE_NO\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid1_1","510","70","480","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"125\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" rowspan=\"2\" text=\"MARRIED\"/><Cell row=\"1\" text=\"NAME\"/><Cell row=\"1\" col=\"1\" text=\"HIRE DATE\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" text=\"bind:EMP_NAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","510","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Exe 1 - Grid1_1");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_1","10","260","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe1_3","10","300","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1_3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","363","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" Exe 2 - Grid2");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid2","10","393",null,"151","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"121\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_1","10","554","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2_1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe2_2","10","594","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2_2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Exe 3 - Grid3");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_1","10","300","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("3_1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_2","10","340","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3_2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_3","10","380","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("3_3");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_4","510","300","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3_4");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_05","510","340","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("3_5");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe3_6","510","380","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("3_6");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3_1","10","420","480","220",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("Dataset3");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"/><Format id=\"format00\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid3_2","510","420","480","220",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("Dataset3");
            obj.set_positionstep("1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Exe 4 - Grid4");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid4","10","70",null,null,"10","60",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("Dataset4");
            obj.set_positionstep("2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"251\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"131\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ORG_NAME\"/><Cell col=\"1\" text=\"POSITION\"/><Cell col=\"2\" text=\"GENDER\"/><Cell col=\"3\" text=\"PHONE_NO\"/><Cell col=\"4\" text=\"E_MAIL\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_NAME\"/><Cell col=\"1\" text=\"bind:POSITION\"/><Cell col=\"2\" text=\"bind:GENDER\"/><Cell col=\"3\" text=\"bind:PHONE_NO\"/><Cell col=\"4\" text=\"bind:E_MAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Exe 5 - Grid5");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_1","10","524","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("5_1");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_2","10","564","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("5_2");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid5","10","64",null,"450","10",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("3");
            obj.set_binddataset("Dataset5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"162\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"118\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CORP\"/><Cell col=\"1\" text=\"DEPT\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"SALARY\"/><Cell col=\"5\" text=\"BONUS\"/><Cell col=\"6\" text=\"getRowLevel\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.getRowLevel(currow) == 2 ? CORP + &quot; Sum&quot; : CORP)\" suppress=\"1\"/><Cell col=\"1\" text=\"expr:(dataset.getRowLevel(currow) == 0 ? DEPT : (dataset.getRowLevel(currow) == 1 ? DEPT + &quot; Sum&quot; : &quot;&quot;))\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:ID\"/><Cell col=\"4\" text=\"bind:SALARY\"/><Cell col=\"5\" text=\"bind:BONUS\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe5_3","10","604","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("5_3");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","80","260","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Grid1과 Grid1_1의 Body 밴드 Column과 Cell의 개수. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","80","300","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Cell에 바인드 되어있는 Dataset 컬럼 ID 구하기. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","80","554","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Dataset2에 “COL_CHK” 컬럼을 추가하고 초기값을 “0”으로 지정.  \r\nGrid2의 맨 앞쪽에 빈 컬럼을 추가하고 생성한 Dataset컬럼(COL_CHK) 바인딩 ");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","80","594","566","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("해당 컬럼의 Head와 Body Cell을 “checkbox” 형태로 표현. ");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","80","300","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("컬럼 이동, 사이즈 변경 가능하게 속성 변경. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","80","340","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("3번째 컬럼(Name)까지 고정, 3번째 Row까지 고정 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","80","380","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("컬럼고정, Row고정 해제. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","580","300","409","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("3번째 컬럼(Name) 사이즈 100px로 지정, 6번째 컬럼(Salary) 숨기기 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","580","340","409","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("컬럼 숨기기 취소 ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","580","380","409","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("원본 그리드 포맷과 현재 변경한 그리드 포맷 비교. ");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","80","524","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("법인(CORP), 부서(DEPT)별 소계 표현하기.");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","80","564","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Summary 밴드 추가하고 SALARY 컬럼 총 합계 표현. ");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","80","604","380","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("소계와 Summary 밴드를 상단에 표현하기.");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","9","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Exe 6 - Grid6");
            obj.set_cssclass("sta_WF_GuideTitle2");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_1","12","474","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("6_1");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_2","12","514","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("6_2");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_3","12","554","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("6_3");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid6","10","70",null,"354","10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_binddataset("Dataset6");
            obj.set_positionstep("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"121\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SALARY\"/><Cell col=\"1\" text=\"GENDER\"/><Cell col=\"2\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY\"/><Cell col=\"1\" text=\"expr:GENDER == &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"2\" text=\"bind:MARRIED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_1","80","474","520","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Grid 에 스크롤 없이 전체 Column이 표시되도록 Column의 너비를 자동조절.");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_2","80","514","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("Grid 에서 선택되는 단위 설정.");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_3","80","554","520","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Grid 에서 세로 스크롤 시 팝업으로 표시되는 Row 의 위치를 설정.");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe6_4","12","594","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("6_4");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static6_4","80","594","520","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Edit 컴포넌트의 데이터를 바인딩 된 DataSet 에 즉시 반영시키기");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Edit("editInput","13","434","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio06","295","514","410","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_positionstep("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio06_innerdataset = new nexacro.NormalDataset("Radio06_innerdataset", obj);
            Radio06_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "row","datacolumn" : "row"},{"codecolumn" : "multirow","datacolumn" : "multirow"},{"codecolumn" : "cell","datacolumn" : "cell"},{"codecolumn" : "area","datacolumn" : "area"},{"codecolumn" : "multiarea","datacolumn" : "multiarea"}]});
            obj.set_innerdataset(Radio06_innerdataset);
            obj.set_text("row");
            obj.set_value("row");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"434","200","30","10",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("6_3을 위한 데이터 생성");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","7","40","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Exe 7 - Grid7");
            obj.set_cssclass("sta_WF_GuideTitle3");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid7","10","70","970","354",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_binddataset("Dataset7");
            obj.set_positionstep("5");
            obj.set_autofittype("col");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"108\"/><Column size=\"174\"/><Column size=\"121\"/><Column size=\"94\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPT\"/><Cell col=\"3\" text=\"HIRE DATE\"/><Cell col=\"4\" text=\"MARRIED\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"3\" text=\"bind:HIRE_DATE\" edittype=\"date\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"80\"/><Column size=\"108\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe7_1","10","434","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("7_1");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7_1","80","434","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Grid 편집모드 활성화 방법");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe7_2","10","474","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("7_2");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7_2","80","474","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Grid에 다양한 포멧을 표현하기");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe7_3","10","514","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("7_3");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static7_2_00","80","514","240","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Grid에 변경 전 포멧으로 표현하기");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","10","10","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Exercise - Grid");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_stepcount("6");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","editInput","value","Dataset6","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Exe_Chap2_Grid.xfdl", function() {
        // Exercise 1 ================================================================
        // Exe 1-1
        this.btn_Exe1_1_onclick = function(obj,e)
        {
        	var nColCnt1  = this.Grid1.getFormatColCount();
        	var nCellCnt1 = this.Grid1.getCellCount("body");

        	var nColCnt1_1  = this.Grid1_1.getFormatColCount();
        	var nCellCnt1_1 = this.Grid1_1.getCellCount("body");

        	trace("Grid1 Col=" + nColCnt1 + " : Cell=" + nCellCnt1);
        	trace("Grid1_1 Col=" + nColCnt1_1 + " : Cell=" + nCellCnt1_1);
        };

        // Exe 1-2
        this.Grid_oncellclick = function(obj,e)
        {
        	trace(" e.col=" + e.col + " : e.cell=" + e.cell);
        };

        // Exe 1-3
        this.btn_Exe1_3_onclick = function(obj,e)
        {
        	var nCellCnt = this.Grid1.getCellCount("body");
        	for(var i=0; i<nCellCnt; i++)
        	{
        		var sColID = this.Grid1.getCellProperty("body", i, "text");
        		trace(sColID);
        		var arrCol = sColID.split(":");
        		trace("ColumnID=" + arrCol[1]);
        	}
        };

        // Exe Sort
        this.Grid1_onheadclick = function(obj,e)
        {

        };

        // Exercise 2 ================================================================
        // Exe 2-1
        this.btn_Exe2_1_onclick = function(obj,e)
        {
            this.Dataset2.enableevent=false;
        	this.Dataset2.addColumn("COL_CHK", "STRING");

        	for(var i=0; i<this.Dataset2.rowcount; i++){
        		this.Dataset2.setColumn(i, "COL_CHK", "0");
        	}
            this.Dataset2.enableevent=true;

        	this.Grid2.insertContentsCol("body", 0);
        	this.Grid2.setCellProperty("body", 0, "text", "bind:COL_CHK");
        };

        // Exe 2-2
        this.btn_Exe2_2_onclick = function(obj,e)
        {
        	this.Grid2.setCellProperty("body", 0, "displaytype", "checkboxcontrol");
        	this.Grid2.setCellProperty("body", 0, "edittype"   , "checkbox");

        	this.Grid2.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.Grid2.setCellProperty("head", 0, "edittype"   , "checkbox");
        };

        // Exe 2 Check All
        this.Grid2_onheadclick = function(obj,e)
        {
        	if(e.cell == 0){

        	}

        };

        // Exe 2 Check One
        this.Dataset2_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "COL_CHK"){

        	}
        };

        // Exercise 3 ================================================================
        // Exe 3-1
        this.btn_Exe3_1_onclick = function(obj,e)
        {
        	this.Grid3.cellmovingtype="col";
        	this.Grid3.cellsizingtype="col";
        };

        // Exe 3-2
        this.btn_Exe3_2_onclick = function(obj,e)
        {
        	//Column Fix
        	this.Grid3.setFormatColProperty(2, "band", "left");

        	//Row Fix
        	this.Grid3.setFixedRow(2);
        };

        // Exe 3-3
        this.btn_Exe3_3_onclick = function(obj,e)
        {
        	for(var i=0; i<this.Grid3.getFormatColCount(); i++){
        		this.Grid3.setFormatColProperty(i, "band", "body");
        	}

        	this.Grid3.setFixedRow(-1);
        };

        // Exe 3-4
        this.btn_Exe3_4_onclick = function(obj,e)
        {
        	this.Grid3.setFormatColProperty(2, "size", 100);
        	this.Grid3.setFormatColProperty(5, "size", 0);
        };

        // Exe 3-5
        this.btn_Exe3_5_onclick = function(obj,e)
        {
        	this.Grid3.setFormatColProperty(5, "size", 80);
        };


        // Exe 3 Hide
        this.Grid3.arrHide = [];
        this.Grid3_oncelldblclick = function(obj,e)
        {
        	// getRealColSize()
        };

        // Exe 3 Hide Cancel
        this.btn_Cancel_onclick = function(obj,e)
        {

        };

        // Exe 3-6
        this.btn_Exe3_6_onclick = function(obj,e)
        {
        	var sCurFormat = this.Grid3.getCurFormatString();
        	this.Grid3_1.formats = "<Formats>" + sCurFormat + "</Formats>";

         	var sOrgFormat = this.Grid3.getCurFormatString(true);
        	this.Grid3_2.formats = "<Formats>" + sOrgFormat + "</Formats>";
        };

        // Exercise 4 ================================================================
        // Exe 4-2
        this.Grid4_oncellclick = function(obj,e)
        {
        	var nGridRow = this.Grid4.getTreeRow(e.row);
        	alert(nGridRow);
        	var nStatus  = this.Grid4.getTreeStatus(nGridRow);
        	alert(nStatus+"----nStatus");
        	trace("e.row=" + e.row + " : TreeRow=" + nGridRow + " : Status=" + nStatus);

        	if(nStatus == 3) return;
        	nStatus = (nStatus == 0 ? 1 : 0);

        	this.Grid4.setTreeStatus(nGridRow, nStatus);
        };


        // Exercise 5 ================================================================
        // Exe 5-1
        this.btn_Exe5_1_onclick = function(obj,e)
        {
        	this.Dataset5.keystring="G:-CORP,+DEPT";
        	var sExpr = "";
        	var sExpr = "expr:(dataset.getRowLevel(currow) == 2 ? CORP+' Sum' : CORP)";
        	this.Grid5.setCellProperty("body", 0, "text", sExpr);
        	sExpr = "expr:(dataset.getRowLevel(currow) == 0 ? DEPT : (dataset.getRowLevel(currow) == 1 ? DEPT + ' Sum' : ''))";
        	this.Grid5.setCellProperty("body", 1, "text", sExpr);
        };

        // Exe 5-2
        this.btn_Exe5_2_onclick = function(obj,e)
        {
        	this.Grid5.appendContentsRow("summary");
        	this.Grid5.setCellProperty("summary", 4, "text", this.Dataset5.getSum("SALARY"));
        };

        // Exe 5-3
        this.btn_Exe5_3_onclick = function(obj,e)
        {
        	this.Dataset5.reversesubsum = true;
        	this.Grid5.summarytype = "top";
        };

        this.fn_level = function(pRow)
        {
        	var nMaxLevel = 2;
        	var nLevel = nMaxLevel-pRow;
        	return nLevel;
        }



        this.CONST_NONE_MARK = "";
        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.fn_sort = function (obj, e)
        {
            if(obj.getCellProperty("head", e.cell, "displaytype") == "checkboxcontrol") return;
            var objDs     = obj.getBindDataset();
        	var sColId    = obj.getCellProperty("body", e.cell, "text").split(":");
        	var sHeadText = "";

        	for(var i = 0; i<obj.getCellCount("head"); i++)
        	{
        		sHeadText = obj.getCellText(-1, i) ;
        		if(i == e.cell){
        			if (sHeadText.substr(sHeadText.length-1) == this.CONST_ASC_MARK) {
        				obj.setCellProperty("head", i, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_DESC_MARK);
        				objDs.keystring="S:-" + sColId[1];
        			}
        			else if (sHeadText.substr(sHeadText.length-1) == this.CONST_DESC_MARK) {
        				obj.setCellProperty("head", i, "text", sHeadText.substr(0, sHeadText.length - 1) + this.CONST_ASC_MARK);
        				objDs.keystring="S:+" + sColId[1];
        			}
        			else {
        				obj.setCellProperty("head", i, "text", sHeadText + this.CONST_ASC_MARK);
        				objDs.keystring="S:+" + sColId[1];
        			}
        		}
        		else {
        			if(sHeadText != null & sHeadText != ""){
        				if (sHeadText.substr(sHeadText.length - 1) == this.CONST_ASC_MARK || sHeadText.substr(sHeadText.length - 1) == this.CONST_DESC_MARK)
        				{
        					obj.setCellProperty("head", i, "text", sHeadText.substr(0, sHeadText.length - 1));
        				}
        			}
        		}
        	}
        }


        // * 기타 Grid2에서 예제 시연
        // autoenter 속성이 select 인 경우 한번에 그리드에서 콤보와 캘린더를 표현하는 방법
        //
        //this.Grid2_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        //{
        //	if(e.col == 2){
        //		this.Grid2.dropdownCombo();
        //	}else if(e.col == 3){
        //		this.Grid2.dropdownCalendar();
        //	}
        //};
        //
        // autofittype - 전체 Column이 표시되도록 Column의 너비를 자동조절할지 설정하는 속성입니다.
        // grid format 변경 - Grid2 안에 formatid 를 복사하여 생성 할 수 있습니다.
        // selecttype - Grid 에서 선택되는 단위를 설정하는 속성입니다.
        // autosizingtype - Grid 에 데이터가 모두 표시되도록 Row, Column 의 크기를 자동조절 할 지 설정하는 속성입니다.
        // fastvscrolltype = "centerdisplay" - 속성 변경 후 실행화면의 그리드 스크롤 속도 확인
        //
        // this.Grid00.updateToDataset(); // 편집중인 값을 Dataset에 즉시 반영
        //
        // this.Grid2_oninput = function(obj:nexacro.Grid,e:nexacro.InputEventInfo)
        // {
        // 	obj.updateToDataset();
        // };




        // Exe 6-1
        this.btn_Exe6_1_onclick = function(obj,e)
        {
        	this.Grid6.autofittype="col";
        };

        this.Radio06_onitemchanged = function(obj,e)
        {
        	this.Grid6.selecttype=this.Radio06.value;
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset6.enableevent=false;
        	for(var i=1;i<10000;i++)
        	{
        		var toRow = this.Dataset6.addRow();
        		this.Dataset6.copyRow(toRow,this.Dataset6, 0);
        		this.Dataset6.setColumn(toRow,"EMP_NAME",this.Dataset6.getColumn(0,"EMP_NAME") + i);
        	}
        	this.Dataset6.enableevent=true;
        };

        this.btn_Exe6_3_onclick = function(obj,e)
        {
        	this.Grid6.fastvscrolltype="centerdisplay";
        };


        this.btn_Exe6_4_onclick = function(obj,e)
        {
        	this.editInput.addEventHandler("oninput", this.fn_oninput, this);
        };

        this.fn_oninput = function(obj,e)
        {
        	obj.updateToDataset();
        };



        this.btn_Exe7_1_onclick = function(obj,e)
        {
        	this.Grid7.autoenter="select";
        	/*
        	none 	: Cell 의 선택으로 편집모드용 컨트롤이 자동으로 활성화 되지 않습니다.
        	select 	: 편집모드용 컨트롤이 자동으로 활성화
        	key 	:  Cell 의 선택으로 편집모드용 컨트롤이 자동으로 활성화 되지 않습니다.
        	*/
        };


        this.Grid7_oncellclick = function(obj,e)
        {
        	if(e.col == 2)
        	{
        		this.Grid7.dropdownCombo();
        	} else if(e.col == 3)
        	{
        		this.Grid7.dropdownCalendar();
        	}
        };

        this.btn_Exe7_2_onclick = function(obj,e)
        {
        	this.Grid7.formatid="default_00";
        };

        this.btn_Exe7_3_onclick = function(obj,e)
        {
        	this.Grid7.formatid="default";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid1.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.Grid1.addEventHandler("onheadclick",this.Grid1_onheadclick,this);
            this.Grid3.addEventHandler("oncelldblclick",this.Grid3_oncelldblclick,this);
            this.Grid1_1.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.btn_Exe1_1.addEventHandler("onclick",this.btn_Exe1_1_onclick,this);
            this.btn_Exe1_3.addEventHandler("onclick",this.btn_Exe1_3_onclick,this);
            this.Grid2.addEventHandler("onheadclick",this.Grid2_onheadclick,this);
            this.btn_Exe2_1.addEventHandler("onclick",this.btn_Exe2_1_onclick,this);
            this.btn_Exe2_2.addEventHandler("onclick",this.btn_Exe2_2_onclick,this);
            this.btn_Exe3_1.addEventHandler("onclick",this.btn_Exe3_1_onclick,this);
            this.btn_Exe3_2.addEventHandler("onclick",this.btn_Exe3_2_onclick,this);
            this.btn_Exe3_3.addEventHandler("onclick",this.btn_Exe3_3_onclick,this);
            this.btn_Exe3_4.addEventHandler("onclick",this.btn_Exe3_4_onclick,this);
            this.btn_Exe3_05.addEventHandler("onclick",this.btn_Exe3_5_onclick,this);
            this.btn_Exe3_6.addEventHandler("onclick",this.btn_Exe3_6_onclick,this);
            this.Grid4.addEventHandler("oncelldblclick",this.Grid4_oncellclick,this);
            this.btn_Exe5_1.addEventHandler("onclick",this.btn_Exe5_1_onclick,this);
            this.btn_Exe5_2.addEventHandler("onclick",this.btn_Exe5_2_onclick,this);
            this.btn_Exe5_3.addEventHandler("onclick",this.btn_Exe5_3_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static12.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static14.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static15.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static16.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static20.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe6_1.addEventHandler("onclick",this.btn_Exe6_1_onclick,this);
            this.btn_Exe6_3.addEventHandler("onclick",this.btn_Exe6_3_onclick,this);
            this.Static6_1.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static6_2.addEventHandler("onclick",this.Static08_onclick,this);
            this.Static6_3.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe6_4.addEventHandler("onclick",this.btn_Exe6_4_onclick,this);
            this.Static6_4.addEventHandler("onclick",this.Static08_onclick,this);
            this.Radio06.addEventHandler("onitemchanged",this.Radio06_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid7.addEventHandler("oninput",this.Grid7_oninput,this);
            this.Grid7.addEventHandler("oncellclick",this.Grid7_oncellclick,this);
            this.btn_Exe7_1.addEventHandler("onclick",this.btn_Exe7_1_onclick,this);
            this.Static7_1.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe7_2.addEventHandler("onclick",this.btn_Exe7_2_onclick,this);
            this.Static7_2.addEventHandler("onclick",this.Static08_onclick,this);
            this.btn_Exe7_3.addEventHandler("onclick",this.btn_Exe7_3_onclick,this);
            this.Static7_2_00.addEventHandler("onclick",this.Static08_onclick,this);
            this.Dataset2.addEventHandler("cancolumnchange",this.Dataset2_cancolumnchange,this);
            this.Dataset2.addEventHandler("oncolumnchanged",this.Dataset2_oncolumnchanged,this);
            this.Dataset4.addEventHandler("oncolumnchanged",this.Dataset4_oncolumnchanged,this);
            this.Dataset6.addEventHandler("cancolumnchange",this.Dataset2_cancolumnchange,this);
            this.Dataset6.addEventHandler("oncolumnchanged",this.Dataset2_oncolumnchanged,this);
            this.Dataset7.addEventHandler("cancolumnchange",this.Dataset2_cancolumnchange,this);
            this.Dataset7.addEventHandler("oncolumnchanged",this.Dataset2_oncolumnchanged,this);
        };
        this.loadIncludeScript("Exe_Chap2_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
