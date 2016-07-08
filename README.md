# json2commas
Json 2 Commas by Chuck

This script allows you to read a big .json file and convert it into a CSV file.

### Instructions:
  
  1. Clone repository.
  2. npm install
  3. Place the json file in the root folder and modify the jsonData variable with the name of your json file.
  4. Modify the variable on line 17 with the key fields you want to extract from your json.

### Input file structure:

    [
     {
       name: Chuck,
       lastname: Cruz,
       age: 28
      },
      {
        name: Stella,
        lastname: Artois,
        age: NA
      }
    ]

### Output file:
file.csv
