// require csvtojson module and filestream

const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')

// path to source file
const csvfilepath = './customerdata.csv'



converttojson = (csvfilepath,callback) =>{
	var data = []
	csvtojson().fromFile(csvfilepath).on('json',(jsonObj,rowIndex) => {
	
		data.push(jsonObj)


	}).on('done',(error)=>{

	if(error) return callback(error)
	callback(null,data)

	})

}
// Function call
converttojson(csvfilepath,(error,data)=>{

	if(error) return console.log(error)
	fs.writeFile(path.join(__dirname,'customerdata.json'),JSON.stringify(data,null,4),'utf-8',(err)=>{
		if(err) return console.log(err)
		
	console.log('Converting completed')
	})

})

 


