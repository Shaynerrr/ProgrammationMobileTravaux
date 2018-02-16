//Exercice#1
function Numero1()
{
	function Debut()
	{
		
		Accent = prompt("Entrez une lettre désiré entre (à, è, ù, é, ü, ï)");
	}
	var Accent;
	var PasAccent;
	var TabAccent = new Array(5);
	
	Accent = prompt("Entrez une lettre désiré entre (à, è, ù, é, ü, ï)"); 
	
	if(Accent == "à")
	{
		Accent = "a";
		PasAccent = Accent;
	}
	else if(Accent == "è")
	{
		Accent = "e";
		PasAccent = Accent;
	}
	else if(Accent == "ù")
	{
		Accent = "u";
		PasAccent = Accent;
	}
	else if(Accent == "é")
	{
		Accent = "e";
		PasAccent = Accent;
	}
	else if(Accent == "ü")
	{
		Accent = "u";
		PasAccent = Accent;
	}
	else if(Accent == "ï")
	{
		Accent = "i";
		PasAccent = Accent;
	}
	else
	{
		Debut()
	}
	TabAccent = [PasAccent];
	alert("Voici le tableau avec le bon résultat :" +TabAccent);
}

function numero2()
{	
	var Etudiant =
	{
		nom :  "TREMBLAY",
		prenom :  "SHAYNE",
		DateNaissance :  "31/03/1995",	
		Codepermanant: function ()
		{
			return this.nom.substring(0,3) +  this.prenom.substring(0,2) +  this.DateNaissance.substring(0,2) +  this.DateNaissance.substring(3,5) +  this.DateNaissance.substring(8,11) +  this.DateNaissance.substring(3,5);
		}
	}

	alert("Le Code permanant de l'étudiant est " +Etudiant.Codepermanant());
}
function numero3()
{		
	var Voiture =
	{
		marque : "Subaru",
		anneefabric : "2016",
		couleur : "rouge",
		kilometrage : 20000,
		autocollant : function()
		{
			return this.autocollant;
		}
	}
	Voiture.autocollant();
	alert("La marque de la voiture est :" +Voiture.marque);
	alert("L'année de fabrication de la voiture est :" +Voiture.anneefabric);
	alert("La couleur de la voiture est :" +Voiture.couleur);
	alert("Le kilomètrage de la voiture est :" +Voiture.kilometrage);
	alert("L'autocollant de la voiture est :" +Voiture.autocollant);
}
function numero4()
{
	var Contact = new Array(4);

	var Contact1 =
	{
		prenom : "Nas",
		Nom : "Nasty",
		adresse : "40st side Queens",
		telephone : "(418)-545-0787",	
	}

	var Contact2 =
	{
		prenom : "Jeremy",
		Nom : "Gabriel",
		adresse : "2222 Rue des artistes populaires",
		telephone : "(418)-545-0999",
	}

	var Contact3 =
	{
		prenom : "Hommer",
		Nom : "Simpsons",
		adresse : "342 rue des jaune",
		telephone : "(418)-545-1243",
	}
	

	var Contact4 =
	{
		prenom : "Albert",
		Nom : "Johnson",
		adresse : "41t side Queens",
		telephone : "(418)-543-0147",
	}

	var Contact5 =
	{
		prenom : "Michel",
		Nom : "Terrien",
		adresse : "48 rue des sans emplois",
		telephone : "(418)-546-0917",
		
	}
	for(var key in Contact1)
		{
			Contact.push(Contact1[key]+"\n");
		}
	for(var key in Contact2)
		{
			Contact.push(Contact2[key]+"\n");
		}
	for(var key in Contact3)
		{
			Contact.push(Contact3[key]+"\n");
		}
	for(var key in Contact4)
		{
			Contact.push(Contact4[key]+"\n");
		}
	for(var key in Contact5)
		{
			Contact.push(Contact5[key]+"\n");
		}
		alert(Contact)
		
}

	