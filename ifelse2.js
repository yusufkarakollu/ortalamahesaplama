// let math = Number(prompt("Matematik Notunuzu Giriniz:"));
// let turkish = Number(prompt("Türkçe Notunuzu Giriniz:"));
// let electrical = Number(prompt("Elektrik Notunuzu Giriniz:"))

// let average = math * 0.2 + turkish * 0.2 + electrical * 0.6;

// if (average >= 50) {
//     console.log("Sınıfı Geçtiniz! Ortalamanız: ", average);
// }
// else{
//     console.log("Sınıfı Geçemediniz! Ortalamanız: ", average);
// }
//42 saat ders


let beden = Number(prompt("Beden Notunuzu Giriniz:"));
let bilgisayar = Number(prompt("Bilgisayar Notunuzu Giriniz:"));
let biyoloji = Number(prompt("Biyoloji Notunuzu Giriniz:"));
let cografya = Number(prompt("Coğrafya Notunuzu Giriniz:"));
let din = Number(prompt("Din Notunuzu Giriniz:"));
let edebiyat = Number(prompt("Edebiyat Notunuzu Giriniz:"));
let esaslar = Number(prompt("Esaslar Notunuzu Giriniz:"));
let elektrik = Number(prompt("Elektrik Notunuzu Giriniz:"));
let felsefe = Number(prompt("Felsefe Notunuzu Giriniz:"));
let fizik = Number(prompt("Fizik Notunuzu Giriniz:"));
let kimya = Number(prompt("Kimya Notunuzu Giriniz:"));
let matematik = Number(prompt("Matematik Notunuzu Giriniz:"));
let tarih = Number(prompt("Tarih Notunuzu Giriniz:"));
let ingilizce = Number(prompt("İngilizce Notunuzu Giriniz:"));

let average = ((beden*0.1+bilgisayar*1.02 + biyoloji*3.57 + cografya*1.19 + din*1.38 + edebiyat*3.09 + esaslar*2.8 + elektrik*11.25 + felsefe*2 + kimya*1.80 + matematik*0.58 + tarih*1.42 + ingilizce*1) / 10) / 3;

if (average>50){
    let ortalama = document.getElementById("ortalama").innerHTML = "Geçtiniz. Notunuz: " + average;
    alert(`Sınıfı Geçtiniz. Ortalamanız: ${average}` )
}

else{
    let ortalama = document.getElementById("ortalama").innerHTML = "Kaldınız. Notunuz: " + average;
    alert(`Sınıfı Geçemediniz. Ortalamanız: ${average}` )
}



