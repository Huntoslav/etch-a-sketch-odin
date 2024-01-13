document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector("#grid-container")
    let gridSizeInput = document.querySelector(".grid-placeholder")

    function createGrid(size){

        container.innerHTML = ""

        let pixelSize = container.clientWidth / size

        for(let i = 0; i < size * size; i++){
            let gridDiv = document.createElement("div")
            gridDiv.classList.add("gridItem")
            gridDiv.style.width = pixelSize + "px"
            gridDiv.style.height = pixelSize + "px"
            container.appendChild(gridDiv)
        }
    }


    function changeGrid(){
        let newSize = parseInt(gridSizeInput.value)
        if(isNaN(newSize) || newSize < 2 || newSize > 100){
            alert("Enter Valid Number Between 2-100 !")
            return
        }
        createGrid(newSize)
    }

    createGrid(16)

    let submitButton = document.querySelector(".select-grid");
    submitButton.addEventListener("click", changeGrid);



    // Black Button which selects the black color and adds the hover option
    let blackButton = document.querySelector(".black").addEventListener("click", function(e){
        for(let blackPixel of document.querySelectorAll(".gridItem")){
            blackPixel.addEventListener("mouseover", function(e){
                blackPixel.style.backgroundColor = "black"
            })
        }
    })


    //Clear button which resets the color of all divs in #container to default
    let clearButton = document.querySelector(".clear").addEventListener("click", function(e){
        for(let clearAll of document.querySelectorAll(".gridItem")){
            clearAll.style.backgroundColor = ""
        }
    })

    // Function which returns random RGB number 
    function rainbowFunction(){
        let randomRed = Math.floor(Math.random()*255)
        let randomGreen = Math.floor(Math.random()*255)
        let randomBlue = Math.floor(Math.random()*255)

        return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    }


    // Rainbow button changes the hover option to any random color generated via rainbowFunction
    let rainbowButton = document.querySelector(".rainbow").addEventListener("click", function(e){
        for(let changeToRainbow of document.querySelectorAll(".gridItem")){
            changeToRainbow.addEventListener("mouseover", function(e){
            changeToRainbow.style.backgroundColor = rainbowFunction()
            })
        }
    })

});



