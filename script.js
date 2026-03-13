// Sample Data for Drinks using high-quality images
const drinksData = [
    // Frappe (فرابيه)
    {
        id: 1,
        category: 'frappe',
        name: 'فرابيه كراميل',
        description: 'مزيج رائع من القهوة والكراميل مع الكريمة المخفوقة',
        price: '45',
        image: ''
    },
    {
        id: 2,
        category: 'frappe',
        name: 'فرابيه شوكولاتة',
        description: 'غني بصوص الشوكولاتة الفاخرة وقطع الشوكولاتة',
        price: '45',
        image: ''
    },
    
    // Mojito (موهيتو)
    {
        id: 3,
        category: 'mojito',
        name: 'موهيتو كلاسيك',
        description: 'انتعاش الليمون والنعناع مع الثلج المجروش',
        price: '35',
        image: ''
    },
    {
        id: 4,
        category: 'mojito',
        name: 'موهيتو فراولة',
        description: 'موهيتو منعش بنكهة الفراولة الطازجة',
        price: '40',
        image: ''
    },

    // Ice Coffee (آيس كوفي)
    {
        id: 5,
        category: 'ice-coffee',
        name: 'سبانيش لاتيه بارد',
        description: 'قهوة مختصة مع الحليب المكثف والثلج',
        price: '50',
        image: ''
    },
    {
        id: 6,
        category: 'ice-coffee',
        name: 'آيس أمريكانو',
        description: 'قهوة سوداء باردة لتحفيز حواسك',
        price: '35',
        image: ''
    },

    // Milkshake (ميلك شيك)
    {
        id: 7,
        category: 'milkshake',
        name: 'ميلك شيك فانيليا',
        description: 'ميلك شيك كلاسيكي غني بالآيس كريم الفاخر',
        price: '40',
        image: ''
    },
    {
        id: 8,
        category: 'milkshake',
        name: 'ميلك شيك أوريو',
        description: 'مزيج رائع من الأوريو والآيس كريم',
        price: '45',
        image: ''
    },

    // Fresh Juice (عصائر فريش)
    {
        id: 9,
        category: 'fresh-juice',
        name: 'عصير برتقال',
        description: 'عصير برتقال طازج 100٪ بدون إضافات',
        price: '30',
        image: ''
    },
    {
        id: 10,
        category: 'fresh-juice',
        name: 'عصير مانجو',
        description: 'عصير مانجو استوائي منعش',
        price: '35',
        image: ''
    }
];

// Function to render drinks into the grid
function renderDrinks(category = 'all') {
    const grid = document.getElementById('drinks-grid');
    grid.innerHTML = ''; // Clear current display

    // Filter drinks based on category
    const filteredDrinks = category === 'all' 
        ? drinksData 
        : drinksData.filter(drink => drink.category === category);

    // Create and inject HTML for each drink card
    filteredDrinks.forEach((drink, index) => {
        const card = document.createElement('div');
        card.className = 'drink-card';
        
        // Add a slight delay for a cascading animation effect
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="drink-image-container">
                <img src="${drink.image}" alt="${drink.name}" class="drink-image" loading="lazy">
            </div>
            <div class="drink-info">
                <h3 class="drink-name">${drink.name}</h3>
                <p class="drink-desc">${drink.description}</p>
                <div class="drink-price">${drink.price} جنيه</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Function to handle category button clicks
function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.cat-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            e.target.classList.add('active');
            
            // Get the category and render drinks
            const category = e.target.getAttribute('data-category');
            renderDrinks(category);
        });
    });
}

// Function to smoothly scroll to the menu section
window.scrollToMenu = function() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderDrinks('all');
    setupCategoryFilters();
});
