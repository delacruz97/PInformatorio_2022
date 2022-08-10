import { screen, render } from "@testing-library/react";

import Busqueda from "./Busqueda";

describe("Busqueda", () => {
  it("etiqueta p", () => {
    render(<Busqueda />);
    expect(screen.getByText(/No hay resultados/i)).toBeInTheDocument();
  });
});
