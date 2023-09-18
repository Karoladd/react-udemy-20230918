import React from "react"; 
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CalcService from "./calc.service";

describe("Teste CalculadoraService", () => {
  const [calcular] = CalcService();

  it("deve garantir que 1 + 4 = 5", () => {
    let soma = calcular(1, 4, "+");
    expect(soma).toEqual(5);
  });

  it("deve garantir que 1 - 4 = -3", () => {
    let subt = calcular(1, 4, "-");
    expect(subt).toEqual(-3);
  });

  it("deve garantir que 1 / 4 = 0.25", () => {
    let divis = calcular(1, 4, "/");
    expect(divis).toEqual(0.25);
  });

  it("deve garantir que 1 * 4 = 4", () => {
    let mult = calcular(1, 4, "*");
    expect(mult).toEqual(4);
  });

  it("deve retornar operação inválida", () => {
    let operacInval = calcular(1, 4, "%");
    expect(operacInval).toEqual(0);
  });

});
