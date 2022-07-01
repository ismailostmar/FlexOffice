import React, { useState } from "react";
import { MapInteraction } from "react-map-interaction";
import PropTypes from "prop-types";
import ImageMapper from "react-img-mapper";


function Imagemap() {
    const [areas, setAreas] = useState([
        /*X , Y , Rayon*/
        {
            id: "test-0",
            shape: "circle",
            coords: [690, 133, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        },
        {
            id: "test-1",
            shape: "circle",
            coords: [690, 158, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        },
        {
            id: "test-2",
            shape: "circle",
            coords: [690, 182, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        },
        {
            id: "test-3",
            shape: "circle",
            coords: [640, 133, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        },
        {
            id: "test-4",
            shape: "circle",
            coords: [640, 158, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        },
        {
            id: "test-5",
            shape: "circle",
            coords: [640, 181, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        },
        {
            id: "test-6",
            shape: "circle",
            coords: [608, 133, 5],
            fillColor: "yellow",
            preFillColor: "#00fa19"
        }
    ]);

    const map = {
        name: "my-map-test",
        areas
    };

    return (
        <MapInteraction>
            {({ translation, scale }) => {
                return (
                    <div
                        style={{
                            transform: `translate(${translation.x}px, ${translation.y}px) scale(${scale})`,
                            transformOrigin: "0px 0px"
                        }}
                    >
                        <ImageMapper
                            src="images/plantest.png"
                            width={950}
                            height={320}
                            imgWidth={800}
                            onClick={(clicked) => {
                                console.log("clicked ", clicked, areas);
                                setAreas((prevState) => {
                                    return prevState.map((item) => {
                                        if (item.id === clicked.id) {
                                            return {
                                                ...item,
                                                preFillColor: "red"
                                            };
                                        }
                                        return item;
                                    });
                                });
                            }}
                            onMouseEnter={(Hovered) => {
                                console.log("Hovered ", Hovered);
                                Hovered.fillColor = "yellow";
                            }}
                            map={map}
                        />
                    </div>
                );
            }}
        </MapInteraction>
    );
};
Imagemap.propTypes = {
    showControls: PropTypes.bool
};
export default Imagemap;