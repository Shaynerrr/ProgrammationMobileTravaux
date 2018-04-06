   var id;
   var pwd;
   var couleur;
   var nom;
   var prenom;
   var email;
   var email2;
   var cell;
   var adresse;
   var anniversaire;  
   var Tabproduit = ["Xbox-one","Ps4","Pc"];
   var Tabprix = [230,250,1000];

   var regId = new RegExp("^[a-zA-Z0-9]*$");
   var regPwd = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\\$%\\^&\\*\\-])(?=.{8,})");
   var regNom = new RegExp("^[A-Z][a-z]-+$");
   var regPren= new RegExp("^[A-Z]+(([-][a-zA-Z])?[a-zA-Z]*)*$");
   var regEmail= new RegExp("(\\w+\\.+\\w|\\w)+\\@(gmail|hotmail)\\.(com|ca)");
   var regCell= new RegExp("/\\(\\d{3}\\)\\d{3}-\\d{4}$/");
   var regAniv = new RegExp("/\\d{4}-\\1(0[1-9]|1[0-2])-[0-3]\\d/");
   var regAdress= new RegExp("/\\[0-9]{0,5} [aA-zZ]* (chicoutimi|jonquiere|alma) quebec canada [aA-zZ{1}]+[0-9{1}]+[aA-zZ{1}]+[0-9{1}]+[aA-zZ{1}]+[0-9{1}]$/");
   
  
     function Initialiser (form, event)
	 
			{
				id = document.getElementById("username").value;
				pwd = document.getElementById("pwd").value;
				couleur = document.getElementById("color").value;
				nom = document.getElementById("lastname").value;
			    prenom = document.getElementById("name").value;				
				email= document.getElementById("email").value;
				cell= document.getElementById("cell").value;
				anniversaire= document.getElementById("Fete").value;
				Decimal= document.getElementById("Decimal").value;
			    event.preventDefault();
				return false;		
			}
			
		    function exercice1()
			{
				confimerId();
				confirmerPwd();
				confirmerPrenom();
				confirmerNom();
				confirmerEmail();
				confirmerCell();
				confirmerDate();
			}
			
			function exercice2()
			{
				Email2();
				decimale();
				couleur();
				prix();
			}
		
			function confimerId()
			{	
				id = document.getElementById("username").value;
				 if (regId.test(id)==false)
					 {
						 alert("L'identifiant est invalide");
					 }					 
			}
			
		
            function confirmerPwd()
		    {
			    pwd = document.getElementById("pwd").value;
				 if (regPwd.test(pwd)==false)
					 {
						 alert("Le mot de passe est invalide");
					 }	 
		    }
				 
				 
			function confirmerPrenom()				 
			{
				prenom = document.getElementById("prenom").value
				 if (regPren.test(prenom)==false)
					 {
						 alert("Le Prenom est invalide");
					 }
			}
				 
			function confirmerNom()				 
			{
				nom = document.getElementById("lastname").value
				 if (regNom.test(lastname)==false)
					 {
						 alert("Le nom est invalide");
					 }
			}
				 
			function confirmerEmail()				 
			{
				email = document.getElementById("email").value
				 if (regEmail.test(email)==false)
					 {
						 alert("L'email est invalide");
					 }	 
			}
			
			function confimerAdresse()
			{	
				adresse = document.getElementById("adresse").value;
				 if (regAdress.test(adresse)==false)
					 {
						 alert("L'adresse est invalide");
					 }					 
			}
				 
			function confirmerCell()				 
			{
				cell = document.getElementById("cell").value
				 if (regCell.test(telephone)==false)
					 {
						 alert("Le numero de cell est invalide");
					 }	 
			}
				 
			function confirmerDate()				 
			{
				anniversaire = document.getElementById("Fete").value
				 if (regexdate.test(datenaissance)==false)
					 {
						 alert("La date d'anniversaire est invalide");
					 } 
			}
				 			 
			function Email2()			 
			{
				email2 = document.getElementById("email2").value
				 if (regEmail.test(email2)==false)
					 {
						 alert("L'adresse Email est invalide")
					 }
			}
			
			function decimale()
			{
				var Decimal  = document.getElementById("Decimal").value;
				document.getElementById("couleur").value=Decimal;
			}

            function couleur()
			{
				var couleur = document.getElementById("couleur").value;
				document.getElementById("Decimal").value=couleur;		 
			}
		        
			function Prix()
			{
				var prix;
				var prod;
				var produit = document.getElementById("product").value; 
			    var quantiter=document.getElementById("quantity").value;
					 
				for (var cpt=0;cpt<2;cpt++)
				{
				  if (produit==Tabproduit[cpt])
					{
						var soustotal=prix*quantiter;
					    prix=Tabprix[cpt];					 
					    document.getElementById('total').value=soustotal;
						document.getElementById('taxes').value=soustotal*0.15;
						document.getElementById('soustotal').value=soustotal*0.15 + soustotal;
						event.preventDefault();
					}
				}
			}			