Using Google Weather API to create a Super Cool Weather App in Node.js.

1. Navigate to the base-directory from node.
2. Run npm install.
3. Replace your Google API and Dark-Sky API key at respective locations in app-promise.js file.
   (The ones added in the project will not work, they are mock).
4. Run node app-promise -a "address" -u "Unit"  

    a. "address" can be " ZIP Code or Street Address along with city name"
        "unit" cam be either 'F' for fahrenheit or 'C' for Celsius.
    
    b. Use Cases:
        
       i. Help I/P:
       
        node app-promise -help
        
        O/P:
        
        Options:
          -a, --address  Enter an Address to fetch weather
                                       [string] [required] [default: "2345 Collins, TX"]
          -u, --unit     Enter Unit C or F                       [string] [default: "C"]
          --help, -h     Show help                                             [boolean]
 
        
       ii.  I/P:
        
        node app-promise -a "7708 llyod drive dallas" -u 'F'

        O/P:
            
        Right now in  Dallas
        It is 31.48 °F and It feels like 22.72 °F.
        You can expect a high of 40.94 °F  and a low of 29.16 °F .
        Moreover it's going to be Light rain on Saturday and next Sunday, with temperatures rising to 81°F on Thursday.
        
                
      iii. Without Arguments it gives weather for default city : Collins, TX
     
        I/P : 
        
        node app-promise
        
        O/P:
        
        Right now in  Denton County
        It is 1 °C and It feels like -4 °C.
        You can expect a high of 5 °C  and a low of -4 °C.
        Moreover it's going to be Light rain on Friday and Saturday, with temperatures rising to 77°F on Thursday.
 