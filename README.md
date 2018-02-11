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

        
     c. Without Arguments it gives weather for default city : Collins, TX
     
        I/P : 
        
        node app-promise
        
        O/P:
        
        Right now in  Denton County
        It is 28.4 °F and It feels like 18.6 °F.
        You can expect a high of 41.41 °F  and a low of 24.33 °F .
        Moreover it's going to be Light rain on Saturday and next Sunday, with temperatures rising to 82°F on Thursday.                                           [boolean]

        
