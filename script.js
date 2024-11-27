const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generatebtn = document.getElementById("generateBtn");
const downloadbtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});
downloadbtn.addEventListener("click", (e) => {
  let img = document.querySelector("qr.body img");
  if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    downloadbtn.setAttribute("href", imgAtrr);
  } else {
    downloadbtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  // if (qrText.value.length > 0) {
  //   generateQRCode();
  // } else {
  //   alert("Enter the text or URL to generate your QR Code");
  // }
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter the text or URL to generate your QR Code");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}

let tl = gsap.timeline();
tl.from(".container", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scale: 0.3,
});
tl.from(".qr-header h1", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scale: 0.3,
});
tl.from("input", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scale: 0.3,
});

tl.from("label", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 1,
});
tl.from("select", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 1,
});

tl.from(".qr-footer a", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  backgroundColor: "oranged",
  stagger: 1,
});
