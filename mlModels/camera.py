import cv2

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
    else:
        break

# Release the camera and destroy all windows
cap.release()
cv2.destroyAllWindows()
