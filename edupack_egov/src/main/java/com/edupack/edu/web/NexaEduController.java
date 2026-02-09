package com.edupack.edu.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.NexaEduService;
import com.edupack.edu.vo.NexaEduVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller

public class NexaEduController {
	
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource
	private NexaEduService nexaEduService;
	
	@RequestMapping(value = "edu/getEmpList.do")
	public NexacroResult getEmpList() {
		
		log.debug("=====================");
		log.debug("(NexaEduController) 호출 성공이요~");
		log.debug("=====================");
		
		List<Map<String, Object>> resultData = nexaEduService.getEmpList();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("out_emp", resultData);
		// 쿼리 -> 리스트형태의 데이터 자바 객체 -> 넥사크로에서 사용할 데이터셋 형태
		
		return result;
	}
	
	@RequestMapping(value = "edu/getEmpListParam1.do")
	public NexacroResult getEmpListParam1(@ParamVariable(name="paramDept") String sDeptCode) {
		
		List<Map<String, Object>> resultData = nexaEduService.getEmpListParam1(sDeptCode);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("out_emp", resultData);
		
		return result;		
	}
	
	@RequestMapping(value = "edu/getEmpListParam2.do")
	public NexacroResult getEmpListParam2(@ParamVariable(name="paramDept") String sDeptCode, @ParamVariable(name="paramName") String sEmpName) {
		
		NexaEduVo searchVo = new NexaEduVo();
		searchVo.setSearchDeptCode(sDeptCode);
		searchVo.setSearchEmpName(sEmpName);
		
		List<Map<String, Object>> resultData = nexaEduService.getEmpListParam2(searchVo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("out_emp", resultData);
		
		return result;		
	}
	
	@RequestMapping(value = "edu/getEmpListParamDs.do")
	public NexacroResult getEmpListParamDs(@ParamDataSet(name="srcData") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = nexaEduService.getEmpListParamDs(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("out_emp", resultData);
		
		return result;		
	}
	
	@RequestMapping(value = "edu/getCodeData.do")
	public NexacroResult getCodeData() {
		// 부서
		List<Map<String, Object>> resultData1 = nexaEduService.getCodeDept();
		// 직급
		List<Map<String, Object>> resultData2 = nexaEduService.getCodePos();
		//취미
		List<Map<String, Object>> resultData3 = nexaEduService.getCodeHobby();
		// 보유기술
		List<Map<String, Object>> resultData4 = nexaEduService.getCodeSkill();
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("out_dept", resultData1);
		result.addDataSet("out_pos", resultData2);
		result.addDataSet("out_hobby", resultData3);
		result.addDataSet("out_skill", resultData4);
		
		return result;	
	}
	
	@RequestMapping(value = "edu/getCodeParam.do")
	public NexacroResult getCodeParam(@ParamVariable(name="paramCode") String strCode) {
		
		String[] arrCode = strCode.split(",");
		
		NexacroResult result = new NexacroResult();
		for(String t : arrCode) {
			List<Map<String, Object>> resultData = nexaEduService.getCodeParam(t);
			result.addDataSet(t, resultData);
		}
		
		return result;	
	}
	
	@RequestMapping(value = "edu/getCodeIn.do")
	public NexacroResult getCodeIn(@ParamVariable(name="paramCode") String strCode) {
		
		String[] arrCode = strCode.split(",");
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("type", arrCode);
		
		List<Map<String, Object>> resultData = nexaEduService.getCodeIn(searchMap);
		
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("out_code", resultData);
		
		
		return result;	
	}
	
	@RequestMapping(value = "edu/saveEmp.do")
	public NexacroResult saveEmp(@ParamDataSet(name="out_emp") List<Map<String, Object>> saveList) {
		
		nexaEduService.saveEmp(saveList);
		
		NexacroResult result = new NexacroResult();
		return result;	
	}
	
	@RequestMapping(value = "edu/checkId.do")
	public NexacroResult checkId(@ParamVariable(name="paramEmpId") String strEmpId) {
		
		int nCnt = 	nexaEduService.checkId(strEmpId);
		
		log.debug("######################");
		log.debug("COUNT : " + nCnt);
		log.debug("######################");
		
		NexacroResult result = new NexacroResult();
		result.addVariable("emp_count", nCnt);
		
		if (nCnt > 0) {
			result.setErrorCode(100);
			result.setErrorMsg("이미 등록된 번호입니다.");
		}
		else {
			result.setErrorCode(200);
			result.setErrorMsg("사용 가능한 아이디입니다.");
		}
		
		return result;	
	}
	
	/////////////////////////////////////////////////
	
	@RequestMapping(value = "edu/getSampleList.do")
	public NexacroResult getSampleList() {
		
		List<Map<String, Object>> resultData = nexaEduService.getSampleList();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsSample", resultData);
		
		return result;	
	}
	
	@RequestMapping(value = "edu/getPagingSample.do")
	public NexacroResult getPagingSample(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = nexaEduService.getPagingSample(searchMap);
		int iCnt = nexaEduService.getPagingSampleTotalCnt(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("dsSample", resultData);
		result.addVariable("fvTotalCnt", iCnt);
		
		return result;	
	}
	
	@RequestMapping(value = "edu/saveUserInfo.do")
	public NexacroResult saveUserInfo(@ParamDataSet(name="outUser") Map<String, Object> userMap) {
		
		NexacroResult result = new NexacroResult();

		try {
			nexaEduService.saveUserInfo(userMap);
			
		} catch (Exception e) {
				result.setErrorCode(-11);
				result.setErrorMsg("eeeee: " + e.getMessage() );
		}
		
		
		return result;	
	}
	
	@RequestMapping(value = "edu/searchUserInfo.do")
	public NexacroResult searchUserInfo() {
		
		List<Map<String, Object>> resultData = nexaEduService.searchUserInfo();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("outSearch", resultData);
		
		return result;	
	}
	
	
	
}
