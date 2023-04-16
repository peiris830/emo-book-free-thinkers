import {useState} from "react";
import axios from "axios";
//import { spawn } from "child_process";

/*const CaptureImgBtn = ({setImgSrc}) => {
    const [image, setImage] = useState(null);

    const capture = async () => {
        const { spawn } = require("child_process");
        const pythonProcess = spawn('python', ["D:\\Degree Material\\SDGP\\emo-book\\pythonScripts\\camera.py"]);
        pythonProcess.stdout.on('data', (data) => {
            console.log(data.toString());
            setImgSrc(data.toString());
        });
    }
}*/

const CaptureImgBtn = () => {
    const [emotion, setEmotion] = useState('');
    const [books, setBooks] = useState([]);

    const handleCaptureEmotion = () => {
        axios.post('http://localhost:5000/api/process-image')
            .then(response => {
                setEmotion(response.data.emotion);
                /*axios.post('/api/recommend-books', { emotion: response.data.emotion })
                    .then(response => setBooks(response.data.books))
                    .catch(error => console.log(error));*/
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <button onClick={handleCaptureEmotion}>Capture Emotion</button>
            {emotion && <p>Your emotion is {emotion}</p>}
            {books.length > 0 && (
                <ul>
                    {books.map(book => (
                        <li key={book._id}>{book.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CaptureImgBtn;