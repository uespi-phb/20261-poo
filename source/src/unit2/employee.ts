
class Employee {
    name: string
    department: string

    constructor(personName: string, departmentName: string) {
        this.name = personName
        this.department = departmentName
    }

    work(): void {
        console.log(`${this.name} trabalha em ${this.department}`)
    }
}

const e1 = new Employee('Ana', 'Vendas')
const e2 = new Employee('João', 'Compras')

e1.work()
e2.work()

