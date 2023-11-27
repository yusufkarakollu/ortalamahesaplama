let kilo = Number(prompt("Lütfen Kilonuzu Girin."));
let boy = Number(prompt("Lütfen Boyunuzu Metre Cinsinden Giriniz."));

let sonuc = kilo / (boy**2);

if(sonuc<18.5){
    let sonuc2 = document.getElementById("text").innerHTML = "İdeal Kilonun Altındasın. Sonuç: " + sonuc;
    alert(`İdeal Kilonun Altındasın. Sonuç: ${sonuc}`)
}
else if(18.5<=sonuc<=24.9){
    let sonuc2 = document.getElementById("text").innerHTML = "İdeal Kilodasınız. Sonuç: " + sonuc;
    alert(`İdeal Kilodasınız. Sonuç: ${sonuc}`);
}

else if(25<=sonuc<29.9){
    let sonuc2 = document.getElementById("text").innerHTML = "İdeal Kilonun Üstündesin. Sonuç: " + sonuc;
    alert(`İdeal Kilonun Üstündesin. Sonuç: ${sonuc}`)
}

else if(30<=sonuc<39.9){
    let sonuc2 = document.getElementById("text").innerHTML = "İdeal Kilonun Çok Üstündesin. Sonuç: " + sonuc;
    alert(`İdeal Kilonun Çok Üstündesin. Sonuç: ${sonuc}`)
}

else if(sonuc>=40){
    let sonuc2 = document.getElementById("text").innerHTML = "Obezsin amk kilo ver. Sonuç: " + sonuc;
    alert(`Obezsin amk kilo ver. Sonuç: ${sonuc}`)
}

else if(kilo == "" && boy == ""){
    alert(`Lütfen Bir Değer Giriniz.`)
}