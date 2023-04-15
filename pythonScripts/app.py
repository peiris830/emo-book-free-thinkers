import io

import numpy as np
import pandas as pd
import tensorflow as tf
from PIL import Image
from tensorflow import keras
from flask import Flask, jsonify, request

app = Flask(__name__)

# Load VGG16 model and pre-trained weights
model = tf.keras.load_model('keras_model.h5')


# Load book features and build nearest neighbors model
# books_df = pd.read_csv('books.csv')
# book_features = np.array(books_df.iloc[:, 1:])
# nn = NearestNeighbors(n_neighbors=5, algorithm='brute', metric='cosine')
# nn.fit(book_features)


@app.route('/process-image', methods=['POST'])
def process_image():
    # Get the image file from the HTTP POST request
    file = request.files['image']

    # Load the image file using PIL
    img = Image.open(io.BytesIO(file.read()))

    # Convert the image to a NumPy array and preprocess it for VGG16
    # img = img_to_array(img)
    # img = np.expand_dims(img, axis=0)
    # img = preprocess_input(img)
    #
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
