import express from 'express'

const app=express()
const PORT=process.env.PORT || 8000

app.get('/',(req,res)=>{
    return res.json("welcome to jumanji")
})


app.listen(PORT,()=>{
    console.log(`app listening on port${PORT}`)
})

const age=56


