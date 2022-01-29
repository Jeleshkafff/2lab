let name = ("Игорь")
let normalName =  name.substr(0,1).toUpperCase() + name.substr(1). toLowerCase()
console.log(normalName)
let surname = ("Дед")
let normalSurame =  surname.substr(0,1).toUpperCase() + surname.substr(1). toLowerCase()
console.log(normalSurame)
if (name == normalName && surname == normalSurame) 
{console.log("имя осталось без изменений")}
else {console.log ("имя было преобразованно ")}