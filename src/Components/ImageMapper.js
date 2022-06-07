import React, { useState } from "react";
import { MapInteraction } from "react-map-interaction";
import PropTypes from "prop-types";
import ImageMapper from "react-img-mapper";


function Imagemap() {
    const [areas, setAreas] = useState([
        {
            id: "test-0",
            shape: "circle",
            coords: [200, 78, 5],
            fillColor: "yellow",
            preFillColor: "#fa0000"
        },
        {
            id: "test-1",
            shape: "circle",
            coords: [300, 78, 5],
            fillColor: "yellow",
            preFillColor: "#fa0000"
        },
        {
            id: "test-2",
            shape: "circle",
            coords: [400, 78, 5],
            fillColor: "yellow",
            preFillColor: "#fa0000"
        },
        {
            id: "test-3",
            shape: "circle",
            coords: [500, 78, 5],
            fillColor: "yellow",
            preFillColor: "#fa0000"
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
                            width={1000}
                            height={400}
                            imgWidth={800}
                            onClick={(clicked) => {
                                console.log("clicked ", clicked, areas);
                                setAreas((prevState) => {
                                    return prevState.map((item) => {
                                        if (item.id === clicked.id) {
                                            return {
                                                ...item,
                                                preFillColor: "green"
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