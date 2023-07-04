let formData = document.getElementById('getdatafromform')
let desc = document.getElementById('desc')
let cate = document.getElementById('cate')
let date = document.getElementById('date')

formData.addEventListener('submit', (e) => {
    e.preventDefault()
    var data = new FormData(formData);
})