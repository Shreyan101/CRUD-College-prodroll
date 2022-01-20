const readline = require('readline');

var college = {
    students: {
        name: ['shreyan', 'vishal'],
        usn: ['1MV18CS104', '1MV18CS124'],
        Branch: ['cse', 'ise'],
        Year: ['iv', 'iv'],
        Marks: ['90', '80']
    },
    Branch: [
        'CSE', 'ISE', ' ECE', 'EEE', 'MECH', 'CIVIL', 'TELECOM'
    ],
    Faculty: {
        CSE: ['Cprof1', 'Cprofc2', 'Cprofc3', 'Cprofc4'],
        ISE: ['Iprof1', 'Iprofc2', 'Iprofc3', 'Iprofc4'],
        EEE: ['Eprof1', 'Eprofc2', 'Eprofc3', 'Eprofc4'],
        MECH: ['Mechprof1', 'Mechprofc2', 'Mechprofc3', 'Mechprofc4'],
        CIVIL: ['Civilprof1', 'Civilprofc2', 'Civilprofc3', 'Civilprofc4']
    },
}

var temp;
var indexNo = "";

console.log('College Database:')
console.log('1:AddCollege Details\n2:Fetch\n3:update\n4:Delete\n5:Exit\n')



// Adding student
const addName = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Student name\n", (Input) => {
        userInput.close();
        college.students.name.push(Input);
        console.log(college.students.name);
    });
}

const addBranch = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Student Branch\n", (Input) => {
        userInput.close();
        college.students.Branch.push(Input);
        console.log(college.students.Branch);
    });
}

const addUSN = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Student usn\n", (Input) => {
        userInput.close();
        college.students.usn.push(Input);
        console.log(college.students.usn);
    });
}

const addYear = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Year\n", (Input) => {
        userInput.close();
        college.students.Year.push(Input);
        console.log(college.students.Year);
    });
}



const addMarks = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Marks\n", (Input) => {
        userInput.close();
        college.students.Marks.push(Input);
        console.log(college.students.Marks);
    });
}

const addStudent = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Student name 2:Add Branch 3:Add USN 4:AddYear 5:Add Marks\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                addName();
                break
            case '2':
                addBranch();
                break
            case '3':
                addUSN();
                break
            case '4':
                addYear();
                break
            case '5':
                addMarks();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });
}


// adding Faculty
const addCSE = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Faculty in CSE\n", (Input) => {
        userInput.close();
        college.Faculty.CSE.push(Input);
        console.log(college.Faculty.CSE);
    });
}


const addISE = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Faculty in ISE\n", (Input) => {
        userInput.close();
        college.Faculty.ISE.push(Input);
        console.log(college.Faculty.ISE);
    });
}


const addEEE = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Faculty in EEE\n", (Input) => {
        userInput.close();
        college.Faculty.EEE.push(Input);
        console.log(college.Faculty.EEE);
    });
}


const addMECH = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Faculty in MECH\n", (Input) => {
        userInput.close();
        college.Faculty.MECH.push(Input);
        console.log(college.Faculty.MECH);
    });
}



const addCIVIL = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Add Faculty in CIVIL\n", (Input) => {
        userInput.close();
        college.Faculty.CIVIL.push(Input);
        console.log(college.Faculty.CIVIL);
    });
}

const addFaculty = () => {
        const userInput = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        userInput.question("\n1:Add Faculty CSE 2:Add Faculty ISE 3:Faculty EEE 4:Faculty MECH 5:Add Faculty CIVIL\n", (Input) => {
            userInput.close();
            switch (Input) {
                case '1':
                    addCSE();
                    break
                case '2':
                    addISE();
                    break
                case '3':
                    addEEE();
                    break
                case '4':
                    addMECH();
                    break
                case '5':
                    addCIVIL();
                    break
                default:
                    console.log('Enter correct value');
                    break
            }

        });
    }
    // add to college
const AddCollege = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("Select -\n1:Add Student 2:Add Branch 3:Add FAculty\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                addStudent();
                break
            case '2':
                addBranch();
                break
            case '3':
                addFaculty();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });
}


// fetch college details
const fetchCollege = () => {
    console.log('\n\nselect to fetch College Details: \n1:studentDetail\n2:Branches\n3:Faculty\n');

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("Select from menu:\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                StudentDetail();
                break
            case '2':
                BranchDetail();
                break
            case '3':
                FacultyDetail();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });
}


const StudentDetail = () => {
    for (var i = 0; i < college.students.name.length; i++) {
        console.log(`Name - ${college.students.name[i]}\nUSN - ${college.students.usn[i]}\nBranch - ${college.students.Branch[i]}\nYear - ${college.students.Year[i]}\nMarks - ${college.students.Marks[i]}\n`);
    }
}
const BranchDetail = () => {
    console.log('Current Branches -');
    college.students.Branch.forEach((data) => {
        console.log(`${data} `);
    })

}

const FacultyDetail = () => {
    console.log('Current Faculty Detail for CSE Branch-');
    college.Faculty.CSE.forEach((data) => {
        console.log(`${data}`);
    })
    console.log('\nCurrent Faculty Detail for ISE Branch-');
    college.Faculty.ISE.forEach((data) => {
        console.log(`${data}`);
    })
    console.log('\nCurrent Faculty Detail for EEE Branch-');
    college.Faculty.EEE.forEach((data) => {
        console.log(`${data}`);
    })
    console.log('\nCurrent Faculty Detail for MECH Branch-');
    college.Faculty.MECH.forEach((data) => {
        console.log(`${data}`);
    })
    console.log('\nCurrent Faculty Detail for CIVIL Branch-');
    college.Faculty.CIVIL.forEach((data) => {
        console.log(`${data}`);
    })

}








// update college Details


searchNameIndex = () => {
    console.log("s.no        name");

    for (var i = 0; i < college.students.name.length; i++) {
        console.log(`${i}             ${college.students.name[i]} `)
    }

    console.log('select s.no u want to update');

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Enter Name to be updated\n", (Input) => {
        userInput.close();
        indexNo = Input;
        console.log(indexNo);
    });
}



updateIndexVal = (temp) => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Enter Name to be updated\n", (Input) => {
        userInput.close();
        college.students.name[temp] = Input
        console.log(college.students.name);
    });


}

updateName = () => {
    console.log('\n\nselect to update name: 1:find name  2:update name\n');

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("Select from menu:\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                searchNameIndex();
                break
            case '2':
                updateIndexVal();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });
}





const UpdateStudentDetail = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:Update Student name 2:update Branch 3:update USN 4:update Year 5:update Marks\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                updateName();
                break
            case '2':
                updateBranch();
                break
            case '3':
                updateUSN();
                break
            case '4':
                updateYear();
                break
            case '5':
                updateMarks();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });

}


const updateCollege = () => {

    console.log('\n\nselect to Update College Details: \n1:UpdatestudentDetail\n2:UpdateBranches\n3:updateFaculty\n');

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("Select from menu:\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                UpdateStudentDetail();
                break
            case '2':
                UpdateBranchDetail();
                break
            case '3':
                updateFacultyDetail();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });
}

// delete college detail

deleteName = () => {
    console.log("s.no          name");

    for (var i = 0; i < college.students.name.length; i++) {
        console.log(`${i}                      ${college.students.name[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        console.log(indexNo);
        delete college.students.name[indexNo];
        console.log(college.students.name);
    });


}

deleteStudentBranch = () => {

    console.log("s.no          Branch");

    for (var i = 0; i < college.students.Branch.length; i++) {
        console.log(`${i}                      ${college.students.Branch[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        console.log(indexNo);
        delete college.students.Branch[indexNo];
        console.log(college.students.Branch);
    });
}


deleteUSN = () => {

    console.log("s.no          USN");

    for (var i = 0; i < college.students.usn.length; i++) {
        console.log(`${i}                      ${college.students.usn[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        console.log(indexNo);
        delete college.students.usn[indexNo];
        console.log(college.students.usn);
    });
}


deleteYear = () => {

    console.log("s.no          Year");

    for (var i = 0; i < college.students.Year.length; i++) {
        console.log(`${i}                      ${college.students.Year[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        console.log(indexNo);
        delete college.students.Year[indexNo];
        console.log(college.students.Year);
    });
}



deleteMarks = () => {

    console.log("s.no          Marks");

    for (var i = 0; i < college.students.Marks.length; i++) {
        console.log(`${i}                      ${college.students.Marks[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        console.log(indexNo);
        delete college.students.Marks[indexNo];
        console.log(college.students.Marks);
    });
}



const deleteStudentDetail = () => {
    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n1:deleteStudent name 2:delete Branch 3:delete USN 4:delete Year 5:delete Marks\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                deleteName();
                break
            case '2':
                deleteStudentBranch();
                break
            case '3':
                deleteUSN();
                break
            case '4':
                deleteYear();
                break
            case '5':
                deleteMarks();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });

}



const deleteBranchDetail = () => {
    console.log("s.no          Branch");

    for (var i = 0; i < college.Branch.length; i++) {
        console.log(`${i}                      ${college.Branch[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        delete college.Branch[indexNo];
        console.log(college.Branch);
    });
}



const deleteBranchDetailCse = () => {
    console.log("s.no          Faculty");

    for (var i = 0; i < college.Faculty.CSE.length; i++) {
        console.log(`${i}                      ${college.Faculty.CSE[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        delete college.Faculty.CSE[indexNo];
        console.log(college.Faculty.CSE);
    });
}



const deleteBranchDetailIse = () => {
    console.log("s.no          Faculty");

    for (var i = 0; i < college.Faculty.ISE.length; i++) {
        console.log(`${i}                      ${college.Faculty.ISE[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        delete college.Faculty.ISE[indexNo];
        console.log(college.Faculty.ISE);
    });
}


const deleteBranchDetailEEE = () => {
    console.log("s.no          Faculty");

    for (var i = 0; i < college.Faculty.EEE.length; i++) {
        console.log(`${i}                      ${college.Faculty.EEE[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        delete college.Faculty.EEE[indexNo];
        console.log(college.Faculty.EEE);
    });
}




const deleteBranchDetailMech = () => {
    console.log("s.no          Faculty");

    for (var i = 0; i < college.Faculty.MECH.length; i++) {
        console.log(`${i}                      ${college.Faculty.MECH[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        delete college.Faculty.MECH[indexNo];
        console.log(college.Faculty.MECH);
    });
}


const deleteBranchDetaiCivil = () => {
    console.log("s.no          Faculty");

    for (var i = 0; i < college.Faculty.CIVIL.length; i++) {
        console.log(`${i}                      ${college.Faculty.CIVIL[i]} `)
    }

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("\n'select s.no u want to delete'\n", (Input) => {
        userInput.close();
        indexNo = Input;
        delete college.Faculty.CIVIL[indexNo];
        console.log(college.Faculty.CIVIL);
    });
}







const deleteFacultyDetail = () => {
    console.log('\n\nselect to Faulty  to be changed: \n1:CSE\n2:ISE\n3:EEE\n4:MECH\n5:CIVIL\n');

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    userInput.question("Select from menu:\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                deleteBranchDetailCse();
                break
            case '2':
                deleteBranchDetailIse();
                break
            case '3':
                deleteBranchDetailEEE();
                break
            case '4':
                deleteBranchDetailMech();
                break
            case '5':
                deleteBranchDetaiCivil();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });


}



const deleteCollege = () => {

    console.log('\n\nselect to Delete College Details: \n1:DeletestudentDetail\n2:DeleteBranches\n3:DeleteFaculty\n');

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    userInput.question("Select from menu:\n", (Input) => {
        userInput.close();
        switch (Input) {
            case '1':
                deleteStudentDetail();
                break
            case '2':
                deleteBranchDetail();
                break
            case '3':
                deleteFacultyDetail();
                break
            default:
                console.log('Enter correct value');
                break
        }

    });
}





const Operation = () => {

    const userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    userInput.question("Select from menu:\n", (Input) => {
        userInput.close();

        switch (Input) {
            case '1':
                AddCollege();
                break
            case '2':
                fetchCollege();
                break
            case '3':
                updateCollege();
                break
            case '4':
                deleteCollege();
                break
            default:
                console.log('Enter correct value');
                break

        }
    });

}


Operation();