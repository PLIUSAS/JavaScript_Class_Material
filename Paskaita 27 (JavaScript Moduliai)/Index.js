import mainFunction from "./utils.js"; // Export default - Naudojant export default, su default šitaip importuojam.
import { duStuff, antraFunkcija } from "./utils.js"; // Export - Naudojant export, be fedault šitaip importuoja.
// import kazkoksKitasPavadinimas. {duStuff, antraFunkcija} from "./utils.js" Export/Export default - Norint abudu importuotat rašom per kablelį.
function sayHello() {
  console.log("Hello");
}
sayHello();
duStuff();
antraFunkcija();
mainFunction();

function kazkoksKitasPavadinimas() {}
