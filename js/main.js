const subhanAllahScreen = document.getElementById('subhan-allah-screen');
const subhanAllahIncrementBtn = document.getElementById('subhan-allah-increment-btn');
const subhanAllahDecrementBtn = document.getElementById('subhan-allah-decrement-btn');


const alhamdulilhahScreen = document.getElementById('alhamdulilah-screen');
const alhamdulilhahIncrementBtn = document.getElementById('alhamdulilah-increment-btn');
const alhamdulilhahDecrementBtn = document.getElementById('alhamdulilah-decrement-btn');


const allahuAkberScreen = document.getElementById('allah-akber-screen');
const allahuAkberIncrementBtn = document.getElementById('allah-akbar-increment-btn');
const allahuAkberDecrementBtn = document.getElementById('allah-akber-decrement-btn');


const resetTasbih = document.getElementById('reset-all-tasbih');

let subhanAllahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahuAkberInitialValue = 0;


subhanAllahIncrementBtn.addEventListener('click', function(){
    
    if(subhanAllahInitialValue === 33){
        return alert ('SubhanAllah complete, please Fill up another one.')
    }

    subhanAllahInitialValue += 1;
    subhanAllahScreen.innerText = subhanAllahInitialValue;
})

subhanAllahDecrementBtn.addEventListener('click', function(){
    
    if(subhanAllahInitialValue <= 0){
        return alert ('You can`t added a negative value.')
    }
    
    subhanAllahInitialValue -= 1;
    subhanAllahScreen.innerText = subhanAllahInitialValue;
})

alhamdulilhahIncrementBtn.addEventListener('click', function(){
    if(alhamdulilahInitialValue === 33){
        return alert ('Alhamdulilah Complete, please fill up last one.')
    }

    alhamdulilahInitialValue += 1;
    alhamdulilhahScreen.innerText = alhamdulilahInitialValue;
})

alhamdulilhahDecrementBtn.addEventListener('click', function(){
    if(alhamdulilahInitialValue <= 0){
        return alert ('You can`t added a negative value.');
    }

    alhamdulilahInitialValue -= 1;
    alhamdulilhahScreen.innerText = alhamdulilahInitialValue;
})

allahuAkberIncrementBtn.addEventListener('click', function(){
    if(allahuAkberInitialValue === 34){
        return alert ('Good job.Your zikr was completed,DO once More!')
    }

    allahuAkberInitialValue += 1;
    allahuAkberScreen.innerText = allahuAkberInitialValue;
})

allahuAkberDecrementBtn.addEventListener('click', function(){
    if (allahuAkberInitialValue <= 0){
        return alert('You can`t added a negative value.')
    }

    allahuAkberInitialValue -= 1;
    allahuAkberScreen.innerText = allahuAkberInitialValue;
})

resetTasbih.addEventListener('click', function(){
    subhanAllahScreen.innerText = 0;
    alhamdulilhahScreen.innerText = 0;
    allahuAkberScreen.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulilahInitialValue = 0;
    allahuAkberInitialValue = 0;
});