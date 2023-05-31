var requestUrl = 'https://www.themealdb.com/api/json/v1/1';

var chickenRequest='https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood'


    fetch(requestUrl, {
        method: 'GET',
        // key: '1'
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        
        
        for (let index = 0; index < data.meals.length; index++) {
            console.log(data.meals[index]);
        }
    });

    // fetch(chickenRequest, {
    //     method: 'GET',
    //     // key: '1'
    // })
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
        
        
    //     for (let index = 0; index < data.meals.length; index++) {
    //         console.log(data.meals[index]);
    //     }
    // });



    // https://www.themealdb.com/api.php