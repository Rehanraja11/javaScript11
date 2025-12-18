// //  Api    Aplication Programming Interface
// // Api work Is Send Request To Server and get Response From Server





// let url = `https://official-joke-api.appspot.com/random_joke`

// async function get() {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log(data)


//     }
//     catch (e) {
//         console.log("Bhai Abhi filhal Aap Ke Lag Chuke hai", e)
//     }
// }
// get()



// async function getData() {
//     const response = await fetch('https://randomuser.me/api/')
//     const data = await response.json();
//     console.log(data)
// }

// getData().catch(error => console.log('This is Error ', error));



// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(mhen => mhen.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// async function getusers() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users/11')
//         const data = await res.json()
//         console.log(data)
//     }
//     catch (e) {
//         console.log(e)
//     }

// }

// getusers()


let data = {
    userId: 11,
    name: 'Riyaz - Haq',
}

async function Postdata() {
    const theData = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: 'DELETE',


    });

    const all = await theData.json()
    console.log(all)
}

Postdata()



// Naazo Andaz sy Kahete hai Ke Jina Hoga ?
// Zahar Bhi Dete Hai Toh Kahete Hai ke Pina hoga
// Jab Main Pita Hu Toh Kahte Hai Marta Hi Nahi
// jab Main Marta Hu Toh kahete Hai Ke Jina Hoga 