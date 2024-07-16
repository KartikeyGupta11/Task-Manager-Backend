export const notFound = (req,res) =>{
    res.staus(400)
    .send("Route Not Exist")
}
