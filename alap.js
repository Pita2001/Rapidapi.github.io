function gomb(){
var keres = document.getElementById("keresszo").value 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c340b31c2msh8e78660f982bc60p19d145jsn54ac21895e9a',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=' +keres, options)
	.then(response => response.json())
	.then(response => kiir(response))
	.catch(err => console.error(err));


}


function kiir (response){
    console.log(response)
    var szam = 1

    if (response.d.length == 0)
    document.getElementById("talalat").innerHTML ="Nincs találat"
    else
    
    for (const elem of response.d) {
        console.log(elem.l)
        var div = document.createElement("div")
        document.getElementById("talalat").appendChild(div)
        div.style.border = "1px solid blue"
        var kep = document.createElement("img")
        div.appendChild(kep)
        kep.src = elem.i.imageUrl
        kep.style.width = "300px"
        var pl = document.createElement("p")
        div.appendChild(pl)
        pl.innerHTML =szam +". talalat: "+ elem.l
        szam++
        var p2 = document.createElement("p")
        div.appendChild(p2)
        p2.innerHTML = elem.s
        var p3 = document.createElement("p")
        div.appendChild(p3)
        p3.innerHTML = elem.rank

        var p4 = document.createElement("p")
        div.appendChild(p4)


        if (typeof elem.y=="undefined")
        p4.innerHTML = "Év: nincs adat!"
        else
        p4.innerHTML = elem.y


        div.style.textAlign = "center"
        pl.style.fontSize ="40px"
    }
}