class App{
    constructor(bootstrapPath, libraryPath){
        this.bootstrapPath = bootstrapPath;
        this.libraryPath = libraryPath;
    }

    loadCss(stylesFiles){
        const headerDocument = document.getElementById("headDocument");
        console.log(stylesFiles);
        for (let index = 0; index < stylesFiles.length; index++) {
            const element = stylesFiles[index];
            headerDocument.innerHTML += "<link rel='stylesheet' href='"+this.libraryPath+element+"' type='text/css' media='all' />";    
            console.log("<link rel='stylesheet' href='"+this.libraryPath+element+"' type='text/css' media='all' />");
        }
        

    }

    loadBootstrap(){
        const headerDocument = document.getElementById("headDocument");
        headerDocument.innerHTML += "<link rel='stylesheet' href='"+this.bootstrapPath+"css/bootstrap.min.css' type='text/css' media='all' />";        

        headerDocument.innerHTML += "<script type='text/javascript' src='"+this.bootstrapPath+"js/bootstrap.min.js'></script>"; 
    }

    loadJs(javascriptsFiles){

        const headerDocument = document.getElementById("headDocument");
        for (let index = 0; index < javascriptsFiles.length; index++) {
            headerDocument.innerHTML += "<script type='text/javascript' src='"+this.libraryPath+element+"'></script>";        
        }
    }

    loadJquery(){
        

        
    }

    loadLastBlockJavascript(javascriptsFiles){

        const lastBlockJavascript = document.getElementById("lastBlockJavascript");
        for (let index = 0; index < javascriptsFiles.length; index++) {
            lastBlockJavascript.innerHTML += "<script type='text/javascript' src='"+this.libraryPath+element+"'></script>";        
        }
    }
}