// Sample Data for Drinks using high-quality images
const drinksData = [
    // Hot Drinks (المشروبات الساخنة)
    {
        id: 1,
        category: 'hot',
        name: 'اميركان كوفي',
        description: '',
        price: '80',
        image: 'amerekan.jpg'
    },
    {
        id: 2,
        category: 'hot',
        name: 'قهوة سنجل',
        description: '',
        price: '50',
        image: 'qahwasngel.jpg'
    },
    {
        id: 3,
        category: 'hot',
        name: 'قهوة دبل',
        description: '',
        price: '80',
        image: 'qahwadabel.jpg'
    },
    {
        id: 4,
        category: 'hot',
        name: 'نسكافية',
        description: '',
        price: '80',
        image: 'neskaf.jpg'
    },
    {
        id: 5,
        category: 'hot',
        name: 'كابيتشينو',
        description: '',
        price: '80',
        image: 'kabetshino.jpg'
    },
    {
        id: 6,
        category: 'hot',
        name: 'ينسون',
        description: '',
        price: '50',
        image: 'yanson.jpg'
    },
    {
        id: 7,
        category: 'hot',
        name: 'كركديه',
        description: '',
        price: '50',
        image: 'karkad.jpg'
    },
    {
        id: 8,
        category: 'hot',
        name: 'قرفه',
        description: '',
        price: '50',
        image: 'qwrfa.jpg'
    },
    {
        id: 9,
        category: 'hot',
        name: 'جنزبيل',
        description: '',
        price: '50',
        image: 'ganz.jpg'
    },
    {
        id: 10,
        category: 'hot',
        name: 'اعشاب',
        description: '',
        price: '60',
        image: 'aashap.png'
    },
    {
        id: 11,
        category: 'hot',
        name: 'اسبريسو سنجل',
        description: '',
        price: '50',
        image: 'aspresosengl.png'
    },
    {
        id: 12,
        category: 'hot',
        name: 'اسبريسو دبل',
        description: '',
        price: '80',
        image: 'aspresodabel.png'
    },
    {
        id: 13,
        category: 'hot',
        name: 'لاتيه',
        description: '',
        price: '90',
        image: 'lateh.png'
    },
    {
        id: 14,
        category: 'hot',
        name: 'قهوة تركي',
        description: '',
        price: '50',
        image: 'toky.png'
    },
    {
        id: 15,
        category: 'hot',
        name: 'قهوة فرنساوي',
        description: '',
        price: '60',
        image: 'faransawe.png'
    },
    {
        id: 16,
        category: 'hot',
        name: 'هوت شوكليت',
        description: '',
        price: '80',
        image: 'shoklet.png'
    },
    {
        id: 17,
        category: 'hot',
        name: 'شاي',
        description: '',
        price: '45',
        image: 'shay.png'
    },
    {
        id: 18,
        category: 'hot',
        name: 'شاي بالنعنع',
        description: '',
        price: '50',
        image: 'shaynaana.png'
    },
    {
        id: 19,
        category: 'hot',
        name: 'حليب ساخن',
        description: '',
        price: '60',
        image: 'laban.png'
    },
    {
        id: 20,
        category: 'hot',
        name: 'شاي بحليب',
        description: '',
        price: '75',
        image: 'shayblabn.png'
    },

    // Frappe (فرابيه)
    {
        id: 21,
        category: 'frappe',
        name: 'فرابيه كلاسيك',
        description: '',
        price: '80',
        image: '1.png'
    },
    {
        id: 22,
        category: 'frappe',
        name: 'فرابيه نوتيلا',
        description: '',
        price: '95',
        image: '2.png'
    },
    {
        id: 23,
        category: 'frappe',
        name: 'فرابيه لوتس',
        description: '',
        price: '95',
        image: '3.png'
    },
    {
        id: 24,
        category: 'frappe',
        name: 'فرابيه بندق',
        description: '',
        price: '95',
        image: '4.png'
    },
    {
        id: 25,
        category: 'frappe',
        name: 'فرابيه فانيليا',
        description: '',
        price: '95',
        image: '5.png'
    },
    {
        id: 26,
        category: 'frappe',
        name: 'فرابيه كراميل',
        description: '',
        price: '95',
        image: '6.png'
    },
    {
        id: 27,
        category: 'frappe',
        name: 'فرابيه شوكليت',
        description: '',
        price: '95',
        image: '7.png'
    },

    // Ice Coffee (آيس كوفي)
    {
        id: 28,
        category: 'ice-coffee',
        name: 'ايس كافيه',
        description: '',
        price: '80',
        image: '8.png'
    },
    {
        id: 29,
        category: 'ice-coffee',
        name: 'آيس لاتيه',
        description: '',
        price: '90',
        image: '9.png'
    },
    
    {
        id: 31,
        category: 'ice-coffee',
        name: 'ايس لوتس',
        description: '',
        price: '90',
        image: '10.png'
    },
    
    {
        id: 33,
        category: 'ice-coffee',
        name: 'ايس وايت موكا',
        description: '',
        price: '90',
        image: '11.png'
    },

    // Mojito (موهيتو)

     {
        id: 69,
        category: 'mojito',
        name: 'موهيتو كلاسيك',
        description: '',
        price: '100',
        image: '12.png'
    },
    {
        id: 70,
        category: 'mojito',
        name: 'موهيتو بلو بيري',
        description: '',
        price: '100',
        image: '13.png'
    },
    {
        id: 71,
        category: 'mojito',
        name: 'موهيتو باشون',
        description: '',
        price: '100',
        image: '55.png'
    },
    {
        id: 37,
        category: 'mojito',
        name: 'موهيتو فراوله',
        description: '',
        price: '100',
        image: '14.png'
    },
    {
        id: 38,
        category: 'mojito',
        name: 'موهيتو اناناس',
        description: '',
        price: '100',
        image: '15.png'
    },
    {
        id: 90,
        category: 'mojito',
        name: 'موهيتو بطيخ',
        description: '',
        price: '100',
        image: '1000.png'
    },
    {
        id: 40,
        category: 'mojito',
        name: 'موهيتو تفاح',
        description: '',
        price: '100',
        image: '16.png'
    },
    {
        id: 41,
        category: 'mojito',
        name: 'موهيتو مانجه',
        description: '',
        price: '100',
        image: '17.png'
    },
    {
        id: 42,
        category: 'mojito',
        name: 'موهيتو خوخ',
        description: '',
        price: '100',
        image: '18.png'
    },

    // Milkshake (ميلك شيك)
    {
        id: 43,
        category: 'milkshake',
        name: 'ميلك شيك فراولة',
        description: '',
        price: '85',
        image: '19.png'
    },
    {
        id: 44,
        category: 'milkshake',
        name: 'ميلك شيك شوكولاتة',
        description: '',
        price: '85',
        image: '20.png'
    },
    {
        id: 45,
        category: 'milkshake',
        name: 'ميلك شيك مانجة',
        description: '',
        price: '85',
        image: '21.png'
    },
    
    {
        id: 46,
        category: 'milkshake',
        name: 'ميلك شيك فانيليا',
        description: '',
        price: '85',
        image: '22.png'
    },
    {
        id: 47,
        category: 'milkshake',
        name: 'ميلك شيك لوتس',
        description: '',
        price: '85',
        image: '23.png'
    },
    {
        id: 48,
        category: 'milkshake',
        name: 'ميلك شيك نوتيلا',
        description: '',
        price: '85',
        image: '24.png'
    },
    {
        id: 49,
        category: 'milkshake',
        name: 'ميلك شيك بلو بيري',
        description: '',
        price: '85',
        image: '25.png'
    },

    // Fresh Juice (عصائر فريش)
    {
        id: 50,
        category: 'fresh-juice',
        name: 'لمون بالنعنع',
        description: '',
        price: '70',
        image: '26.png'
    },
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
            
            // إذا كان الزر ليس "فرابيه"، شيل حبات القهوة
            if (category !== 'frappe') {
                removeCoffeeBeansEffect();
            } else {
                // إذا كان "فرابيه"، أظهر حبات القهوة
                startCoffeeBeansEffect();
            }
        });
    });
}

// Function to smoothly scroll to the menu section
window.scrollToMenu = function() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== Snow Effect ====================
let isSnowing = false;

function startSnowEffect() {
    if (isSnowing) return;
    isSnowing = true;
    document.body.classList.add('snow-active');

    let snow = document.getElementById('snow');
    if (!snow) {
        snow = document.createElement('div');
        snow.id = 'snow';
        document.body.appendChild(snow);
    }
    
    const snowInterval = setInterval(() => {
        if (!isSnowing) {
            clearInterval(snowInterval);
            return;
        }
        
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '🧊';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        
        const size = 50 + Math.random() * 50;
        snowflake.style.fontSize = size + 'px';
        snowflake.style.opacity = 0.4 + Math.random() * 0.6;
        
        const duration = 4 + Math.random() * 6;
        snowflake.style.animationDuration = duration + 's';
        
        snow.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }, 100);
    
    setTimeout(() => {
        isSnowing = false;
        document.body.classList.remove('snow-active');
    }, 1000);
}

function setupIceCoffeeButtonListener() {
    const iceCoffeeBtn = document.querySelector('[data-category="ice-coffee"]');
    if (iceCoffeeBtn) {
        iceCoffeeBtn.addEventListener('click', startSnowEffect);
    }
}

// ==================== Coffee Beans Effect ====================
let isCoffeeBeansActive = false;

function startCoffeeBeansEffect() {
    if (isCoffeeBeansActive) return;
    isCoffeeBeansActive = true;
    document.body.classList.add('coffee-beans-active');

    let coffeeContainer = document.getElementById('coffee-beans');
    if (!coffeeContainer) {
        coffeeContainer = document.createElement('div');
        coffeeContainer.id = 'coffee-beans';
        document.body.appendChild(coffeeContainer);
    }

    const beanPositions = [
        { top: '10%', right: '5%' },
        { top: '15%', left: '8%' },
        { top: '50%', right: '3%' },
        { top: '60%', left: '2%' },
        { bottom: '20%', right: '10%' },
        { bottom: '15%', left: '5%' },
        { top: '5%', right: '30%' },
        { bottom: '10%', right: '40%' }
    ];
    
    beanPositions.forEach((position, index) => {
        const bean = document.createElement('div');
        bean.classList.add('coffee-bean');
        
        bean.innerHTML = '<img src="bon.png" alt="coffee bean">';
        
        Object.assign(bean.style, position);
        
        const size = 120 + Math.random() * 80;
        bean.style.width = size + 'px';
        bean.style.height = size + 'px';
        
        bean.style.opacity = 0.25 + Math.random() * 0.1;
        
        coffeeContainer.appendChild(bean);
    });
}

function removeCoffeeBeansEffect() {
    const coffeeContainer = document.getElementById('coffee-beans');
    if (coffeeContainer) {
        coffeeContainer.remove();
    }
    isCoffeeBeansActive = false;
    document.body.classList.remove('coffee-beans-active');
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderDrinks('all');
    setupCategoryFilters();
    setupIceCoffeeButtonListener();
});
