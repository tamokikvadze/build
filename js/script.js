// burger
let burger = document.getElementById('burger'); /* ვსაზღვრავთ ბურგერ ელემენტს, რომლის კლიკზეც უნდა გაიხსნას მენიუ*/
let nav = document.getElementById('nav'); /* ვსაზღვრავთ ნავიგაციის ელემენტს, რომელიც ბურგერის კლიკზე უნდა გახდეს აქტიური*/
burger.addEventListener('click', function(){ /* ვუსმენთ კლიკის ივენთს ბურგერზე და ვასრულებთ ფუნქციას  */
    this.classList.toggle('active'); /* ბურგერის ელემენტს ვანიჭებთ ან ვხსნით კლას active-ს */
    nav.classList.toggle('active'); /* ნავიგაციი ელემენტს ვანიჭებთ ან ვხსნით კლას active-ს */
});

// info box
let icons = document.getElementsByClassName('show_info'); /* განვსაზღვრავთ ელემენტს, რომლის კლიკზეც უნდა გამოჩნდეს დამატებითი ინფორმაციის ბლოკი */
// console.log(icons.length); /* ვბეჭდავთ ელემენტების რაოდენობას */
for (let i = 0; i < icons.length; i++){ /* ციკლში ვატრიალებთ თითოეულ ელემენტს სანამ ციკლის შესრულების რაოდენობა ელემენტების რაოდენობაზე ნაკლებია */
    // console.log(i);
    let icon = icons[i];

    icon.addEventListener('click', function(event){ /* ვუსმენთ კლიკის ივენთს ელემენტზე */
        for (let i2 = 0; i2 < icons.length; i2++) { /* ისევ ციკლში ვატარებთ ელემენტებს*/
            if (i2 != i) { /* ვამოწმებთ ელემენტის ინდექსი უდრის თუ არა დაკლიკებული ელემენტის ინდექსს, თუ არ უდრის ვასრულებთ შემდეგს */
                icons[i2].parentNode.nextElementSibling.classList.remove('active'); /* ვაშორებთ კლას active-ს*/
            }
        }
        this.parentNode.nextElementSibling.classList.toggle('active') /* ვანიჭებთ ან ვხსნით კლას active-ს მშობელი ელემენტის მომდევნო ელემენტს (ელემეტნს, რომლიც უნდა გამოჩნდეს ან დაიმალოს) */

    });
}

// add button
let add_buttons = document.getElementsByClassName('add');
// console.log(add_buttons.length);
for (let i = 0; i < add_buttons.length; i++) {
    add_buttons[i].addEventListener('click', function(){
            this.classList.toggle('active');
    });
}
// show map
let show_map = document.getElementById('show_map');
let map_container = document.getElementById('map_container');
show_map.addEventListener('click', function(){
        map_container.classList.toggle('active');
})