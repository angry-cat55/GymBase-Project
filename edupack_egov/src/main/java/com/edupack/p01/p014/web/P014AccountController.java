package com.edupack.p01.p014.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.edupack.edu.vo.NexaEduVo;
import com.edupack.p01.p014.service.P014AccountServer;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller

public class P014AccountController {
	
	@Resource
	private P014AccountServer p014AccountService;
	
	@RequestMapping(value = "p014/setAccountInfo.do")
	public NexacroResult setAccountInfo(@ParamDataSet(name="ds_accountInfo") Map<String, Object> accountInfo) {
		p014AccountService.setAccountInfo(accountInfo);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/checkID.do")
	public NexacroResult checkID(@ParamVariable(name="paramID") String strID) {
		
		int nCnt = 	p014AccountService.checkID(strID);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("resultID", nCnt);
		
		if (nCnt > 0) {
			result.setErrorCode(10100);
			result.setErrorMsg("이미 사용 중인 아이디입니다.");
		}
		else {
			result.setErrorCode(10101);
			result.setErrorMsg("사용 가능한 아이디입니다.");
		}
		
		return result;	
	}
	
	@RequestMapping(value = "p014/login.do")
	public NexacroResult login(@ParamVariable(name="paramID") String strID, @ParamVariable(name="paramPW") String strPW) {
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("ID", strID);
		searchMap.put("PW", strPW);
		
		List<Map<String, Object>> resultData = p014AccountService.login(searchMap);
		
		NexacroResult result = new NexacroResult();
		
		if (resultData == null || resultData.isEmpty() == true) {
			result.setErrorCode(10110);
			result.setErrorMsg("아이디 또는 비밀번호가 일치하지 않습니다.");
		}
		else {
			result.setErrorCode(10111);
			result.addDataSet("ds_accountInfo", resultData);
			result.setErrorMsg("환영합니다.");
		}
		return result;
	}
	
	@RequestMapping(value = "p014/findAccount.do")
	public NexacroResult findAccount(@ParamVariable(name="paramID") String strID, @ParamVariable(name="paramName") String strName, @ParamVariable(name="paramPhoneNo") String strPhoneNo) {
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("ID", strID);
		searchMap.put("NAME", strName);
		searchMap.put("PHONE_NO", strPhoneNo);
		
		List<Map<String, Object>> resultData = p014AccountService.findAccount(searchMap);
		
		NexacroResult result = new NexacroResult();
		
		if (resultData == null || resultData.isEmpty() == true) {
			result.setErrorCode(10120);
			result.setErrorMsg("입력하신 정보와 일치하는 계정이 없습니다.");
		}
		else {
			result.addDataSet("ds_findedInfo", resultData);
			result.setErrorCode(10121);
			result.setErrorMsg("입력하신 정보와 일치하는 계정을 찾았습니다.");
		}
		return result;
	}
	
	@RequestMapping(value = "p014/getRecentInfo.do")
	public NexacroResult getRecentInfo() {
		
		List<Map<String, Object>> resultData1 = p014AccountService.getRecentGyms();
		List<Map<String, Object>> resultData2 = p014AccountService.getRecentMarkets();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_recentGymList", resultData1);
		result.addDataSet("ds_recentMarketList", resultData2);
		
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getRecentGymList.do")
	public NexacroResult getRecentGymList(@ParamDataSet(name="ds_search") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = p014AccountService.getRecentGymList(searchMap);
		int iCnt = p014AccountService.getGymsTotalCnt(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymList", resultData);
		result.addVariable("fvTotalCnt", iCnt);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getFavoritesGymList.do")
	public NexacroResult getFavoritesGymList(@ParamDataSet(name="ds_search") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = p014AccountService.getFavoritesGymList(searchMap);
		int iCnt = p014AccountService.getGymsTotalCnt(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymList", resultData);
		result.addVariable("fvTotalCnt", iCnt);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getGymInfo.do")
	public NexacroResult getGymInfo(@ParamVariable(name="paramCode") String paramCode, @ParamVariable(name="paramID") String paramID) {
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("ID", paramID);
		searchMap.put("CODE", paramCode);
		
		List<Map<String, Object>> resultGymData = p014AccountService.getGymInfo(paramCode);
		List<Map<String, Object>> resultGymMachineData = p014AccountService.getGymMachineInfo(paramCode);
		int resultCheckFavorite = p014AccountService.checkFavorite(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymInfo", resultGymData);
		result.addDataSet("ds_gymMachineInfo", resultGymMachineData);
		result.addVariable("accountFavorite", resultCheckFavorite);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/changeFavoriteInfo.do")
	public NexacroResult changeFavoriteInfo(@ParamVariable(name="paramID") String paramID
																,@ParamVariable(name="paramCode") String paramCode
																,@ParamVariable(name="paramStatus") String paramStatus) {
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("ID", paramID);
		searchMap.put("CODE", paramCode);
		searchMap.put("STATUS", paramStatus);
		
		p014AccountService.changeFavoriteInfo(searchMap);
		
		NexacroResult result = new NexacroResult();
		return result;	
	}
	
	@RequestMapping(value = "p014/getMyRecentGymList.do")
	public NexacroResult getMyRecentGymList(@ParamDataSet(name="ds_search") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = p014AccountService.getMyRecentGymList(searchMap);
		int iCnt = p014AccountService.getMyGymsTotalCnt(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymList", resultData);
		result.addVariable("fvTotalCnt", iCnt);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getMyFavoritesGymList.do")
	public NexacroResult getMyFavoritesGymList(@ParamDataSet(name="ds_search") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = p014AccountService.getMyFavoritesGymList(searchMap);
		int iCnt = p014AccountService.getMyGymsTotalCnt(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymList", resultData);
		result.addVariable("fvTotalCnt", iCnt);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getMarketList.do")
	public NexacroResult getMarketList(@ParamDataSet(name="ds_search") Map<String, Object> searchMap) {
		
		List<Map<String, Object>> resultData = p014AccountService.getMarketList(searchMap);
		int iCnt = p014AccountService.getMarketTotalCnt(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_marketList", resultData);
		result.addVariable("fvTotalCnt", iCnt);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getMarketInfo.do")
	public NexacroResult getMarketInfo(@ParamVariable(name="paramNo") String paramNo, @ParamVariable(name="paramID") String paramID) {
		
		List<Map<String, Object>> resultData = p014AccountService.getMarketInfo(paramNo);
		List<Map<String, Object>> resultCommentData = p014AccountService.getMarketCommentInfo(paramNo);
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("MARKET_NO", paramNo);
		searchMap.put("USER_ID", paramID);
		String resultMessage = p014AccountService.getRejectMessage(searchMap);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_marketInfo", resultData);
		result.addDataSet("ds_marketComment", resultCommentData);
		result.addVariable("rejectMessage", resultMessage);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/setComment.do")
	public NexacroResult setComment(@ParamDataSet(name="ds_newComment") Map<String, Object> searchMap, @ParamVariable(name="paramNo") String paramNo) {
		
		p014AccountService.insertMarketComment(searchMap);
		List<Map<String, Object>> resultData = p014AccountService.getMarketCommentInfo(paramNo);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_marketComment", resultData);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/getGymList.do")
	public NexacroResult getGymList() {
		
		List<Map<String, Object>> resultData = p014AccountService.getGymList();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymList", resultData);
		
		return result;	
	}
	
	@RequestMapping(value = "p014/setNewMarket.do")
	public NexacroResult setNewMarket(@ParamDataSet(name="ds_marketInfo") Map<String, Object> searchMap) {
		
		p014AccountService.setNewMarket(searchMap);
		
		NexacroResult result = new NexacroResult();
		return result;	
	}
	
	@RequestMapping(value = "p014/setMembershipBuyer.do")
	public NexacroResult setMembershipBuyer(@ParamVariable(name="paramSellerID") String sellerID, @ParamVariable(name="paramBuyerID") String buyerID, @ParamVariable(name="paramMarketNo") String paramMarketNo) {
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("BUYER_ID", buyerID);
		searchMap.put("SELLER_ID", sellerID);
		searchMap.put("MARKET_NO", paramMarketNo);
		
		p014AccountService.processPurchase(searchMap);
		
		NexacroResult result = new NexacroResult();
		return result;	
	}
	
	@RequestMapping(value = "p014/updateAccountInfo.do")
	public NexacroResult updateAccountInfo(@ParamDataSet(name="ds_accountInfo") Map<String, Object> accountInfo) {
		p014AccountService.updateAccountInfo(accountInfo);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/getMyMarketList.do")
	public NexacroResult getMyMarketList(@ParamVariable(name="paramID") String paramID) {
		List<Map<String, Object>> resultData = p014AccountService.getMyMarketList(paramID);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_market", resultData);
		return result;
	}
	
	@RequestMapping(value = "p014/getMyMembershipList.do")
	public NexacroResult getMyMembershipList(@ParamVariable(name="paramID") String paramID) {
		List<Map<String, Object>> resultData = p014AccountService.getMyMembershipList(paramID);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_membership", resultData);
		return result;
	}
	
	@RequestMapping(value = "p014/getNotificationCount.do")
	public NexacroResult getNotificationCount(@ParamVariable(name="paramID") String paramID) {
		int resultData = p014AccountService.getNotificationCount(paramID);
		
		NexacroResult result = new NexacroResult();
		result.addVariable("notiCnt", resultData);
		return result;
	}
	
	@RequestMapping(value = "p014/getNotifications.do")
	public NexacroResult getNotifications(@ParamVariable(name="paramID") String paramID) {
		List<Map<String, Object>> resultData = p014AccountService.getNotifications(paramID);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_notification", resultData);
		return result;
	}
	
	@RequestMapping(value = "p014/updateIsRead.do")
	public NexacroResult updateIsRead(@ParamVariable(name="paramID") String paramID, @ParamVariable(name="paramMarketNo") String paramMarketNo) {
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("USER_ID", paramID);
		searchMap.put("MARKET_NO", paramMarketNo);
		
		p014AccountService.updateIsRead(searchMap);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/updateSingleNotiIsRead.do")
	public NexacroResult updateSingleNotiIsRead(@ParamVariable(name="paramID") String paramID, @ParamVariable(name="paramMarketNo") String paramMarketNo, @ParamVariable(name="paramNotiType") String paramNotiType) {
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("USER_ID", paramID);
		searchMap.put("MARKET_NO", paramMarketNo);
		searchMap.put("NOTI_TYPE", paramNotiType);
		
		p014AccountService.updateSingleNotiIsRead(searchMap);
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/getMyGymInfo.do")
	public NexacroResult getMyGymInfo(@ParamVariable(name="paramID") String paramID) {
		List<Map<String, Object>> resultData = p014AccountService.getMyGymInfo(paramID);
		List<Map<String, Object>> resultData1 = p014AccountService.getMyGymMachine(paramID);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_gymInfo", resultData);
		result.addDataSet("ds_gymMachineInfo", resultData1);
		return result;
	}
	
	@RequestMapping(value = "p014/reUploadGymInfo.do")
	public NexacroResult reUploadGymInfo(@ParamDataSet(name="ds_gymInfo") Map<String, Object> gymInfo, @ParamDataSet(name="ds_gymMachineInfo") List<Map<String, Object>> gymMachineList, @ParamVariable(name="paramCode") String paramCode) {
		p014AccountService.reUploadGymInfo(gymInfo);
		
		Map<String, Object> machineParam = new HashMap<>();
	    machineParam.put("gymCode", paramCode);
	    machineParam.put("machineList", gymMachineList);
	    
	    p014AccountService.updateGymMachineList(machineParam);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/updateGymInfo.do")
	public NexacroResult updateGymInfo(@ParamDataSet(name="ds_gymInfo") Map<String, Object> gymInfo, @ParamDataSet(name="ds_gymMachineInfo") List<Map<String, Object>> gymMachineList, @ParamVariable(name="paramCode") String paramCode) {
		p014AccountService.updateGymInfo(gymInfo);
		
		Map<String, Object> machineParam = new HashMap<>();
	    machineParam.put("gymCode", paramCode);
	    machineParam.put("machineList", gymMachineList);
	    
	    p014AccountService.updateGymMachineList(machineParam);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/getTransferManagementList.do")
	public NexacroResult getTransferManagementList(@ParamVariable(name="paramCode") String paramCode) {
		List<Map<String, Object>> resultData = p014AccountService.getTransferManagementList(paramCode);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_transferList", resultData);
		return result;
	}
	
	@RequestMapping(value = "p014/transferProcess.do")
	public NexacroResult transferProcess(@ParamDataSet(name="ds_processInfo") Map<String, Object> processInfo) {
		p014AccountService.transferProcess(processInfo);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@RequestMapping(value = "p014/getMarketCountsInfo.do")
	public NexacroResult getMarketCountsInfo(@ParamVariable(name="paramCode") String paramCode) {
		List<Map<String, Object>> resultData  = p014AccountService.getMarketCountsInfo(paramCode);
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_marketCountsInfo", resultData);
		return result;
	}
	
	@RequestMapping(value = "p014/getDashboardInfo.do")
	public NexacroResult getDashboardInfo(@ParamVariable(name="paramCode") String paramCode) {
	    NexacroResult result = new NexacroResult();

	    Map<String, Object> dashboardData = p014AccountService.getDashboardInfo(paramCode);

	    result.addDataSet("ds_currentInfo", (List<Map<String, Object>>) dashboardData.get("currentInfo"));
	    result.addDataSet("ds_transfer", (List<Map<String, Object>>) dashboardData.get("pendingTransfers"));
	    result.addDataSet("ds_workLog", (List<Map<String, Object>>) dashboardData.get("workLog"));

	    return result;
	}
	
	@RequestMapping(value = "p014/getGymName.do")
	public NexacroResult getGymName(@ParamVariable(name="paramCode") String paramCode) {
	    NexacroResult result = new NexacroResult();

	    String resultGymName = p014AccountService.getGymName(paramCode);

	    result.addVariable("fvGymName", resultGymName);
	    return result;
	}
	
	@RequestMapping(value = "p014/insertNewGymInfo.do")
	public NexacroResult insertNewGymInfo(@ParamDataSet(name="ds_gymInfo") Map<String, Object> newGymInfo, @ParamVariable(name="paramID") String paramID) {
		
		newGymInfo.put("paramID", paramID);
		
		int newGymCode = p014AccountService.insertNewGymInfo(newGymInfo);
		
	    NexacroResult result = new NexacroResult();
	    result.addVariable("newGymCode", newGymCode);
	    return result;
	}
	
	@RequestMapping(value = "p014/getMachineList.do")
	public NexacroResult getMachineList() {
		
		List<Map<String, Object>> resultData  = p014AccountService.getMachineList();
		
	    NexacroResult result = new NexacroResult();
	    result.addDataSet("ds_gymMachineList", resultData);
	    return result;
	}
	
	@RequestMapping(value = "p014/addSelectedGymMachines.do")
	public NexacroResult addSelectedGymMachines(@ParamDataSet(name="ds_gymMachineList") List<Map<String, Object>> gymMachineList, @ParamVariable(name="paramCode") String paramCode) {
		
		Map<String, Object> machineParam = new HashMap<>();
	    machineParam.put("gymCode", paramCode);
	    machineParam.put("machineList", gymMachineList);
	    
	    p014AccountService.updateGymMachineList(machineParam);
	    
	    NexacroResult result = new NexacroResult();
	    return result;
	}
	
	@RequestMapping(value = "p014/getRejectReason.do")
	public NexacroResult getRejectReason(@ParamVariable(name="paramCode") String paramCode) {
		
	    
		List<Map<String, Object>> resultData  = p014AccountService.getRejectReason(paramCode);
	    
	    NexacroResult result = new NexacroResult();
	    result.addDataSet("ds_rejectReason", resultData);
	    return result;
	}
	
	@RequestMapping(value = "p014/getAdminInfo.do")
	public NexacroResult getAdminInfo() {
		List<Map<String, Object>> resultData1  = p014AccountService.getCurrentInfo();
		List<Map<String, Object>> resultData2  = p014AccountService.getPendingGymList();
		
		NexacroResult result = new NexacroResult();
		result.addDataSet("ds_currentInfo", resultData1);
		result.addDataSet("ds_pendingGymList", resultData2);
		return result;
	}
	
	@RequestMapping(value = "p014/updateGymStatus.do")
	public NexacroResult updateGymStatus(@ParamDataSet(name="ds_updateGym") Map<String, Object> updateGym) {
		p014AccountService.updateGymStatus(updateGym);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "p014/getSuperAdminDashboardInfo.do")
	public NexacroResult getSuperAdminDashboardInfo() {
	    NexacroResult result = new NexacroResult();
	    
	    Map<String, Object> dashboardData = p014AccountService.getSuperAdminDashboardInfo();

	    // 서비스에서 받은 데이터를 7개의 데이터셋으로 각각 추가
	    result.addDataSet("ds_totalUserCount", (Map<String, Object>) dashboardData.get("totalUserCount"));
	    result.addDataSet("ds_totalGymCount", (Map<String, Object>) dashboardData.get("totalGymCount"));
	    result.addDataSet("ds_monthlyNewUsers", (List<Map<String, Object>>) dashboardData.get("monthlyNewUsers"));
	    result.addDataSet("ds_monthlyNewGyms", (List<Map<String, Object>>) dashboardData.get("monthlyNewGyms"));
	    result.addDataSet("ds_top5Gyms", (List<Map<String, Object>>) dashboardData.get("top5Gyms"));
	    result.addDataSet("ds_growthData", (Map<String, Object>) dashboardData.get("growthData"));
	    result.addDataSet("ds_approvalRate", (Map<String, Object>) dashboardData.get("approvalRate"));
	    result.addDataSet("ds_soldMarketRate", (Map<String, Object>) dashboardData.get("soldRate"));

	    return result;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value = "p014/getAdminDashboardInfo.do")
	public NexacroResult getAdminDashboardInfo(@ParamVariable(name="paramCode") String paramCode) {
	    NexacroResult result = new NexacroResult();
	    
	    // 1. 서비스 메소드에 paramCode를 바로 전달
	    Map<String, Object> dashboardData = p014AccountService.getAdminDashboardInfo(paramCode);

	    // 2. 서비스에서 받은 데이터를 각각의 데이터셋으로 분리 (기존과 동일)
	    result.addDataSet("ds_totalUserCount", (Map<String, Object>) dashboardData.get("totalUserCount"));
	    result.addDataSet("ds_monthlyTransactions", (List<Map<String, Object>>) dashboardData.get("monthlyTransactions"));
	    result.addDataSet("ds_growthData", (Map<String, Object>) dashboardData.get("growthData"));
	    result.addDataSet("ds_approvalRate", (Map<String, Object>) dashboardData.get("approvalRate"));
	    result.addDataSet("ds_monthlyProcessingTime", (List<Map<String, Object>>) dashboardData.get("monthlyProcessingTime"));

	    return result;
	}
	
	@RequestMapping(value = "p014/updatePW.do")
	public NexacroResult updatePW(@ParamVariable(name="paramPW") String paramPW, @ParamVariable(name="paramID") String paramID) {
		
		Map<String, Object> searchMap = new HashMap<String, Object>();
		searchMap.put("paramID", paramID);
		searchMap.put("paramPW", paramPW);
		
		p014AccountService.updatePW(searchMap);
		
		NexacroResult result = new NexacroResult();
		return result;
	}
}
