@echo off
cd /d "%~dp0"
call npm run build:portable
if errorlevel 1 (
    echo.
    echo Falha ao gerar o executavel portatil.
    pause
    exit /b 1
)
echo.
echo Executavel portatil gerado na pasta dist.
pause
