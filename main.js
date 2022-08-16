let generate = document.getElementById("generate")
let passwordEl = document.getElementById("password")
let copy = document.getElementById("copy")
let passLen = document.getElementById("passlen")

generate.addEventListener("click", ()=>{
    let length = passLen.value 
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$"
    let pass = ''
    for(let i = 0; i<length; i++){

        let randChar = Math.floor(Math.random() * charSet.length)
        pass += charSet.charAt(randChar)
        
    }
    passwordEl.value = pass
})

copy.addEventListener("click", ()=>{
    passwordEl.select()
    passwordEl.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(passwordEl.value)
})