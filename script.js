function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector('#profile img')

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, add img light
        img.setAttribute('src', './background/avatar-light.png')
    } else {
        // se tiver sem light, manter img
        img.setAttribute('src', './background/avatar.png')
    }
}