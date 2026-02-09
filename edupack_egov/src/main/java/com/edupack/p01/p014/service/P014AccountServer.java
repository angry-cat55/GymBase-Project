package com.edupack.p01.p014.service;

import java.util.List;
import java.util.Map;

public interface P014AccountServer {

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

	void changeFavoriteInfo(Map<String, Object> searchMap);

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

	void updateAccountInfo(Map<String, Object> accountInfo);

	List<Map<String, Object>> getMyMarketList(String paramID);

	List<Map<String, Object>> getMyMembershipList(String paramID);

	void processPurchase(Map<String, Object> searchMap);

	int getNotificationCount(String paramID);

	List<Map<String, Object>> getNotifications(String paramID);

	void updateIsRead(Map<String, Object> searchMap);

	List<Map<String, Object>> getMyGymInfo(String paramID);

	void updateGymInfo(Map<String, Object> gymInfo);

	List<Map<String, Object>> getTransferManagementList(String paramCode);

	void transferProcess(Map<String, Object> processInfo);

	List<Map<String, Object>> getMarketCountsInfo(String paramCode);

	Map<String, Object> getDashboardInfo(String paramCode);

	String getGymName(String paramCode);

	void updateSingleNotiIsRead(Map<String, Object> searchMap);

	List<Map<String, Object>> getMyGymMachine(String paramID);

	void updateGymMachineList(Map<String, Object> machineParam);

	int insertNewGymInfo(Map<String, Object> gymInfoParam);

	List<Map<String, Object>> getMachineList();

	List<Map<String, Object>> getRejectReason(String paramCode);

	void reUploadGymInfo(Map<String, Object> gymInfo);

	List<Map<String, Object>> getCurrentInfo();
	List<Map<String, Object>> getPendingGymList();

	void updateGymStatus(Map<String, Object> updateGym);

	Map<String, Object> getSuperAdminDashboardInfo();

	Map<String, Object> getAdminDashboardInfo(String paramCode);

	String getRejectMessage(Map<String, Object> searchMap);

	void updatePW(Map<String, Object> searchMap);
}
