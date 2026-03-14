// Sample Data for Drinks
const drinksData = [
    // ... كل البيانات اللي عندك
];

// Function to render drinks into the grid
function renderDrinks(category = 'all') {
    const grid = document.getElementById('drinks-grid');
    grid.innerHTML = '';

    const filteredDrinks = category === 'all' 
        ? drinksData 
        : drinksData.filter(drink => drink.category === category);

    filteredDrinks.forEach((drink, index) => {
        const card = document.createElement('div');
        card.className = 'drink-card';
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
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const category = e.target.getAttribute('data-category');
            renderDrinks(category);
            
            // ✅ إذا الزرار ليس "frappe" - شيل البن
            if (category !== 'frappe') {
                removeCoffeeBeans();
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
        snowflake.textContent = '❄️';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        const size = 15 + Math.random() * 30;
        snowflake.style.fontSize = size + 'px';
        snowflake.style.opacity = 0.4 + Math.random() * 0.6;
        const duration = 4 + Math.random() * 6;
        snowflake.style.animationDuration = duration + 's';
        snow.appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }, 200);
    
    setTimeout(() => {
        isSnowing = false;
        document.body.classList.remove('snow-active');
    }, 8000);
}

function setupIceCoffeeButtonListener() {
    const iceCoffeeBtn = document.querySelector('[data-category="ice-coffee"]');
    if (iceCoffeeBtn) {
        iceCoffeeBtn.addEventListener('click', startSnowEffect);
    }
}

// ==================== Coffee Beans Effect ====================

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
    
    beanPositions.forEach((position) => {
        const bean = document.createElement('div');
        bean.classList.add('coffee-bean');
        bean.innerHTML = '<img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&h=200&fit=crop" alt="coffee bean">';
        Object.assign(bean.style, position);
        const size = 120 + Math.random() * 80;
        bean.style.width = size + 'px';
        bean.style.height = size + 'px';
        bean.style.opacity = 0.25 + Math.random() * 0.1;
        coffeeContainer.appendChild(bean);
    });
}

// ✅ دالة لحذف البن
function removeCoffeeBeans() {
    const coffeeContainer = document.getElementById('coffee-beans');
    if (coffeeContainer) {
        coffeeContainer.innerHTML = '';
    }
    isCoffeeBeansActive = false;
    document.body.classList.remove('coffee-beans-active');
}

function setupFrappeeButtonListener() {
    const frappeBtn = document.querySelector('[data-category="frappe"]');
    if (frappeBtn) {
        frappeBtn.addEventListener('click', startCoffeeBeansEffect);
    }
}

// Function to handle category button clicks
function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.cat-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-category');
            renderDrinks(category);
            
            // ✅ شيل البن إذا الزرار ليس "frappe"
            if (category !== 'frappe') {
                removeCoffeeBeans();
            }
        });
    });
}
