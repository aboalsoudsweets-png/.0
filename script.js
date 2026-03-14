// Sample Data for Drinks using high-quality images
const drinksData = [
    // Hot Drinks (المشروبات الساخنة)
    {
        id: 1,
        category: 'hot',
        name: 'اميركان كوفي',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 2,
        category: 'hot',
        name: 'قهوة سنجل',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 3,
        category: 'hot',
        name: 'قهوة دبل',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 4,
        category: 'hot',
        name: 'نسكافية',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 5,
        category: 'hot',
        name: 'كابيتشينو',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 6,
        category: 'hot',
        name: 'ينسون',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 7,
        category: 'hot',
        name: 'كركديه',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 8,
        category: 'hot',
        name: 'قرفه',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 9,
        category: 'hot',
        name: 'جنزبيل',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 10,
        category: 'hot',
        name: 'اعشاب',
        description: '',
        price: '60',
        image: ''
    },
    {
        id: 11,
        category: 'hot',
        name: 'اسبريسو سنجل',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 12,
        category: 'hot',
        name: 'اسبريسو دبل',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 13,
        category: 'hot',
        name: 'لاتيه',
        description: '',
        price: '90',
        image: ''
    },
    {
        id: 14,
        category: 'hot',
        name: 'قهوة تركي',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 15,
        category: 'hot',
        name: 'قهوة فرنساوي',
        description: '',
        price: '60',
        image: ''
    },
    {
        id: 16,
        category: 'hot',
        name: 'هوت شوكليت',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 17,
        category: 'hot',
        name: 'شاي',
        description: '',
        price: '90',
        image: ''
    },
    {
        id: 18,
        category: 'hot',
        name: 'شاي بالنعنع',
        description: '',
        price: '50',
        image: ''
    },
    {
        id: 19,
        category: 'hot',
        name: 'حليب ساخن',
        description: '',
        price: '60',
        image: ''
    },
    {
        id: 20,
        category: 'hot',
        name: 'شاي بحليب',
        description: '',
        price: '75',
        image: ''
    },

    // Frappe (فرابيه)
    {
        id: 21,
        category: 'frappe',
        name: 'فرابيه كلاسيك',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 22,
        category: 'frappe',
        name: 'فرابيه نوتيلا',
        description: '',
        price: '95',
        image: ''
    },
    {
        id: 23,
        category: 'frappe',
        name: 'فرابيه لوتس',
        description: '',
        price: '95',
        image: ''
    },
    {
        id: 24,
        category: 'frappe',
        name: 'فرابيه بندق',
        description: '',
        price: '95',
        image: ''
    },
    {
        id: 25,
        category: 'frappe',
        name: 'فرابيه فانيليا',
        description: '',
        price: '95',
        image: ''
    },
    {
        id: 26,
        category: 'frappe',
        name: 'فرابيه كراميل',
        description: '',
        price: '95',
        image: ''
    },
    {
        id: 27,
        category: 'frappe',
        name: 'فرابيه شوكليت',
        description: '',
        price: '95',
        image: ''
    },

    // Ice Coffee (آيس كوفي)
    {
        id: 28,
        category: 'ice-coffee',
        name: 'ايس كافيه',
        description: '',
        price: '80',
        image: ''
    },
    {
        id: 29,
        category: 'ice-coffee',
        name: 'آيس لاتيه',
        description: '',
        price: '90',
        image: ''
    },
    {
        id: 30,
        category: 'ice-coffee',
        name: 'ايس سبانش لاتيه',
        description: '',
        price: '90',
        image: ''
    },
    {
        id: 31,
        category: 'ice-coffee',
        name: 'ايس لوتس',
        description: '',
        price: '90',
        image: ''
    },
    {
        id: 32,
        category: 'ice-coffee',
        name: 'ايس موكا',
        description: '',
        price: '90',
        image: ''
    },
    {
        id: 33,
        category: 'ice-coffee',
        name: 'ايس وايت موكا',
        description: '',
        price: '90',
        image: ''
    },

    // Mojito (موهيتو)
    {
        id: 34,
        category: 'mojito',
        name: 'موهيتو كلاسيك',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 35,
        category: 'mojito',
        name: 'موهيتو بلو بيري',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 36,
        category: 'mojito',
        name: 'موهيتو باشون',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 37,
        category: 'mojito',
        name: 'موهيتو فراوله',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 38,
        category: 'mojito',
        name: 'موهيتو اناناس',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 39,
        category: 'mojito',
        name: 'موهيتو بطيخ',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 40,
        category: 'mojito',
        name: 'موهيتو تفاح',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 41,
        category: 'mojito',
        name: 'موهيتو مانجه',
        description: '',
        price: '100',
        image: ''
    },
    {
        id: 42,
        category: 'mojito',
        name: 'موهيتو خوخ',
        description: '',
        price: '100',
        image: ''
    },

    // Milkshake (ميلك شيك)
    {
        id: 43,
        category: 'milkshake',
        name: 'ميلك شيك فراولة',
        description: '',
        price: '85',
        image: ''
    },
    {
        id: 44,
        category: 'milkshake',
        name: 'ميلك شيك شوكولاتة',
        description: '',
        price: '85',
        image: ''
    },
    {
        id: 45,
        category: 'milkshake',
        name: 'ميلك شيك مانجة',
        description: '',
        price: '85',
        image: ''
    },
    {
        id: 46,
        category: 'milkshake',
        name: 'ميلك شيك فانيليا',
        description: '',
        price: '85',
        image: ''
    },
    {
        id: 47,
        category: 'milkshake',
        name: 'ميلك شيك لوتس',
        description: '',
        price: '85',
        image: ''
    },
    {
        id: 48,
        category: 'milkshake',
        name: 'ميلك شيك نوتيلا',
        description: '',
        price: '85',
        image: ''
    },
    {
        id: 49,
        category: 'milkshake',
        name: 'ميلك شيك بلو بيري',
        description: '',
        price: '85',
        image: ''
    },

    // Fresh Juice (عصائر فريش)
    {
        id: 50,
        category: 'fresh-juice',
        name: 'لمون بالنعنع',
        description: '',
        price: '70',
        image: ''
    },
];

export default drinksData;
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
