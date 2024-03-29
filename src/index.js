const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(710, 1064);
const ctx = canvas.getContext("2d");
const fs = require("fs");
let cloudImg, logoImg, tagImg;

async function loadAssets(color) {
  cloudImg = await loadImage("uploads/cloudFinal.jpg");
  logoImg = await loadImage("uploads/logo.png");

  switch (color) {
    case "purpleVideo":
      tagImg = await loadImage("uploads/T_visionary.png");
      break;

    case "denimVideo":
      tagImg = await loadImage("uploads/T_explorer.png");
      break;

    case "blackVideo":
      tagImg = await loadImage("uploads/T_activist.png");
      break;

    case "yellowVideo":
      tagImg = await loadImage("uploads/T_creative.png");
      break;

    case "tyeDyeVideo":
      tagImg = await loadImage("uploads/T_lover.png");
      break;
    default:
      tagImg = await loadImage("uploads/T_creative.png");
  }
}

async function Main(name, color) {
  await loadAssets(color);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (cloudImg === undefined || logoImg === undefined || tagImg === undefined) {
    throw new Error("Failed to load images.");
  }

  // ctx.drawImage(cloudImg, 0, 0, 710, 1064);

  // Clear the canvas
  
  const logoX = (canvas.width - logoImg.width) / 2;
  ctx.drawImage(logoImg, logoX, 45);

  ctx.drawImage(
    tagImg,
    canvas.width * 0.5 - 675 * 0.9 * 0.5,
    canvas.height * 0.76 - 503 * 0.9 * 0.5,
    675 * 0.9,
    503 * 0.9
  );

  ctx.font = "bold 120px 'Helvetica LT Pro Bold'";
  ctx.fillStyle = "white";

  let fontHeight = 120;
  let base = 300;

  ctx.fillText(name.toUpperCase(), 50, base);
  ctx.font = "bold 120px 'Helvetica LT Pro Bold'";
  ctx.fillText("YOU", 50, base + fontHeight);
  ctx.fillText("ARE A", 50, base + fontHeight * 2);

  return canvas.toBuffer();
}

// async function debug(){
//   let  _ = await Main("MATTHEW" , "black");
//   fs.writeFile("test.png" , _)
// }

// debug()

module.exports = Main;
