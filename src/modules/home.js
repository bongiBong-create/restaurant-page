export function home () {
    const root = document.getElementById('root')
    const divTitle = document.createElement("div");
    const divTime = document.createElement("div");
    const divLoc = document.createElement("div");

    divTitle.classList.add("title");
    divTitle.textContent = "Pizza && Garden";

    divTime.innerText = "Monday - Sunday 12:00 - 02:00";

    divLoc.innerText = "SPB, gorohovaya, 47"

    root.append(divTitle);
    root.append(divTime);
    root.append(divLoc);
};