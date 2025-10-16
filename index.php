<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diwali 2025 - Festival of Lights</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- Support: www.github.com/zxtni -->
</head>
<body>
    <!-- Flame cursor for that festive vibe -->
    <div class="cursor-dot">
        <div class="cursor-flame"></div>
    </div>
    <div class="cursor-outline">
        <div class="cursor-glow"></div>
    </div>

    <!-- Dark gradient background with twinkling stars -->
    <div class="background"></div>
    <div class="stars"></div>

    <!-- Decorative lights at the top -->
    <canvas class="string-lights" id="lights"></canvas>

    <!-- Main page content starts here -->
    <div class="container">
        <!-- Hero section with title and tagline -->
        <header>
            <h1>Diwali 2025</h1>
            <p class="subtitle">Festival of Lights</p>
            <p class="tagline">
                Celebrating the eternal victory of light over darkness,
                knowledge over ignorance, and hope over despair
            </p>
        </header>

        <!-- Info cards with cultural icons -->
        <div class="cards">
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-om"></i>
                </div>
                <h3>Spiritual Awakening</h3>
                <p>
                    Diwali celebrates the divine victory of Dharma over Adharma. As Lord Rama 
                    returned to Ayodhya after 14 years of exile, millions of earthen lamps illuminated 
                    his path home. This sacred tradition reminds us that no darkness, however deep, 
                    can withstand the light of righteousness and devotion.
                </p>
            </div>

            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-hands-praying"></i>
                </div>
                <h3>Goddess Lakshmi Puja</h3>
                <p>
                    On this auspicious night, we invoke the divine blessings of Goddess Lakshmi, 
                    the embodiment of prosperity, and Lord Ganesha, the remover of obstacles. 
                    Through sacred mantras and devotional worship, we invite abundance, wisdom, 
                    and spiritual wealth into our lives and homes.
                </p>
            </div>

            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-dharmachakra"></i>
                </div>
                <h3>Cultural Legacy</h3>
                <p>
                    For centuries, Diwali has united families in the creation of intricate rangoli 
                    patterns, the sharing of traditional sweets, and the lighting of sacred diyas. 
                    Each ritual carries profound meaning, connecting us to our ancestors' wisdom 
                    while passing this divine heritage to future generations.
                </p>
            </div>
        </div>

        <!-- Beautiful animated diyas with flickering flames -->
        <section class="diyas-section">
            <h2 class="section-title">Sacred Flames</h2>
            <div class="diyas-container">
                <div class="diya">
                    <div class="flame"></div>
                    <div class="wick"></div>
                    <div class="diya-body">
                        <div class="diya-rim"></div>
                    </div>
                    <div class="diya-base"></div>
                </div>
                <div class="diya">
                    <div class="flame"></div>
                    <div class="wick"></div>
                    <div class="diya-body">
                        <div class="diya-rim"></div>
                    </div>
                    <div class="diya-base"></div>
                </div>
                <div class="diya">
                    <div class="flame"></div>
                    <div class="wick"></div>
                    <div class="diya-body">
                        <div class="diya-rim"></div>
                    </div>
                    <div class="diya-base"></div>
                </div>
                <div class="diya">
                    <div class="flame"></div>
                    <div class="wick"></div>
                    <div class="diya-body">
                        <div class="diya-rim"></div>
                    </div>
                    <div class="diya-base"></div>
                </div>
                <div class="diya">
                    <div class="flame"></div>
                    <div class="wick"></div>
                    <div class="diya-body">
                        <div class="diya-rim"></div>
                    </div>
                    <div class="diya-base"></div>
                </div>
                <div class="diya">
                    <div class="flame"></div>
                    <div class="wick"></div>
                    <div class="diya-body">
                        <div class="diya-rim"></div>
                    </div>
                    <div class="diya-base"></div>
                </div>
            </div>
        </section>

        <!-- Draggable photo cards showcasing Diwali moments -->
        <section class="memories-section">
            <h2 class="section-title">Diwali Memories</h2>
            <p class="memories-intro">
                Every Diwali brings moments worth cherishing forever. Swipe through these 
                precious memories that capture the essence of celebrations, family, and joy.
            </p>
            <div class="stack-wrapper">
                <div class="stack-container" id="stack-container"></div>
            </div>
            <p class="stack-hint">Drag cards in any direction to explore memories</p>
        </section>

        <!-- Heartfelt Diwali wishes for everyone -->
        <div class="wishes">
            <h2>Luminous Blessings</h2>
            <div class="wishes-text">
                <p>
                    May the radiance of countless diyas guide your journey,
                    illuminating every step with wisdom and grace
                </p>
                <p>
                    May prosperity flow into your life like rivers of gold,
                    bringing abundance, health, and joy to you and your loved ones
                </p>
                <p>
                    <strong>Wishing you a magnificent and prosperous Diwali</strong>
                </p>
            </div>
        </div>
    </div>

    <!-- JavaScript for all animations and interactions -->
    <script src="assets/js/script.js"></script>
    
    <!-- Support: www.github.com/zxtni -->
</body>
</html>
