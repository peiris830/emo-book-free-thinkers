import {useState} from "react";
import { spawn } from "child_process";

const CaptureImgBtn = ({setImgSrc}) => {
    const [image, setImage] = useState(null);

    const capture = async () => {
        const { spawn } = require("child_process");
        const pythonProcess = spawn('python', ["D:\\Degree Material\\SDGP\\emo-book\\pythonScripts\\camera.py"]);
        pythonProcess.stdout.on('data', (data) => {
            console.log(data.toString());
            setImgSrc(data.toString());
        });
    }
}

export default CaptureImgBtn;