function tabelleFiltern () {
    //Nutzerdaten aus DropDown holen, value lesen, Groß- und Kleinschreibung ignorieren
    let nutzereingabeNation = document.getElementById("nation").value.toLowerCase();
    let nutzeringabeUnternehmen = document.getElementById("unternehmen").value.toLowerCase();

    //Daten aus Tabelle lesen
    let tabelle = document.getElementById("tabelle");
    let zeilen = tabelle.getElementsByTagName("tr");

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
    let sortierKriterium = document.getElementById("sortierenNach");
    
    if (sortierKriterium === "alphabetischUnternehmen") {
        const    //Array aus Unternehmen erstellen
    }



}

//Tabelle mit oder ohne Nutzereingaben aktualisieren
    document.addEventListener("DOMContentLoaded", function() { //Kann Nutzereingabe erkennen
        document.getElementById("anwenden").addEventListener("click", function(event) { 
                //Reagiert auf Klicken von "Anwenden"
            tabelleFiltern();
            tabelleSortieren();
        });
    })
