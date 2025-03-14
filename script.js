const band=document.querySelector(".band");

const arr=["crash","kick","snare","tom"];

arr.forEach((ele)=>{
    const box=document.createElement("div");
    box.classList.add("box");
    box.style.backgroundImage = `url('${ele}.png')`; 

    const name=document.createElement("h1");
    name.innerText=ele.toUpperCase();

    const audio=document.createElement("audio");
    audio.src=`${ele}.mp3`; 

    // console.log("channu")
    // box.style.width = "100%";  
    // box.style.height = "100%"; 
    // box.style.backgroundSize = "cover"; 
    // box.style.backgroundPosition = "center"; 
    window.addEventListener("keypress", (e) => {
        if (e.key === ele.slice(0, 1)) audio.play();
    });
    
    box.addEventListener("click",()=>{
        audio.play();
    });

    box.append(name);
    band.append(box);
});
