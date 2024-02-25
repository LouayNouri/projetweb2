<?php
if(isset($_GET["name"])&& isset($_GET["prenom"]) && isset($_GET["email"]) && isset($_GET["tel"]) && isset($_GET["adresse"]) && isset($_GET["codepostal"]) )
{
    if(!empty($_GET["adresse"])&& !empty($_GET["name"])&& !empty($_GET["prenom"])&& !empty($_GET["email"]) && !empty($_GET["tel"]) && !empty($_GET["codepostal"]))
    {
        $name=$_GET["name"];
        //echo $name ; 
    
        $prenom=$_GET["prenom"];
        //echo $prenom ; 
    
        $email=$_GET["email"];
        //echo $email ; 
    
        $tel=$_GET["tel"];
        //echo $tel ; 
    
        $adresse=$_GET["adresse"];
        //echo $adresse ; 
    
        $codepostal=$_GET["codepostal"];
        //echo $codepostal ; 

        echo '<table border = "2">';
        echo '<tr>';

        echo '<td>';
        echo "Nom" ; 
        echo '</td>';

        echo '<td>';
        echo "Prenom" ; 
        echo '</td>';

        echo '<td>';
        echo "Email" ; 
        echo '</td>';

        echo '<td>';
        echo "Tel" ; 
        echo '</td>';

        echo '<td>';
        echo "Adresse" ; 
        echo '</td>';

        echo '<td>';
        echo "Code Postal" ; 
        echo '</td>';

        echo '</tr>';

     echo '<tr>';

     echo '<td>';
     echo $name ; 
     echo '</td>';

     echo '<td>';
     echo $prenom ; 
     echo '</td>';

     echo '<td>';
     echo $email ; 
     echo '</td>';

     echo '<td>';
     echo $tel ; 
     echo '</td>';

     echo '<td>';
     echo $adresse ; 
     echo '</td>';

     echo '<td>';
     echo $codepostal ; 
     echo '</td>';

     echo '</tr>';


        echo '</table>';

    }
    else 
    {
        echo "Champs manquants !";
    }

}


?>