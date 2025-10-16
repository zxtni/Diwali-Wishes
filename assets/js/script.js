/*
 * Diwali 2025 - Interactive JavaScript
 * Handles all animations, interactions and effects
 * Support: www.github.com/zxtni
 */

// Flame cursor that follows mouse movement
class Cursor {
    constructor() {
        this.dot = document.querySelector('.cursor-dot');
        this.outline = document.querySelector('.cursor-outline');
        this.pos = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.speed = 0.15;
        this.lastTrailTime = 0;
        this.trailDelay = 30;
        
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            
            // Update flame cursor position instantly
            this.dot.style.left = (e.clientX - 10) + 'px';
            this.dot.style.top = (e.clientY - 15) + 'px';
            
            // Create trail effect
            const now = Date.now();
            if (now - this.lastTrailTime > this.trailDelay) {
                this.createTrail(e.clientX, e.clientY);
                this.lastTrailTime = now;
            }
        });

        // Hover effects
        const hoverElements = document.querySelectorAll('.card, .diya, a, button, h1, h2, h3');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.outline.classList.add('active');
                this.dot.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                this.outline.classList.remove('active');
                this.dot.classList.remove('active');
            });
        });

        this.animate();
    }

    createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = (x - 2) + 'px';
        trail.style.top = (y - 2) + 'px';
        document.body.appendChild(trail);

        setTimeout(() => trail.remove(), 600);
    }

    animate() {
        // Smooth glow outline movement
        this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
        this.pos.y += (this.mouse.y - this.pos.y) * this.speed;
        
        this.outline.style.left = (this.pos.x - 25) + 'px';
        this.outline.style.top = (this.pos.y - 25) + 'px';

        requestAnimationFrame(() => this.animate());
    }
}

// Twinkling stars background effect
class Stars {
    constructor() {
        this.container = document.querySelector('.stars');
        this.count = 100;
        this.init();
    }

    init() {
        for (let i = 0; i < this.count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = star.style.height = Math.random() * 2 + 1 + 'px';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            this.container.appendChild(star);
        }
    }
}

// Animated string lights at the top
class StringLights {
    constructor() {
        this.canvas = document.getElementById('lights');
        this.ctx = this.canvas.getContext('2d');
        this.lights = [];
        this.time = 0;
        
        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => {
            this.resize();
            this.init();
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = 120;
    }

    init() {
        this.lights = [];
        const colors = [
            '#ff6b6b', '#ffd93d', '#6bcf7f',
            '#4d96ff', '#ff6bff', '#ff9f40'
        ];
        const count = Math.floor(window.innerWidth / 80);

        for (let i = 0; i < count; i++) {
            this.lights.push({
                x: (window.innerWidth / count) * i + 40,
                color: colors[i % colors.length],
                offset: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.01
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.time += 0.02;

        // Draw wire
        this.ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 40);
        
        for (let i = 0; i <= this.lights.length; i++) {
            const x = i * (this.canvas.width / this.lights.length);
            const y = 40 + Math.sin(i * 0.5 + this.time) * 10;
            this.ctx.lineTo(x, y);
        }
        
        this.ctx.stroke();

        // Draw lights
        this.lights.forEach((light, i) => {
            const y = 40 + Math.sin(i * 0.5 + this.time) * 10;
            const glow = 0.6 + Math.sin(this.time * 3 + light.offset) * 0.4;

            // Cord
            this.ctx.strokeStyle = 'rgba(80, 80, 80, 0.5)';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(light.x, y);
            this.ctx.lineTo(light.x, y + 25);
            this.ctx.stroke();

            // Glow
            const glowGradient = this.ctx.createRadialGradient(
                light.x, y + 35, 0,
                light.x, y + 35, 30
            );
            glowGradient.addColorStop(0, light.color + Math.floor(glow * 100).toString(16));
            glowGradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = glowGradient;
            this.ctx.fillRect(light.x - 30, y + 5, 60, 60);

            // Bulb
            const bulbGradient = this.ctx.createRadialGradient(
                light.x - 3, y + 30, 0,
                light.x, y + 35, 10
            );
            bulbGradient.addColorStop(0, '#ffffff');
            bulbGradient.addColorStop(0.3, light.color);
            bulbGradient.addColorStop(1, this.darkenColor(light.color));
            
            this.ctx.fillStyle = bulbGradient;
            this.ctx.globalAlpha = glow;
            this.ctx.beginPath();
            this.ctx.ellipse(light.x, y + 35, 8, 12, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.globalAlpha = 1;

            // Highlight
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            this.ctx.beginPath();
            this.ctx.ellipse(light.x - 3, y + 30, 2, 4, 0, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }

    darkenColor(color) {
        const hex = color.replace('#', '');
        const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - 40);
        const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - 40);
        const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - 40);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

// Rising sparkles particles effect
class Sparkles {
    constructor() {
        this.count = 30;
        this.init();
    }

    init() {
        setInterval(() => {
            this.create();
        }, 300);
    }

    create() {
        if (document.querySelectorAll('.sparkle').length > this.count) return;

        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.bottom = '0px';
        sparkle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 6000);
    }
}

// Scroll-triggered card animations
class ScrollAnimations {
    constructor() {
        this.observe();
    }

    observe() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach(card => observer.observe(card));
    }
}

// Particle burst when clicking diyas
class DiyaEffects {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.diya').forEach(diya => {
            diya.addEventListener('click', (e) => {
                this.createBurst(
                    e.currentTarget.getBoundingClientRect().left + 70,
                    e.currentTarget.getBoundingClientRect().top + 50
                );
            });
        });
    }

    createBurst(x, y) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.background = ['#ffd700', '#ff8c00', '#ff6b00'][Math.floor(Math.random() * 3)];
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.boxShadow = '0 0 10px currentColor';
            
            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 30;
            const velocity = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity - 50;

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 500,
                easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
            }).onfinish = () => particle.remove();
        }
    }
}

// Swipeable photo cards like Tinder
class MemoryStack {
    constructor() {
        this.container = document.getElementById('stack-container');
        this.cards = [];
        this.memories = [
            {
                id: 1,
                image: 'assets/img/diya.jpg',
                title: 'Festival of Lights',
                description: 'Illuminating homes with countless diyas'
            },
            {
                id: 2,
                image: 'assets/img/puja_family.jpg',
                title: 'Family Celebrations',
                description: 'Togetherness and joy with loved ones'
            },
            {
                id: 3,
                image: 'assets/img/rangoli.jpg',
                title: 'Rangoli Artistry',
                description: 'Vibrant colors welcoming prosperity'
            },
            {
                id: 4,
                image: 'assets/img/sweets.jpg',
                title: 'Sweet Traditions',
                description: 'Sharing sweets and spreading happiness'
            },
            {
                id: 5,
                image: 'assets/img/skyshots.jpg',
                title: 'Firework Spectacle',
                description: 'Night sky painted with brilliant colors'
            }
        ];
        
        this.dragState = {
            isDragging: false,
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            activeCard: null
        };

        this.init();
    }

    init() {
        this.createCards();
        this.updateStack();
    }

    createCards() {
        this.memories.forEach((memory, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.id = memory.id;
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-image-container">
                        <img src="${memory.image}" alt="${memory.title}" class="memory-image">
                    </div>
                    <div class="memory-text">
                        <h3 class="memory-title">${memory.title}</h3>
                        <p class="memory-description">${memory.description}</p>
                    </div>
                </div>
            `;

            this.setupDragEvents(card);
            this.container.appendChild(card);
            this.cards.push(card);
        });
    }

    setupDragEvents(card) {
        // Mouse events
        card.addEventListener('mousedown', (e) => this.handleDragStart(e, card));
        document.addEventListener('mousemove', (e) => this.handleDragMove(e));
        document.addEventListener('mouseup', (e) => this.handleDragEnd(e));

        // Touch events
        card.addEventListener('touchstart', (e) => this.handleDragStart(e, card), { passive: false });
        document.addEventListener('touchmove', (e) => this.handleDragMove(e), { passive: false });
        document.addEventListener('touchend', (e) => this.handleDragEnd(e));
    }

    handleDragStart(e, card) {
        if (card !== this.cards[this.cards.length - 1]) return;

        this.dragState.isDragging = true;
        this.dragState.activeCard = card;
        card.classList.add('dragging');

        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

        this.dragState.startX = clientX;
        this.dragState.startY = clientY;

        e.preventDefault();
    }

    handleDragMove(e) {
        if (!this.dragState.isDragging) return;

        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

        this.dragState.currentX = clientX - this.dragState.startX;
        this.dragState.currentY = clientY - this.dragState.startY;

        const card = this.dragState.activeCard;
        const rotate = this.dragState.currentX / 10;

        card.style.transform = `
            translate(${this.dragState.currentX}px, ${this.dragState.currentY}px) 
            rotate(${rotate}deg)
        `;

        e.preventDefault();
    }

    handleDragEnd(e) {
        if (!this.dragState.isDragging) return;

        const card = this.dragState.activeCard;
        const threshold = 150;
        const distance = Math.sqrt(
            this.dragState.currentX ** 2 + 
            this.dragState.currentY ** 2
        );

        if (distance > threshold) {
            this.sendToBack(card);
        } else {
            card.style.transform = '';
        }

        card.classList.remove('dragging');
        this.dragState.isDragging = false;
        this.dragState.activeCard = null;
        this.dragState.currentX = 0;
        this.dragState.currentY = 0;
    }

    sendToBack(card) {
        const angle = Math.atan2(this.dragState.currentY, this.dragState.currentX);
        const distance = 1000;

        card.style.transform = `
            translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) 
            rotate(${this.dragState.currentX / 5}deg)
        `;

        setTimeout(() => {
            this.container.removeChild(card);
            card.style.transform = '';
            this.container.insertBefore(card, this.container.firstChild);
            
            this.cards = Array.from(this.container.querySelectorAll('.memory-card'));
            this.updateStack();
        }, 300);
    }

    updateStack() {
        this.cards.forEach((card, index) => {
            const isTop = index === this.cards.length - 1;
            const offset = (this.cards.length - 1 - index) * 2;
            const scale = 1 - (this.cards.length - 1 - index) * 0.03;
            const rotate = (Math.random() - 0.5) * 4;

            card.style.zIndex = index;
            
            if (!card.classList.contains('dragging')) {
                card.style.transform = `
                    translateY(-${offset}px) 
                    scale(${scale})
                    rotate(${rotate}deg)
                `;
            }
        });
    }
}

// Start everything when page loads
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        new Cursor();
    }
    new Stars();
    new StringLights();
    new Sparkles();
    new ScrollAnimations();
    new DiyaEffects();
    new MemoryStack();
});

// Support: www.github.com/zxtni

