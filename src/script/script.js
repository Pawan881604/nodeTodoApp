// let formData = document.getElementById('getdatafromform');
let subBtn = document.getElementById('submitButton')
let desc = document.getElementById('desc');
let cate = document.getElementById('cate');
let date = document.getElementById('date');

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Convert FormData to a regular JavaScript object
    let de = desc.value;
    let ca = cate.value;
    let da = date.value;
    let data = {
        description: de,
        category: ca,
        dueDate: da
    }


    // for (let [key, value] of new FormData(formData)) {
    //     data[key] = value;
    // }


    // Send the data to the server
    fetch('/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((listData) => {
            // Handle the updated task list
            // updateTaskList(listData);
            // console.log(listData)
        })
        .catch(error => {
            console.error(error);
        });
        location.reload()
});



//--------------------------
let deletBtn = document.getElementById('deleteButton')
let inputBox = document.querySelectorAll('input[type="checkbox"]')
let checkData = []



deletBtn.addEventListener('click', () => {
    const checkedCheckboxIds = handleCheckboxChange();
    deleteFromDatabase(checkedCheckboxIds);
    location.reload()
});

inputBox.forEach(checkbox => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

function handleCheckboxChange(e) {

    const checkedCheckboxIds = Array.from(inputBox)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id);

    return checkedCheckboxIds;

}


function deleteFromDatabase(checkboxIds) {
    return fetch(`/delete/${checkboxIds}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ checkboxIds })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed with status ' + response.status);
            }
        });
}