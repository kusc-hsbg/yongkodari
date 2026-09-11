@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 연코다리 사이트를 실행합니다. 이 창을 닫으면 사이트도 종료됩니다.
start "" http://localhost:8137/index.html
where python >nul 2>nul
if %errorlevel%==0 (
    python -m http.server 8137
) else (
    "C:\Users\HYE\anaconda3\python.exe" -m http.server 8137
)
