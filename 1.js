let password = ("fyu")

if ( password.length > 4 && ( password.includes('-') || password.includes('_') ) ) 
    
    {console.log("Надежный пароль.")}
else 
    
    {console.log("не надежный пароль.")}