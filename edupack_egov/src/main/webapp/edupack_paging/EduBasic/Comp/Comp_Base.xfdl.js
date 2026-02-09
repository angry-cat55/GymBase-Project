(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Base");
            this.set_titletext("Components");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CD","type" : "STRING","size" : "256"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CD" : "10","DEPT_NAME" : "Human Resource Team"},{"DEPT_CD" : "20","DEPT_NAME" : "Marketing Team"},{"DEPT_CD" : "30","DEPT_NAME" : "Sales Team"},{"DEPT_CD" : "40","DEPT_NAME" : "Platform Team"},{"DEPT_CD" : "50","DEPT_NAME" : "Support Team"},{"DEPT_CD" : "60","DEPT_NAME" : "Education Team"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "HOT_KEY","type" : "STRING","size" : "256"},{"id" : "CHECK","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "10","MENU_NAME" : "New Folder","LEVEL" : "0","HOT_KEY" : "Ctrl+N"},{"MENU_ID" : "20","MENU_NAME" : "View","LEVEL" : "0","HOT_KEY" : ""},{"MENU_ID" : "30","MENU_NAME" : "Sort by","LEVEL" : "0","HOT_KEY" : ""},{"MENU_NAME" : "Name","LEVEL" : "1","CHECK" : "1"},{"MENU_NAME" : "Date modified","LEVEL" : "1"},{"MENU_NAME" : "Size","LEVEL" : "1"},{"MENU_NAME" : "Ascending","LEVEL" : "1","CHECK" : "1"},{"MENU_NAME" : "Descending","LEVEL" : "1"},{"MENU_ID" : "40","MENU_NAME" : "Refresh","LEVEL" : "0","HOT_KEY" : "F5"},{"MENU_ID" : "50","MENU_NAME" : "Properties","LEVEL" : "0","HOT_KEY" : "Ctrl+P"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_movie", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TITLE","type" : "STRING","size" : "256"},{"id" : "DIRECTOR","type" : "STRING","size" : "256"},{"id" : "WRITERS","type" : "STRING","size" : "256"},{"id" : "YEAR","type" : "STRING","size" : "256"},{"id" : "SUMMARY","type" : "STRING","size" : "256"},{"id" : "POSTER","type" : "STRING","size" : "256"}]},"Rows" : [{"TITLE" : "The Shawshank Redemption","DIRECTOR" : "Frank Darabont","YEAR" : "1994","WRITERS" : "Stephen King","SUMMARY" : "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.","POSTER" : "imagerc::movie/img_movie_shawshank.png"},{"TITLE" : "Die Hard with a Vengeance","YEAR" : "1995","DIRECTOR" : "John McTiernan","WRITERS" : "Jonathan Hensleigh","SUMMARY" : "John McClane is now almost a full-blown alcoholic and is suspended from the NYPD. But when a bomb goes off in the Bonwit Teller Department Store the police go insane trying to figure out what's going on. Soon, a man named Simon calls and asks for McClane. Simon tells Inspector Walter Cobb that McClane is going to play a game called \"Simon Says\". He says that McClane is going to do the tasks he assigns him. If not, he'll set off another bomb. With the help of a Harlem electrician, John McClane must race all over New York trying to figure out the frustrating puzzles that the crafty terrorist gives him. But when a bomb goes off in a subway station right by the Federal Reserve (the biggest gold storage in the world) things start to get heated","POSTER" : "imagerc::movie/img_movie_diehard.png"},{"WRITERS" : "James DeMonaco","TITLE" : "The Negotiator","YEAR" : "1998","DIRECTOR" : "F. Gray Gray","SUMMARY" : "In the midst of an elaborate conspiracy, an expert negotiator is driven to the edge when he's framed for the murder of his partner, as well as embezzling money from his department's pension fund. His only chance to prove his innocence is to take hostages himself, acquire the services of another expert negotiator, and find out who's running the conspiracy before it's too late.","POSTER" : "imagerc::movie/img_movie_negotiator.png"},{"TITLE" : "The Net","YEAR" : "1995","DIRECTOR" : "Irwin Winkler","WRITERS" : "John Brancato","SUMMARY" : "Angela Bennett is a computer expert. This young and beautiful analyst is never far from a computer and modem. The only activity she has outside of computers is visiting her mother. A friend, whom she's only spoken to over the net and phone, Dale Hessman, sent her a program with a weird glitch for her to de-bug. That night, he left to meet her and was killed in a plane crash. Angela discovers secret information on the disk she has received only hours before she leaves for vacation. Her life then turns into a nightmare, her records are erased from existence and she is given a new identity, one with a police record. She struggles to find out why this has happened and who has it in for her.","POSTER" : "imagerc::movie/img_movie_net.png"},{"TITLE" : "Terminator 2: Judgment Day","DIRECTOR" : "James Cameron","WRITERS" : "James Cameron","YEAR" : "1991","SUMMARY" : "Over ten years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John. The man who will become the future leader of the human resistance against the Machines is now a healthy young boy. However, another Terminator, called the T-1000, is sent back through time by the supercomputer Skynet. This new Terminator is more advanced and more powerful than its predecessor and its mission is to kill John Connor when he's still a child. However, Sarah and John do not have to face the threat of the T-1000 alone. Another Terminator (identical to the same model that tried and failed to kill Sarah Connor in 1984) is also sent back through time to protect them. Now, the battle for tomorrow has begun.","POSTER" : "imagerc::movie/img_movie_terminator2.png"},{"TITLE" : "Sliding Doors","DIRECTOR" : "Peter Howitt","WRITERS" : "Peter Howitt","YEAR" : "1998","SUMMARY" : "In London, the public relation Helen is fired from her position in a PR company. While returning home, she does not catch the train in the subway. But in another possibility of her life, she catches the train in the subway. The story shows two parallel lives of Helen: in one life, she stays with her boyfriend Gerry, and in the other life, she finds that Gerry cheats her with Lydia and falls in love with James Hammerton.","POSTER" : "imagerc::movie/img_movie_slidingdoors.png"},{"TITLE" : "Unbreakable","DIRECTOR" : "M. Night Shyamalan","WRITERS" : "M. Night Shyamalan","YEAR" : "2000","SUMMARY" : "David Dunn (Willis) is taking a train from New York City back home to Philadelphia after a job interview that didn't go well when his car jumps the tracks and collides with an oncoming engine, with David the only survivor among the 131 passengers on board. Astoundingly, David is not only alive, he hardly seems to have been touched. As David wonders what has happened to him and why he was able to walk away, he encounters a mysterious stranger, Elijah Prince (Samuel L. Jackson), who explains to David that there are a certain number of people who are \"unbreakable\" -- they have remarkable endurance and courage, a predisposition toward dangerous behavior, and feel invincible but also have strange premonitions of terrible events. Is David \"unbreakable\"? And if he is, what are the physical and psychological ramifications of this knowledge?","POSTER" : "imagerc::movie/img_movie_unbreakable.png"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"},{"id" : "IMG_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","IMG_URL" : "imagerc::img_btn_save.png"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","IMG_URL" : "imagerc::img_btn_new.png"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "60"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","IMG_URL" : "imagerc::img_btn_delete.png"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static54","20","60",null,"160","20",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00_00","20","328",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static54_00","20","219",null,"110","20",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","20","60",null,"170","20",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","20","408",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","20","229",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","20","542",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","20","60",null,"118","20",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","20","177",null,"170","20",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","20","346",null,"130","20",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","20","475",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","60",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","127",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","20","381",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20.00","60","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_background("url(\'imagerc::comp/comp_static.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","0","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Components - Single");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","510","60","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button");
            obj.set_background("url(\'imagerc::comp/comp_button.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","180.00","80","160","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20.00","127","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Edit");
            obj.set_background("url(\'imagerc::comp/comp_edit.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","670.00","80","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","510","127","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("MaskEdit");
            obj.set_background("url(\'imagerc::comp/comp_maskedit.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","20","448",null,"68","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","750.00","80","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","194",null,"188","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","180.00","148","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("Nexacro N");
            obj.set_text("Nexacro N");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20.00","194","150","188",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("TextArea");
            obj.set_background("url(\'imagerc::comp/comp_textarea.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20.00","381","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("CheckBox");
            obj.set_background("url(\'imagerc::comp/comp_checkbox.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","510","194","150","188",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Calendar");
            obj.set_background("url(\'imagerc::comp/comp_calendar.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","670.00","148","134","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("8307011234567");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_format("######-#######");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","812.00","148","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("12345.88");
            obj.set_format("#,###.00");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","180.00","205","200","120",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("Nexacro N\nHello World\nTextArea Component");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","20","60",null,"230","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","20","289",null,"330","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_border("");
            obj.set_background("");
            obj.set_padding("");
            obj.set_cssclass("sta_WF_DetailArea");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","670.00","205","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_value("20240102");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","818","205","180","170",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("20240102");
            obj.set_datepickerchangetype("button");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","180.00","402","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Check");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","670.00","402","68","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("17");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","180.00","469","172","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_image("url(\'theme://images/sta_TF_NexacroN.png\')");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","670.00","469","260","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("70");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exe","940","469","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("exe");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","20","60","150","118",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Combo");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            obj.set_background("url(\'imagerc::comp/comp_combo.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","510","60","150","118",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("MultiCombo");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            obj.set_background("url(\'imagerc::comp/comp_multicombo.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","448","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("ImageViwer");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_imageviwer.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","670.00","76","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_positionstep("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Sunday","readonlycolumn" : "1"},{"codecolumn" : "1","datacolumn" : "Monday"},{"codecolumn" : "2","datacolumn" : "Tuesday"},{"codecolumn" : "3","datacolumn" : "Wednesday"},{"codecolumn" : "4","datacolumn" : "Thursday"},{"codecolumn" : "5","datacolumn" : "Friday"},{"codecolumn" : "6","datacolumn" : "Saturday","readonlycolumn" : "1"}]});
            obj.set_innerdataset(MultiCombo00_innerdataset);
            obj.set_text("Monday,Thursday");
            obj.set_value("1,4");
            obj.set_index("1,4");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo01","670.00","111","320","56",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_positionstep("1");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_readonlycolumn("");
            obj.set_edittype("singletag");
            obj.set_text("Marketing Team,Sales Team");
            obj.set_value("20,30");
            obj.set_index("1,2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","20","177","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("ListBox");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_listbox.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","670","189","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("Multi Select");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","670","215","200","114",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_innerdataset("ds_dept");
            obj.set_positionstep("1");
            obj.set_multiselect("true");
            obj.set_text("Marketing Team");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","180.00","215","200","114",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            var ListBox00_innerdataset = new nexacro.NormalDataset("ListBox00_innerdataset", obj);
            ListBox00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Sunday"},{"codecolumn" : "1","datacolumn" : "Monday"},{"codecolumn" : "2","datacolumn" : "Tuesday"},{"codecolumn" : "3","datacolumn" : "Wednesday"},{"codecolumn" : "4","datacolumn" : "Thursday"},{"codecolumn" : "5","datacolumn" : "Friday"},{"codecolumn" : "6","datacolumn" : "Saturday"}]});
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_text("Monday");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","20","346","150","130",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Radio");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_radio.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","180.00","359","300","104",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            obj.set_rowcount("3");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "Sunday","codecolumn" : "SU"},{"datacolumn" : "Monday","codecolumn" : "MO"},{"datacolumn" : "Tuesday","codecolumn" : "TU"},{"datacolumn" : "Wednesday","codecolumn" : "WE"},{"datacolumn" : "Thursday","codecolumn" : "TH"},{"datacolumn" : "Friday","codecolumn" : "FR"},{"datacolumn" : "Saturday","codecolumn" : "SA"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("FR");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","510","346","150","130",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("CheckBoxSet");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_checkboxset.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","670.00","359","300","104",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_positionstep("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("3");
            obj.set_readonlycolumn("readonlycolumn");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Sunday","readonlycolumn" : "1"},{"codecolumn" : "1","datacolumn" : "Monday"},{"codecolumn" : "2","datacolumn" : "Tuesday"},{"codecolumn" : "3","datacolumn" : "Wednesday"},{"codecolumn" : "4","datacolumn" : "Thursday"},{"codecolumn" : "5","datacolumn" : "Friday"},{"codecolumn" : "6","datacolumn" : "Saturday","readonlycolumn" : "1"}]});
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            obj.set_text("Monday,Thursday");
            obj.set_value("1,4");
            obj.set_index("1,4");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","20","475","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Menu");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_menu.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","180.00","495","493","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("MENU_LEVEL");
            obj.set_popupitemheight("30");
            obj.set_enablecolumn("MENU_ENABLE");
            obj.set_hotkeycolumn("HOTKEY");
            obj.set_iconcolumn("MENU_ICON");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","20","542","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("PopupMenu");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_popupmenu.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popMenu","180.00","563","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Click");
            obj.set_positionstep("1");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","60","150","230",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("Grid");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_grid.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","178.00","71","642","209",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_binddataset("ds_data");
            obj.set_autosizingtype("");
            obj.set_autofittype("col");
            obj.set_fillareatype("linerow");
            obj.set_positionstep("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"126\"/><Column size=\"136\"/><Column size=\"147\"/><Column size=\"73\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Hire Date\"/><Cell col=\"3\" text=\"Annual Salary\"/><Cell col=\"4\" text=\"Married\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:HIRE_DATE\" textAlign=\"center\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MARRIED\"/><Cell col=\"5\" text=\"bind:IMG_URL\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","20","289","150","330",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("ListView");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_listview.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","178.00","303","642","303",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_binddataset("ds_movie");
            obj.set_bandexpandtype("accordion");
            obj.set_positionstep("2");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"180\" expandbartype=\"true\" expandbarsize=\"25\"><Cell id=\"Cell01\" left=\"205.00\" top=\"20\" width=\"295\" height=\"28\" text=\"bind:TITLE\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell02\" left=\"205.00\" top=\"58\" width=\"100\" height=\"28\" text=\"DIRECTOR\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell03\" left=\"305.00\" top=\"58\" width=\"195\" height=\"28\" text=\"bind:DIRECTOR\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell04\" left=\"205.00\" top=\"96\" width=\"100\" height=\"28\" text=\"WRITERS\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell05\" left=\"305.00\" top=\"96\" width=\"195\" height=\"28\" text=\"bind:WRITERS\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell06\" left=\"205.00\" top=\"134\" width=\"100\" height=\"28\" text=\"YEAR\" cssclass=\"lstv_WF_BLabel\"/><Cell id=\"Cell07\" left=\"305.00\" top=\"134\" width=\"195\" height=\"28\" text=\"bind:YEAR\" cssclass=\"lstv_WF_BContents\"/><Cell id=\"Cell11\" left=\"30\" top=\"20\" width=\"120\" height=\"150\" text=\"bind:POSTER\" displaytype=\"imagecontrol\" imagestretch=\"fit\"/></Band><Band id=\"detail\" width=\"100%\" height=\"180\"><Cell id=\"Cell00\" left=\"20.00\" top=\"38\" width=\"460\" height=\"128\" text=\"bind:SUMMARY\" cssclass=\"lstv_WF_DContents\"/><Cell id=\"Cell01\" left=\"20\" top=\"10\" width=\"153\" height=\"28\" text=\"Summary\" cssclass=\"lstv_WF_DLabel\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","20","60","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("Div");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("3");
            obj.set_background("url(\'imagerc::comp/comp_div.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","180.00","70","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("Contents");
            obj.set_cssclass("sta_WF_GuideLabel");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180.00","95","320","120",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Div00");
            obj.set_positionstep("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","46","80","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","10","140","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_value("Nexaro N");
            obj.set_text("Nexaro N");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","106.00","46","140","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_value("Education Team");
            obj.set_text("Education Team");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static52","506.00","70","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Linked");
            obj.set_cssclass("sta_WF_GuideLabel");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","509.00","95","320","120",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Div00");
            obj.set_positionstep("3");
            obj.set_url("EduBasic::Comp/Comp_BaseSub.xfdl");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","20.00","229","150","180",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Tab");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("3");
            obj.set_background("url(\'imagerc::comp/comp_tab.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","180.00","244","328","151",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_tabindex("0");
            obj.set_positionstep("3");
            obj.set_tabbuttongap("2");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Contents");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","10","80","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","106.00","10","140","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_value("Nexaro N");
            obj.set_text("Nexaro N");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","106.00","46","140","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_value("Education Team");
            obj.set_text("Education Team");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","46","80","26",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Linked");
            obj.set_url("EduBasic::Comp/Comp_BaseSub.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static39","20.00","408","150","120",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("PopupDiv");
            obj.set_border("");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("3");
            obj.set_background("url(\'imagerc::comp/comp_popupdiv.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popDiv","180.00","422","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Click");
            obj.set_positionstep("3");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","20","60","150","160",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("TextField");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_background("url(\'imagerc::comp/comp_textfield.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00","180.00","103","210","75",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_helpertext("Please enter your name.");
            obj.set_labeltext("User Name");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_positionstep("4");
            obj.set_value("Nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00","480.00","60","180","160",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("MultLineTextField");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_background("url(\'imagerc::comp/comp_multlinetextfield.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_01","20.00","219","150","110",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("DateField");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_background("url(\'imagerc::comp/comp_datefield.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","180.00","237","210","75",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_labeltext("Birth Day");
            obj.set_usehelpertext("true");
            obj.set_positionstep("4");
            obj.set_value("20240701");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00_00","480.00","219","180","110",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("PopupDateRangePicker");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_background("url(\'imagerc::comp/comp_popupdaterangepicker.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_openDateRange","670.00","260","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("Click");
            obj.set_positionstep("4");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_01_00","20.00","328","150","320",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("DateRangePicker");
            obj.set_positionstep("4");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_background("url(\'imagerc::comp/comp_daterangepicker.png\') no-repeat 2% center #f7f8f9");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","180.00","338","410","300",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_positionstep("4");
            obj.set_startdate("20240402");
            obj.set_enddate("20240510");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","180.00","106","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_positionstep("1");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "Sunday"},{"codecolumn" : "1","datacolumn" : "Monday"},{"codecolumn" : "2","datacolumn" : "Tuesday"},{"codecolumn" : "3","datacolumn" : "Wednesday"},{"codecolumn" : "4","datacolumn" : "Thursday"},{"codecolumn" : "5","datacolumn" : "Friday"},{"codecolumn" : "6","datacolumn" : "Saturday"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("nexacro platform");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","324.00","554","176","106",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_ID");
            obj.set_levelcolumn("LEVEL");
            obj.set_hotkeycolumn("HOT_KEY");
            obj.set_enablecolumn("");
            obj.getSetter("positionstep").set("1");
            obj.set_checkboxcolumn("CHECK");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00","510","381","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("Spin");
            obj.set_background("url(\'imagerc::comp/comp_button.png\') no-repeat 2% center #f7f8f9");
            obj.set_cssclass("sta_WF_CompLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","510","448","150","68",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("ProgressBar");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_progressbar.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","510","177","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("ListBox\r\n(Multi Select)");
            obj.set_border("");
            obj.set_background("url(\'imagerc::comp/comp_listbox.png\') no-repeat 2% center #f7f8f9");
            obj.set_padding("0px 0px 0px 30px");
            obj.set_cssclass("sta_WF_CompLabel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new PopupDateRangePicker("PopupDateRangePicker00","5120.00","214","400","300",null,null,null,null,null,null,this);
            obj.set_positionstep("0");
            obj.set_startdate("20240402");
            obj.set_enddate("20240421");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00","670.00","71","250","139",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_value("Nexacro N24\nHello World\nMultLineTextField Component");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Meno");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20.00","0","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("Components - Selective");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","0","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("Components - List");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","0","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("Components - Container");
            obj.set_cssclass("sta_WF_GuideTitle1");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","20","0","250","60",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Components - Mobile First");
            obj.set_cssclass("sta_WF_Title");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","288.00","431","270","90",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.getSetter("positionstep").set("3");
            obj.set_border("1px solid #d3dce1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20.00","10","80","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("Edit00","106.00","10","140","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_value("Nexaro N");
            obj.set_text("Nexaro N");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01","20.00","46","80","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Edit("Edit01","106.00","46","140","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_value("Education Team");
            obj.set_text("Education Team");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static08","180","189","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("Single Select");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_GuideLabel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_stepcount("5");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EduBasic::Comp/Comp_BaseSub.xfdl");
        };
        
        // User Script
        this.registerScript("Comp_Base.xfdl", function() {

        this.btn_exe_onclick = function(obj,e)
        {
        	this.ProgressBar00.pos = 0;
        	this.setTimer(0,10);
        };

        this.btn_popMenu_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width);
        	var nY = 0;
        	this.PopupMenu00.trackPopupByComponent(obj, nX, nY);
        };

        this.btn_popDiv_onclick = function(obj,e)
        {
        	var nX = parseInt(obj.width);
        	var nY = 0;
        	this.PopupDiv00.trackPopupByComponent(obj, nX, nY, 270, 90);
        };


        this.Comp_Base_ontimer = function(obj,e)
        {
        	if(e.timerid == 0 ){
        		if(this.ProgressBar00.pos == 100){
        			this.killTimer(0);
        		}
        		this.ProgressBar00.stepIt();
        	}

        };

        this.btn_openDateRange_onclick = function(obj,e)
        {
        	this.PopupDateRangePicker00.trackPopupByComponent("start", obj, 0, obj.height);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Comp_Base_ontimer,this);
            this.btn_exe.addEventHandler("onclick",this.btn_exe_onclick,this);
            this.btn_popMenu.addEventHandler("onclick",this.btn_popMenu_onclick,this);
            this.btn_popDiv.addEventHandler("onclick",this.btn_popDiv_onclick,this);
            this.btn_openDateRange.addEventHandler("onclick",this.btn_openDateRange_onclick,this);
            this.PopupDateRangePicker00.addEventHandler("oncloseup",this.PopupDateRangePicker00_oncloseup,this);
        };
        this.loadIncludeScript("Comp_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
