package com.edupack.p01.p014.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.edupack.p01.p014.mapper.P014AccountMapper;
import com.edupack.p01.p014.service.P014AccountServer;

@Service

public class P014AccountServerImpl implements P014AccountServer {
	@Resource P014AccountMapper p014AccountMapper;

	@Override
	public void setAccountInfo(Map<String, Object> accountInfo) {
		// TODO Auto-generated method stub
		p014AccountMapper.setAccountInfo(accountInfo);
	}

	@Override
	public int checkID(String strID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.checkID(strID);
	}

	@Override
	public List<Map<String, Object>> login(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.login(searchMap);
	}

	@Override
	public List<Map<String, Object>> findAccount(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.findAccount(searchMap);
	}

	@Override
	public List<Map<String, Object>> getRecentGyms() {
		// TODO Auto-generated method stub
		return p014AccountMapper.getRecentGyms();
	}

	@Override
	public List<Map<String, Object>> getRecentMarkets() {
		// TODO Auto-generated method stub
		return p014AccountMapper.getRecentMarkets();
	}

	@Override
	public List<Map<String, Object>> getRecentGymList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getRecentGymList(searchMap);
	}

	@Override
	public List<Map<String, Object>> getFavoritesGymList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getFavoritesGymList(searchMap);
	}

	@Override
	public int getGymsTotalCnt(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getGymsTotalCnt(searchMap);
	}

	@Override
	public List<Map<String, Object>> getGymInfo(String paramCode) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getGymInfo(paramCode);
	}
	@Override
	public List<Map<String, Object>> getGymMachineInfo(String paramCode) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getGymMachineInfo(paramCode);
	}
	@Override
	public int checkFavorite(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.checkFavorite(searchMap);
	}

	@Override
	public void changeFavoriteInfo(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		if ("1".equals(searchMap.get("STATUS"))) { // 즐겨찾기 등록
			p014AccountMapper.insertFavoriteInfo(searchMap);
		}
		else { // 즐겨찾기 삭제
			p014AccountMapper.deleteFavoriteInfo(searchMap);
		}
	}

	@Override
	public List<Map<String, Object>> getMyRecentGymList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyRecentGymList(searchMap);
	}
	@Override
	public List<Map<String, Object>> getMyFavoritesGymList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyFavoritesGymList(searchMap);
	}

	@Override
	public int getMyGymsTotalCnt(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyGymsTotalCnt(searchMap);
	}

	@Override
	public List<Map<String, Object>> getMarketList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMarketList(searchMap);
	}
	@Override
	public int getMarketTotalCnt(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMarketTotalCnt(searchMap);
	}

	@Override
	public List<Map<String, Object>> getMarketInfo(String paramNo) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMarketInfo(paramNo);
	}
	@Override
	public List<Map<String, Object>> getMarketCommentInfo(String paramNo) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMarketCommentInfo(paramNo);
	}

	@Override
	public void insertMarketComment(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		p014AccountMapper.insertMarketComment(searchMap);
		// 댓글 달린 유저에게 알림 데이터 삽입
		Object commentNoObj = searchMap.get("COMMENT_NO");
	    
	    if (commentNoObj != null) {
	        int newCommentNo = ((Number) commentNoObj).intValue();

	        p014AccountMapper.insertCommentNotification(newCommentNo);
	    }
	}

	@Override
	public List<Map<String, Object>> getGymList() {
		// TODO Auto-generated method stub
		return p014AccountMapper.getGymList();
	}

	@Override
	public void setNewMarket(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		p014AccountMapper.setNewMarket(searchMap);
	}

	@Override
	public void updateAccountInfo(Map<String, Object> accountInfo) {
		// TODO Auto-generated method stub
		p014AccountMapper.updateAccountInfo(accountInfo);
	}

	@Override
	public List<Map<String, Object>> getMyMarketList(String paramID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyMarketList(paramID);
	}

	@Override
	public List<Map<String, Object>> getMyMembershipList(String paramID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyMembershipList(paramID);
	}

	@Override
	public void processPurchase(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		// 1. 마켓 테이블 업데이트
	    p014AccountMapper.setMembershipBuyer(searchMap);

	    // 2. 멤버십 전환 테이블에 추가
	    p014AccountMapper.insertMembershipTransfer(searchMap);

	    // 3. 구매자에게 알림 추가 (BUY_COMPLETED)
	    p014AccountMapper.insertBuyCompletedNotification(searchMap);

	    // 4. 판매자에게 알림 추가 (SALE_COMPLETED)
	    p014AccountMapper.insertSaleCompletedNotification(searchMap);
	}

	@Override
	public int getNotificationCount(String paramID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getNotificationCount(paramID);
	}

	@Override
	public List<Map<String, Object>> getNotifications(String paramID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getNotifications(paramID);
	}

	@Override
	public void updateIsRead(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		p014AccountMapper.updateIsRead(searchMap);
	}

	@Override
	public List<Map<String, Object>> getMyGymInfo(String paramID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyGymInfo(paramID);
	}

	@Override
	public void reUploadGymInfo(Map<String, Object> gymInfo) {
		// TODO Auto-generated method stub
		p014AccountMapper.reUploadGymInfo(gymInfo);
	}
	
	@Override
	public void updateGymInfo(Map<String, Object> gymInfo) {
		// TODO Auto-generated method stub
		p014AccountMapper.updateGymInfo(gymInfo);
	}

	@Override
	public List<Map<String, Object>> getTransferManagementList(String paramCode) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getTransferManagementList(paramCode);
	}

	@Override
	public void transferProcess(Map<String, Object> processInfo) {
		// TODO Auto-generated method stub
		// 1. 양도 테이블 상태는 공통으로 업데이트
		p014AccountMapper.updateTransferStatus(processInfo);
		
		String newStatus = (String) processInfo.get("NEW_STATUS");
		
		// 2. 상태값에 따라 분기 처리
	    if ("APPROVED".equals(newStatus)) {
	        // 3-A. 승인 시: 승인 알림을 구매자, 판매자에게 각각 전송
	    	processInfo.put("USER_ID", processInfo.get("BUYER_ID"));
	        p014AccountMapper.insertApprovalNotification(processInfo);
	        
	        processInfo.put("USER_ID", processInfo.get("SELLER_ID"));
	        p014AccountMapper.insertApprovalNotification(processInfo);

	    } else if ("REJECTED".equals(newStatus)) {
	        // 3-B. 반려 시: 마켓 상태를 변경하고, 반려 알림을 각각 전송
	        p014AccountMapper.updateMarketStatusOnReject(processInfo);
	        
	        processInfo.put("USER_ID", processInfo.get("BUYER_ID"));
	        p014AccountMapper.insertRejectionNotification(processInfo);
	        
	        processInfo.put("USER_ID", processInfo.get("SELLER_ID"));
	        p014AccountMapper.insertRejectionNotification(processInfo);
	    }
	}

	@Override
	public List<Map<String, Object>> getMarketCountsInfo(String paramCode) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMarketCountsInfo(paramCode);
	}

	@Override
	public Map<String, Object> getDashboardInfo(String paramCode) {
	    Map<String, Object> resultMap = new HashMap<>();

	    // 1. 현황 정보 조회
	    List<Map<String, Object>> currentInfo = p014AccountMapper.getDashboardCurrentInfo(paramCode);
	    resultMap.put("currentInfo", currentInfo);

	    // 2. 처리 대기 목록 조회
	    List<Map<String, Object>> pendingTransfers = p014AccountMapper.getDashboardPendingTransfers(paramCode);
	    resultMap.put("pendingTransfers", pendingTransfers);

	    // 3. 최근 업무 내역 조회
	    List<Map<String, Object>> workLog = p014AccountMapper.getDashboardWorkLog(paramCode);
	    resultMap.put("workLog", workLog);

	    return resultMap;
	}

	@Override
	public String getGymName(String paramCode) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getGymName(paramCode);
	}

	@Override
	public void updateSingleNotiIsRead(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		p014AccountMapper.updateSingleNotiIsRead(searchMap);
	}

	@Override
	public List<Map<String, Object>> getMyGymMachine(String paramID) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMyGymMachine(paramID);
	}

	@Override
	@SuppressWarnings("unchecked")
	public void updateGymMachineList(Map<String, Object> machineParam) {
	    // 1. 파라미터 분리
	    String gymCode = (String) machineParam.get("gymCode");
	    Object machineDataObj = machineParam.get("machineList");

	    // 2. 가장 먼저 기존 기구 목록을 전부 삭제
	    p014AccountMapper.deleteGymMachines(gymCode);

	    // 3. 어떤 타입으로 데이터가 넘어오든, List 형태로 안전하게 변환
	    List<Map<String, Object>> fullMachineList = new ArrayList<>();
	    if (machineDataObj instanceof List) {
	        // 데이터가 여러 줄이면(List) 그대로 사용
	        fullMachineList = (List<Map<String, Object>>) machineDataObj;
	    } else if (machineDataObj instanceof Map) {
	        // 데이터가 한 줄이면(Map) List에 새로 담아줌
	        fullMachineList.add((Map<String, Object>) machineDataObj);
	    }

	    // 4. 'Y'인 기구만 필터링해서 새로 추가
	    for (Map<String, Object> machine : fullMachineList) {
	        if ("Y".equals(machine.get("IS_OWNED"))) {
	            Map<String, Object> newMachine = new HashMap<>();
	            newMachine.put("gymCode", gymCode);
	            newMachine.put("machineCode", machine.get("MACHINE_CODE"));
	            
	            p014AccountMapper.insertGymMachine(newMachine);
	        }
	    }
	}

	@Override
	public int insertNewGymInfo(Map<String, Object> gymInfoParam) {
		// TODO Auto-generated method stub
		p014AccountMapper.insertNewGymInfo(gymInfoParam);
		p014AccountMapper.updateUserGymCode(gymInfoParam);
		
		return (int) gymInfoParam.get("GYM_CODE");
	}

	@Override
	public List<Map<String, Object>> getMachineList() {
		// TODO Auto-generated method stub
		return p014AccountMapper.getMachineList();
	}

	@Override
	public List<Map<String, Object>> getRejectReason(String paramCode) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getRejectReason(paramCode);
	}

	@Override
	public List<Map<String, Object>> getCurrentInfo() {
		// TODO Auto-generated method stub
		return p014AccountMapper.getCurrentInfo();
	}

	@Override
	public List<Map<String, Object>> getPendingGymList() {
		// TODO Auto-generated method stub
		return p014AccountMapper.getPendingGymList();
	}

	@Override
	public void updateGymStatus(Map<String, Object> updateGym) {
		// TODO Auto-generated method stub
		String newStatus = (String)updateGym.get("NEW_STATUS");
	    
	    if ("APPROVE".equals(newStatus)) {
	        // [승인 처리]
	        // 1. 헬스장 상태를 'ACTIVE'로, 등록일을 현재로 업데이트
	        p014AccountMapper.approveGym(updateGym);
	        
	    } else if ("REJECT".equals(newStatus)) {
	        // [반려 처리]
	        // 1. 헬스장 상태를 'REJECTED'로 업데이트
	        p014AccountMapper.rejectGym(updateGym);
	        
	        // 2. 해당 헬스장 관리자에게 반려 알림 추가
	        p014AccountMapper.insertGymRejectionNotification(updateGym);
	    }
	}

	@Override
	public Map<String, Object> getSuperAdminDashboardInfo() {
	    Map<String, Object> resultMap = new HashMap<>();

	    // 각 데이터를 개별적으로 조회
	    Map<String, Object> totalUserCount = p014AccountMapper.getTotalUserCount();
	    Map<String, Object> totalGymCount = p014AccountMapper.getTotalActiveGymCount();
	    List<Map<String, Object>> monthlyNewUsers = p014AccountMapper.getMonthlyNewUserStats();
	    List<Map<String, Object>> monthlyNewGyms = p014AccountMapper.getMonthlyNewGymStats();
	    List<Map<String, Object>> top5Gyms = p014AccountMapper.getTop5GymsByTransaction();
	    Map<String, Object> growthData = p014AccountMapper.getTotalTransactionGrowthMoM();
	    Map<String, Object> approvalRate = p014AccountMapper.getTotalApprovalRate();
	    Map<String, Object> soldRate = p014AccountMapper.getTotalSoldRate();

	    // R6. 증감률 계산 로직 추가
	    long current = (long) growthData.get("CURRENT_MONTH_COUNT");
	    long previous = (long) growthData.get("PREVIOUS_MONTH_COUNT");
	    String growthPercent = "";
	    if (previous > 0) {
	        double rate = ((double)(current - previous) / previous) * 100;
	        growthPercent = String.format("%+.0f%%", rate);
	    } else {
	        growthPercent = "N/A";
	    }
	    growthData.put("GROWTH_PERCENT", growthPercent);

	    // 최종 결과를 Map에 담기
	    resultMap.put("totalUserCount", totalUserCount);
	    resultMap.put("totalGymCount", totalGymCount);
	    resultMap.put("monthlyNewUsers", monthlyNewUsers);
	    resultMap.put("monthlyNewGyms", monthlyNewGyms);
	    resultMap.put("top5Gyms", top5Gyms);
	    resultMap.put("growthData", growthData);
	    resultMap.put("approvalRate", approvalRate);
	    resultMap.put("soldRate", soldRate);

	    return resultMap;
	}
	
	public Map<String, Object> getAdminDashboardInfo(String gymCode) {
	    Map<String, Object> resultMap = new HashMap<>();

	    // 각 데이터를 개별적으로 조회
	    Map<String, Object> totalUserCount = p014AccountMapper.getTotalUserCount();
	    List<Map<String, Object>> monthlyTransactions = p014AccountMapper.getMonthlyTransactionStats(gymCode);
	    Map<String, Object> growthData = p014AccountMapper.getTransactionGrowthMoM(gymCode);
	    Map<String, Object> approvalRate = p014AccountMapper.getTransferApprovalRate(gymCode);
	    List<Map<String, Object>> monthlyProcessingTime = p014AccountMapper.getMonthlyProcessingTimeStats(gymCode);

	    // R4. 증감률 계산 로직 추가
	    long current = (long) growthData.get("CURRENT_MONTH_COUNT");
	    long previous = (long) growthData.get("PREVIOUS_MONTH_COUNT");
	    String growthPercent = "";
	    if (previous > 0) {
	        double rate = ((double)(current - previous) / previous) * 100;
	        growthPercent = String.format("%+.0f%%", rate);
	    } else {
	        growthPercent = "N/A";
	    }
	    growthData.put("GROWTH_PERCENT", growthPercent);

	    // 최종 결과를 Map에 담기
	    resultMap.put("totalUserCount", totalUserCount);
	    resultMap.put("monthlyTransactions", monthlyTransactions);
	    resultMap.put("growthData", growthData);
	    resultMap.put("approvalRate", approvalRate);
	    resultMap.put("monthlyProcessingTime", monthlyProcessingTime);

	    return resultMap;
	}

	@Override
	public String getRejectMessage(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return p014AccountMapper.getRejectMessage(searchMap);
	}

	@Override
	public void updatePW(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		p014AccountMapper.updatePW(searchMap);
	}
}
