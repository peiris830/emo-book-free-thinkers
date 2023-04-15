import random
import requests
import csv


# Set the path to your CSV file

if mood == "Happy":
    csv_path = 'D:\sdgp\dataset\data_set\happydata.csv'
elif mood == "Sad":
    csv_path = 'D:\sdgp\dataset\data_set\sad.csv'
elif mood == "Anger":
    csv_path = 'D:\sdgp\dataset\data_set/anger.csv'
else:
    csv_path = 'D:\sdgp\dataset\data_set\joyful.csv'


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




    
