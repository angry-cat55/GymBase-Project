package com.edupack.p01.p014.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper

public interface P014AccountMapper {

	void setAccountInfo(Map<String, Object> accountInfo);

	int checkID(String strID);

	List<Map<String, Object>> login(Map<String, Object> searchMap);

	List<Map<String, Object>> findAccount(Map<String, Object> searchMap);

	List<Map<String, Object>> getRecentGyms();
	List<Map<String, Object>> getRecentMarkets();

	List<Map<String, Object>> getRecentGymList(Map<String, Object> searchMap);
	List<Map<String, Object>> getFavoritesGymList(Map<String, Object> searchMap);

	int getGymsTotalCnt(Map<String, Object> searchMap);

	List<Map<String, Object>> getGymInfo(String paramCode);
	List<Map<String, Object>> getGymMachineInfo(String paramCode);
	int checkFavorite(Map<String, Object> searchMap);

	void insertFavoriteInfo(Map<String, Object> searchMap);
	void deleteFavoriteInfo(Map<String, Object> searchMap);

	List<Map<String, Object>> getMyRecentGymList(Map<String, Object> searchMap);
	List<Map<String, Object>> getMyFavoritesGymList(Map<String, Object> searchMap);

	int getMyGymsTotalCnt(Map<String, Object> searchMap);

	List<Map<String, Object>> getMarketList(Map<String, Object> searchMap);
	int getMarketTotalCnt(Map<String, Object> searchMap);

	List<Map<String, Object>> getMarketInfo(String paramNo);
	List<Map<String, Object>> getMarketCommentInfo(String paramNo);

	void insertMarketComment(Map<String, Object> searchMap);

	List<Map<String, Object>> getGymList();

	void setNewMarket(Map<String, Object> searchMap);

	void setMembershipBuyer(Map<String, Object> searchMap);
	void insertMembershipTransfer(Map<String, Object> searchMap);

	void updateAccountInfo(Map<String, Object> accountInfo);

	List<Map<String, Object>> getMyMarketList(String paramID);

	List<Map<String, Object>> getMyMembershipList(String paramID);

	void insertBuyCompletedNotification(Map<String, Object> searchMap);
	void insertSaleCompletedNotification(Map<String, Object> searchMap);

	int getNotificationCount(String paramID);

	List<Map<String, Object>> getNotifications(String paramID);

	void insertCommentNotification(int newCommentNo);

	void updateIsRead(Map<String, Object> searchMap);

	List<Map<String, Object>> getMyGymInfo(String paramID);

	void updateGymInfo(Map<String, Object> gymInfo);

	List<Map<String, Object>> getTransferManagementList(String paramCode);

	void updateTransferStatus(Map<String, Object> processInfo);
	void insertApprovalNotification(Map<String, Object> processInfo);
	void updateMarketStatusOnReject(Map<String, Object> processInfo);
	void insertRejectionNotification(Map<String, Object> processInfo);

	List<Map<String, Object>> getMarketCountsInfo(String paramCode);

	List<Map<String, Object>> getDashboardCurrentInfo(String paramCode);
	List<Map<String, Object>> getDashboardPendingTransfers(String paramCode);
	List<Map<String, Object>> getDashboardWorkLog(String paramCode);

	String getGymName(String paramCode);

	void updateSingleNotiIsRead(Map<String, Object> searchMap);

	List<Map<String, Object>> getMyGymMachine(String paramID);

	void deleteGymMachines(String gymCode);
	void deleteGymMachines1(String gymCode);
	void insertGymMachine(Map<String, Object> newMachine);

	void insertNewGymInfo(Map<String, Object> gymInfoParam);
	void updateUserGymCode(Map<String, Object> gymInfoParam);

	List<Map<String, Object>> getMachineList();

	List<Map<String, Object>> getRejectReason(String paramCode);

	void reUploadGymInfo(Map<String, Object> gymInfo);

	List<Map<String, Object>> getCurrentInfo();
	List<Map<String, Object>> getPendingGymList();

	void approveGym(Map<String, Object> updateGym);
	void rejectGym(Map<String, Object> updateGym);
	void insertGymRejectionNotification(Map<String, Object> updateGym);

	Map<String, Object> getTotalUserCount();
	Map<String, Object> getTotalActiveGymCount();
	List<Map<String, Object>> getMonthlyNewUserStats();
	List<Map<String, Object>> getMonthlyNewGymStats();
	List<Map<String, Object>> getTop5GymsByTransaction();
	Map<String, Object> getTotalTransactionGrowthMoM();
	Map<String, Object> getTotalApprovalRate();
	Map<String, Object> getTotalSoldRate();

	List<Map<String, Object>> getMonthlyTransactionStats(String gymCode);
	Map<String, Object> getTransactionGrowthMoM(String gymCode);
	Map<String, Object> getTransferApprovalRate(String gymCode);
	List<Map<String, Object>> getMonthlyProcessingTimeStats(String gymCode);

	String getRejectMessage(Map<String, Object> searchMap);

	void updatePW(Map<String, Object> searchMap);
}
