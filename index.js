<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>مطعم لذيذ - أفضل المأكولات العربية</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <style>
    .meal-img {
      transition: transform 0.3s;
    }
    .meal-img:hover {
      transform: scale(1.05);
    }
    .order-btn {
      background: linear-gradient(45deg, #f97316, #ea580c);
    }
    .order-btn:hover {
      background: linear-gradient(45deg, #ea580c, #c2410c);
    }
    .nav-link:hover {
      @apply text-orange-500;
    }
    .active {
      @apply text-orange-500 border-b-2 border-orange-500;
    }
    .lang-switch {
      direction: ltr;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">

  <!-- Header & Navigation -->
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-3 space-x-reverse">
        <img src="https://via.placeholder.com/50" alt="شعار المطعم" class="w-12 h-12 rounded-full">
        <h1 class="text-2xl font-bold text-orange-600">مطعم لذيذ</h1>
      </div>

      <nav class="hidden md:flex space-x-8 space-x-reverse">
        <a href="#home" class="nav-link active">الرئيسية</a>
        <a href="#menu" class="nav-link">القائمة</a>
        <a href="#offers" class="nav-link">العروض</a>
        <a href="#about" class="nav-link">من نحن</a>
        <a href="#contact" class="nav-link">اتصل بنا</a>
      </nav>

      <div class="flex items-center space-x-4 space-x-reverse">
        <button id="lang-toggle" class="lang-switch text-sm px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100">EN</button>
        <button class="md:hidden text-xl"><i class="fas fa-bars"></i></button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">أفضل النكهات العربية</h2>
      <p class="text-xl mb-8 opacity-90">استمتع بوجباتنا الطازجة المُعدة بحب وعناية</p>
      <button class="bg-white text-orange-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition">
        اطلب الآن
      </button>
    </div>
  </section>

  <!-- Special Offers -->
  <section id="offers" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">عروض اليوم</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-orange-50 rounded-xl overflow-hidden shadow-lg text-center transform hover:scale-105 transition">
          <img src="https://via.placeholder.com/300/FFA500/FFFFFF?text=عرض+٢+أكواب" alt="عرض" class="w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-orange-600">عرض الكباب + مشروب</h3>
            <p class="mt-2 text-gray-600">خصم 25% على وجبة الكباب مع مشروب غازي</p>
            <span class="block mt-3 font-bold text-lg">٣٥ ر.س فقط</span>
          </div>
        </div>
        <div class="bg-red-50 rounded-xl overflow-hidden shadow-lg text-center transform hover:scale-105 transition">
          <img src="https://via.placeholder.com/300/DC143C/FFFFFF?text=حلويات" alt="عرض" class="w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-red-600">حلويات مميزة</h3>
            <p class="mt-2 text-gray-600">اشترِ واحدة، واحصل على الثانية بنصف السعر</p>
            <span class="block mt-3 font-bold text-lg">عرض سارٍ اليوم فقط</span>
          </div>
        </div>
        <div class="bg-green-50 rounded-xl overflow-hidden shadow-lg text-center transform hover:scale-105 transition">
          <img src="https://via.placeholder.com/300/32CD32/FFFFFF?text=توصيل+مجاني" alt="عرض" class="w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-green-600">توصيل مجاني</h3>
            <p class="mt-2 text-gray-600">لجميع الطلبات فوق 70 ر.س داخل المدينة</p>
            <span class="block mt-3 font-bold text-lg">وفر حتى 15 ر.س</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Menu Section -->
  <section id="menu" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">قائمة الطعام</h2>

      <!-- Categories Tabs -->
      <div class="flex flex-wrap justify-center mb-10 space-x-2 space-x-reverse">
        <button class="bg-orange-500 text-white px-6 py-2 rounded-full font-medium active-cat">جميع الأصناف</button>
        <button class="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100">مقبلات</button>
        <button class="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100">وجبات رئيسية</button>
        <button class="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100">مشروبات</button>
        <button class="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100">حلويات</button>
      </div>

      <!-- Meals Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Meal Item 1 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:shadow-xl">
          <img src="https://via.placeholder.com/300/FF6347/FFFFFF?text=كباب" alt="كباب لحم" class="meal-img w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-800">كباب لحم مشوي</h3>
            <p class="text-gray-600 mt-2 text-sm">لحم بقري طازج مع بهارات شرقية، مقدم مع أرز بالزعفران</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-bold text-orange-600">٣٢ ر.س</span>
              <button class="order-btn text-white px-5 py-2 rounded-full text-sm font-medium flex items-center">
                <i class="fas fa-shopping-cart ml-1"></i> اطلب الآن
              </button>
            </div>
          </div>
        </div>

        <!-- Meal Item 2 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:shadow-xl">
          <img src="https://via.placeholder.com/300/9ACD32/FFFFFF?text=تبولة" alt="تبولة" class="meal-img w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-800">سلطة تبولة</h3>
            <p class="text-gray-600 mt-2 text-sm">بقدونس طازج، طماطم، بصل، نعناع، وليمون</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-bold text-orange-600">١٢ ر.س</span>
              <button class="order-btn text-white px-5 py-2 rounded-full text-sm font-medium flex items-center">
                <i class="fas fa-shopping-cart ml-1"></i> اطلب الآن
              </button>
            </div>
          </div>
        </div>

        <!-- Meal Item 3 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:shadow-xl">
          <img src="https://via.placeholder.com/300/FFD700/000000?text=مندي" alt="مندي دجاج" class="meal-img w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-800">مندي دجاج</h3>
            <p class="text-gray-600 mt-2 text-sm">دجاج مطهي على الطريقة اليمنية مع أرز مندي وخلطة بهارات فريدة</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-bold text-orange-600">٢٨ ر.س</span>
              <button class="order-btn text-white px-5 py-2 rounded-full text-sm font-medium flex items-center">
                <i class="fas fa-shopping-cart ml-1"></i> اطلب الآن
              </button>
            </div>
          </div>
        </div>

        <!-- Meal Item 4 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:shadow-xl">
          <img src="https://via.placeholder.com/300/1E90FF/FFFFFF?text=عصير" alt="عصير طازج" class="meal-img w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-800">عصير برتقال طازج</h3>
            <p class="text-gray-600 mt-2 text-sm">مصنوع من برتقال محلي 100% بدون سكر مضاف</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-bold text-orange-600">١٠ ر.س</span>
              <button class="order-btn text-white px-5 py-2 rounded-full text-sm font-medium flex items-center">
                <i class="fas fa-shopping-cart ml-1"></i> اطلب الآن
              </button>
            </div>
          </div>
        </div>

        <!-- Meal Item 5 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:shadow-xl">
          <img src="https://via.placeholder.com/300/FF69B4/FFFFFF?text=كنافة" alt="كنافة نابلسية" class="meal-img w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-800">كنافة نابلسية</h3>
            <p class="text-gray-600 mt-2 text-sm">كنافة مقرمشة مع جبنة وقشطة، مغطاة بشربات حلو</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-bold text-orange-600">١٨ ر.س</span>
              <button class="order-btn text-white px-5 py-2 rounded-full text-sm font-medium flex items-center">
                <i class="fas fa-shopping-cart ml-1"></i> اطلب الآن
              </button>
            </div>
          </div>
        </div>

        <!-- Meal Item 6 -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:shadow-xl">
          <img src="https://via.placeholder.com/300/A0522D/FFFFFF?text=شوربة" alt="شوربة عدس" class="meal-img w-full h-48 object-cover">
          <div class="p-5">
            <h3 class="text-xl font-bold text-gray-800">شوربة عدس</h3>
            <p class="text-gray-600 mt-2 text-sm">شوربة عدس دسمة مع ليمون طازج وخبز محمص</p>
            <div class="flex justify-between items-center mt-4">
              <span class="text-lg font-bold text-orange-600">١١ ر.س</span>
              <button class="order-btn text-white px-5 py-2 rounded-full text-sm font-medium flex items-center">
                <i class="fas fa-shopping-cart ml-1"></i> اطلب الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us -->
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <img src="https://via.placeholder.com/500" alt="فريق المطبخ" class="rounded-xl shadow-lg w-full">
        </div>
        <div class="md:w-1/2 md:pr-12">
          <h2 class="text-3xl font-bold mb-6 text-gray-800">من نحن</h2>
          <p class="text-lg text-gray-600 mb-4">
            نحن مطعم "لذيذ"، نقدم أشهى المأكولات العربية الأصيلة منذ أكثر من 15 عامًا.
          </p>
          <p class="text-lg text-gray-600 mb-4">
            نستخدم فقط أجود المكونات الطازجة، ونطبخ كل وجبة بعناية فائقة، لأن رضاكم هو شغفنا.
          </p>
          <p class="text-lg text-gray-600 mb-6">
            نؤمن أن الطعام ليس مجرد وجبة، بل تجربة ثقافية وعاطفية نتشاركها معكم كل يوم.
          </p>
          <div class="flex space-x-6 space-x-reverse">
            <div class="text-center">
              <span class="block text-3xl font-bold text-orange-600">15+</span>
              <span class="text-sm text-gray-500">سنة خبرة</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-bold text-orange-600">10K+</span>
              <span class="text-sm text-gray-500">عميل راضٍ</span>
            </div>
            <div class="text-center">
              <span class="block text-3xl font-bold text-orange-600">50+</span>
              <span class="text-sm text-gray-500">وصفة أصيلة</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Us -->
  <section id="contact" class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">اتصل بنا</h2>
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-xl shadow-md">
          <form>
            <div class="mb-5">
              <label class="block text-gray-700 font-medium mb-2" for="name">الاسم الكامل</label>
              <input type="text" id="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required>
            </div>
            <div class="mb-5">
              <label class="block text-gray-700 font-medium mb-2" for="phone">رقم الجوال</label>
              <input type="tel" id="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required>
            </div>
            <div class="mb-5">
              <label class="block text-gray-700 font-medium mb-2" for="message">الرسالة</label>
              <textarea id="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
            <button type="submit" class="w-full order-btn text-white font-bold py-3 rounded-lg text-lg hover:shadow-lg transform hover:scale-105 transition">
              إرسال الرسالة
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="flex items-start space-x-4 space-x-reverse">
            <div class="bg-orange-100 p-3 rounded-full">
              <i class="fas fa-map-marker-alt text-orange-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800">موقعنا</h3>
              <p class="text-gray-600">الرياض، شارع التخصصي، بجانب مستشفى الملك فيصل</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 space-x-reverse">
            <div class="bg-orange-100 p-3 rounded-full">
              <i class="fas fa-phone-alt text-orange-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800">الهاتف</h3>
              <p class="text-gray-600">920000000</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 space-x-reverse">
            <div class="bg-orange-100 p-3 rounded-full">
              <i class="fas fa-envelope text-orange-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800">البريد الإلكتروني</h3>
              <p class="text-gray-600">info@ladhed.com</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 space-x-reverse">
            <div class="bg-orange-100 p-3 rounded-full">
              <i class="fas fa-clock text-orange-600"></i>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800">ساعات العمل</h3>
              <p class="text-gray-600">من الأحد إلى الخميس: 10:00 - 23:00</p>
              <p class="text-gray-600">الجمعة والسبت: 12:00 - 01:00</p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="flex space-x-4 space-x-reverse mt-6">
            <a href="#" class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="bg-gray-800 text-white p-3 rounded-full hover:bg-orange-600 transition">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-12 bg-white rounded-xl overflow-hidden shadow-lg h-80">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.507295797217!2d46.68119027437092!3d24.71355227155872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d1b0555%3A0x9c571a9d0d1b0e1e!2sRiyadh!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
          width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-10">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <div class="flex items-center space-x-3 space-x-reverse">
            <img src="https://via.placeholder.com/50" alt="شعار المطعم" class="w-12 h-12 rounded-full">
            <h2 class="text-2xl font-bold">مطعم لذيذ</h2>
          </div>
          <p class="mt-3 text-gray-400">نقدم أشهى المأكولات العربية بجودة عالية وسرعة في التوصيل.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 class="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="text-gray-400 hover:text-white">الرئيسية</a></li>
              <li><a href="#menu" class="text-gray-400 hover:text-white">القائمة</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-white">من نحن</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-4">الخدمات</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">توصيل للمنزل</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">استلام من المطعم</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">حجز طاولات</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">الدفع الإلكتروني</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-4">تابعنا</h3>
            <div class="flex space-x-4 space-x-reverse">
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-tiktok"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-snapchat"></i></a>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-gray-700 my-8">
      <div class="text-center text-gray-500">
        &copy; 2025 مطعم لذيذ. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>

  <script>
    // Tab switching
    document.querySelectorAll('.nav-link').forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.nav-link.active').classList.remove('active');
        this.classList.add('active');
      });
    });

    // Language Toggle
    document.getElementById('lang-toggle').addEventListener('click', function() {
      const isArabic = this.textContent.trim() === 'EN';
      this.textContent = isArabic ? 'AR' : 'EN';
      document.querySelector('h1').textContent = isArabic ? 'Delicious Restaurant' : 'مطعم لذيذ';
      document.querySelectorAll('a')[1].textContent = isArabic ? 'Home' : 'الرئيسية';
      // يمكنك توسيع هذا الجزء لترجمة كامل الموقع
    });

    // Order buttons
    document.querySelectorAll('.order-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        alert('تمت إضافة الطلب إلى السلة! سيتم تطوير نظام الطلب الكامل في النظام المتكامل.');
      });
    });
  </script>
</body>
</html>
