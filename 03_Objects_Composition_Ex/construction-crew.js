function modifyObject(worker) {

    if(worker.dizziness === true) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }

    return worker;
}

let result = modifyObject({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );

console.log(result);

let result2 = modifyObject({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  );

console.log(result2);

let result3 = modifyObject({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }  
  );

console.log(result3);


  