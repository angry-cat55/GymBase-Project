<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지를 찾을 수 없음</title>
    <style>
        body {
            font-family: 'Malgun Gothic', 'Segoe UI', sans-serif;
            background-color: #f5f5f5;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }
        .error-container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            padding: 30px;
            text-align: center;
        }
        .error-code {
            font-size: 72px;
            font-weight: bold;
            color: #3498db;  /* 404는 파란색 계열로 변경 */
            margin: 0;
        }
        .error-title {
            font-size: 24px;
            margin: 10px 0 20px;
        }
        .error-message {
            color: #666;
            margin-bottom: 30px;
            line-height: 1.5;
        }
        .error-details {
            background-color: #f9f9f9;
            border: 1px solid #eaeaea;
            border-radius: 4px;
            padding: 15px;
            margin-bottom: 20px;
            text-align: left;
            overflow: auto;
            max-height: 150px;
        }
        .back-button {
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-right: 10px;
        }
        .home-button {
            background-color: #2ecc71;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .back-button:hover {
            background-color: #2980b9;
        }
        .home-button:hover {
            background-color: #27ae60;
        }
        .buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <p class="error-code">404</p>
        <h1 class="error-title">페이지를 찾을 수 없습니다</h1>
        <p class="error-message">
            죄송합니다. 요청하신 페이지를 찾을 수 없습니다.<br>
            URL을 다시 확인하시거나 다른 페이지로 이동해 주세요.
        </p>
        
        <% 
        String uri = (String)request.getAttribute("javax.servlet.error.request_uri");
        if(uri == null) {
            uri = request.getRequestURI();
        }
        %>
        
        <% if(request.getParameter("showDetails") != null && request.getParameter("showDetails").equals("true")) { %>
            <div class="error-details">
                <strong>요청 URL:</strong> <%= uri %><br>
                <strong>상태 코드:</strong> 404<br>
                <strong>오류 메시지:</strong> 페이지를 찾을 수 없습니다
            </div>
        <% } %>

        <div class="buttons">
            <button class="back-button" onclick="window.history.back()">이전 페이지</button>
            <button class="home-button" onclick="window.location.href='/'">홈으로</button>
        </div>
    </div>

    <script>
        console.error("404 에러: 요청한 페이지를 찾을 수 없습니다 - <%= uri %>");
    </script>
</body>
</html>