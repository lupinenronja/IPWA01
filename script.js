function tabelleFiltern () {
    //Nutzerdaten aus DropDown holen, value lesen, Großschreibung ignorieren
    let nutzereingabeNation = document.getElementById("nation").value.toLowerCase();
    let nutzeringabeUnternehmen = document.getElementById("unternehmen").value.toLowerCase();

    //Daten aus Tabelle lesen
    const tabelle = document.getElementById("tabelle");
    const zeilen = tabelle.getElementsByTagName("tr");

    //alle Tabellenzeilen prüfen, ob gleich Nutzeringabe
    for (let i = 1 ; i < zeilen.length; i++) { //thead überspringen, restliche Tabelle prüfen
        let spalten = zeilen[i].getElementsByTagName("td"); //Array mit Spaltenelementen
        /*Erste Spalte (Unternehmen) durchsuchen, dabei Leerzeichen und Großschreibung 
        ignorieren*/
        let unternehmen = spalten[0].innerText.trim().toLowerCase();  
        /*Zweite Spalte (Nation) durchsuchen, dabei Leerzeichen und Großschreibung 
        ignorieren*/
        let nation = spalten[1].innerText.trim().toLowerCase();  


        if ((nutzereingabeNation === "blanko" || nutzereingabeNation === nation) &&
        (nutzeringabeUnternehmen === "blanko" || nutzeringabeUnternehmen === unternehmen)) {
        //Zeile anzeigen, wenn nichts gesucht oder etwas gefunden wurde
        zeilen[i].style.display = ""; 
        }
           
        else {
        //Zeile ausblenden, wenn sie Suchbegriff(e) nicht enthält
        zeilen[i].style.display = "none"; 
        }
    }
}

function tabelleSortieren() {
    //Kriterium aus DropDown holen, value lesen
    let sortierKriterium = document.getElementById("sortierenNach").value;
    
    //Daten aus Tabelle lesen und als Array speichern
    const tabelle = document.getElementById("tabelle"); //ganze Tabelle
    let inhalt = tabelle.querySelector("tbody"); //Tabelle ohne thead, zu ändern
    const tabelleArray = [...inhalt.querySelectorAll("tr")]; //Zeilenelemente als Array
  
    //Sortieren nach: alphabetisch (Unternehmen)
    if (sortierKriterium === "alphabetischUnternehmen") {
        //alphabetisch sortieren
        tabelleArray.sort((a, b) => {
            //Unternehmen aus erster Spalte lesen, Leerzeichen und Großschreibung ignorieren
            let aUnternehmen = a.cells[0].innerText.trim().toLowerCase();
            let bUnternehmen = b.cells[0].innerText.trim().toLowerCase();
            //alphabetisch sortieren, Umlaute erlauben
            return aUnternehmen.localeCompare(bUnternehmen); 
        });    
        //tbody manipulieren
        inhalt.innerText = ""; //leeren
        tabelleArray.forEach(zeile => inhalt.appendChild(zeile)); //Sortiertes einfügen
    }

    //Sortieren nach: alphabetisch (Nationen)
    if (sortierKriterium === "alphabetischNation") {
        //alphabetisch sortieren
        tabelleArray.sort((a, b) => {
            //Nation aus zweiter Spalte lesen, Leerzeichen und Großschreibung ignorieren
            let aNation = a.cells[1].innerText.trim().toLowerCase();
            let bNation = b.cells[1].innerText.trim().toLowerCase();
            //alphabetisch sortieren, Umlaute erlauben
            return aNation.localeCompare(bNation); 
        });    
        //tbody manipulieren
        inhalt.innerText = ""; //leeren
        tabelleArray.forEach(zeile => inhalt.appendChild(zeile)); //Sortiertes einfügen
    }

    //Sortieren nach: Emissionen aufsteigend
    if (sortierKriterium === "emissionenAufsteigend") {
        //numerisch sortieren
            tabelleArray.sort((a,b) => {
            //Werte aus 3. Spalte lesen, in Kommazahlen konvertieren
            let aEmission = parseFloat(a.cells[2].innerText);
            let bEmission = parseFloat(b.cells[2].innerText);
            return aEmission - bEmission; // aufsteigend sortieren    
        })
        //tbody manipulieren
        inhalt.innerText = ""; //leeren
        tabelleArray.forEach(zeile => inhalt.appendChild(zeile)); //Sortiertes einfügen
    }

        //Sortieren nach: Emissionen absteigend
        if (sortierKriterium === "emissionenAbsteigend") {
            //numerisch sortieren
                tabelleArray.sort((a,b) => {
                //Werte aus 3. Spalte lesen, in Kommazahlen konvertieren
                let aEmission = parseFloat(a.cells[2].innerText);
                let bEmission = parseFloat(b.cells[2].innerText);
                return bEmission - aEmission; // absteigend sortieren    
            }) 
            //tbody manipulieren
            inhalt.innerText = ""; //leeren
            tabelleArray.forEach(zeile => inhalt.appendChild(zeile)); //Sortiertes einfügen
        }
}

//Tabelle mit oder ohne Nutzereingaben aktualisieren
    document.addEventListener("DOMContentLoaded", function() { //Kann Nutzereingabe erkennen
        //Reagiert auf Klicken von "Anwenden"
        document.getElementById("anwenden").addEventListener("click", function(event) { 
            //Methodenaufrufe
            tabelleFiltern();
            tabelleSortieren();
        });
    })
