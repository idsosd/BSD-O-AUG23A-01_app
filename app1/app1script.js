// alert("De link is goed gelegd")
let teller = 1
let uitkomst = 0
let tekst = ""



function showTafel()
{
    //variabele die de waarde heeft van het input veld 'inputTafelvan'
    let tafelvan = document.getElementById("inputTafelvan").value
    //variabele die de waarde heeft van het input veld 'inputTafeltot'
    let tafeltot = document.getElementById("inputTafeltot").value
    while(teller <= tafeltot)
    {
        uitkomst = teller * tafelvan
        tekst += teller + " x " + tafelvan + " = " + uitkomst + "<br>"
        //hoog de teller met 1 op
        teller++
    }
    //de inhoud van tekst in mijn html pushen
    document.getElementById("tafel").innerHTML = tekst
    //de inhoud van tekst in mijn html pushen
    document.getElementById("tafelheader").innerHTML = "Tafel van " + tafelvan
}