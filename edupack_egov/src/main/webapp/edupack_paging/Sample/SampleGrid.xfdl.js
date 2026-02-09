(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleGrid");
            this.set_titletext("그리드 기능");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,3270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFindReplace", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckbox", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj.set_updatecontrol("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "256"},{"id" : "EMP_ID","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSort", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSortMultiheader", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRowfix", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColhide", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserheader", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "decoText","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "mask","type" : "STRING","size" : "256"},{"id" : "maskEdit","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"},{"id" : "textArea","type" : "STRING","size" : "256"},{"id" : "headTest1","type" : "STRING","size" : "256"},{"id" : "headTest12","type" : "STRING","size" : "256"},{"id" : "headTest13","type" : "STRING","size" : "256"},{"id" : "headTest14","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","decoText" : "<fs v='16'>TEST</fs>","editControl" : "test","mask" : "8508301","maskEdit" : "8508301","number" : "9999999999999","text" : "test","textArea" : "test","headTest1" : "aa","headTest12" : "aa","headTest13" : "aa","headTest14" : "aa"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","decoText" : "<fc v='red'>T</fc><fc v='orange'>E</fc><fc v='purple'>S</fc><fc v='green'>E</fc>","editControl" : "TEST","mask" : "8303301","maskEdit" : "8303301","number" : "8888888888","text" : "TEST","textArea" : "TEST","headTest1" : "bb","headTest12" : "aa","headTest13" : "bb","headTest14" : "aa"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","decoText" : "<ff v='굴림'>TEST</ff>","editControl" : "Test","mask" : "8902022","maskEdit" : "8902022","number" : "7777777777","text" : "Test","textArea" : "Test","headTest1" : "cc","headTest12" : "aa","headTest13" : "cc","headTest14" : "bb"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","decoText" : "<b v='true'>TE</b><b v='false'>ST</b>","editControl" : "test1","mask" : "9201012","maskEdit" : "9201012","number" : "88888888888","text" : "test1","textArea" : "test1","headTest1" : "dd","headTest12" : "bb","headTest13" : "aa","headTest14" : "bb"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","decoText" : "<i v='true'>TE</i><i v='false'>ST</i>","editControl" : "서울특별시","mask" : "8702022","maskEdit" : "8702022","number" : "9999999999","text" : "서울특별시","textArea" : "서울특별시gsdfdsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","headTest1" : "ee","headTest12" : "bbb","headTest13" : "bb","headTest14" : "bb"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","decoText" : "<u v='true'>TE</u><u v='false'>ST</u>","editControl" : "경기도","mask" : "8801012","maskEdit" : "8801012","number" : "8888888888","text" : "경기도","textArea" : "경기도","headTest1" : "ff","headTest12" : "bb","headTest13" : "cc","headTest14" : "bb"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","decoText" : "<s v='true'>TE</s><s v='false'>ST</s>","editControl" : "서울특별시","mask" : "9008301","maskEdit" : "9008301","number" : "4444444444","text" : "서울특별시","textArea" : "서울특별시","headTest1" : "gg","headTest12" : "cc","headTest13" : "aa","headTest14" : "cc"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","decoText" : "<fs v='16'>TEST</fs>","editControl" : "경기도","mask" : "9103301","maskEdit" : "9103301","number" : "5555555555","text" : "경기도","textArea" : "경기도","headTest1" : "hh","headTest12" : "ccc","headTest13" : "bb","headTest14" : "cc"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","decoText" : "<fc v='red'>T</fc><fc v='orange'>E</fc><fc v='purple'>S</fc><fc v='green'>E</fc>","editControl" : "경기도","mask" : "9205052","maskEdit" : "9205052","number" : "11111111111","text" : "경기도","textArea" : "경기도","headTest1" : "ii","headTest12" : "ccc","headTest13" : "cc","headTest14" : "cc"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","decoText" : "<ff v='굴림'>TEST</ff>","editControl" : "서울특별시","mask" : "9208302","maskEdit" : "9208302","number" : "2","text" : "서울특별시","textArea" : "서울특별시","headTest1" : "jj","headTest12" : "ddd","headTest13" : "aa","headTest14" : "dd"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","decoText" : "<b v='true'>TE</b><b v='false'>ST</b>","editControl" : "TEST","mask" : "8508301","maskEdit" : "8508301","number" : "222222222","text" : "TEST","textArea" : "TEST","headTest1" : "kk","headTest12" : "ddd","headTest13" : "bb","headTest14" : "dd"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","decoText" : "<i v='true'>TE</i><i v='false'>ST</i>","editControl" : "test","mask" : "8303301","maskEdit" : "8303301","number" : "2","text" : "test","textArea" : "test","headTest1" : "ll","headTest12" : "ddd","headTest13" : "cc","headTest14" : "dd"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","decoText" : "<u v='true'>TE</u><u v='false'>ST</u>","editControl" : "Test","mask" : "8902022","maskEdit" : "8902022","number" : "555555555","text" : "Test","textArea" : "Test","headTest1" : "nn","headTest12" : "eee","headTest13" : "aa","headTest14" : "ee"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","decoText" : "<fs v='16'>TEST</fs>","editControl" : "test","mask" : "9201012","maskEdit" : "9201012","number" : "233","text" : "test","textArea" : "test","headTest1" : "mm","headTest12" : "eee","headTest13" : "bb","headTest14" : "ee"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","decoText" : "<fc v='red'>T</fc><fc v='orange'>E</fc><fc v='purple'>S</fc><fc v='green'>E</fc>","editControl" : "test","mask" : "8702022","maskEdit" : "8702022","number" : "555555","text" : "test","textArea" : "test","headTest1" : "oo","headTest12" : "eee","headTest13" : "cc","headTest14" : "ee"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","decoText" : "<ff v='굴림'>TEST</ff>","editControl" : "TEST","mask" : "8801012","maskEdit" : "8801012","number" : "4444444","text" : "TEST","textArea" : "TEST","headTest1" : "pp","headTest12" : "eee","headTest13" : "cc","headTest14" : "ee"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","decoText" : "<b v='true'>TE</b><b v='false'>ST</b>","editControl" : "TEST","mask" : "9008301","maskEdit" : "9008301","number" : "1111111","text" : "TEST","textArea" : "TEST","headTest1" : "qq","headTest12" : "ee","headTest13" : "aa","headTest14" : "ee"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColfix", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "STRING","size" : "256"}]},"Rows" : [{"id" : " "}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaste", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05","510","1084","208","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("6) 열고정");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd07","520","Static05:0","480","195",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!filter,!initial");
            obj.set_scrollpixel("none");
            obj.set_binddataset("dsColfix");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"DEPTCODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIREDATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","20","60",null,"460","20",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("txt_WF_Desc");
            obj.set_value("그리드기능\n - 체크박스(checkbox), 순번(no), 상태(status), 정렬(sort), 행고정(rowfix), 열고정(colfix), 필터(filter), \n    찾기/바꾸기(replace), 컬럼숨기기/보이기(colhide), 엑셀내려받기(export), 엑셀올리기(import), \n    그리드개인화(personal), 초기화(initial), 유저헤더그리드(userheader) , 셀copy&paste(cellcopypaste) 기능이 제공된다.\n\n - 그리드에 아무것도 설정하지 않을 시,  [정렬, 행고정, 열고정, 필터, 초기화] 기능을 사용 할 수 있다.\n\n - 기본기능외 다른 기능을 추가 할 경우 그리드에 userproperties를 추가하여 사용한다\n    ※ 추가방법 :  그리드를 선택하고 프로퍼티창에서 마우스 우클릭 - add properties 를 선택하여 유저 프로퍼티를 추가 후 \n         사용할 기능을 콤마(,)로 구분하여 나열한다.\n          예] user property name : griduserproperty\n                 user property value : status,no,checkbox,colhide,personal\n\n - 기본 기능 중 사용하지 않을 기능 앞엔 느낌표(!)를 붙여 명시한다.\n    예] !rowfix,!sort\n\n  - 그리드 헤더와 로우가 매칭이 되지않는 복잡한 그리드의 경우 userheader 속성을 사용 하여 \n     필터, 찾기/바꾸기, 소트 등을 손쉽게 이용 할 수 있다.\n     단 각 헤더정보에 기능을 이용할 바인딩 정보가 매칭되어야 하고 현재 [calendarweekformat] 속성에 해당 기능이 매칭 되어 있다.\n\n  - 체크박스, 순번, 상태, 소트의 기능을 제외한 기능은 마우스 우클릭시 나오는 팝업메뉴를 띄워 제공한다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","txtDesc:10","178","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1) 체크박스");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","20","Static00:0","300","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCheckbox");
            obj.getSetter("griduserproperty").set("checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","330","txtDesc:10","168","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2) 순번");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd02","330","Static01:0","300","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsNo");
            obj.getSetter("griduserproperty").set("no,!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","640","txtDesc:10","168","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("3) 상태");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd03","640","Static02:0","300","180",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsStatus");
            obj.getSetter("griduserproperty").set("status,!sort,!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","890","540","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","913","540","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","grd01:20","228","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4) 정렬 (ctrl key= multisort)");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd04","20","Static03:0","490","254",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsSort");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HIRE DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd05","grd04:10","Static03:0","480","254",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsSortMultiheader");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!initial,!filter");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"DEPT CODE\"/><Cell row=\"1\" colspan=\"2\" text=\"HIRE DATE\"/><Cell row=\"1\" col=\"2\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EMP_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell row=\"1\" colspan=\"2\" text=\"bind:HIRE_DATE\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"bind:SALARY\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","grd04:20","208","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("5) 행고정");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd06","20","Static04:0","490","195",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsRowfix");
            obj.getSetter("griduserproperty").set("!sort,!colfix,!filter,!initial");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HIRE DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd11","20","1379","980","210",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("dsExcel");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("!rowfix,!colfix,!sort,!filter,export,import");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"123\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"192\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"DEPTCODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIREDATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","grd11:20","240","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("8) 그리드필터");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd08","20","Static06:0","980","210",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsFilter");
            obj.getSetter("griduserproperty").set("!sort,!rowfix,!initial,!colfix");
            obj.set_scrollpixel("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"123\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"192\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"DEPTCODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIREDATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","grd08:20","640","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("9) 기본기능 + 그리드찾기/바꾸기");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","20","Static07:0","980","210",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsFindReplace");
            obj.getSetter("griduserproperty").set("replace");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"80\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"123\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"192\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"DEPTCODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIREDATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"MARRIED\"/><Cell col=\"7\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:MARRIED\"/><Cell col=\"7\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","grd00:20","378","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10) 기본기능 + 그리드컬럼 숨기기/보이기 + 그리드개인화");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd09","20","Static08:0","980","190",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsColhide");
            obj.getSetter("griduserproperty").set("colhide,personal");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","grd09:20","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("11) cell copy and paste");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd12","20","Static11:0","410","301",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsCopy");
            obj.getSetter("griduserproperty").set("cellcopypaste");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HIRE DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","grd12:20","388","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("12) 복잡한 그리드(헤더와 바디가 매칭되지 않는 그리드)사용");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd10","20","Static09:0","980","457",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsUserheader");
            obj.set_autofittype("none");
            obj.getSetter("griduserproperty").set("replace,colhide,userheader");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"텍스트모드\" expandchar=\"comp.textmode\"/><Cell col=\"6\" rowspan=\"2\" text=\"달력\" expandchar=\"comp.calendar\"/><Cell col=\"7\" rowspan=\"2\" text=\"체크박스\" expandchar=\"comp.check\"/><Cell col=\"8\" rowspan=\"2\" text=\"콤보\" expandchar=\"comp.combo\"/><Cell col=\"9\" rowspan=\"4\" colspan=\"2\" text=\"테스트\" expandchar=\"comp.test\"/><Cell row=\"1\" colspan=\"4\" text=\"텍스트\" expandchar=\"comp.text\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"숫자\" expandchar=\"comp.number\"/><Cell row=\"2\" text=\"normal\" calendarweekformat=\"bind:normal\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"text\" calendarweekformat=\"bind:text\"/><Cell row=\"2\" col=\"2\" text=\"editControl\" calendarweekformat=\"bind:editControl\"/><Cell row=\"2\" col=\"3\" rowspan=\"2\" text=\"textArea\" calendarweekformat=\"bind:textArea\"/><Cell row=\"2\" col=\"4\" text=\"maskedit\" calendarweekformat=\"bind:maskEdit\"/><Cell row=\"2\" col=\"5\" rowspan=\"2\" text=\"number\" calendarweekformat=\"bind:number\"/><Cell row=\"2\" col=\"6\" text=\"calendar\" calendarweekformat=\"bind:calendar\"/><Cell row=\"2\" col=\"7\" rowspan=\"2\" text=\"checkbox\"/><Cell row=\"2\" col=\"8\" text=\"combo\"/><Cell row=\"3\" text=\"button\" calendarweekformat=\"bind:button\"/><Cell row=\"3\" col=\"2\" text=\"decoText\" calendarweekformat=\"bind:decoText\"/><Cell row=\"3\" col=\"4\" text=\"mask\" calendarweekformat=\"bind:mask\"/><Cell row=\"3\" col=\"6\" text=\"date\" calendarweekformat=\"bind:date\"/><Cell row=\"3\" col=\"8\" text=\"comboText\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:text\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:editControl\" displaytype=\"editcontrol\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:textArea\" displaytype=\"textareacontrol\"/><Cell col=\"4\" text=\"bind:maskEdit\" displaytype=\"maskeditcontrol\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" text=\"bind:number\"/><Cell col=\"6\" text=\"bind:calendar\" displaytype=\"calendarcontrol\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:check\" displaytype=\"checkboxcontrol\"/><Cell col=\"8\" text=\"bind:combo\" displaytype=\"combocontrol\"/><Cell col=\"9\" text=\"bind:headTest1\" displaytype=\"editcontrol\"/><Cell col=\"10\" text=\"bind:headTest13\" displaytype=\"editcontrol\"/><Cell row=\"1\" text=\"bind:button\" displaytype=\"buttoncontrol\"/><Cell row=\"1\" col=\"2\" text=\"bind:decoText\" displaytype=\"decoratetext\"/><Cell row=\"1\" col=\"4\" text=\"bind:mask\" displaytype=\"mask\"/><Cell row=\"1\" col=\"6\" text=\"bind:date\" displaytype=\"date\"/><Cell row=\"1\" col=\"8\" text=\"bind:comboText\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"9\" text=\"bind:headTest12\" displaytype=\"editcontrol\"/><Cell row=\"1\" col=\"10\" text=\"bind:headTest14\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","grd06:20","290","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("7) 엑셀 export/import");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd13","Static11:182","Static11:0","410","301",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("dsPaste");
            obj.getSetter("griduserproperty").set("cellcopypaste");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HIRE DATE\"/><Cell col=\"3\" text=\"SALARY\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\"/><Cell col=\"3\" text=\"bind:SALARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","440","2437","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("selecttype = cell");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","440","2468","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("selecttype = row");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","440","2499","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("selecttype = multirow");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","440","2530","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("selecttype = area");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","882","1347","108","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("데이타 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","281","60",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("그리드 기능");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,3270,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleGrid.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    개발가이드 > 표준 및 기본 정의 > 그리드 기능
        *  @FileName 	SampleGrid.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/01/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/01/03      		 TOBESOFT Education	 	  	최초 생성
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

        	this.fnSetMultiLanguage();

        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description 엑셀 임포트 CallBack 함수(선택)
        */
        this.fnImportCallback = function(importId)
        {
        	trace("importId : " + importId + "\n" +this.dsExcel.saveXML());
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 다국어 설정
        */
        this.fnSetMultiLanguage = function ()
        {
        	this.Static00.text = ("1) " + this.gfnGetWord("cmm.checkbox"));//1) 체크박스
        	this.Static01.text = ("2) " + this.gfnGetWord("cmm.no"));		//2) 순번
        	this.Static02.text = ("3) " + this.gfnGetWord("cmm.status"));	//3) 상태
        	this.Static03.text = ("4) " + this.gfnGetWord("sort") +" (ctrl key= multisort)");	//4) 정렬 (ctrl key= multisort)
        	this.Static04.text = ("5) " + this.gfnGetWord("rowfix"));		//5) 행고정
        	this.Static05.text = ("6) " + this.gfnGetWord("colfix"));		//6) 열고정
        	this.Static10.text = ("7) " + this.gfnGetWord("excel") + " export/import");	//7) 엑셀 export/import
        	this.Static06.text = ("8) " + this.gfnGetWord("popup.datafiltersetting"));	//8) 데이터 필터 설정
        	this.Static07.text = ("9) " + this.gfnGetWord("basicfunction") + " + " + this.gfnGetWord("popup.datafindreplace"));	//9) 기본기능 + 데이터 찾기/바꾸기
        	this.Static08.text = ("10) " + this.gfnGetWord("basicfunction") + " + " + this.gfnGetWord("popup.colshwohide") + " + " + this.gfnGetWord("gridpersonal"));	//10) 기본기능 + 그리드컬럼 숨기기/보이기 + 그리드개인화
        	this.Static09.text = ("12) " + this.gfnGetWord("complicatedgrid"));	//12 복잡한 그리드(헤더와 바디가 매칭되지 않는 그리드)사용
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 상태 [+]버튼 이벤트
        */
        this.btn00_onclick = function(obj,e)
        {
        	var nRow = this.dsStatus.addRow();
        	this.dsStatus.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        };

        /**
         * @description 상태 [-]버튼 이벤트
        */
        this.btn01_onclick = function(obj,e)
        {
        	var nRow = this.dsStatus.rowposition;
        	this.dsStatus.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        };

        /**
         * @description 상태 업데이트표시
        */
        this.dsStatus_oncolumnchanged = function(obj,e)
        {
        	if(obj.getRowType(e.row) != Dataset.ROWTYPE_INSERT){
        		var nRow = e.row;
        		this.dsStatus.setRowType(nRow, Dataset.ROWTYPE_UPDATE);
        	}
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn02_onclick = function(obj,e)
        {
        	this.grd12.selecttype = "cell";
        	this.grd13.selecttype = "cell";
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.grd12.selecttype = "row";
        	this.grd13.selecttype = "row";
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn04_onclick = function(obj,e)
        {
        	this.grd12.selecttype = "multirow";
        	this.grd13.selecttype = "multirow";
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn05_onclick = function(obj,e)
        {
        	this.grd12.selecttype = "area";
        	this.grd13.selecttype = "area";
        };

        this.btn06_onclick = function(obj,e)
        {
        	this.dsExcel.clearData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtDesc.addEventHandler("onchanged",this.txtDesc_onchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
            this.btn06.addEventHandler("onclick",this.btn06_onclick,this);
            this.dsStatus.addEventHandler("oncolumnchanged",this.dsStatus_oncolumnchanged,this);
        };
        this.loadIncludeScript("SampleGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
