let image_carousel = document.querySelector('.align-ft');

function images() {
    setInterval(() => {
        image_carousel.style.transform = 'translateX(0%)';
    }, 3000);
    setInterval(() => {
        image_carousel.style.transform = 'translateX(-33.6%)';
    }, 6000);
    setInterval(() => {
        image_carousel.style.transform = 'translateX(-66.6%)';
    }, 9000);
}

// invoking the fn
images();

// add the name
let user_name = document.getElementById('user-name');
let user_id = document.getElementById('user-id');

let get_name = document.getElementById('get-name');

let user_name_id = document.querySelectorAll('.user-name-id');

user_id.addEventListener('click', (e) => {
    e.preventDefault();
    let user_value = user_name.value;

    get_name.textContent = user_value;

    user_name_id.forEach(t => {
        t.textContent = user_value;
    });

});