function CalcService() { 
  const SOMA = "+";
  const SUBT = "-";
  const MULT = "*";
  const DIV = "/";

  function calcular(num1: number, num2: number, operac: string) {
    let result;
    switch (operac) {
      case SOMA:
        result = num1 + num2;
        break;
      case SUBT:
        result = num1 - num2;
        break;
      case MULT:
        result = num1 * num2;
        break;
      case DIV:
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    return result;
  }

  return [calcular];
}

export default CalcService;
