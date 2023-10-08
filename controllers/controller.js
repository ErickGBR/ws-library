const controller = async(data)=>{
    return {
        status:true,
        response:"OK",
        date: data
    };
}

module.exports = {metodo:controller, eco:controller};