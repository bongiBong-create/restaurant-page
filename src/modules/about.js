export function about () {
    const root = document.getElementById("root");

    const socials = document.createElement("div");
    const mail = document.createElement("span");
    const fb = document.createElement("span");
    const tel = document.createElement("span");

    mail.innerText = "hi@cooperativegarage.com";
    tel.innerText = "+7-965-012-22-22"

    root.append(mail)
    root.append(tel)
}