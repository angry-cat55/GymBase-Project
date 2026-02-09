package com.edupack.edu.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.service.NexEdu2Serv;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;


//@Controller

public class NexaEdu2Contr {
	
	@Resource
	private NexEdu2Serv nexaEdu2Serv;
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	
//	@RequestMapping(value = "edu/svcgt.do")
//	public NexacroResult svcgt() {
//
////		List<Map<String,Object>> resultData = nexaEdu2Serv.서버주소(); 
//		NexacroResult result = new NexacroResult();
////		result.addDataSet("out_sys_emp" == 넘기거나 받을 인자, resultData);	
//		return result;
//	}

	
	
	
}
