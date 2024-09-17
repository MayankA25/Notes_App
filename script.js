let addNoteBtn = document.getElementsByClassName("addNote")[0]
let addNote = ()=>{
    let notes = document.getElementsByClassName("notes")[0]
    let span = document.createElement("div")
    span.classList.add("note")
    let textarea = document.createElement("textarea")
    textarea.cols = 120
    textarea.rows = 15
    let img = document.createElement("img")
    img.src = "img/delete.png"
    span.appendChild(textarea)
    span.appendChild(img)
    notes.appendChild(span)
    
}

// addNote()
let count = 0
addNoteBtn.addEventListener("click", ()=>{
    addNote()
    let notes = document.getElementsByClassName("notes")[0]
    // let note_container = document.getElementsByClassName("note")[count]
    // note_container.style.marginTop = "2vw"
    notes.addEventListener("click", (event)=>{
        console.log(event.target.tagName)
        if(event.target.tagName == "IMG"){
            console.log("Yes")
            event.target.parentElement.remove()
        }
    })
})

