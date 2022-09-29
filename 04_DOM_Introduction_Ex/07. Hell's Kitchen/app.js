function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let result = [];
   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantInfo = document.querySelector('#outputs #bestRestaurant p');
      let workersInfo = document.querySelector('#outputs #workers p');

      for (let data of input) {
         let [restName, workersList] = data.split(' - ');

         if (!result.find(e => e.name === restName)) {
            result.push({
               name: restName,
               avgSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workerList: []
            });
         }

         let currentRestaurant = result.find(r => r.name === restName);
         //checks if the restaurant has workers, otherwise, we will try to split undefined and we will get an exception
         //other option is this syntax workersList?.split(', ') -> meaning: if the workersList is not empty, split it by ', '
         workersList = workersList && workersList.split(', ');
         for (let currentWorker of workersList) {
            updateRestaurant(currentRestaurant, currentWorker)
         }

         currentRestaurant.avgSalary = currentRestaurant.sumSalary / currentRestaurant.workerList.length;
         // debugger

      }

      let bestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];
      bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let sortedWorkerList = bestRestaurant.workerList.sort((e1, e2) => e2.salary - e1.salary);
      let buffer = "";
      for (let worker of sortedWorkerList) {
         buffer += `Name: ${worker.name} With Salary: ${worker.salary} `
      }
      workersInfo.textContent = buffer;

      debugger

   }

   function updateRestaurant(obj, worker) {
      let [name, salary] = worker.split(' ');
      salary = Number(salary);
      obj.sumSalary += salary;
      if (obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }
      obj.workerList.push({
         name,
         salary
      });
   }
}