let email = "codecamp@gmail.com"

console.log(email)

console.log(email.includes("@"))
let emailSplit = email.split("@")
let emailID = emailSplit[0]
let emailAddress = emailSplit[1]
let maskingID = []

maskingID.push(emailID[0])
maskingID.push(emailID[1])
maskingID.push(emailID[2])
maskingID.push(emailID[3])
maskingID.push("*")
maskingID.push("*")
maskingID.push("*")
maskingID.push("*")

maskingID.join("")
console.log(maskingID.join(""))

let maskingEmail = maskingID.join("") + "@" + emailAddress
console.log(maskingEmail)