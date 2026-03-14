// Sample Data for Drinks using high-quality images
const drinksData = [
    // Frappe (فرابيه)
    {
        id: 1,
        category: 'frappe',
        name: 'فرابيه كراميل',
       
        price: '45',
        image: ''
    },
    {
        id: 2,
        category: 'frappe',
        name: 'فرابيه شوكولاتة',
        
        price: '45',
        image: ''
    },

     // hot (مشاريب ساخنة)
    {
        id: 11,
        category: 'hot',
        name: 'شاي',
        price: '45',
        image: ''
    },
    {
        id: 12,
        category: 'hot',
        
        name: 'قهوة سنجل / دبل',
        price: '80,50',
        image: ''
    },

    {
        id: 13,
        category: 'hot',
        name: '',
       
        price: '45',
        image: ''
    },
    
    // Mojito (موهيتو)
    {
        id: 3,
        category: 'mojito',
        name: 'موهيتو كلاسيك',
        
        price: '35',
        image: ''
    },
    {
        id: 4,
        category: 'mojito',
        name: 'موهيتو فراولة',
       
        price: '40',
        image: ''
    },

    // Ice Coffee (آيس كوفي)
    {
        id: 5,
        category: 'ice-coffee',
        name: 'سبانيش لاتيه بارد',
        
        price: '50',
        image: ''
    },
    {
        id: 6,
        category: 'ice-coffee',
        name: 'آيس أمريكانو',
       
        price: '35',
        image: ''
    },

    // Milkshake (ميلك شيك)
    {
        id: 7,
        category: 'milkshake',
        name: 'ميلك شيك فانيليا',
       
        price: '40',
        image: ''
    },
    {
        id: 8,
        category: 'milkshake',
        name: 'ميلك شيك أوريو',
       
        price: '45',
        image: ''
    },

    // Fresh Juice (عصائر فريش)
    {
        id: 9,
        category: 'fresh-juice',
        name: 'عصير برتقال',
     
        price: '30',
        image: ''
    },
    {
        id: 10,
        category: 'fresh-juice',
        name: 'عصير مانجو',
       
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
            
            // إذا كان الزر ليس "فرابيه"، شيل حبات ا��قهوة
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

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderDrinks('all');
    setupCategoryFilters();
});


// ==================== Snow Effect ====================
let isSnowing = false;

function startSnowEffect() {
    if (isSnowing) return; // منع التكرار
    isSnowing = true;
    document.body.classList.add('snow-active');

    // إنشاء عنصر الثلج إذا لم يكن موجوداً
    let snow = document.getElementById('snow');
    if (!snow) {
        snow = document.createElement('div');
        snow.id = 'snow';
        document.body.appendChild(snow);
    }
    
    // إنتاج النكعبات بشكل متكرر
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
    }, 100);
    
    // إيقاف بعد 8 ثواني
    setTimeout(() => {
        isSnowing = false;
        document.body.classList.remove('snow-active');
    }, 8000);
}

// ربط التأثير بزر "آيس كوفي"
function setupIceCoffeeButtonListener() {
    const iceCoffeeBtn = document.querySelector('[data-category="ice-coffee"]');
    if (iceCoffeeBtn) {
        iceCoffeeBtn.addEventListener('click', startSnowEffect);
    }
}

// شغل الربط عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderDrinks('all');
    setupCategoryFilters();
    setupIceCoffeeButtonListener(); // أضف هذا السطر الجديد
});
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

    // إنشاء حبات القهوة الكبيرة في الزوايا والأطراف
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
        
        // تطبيق الموضع
        Object.assign(bean.style, position);
        
        // حجم كبير عشوائي بين 120-200px
        const size = 120 + Math.random() * 80;
        bean.style.width = size + 'px';
        bean.style.height = size + 'px';
        
        // شفافية خفيفة (0.25 - 0.35)
        bean.style.opacity = 0.25 + Math.random() * 0.1;
        
        coffeeContainer.appendChild(bean);
    });
}

// دالة جديدة لحذف حبات القهوة
function removeCoffeeBeansEffect() {
    const coffeeContainer = document.getElementById('coffee-beans');
    if (coffeeContainer) {
        coffeeContainer.remove();
    }
    isCoffeeBeansActive = false;
    document.body.classList.remove('coffee-beans-active');
}
