let arr = [];

registreties =() => {

$(".tabulaContainer").removeClass("tabulaDalibnieki");

let name1 = $("#vards").val();
let uzvards = $("#uzvards").val(); 
let epasts = $("#epasts").val();
let telefons = $("#telefons").val();
let berni = $("#berni").val();
let vieta = $("#vote").val();
if (name1==null || name1== "")
    alert("Nav ievadīts vārds!");
        else {
if (uzvards==null || uzvards== "")
    alert("Nav ievadīts uzvārds!");
        else {
if (epasts==null || epasts== "")
    alert("Nav ievadīts e-pasts!");
        else {
if (telefons == null || telefons == "")
    alert ("Nav ievadīts telefons!");
        else {
if (berni == "")
    alert ("Nav norādīts bērnu skaits!");
        else{
if (vieta == null || vieta == "")
    alert ("Lūdzu ievadi vietas izveli!");
        else {
        arr.push({ name: name1, surname: uzvards, email: epasts, phone: telefons, kids: berni, vote: vieta});
    $("#vards").val("");
    $("#uzvards").val("");
    $("#epasts").val("");
    $("#telefons").val("");
    $("#berni").val("");
    $("#vote").val("");
}
        }
    }
}
        }

    }
    
    if (arr.length > 0) {
        let textV = "";
        let textU = "";
        let textE = "";
        let textT = "";
        let textB = "";
        let textVo = "";
            for (let i = 0; i < arr.length; i++) {
                textV += "<p> " + arr[i].name + "</p>";
                textU += "<p> " + arr[i].surname + "</p>"
                textE += "<p> " + arr[i].email + "</p>";
                textT += "<p> " + arr[i].phone + "</p>";
                textB += "<p> " + arr[i].kids + "</p>";
                textVo += "<p> " + arr[i].vote + "</p>";
        }


        $(".vardsP").html(textV);
        $(".uzvardsP").html(textU);
        $(".epastsP").html(textE);
        $(".telefonsP").html(textT);
        $(".berniP").html(textB).addClass("voteBerniP");
        $(".voteP").html(textVo).addClass("voteCodeP");

    }
    

}

       