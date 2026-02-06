/******************
 *datos json 
 *******************/
const postsData = [
    {
        id: 1,
        title: "Modern Art Trends",
        category: "Art",
        image: "https://picsum.photos/id/101/400/300",
        description: "Exploring the new waves of modern art in 2024.",
        author: "Jane Doe",
        date: "2024-02-01"
    },
    {
        id: 2,
        title: "JS Best Practices",
        category: "Development",
        image: "https://picsum.photos/id/102/400/300",
        description: "How to write clean and scalable JavaScript code.",
        author: "John Smith",
        date: "2024-01-28"
    },
    {
        id: 3,
        title: "Minimalist Living",
        category: "Lifestyle",
        image: "https://picsum.photos/id/103/400/300",
        description: "Tips for decluttering your home and mind.",
        author: "Emily White",
        date: "2024-01-20"
    },
    {
        id: 4,
        title: "Tech Accessories",
        category: "Accessories",
        image: "https://picsum.photos/id/104/400/300",
        description: "Must-have gadgets for your home office setup.",
        author: "Michael Brown",
        date: "2024-01-15"
    },
    {
        id: 5,
        title: "Abstract Sculptures",
        category: "Art",
        image: "https://picsum.photos/id/106/400/300",
        description: "Understanding the meaning behind abstract forms.",
        author: "Sarah Lee",
        date: "2024-01-10"
    },
    {
        id: 6,
        title: "CSS Grid vs Flexbox",
        category: "Development",
        image: "https://picsum.photos/id/107/400/300",
        description: "When to use Grid and when to use Flexbox.",
        author: "David Miller",
        date: "2024-01-05"
    },
    {
        id: 7,
        title: "Healthy Habits",
        category: "Lifestyle",
        image: "https://picsum.photos/id/108/400/300",
        description: "Daily routines to improve your overall well-being.",
        author: "Lisa Green",
        date: "2023-12-30"
    },
    {
        id: 8,
        title: "Smart Watches",
        category: "Accessories",
        image: "https://picsum.photos/id/109/400/300",
        description: "A review of the latest smart watches in the market.",
        author: "Tom Wilson",
        date: "2023-12-25"
    }
];

/****************
 *  renderizado
 * ****************/

// cojo el contenedor donde irán las cards
const gridContainer = document.getElementById('posts-grid');

/**
 * esta funcion recibe un array de post y los muestra en el contenedor
 * @param {Array} 
 */
function renderPosts(posts) {
    // Si no hay posts mostrare un mensaje de que no hya nada
    if (posts.length === 0) {
        gridContainer.innerHTML = '<p>No posts found.</p>';
        announceToScreenReader("No posts found for this category.");
        return;
    }

    // maopeo los datos a HTML y los insertamos en el contenedor
    gridContainer.innerHTML = posts.map(post => `
        <article class="card">
            <img src="${post.image}" alt="Image for ${post.title}" loading="lazy">
            <div class="card-content">
                <h3>${post.title}</h3>
                <div class="card-tags">
                    <span class="badge">${post.category}</span>
                </div>
                <p>${post.description}</p>
                
                <div class="meta-info">
                    <small>By ${post.author} | ${post.date}</small>
                </div>

                <a href="#" class="read-more" aria-label="Read more about ${post.title}">
                    Read more
                </a>
            </div>
        </article>
    `).join('');
}


renderPosts(postsData);

/********************************
Avisos para lectores de pantalla 
**********************************/

/* Esto hace que el lector de pantalla lea el mensaje automáticamente.*/
function announceToScreenReader(message) {
    const statusContainer = document.getElementById('status-message');
    statusContainer.textContent = message;
}

/******************
 * filtrado
 * ****************
 */

// cogemos todos los botones de filtro
const filterButtons = document.querySelectorAll('.filter-btn');

// le añado evento click a cada uno
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Quitamos la clase active de todos y ponemos el aria-pressed a false
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });
        
        //activo el botón de pulsar
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        //Obtener la categoría seleccionada
        const selectedCategory = button.getAttribute('data-category');

        // filtracionde los datos
        // Si es 'all', mostramos todo, si no muestro el que pida
        const filteredPosts = selectedCategory === 'all' 
            ? postsData 
            : postsData.filter(post => post.category === selectedCategory);

        //lo volvemos a mostrar
        renderPosts(filteredPosts);

        //accesibilidad, sonido para mostrar al cliente que se ha hecho un cambio
        const count = filteredPosts.length;
        announceToScreenReader(`Showing ${count} posts for category ${selectedCategory}`);
    });
});