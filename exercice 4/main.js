 const calculerTTC = (prix) => {
    const TVA = 0.20;
   return prix + (prix * TVA)
 }
 
function afficherprix(selecteur, HT){
    const selecteur1 = document.querySelector(selecteur)
    const TTC =calculerTTC(HT)
    selecteur1.textContent = `HT: ${HT} DH TTC: ${TTC} DH`
}

afficherprix("#p1 ", 100)
afficherprix("#p2 ", 45)
afficherprix("#p3 ", 320)
