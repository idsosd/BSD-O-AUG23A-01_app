let berekendeoplossing

function showOpdracht()
{
    //alert("verbinding ok");
    let tafelvan = document.getElementById("inputTafelvan").value
    let tafeltot = document.getElementById("inputTafeltot").value
    let randomnmbr = Math.floor(Math.random() * tafeltot) + 1
    let opgave = randomnmbr + " x " + tafelvan
    document.getElementById("inputOpdracht").value = opgave
    berekendeoplossing = randomnmbr * tafelvan
}

function checkOplossing()
{
    //alert("hier komt de check")
    let ingevoerdeoplossing = document.getElementById("inputOplossing").value
    if(berekendeoplossing == ingevoerdeoplossing)
        document.getElementById("inputOplossing").classList.add("is-valid")
    else
        document.getElementById("inputOplossing").classList.add("is-invalid")
}