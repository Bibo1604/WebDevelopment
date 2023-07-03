function submit() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const article = document.createElement("article");
    article.classList.add("ra");
    const textNode = document.createTextNode(message);
    article.appendChild(textNode);
    const parent = document.getElementById("ar");
    parent.appendChild(article);
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");

}