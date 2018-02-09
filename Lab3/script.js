
function ajouterContenu(message)
{
	document.getElementById("resultat");
	document.getElementById("resultat").innerHTML += message + "Total";
}

function viderContenu()
{	
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("resultat").style.textAlign = "center";
}
//Exercice#1
function Exercice()
{
	viderContenu();
	
	var Total;
	var cpt;
	var Nbr;
	
	Nbr = parseInt(prompt("Entrez un Nombre :"));
		
	for(cpt =0; cpt <13; cpt++)
	{
		Total = Nbr *cpt;
		message = Nbr + " * " + cpt + " = " + Total;
		ajouterContenu(message);
	}
}
//Exercice#2
function Calculer()
{
	var Total;
	var Nbr1;
	var Nbr2;
	var Operateur;
	Saisir();
	Addition();
	Soustraction();
	Multiplication();
	Division();
	Continuer();
}
//Fonctions
function Saisir()
{
	Nbr1=prompt("Veuillez entrer le premier nombre")
	Operateur=prompt("Veuillez entrer l'Opérateur : ( +,-,*,/ )")
	Nbr2=prompt("Veuillez entrer le deuxième nombre")
}	
function Addition()
{
	if(Operateur == "+")
	{
		Nbr1 = parseInt(Nbr1);
		Nbr2 = parseInt(Nbr2);
		Total = (Nbr1+Nbr2); 
		alert("Le résultat est  :" +Total);
	}
}
function Soustraction()
{	
	if(Operateur == "-")
	{
		Nbr1 = parseInt(Nbr1);
		Nbr2 = parseInt(Nbr2);
		Total = Nbr1-Nbr2;
		alert("Le résultat est  :" +Total);
	}
}
function Multiplication()
{
	if(Operateur == "*")
	{
		Total = Nbr1*Nbr2;
		alert("Le résultat est  :" +Total);
	}
}
function Division()
{
	if((Operateur == "/")&&(Nbr2 >0))
	{
		Total = Nbr1/Nbr2;
		alert("Le résultat est  :" +Total);
	}
	else if((Operateur == "/")&&(Nbr2 == 0))
	{
		alert("La division par zéro est impossible");
	}
}
function Continuer()
{
	var Continue;
	Continue = confirm("Voulez-vous continuer?")
	
	if(Continue == true)
	{
		Calculer()
	}
	else
	{
		alert("Au revoir et bonne journée!")
	}
}
function ajouterContenu1(message)
{
	document.getElementById("resultat");
	document.getElementById("resultat").innerHTML += message;
}

function viderContenu1()
{	
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("resultat").style.textAlign = "center";
}
//Exercice#3

function MapFilter()
{	
	var array = [10, 20, 30, 40];
	const map = array.map(x => x + 5)
	console.log(map);
	
	var noms = ['Tupac', 'Nas' ,'Draven','Spotify' ,'Flatulence' ,'Les_Simpsons'];
	const result = noms.filter(noms => noms.length > 3);
	console.log(result);
	alert("Le tableau des chiffres de base : " +array+ " et avec les chiffres + 5 : " +map);
	alert("Le tableau des Noms : " +noms+ " et avec minimum 4 lettres : " +result);
}
	
//Exercice#4
function illuminati()
{
	viderContenu1();
	
	var Pyramide;
	var Etoile;
	Etoile = prompt("Entrez le nombres de ligne d'étoiles désiré ! :");
	
	
	for(cpt =0; cpt <= Etoile; cpt++)
	{
		Pyramide = Etoile;
		String(Pyramide)
		Pyramide = "*";

		message = Pyramide;
		ajouterContenu1(message);
	}
}
