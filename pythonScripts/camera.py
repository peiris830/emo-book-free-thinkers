import cv2
import numpy as np
from keras.preprocessing import image
from keras.utils import img_to_array

# Open the default camera (index 0)
cap = cv2.VideoCapture(0)

# Check if the camera was opened successfully
if not cap.isOpened():
    print("Error opening video stream or file")

# Read until the video is completed or the user quits
while cap.isOpened():
    # Capture frame-by-frame
    ret, frame = cap.read()
    if ret:
        # Display the resulting frame
        cv2.imshow('Frame', frame)
        # Press 'q' to quit
        if cv2.waitKey(25) & 0xFF == ord('q'):
            break
        elif cv2.waitKey(25) & 0xFF == ord('s'):
            img = cv2.resize(frame, (224, 224))
            # converts to greyscale
            img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            # turns the output into an array
            img = img_to_array(img)
            img = np.expand_dims(img, axis=0)
            img = img / 255.0
        else:
            break

# Release the camera and destroy all windows
cap.release()
cv2.destroyAllWindows()
