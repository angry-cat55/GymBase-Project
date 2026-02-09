package com.edupack.edu.web;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.datatype.PlatformDataType;
import com.nexacro.java.xapi.tx.PlatformType;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class NexaEduFileController {
   
   private Logger log = LoggerFactory.getLogger(this.getClass());
   
   private static final String SP = File.separator;
   
   private static String sUserPath = "";
   
   @RequestMapping(value = "edu/uploadFile.do")
   public NexacroResult uploadFile(MultipartHttpServletRequest request) throws IOException {
      
      String sUserDir = request.getParameter("userDir");
      if (sUserDir != null && !sUserDir.equals("")) {
         sUserPath = sUserDir;
      }
      
      DataSet dsFile = createDataSet();
      
      uploadFile(request, dsFile);
      
      NexacroResult result = new NexacroResult();
      result.addDataSet(dsFile);
      result.setErrorCode(0);
      result.setErrorMsg("파일 업로드 성공");
      return result;
   }

   private void uploadFile(MultipartHttpServletRequest request, DataSet dsFile) throws  IOException {
      // TODO Auto-generated method stub
      String uploadPath = getUploadPath();
      
      File fileDir = new File(uploadPath);
      if (!fileDir.exists()) {
         fileDir.mkdirs();
         fileDir.setWritable(true);
      }
      Iterator<String> fileName = request.getFileNames();
      while(fileName.hasNext()) {
         MultipartFile mFile = request.getFile(fileName.next());
         String sFileName = mFile.getOriginalFilename();
         String sNewFileName = sFileName;
         
         File upFile = new File(uploadPath + SP + sFileName);
         
         if (upFile.exists()) {
        	 Date currDate = new Date();
        	 SimpleDateFormat simpleDate = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        	 sNewFileName = simpleDate.format(currDate) + "_" + sFileName;
        	 upFile = new File(uploadPath + SP + sNewFileName);
         }
         
         mFile.transferTo(upFile);
         
         int nRow = dsFile.newRow();
         
         dsFile.set(nRow, "file_id", sNewFileName);
         dsFile.set(nRow, "file_name", sFileName);
         dsFile.set(nRow, "file_size", upFile.length());
      }
   }

   @Value("${file.upload.path}")
   private String uploadPath;
   private String getUploadPath() {
      String sFullPath = uploadPath + SP + sUserPath;
      log.debug("#####################");
      log.debug(sFullPath);
      log.debug("#####################");
      return sFullPath;
   }

   private DataSet createDataSet() {
      DataSet ds = new DataSet("dsFile");
      ds.addColumn("chk", PlatformDataType.STRING);
      ds.addColumn("file_id", PlatformDataType.STRING);
      ds.addColumn("file_name", PlatformDataType.STRING);
      ds.addColumn("file_size", PlatformDataType.INT);
      // TODO Auto-generated method stub
      return ds;
   }
   
   @RequestMapping(value="edu/getFileList.do")
   public NexacroResult getFileList(@ParamVariable(name="userDir") String paramDir) {
	   sUserPath = paramDir;
	   String uploadPath = getUploadPath();
	   DataSet dsFile = createDataSet();
	   
	   File file = new File(uploadPath);
	   File[] arrFile = file.listFiles();
	   for (int i = 0; i < arrFile.length; i++)
	   {
		   int nRow = dsFile.newRow();
		   dsFile.set(nRow, "chk", 0);
		   dsFile.set(nRow, "file_id", arrFile[i].getName());
		   dsFile.set(nRow, "file_name", arrFile[i].getName());
		   dsFile.set(nRow, "file_size", arrFile[i].length());
	   }
	   NexacroResult result = new NexacroResult();
	   result.addDataSet(dsFile);
	   return result;
   }
   
   @RequestMapping(value="edu/deleteFile.do")
   public NexacroResult deleteFile(@ParamVariable(name="userDir") String paramDir
		   										, @ParamVariable(name="fileId") String paramId) {
	   sUserPath = paramDir;
	   String uploadPath = getUploadPath();
	   
	   File rmFile = new File(uploadPath + SP + paramId);
	   rmFile.delete();
	   
	   NexacroResult result = new NexacroResult();
	   result.setErrorCode(0);
	   result.setErrorMsg("파일 삭제");
	   return result;
   }
   
   @RequestMapping(value="edu/downloadFile.do")
   public NexacroFileResult downloadFile(HttpServletRequest request) throws IOException {
	   String sUserDir = request.getParameter("userDir");
	   if (sUserDir != null && !sUserDir.equals("")) {
	         sUserPath = sUserDir;
	   }
	   String uploadPath = getUploadPath();
	   String sFileId = request.getParameter("fileId");
	   String sFileDs = request.getParameter("fileDs");
	   
	   log.debug("@@@@@@@@@" + sFileId);
	   log.debug("@@@@@@@@@" + sFileDs);
	   
	   File f = null;
	   if (sFileId != null && !sFileId.equals("")) {
		   String sDownFile = uploadPath + SP + sFileId;
		   f = new File(sDownFile);
	   }
	   else {
		   sFileDs = URLDecoder.decode(sFileDs, PlatformType.DEFAULT_CHAR_SET);
		   DataSet objDs = new DataSet("dsDown");
		   objDs.loadXml(sFileDs);
		   log.debug("===========" + objDs.getRowCount());
		   
		   // 압축 다운로드
		   Random rnd = new Random();
		   String strRnd = String.valueOf(rnd.nextInt(999999999) + rnd.nextInt(999999999));
		   f = getDownZipFile(objDs, uploadPath, "CompressZip" + strRnd);
	   }
	   
	   NexacroFileResult result = new NexacroFileResult(f);
	   return result;
   }
   
	private File getDownZipFile(DataSet objDs, String filePath, String compressName) throws IOException {
		String dumDir = "dummy" + SP;
		
		String files[] = new String[objDs.getRowCount()];
		
		for(int i=0; i<files.length; i++) {
			files[i] = URLDecoder.decode(objDs.getString(i, "file_id"), PlatformType.DEFAULT_CHAR_SET);
		}
		
		File tempDir = new File(filePath + dumDir);
		if(tempDir.exists() == false) {
			boolean mkdirs = tempDir.mkdirs();
			tempDir.setWritable(true);
		}
		
		int size = 1024;	
		byte[] buf = new byte[size];
		String outZipNm = filePath + dumDir + compressName + ".zip";
		
		File file = new File(outZipNm);
		FileInputStream fis = null;
		ZipArchiveOutputStream zos = null;
		BufferedInputStream bis = null;
		
		try {
			zos = new ZipArchiveOutputStream(new BufferedOutputStream(new FileOutputStream(outZipNm)));
			for( int i=0; i<files.length; i++) {
				zos.setEncoding("UTF-8");
				fis = new FileInputStream(filePath + SP + files[i]);
				bis = new BufferedInputStream(fis, size);
				
				zos.putArchiveEntry(new ZipArchiveEntry(files[i]));
				
				int len;
				while((len = bis.read(buf, 0, size)) != -1){
					zos.write(buf, 0, len);
				}
				bis.close();
				fis.close();
				zos.closeArchiveEntry();
			}
			zos.close();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if( zos != null ) { zos.close(); }
			if( fis != null ) { fis.close(); }
			if( bis != null ) { bis.close(); }
		}
		
		return file;
	}


}

