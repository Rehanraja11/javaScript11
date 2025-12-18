/*
Brief: Normalize id/name/email, validate email format, partition into { valid, invalid }

Input:
*/

rawUsers = [
    { id: "1", name: "  aLisha  ", email: " ALISHAEXAMP@LE.com" },
    { id: "3", name: " Ravi", email: "hye11@hey.org" },
    { id: "2", name: "Mira", email: "mira@exa0mple.com" },
    { id: "4", name: "Mira", email: "miranames@gmail.com" },


]

function partitionUsers(users) {
    let valid = [];
    let invalid = [];

    for (let u of users) {
        let id = u.id.trim();
        let name = u.name.trim().toLowerCase();
        let email = u.email.toLowerCase()

        let at = email.split("@").length - 1;

        let isValid =
            id
            && name
            && email.indexOf(" ") === -1
            && at === 1
            && !email.includes("..")
            && email.includes(".")


        // && email.lastIndexOf(".") > email.indexOf("@") + 1
        // && email.lastIndexOf(".") < email.length - 1;



        if (isValid) valid.push({ id, name, email });
        else invalid.push({ id, name, email });

    }

    return { valid, invalid };

}



console.log(partitionUsers(rawUsers));




// Output:
// {
//     valid: [
//         { id: "1", name: "aLIsha", email: "alisha@example.com" },
//         { id: "2", name: "Mira", email: "mira@example.com" }
//     ],
//         invalid: [
//             { id: "", name: "Ravi", email: "ravi@" }
//         ]
// }



// Valid
// user_123@test.co
// sample.mail@demo.org
// contact@sub.example.com
// info@my-domain.io
// alpha.beta@provider.co.uk



// Invalid
// plainaddress
// @missinglocal.com
// name@.com
// name@domain
// user@domain..com
// user@domain,com
// user@@doubleat.com
// .no-local-part@example.com
