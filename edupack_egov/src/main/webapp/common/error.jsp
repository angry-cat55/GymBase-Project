<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서버 오류</title>
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
            color: #e74c3c;
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
        }
        .back-button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="error-container">
        <p class="error-code">500</p>
        <h1 class="error-title">서버 오류가 발생했습니다</h1>
        <p class="error-message">
            죄송합니다. 현재 서버에 문제가 발생하여 요청을 처리할 수 없습니다.<br>
            잠시 후 다시 시도해 주시기 바랍니다.
        </p>
        
        <% if(request.getParameter("showDetails") != null && request.getParameter("showDetails").equals("true")) { %>
            <div class="error-details">
                <strong>오류 메시지:</strong> <%= exception != null ? exception.getMessage() : "알 수 없는 오류" %><br>
                <% if(exception != null) { %>
                    <strong>오류 타입:</strong> <%= exception.getClass().getName() %><br>
                    <strong>스택 트레이스:</strong><br>
                    <% 
                    for(StackTraceElement element : exception.getStackTrace()) {
                        out.println(element.toString() + "<br>");
                    }
                    %>
                <% } %>
            </div>
        <% } %>

        <button class="back-button" onclick="window.history.back()">이전 페이지로 돌아가기</button>
    </div>

    <script>
        console.error("서버 오류가 발생했습니다: <%= exception != null ? exception.getMessage() : "알 수 없는 오류" %>");
    </script>
</body>
</html>