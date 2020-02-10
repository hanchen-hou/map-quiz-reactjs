import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import App from "../components/App";
import AnswerBoard from "../components/AnswerBoard"
import ResultBoard from "../components/ResultBoard"

import mockMap from "../components/Map";

// ----------
// Mock up
// ----------
let mockMapIdName = "map";
jest.mock("../components/Map", () => {
    return (props) => {
        return <div id={mockMapIdName}/>;
    };
});

describe("App Component Tests", () => {
    const testData = {
        "country": "test country name",
        "provinces": [],
        "viewBox": "test viewBox value"
    };
    
    let container = null;
    beforeEach(() => {
        // prepare
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // clear up
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    
    it("Expect render initial components.", () => {
        act(() => {
            render(<App MapDataJson={testData}/>, container);
        });
        
        let appInstance = container.getElementsByClassName(App.className)[0];
        expect(appInstance).toBeDefined();
        
        let countryHeader = appInstance.getElementsByTagName("h2")[0];
        expect(countryHeader).toBeDefined();
        expect(countryHeader.textContent).toBe(testData.country); // Note: innerText does not work, use textContent instead
        
        let provinces = appInstance.querySelector("#" + mockMapIdName); // Element obj does not have "getElementById" func
        expect(provinces).toBeDefined();
        expect(provinces.childNodes.length).toBe(0);
        
        let answerBoard = appInstance.getElementsByClassName(AnswerBoard.className)[0];
        expect(answerBoard).toBeDefined();
    });
    
    it("Expect render 'ResultBoard' instead of 'AnswerBoard'.", () => {
        act(() => {
            render(<App MapDataJson={testData}/>, container);
        });
    
        let answerBoard = container.getElementsByClassName(AnswerBoard.className)[0];
        expect(answerBoard).toBeDefined();
    
        // Get the submit button and click
        let submitButton = answerBoard.getElementsByTagName("button")[0];
        expect(submitButton).toBeDefined();
        act(() => {
            submitButton.dispatchEvent(new MouseEvent('click'));
        });
    
        let resultBoard = container.getElementsByClassName(ResultBoard.className)[0];
        expect(resultBoard).toBeDefined();
    });
});
