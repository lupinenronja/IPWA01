function tabelleFiltern () {
    //Nutzerdaten aus DropDown holen, value lesen, Groß- und Kleinschreibung ignorieren
    let nutzereingabeNation = document.getElementById("nation").value.toLowerCase();
    let nutzeringabeUnternehmen = document.getElementById("unternehmen").value.toLowerCase();

    //Daten aus Tabelle lesen
    const tabelle = document.getElementById("tabelle");
    const zeilen = tabelle.getElementsByTagName("tr");

    //alle Tabellenzeilen prüfen, ob gleich Nutzeringabe
    for (let i = 1 ; i < zeilen.length; i++) { //thead überspringen, restliche Tabelle prüfen
        let spalten = zeilen[i].getElementsByTagName("td"); //Array mit Spaltenelementen

        let unternehmen = spalten[0].innerText.trim().toLowerCase();  
            // Erste Spalte (Unternehmen) durchsuchen, dabei Leerzeichen und Großschreibung 
            // ignorieren
        let nation = spalten[1].innerText.trim().toLowerCase();  
            // Zweite Spalte (Nation) durchsuchen, dabei Leerzeichen und Großschreibung 
            // ignorieren

        if ((nutzereingabeNation === "blanko" || nutzereingabeNation === nation) &&
        (nutzeringabeUnternehmen === "blanko" || nutzeringabeUnternehmen === unternehmen)) {
        zeilen[i].style.display = ""; // Zeile anzeigen, wenn nichts gesucht oder etwas 
        // gefunden wurde
        }
           
        else {
        zeilen[i].style.display = "none"; // Zeile ausblenden, wenn sie Suchbegriff(e) 
        // nicht enthält
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
  
    if (sortierKriterium === "alphabetischUnternehmen") {
        //alphabetisch sortieren
        tabelleArray.sort((a, b) => {
            //Unternehmen aus erster Spalte lesen, Leerzeichen und Großschreibung ignorieren
            let aUnternehmen = a.cells[0].innerText.trim().toLowerCase();
            let bUnternehmen = b.cells[0].innerText.trim().toLowerCase();
            //alphabetisch sortieren, Umlaute erlauben
            return aUnternehmen.localeCompare(bUnternehmen); 
            console.log(tabelleArray.map(zeile => zeile.cells[0].innerText));  //Testen
        });    
        //tbody manipulieren
        inhalt.innerText = ""; //leeren
        tabelleArray.forEach(zeile => inhalt.appendChild(zeile)); //Sortiertes einfügen

        return tabelleArray;
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
