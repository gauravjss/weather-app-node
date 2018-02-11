Using Google Weather API to create a Super Cool Weather App in Node.js.

1. Navigate to the base-directory from node.
2. Run npm install.
3. Run node app-promise -a "address"

    a. "address" can be " ZIP Code or Street Address along with city name"
    
    b. Sample Argument
        
        I/P:
        
        node app-promise -a "7708 llyod drive dallas"

        O/P:
            
        7708 Lloyd Valley Ln, Dallas, TX 75230, USA
        It's currently 31.06F and It feels like 22.22F.
        
     c. Help is available
     
        I/P : 
        
        node app-promise
        
        O/P:
        
        Options:
          -a, --address  Enter an Address to fetch weather           [string] [required]
          --help, -h     Show help                                             [boolean]

        
