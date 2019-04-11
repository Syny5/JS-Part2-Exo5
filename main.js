function changeImage() {
   document.getElementById('image1').src='assets/img/image1_2.jpg';
   document.getElementById('image2').src='assets/img/image2_2.jpg';
   document.getElementById('image3').src='assets/img/image3_2.jpg';
   document.getElementById('image4').src='assets/img/image4_2.jpg';
   document.getElementById('image5').src='assets/img/image5_2.jpg';
 }

// Technique Mickael :
// document.addEventListener('onmousemove', function()
//   {
//     // srcCible prend la source de la cible
//     var srcCible = event.target.src;
//     // Si les 6 derniers caractères ne correspondent pas (si ce n'est pas l'image alternatif)
//     if (srcCible.slice(-6) != "_2.jpg");
//     {
//       // On modifie la source pour qu'il fasse apparaitre l'image alt
//       event.target.src =  srcCible.replace(/.jpg/g, "_2.jpg");
// });
