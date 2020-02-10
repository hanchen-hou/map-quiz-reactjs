import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import AnswerBoard from "../components/AnswerBoard";

describe("AnswerBoard Component Tests", () => {
    
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
    
    it("Expect render AnswerBoard with 2 AnswerBox components", () => {
    
        const areaData = [
            {
                "name": "Yukon",
                "abbreviation": "YT",
            },
            {
                "name": "Northwest Territories",
                "abbreviation": "NT",
            }
        ];
        const currentSelectedIndex = 1;
        const answerSheet = ["", ""];
        
        act(() => {
            render(<AnswerBoard areaData={areaData}
                                currentSelectedIndex={currentSelectedIndex}
                                answerSheet={answerSheet}
                                setState={null}/>, container);
    
            let answerBoardInstance = container.getElementsByClassName(AnswerBoard.className)[0];
            expect(answerBoardInstance).toBeDefined();
            
            let answerBoxInstances = answerBoardInstance.getElementsByTagName("ul")[0].childNodes;
            expect(answerBoxInstances.length).toBe(areaData.length);
        });
    })
});