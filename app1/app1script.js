// alert("De link is goed gelegd")
let teller = 1
let uitkomst = 0
let tekst = ""
while(teller < 51)
{
    uitkomst = teller * 113
    tekst += teller + " x 113 =" + uitkomst + "<br>"
    //hoog de teller met 1 op
    teller++
}
//de inhoud van tekst in mijn html pushen
document.getElementById("tafel").innerHTML = tekst