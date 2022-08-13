// // =================1...===================
// let l = 50 ;
// let metr = l/100;
// console.log(`${metr} metrs in ${l} santimetrs`);



// // =================2===================
// let m = 1000 ;
// let tonn = m/1000;
// console.log(`${tonn} tonns in ${m} kilogramms`);



// // =================3===================
// let b = 3 ;
// let a = 18 ;
// let result = a/b;
// console.log(`${result} martta`);



// // =================4====================
// let son = 27;
// let onlikXona = son/10;
// let qoldiq = son%10/10;
// let resultOnlik = onlikXona - qoldiq;
// let birlik = son%10;
// console.log(resultOnlik + " onlik " + birlik + " birlik");





// // =================5====================
// let son = 95;
// let onlikXona = son/10;
// let qoldiq = son%10/10;
// let resultOnlik = onlikXona - qoldiq;
// let birlik = son%10;
// let yigindi = birlik + resultOnlik;
// console.log(yigindi);



// // =================6====================
// let son = 99;
// let onlikXona = son/10;
// let qoldiq = son%10/10;
// let resultOnlik = onlikXona - qoldiq;
// let birlik = son%10;
// let kopaytma = birlik * resultOnlik;
// console.log(kopaytma);


// // =================7====================
// let num = 9845;
// let yuzlarXonasi= num / 100 ;
// let qoldiq =num % 100 /100;
// let butun = yuzlarXonasi - qoldiq;
// console.log(butun);



// // // =================8==================== 
// let sekund = 2345465;
// let soat = sekund / 3600 ;
// let soatQoldiq = sekund % 3600 /3600;
// let butunSoat = Math.round( soat - soatQoldiq);
// let qolganSekund = soatQoldiq *3600;
// let minut = qolganSekund / 60;
// let qolganSekund2 = qolganSekund % 60/60;
// let butunMinut = Math.round(minut - qolganSekund2);
// let resultSekund = Math.round( qolganSekund2 *60 );
//  console.log(`${butunSoat} soat , ${butunMinut} minut , ${resultSekund} sekund o'tdi  `);
//// Valiyev Muhammadziyo

// =============================IF ELSE==============================


// // =================1====================
// let num = 1 ;
// if(num>0){
//     console.log(`${num} musbat son`);
// }else{
//     console.log(`${num} manfiy son`);
// }



// // =================2====================
// let num = 44;
// let toqmi = num % 2;
// if(toqmi>0){
//     console.log(`${num} toq son`);
// }else{
//     console.log(`${num} juft son`);
// }



// // =================3====================
// let num = 54;
// let toqmi = num % 2;
// if(toqmi>0){
//     console.log(`${num} toq son`);
// }else{
//     console.log(`${num} juft son`);
// }




// // =================4====================
// let num1 =234; 
// let num2 =432; 
//  if(num1>0 && num2>0){
//     console.log(`true`);
//  }else{
//     console.log(`false`);
//  }



// // =================5====================
// let a= 24;
// let b= 18;
// let c= 4;
//  if(a>b && b>c){
//     console.log(`true`);
//  }else{
//     console.log(`false`);
//  }




// // =================6====================
// let a = 12 ,
//     b = 19 ,
//     c = 25;
// if(a<b && b<c){
//     console.log('true');
// }else{
//     console.log('false');
// }


// // ================7====================
// let num1 = 31;
// let num2 = 23;
// let toqmi1 = num1 % 2;
// let toqmi2 = num2 % 2;
// if (toqmi1>0 && toqmi2>0) {
//     console.log('true');
// }else{
//     console.log('false');
// }




// // ================8====================
// let num1 = 8,
//     num2 = 10,
//     num3 = 14,
//     num4 = 3455;

// if (num1>0 && num2>0 && num3>0 && num4>0) {
//     console.log('true');
// } else {
//     console.log('false');
// }
//// Valiyev Muhammadziyo



// // ================9====================
// let num1 = 4,
//     num2 = -13,
//     num3 = 1;
// if (num1 > 0 || num2 > 0 && num3 > 0) {
//     console.log('true');    
// } else {
//     console.log('false');    
// }



// // ================10====================
// let num = 5,
//     kun = num % 7;
// if (kun == 1) {
//     console.log('Dushanba');
// } else if (kun == 2) {
//     console.log('Seshanba');
// } else if (kun == 3) {
//     console.log('Chorshanba');
// } else if (kun == 4) {
//     console.log('Payshanba');
// } else if (kun == 5) {
//     console.log('Juma');
// } else if (kun == 6) {
//     console.log('Shanba');
// } else {
//     console.log('Yakshanba');
// }



// // // ================11====================
// let code = 33 ;
// if (code == 33) {
//     console.log('Humans'); 
// } else if (code == 93 || code==94){
//     console.log('Ucell');     
// } else if (code == 99 || code==95){
//     console.log('Uzmobile');     
// } else{
//     console.log('Bolmadim');     
// }
//     // Ustoz bilganimcha yozdim shularni bilaman ekan 



// // ================12====================
// let num = 23;
// if (num>=0) {
//     console.log(++num);
    
// } else {
//     console.log(--num);
// }





// // ================13====================
// let num = -23;
// if (num>=0) {
//     console.log(num + 3);
    
// } else {
//     console.log(num-2);
// }


// // ================14====================
// let num1 = 2324,

//     num2 = 3245;

// if (num1>num2) {

//     console.log('1-son katta');

// } else {

//     console.log('2-son katta');

// }




// // ================15====================
// let num1 = 234,
//     num2 = 2414,
//     num3 = 655;

// if (num1>num2 && num1>num3){

//     console.log('1-son katta');
    
// } else if(num2>num1 && num2>num3){

//     console.log('2-son katta');

// } else{
//     console.log('3-son katta');
// }




// // ================16====================
// let num1 = 234,
//     num2 = 2414,
//     num3 = 655;

// if (num1<num2 && num1<num3){

//     console.log('1-son kichik');
    
// } else if(num2<num1 && num2<num3){

//     console.log('2-son kichik');

// } else{
//     console.log('3-son kichik');
// }
