for(const bttn of document.getElementsByClassName("bttn")){
    bttn.onMouseMove = e => {
        const decimal = e.clientX / bttn.style.width
        const basePercent = 80,
              percentRange = 20,
              ajustablePercent = percentRange*decimal

        const finalPercent = basePercent + ajustablePercent

        bttn.style.setProperty("--BttnPercent",`${finalPercent}%`)
    }

}