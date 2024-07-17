expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function solution(expenses) {

    result = null;

    const allExpenses = Object.values(expenses)
    .flatMap(month => Object.values(month))
    .flatMap(day => Object.values(day))
    .flat();
    console.log(allExpenses);



    allExpenses.sort((a,b) => a = b);

    const half = Math.floor(allExpenses.length / 2);


    if(allExpenses.length % 2) {
         result = allExpenses[half]
    } else {
         result = (allExpenses[half] + allExpenses[half - 1] / 2);
    }
    

    return result;
}
console.log(solution(expenses));