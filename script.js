
let saturate =document.getElementById('saturate');
let contrast =document.getElementById('contrast');
let brightness =document.getElementById('brightness');
let sepia =document.getElementById('sepia');
let grayscale =document.getElementById('grayscale');
let blur =document.getElementById('blur');
let upload =document.getElementById('upload');
let download =document.getElementById('download');
let img =document.getElementById('img');
let reset =document.querySelector('span');
let img_box =document.querySelector('.img-box');
const canvas =document.getElementById('canvas');
const context = canvas.getContext("2d")
window.onload = function(){
    download.style.display = 'none';
    reset.style.display = 'none';
    img_box.style.display = 'none';
}
upload.onchange = function(){
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    img_box.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
    img.src = file.result;
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img,0,0,canvas.width, canvas.height);
        img.style.display = 'none';
    }
}
let filters = document.querySelectorAll(".filters ul li input");
filters.forEach( filter =>{
    filter.addEventListener('input', function(){
        context.filter= `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px) `
        context.drawImage(img,0,0,canvas.width, canvas.height);
    })
} )
function resetValue(){
    context.filter = 'none';
    saturate.value = '100'
    contrast.value = '100'
    brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
}
download.onclick = function(){
    download.href = canvas,toDataURL();
}
