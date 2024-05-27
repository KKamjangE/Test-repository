import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from "react-simple-maps";
import geo from "./geo.json";
import { useState } from "react";

const DataWindow = ({ selected }) => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 300,
                height: 100,
                border: "1px solid #000",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {selected && <p style={{ fontSize: 26 }}>{selected}</p>}
        </div>
    );
};

const SimpleMap = () => {
    const [selected, setSelected] = useState(null);

    const handleMouseEnter = (geoid) => {
        setSelected(geoid);
    };

    return (
        <div
            style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                height: 800,
                border: "1px solid #000",
                overflow: "hidden",
            }}
        >
            <ComposableMap
                projection={"geoMercator"}
                projectionConfig={{ scale: 90, center: [20, -30] }}
            >
                <ZoomableGroup>
                    <Geographies geography={geo}>
                        {({ geographies }) => {
                            return geographies.map((geo) => {
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        strokeWidth={1}
                                        // stroke="#ddd"
                                        style={{
                                            default: {
                                                fill: "#BFBFBF",
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#004961",
                                                outline: "none",
                                            },
                                            pressed: {
                                                fill: "#004961",
                                                outline: "none",
                                            },
                                        }}
                                        onMouseEnter={() =>
                                            handleMouseEnter(geo.id)
                                        }
                                        onMouseLeave={() => setSelected(null)}
                                    />
                                );
                            });
                        }}
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <DataWindow selected={selected} />
        </div>
    );
};

export default SimpleMap;
