const con = require('../configs/db')

module.exports = {
    getBooks: () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT book.*,category.name as category FROM book INNER JOIN category ON category.categoryid = book.category_id', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    detailBook: (bookName) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT book.*,category.name as category FROM book INNER JOIN category ON category.categoryid = book.category_id AND book.name = ? ', bookName, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })

    },
    bookByCategory: (bookCategory) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT book.*,category.name as category FROM book INNER JOIN category ON category.categoryid = book.category_id AND category.name = ? ', bookCategory, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })

    },
    bookByLocation: (bookLocation) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT book.*,category.name as category FROM book INNER JOIN category ON category.categoryid = book.category_id AND book.location = ? ', bookLocation, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    postBook: (data) => {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO book SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    patchBook :(data,bookid) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE book SET ? WHERE bookid = ?', [data, bookid], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteBook :(bookid) => {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM book WHERE bookid = ? ', bookid, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
    
}