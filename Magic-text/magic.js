makenote();


// save input text data in database storage

function savedata() {
    let alertNote = document.getElementById("alertNote");
    alertNote.style.display = "none";
    let data = document.getElementById("exampleFormControlTextarea1").value;
    if (data.trim() === '') {
        alertNote.innerHTML = 'Empty note could not be saved';
        alertNote.style.display = "block";
        return;
    }else{
        alertNote.style.display = "none";
    }
    let store = []
    let notesList = JSON.parse(localStorage.getItem("store"));
    if (notesList !== null) {
        notesList.forEach((note) => {
            store.push(note);
        });
        store.push(data);
    } else {
        store.push(data)
    }
    localStorage.setItem("store", JSON.stringify(store))
    document.getElementById("exampleFormControlTextarea1").value = " ";
    makenote();
}



// Show notes in the browser

function makenote() {
    alertNote.style.display = "none";
    let notes = JSON.parse(localStorage.getItem("store"));
    if (notes === null) {
        return;
    }
    let div = "";
    notes.forEach((element, i) => {
        div +=
            ` <div class="card my-2 mx-2 col-md-3" style="width: 18rem;">
        <div class="card-body my-2 mx-2">
          <h5 class="card-title">Note ${i + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${i}" class="btn btn-primary" onClick="onDelete(this.id)">Delete</button>
        </div>
      </div>`


    });

    let parentadiv = document.getElementById("noteList");

    parentadiv.innerHTML = div;
}

// Delete notes

function onDelete(index) {
    let confirmation = window.confirm('Are you want to delete this record');

    if (confirmation == false) {
        return;
    }
    let notes = JSON.parse(localStorage.getItem("store"));
    notes.splice(index, 1);
    localStorage.setItem("store", JSON.stringify(notes))
    makenote();
}

// search Notes

let searchNote = document.getElementById("searchNotes");
searchNote.addEventListener("input",function(){

    let inputval = searchNote.value;
    console.log("input data fired",inputval);
    let notecard = document.getElementsByClassName("card");
})
