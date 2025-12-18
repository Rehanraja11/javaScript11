let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;.
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. 
I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
sentence = sentence.replaceAll(/%|\$|@|&|#|\.|,|;|\?|!/g, "");
sentence = sentence.replaceAll(/[%$@&#.,;?!]/g, "");
console.log(sentence);

let arr = sentence.split(" ")
console.log(arr)

console.log("1")
setTimeout(() => {
    console.log("2")
}, 0);
console.log("3")



console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
