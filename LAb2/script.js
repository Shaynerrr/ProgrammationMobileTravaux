function Exercice1()
{
	//Écrivez ici le code pour l'exercice 1
	
	var choco
	
	choco = confirm("Aimez-vous le Chocolat?");
	if(choco == true)
	{ 
		choco = prompt ("Quel est votre marque préféré?");
	}
	else
	{
		alert("surprise!!!");
	}
}

function Exercice2()
{	
	var generation;
	generation=prompt("Quel est votre Année de naissance?");	
	
	if(generation < 1930)
	{
		alert("Non spécifiée!");
	}
	else if (generation > 1930 && generation < 1946)
	{
		alert("Vétérans");
	}
	else if (generation > 1946 && generation < 1964)
	{
		alert("Baby-boomers");
	}
	else if (generation > 1965 && generation < 1976)
	{
		alert("Génération X");
	}
	else if (generation > 1977 && generation < 1991)
	{
		alert("Génération Y");
	}
	else(generation>1992)
	{
		alert("Génération Z");
	}
}

function Exercice3()
{
	//Écrivez ici le code pour l'exercice 3
	
	var tabfilm = new Array(3);
	tabfilm[0]="Kill Bill";
	tabfilm[1]="Fast&Furious";
	tabfilm[2]="Wolf of Wall Street";
	var choix
	
	choix = prompt("entrez le chiffre de \n1- Kill Bill \n2- Fast&Furious \n3- Wolf of Wall Street")
	
	switch(choix)
	{
		case "1":
			alert("Très bon choix :" +tabfilm[0]);
		    break;
		case "2":
			alert("Un classic :" +tabfilm[1]);
		    break;
		case "3":
			alert("Vive les années 90 :" +tabfilm[2]);
			break;
		default:
		    alert("Saisie invalide");
			break;
	}
}

function Exercice4()
{
	//Code à corriger de l'exercice 4
	
	var nom;
	var age;
	var majeur;
	var choix;
	
	nom = prompt("Quel est votre nom?");
	majeur = confirm("Êtes-vous majeur(e)?");
	age = prompt("Quel est votre âge?");
	
	if(majeur && age > 17)
	{
		alert("Vous dites la vérité!");
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	choix = prompt("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters" + 
					"\n 3 - Les RTS \n 4 - Les MOBA")
	
	switch(choix)
	{
		case "1": 
			alert(nom + " a " + age + "ans et préfère les jeux de rôles!");
			break;
		case "2":
			alert(nom + " a " + age + "ans et préfère les jeux de tirs!")
			break;
		case "3":
			alert(nom + " a " + age + "ans et préfère les jeux de stratégies!");
			break;
		case "4":
			alert(nom + " a " + age + "ans et préfère les jeux d'arènes de combat!");
			break;
		default:
			alert(nom + " a " + age + "ans et ne sait pas entrer un chiffre entre 1 et 4!");
	}
}

function Exercice5()
{
	//Écrivez ici le code pour l'exercice 5

	var Nom;
	var Satisfait;
	Nom = prompt("Quel est votre prénom?")
	choix = prompt("Quel est votre champion préféré a League of Legends? \n1-DRAVEN \n2-DRAAAVEN \n3-DRRAAAVEEEEN!!!!")
	
	switch(choix)
	{
		case"1":
			alert("Felicitation " + Nom + " Vous etes un ALPHA")
			break;
		case"2":
			alert("Felicitation " + Nom + " Vous etes un SUR ALPHA")
			break;
		case"3":
			alert("Felicitation " + Nom + " Vous etes un SUR ALPHAMALE Like Tyler1")
			break;
		default:
			alert(Nom + " Seulement Draaaaven a le prestige d'être le favori tous les autres méritent d'être tower dive!!");
	}
	Skin = prompt("Quel est le plus beau skin de draven? (Les autres sont Dégeulasse)\n1-Soul Reaver Draven \n2-Gladiator Draven \n3-Draven Draven \n4-Primetime Draven")
	
	switch(Skin)
	{
		case"1":
			alert("Pas un mauvais choix " + Nom )
			break;
		case"2":
			alert("Mon préféré également!! " + Nom )
			break;
		case"3":
			alert("De loin le plus DoucheBag " + Nom )
			break;
		case"4":
			alert("De loin le plus laid des choix aucun gout " + Nom )
			break;
		default:
			alert(Nom + "Ne jamais Manquer de respect a Draven sinon run it down mid#PermaBan");
	}	
	Satisfait = confirm("Avez-Vous aimer le Sondage?");
	
		if(Satisfait == true)
		{
		alert("Vous avez un IQ d'au moin 200");
		}
		else
		{
		alert("Unistall League vous ne connaiser rien au jeu");
		}	
	
}