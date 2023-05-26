import {ManageTeacher} from "./ManageTeacher";
import {ManageStudent} from "./ManageStudents";
import {Students} from "./students";
import {Teacher} from "./teacher";
import {MenuManager} from "./menu";

let readTest = require('readLine-sync')
let studentManage = new ManageStudent([])
let teacherManage = new ManageTeacher([])
let choice
let start = true

while(start){
    MenuManager.mainMenu()
    choice = readTest.question('Nhap tac vu muon thuc hien: ')
    switch(choice){
        case '1':
            for(let i=0; i < 3; i++){
                let student = new Students(readTest.question('Nhap ten hoc sinh: '),
                                           readTest.question('Nhap tuoi hoc sinh: '),
                                           readTest.question('Nhap diem hoc sinh: '))
                studentManage.addStudent(student)
            }
            console.log(`--------------------------------------------------------------`)
            break
        case '2':
            studentManage.editStudent(readTest.question('Nhap ten hoc sinh ban muon thay doi:  '))
            console.log(`--------------------------------------------------------------`)
            break
        case '3':
            studentManage.deleteStudent(readTest.question('Nhap ten hoc sinh ban muon xoa:  '))
            console.log(`--------------------------------------------------------------`)
            break
        case '4':
            studentManage.findStudent(readTest.question('Nhap ten hoc sinh ban muon tim:  '))
            console.log(`--------------------------------------------------------------`)
            break
        case '5':
            studentManage.findMaxPoint()
            console.log(`--------------------------------------------------------------`)
            break
        case '6':
            studentManage.displayStudents()
            console.log(`--------------------------------------------------------------`)
            break
        case '7':
            for(let i=0; i < 3; i++){
                let teacher = new Teacher(readTest.question('Nhap ten giao vien: '),
                                           readTest.question('Nhap tuoi giao vien: '),
                                           readTest.question('Nhap diem giao vien: '))
                teacherManage.addTeacher(teacher)
            }
            console.log(`--------------------------------------------------------------`)
            break
        case '8':
            teacherManage.editTeacher(readTest.question('Nhap ten giao vien muon sua: '))
            console.log(`--------------------------------------------------------------`)
            break
        case '9':
            teacherManage.deleteTeacher(readTest.question('Nhap ten giao vien muon xoa: '))
            console.log(`--------------------------------------------------------------`)
            break
        case '10':
            teacherManage.arrangeTeacher()
            console.log(`--------------------------------------------------------------`)
            break
        case '11':
            teacherManage.pickTeacher30_40()
            console.log(`--------------------------------------------------------------`)
            break
        case '12':
            teacherManage.displayTeacher()
            console.log(`--------------------------------------------------------------`)
            break
        default:
            start = false
            break
    }
}


