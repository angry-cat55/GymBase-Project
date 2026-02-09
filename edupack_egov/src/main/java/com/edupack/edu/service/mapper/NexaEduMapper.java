package com.edupack.edu.service.mapper;

import java.util.List;
import java.util.Map;

import com.edupack.edu.vo.NexaEduVo;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper

public interface NexaEduMapper {

	List<Map<String, Object>> getEmpList();
	// 작성은 xml 파일에서

	List<Map<String, Object>> getEmpListParam1(String sDeptCode);

	List<Map<String, Object>> getEmpListParam2(NexaEduVo searchVo);

	List<Map<String, Object>> getEmpListParamDs(Map<String, Object> searchMap);

	List<Map<String, Object>> getCodeDept();
	List<Map<String, Object>> getCodePos();
	List<Map<String, Object>> getCodeSkill();
	List<Map<String, Object>> getCodeHobby();

	List<Map<String, Object>> getCodeParam(String t);

	List<Map<String, Object>> getCodeIn(Map<String, Object> searchMap);

	void insertEmp(Map<String, Object> empMap);

	void updateEmp(Map<String, Object> empMap);

	void deleteEmp(Map<String, Object> empMap);

	int checkId(String strEmpId);

	List<Map<String, Object>> getSampleList();

	List<Map<String, Object>> getPagingSample(Map<String, Object> searchMap);

	int getPagingSampleTotalCnt(Map<String, Object> searchMap);

	void saveUserInfo(Map<String, Object> userMap);

	List<Map<String, Object>> searchUserInfo();

}
