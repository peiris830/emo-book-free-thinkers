import {useState} from "react";
import { spawn } from "child_process";

const CaptureImgBtn = ({setImgSrc}) => {
    const [isCapturing, setIsCapturing] = useState(false);

    const captureImg = () => {
        setIsCapturing(true);
        const pythonProcess = spawn('python', ["../../pythonScripts/camera.py"]);
        pythonProcess.stdout.on('data', (data) => {
            console.log(data.toString());
            setImgSrc(data.toString());
            setIsCapturing(false);
        });
    };

    return (
        <button onClick={captureImg} disabled={isCapturing}>
            {isCapturing ? "Capturing..." : "Capture Image"}
        </button>
    );
}

export default CaptureImgBtn;