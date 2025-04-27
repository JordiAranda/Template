@echo off
echo Iniciando el proceso de commit y push...

:: Verificar si hay cambios en el repositorio
git status

:: Añadir todos los cambios al staging area
git add .

:: Hacer commit con un mensaje
set /p commitMessage=Ingrese el mensaje de commit: 
git commit -m "%commitMessage%"

:: Subir los cambios a la rama main
git push origin main

echo Proceso completado.
pause
