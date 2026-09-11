//Burada arama çubuğundaki tüm elemanları js'ye değişken olarak tanımlıyoruz

//Form ve gizli yolcu alanı
const searchForm = document.getElementById("searchForm");
const passengerHidden = document.getElementById("passengerHidden");

//Yolcu kutusu ve paneli
const passengerDisplay = document.getElementById("passengerDisplay");
const passengerPanel = document.getElementById("passengerPanel");
const passengerOkBtn = document.getElementById("passengerOkBtn");

//Yetişkin sayacı butonları ve yazısı
const adultMinusBtn = document.getElementById("adultMinusBtn");
const adultPlusBtn = document.getElementById("adultPlusBtn");
const adultCountText = document.getElementById("adultCountText");

//Çocuk sayacı butonları ve yazısı
const childMinusBtn = document.getElementById("childMinusBtn");
const childPlusBtn = document.getElementById("childPlusBtn");
const childCountText = document.getElementById("childCountText");

//Oda sayacı butonları ve yazısı
const roomMinusBtn = document.getElementById("roomMinusBtn");
const roomPlusBtn = document.getElementById("roomPlusBtn");
const roomCountText = document.getElementById("roomCountText");

//Tarih/konum alanları (Nereden/Nereye artık select)
const searchFrom = document.getElementById("searchFrom");
const searchTo = document.getElementById("searchTo");
const searchDepart = document.getElementById("searchDepart");
const searchReturn = document.getElementById("searchReturn");

//Sayaçları burada let ile tutuyoruz, çünkü butonlara basıldıkça değişecekler
let adultCount = 1;
let childCount = 0;
let roomCount = 1;

//Yolcu kutusuna tıklanınca paneli açıp kapatıyoruz
passengerDisplay.addEventListener("click", function(){
    passengerPanel.classList.toggle("active");
});

//Tamam butonuna basınca paneli kapatıyoruz
passengerOkBtn.addEventListener("click", function(){
    passengerPanel.classList.remove("active");
});

//Yetişkin azalt butonu, en az 1 yetişkin olmak zorunda
adultMinusBtn.addEventListener("click", function(){
    if(adultCount > 1){
        adultCount = adultCount - 1;
        adultCountText.textContent = adultCount;
        guncelleYolcuYazisi();
    }
});

//Yetişkin artır butonu
adultPlusBtn.addEventListener("click", function(){
    adultCount = adultCount + 1;
    adultCountText.textContent = adultCount;
    guncelleYolcuYazisi();
});

//Çocuk azalt butonu, en az 0 olabilir
childMinusBtn.addEventListener("click", function(){
    if(childCount > 0){
        childCount = childCount - 1;
        childCountText.textContent = childCount;
        guncelleYolcuYazisi();
    }
});

//Çocuk artır butonu
childPlusBtn.addEventListener("click", function(){
    childCount = childCount + 1;
    childCountText.textContent = childCount;
    guncelleYolcuYazisi();
});

//Oda azalt butonu, en az 1 oda olmak zorunda
roomMinusBtn.addEventListener("click", function(){
    if(roomCount > 1){
        roomCount = roomCount - 1;
        roomCountText.textContent = roomCount;
        guncelleYolcuYazisi();
    }
});

//Oda artır butonu
roomPlusBtn.addEventListener("click", function(){
    roomCount = roomCount + 1;
    roomCountText.textContent = roomCount;
    guncelleYolcuYazisi();
});

//Bu fonksiyon, sayaçlar her değiştiğinde hem üstteki kutunun yazısını
//hem de Formspree'ye gidecek gizli inputun değerini güncelliyor
function guncelleYolcuYazisi(){
    const yazi = adultCount + " Yetişkin, " + childCount + " Çocuk, " + roomCount + " Oda";
    passengerDisplay.textContent = yazi;
    passengerHidden.value = yazi;
}

//Sayfa ilk açıldığında da gizli input'un başlangıç değeri dolu olsun diye bir kere çağırıyoruz
guncelleYolcuYazisi();

//Form gönderilmeden önce, gerekli alanların dolu olup olmadığını kontrol ediyoruz
searchForm.addEventListener("submit", function(e){

    //Nereden veya Nereye seçilmediyse, formun gönderilmesini durduruyoruz
    if(searchFrom.value.trim() === "" || searchTo.value.trim() === ""){
        e.preventDefault();
        alert("Lütfen Nereden ve Nereye alanlarını seçiniz!");
        return;
    }

    //Gidiş tarihi boşsa, formun gönderilmesini durduruyoruz
    if(searchDepart.value.trim() === ""){
        e.preventDefault();
        alert("Lütfen gidiş tarihini seçiniz!");
        return;
    }

    //Buraya kadar geldiyse her şey dolu demektir, form Formspree'ye gönderilecek
    console.log("Arama formu gönderiliyor...");
    console.log("Nereden: " + searchFrom.value);
    console.log("Nereye: " + searchTo.value);
    console.log("Gidiş: " + searchDepart.value);
    console.log("Dönüş: " + searchReturn.value);
    console.log("Yolcu: " + passengerHidden.value);
});