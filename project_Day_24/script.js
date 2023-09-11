const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const profileName = document.getElementById('name')
const date = document.getElementById('date')

const animeted_bgs = document.querySelectorAll('.animated-bg')
const animeted_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="">`
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ad!`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    profileName.innerHTML = 'Jon Doe'
    date.innerHTML = 'Oct 08, 2020'

    animeted_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animeted_bg_texts.forEach(tx => tx.classList.remove('animated-bg-text'))
}

