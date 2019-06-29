const model = require('../models/bookModels2')
const response = require('../helpers/responses')

module.exports = {
    getBooks : (req,res) =>{
        if(req.query.location){
            model.bookByLocation(req.query.location)
            .then((results)=>{
                result = results[0]
                response.ok(result,200,res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }else if(req.query.category){
            model.bookByCategory(req.query.category)
            .then((results)=>{
                result = results[0]
                response.ok(result,200,res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }else if(Object.keys(req.query)[0] === undefined){
            model.getBooks()
            .then((results)=>{
                result = results
                response.ok(result,200,res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            res.send({error:"Not found",status:404,message:`${Object.keys(req.query)[0]} Not Found`})
        }
    },
    getBook : (req,res) =>{
        const bookName = req.params.bookName
        model.detailBook(bookName)
        .then((results)=>{
            result = results[0]
            response.ok(result,200,res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    postBook : (req,res) =>{
        const data = {
            name: req.body.name,
            writer: req.body.writer,
            location: req.body.location,
            category_id: req.body.category_id,
            created_at: new Date(),
            updated_at: new Date()
        }
        model.postBook(data)
        .then((results)=>{
            response.ok(data,200,res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    patchBook :(req,res) =>{
        const data = {
            name: req.body.name,
            writer: req.body.writer,
            location: req.body.location,
            category_id: req.body.category_id,
            updated_at: new Date()
        }
        const bookid = req.params.bookid
        model.patchBook(data,bookid)
        .then((results)=>{
            response.ok(data,200,res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    deleteBook:(req,res) =>{
        const bookid = req.params.bookid
        model.deleteBook(bookid)
        .then((results)=>{

            response.ok(results,200,res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}