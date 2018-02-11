Using Google Weather API to create a Super Cool Weather App in Node.js.

1. Navigate to the base-directory from node.
2. Run npm install.
3. Run node app-promise -a "address"

    a. "address" can be " ZIP Code or Street Address along with city name"
    
    b. Sample Argument
        
        I/P:
        
        node app-promise -a "7708 llyod drive dallas"

        O/P:
            
        Right now in  Dallas
        It is 31.48 °F and It feels like 22.72 °F.
        You can expect a high of 40.94 °F  and a low of 29.16 °F .
        Moreover it's going to be Light rain on Saturday and next Sunday, with temperatures rising to 81°F on Thursday.

        
     c. Help is available
     
        I/P : 
        
        node app-promise
        
        O/P:
        
        Options:
          -a, --address  Enter an Address to fetch weather           [string] [required]
          --help, -h     Show help                                             [boolean]

        
