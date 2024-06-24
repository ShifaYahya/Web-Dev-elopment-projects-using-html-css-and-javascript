const colorsContainerEl = document.querySelector(".colors-container")
for (let i = 0; i < 30; i++) {
    const  colorEl = document.createElement("div")
   colorEl.classList.add("color")
   colorsContainerEl.appendChild(colorEl)
   
                                                                          //30containers
    
}

const colorEls = document.querySelectorAll(".color")
generateColors()//call this function to see end results

function generateColors(){
    colorEls.forEach((colorEl)=>{
      const newColorCode = randomColor()
      colorEl.style.backgroundColor = "#" + newColorCode
      colorEl.textContent = "#" + newColorCode

    })
}



function randomColor(){
 const charSet = "0123456789ABCDEF"  //color unicode have these in hexadecmial 
 const colorCodeLength = 6
 let colorCode = ""
 for (let i = 0; i < colorCodeLength; i++) {
     const randomNum =Math.floor(Math.random() * charSet.length)
    colorCode += charSet.substring(randomNum, randomNum+1)
    
 }
 return colorCode
}