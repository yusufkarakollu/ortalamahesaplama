let userName = prompt("İsminizi Girin: ");
let surName = prompt("Soy İsminizi Girin: ");
let age = Number(prompt("Yaşınızı Girin: "));

if (userName && surName && age) {
    alert(`Kayıt Başarılı! Bilgileriniz: ${userName + " " + surName + " " + age}`)
}
else {
    alert("Bilgilerden Biri Eksik! Girdiğiniz Bilgiler:", userName + surName + age)
}