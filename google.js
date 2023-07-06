const addtitle=document.getElementById('addtitle');
const addtext=document.getElementById('addtext');
const addnotebutton=document.getElementById('addnote');
const notesdiv=document.getElementById('notes')
function addnotes(){
   let notes=localStorage.getItem('notes');
   if(notes==null){
      notes=[];
   }else{
      notes=JSON.parse(notes);
   }


   if(addtext.value==''){
    alert('Add your note');
    return;
   }
   

   const noteobj={
    title:addtitle.value,
    text:addtext.value
   }
   notes.push(noteobj);
   localStorage.setItem('notes',JSON.stringify(notes));
   shownotes();
}

function shownotes(){
   let noteshtml='';
   let notes=localStorage.getItem('notes');
   if(notes === null){
      return;
   }else{
      notes=JSON.parse(notes);
   }

   for(let i=0;i<notes.length;i++){
      noteshtml+=`<div class="note">
      <button class="deletenote" id=${i} onclick="deletenote(${i})">Delete</button>
      <div class="title">${notes[i].title}</div>
      <div class="text">${notes[i].text}</div>
    </div>`
   }
   notesdiv.innerHTML = noteshtml;
}
function deletenote(ind){
   let notes=localStorage.getItem('notes');
   if(notes === null){
      return;
   }else{
      notes=JSON.parse(notes);
   }

   notes.splice(ind,1);
   localStorage.setItem('notes',JSON.stringify(notes));
   shownotes();
}
addnotebutton.addEventListener('click',addnotes);