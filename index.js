const text = document.querySelector('header')

const sent = ["H" , "A" , "C" , "K" , "C" , "O" , "D" ,"E"]
    
    
let d , liste , i
i=0

function stopInt (n){
        setTimeout(() => {
                    clearInterval(n)
        } , 9000)
}





function repeat(){
        const int = setInterval(() => {
                d= i
                liste = document.createElement('p')
                liste.innerText = sent[i]
                liste.style.textDecoration = 'underline'
                

                text.append(liste)

                setInterval(() => {
                        liste.removeAttribute('style')
                } ,950)
                i++
        } , 1000)

        stopInt(int)
        return int
}

repeat()