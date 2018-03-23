	
		var motdepasse;
		var utilisateur;
			function test (form, event)
			{
			var passe;
			var ident;
			passe += document.getElementById("pwd").value + "\n";
			ident +=document.getElementById("username").value + "\n";
			
			motdepasse = passe;
			utilisateur = ident;
			event.preventDefault();
			return false;
			}
			function test1 (form, event)
			{
			var passe1;
			var ident1;
			passe1 += document.getElementById("pwd1").value + "\n";
			ident1 +=document.getElementById("username1").value + "\n";
			
			
				if(motdepasse == passe1 && utilisateur == ident1)
			{
				alert("Mot de passe valide")
			}
			else 
			{
				alert("Mot de passe invalid")
			}
			}
			
		var TabProduit["xbox","ps4","pc"];
		var Tabprix[200,240,2000];
		var Total = " ";
		var nom = " ";
		var Taxe = " ";
		
			function calculer (form, event)
			{
				
				prod = " ";
				var adressecou = " ";
				Quantite = " ";
				var prix;
				Quantite = " ";
				Total = " ";
				
		    prod += document.getElementById("produit").value + "\n";
			Couleur +=document.getElementById("couleur").value + "\n";
			Quantite +=document.getElementById("quantite").value + "\n";
			Nom +=document.getElementById("nom").value + "\n";
			AdresseCouriel +=document.getElementById("adressecou").value + "\n";
			AdresseLiv +=document.getElementById("adresseLiv").value + "\n";
			var prod;
				for(var cpt = 0; cpt < 3; cpt++)
				{
					prod += TabProduit[cpt];
				}
				Quantite +=document.getElementById("quantite").value + "\n";
				prod += document.getElementById("produit").value + "\n";
				
				for(var cpt=0; cpt <=3; cpt++)
				{
				if(prod == TabProduit[cpt])
				 {
					prix = Tabprix[cpt];
				 }
				}
				prix = prix*quantite;
				Taxes = prix*0.15;
				Total = prix+Taxe;
				
				document.getElementById('Prixini').value = prix;
				document.getElementById('Taxes').value = Taxe;
				document.getElementById('SousTot').value = Total;
				
				event.preventDefault();
				Afficher();			
			}

			function Afficher (form, event)
			{
				calculer();
				
				Prixini = prix*quantite;
				Taxes = prix*0.15;
			    SousTot = Prixini + Taxes;
				alert("Le prix de votre achat est :" +SousTot);
			
			
		
			
