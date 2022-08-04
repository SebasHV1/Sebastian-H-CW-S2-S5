<?php
    function generar_pimienta(){
        $caracteres = str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
        
        $partes_pimienta=array_rand($caracteres,2);
        $pimienta=$caracteres[$partes_pimienta[0]].$caracteres[$partes_pimienta[1]];
        return $pimienta;
    }

    function generar_sal(){
        $sal=uniqid();
        return $sal;
    }

    function verificar_contra_pimienta($contra,$sal,$hash_guardado,$Pim){
        $caracteres = str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    
        for($i=0; $i<count($caracteres);$i++){
            for($j=0;$j<count($caracteres);$j++){
                $pimienta=$caracteres[$j].$caracteres[$i];
                if(hash("sha256",$contra . $Pim . $sal)=== $hash_guardado){
                    return true;
                }
            }
            
        }
        return false;
    }
?>