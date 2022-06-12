const texteditor= document.querySelector(".text-editor");
const preview= document.querySelector(".preview");
const converter = new showdown.Converter();

texteditor.addEventListener("keyup",eve =>{
    const {value} =eve.target;

    const html=converter.makeHtml(value);
    
    preview.innerHTML=html;
});