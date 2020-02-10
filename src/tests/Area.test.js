import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Area from "../components/Area";

describe("Map Component Tests", () => {
    
    const color = "#000000";
    
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
    
    it("Expect render nothing.", () => {
        act(() => {
            const graphData = [];
            
            render(<Area graphData={graphData} color={color}/>, container);
            
            let mapInstance = container.firstChild;
            expect(mapInstance).toBeNull();
        });
    })
    
    it("Expect render 'path' tag.", () => {
        act(() => {
            const graphData = ["test SVG#1"];
            
            render(<Area graphData={graphData} color={color}/>, container);
            
            let mapInstance = container.getElementsByTagName("path")[0];
            expect(mapInstance).toBeDefined();
        });
    })
    
    it("Expect render 'g' tag.", () => {
        act(() => {
            const graphData = ["test SVG#1", "test SVG#2"];
            
            render(<Area graphData={graphData} color={color}/>, container);
            
            let mapInstance = container.getElementsByTagName("g")[0];
            expect(mapInstance).toBeDefined();
            expect(mapInstance.style).toHaveProperty("fill", color);
        });
    })
});