const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
    label.innerHTML = label.innerText
        // array of leters
        .split("")
        // create an array of letters with span around them
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        // turn it back into a string
        .join("")
})