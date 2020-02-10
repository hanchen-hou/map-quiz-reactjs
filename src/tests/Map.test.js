import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Map from "../components/Map";

describe("Map Component Tests", () => {
    
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
            render(<Map areaData={[]} viewBox={""} state={null}/>, container);
    
            let mapInstance = container.getElementsByClassName(Map.className)[0];
            expect(mapInstance).toBeDefined();
        });
    })
});