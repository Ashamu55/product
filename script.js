
var production = [];
function clicked() {
    var Myproduct = document.getElementById("product").value;
    var Mydes = document.getElementById("descript").value;
    var Myprice = document.getElementById("price").value;
    var allproduct = { Myproduct, Mydes, Myprice };
    if (Myproduct || Mydes || Myprice !== "") {
        showError.innerHTML = ""
        production.push(allproduct)
        product.value = ""
        descript.value = ""
        price.value = ""
        // document.getElementById("product").value = ""
        // document.getElementById("descript").value = ""
        // document.getElementById("price").value = ""
        reserved()
    } else {
        showError.innerHTML = "Enter product name"
        }
    }
        function reserved() {
    disp.innerHTML = ""
    allproduct = ""
    production.map((pro, ind) => {
        disp.innerHTML += `<table><tr>
            <td>${ind + 1}</td>
            <td>${pro.Myproduct}</td>
            <td>${pro.Mydes}</td>
            <td>${pro.Myprice}</td>
            <td><button onclick="Deletod(${ind})">Delete</button><button onclick="Editor(${ind})">Edit</button></td>
        </tr><table>`
    })
}
        function Deletod(ind) {
    production.splice(ind, 1)
    reserved()
    }
        function Editor(ind) {
    var Newproduct = prompt("Enter product name")
    var Newdescript = prompt("Enter your description")
    var Newprice =Number(prompt("Enter price number"))
    production[ind].Myproduct = Newproduct
    production[ind].Mydes = Newdescript
    production[ind].Myprice = Newprice
    reserved();
    }