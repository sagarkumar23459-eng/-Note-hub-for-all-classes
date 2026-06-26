// Class selection
function sendWhatsApp(btn){

    let card = btn.closest(".premium-card");

    let subject = card.getAttribute("data-subject");
    let className = card.getAttribute("data-class");
    let price = card.getAttribute("data-price");

    let message = `Hello Sir,%0A
Mujhe Premium Notes chahiye:%0A
📘 Subject: ${subject}%0A
🏫 Class: ${className}%0A
💰 Price: ₹${price}%0A
Please bhej dijiye.`;

    let url = `https://wa.me/919608333409?text=${message}`;

    window.open(url, "_blank");
}