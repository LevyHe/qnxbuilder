@echo off
SET build_path=%cd%
set QNX_PATH=C:\Tools\qnx700

call %QNX_PATH%\qnxsdp-env.bat 1>nul

@echo off
cd %build_path%
make -j4 clean
make BUILD_PROFILE=debug all

@echo off
cd %build_path%
