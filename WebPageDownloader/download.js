// Motive: Download a page at a given URL and wries page's HTML to a file. URL mst be provided from the command line argument
// Require http module

const http = require('http')

// require file stream for writing to a file and path for cross compatibility and uuid for generating random values

const fs = require('fs')
const path = require('path')
const uuid = require('uuid/v1')

// specify url in commnd args -> process.argv object
const downloadPage = (url)=>{ 			// main function which passes in the url 

  const fetchPage = (url,callback)=>{            // third this function is called and returns call back as result

	http.get(url,(res) => {

		let buf = ''
		res.on('data',(chunk)=>{

			buf += chunk

		})

		res.on('end',()=>{
			callback(null,buf)

		})


	}).on('error',(error)=>{              // error at URL level/ GET request level

	console.log('Error message ${error.message}')
	callback(error)


}) // end of get request

   } // end of fetch function
	

	// Store each downlaod in a seperate folder

	const folderName = uuid()
	fs.mkdirSync(folderName)


	fetchPage(url,(error,data)=>{ // second this function is called and waits for call back
		if(error){
			console.log(error)
		}
		else{
		fs.writeFile(path.join(__dirname,folderName,'file.html'),data)
		console.log('File download completed')

		}
	})

} // end of download page function

downloadPage(process.argv[2]) // First this is called

// downloading a file -> GET request


// On receiving data, write to a file. data event
// write HTML to a file -> FileStream


