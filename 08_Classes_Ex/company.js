class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(...args) {
        // If one of the passed parameters is an empty string (""), undefined or null
        //If salary is less than 0
        //throw an error with the following message: "Invalid input!"
        if (args.some(x => x === '' || x === undefined || x === null || args[1] < 0)) {
            throw new Error('Invalid input!');
        }
        //If the new employee is hired successfully, you should add him into the departments object 
        //with the current name of the department and return the following message....
        let department = this.getDepartment(args[3]);

        let newEmployee = { name: args[0], salary: args[1], position: args[2] };

        department.employees.push(newEmployee);
        return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`;
    }

    bestDepartment() {
        let best = this.bestSalaryDept();

        const printData = best.employees
        .sort((a,b) => b.salary - a.salary === 0 ? a.name.localeCompare(b.name) : b.salary - a.salary)
        .reduce((acc, current, index) => {
            acc[index] = [];
            acc[index].push(current.name, current.salary, current.position);
            return acc;
        }, [])
        .map(e => e.join(' '))
        .join('\n');

        return `Best Department is: ${best.name}\nAverage salary: ${(this.getSalariesSum(best) / best.employees.length).toFixed(2)}\n${printData}`
    }

    //helper method
    getDepartment(deptName) {
        let dept = this.departments.find(d => d.name === deptName);

        if (!dept) {
            let newDept = { name: deptName, employees: [] };
            this.departments.push(newDept);
            return newDept;
        } else {
            return dept;
        }
    }

    //helper method
    getSalariesSum(depart) {
        let foundDept = this.getDepartment(depart.name);
        return foundDept.employees.reduce((acc, currentE) => {
            acc += currentE.salary;
            return acc;
        }, 0);
    }

    //helper method
    bestSalaryDept = () => this.departments.sort((a, b) => this.getSalariesSum(b) / b.employees.length - this.getSalariesSum(a) / a.employees.length)[0];
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.departments);
// console.log(JSON.stringify(c.getSalariesSum('Construction')));
console.log(c.bestDepartment());