import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import ResultBoard from "../components/ResultBoard";

describe("ResultBoard Component Tests", () => {
    
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
    
    it("Expect render ResultBoard with 2 'li' tags", () => {
    
        const filledAnswer = [ "Yukon", "Northwest Territories"];
        const correctAnswer = [ "Yukon", "Northwest Territories"];
        
        act(() => {
            render(<ResultBoard filledAnswer={filledAnswer} correctAnswer={correctAnswer} />, container);
            
            let answerBoardInstance = container.getElementsByClassName(ResultBoard.className)[0];
            expect(answerBoardInstance).toBeDefined();
            
            let answerBoxInstances = answerBoardInstance.getElementsByTagName("ul")[0].childNodes;
            expect(answerBoxInstances.length).toBe(filledAnswer.length);
        });
    })
});