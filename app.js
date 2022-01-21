// https://randomuser.me/api/

const button = document.querySelector('.click');




const makepage = (data) => {
    const heading = document.createElement('h1');
    // console.log(data)
    const profileBox = document.createElement('div');
    profileBox.className = 'profile-box';

    heading.innerText = `${data.name.title} ${data.name.first} ${data.name.last}`;
    // heading.style = 'z-index:3';
    heading.className = 'title'
    // console.log(heading);
    document.querySelector('.intro-name').appendChild(heading);
    const image = document.createElement('img');
    image.src = `${data.picture.large}`;
    image.style = 'height:300px; margin-bottom:40px; margin-top:40px; border-radius:20px;'
    profileBox.style = `background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("${data.picture.large}");  background-size: cover;`
    profileBox.appendChild(image);
    const namesub = document.createElement('h5');
    namesub.innerText = `Name: ${data.name.title} ${data.name.first} ${data.name.last}`;
    profileBox.appendChild(namesub);
    const gender = document.createElement('h5');
    gender.innerText = `Gender: ${data.gender}`;
    profileBox.appendChild(gender);
    const age = document.createElement('h5');
    age.innerText = `Age: ${data.dob.age}`;
    profileBox.appendChild(age);
    const email = document.createElement('h5');
    email.innerText = `E-mail: ${data.email}`;
    profileBox.appendChild(email);
    const location = document.createElement('h5');
    location.innerText = `Location: ${data.location.country}`;
    profileBox.appendChild(location);
    const cell = document.createElement('h5');
    cell.innerText = `Contact: ${data.cell}`;
    profileBox.appendChild(cell);


    document.querySelector('.second-page').appendChild(profileBox);
}



button.addEventListener('click', () => {
    test();
})

async function test() {
    document.querySelector('.intro-name').innerHTML = null;
    document.querySelector('.second-page').innerHTML = null;
    const res = await axios.get(`https://randomuser.me/api/`)
    makepage(res.data.results[0]);
}



test();



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".front-page",
        start: "top",
        end: "100%",
        scrub: true,
        pin: true,
    },
});

tl.fromTo(".front-page", { clipPath: 'circle(8%)' }, { clipPath: 'circle(75%)', duration: 3 });
tl.fromTo('.code-note', { scale: 0.5 }, { scale: 0, opacity: 0, duration: 1 }, '-=3');
tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.subtitle', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.custom', { opacity: 0 }, { opacity: 1, duration: 1 });





