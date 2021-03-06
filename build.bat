@echo off
SET build_path=%cd%
set QNX_PATH=C:\Tools\qnx700
call %QNX_PATH%\qnxsdp-env.bat 1>nul

@echo off
cd %build_path%
if "%~1"=="clean" (
    make clean
    make -j8 BUILD_PROFILE=debug all
)

if "%~1"=="Ldra" (
    make GenLdra
)

if "%~1"=="UtEnv" (
    make GenLdra
)

if "%~1"=="all" (
    make -j8 BUILD_PROFILE=debug all
)


@echo off
cd %build_path%
