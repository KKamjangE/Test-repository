import ReactGridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GridTest = () => {
    const layout = [
        { i: "A", x: 0, y: 0, w: 1, h: 1 },
        { i: "B", x: 1, y: 0, w: 1, h: 2 },
        { i: "C", x: 3, y: 0, w: 1, h: 1 },
        { i: "D", x: 0, y: 1, w: 1, h: 1 },
        { i: "E", x: 2, y: 1, w: 1, h: 1 },
        { i: "F", x: 0, y: 2, w: 1, h: 1 },
        { i: "G", x: 1, y: 2, w: 1, h: 1 },
        { i: "H", x: 2, y: 2, w: 1, h: 1 },
    ];
    return (
        <ReactGridLayout
            className="layout"
            layout={layout}
            cols={3}
            maxRows={4}
            rowHeight={100}
            width={600}
            isResizable={false}
            onDragStop={(layout) => console.log(layout)}
        >
            {layout.map((item) => (
                <div
                    key={item.i}
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    {item.i}
                </div>
            ))}
        </ReactGridLayout>
    );
};

export default GridTest;
