function comando(e){
    document.getElementById('sound').play();
    switch (e){
        case 'cd':
            document.getElementById("texto").innerHTML= "CD [Unidad:] [ruta]";
            document.getElementById("desc").innerHTML= "Cambia el directorio activo<BR><br>&bsol;d   Cambia la unidad activa y el directorio actual de la unidad<br><BR>Ejemplo:<br>C:&bsol;>cd usuarios&bsol;Desktop&bsol;cosas</h6>";
            var url = "Pictures/cd.PNG";
            break;
        case 'rd':
            document.getElementById("texto").innerHTML= "RD [Unidad:] ruta";
            document.getElementById("desc").innerHTML= "Borrado del directorios<BR><br>&bsol;s   Elimina un árbol de directorios, incluyendo el directorio especificado, todos los subdirectorios, y archivos<br><br>&bsol;q   No solicita confirmación para eliminar el árbol de directorios. Solo funciona con &bsol;s<br><BR>Ejemplo:<br>C:&bsol;>rd usuarios&bsol;Desktop&bsol;cosas";
            var url = "Pictures/rd.PNG";
            break;
        case 'type':
            document.getElementById("texto").innerHTML= "TYPE [Unidad:] [ruta]nombrearchivo";
            document.getElementById("desc").innerHTML= "Visualiza el contenido del archivo<BR><BR>Ejemplo:<br>C:&bsol;>TYPE desktop.ini";
            var url = "Pictures/type.PNG";
            break;
            break;
        case 'md':
            document.getElementById("texto").innerHTML= "MD [Unidad:] ruta";
            document.getElementById("desc").innerHTML= "Crea un directorio<BR><BR>Ejemplo:<br>C:&bsol;>MD usuarios&bsol;Desktop&bsol;carpeta";
            var url = "Pictures/md.PNG";
            break;
        case 'dir':
            document.getElementById("texto").innerHTML= "DIR [Unidad:] [ruta] [nombrearchivo]s";
            document.getElementById("desc").innerHTML= "Visualiza el contenido de un directorio<BR><br>&bsol;p   Muestra una pantalla de la lista a la vez. Para ver la siguiente pantalla, presione cualquier tecla.<br><br>&bsol;q   Muestra información de propiedad del archivo.<br><BR>Ejemplo:<br>C:&bsol;>DIR usuarios&bsol;Desktop&bsol;cosas";
            var url = "Pictures/dir.PNG";
             break;
        case 'copycon':
            document.getElementById("texto").innerHTML= "COPY CON [Unidad:] [ruta]nombrearchivo<br>...<br>...<br>^z";
            document.getElementById("desc").innerHTML= "Crea un archivo<BR><BR>Ejemplo:<br>C:&bsol;>COPY CON usuarios&bsol;Desktop&bsol;cosas DOCUMENTO.TXT<br>hola<br>segunda linea<br>^z<br>";
            var url = "Pictures/copy_con.PNG";
            break;
        case 'del':
            document.getElementById("texto").innerHTML= "DEL [Unidad:] [ruta] nombrearchivo";
            document.getElementById("desc").innerHTML= "Borra un archivo<BR><br>&bsol;p   Solicita confirmación antes de eliminar el archivo especificado.<br><BR>Ejemplo:<br>C:&bsol;>DIR usuarios&bsol;Desktop&bsol;cosas";
            var url = "Pictures/del.PNG";
            break;
        case 'copy':
            document.getElementById("texto").innerHTML= "COPY origen destino <br>origen [Unidad:] [ruta] nombrearchivo<br>destino [Unidad:] [ruta] [nombrearchivo]";
            document.getElementById("desc").innerHTML= "Copia un archivo<BR><br>&bsol;v   Comprueba que los nuevos archivos están escritos correctamente.<br><BR>Ejemplo:<br>C:\>COPY usuarios&bsol;Desktop&bsol;cosas&bsol;DOCUMENTO.TXT usuarios&bsol;Desktop&bsol;archivos&bsol;copia.txt";
            var url = "Pictures/copy.PNG";
            break;
        case 'move':
            document.getElementById("texto").innerHTML= "MOVE origen destino <br>origen [Unidad:] [ruta] nombrearchivo<br>destino [Unidad:] [ruta]";
            document.getElementById("desc").innerHTML= "Mueve un archivo<BR><BR>Ejemplo:<br>C:&bsol;>MOVE usuarios&bsol;Desktop&bsol;cosas&bsol;DOCUMENTO.TXT usuarios&bsol;Desktop&bsol;archivos";
            var url = "Pictures/move.PNG";
            break;
        case 'ren':
            document.getElementById("texto").innerHTML= "REN [Unidad:] [ruta] nombrearchivo nombrearchivo";
            document.getElementById("desc").innerHTML= "Cambia el nombre a un archivo<BR><BR>Ejemplo:<br>C:&bsol;>REN usuarios&bsol;Desktop&bsol;cosas&bsol;DOCUMENTO.TXT NUEVONOMBRE.TXT";
            var url = "Pictures/ren.PNG";
            break;
        case 'tree':
            document.getElementById("texto").innerHTML= "Tree [Unidad:] [ruta] [nombrearchivo]";
            document.getElementById("desc").innerHTML= "Visualiza el árbol de un directorio<BR><br>&bsol;f   cMuestra los nombres de los archivos de cada directorio<br><BR>Ejemplo:<br>C:&bsol;>TREE usuarios&bsol;Desktop</code>";
            var url = "Pictures/tree.PNG";
            break;
        case 'cls':
            document.getElementById("texto").innerHTML= "CLS";
            document.getElementById("desc").innerHTML= "Limpia la pantalla<BR><BR>Ejemplo:<br>C:&bsol;>CLS";
            var url = "Pictures/cls.PNG";
            break;  
        default:
            text="No hay variable";
    }
    
			
        document.getElementsByTagName("img")[0].setAttribute("src",url);
    }
