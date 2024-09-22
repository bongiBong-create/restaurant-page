export function menu () {
    const root = document.getElementById("root");

    const link = document.createElement("a");

    link.href = "http://cooperativegarage.com/menu_ru.pdf";
    link.target = "__blank"
    link.innerText = "yum-yum"

    root.append(link)
}