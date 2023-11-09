// ให้เขียนโปรแกรมตรวจสอบว่า สายอักขระที่โจทย์กำหนดมาให้นี้ เป็นตัวอักษรพิมพ์เล็กทั้งหมด หรือตัวอักษรพิมพ์ใหญ่ทั้งหมด หรือมีทั้งตัวอักษรพิมพ์ใหญ่และพิมพ์เล็กผสมกันอยู่
// พิมพ์ใหญ่ พิมพ์เล็ก ผสม
// ให้พิมพ์คำตอบตามเงื่อนไขต่อไปนี้
// - ถ้าสาายอักขระปรอกอบด้วยตัวพิมพ์ใหญ่ทั้งหมด ให้พิมพ์ว่า "All Capital Letter"
// - ถ้าสาายอักขระปรอกอบด้วยตัวพิมพ์เล็กทั้งหมด ให้พิมพ์ว่า "All Small Letter"
// - ถ้าสาายอักขระปรอกอบด้วยตัวพิมพ์ใหญ่และพิมพ์เล็กผสมกันให้พิมพ์ว่า "Mix"



function letterCheck(input) {
    if (Boolean(input.match(/[A-Z]/))) { // if contain Up is true
        if (Boolean(input.match(/[a-z]/))) { // if contain Low is true
            console.log(`input : ${input}`);
            console.log('Output : Mix');
        } else {
            console.log(`input : ${input}`);
            console.log('Output : All Capital Letter');
        }

    } else if (Boolean(input.match(/[a-z]/))) {
        console.log(`input : ${input}`);
        console.log('Output : All Small Letter');
    }

}

letterCheck('jEIHFOHOdfsfwiryiqyeriqherNQWLJH')
letterCheck('asdfweulisdfioshdoflknsdlkfviwuiudfi')
letterCheck('USDFUYUDYFIWTEIYWEORHOWERHOWEOIRH')



// function containsUppercase(str) {
//     return Boolean(str.match(/[A-Z]/));
// }
// console.log(containsUppercase("javascript")); // false
// console.log(containsUppercase("PHP")); // true
// console.log(containsUppercase("Coding")); // true


