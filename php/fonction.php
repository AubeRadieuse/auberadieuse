<?php
/*
Neoterranos & LkY
Page fonctions.php

Contient quelques fonctions globales.

Quelques indications : (utiliser l'outil de recherche et rechercher les mentions donnÃ©es)

Liste des fonctions :
--------------------------
sqlquery($requete,$number)
connexionbdd()
actualiser_session()
vider_cookie()
--------------------------


Liste des informations/erreurs :
--------------------------
Mot de passe de session incorrect
Mot de passe de cookie incorrect
L'id de cookie est incorrect
--------------------------
*/

function sqlquery($requete, $number)
{
	$query = mysql_query($requete) or exit('Erreur SQL : '.mysql_error().' Ligne : '. __LINE__ .'.'); //requête
	queries();

	/*
	Deux cas possibles ici :
	Soit on sait qu'on a qu'une seule entrée qui sera
	retournée par SQL, donc on met $number à 1
	Soit on ne sait pas combien seront retournées,
	on met alors $number à 2.
	*/

	if($number == 1)
	{
		$query1 = mysql_fetch_assoc($query);
		mysql_free_result($query);
		/*mysql_free_result($query) libère le contenu de $query, je
		le fais par principe, mais c'est pas indispensable.*/
		return $query1;
	}

	else if($number == 2)
	{
		while($query1 = mysql_fetch_assoc($query))
		{
			$query2[] = $query1;
			/*On met $query1 qui est un array dans $query2 qui
			est un array. Ca fait un array d'arrays :o*/
		}
		mysql_free_result($query);
		return $query2;
	}

	else //Erreur
	{
		exit('Argument de sqlquery non renseigné ou incorrect.');
	}
}
?>
