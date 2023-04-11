import tensorflow as tf
from tensorflow import keras
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/edit/<string:name>', methods=['GET'])
def getEmotionList(name):
    # load the pre-trained model
    model = keras.models.load_model('keras_model.h5')
    # define the class labels
    class_labels = ['Happy', 'Angry', 'Fear', 'Sad']
    img_array_list = []
    img_name_list = []

    for i in range(1, 20):
        # num_displayed = 0
        img = keras.preprocessing.image.load_img(f'images/{i}.png', target_size=(224, 224))
        img_array = keras.preprocessing.image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0)
        img_array = keras.applications.mobilenet_v2.preprocess_input(img_array)

        # make predictions on the test image
        predictions = model.predict(img_array)
        predicted_class = class_labels[tf.argmax(predictions, axis=1)[0]]
        # img_name_list.append(f'{i}.jpg')

        if predicted_class == "Happy":
            print(predicted_class)
            img_name_list.append(f'{i}.jpg')
        elif predicted_class == "Angry":
            print(predicted_class)
            img_name_list.append(f'{i}.jpg')
        elif predicted_class == "Fear":
            print(predicted_class)
            img_name_list.append(f'{i}.jpg')

    return jsonify({'img_name_list': img_name_list})


if __name__ == '__main__':
    app.run(debug=True)