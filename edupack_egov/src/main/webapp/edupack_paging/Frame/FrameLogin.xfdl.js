(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameLogin");
            this.set_titletext("FrameLogin");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1298,788);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "USER_PASSWORD","type" : "STRING","size" : "256"}]},"Rows" : [{"USER_ID" : "test1","USER_PASSWORD" : "test1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_LEVLE","type" : "STRING","size" : "256"},{"id" : "MENU_GROUP","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "MENU_NAME_EN","type" : "STRING","size" : "256"},{"id" : "MENU_URL","type" : "STRING","size" : "256"},{"id" : "SORT_NO","type" : "STRING","size" : "256"},{"id" : "MENU_PID","type" : "STRING","size" : "256"},{"id" : "USE_YN","type" : "STRING","size" : "256"},{"id" : "AUTH","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_LEVLE" : "0","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000010","MENU_NAME" : "Basic","MENU_NAME_EN" : "Basic","SORT_NO" : "1","MENU_PID" : "ED00000000","USE_YN" : "Y"},{"MENU_LEVLE" : "1","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000020","MENU_NAME" : "EnvApp","MENU_NAME_EN" : "EnvApp","SORT_NO" : "1","MENU_PID" : "ED00000010","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000510","MENU_NAME" : "List01","MENU_NAME_EN" : "List01","MENU_URL" : "EduBasic::Template/Template_List01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000520","MENU_NAME" : "ListDetail01","MENU_NAME_EN" : "ListDetail01","MENU_URL" : "EduBasic::Template/Template_ListDetail01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000530","MENU_NAME" : "ListDetail02","MENU_NAME_EN" : "ListDetail02","MENU_URL" : "EduBasic::Template/Template_ListDetail02.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000540","MENU_NAME" : "ListDetailList01","MENU_NAME_EN" : "ListDetailList01","MENU_URL" : "EduBasic::Template/Template_ListDetailList01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000550","MENU_NAME" : "ListPaging","MENU_NAME_EN" : "ListPaging","MENU_URL" : "EduBasic::Template/Template_ListPaging.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000560","MENU_NAME" : "MasterDetail01","MENU_NAME_EN" : "MasterDetail01","MENU_URL" : "EduBasic::Template/Template_MasterDetail01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000570","MENU_NAME" : "MasterDetail02","MENU_NAME_EN" : "MasterDetail02","MENU_URL" : "EduBasic::Template/Template_MasterDetail02.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000580","MENU_NAME" : "Shuttle01","MENU_NAME_EN" : "Shuttle01","MENU_URL" : "EduBasic::Template/Template_Shuttle01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000590","MENU_NAME" : "SingleDetail01","MENU_NAME_EN" : "SingleDetail01","MENU_URL" : "EduBasic::Template/Template_SingleDetail01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000600","MENU_NAME" : "Tab01","MENU_NAME_EN" : "Tab01","MENU_URL" : "EduBasic::Template/Template_Tab01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "1","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000040","MENU_NAME" : "Form","MENU_NAME_EN" : "Form","SORT_NO" : "1","MENU_PID" : "ED00000010","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000050","MENU_NAME" : "Hello","MENU_NAME_EN" : "Hello","MENU_URL" : "EduBasic::Base/Hello.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000040","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000060","MENU_NAME" : "Employees","MENU_NAME_EN" : "Employees","MENU_URL" : "EduBasic::Form/Form_Emp.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000040","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000070","MENU_NAME" : "Employees(QuickCode)","MENU_NAME_EN" : "Employees(QuickCode)","MENU_URL" : "EduBasic::QuickCode/QuickCode_Form_Emp.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000040","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000080","MENU_NAME" : "Organization","MENU_NAME_EN" : "Organization","MENU_URL" : "EduBasic::Form/Form_Organization.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000040","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000090","MENU_NAME" : "Popup","MENU_NAME_EN" : "Popup","MENU_URL" : "EduBasic::Form/Form_Popup.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000040","USE_YN" : "Y"},{"MENU_LEVLE" : "1","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000100","MENU_NAME" : "Component","MENU_NAME_EN" : "Component","SORT_NO" : "1","MENU_PID" : "ED00000010","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000110","MENU_NAME" : "Comp List","MENU_NAME_EN" : "Comp List","MENU_URL" : "EduBasic::Comp/Comp_Base.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000100","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000120","MENU_NAME" : "Base","MENU_NAME_EN" : "Base","MENU_URL" : "EduBasic::Comp/Comp_Base.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000100","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000130","MENU_NAME" : "Button","MENU_NAME_EN" : "Button","MENU_URL" : "EduBasic::Comp/Comp_Button.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000140","MENU_NAME" : "Calendar","MENU_NAME_EN" : "Calendar","MENU_URL" : "EduBasic::Comp/Comp_Calendar.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000150","MENU_NAME" : "CheckBox","MENU_NAME_EN" : "CheckBox","MENU_URL" : "EduBasic::Comp/Comp_CheckBox.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000160","MENU_NAME" : "Combo","MENU_NAME_EN" : "Combo","MENU_URL" : "EduBasic::Comp/Comp_Combo.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000170","MENU_NAME" : "Dataset","MENU_NAME_EN" : "Dataset","MENU_URL" : "EduBasic::Comp/Comp_Dataset.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000180","MENU_NAME" : "Div","MENU_NAME_EN" : "Div","MENU_URL" : "EduBasic::Comp/Comp_div.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000190","MENU_NAME" : "Edit","MENU_NAME_EN" : "Edit","MENU_URL" : "EduBasic::Comp/Comp_Edit.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000200","MENU_NAME" : "Grid","MENU_NAME_EN" : "Grid","MENU_URL" : "EduBasic::Comp/Comp_Grid.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000210","MENU_NAME" : "Grid Cell","MENU_NAME_EN" : "Grid Cell","MENU_URL" : "EduBasic::Comp/Comp_Grid_Cell.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000220","MENU_NAME" : "ImageViewer","MENU_NAME_EN" : "ImageViewer","MENU_URL" : "EduBasic::Comp/Comp_ImageViewer.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000230","MENU_NAME" : "ListBox","MENU_NAME_EN" : "ListBox","MENU_URL" : "EduBasic::Comp/Comp_ListBox.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000240","MENU_NAME" : "ListView","MENU_NAME_EN" : "ListView","MENU_URL" : "EduBasic::Comp/Comp_ListView.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000250","MENU_NAME" : "MaskEdit","MENU_NAME_EN" : "MaskEdit","MENU_URL" : "EduBasic::Comp/Comp_MaskEdit.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000260","MENU_NAME" : "ProgreeBar","MENU_NAME_EN" : "ProgreeBar","MENU_URL" : "EduBasic::Comp/Comp_ProgressBar.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000270","MENU_NAME" : "Radio","MENU_NAME_EN" : "Radio","MENU_URL" : "EduBasic::Comp/Comp_Radio.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000280","MENU_NAME" : "Spin","MENU_NAME_EN" : "Spin","MENU_URL" : "EduBasic::Comp/Comp_Spin.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000290","MENU_NAME" : "Static","MENU_NAME_EN" : "Static","MENU_URL" : "EduBasic::Comp/Comp_Static.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000300","MENU_NAME" : "Tab","MENU_NAME_EN" : "Tab","MENU_URL" : "EduBasic::Comp/Comp_tab.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000310","MENU_NAME" : "TexaArea","MENU_NAME_EN" : "TexaArea","MENU_URL" : "EduBasic::Comp/Comp_TextArea.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000120","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000320","MENU_NAME" : "Extend","MENU_NAME_EN" : "Extend","SORT_NO" : "1","MENU_PID" : "ED00000100","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000330","MENU_NAME" : "File Up/Download","MENU_NAME_EN" : "File Up/Download","MENU_URL" : "EduBasic::CompExt/CompExt_FileUpDown.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000320","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000340","MENU_NAME" : "File Transfer","MENU_NAME_EN" : "File Transfer","MENU_URL" : "EduBasic::CompExt/CompExt_FileUpDownTransfer.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000320","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000350","MENU_NAME" : "Sketch","MENU_NAME_EN" : "Sketch","MENU_URL" : "EduBasic::CompExt/CompExt_Sketch.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000320","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000360","MENU_NAME" : "WebBrowser","MENU_NAME_EN" : "WebBrowser","MENU_URL" : "EduBasic::CompExt/CompExt_WebBrowser.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000320","USE_YN" : "Y"},{"MENU_LEVLE" : "3","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000370","MENU_NAME" : "Data Object","MENU_NAME_EN" : "Data Object","MENU_URL" : "EduBasic::CompExt/CompExt_DataObject_twoway.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000320","USE_YN" : "Y"},{"MENU_LEVLE" : "1","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000390","MENU_NAME" : "Common","MENU_NAME_EN" : "Common","SORT_NO" : "1","MENU_PID" : "ED00000010","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000400","MENU_NAME" : "Bind","MENU_NAME_EN" : "Bind","MENU_URL" : "EduBasic::CompCom/CompCom_Bind.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000390","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000410","MENU_NAME" : "Event","MENU_NAME_EN" : "Event","MENU_URL" : "EduBasic::CompCom/CompCom_Event.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000390","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000420","MENU_NAME" : "Position(Arrange)","MENU_NAME_EN" : "Position(Arrange)","MENU_URL" : "EduBasic::CompCom/CompCom_Arrange.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000390","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000430","MENU_NAME" : "Transaction","MENU_NAME_EN" : "Transaction","MENU_URL" : "EduBasic::CompCom/CompCom_Transaction.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000390","USE_YN" : "Y"},{"MENU_LEVLE" : "1","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000440","MENU_NAME" : "Sample","MENU_NAME_EN" : "Sample","SORT_NO" : "1","MENU_PID" : "ED00000010","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000450","MENU_NAME" : "ArrangeFit","MENU_NAME_EN" : "ArrangeFit","MENU_URL" : "EduBasic::Smpl/ArrangeFit.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000460","MENU_NAME" : "ArrangeSplit","MENU_NAME_EN" : "ArrangeSplit","MENU_URL" : "EduBasic::Smpl/ArrangeSplit.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000470","MENU_NAME" : "Grid Sum","MENU_NAME_EN" : "Grid Sum","MENU_URL" : "EduBasic::Smpl/GridSum.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000480","MENU_NAME" : "Grid Tree","MENU_NAME_EN" : "Grid Tree","MENU_URL" : "EduBasic::Smpl/GridTree.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000490","MENU_NAME" : "Grid Calendar","MENU_NAME_EN" : "Grid Calendar","MENU_URL" : "EduBasic::Smpl/GridCalendar.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "1","MENU_GROUP" : "ED00000010","MENU_ID" : "ED00000500","MENU_NAME" : "Templatform","MENU_NAME_EN" : "Templatform","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "List01","MENU_NAME_EN" : "List01","MENU_ID" : "ED00000510","MENU_URL" : "EduBasic::Template/Template_List01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "ListDetail01","MENU_NAME_EN" : "ListDetail01","MENU_ID" : "ED00000520","MENU_URL" : "EduBasic::Template/Template_ListDetail01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "ListDetail02","MENU_NAME_EN" : "ListDetail02","MENU_ID" : "ED00000530","MENU_URL" : "EduBasic::Template/Template_ListDetail02.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "ListDetailList01","MENU_NAME_EN" : "ListDetailList01","MENU_ID" : "ED00000540","MENU_URL" : "EduBasic::Template/Template_ListDetailList01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "ListPaging","MENU_NAME_EN" : "ListPaging","MENU_ID" : "ED00000550","MENU_URL" : "EduBasic::Template/Template_ListPaging.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "MasterDetail01","MENU_NAME_EN" : "MasterDetail01","MENU_ID" : "ED00000560","MENU_URL" : "EduBasic::Template/Template_MasterDetail01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "MasterDetail02","MENU_NAME_EN" : "MasterDetail02","MENU_ID" : "ED00000570","MENU_URL" : "EduBasic::Template/Template_MasterDetail02.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "Shuttle01","MENU_NAME_EN" : "Shuttle01","MENU_ID" : "ED00000580","MENU_URL" : "EduBasic::Template/Template_Shuttle01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "SingleDetail01","MENU_NAME_EN" : "SingleDetail01","MENU_ID" : "ED00000590","MENU_URL" : "EduBasic::Template/Template_SingleDetail01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"},{"MENU_LEVLE" : "2","MENU_GROUP" : "ED00000010","MENU_NAME" : "Tab01","MENU_NAME_EN" : "Tab01","MENU_ID" : "ED00000600","MENU_URL" : "EduBasic::Template/Template_Tab01.xfdl","SORT_NO" : "1","MENU_PID" : "ED00000440","USE_YN" : "Y"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSG_ID","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT_EN","type" : "STRING","size" : "256"},{"id" : "MSG_TYPE","type" : "STRING","size" : "2"}]},"Rows" : [{"MSG_ID" : "msg.server.error","MSG_TEXT" : "서버 오류입니다.\\n관리자에게 문의하세요.","MSG_TEXT_EN" : "Server error. Please contact your administrator.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.server.error.msg","MSG_TEXT" : "서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}","MSG_TEXT_EN" : "The server received the following error message.s\\n{0}","MSG_TYPE" : "A"},{"MSG_ID" : "msg.session.timeout","MSG_TEXT" : "세션이 종료되었습니다. 다시 로그인해주세요.","MSG_TEXT_EN" : "Your session has expired, please login again.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.login.url.error","MSG_TEXT" : "정상적인 경로로 접속하시기 바랍니다.","MSG_TEXT_EN" : "invalid access! please, login first at www.tobesoft.com","MSG_TYPE" : "A"},{"MSG_ID" : "msg.login.error","MSG_TEXT" : "해당하는 사용자 정보가 없습니다.","MSG_TEXT_EN" : "No user found.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.call.nofile","MSG_TEXT" : "해당하는 메뉴에 Program File이 등록되지 않았습니다.","MSG_TEXT_EN" : "the requested menu does not exist!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.nomenu","MSG_TEXT" : "해당 Menu가 존재하지 않습니다.","MSG_TEXT_EN" : "The specified menu doesn't exist.","MSG_TYPE" : "A"},{"MSG_ID" : "confirm.logout","MSG_TEXT" : "로그아웃 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to log out?","MSG_TYPE" : "C"},{"MSG_ID" : "confirm.before.movepage","MSG_TEXT" : "변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?","MSG_TEXT_EN" : "There are unsaved data. Would you like to leave now?","MSG_TYPE" : "C"},{"MSG_ID" : "confirm.before.search","MSG_TEXT" : "검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?","MSG_TEXT_EN" : "Any unsaved data will be discarded. \\nWould you like to continue?","MSG_TYPE" : "C"},{"MSG_ID" : "confirm.before.moveropos","MSG_TEXT" : "해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?","MSG_TEXT_EN" : "If you move the selected row, your changes will be discarded. \\nWould you like to continue?","MSG_TYPE" : "C"},{"MSG_ID" : "confirm.before.delete","MSG_TEXT" : "선택된 자료를 삭제 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete?","MSG_TYPE" : "C"},{"MSG_ID" : "confirm.before.deletesave","MSG_TEXT" : "선택된 자료를 삭제 후 저장하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete and save?","MSG_TYPE" : "C"},{"MSG_ID" : "confirm.before.save","MSG_TEXT" : "변경된 내역을 저장 하시겠습니까?","MSG_TEXT_EN" : "Would you like to save your changes?","MSG_TYPE" : "C"},{"MSG_ID" : "msg.noselect","MSG_TEXT" : "{0} 을(를) 선택해 주십시요.","MSG_TEXT_EN" : "Please, select {0}","MSG_TYPE" : "A"},{"MSG_ID" : "msg.search.nodata","MSG_TEXT" : "지정된 조건에 해당하는 항목을 찾을 수 없습니다.","MSG_TEXT_EN" : "No data found.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.save.nodata","MSG_TEXT" : "저장할 데이터가 없습니다.","MSG_TEXT_EN" : "No data to save.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.save.nochange","MSG_TEXT" : "변경된 내역이 없습니다.","MSG_TEXT_EN" : "No changes found.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.save.success","MSG_TEXT" : "저장 되었습니다.","MSG_TEXT_EN" : "Successfully saved!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.update.success","MSG_TEXT" : "수정 되었습니다.","MSG_TEXT_EN" : "Successfully updated!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.delete.success","MSG_TEXT" : "삭제 되었습니다.","MSG_TEXT_EN" : "Successfully deleted!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.action.success","MSG_TEXT" : "처리 되었습니다.","MSG_TEXT_EN" : "Successfully processed!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.action.fail","MSG_TEXT" : "프로세스가 실패하였습니다.","MSG_TEXT_EN" : "Failed process!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.updateafter","MSG_TEXT" : "변경된 내역을 저장 후 작업하세요.","MSG_TEXT_EN" : "Please, save your changes first!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.delete.child","MSG_TEXT" : "하위 자료가 있어 삭제할 수 없습니다.","MSG_TEXT_EN" : "the requested deletion could not be performed because dependent data found!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.grid.noselect","MSG_TEXT" : "선택된 항목이 없습니다.","MSG_TEXT_EN" : "No item has been selected!","MSG_TYPE" : "A"},{"MSG_ID" : "msg.before.delete","MSG_TEXT" : "정말로 삭제 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete?","MSG_TYPE" : "C"},{"MSG_ID" : "msg.err.validator","MSG_TEXT" : "{0}","MSG_TEXT_EN" : "{0}","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.required","MSG_TEXT" : "{0} 은(는) 필수 입력 항목입니다.","MSG_TEXT_EN" : "{0} is a required field.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.length","MSG_TEXT" : "{0} 의 입력값은 {1} 자리이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.rangelength","MSG_TEXT" : "{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.","MSG_TEXT_EN" : "The length of {0} is between {1} and {2}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.maxlength","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이하이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be less than or equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.minlength","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이상이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be greater than or equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.maxlengthB","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이하이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be less than or equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.minlengthB","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이상이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be greater than or equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.digits","MSG_TEXT" : "{0} 은(는) 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.min","MSG_TEXT" : "{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value greater than or equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.max","MSG_TEXT" : "{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value less than or equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.date","MSG_TEXT" : "{0} 은(는) 유효하지 않은 날짜 형식입니다.","MSG_TEXT_EN" : "{0} is in invalid date format.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.dateym","MSG_TEXT" : "{0} 은(는) 유효하지 않은 년월 형식입니다.","MSG_TEXT_EN" : "{0} is in invalid year/month format.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.fromto","MSG_TEXT" : "{0} 의 날짜가 {1} 의 날짜보다 작습니다.","MSG_TEXT_EN" : "{0} is less than {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.comparebig","MSG_TEXT" : "{0} 이(가) {1} 보다 작습니다.","MSG_TEXT_EN" : "{0} is less than {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.comparesmall","MSG_TEXT" : "{0} 이(가) {1} 보다 큽니다.","MSG_TEXT_EN" : "{0} is greater than {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.equalto","MSG_TEXT" : "{0} 이(가) {1} 와(과) 일치하지 않습니다.","MSG_TEXT_EN" : "{0} is not equal to {1}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.range","MSG_TEXT" : "{0} 은(는) {1} 와(과) {2} 사이의 값입니다.","MSG_TEXT_EN" : "The value of {0} is between {1} and {2}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.declimit","MSG_TEXT" : "{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.","MSG_TEXT_EN" : "The fractional part of {0} must consiste of {1} digits.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.code","MSG_TEXT" : "{0} 은(는) {1} 중 하나의 값이어야 합니다.","MSG_TEXT_EN" : "{0} must be the value of {1}","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.ssn","MSG_TEXT" : "{0} 은(는) 올바른 주민번호가 아닙니다.","MSG_TEXT_EN" : "The entered Social Security Number is invalid.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.email","MSG_TEXT" : "e-mail이 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered email address is invalid.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.url","MSG_TEXT" : "웹사이트 주소가 잘못 입력 되었습니다.","MSG_TEXT_EN" : "The entered website address is invalid.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.phone","MSG_TEXT" : "전화번호가 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered phone number is invalid.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.zipcode","MSG_TEXT" : "우편번호가 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered ZIP code is invalid.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.multicombo.maxcnt","MSG_TEXT" : "{0}개 이상 선택 할 수 없습니다.","MSG_TEXT_EN" : "You can't select more than {0}","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.maxdate","MSG_TEXT" : "날짜의 입력 가능 범위를 벗어났습니다.","MSG_TEXT_EN" : "Invalid date.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.err.validator.date.great","MSG_TEXT" : "종료일이 시작일보다 빠릅니다.","MSG_TEXT_EN" : "Invalid date range.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.file.exist","MSG_TEXT" : "{0} 은(는) 중복된 파일이 존재합니다.","MSG_TEXT_EN" : "{0} duplicate files exist.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.file.filesize","MSG_TEXT" : "첨부 파일의 용량은 최고 {0}MB까지 입니다.","MSG_TEXT_EN" : "Maximum allowed attachment size is {0} MB.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.file.filetotalsize","MSG_TEXT" : "첨부 파일의 전체 용량은 최고 {0}MB까지 입니다.","MSG_TEXT_EN" : "Maximum allowed attachment total size is {0} MB.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.file.allowtype","MSG_TEXT" : "{0} 은(는) 허용되지 않는 확장자입니다.[{1}]","MSG_TEXT_EN" : "{0} is an unacceptable extension.[{1}]","MSG_TYPE" : "A"},{"MSG_ID" : "msg.file.itemcount","MSG_TEXT" : "첨부 파일은 {0}개 이상 등록 할 수 없습니다.","MSG_TEXT_EN" : "Attachments can not be registered in more than {0}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.file.uploadfail","MSG_TEXT" : "{0}로(으로) 파일업로드가 실패하였습니다.","MSG_TEXT_EN" : "the file upload is failed because {0}.","MSG_TYPE" : "A"},{"MSG_ID" : "msg.exist.code","MSG_TEXT" : "입력하는 Code ({0})값이 이미 등록되어 있습니다.","MSG_TEXT_EN" : "Code already exsits!","MSG_TYPE" : "A"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWord", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "WORD","type" : "STRING","size" : "256"},{"id" : "KO","type" : "STRING","size" : "256"},{"id" : "EN","type" : "STRING","size" : "256"}]},"Rows" : [{"KO" : "스테틱","EN" : "static","WORD" : "comp.static"},{"KO" : "체크","EN" : "check","WORD" : "comp.check"},{"WORD" : "comp.button","KO" : "버튼","EN" : "button"},{"KO" : "박스","EN" : "box","WORD" : "comp.box"},{"KO" : "콤보","EN" : "combo","WORD" : "comp.combo"},{"KO" : "달력","EN" : "calendar","WORD" : "comp.calendar"},{"KO" : "웹브라우저","EN" : "web browser","WORD" : "comp.webbrowser"},{"KO" : "이미지","EN" : "image","WORD" : "comp.image"},{"KO" : "팝업","EN" : "popup","WORD" : "comp.popup"},{"KO" : "라디오","EN" : "radio","WORD" : "comp.radio"},{"WORD" : "comp.number","KO" : "숫자","EN" : "number"},{"WORD" : "comp.text","KO" : "텍스트","EN" : "text"},{"WORD" : "comp.test","KO" : "테스트","EN" : "test"},{"WORD" : "comp.textmode","KO" : "텍스트모드","EN" : "text mode"},{"WORD" : "frame.menu","EN" : "menu","KO" : "메뉴"},{"KO" : "즐겨찾기","EN" : "Favorites","WORD" : "frame.favorites"},{"WORD" : "frame.searchMenu","KO" : "메뉴검색","EN" : "Search"},{"WORD" : "frame.searchMenu.button","KO" : "검색","EN" : "sch.."},{"WORD" : "frame.logOut","KO" : "로그아웃","EN" : "Log out"},{"WORD" : "cmm.no","KO" : "순번","EN" : "NO"},{"WORD" : "cmm.status","KO" : "상태","EN" : "Status"},{"WORD" : "cmm.checkbox","KO" : "체크박스","EN" : "Checkbox"},{"WORD" : "popup.notice","KO" : "알림","EN" : "notice"},{"WORD" : "popup.confirm","KO" : "확인","EN" : "confirm"},{"WORD" : "popup.ok","KO" : "확인","EN" : "OK"},{"WORD" : "popup.close","KO" : "닫기","EN" : "Close"},{"WORD" : "popup.cancel","KO" : "취소","EN" : "Cancel"},{"WORD" : "popup.periodselect","KO" : "기간 선택","EN" : "Select the time period"},{"WORD" : "popup.monthselect","KO" : "월 선택","EN" : "Select the month"},{"WORD" : "popup.dataselect","KO" : "데이터 선택","EN" : "Select the data"},{"WORD" : "popup.columnselect","KO" : "컬럼 선택","EN" : "Select the column"},{"WORD" : "popup.modal","KO" : "모달팝업","EN" : "modal popup"},{"WORD" : "popup.columnname","KO" : "컬럼명","EN" : "column name"},{"WORD" : "popup.filtercriteria","KO" : "필터 기준","EN" : "filter criteria"},{"WORD" : "popup.findcondition","KO" : "찾을 조건","EN" : "find conditions"},{"WORD" : "popup.datafiltersetting","KO" : "데이터 필터 설정","EN" : "data filter setting"},{"WORD" : "popup.apply","KO" : "적용","EN" : "Apply"},{"WORD" : "popup.datafindreplace","KO" : "데이터 찾기/바꾸기","EN" : "data find/replace"},{"WORD" : "popup.targetcolumn","KO" : "대상 컬럼","EN" : "target column"},{"WORD" : "popup.findstring","KO" : "찾을 문자열","EN" : "find string"},{"WORD" : "popup.replacestring","KO" : "바꿀 문자열","EN" : "replace string"},{"WORD" : "popup.finddirection","KO" : "찾을 방향","EN" : "find direction"},{"WORD" : "popup.findposition","KO" : "찾을 위치","EN" : "find position"},{"WORD" : "popup.find","KO" : "찾기","EN" : "Find"},{"WORD" : "popup.replace","KO" : "바꾸기","EN" : "Replace"},{"WORD" : "popup.allchange","KO" : "모두바꾸기","EN" : "All Replace"},{"WORD" : "popup.casesensitive","KO" : "대/소문자 구분","EN" : "Case sensitive"},{"WORD" : "popup.colshwohide","KO" : "컬럼 보이기/숨기기","EN" : "column show/hide"},{"KO" : "조회","EN" : "search","WORD" : "search"},{"KO" : "입력","EN" : "insert","WORD" : "insert"},{"KO" : "삭제","EN" : "delete","WORD" : "delete"},{"KO" : "수정","EN" : "modify","WORD" : "modify"},{"WORD" : "save","KO" : "저장","EN" : "save"},{"WORD" : "print","EN" : "print","KO" : "출력"},{"WORD" : "excel","KO" : "엑셀","EN" : "excel"},{"KO" : "사원","EN" : "employee","WORD" : "employee"},{"KO" : "부서","EN" : "department","WORD" : "department"},{"KO" : "회사","EN" : "company","WORD" : "company"},{"WORD" : "user","KO" : "사용자","EN" : "user"},{"KO" : "주민등록번호","EN" : "Social Security Number","WORD" : "user.jumin"},{"WORD" : "user.id","KO" : "아이디","EN" : "ID"},{"KO" : "명칭","WORD" : "designation","EN" : "designation"},{"WORD" : "useflg","KO" : "사용 여부","EN" : "use flg"},{"WORD" : "reguser","KO" : "등록자","EN" : "register user"},{"WORD" : "description","KO" : "설명","EN" : "description"},{"KO" : "시작일자","EN" : "Start date","WORD" : "date.start"},{"KO" : "종료일","EN" : "End date","WORD" : "date.end"},{"WORD" : "value.max","KO" : "최대값","EN" : "Maximum value"},{"KO" : "금리","EN" : "Interest rate","WORD" : "value.interest"},{"EN" : "1st value","KO" : "1번째값","WORD" : "value.1st"},{"EN" : "2nd value","KO" : "2번째값","WORD" : "value.2nd"},{"KO" : "등록자","EN" : "register","WORD" : "register"},{"KO" : "정보","EN" : "info","WORD" : "info"},{"KO" : "용어","EN" : "word","WORD" : "word"},{"KO" : "사전","EN" : "dictionary","WORD" : "dictionary"},{"KO" : "국가","EN" : "nation","WORD" : "nation"},{"KO" : "언어","EN" : "language","WORD" : "language"},{"KO" : "선택","EN" : "select","WORD" : "select"},{"KO" : "초기화","EN" : "initialize","WORD" : "initialize"},{"WORD" : "tab1","KO" : "1번째탭","EN" : "First Tab"},{"WORD" : "tab2","KO" : "2번째탭","EN" : "Second Tab"},{"KO" : "한글","EN" : "Korean","WORD" : "korean"},{"KO" : "영어","EN" : "English","WORD" : "english"},{"WORD" : "sort","KO" : "정렬","EN" : "sort"},{"WORD" : "colfix","KO" : "열고정","EN" : "column fix"},{"WORD" : "rowfix","KO" : "행고정","EN" : "row fix"},{"WORD" : "excel","KO" : "엑셀","EN" : "excel"},{"WORD" : "basicfunction","KO" : "기본기능","EN" : "basic function"},{"WORD" : "complicatedgrid","KO" : "복잡한 그리드","EN" : "complicated grid"},{"WORD" : "gridpersonal","KO" : "그리드개인화","EN" : "personalization grid"},{"WORD" : "listcount","KO" : "목록 갯수","EN" : "List count"},{"WORD" : "etorangers","EN" : "Eto Rangers","KO" : "꾸러기수비대"},{"WORD" : "sunday","KO" : "일요일","EN" : "Sunday"},{"WORD" : "monday","KO" : "월요일","EN" : "Monday"},{"WORD" : "tuesday","KO" : "화요일","EN" : "Tuesday"},{"WORD" : "wednesday","KO" : "수요일","EN" : "Wednesday"},{"WORD" : "thursday","KO" : "목요일","EN" : "Thursday"},{"WORD" : "friday","KO" : "금요일","EN" : "Friday"},{"WORD" : "saturday","KO" : "토요일","EN" : "Saturday"},{"KO" : "월","WORD" : "mon","EN" : "MON"},{"KO" : "화","WORD" : "tue","EN" : "TUE"},{"KO" : "수","WORD" : "wed","EN" : "WED"},{"KO" : "목","WORD" : "thu","EN" : "THU"},{"KO" : "금","WORD" : "fri","EN" : "FRI"},{"KO" : "토","WORD" : "sat","EN" : "SAT"},{"KO" : "일","WORD" : "sun","EN" : "SUN"},{"WORD" : "week","KO" : "주","EN" : "WEEK"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridPopupMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"},{"id" : "captionEN","type" : "STRING","size" : "256"},{"id" : "enable","type" : "STRING","size" : "256"},{"id" : "userData","type" : "STRING","size" : "256"},{"id" : "upmenu","type" : "STRING","size" : "256"}]},"Rows" : [{"id" : "shapefix","level" : "0","caption" : "틀고정","enable" : "false","userData" : "0","captionEN" : "shape fix"},{"id" : "colfix","level" : "1","caption" : "열고정","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "column fix"},{"id" : "colfixfree","level" : "1","caption" : "열고정해제","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "column fix free"},{"id" : "rowfix","level" : "1","caption" : "행고정","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "row fix"},{"id" : "rowfixfree","level" : "1","caption" : "행고정해제","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "row fix free"},{"caption" : "-","enable" : "false","userData" : "0","level" : "0","captionEN" : "-"},{"id" : "filter","level" : "0","caption" : "그리드필터","enable" : "false","userData" : "0","captionEN" : "grid filter"},{"id" : "filterfree","level" : "0","caption" : "그리드필터 해제","enable" : "false","userData" : "0","captionEN" : "grid filter free"},{"level" : "0","caption" : "-","enable" : "false","userData" : "0","captionEN" : "-"},{"id" : "replace","level" : "0","caption" : "찾기/바꾸기","enable" : "false","userData" : "0","captionEN" : "find/replace"},{"id" : "colhide","level" : "0","caption" : "컬럼 숨기기/보이기","enable" : "false","userData" : "0","captionEN" : "column show/hide"},{"level" : "0","caption" : "-","enable" : "false","userData" : "0","captionEN" : "-"},{"id" : "excel","level" : "0","caption" : "엑셀","enable" : "false","userData" : "0","captionEN" : "excel"},{"id" : "export","level" : "1","caption" : "내보내기","enable" : "false","userData" : "0","upmenu" : "excel","captionEN" : "export"},{"id" : "import","level" : "1","caption" : "가져오기","enable" : "false","userData" : "0","upmenu" : "excel","captionEN" : "import"},{"level" : "0","caption" : "-","enable" : "false","userData" : "0","captionEN" : "-"},{"id" : "personal","level" : "0","caption" : "현재포맷저장","enable" : "false","userData" : "0","captionEN" : "saving current format"},{"id" : "initial","level" : "0","caption" : "초기상태로","enable" : "false","userData" : "0","captionEN" : "initialization"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","439","129","400","540",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("txtf_LOGIN_ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","0","384","130",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Logo2");
            this.divLogin.addChild(obj.name, obj);

            obj = new TextField("txtfId","30","240","340","60",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_labeltext("USER ID");
            obj.set_labelfloatingfixed("true");
            obj.set_cssclass("txtf_LOGIN_ID");
            obj.set_useleadingbutton("true");
            obj.set_helpertext("아이디를 입력하세요.");
            this.divLogin.addChild(obj.name, obj);

            obj = new TextField("txtfPw","30","330","340","60",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_cssclass("txtf_LOGIN_PW");
            obj.set_labeltext("PASSWORD");
            obj.set_labelfloatingfixed("true");
            obj.set_useleadingbutton("true");
            obj.set_helpertext("비밀번호를 입력하세요.");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","30","448","340","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_LOGIN_Login");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1298,788,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FrameLogin.xfdl", function() {
        /**
        *  Nexacro Professional Training Couse
        *  @MenuPath    Frame > FrameLogin
        *  @FileName 	FrameLogin.xfdl
        *  @Creator 	TOBESOFT Education
        *  @CreateDate 	2025/03/02
        *  @Desction    로그인 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025/03/02      		 TOBESOFT Education	 	  	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvObjEnv 		= nexacro.getEnvironment();
        this.fvObjApp 	  	= this.gfnGetApplication();
        this.fvObjMainframe = this.fvObjApp.mainframe;

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.form_onsize();

        	//runmode, runmode에 따른 설정
        //	this.fnSetInfo();
        };

        /**
        * form onsize 변경시
        * @return
        * @example
        * @memberOf public
        */
        this.form_onsize = function()
        {
        	var nLeft = (this.fvObjMainframe.width / 2) - Math.round((this.divLogin.form.getOffsetWidth()) / 2);
        	var nTop = (this.fvObjMainframe.height / 2) - Math.round((this.divLogin.form.getOffsetHeight()) / 2);

        	if (nLeft <= 0)	{
        		this.divLogin.form.setOffsetLeft(0);
        	}
        	else {
        		this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)
        	{
        		case "login":
        			if (this.dsList.rowcount == 1 ) {
        				// 사용자 정보 글로벌데이타셋에 저장
        				var dsUser = this.fvObjApp.gdsUserInfo;
        				dsUser.setColumn(0,"USER_ID",    this.dsList.getColumn(0, "USER_ID"));
        				dsUser.setColumn(0,"USER_NAME",  this.dsList.getColumn(0, "USER_NAME"));
        				dsUser.setColumn(0,"USER_NAME_EN",this.dsList.getColumn(0, "USER_ENAM"));
        				this.fnLoginAfter();
        			}
        			else{
        				this.gfnAlert("msg.login.error");	// 해당하는 사용자 정보가 없습니다.
        			}
        			break;
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * 로그인 transaction
         * @param {string} reLoginYn
         * @return
         * @example
         *
         * @memberOf
         * 통신 처리 안되어 있음
         */
        this.fnLogin = function()
        {
        	var strSvcId    = "login";
        	var strSvcUrl   = "login.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        /**
        * 로그인 성공시 처리 프레임 변경 등...
        * @return
        * @example
        * @memberOf
        */
        this.fnLoginAfter = function()
        {
        	// Grid 개인화 정보 load
        	var objGds = this.fvObjApp.gdsGridPersonal;
        	var sGdsGridXML = nexacro.getPrivateProfile("gdsGridPersonal");
        	objGds.loadXML(sGdsGridXML);

        	this.fvObjApp.gvLogIn = "Y";
        	this.fvObjApp.avVFrameSet.separatesize = "0,50,*";

        	//gloval variable 세팅
        	nexacro.setEnvironmentVariable("evUserId", this.fvObjApp.gdsUserInfo.getColumn(0,"USER_ID"));
        	nexacro.setEnvironmentVariable("evUserNm", this.fvObjApp.gdsUserInfo.getColumn(0,"USER_NAME"));

        	/*
        	// 다국어 처리
        	sLang = this.divLogin.form.cboLang.value;
        	nexacro.setEnvironmentVariable("evLanguage",sLang);
        	nexacro.setEnvironmentVariable("evLanguageChange",sLang);
        	this.fvObjApp.avLeftFrame.form.gfnInitLang(this.fvObjApp.avLeftFrame.form);
        	this.fvObjApp.avLeftFrame.form.fnChangeLang();
        	this.fvObjApp.avTopFrame.form.gfnInitLang(this.fvObjApp.avTopFrame.form);
        	*/

        	// topframe argument setting
        	this.fvObjApp.avTopFrame.form.fnLoad();
        	this.fvObjApp.avTopFrame.form.fnSetName();

        	// Topfrmae 메뉴 검색용 dataset
        	this.fvObjApp.avLeftFrame.form.fnGlobalMenuCopy();

        };



        /**
        * 운영/개발/로컬여부 셋팅(client체크).
         * @param  none
         * @return none
        */
        this.fnSetInfo = function()
        {
            var nRunMode = "S"; // S: Studio, L: local, D: 개발, R: 운영

        	// 런타임 접속
        	if(system.navigatorname == "nexacro"){
        		var xadl = nexacro.getProjectPath();

        		// Local 접속
        		if (xadl.indexOf("file://") != -1) {
        			nRunMode = "S";
        			this.fvObjApp.mainframe.titletext = ("로컬(Studio) - " + this.fvObjApp.mainframe.titletext);
        		}
        		// Local 웹서버 접속
        		else {
        			// service URL 설정
        			var objSrv = this.fvObjEnv.services["SvcUrl"];
        			trace("SvcUrl : " + objSrv.url);

        			// 로컬(웹)
        			if (xadl.indexOf("localhost") > -1 || xadl.indexOf("127.0.0.1") > -1 ) {
        				nRunMode = "L";
        				this.fvObjApp.mainframe.titletext = ("로컬(웹)  - " + this.fvObjApp.mainframe.titletext);
        			}
        			// 운영
        			else if (xadl.indexOf("172.10.11.117") > -1) {
        				nRunMode = "R";
        				// trace 정지 설정
        				this.fnSetTraceMode(false);
        			}
        			// 개발
        			else {
        				nRunMode = "D";
        				this.fvObjApp.mainframe.titletext = ("개발(웹)  - " + this.fvObjApp.mainframe.titletext);
        			}
        		}
        	}
        	// 웹 접속
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;
        		var objSrv = this.fvObjEnv.services["SvcUrl"];
        		trace("urlPath: " + urlPath + " === " + "SvcUrl: " + objSrv.url);

        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 || objSrv.url.indexOf("172.10.14.16") > -1) {
        			nRunMode = "L";
        			this.fvObjApp.mainframe.titletext = ("로컬(웹)  - " + this.fvObjApp.mainframe.titletext);
        		}
        		// 운영
        		else if (objSrv.url.indexOf("172.10.11.117") > -1) {
        			nRunMode = "R";
        			// trace 정지 설정
        			this.fnSetTraceMode(false);
        		}
        		// 개발
        		else {
        			nRunMode = "D";
        			this.fvObjApp.mainframe.titletext = ("개발(웹)  - " + this.fvObjApp.mainframe.titletext);
        		}
        	}
        	nexacro.setEnvironmentVariable("evRunMode", nRunMode);

        	// 접속경로 확인 및 설정
        	trace("========== 접속경로 : " + nexacro.getProjectPath() + " / 실행환경(nRunMode) : " + nRunMode);
        }


        /**
         * @description trace 재정의하여 trace로그 생성 방지
        */
        this.fnSetTraceMode = function(bTrace)
        {
        	trace("운영접속시에는 trace 로그를 남기지 않도록 설정.");

            nexacro.setEnvironmentVariable("evTraceMode", bTrace);
            if (bTrace){
        		trace = this.FRAME_REAL_TRACE_FN;
            }
            else {
                trace = function trace(){};
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
            //로컬환경에서 global dataset으로 화면열기
         	if (nexacro.getEnvironmentVariable("evRunMode") == "S" || nexacro.getEnvironmentVariable("evRunMode") == "L")
         	{
         		this.fnLoginAfter();
         	}
         	else {
         		this.fnLoginAfter();
        // 		this.fnLogin();	//서버와통신
         	}
        };



        this.btn00_onclick = function(obj,e)
        {
        	alert(nexacro.getEnvironmentVariable("evRunMode"));
        	alert(nexacro.getEnvironmentVariable("evUserId"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divLogin.form.txtfId.addEventHandler("oninput",this.TextField_oninput,this);
            this.divLogin.form.txtfPw.addEventHandler("oninput",this.TextField_oninput,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
        };
        this.loadIncludeScript("FrameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
