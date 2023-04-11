import requests
import json
import csv
import numpy as np

# Set the path to your CSV file
csv_path = 'D:\sdgp\dataset\data_set\happydata.csv'


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
        column_value_1 = row[0]  # Replace `0` with the index of the desired column
        column_value = row[1]
        
        Book_name.append(column_value_1)
        Author_name.append(column_value)

        #concat_array = np.concatenate((Book_name, Author_name))


    
    # If you want to Print the list of books name this is the code
    #print(np.Book_name)

    # If you want to Print the list of author name this is the code
    #print(np.Author_name)

    #print(concat_array)

# Set the URL for the Google Books API
url = 'https://www.googleapis.com/books/v1/volumes'

for i in Book_name :
    # Set the book title and author you want to search for
    title = i
    author = "vidushan"

    # Set the parameters for the API request
    params = {'q': f'intitle:{title}+inauthor:{author}'}

    # Send the API request and retrieve the JSON response
    response = requests.get(url, params=params)
    json_response = response.json()

    # Extract the book ID from the JSON response
    book_id = json_response['items'][0]['id']

    # Print the book ID
    print('Book ID:', book_id)
    