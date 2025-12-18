const a = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout((text) => {
            console.log(text)
        })
    })
}