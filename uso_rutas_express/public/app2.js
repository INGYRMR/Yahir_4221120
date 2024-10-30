function generar(){
    const inputText = document.getElementById('input-text').value;
    const QR = document.getElementById('contenedor');
    QR.innerHTML = ""; 

    new QRCode(QR, {
        text: inputText || "No ingresaste nada", 
        width: 128, 
        height: 128,
        colorDark: "#000000", 
        colorLight: "#ffffff", 
    });
}