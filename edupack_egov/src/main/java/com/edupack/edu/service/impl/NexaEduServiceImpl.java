package com.edupack.edu.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.edupack.edu.service.NexaEduService;
import com.edupack.edu.service.mapper.NexaEduMapper;
import com.edupack.edu.vo.NexaEduVo;
import com.nexacro.java.xapi.data.DataSet;

@Service

public class NexaEduServiceImpl implements NexaEduService {

	@Resource
	private NexaEduMapper nexaEduMapper;
	
	@Override
	public List<Map<String, Object>> getEmpList() {
		return nexaEduMapper.getEmpList();
	}

	@Override
	public List<Map<String, Object>> getEmpListParam1(String sDeptCode) {
		return nexaEduMapper.getEmpListParam1(sDeptCode);
	}
	
	@Override
	public List<Map<String, Object>> getEmpListParam2(NexaEduVo searchVo) {
		return nexaEduMapper.getEmpListParam2(searchVo);
	}

	@Override
	public List<Map<String, Object>> getEmpListParamDs(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return nexaEduMapper.getEmpListParamDs(searchMap);
	}

	@Override
	public List<Map<String, Object>> getCodeDept() {
		// TODO Auto-generated method stub
		return nexaEduMapper.getCodeDept();
	}

	@Override
	public List<Map<String, Object>> getCodePos() {
		// TODO Auto-generated method stub
		return nexaEduMapper.getCodePos();
	}

	@Override
	public List<Map<String, Object>> getCodeHobby() {
		// TODO Auto-generated method stub
		return nexaEduMapper.getCodeHobby();
	}

	@Override
	public List<Map<String, Object>> getCodeSkill() {
		// TODO Auto-generated method stub
		return nexaEduMapper.getCodeSkill();
	}

	@Override
	public List<Map<String, Object>> getCodeParam(String t) {
		// TODO Auto-generated method stub
		return nexaEduMapper.getCodeParam(t);
	}

	@Override
	public List<Map<String, Object>> getCodeIn(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return nexaEduMapper.getCodeIn(searchMap);
	}

	@Override
	public void saveEmp(List<Map<String, Object>> saveList) {
		int nSize = saveList.size();
		for (int i = 0; i < nSize; i++) {
			Map<String, Object> empMap = saveList.get(i);
			if ((int)empMap.get("DataSetRowType") == DataSet.ROW_TYPE_INSERTED) {
				nexaEduMapper.insertEmp(empMap);
			}
			else if ((int)empMap.get("DataSetRowType") == DataSet.ROW_TYPE_UPDATED) {
				nexaEduMapper.updateEmp(empMap);
			}
			else if ((int)empMap.get("DataSetRowType") == DataSet.ROW_TYPE_DELETED) {
				nexaEduMapper.deleteEmp(empMap);
			}
		}
	}

	@Override
	public int checkId(String strEmpId) {
		// TODO Auto-generated method stub
		return nexaEduMapper.checkId(strEmpId);
	}

	@Override
	public List<Map<String, Object>> getSampleList() {
		// TODO Auto-generated method stub
		return nexaEduMapper.getSampleList();
	}

	@Override
	public List<Map<String, Object>> getPagingSample(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return nexaEduMapper.getPagingSample(searchMap);
	}

	@Override
	public int getPagingSampleTotalCnt(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return nexaEduMapper.getPagingSampleTotalCnt(searchMap);
	}

	@Override
	public void saveUserInfo(Map<String, Object> userMap) {
		// TODO Auto-generated method stub
		nexaEduMapper.saveUserInfo(userMap);
	}

	@Override
	public List<Map<String, Object>> searchUserInfo() {
		// TODO Auto-generated method stub
		return nexaEduMapper.searchUserInfo();
	}

}
