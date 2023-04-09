import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";


describe("Primary start of tests", () => {
    test("default", () => {
        render(<App />);
        const result = screen.getByText(/New Project/);
        expect(result).toBeInTheDocument();
    })
})

