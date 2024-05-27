import Lottie from "lottie-react";
import confetti from "./assets/lottie/confetti.json";

const LottieTest = () => {
    return (
        <div>
            <Lottie
                animationData={confetti}
                style={{ height: "100vh", backgroundColor: "white" }}
            />
        </div>
    );
};

export default LottieTest;
