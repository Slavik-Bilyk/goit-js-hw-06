const countItem = document.querySelectorAll('.item').length;
console.log(`Number of categories:${countItem}`);

const categories = document.querySelectorAll('.item')
categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const count = category.querySelectorAll('li').length;
    console.log(`Category: ${title}
Element: ${count}`);
})


