// Importaciones
import fs from "fs";

// ¡Recuerda que tu archivo esté en formato 'apuntes-clase<NUMBER>.txt'!

// Número de clase:
const INSERT_CLASS_NUMBER = 20;

// Funciones
const apunteTitle = (apunteTitle) => {
  let newestUpperTitle = "";
  let newUpperTitle;
  let upperTitle = apunteTitle[0]
    .toUpperCase()
    .concat(apunteTitle.slice(1, apunteTitle.length));
  for (let i = 0; i <= upperTitle.length; i++) {
    if (upperTitle[i] == +upperTitle[i]) {
      let numberArray = [];
      numberArray = upperTitle.slice(i, upperTitle.length);
      newUpperTitle = upperTitle.slice(0, i);
      newestUpperTitle = newUpperTitle.concat(" ", numberArray);
      return newestUpperTitle;
    }
  }
};
const apunteText = (apunte) => {
  let text = fs.readFileSync(`./apuntes-${apunte}.txt`, "utf-8");
  return text;
};
const apunteConversor = (apunte) => {
  let text = apunteText(apunte);
  let textArray = text.split(" ");
  let newTextArray = [];
  let spacedArray = textArray.map((word) => {
    for (let j = 0; j < word.length; j++) {
      if (word[j] == ("\r" || "\n" || "nEL")) {
        word = word.slice(0, j);
      }
    }
    if (word != "") {newTextArray.push(word)};
  });
  return newTextArray;
};
async function main() {
  try {
    const APUNTE_FILE = "clase"+INSERT_CLASS_NUMBER;
    const title = apunteTitle(APUNTE_FILE);
    const ApunteArray = apunteConversor(APUNTE_FILE);
    const ApunteText = apunteText(APUNTE_FILE);
    const arrayTitle = `ARRAY de ${title}:\n`;
    const textTitle = `\nTEXTO de ${title}:\n`;
    console.log(arrayTitle);
    console.log(ApunteArray);
    console.log(textTitle);
    console.log(ApunteText);
  } catch {
    console.log("[...] MAIN FUNCTION ERROR (col: 1, row: 43)");
  }
}

// Main execution
main();