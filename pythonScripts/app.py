import csv
import io
import random

import cv2
import requests
import numpy as np
import pandas as pd
import tensorflow as tf
from PIL import Image
from keras.utils import img_to_array
from tensorflow import keras
from flask import Flask, jsonify, request

app = Flask(__name__)

# with tf.keras.utils.custom_object_scope({'CohenKappa': keras.metrics.CohenKappa}):
model = tf.keras.models.load_model('keras_model.h5')


# Load book features and build nearest neighbors model
# books_df = pd.read_csv('books.csv')
# book_features = np.array(books_df.iloc[:, 1:])
# nn = NearestNeighbors(n_neighbors=5, algorithm='brute', metric='cosine')
# nn.fit(book_features)


@app.route('/process-image', methods=['POST'])
def process_image():
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

                prediction = model.predict(img)
                emotion_labels = ['Happy', 'Angry', 'Fear', 'Sad']
                emotion = emotion_labels[np.argmax(prediction)]

                if emotion == "Happy":
                    csv_path = '../books/happydata.csv'
                elif emotion == "Sad":
                    csv_path = '../books/sad.csv'
                elif emotion == "Angry":
                    csv_path = '../books/anger.csv'
                else:
                    csv_path = '../books/joyful.csv'


                # Open the CSV file using the built-in `open()` function
                with open(csv_path, 'r') as csv_file:
                    # Use the `csv.reader()` function to create a reader object
                    csv_reader = csv.reader(csv_file)

                    # Skip the header row (if present)
                    next(csv_reader)

                    # Create an empty list to store the values from the desired column
                    Book_name =[]
                    Author_name =[]

                    # Iterate over each row in the CSV file and extract the value from the desired column
                    for row in csv_reader:
                        column_value_1 = row[0]
                        column_value = row[1]

                        Book_name.append(column_value_1)
                        Author_name.append(column_value)


                # Set the URL for the Google Books API
                url = 'https://www.googleapis.com/books/v1/volumes'



                random_index = random.randint(0,len(Book_name)-1)

                title = Book_name[random_index]
                author = Author_name[random_index]

                # Set the parameters for the API request
                params = {'q': f'intitle:{title}+inauthor:{author}'}

                # Send the API request and retrieve the JSON response
                response = requests.get(url, params=params)
                json_response = response.json()

                # Extract the book ID from the JSON response
                book_id = json_response['items'][0]['id']

                # Print the book & ID
                print('Book name :',Book_name[random_index])
                print('Author name :',Author_name[random_index])
                print('Book ID:', book_id)
            else:
                break

    # Release the camera and destroy all windows
    cap.release()
    cv2.destroyAllWindows()

    # # Use VGG16 to extract features from the image
    # features = model.predict(img).flatten()
    #
    # # Use nearest neighbors to find the most similar books
    # distances, indices = nn.kneighbors([features])
    # recommended_books = []
    # for index in indices[0]:
    #     recommended_books.append({
    #         'title': books_df.iloc[index, 0],
    #         'author': books_df.iloc[index, -1],
    #         'image_url': books_df.iloc[index, -2]
    #     })
    #
    # # Return the recommended books as a JSON response
    # return jsonify({'recommended_books': recommended_books})


if __name__ == '__main__':
    app.run(debug=True)

