module.exports = (error) => {
    if (error.errors){
        const errorArr = Object.values(error.errors)
        const output = { message: errorArr.join(', ')};
        return output
    }
    return {message: error.message}
}