import { Bar, BarTotals, ResponsiveBar, ResponsiveBarCanvas } from "@nivo/bar";

const data = [
    {
        country: "AD",
        "hot dog": 116,
        burger: 143,
        sandwich: 148,
        kebab: 138,
        fries: 137,
        donut: 74,
    },
    {
        country: "AE",
        "hot dog": 196,
        burger: 40,
        sandwich: 11,
        kebab: 170,
        fries: 45,
        donut: 126,
    },
    {
        country: "AF",
        "hot dog": 176,
        burger: 95,
        sandwich: 126,
        kebab: 161,
        fries: 84,
        donut: 138,
    },
    {
        country: "AG",
        "hot dog": 38,
        burger: 72,
        sandwich: 102,
        kebab: 106,
        fries: 101,
        donut: 40,
    },
    {
        country: "AI",
        "hot dog": 136,
        burger: 164,
        sandwich: 108,
        kebab: 166,
        fries: 118,
        donut: 13,
    },
    {
        country: "AL",
        "hot dog": 138,
        burger: 64,
        sandwich: 60,
        kebab: 176,
        fries: 191,
        donut: 39,
    },
    {
        country: "AM",
        "hot dog": 148,
        burger: 66,
        sandwich: 14,
        kebab: 108,
        fries: 164,
        donut: 99,
    },
];

const ChartDemo = () => {
    return (
        <div style={{ width: 1000, height: 700 }}>
            <ResponsiveBarCanvas
                data={data}
                keys={[
                    "hot dog",
                    "burger",
                    "sandwich",
                    "kebab",
                    "fries",
                    "donut",
                ]}
                indexBy="country"
                margin={{ top: 50, right: 60, bottom: 130, left: 60 }}
                padding={0.3}
                layout="vertical"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "category10" }}
                borderColor={{ theme: "background" }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "middle",
                    legendOffset: 32,
                    truncateTickAt: 0,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "middle",
                    legendOffset: -40,
                    truncateTickAt: 0,
                }}
                enableGridX={true}
                enableGridY={false}
                enableTotals={true}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 3]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: 80,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={(e) =>
                    e.id +
                    ": " +
                    e.formattedValue +
                    " in country: " +
                    e.indexValue
                }
            />
        </div>
    );
};

export default ChartDemo;
