package com.edupack.p01.p014.web;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public class P014ImageFileController {

	@Resource NexacroResult nexaEduService;
	@RequestMapping(value = "p014/imageUploadFile.do")
	public NexacroResult imageUploadFile() {
		
		
		return null;
	}
}
