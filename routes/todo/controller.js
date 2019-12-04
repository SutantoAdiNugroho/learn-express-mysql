const {connection} = require("../../config")

module.exports = {
    getAll: (req, res) => {
        connection.query(`select * from todo where email = ?`, req.params.email ,(error, results, fields) => {
            if (error) {
                res.status(500).send({ message: "Theres is something error"})
            } else {
                res.status(200).send({
                    message: "Show all datas",
                    data: results
                })
            }
        })
    },
    addOne: (req, res) => {
        connection.query("insert into todo SET ?", req.body, (error, results, fields) => {
            console.log(req.body)
                if (error) {
                    console.log(error);
                    res.status(500).send({message: "Theres is something error"})
                } else {
                    res.status(200).send({
                        message: "Succes add todo",
                        data: results
                    })
                }
            })
    }, 
    updateOne: (req, res) => {
        connection.query('update todo set ? where id = ?', [req.body, `${req.params.id}`], (error, results, fields) => {
            if (error) {
                console.log(error);
                res.status(500).send({message: "Theres is something error"})
            } else {
                res.status(200).send({
                    message: "Succes update todo",
                    data: results
                })
            }
        })
    },
    deleteOne: (req, res) => {
        connection.query('delete from todo where id = ?', req.params.id, (error, results, fields) => {
            if (error) {
                console.log(error);
                res.status(500).send({message: "Theres is something error"})
            } else {
                res.status(200).send({
                    message: "Succes delete todo",
                    data: results
                })
            }
        })
    }
}