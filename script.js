/*inicio*/

document.addEventListener('DOMContentLoaded', function() {
    // Slider de hero banner
    
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slider-nav span');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Cada 5 segundos


    // Iniciar slider automático
    let slideTimer = setInterval(nextSlide, slideInterval);
    
    // Control manual del slider
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideTimer);
            
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
            
            // Reiniciar timer
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });
    
    // Controles para el horario
    const prevBtn = document.querySelector('.quick-services .prev');
    const nextBtn = document.querySelector('.quick-services .next');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            // Lógica para mostrar horario anterior
        });
        
        nextBtn.addEventListener('click', function() {
            // Lógica para mostrar horario siguiente
        });
    }
    
    // Accordion de especialidades
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los items activos
            document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                activeItem.classList.remove('active');
                activeItem.querySelector('.toggle-icon').textContent = '+';
            });
            
            // Si el item clickeado no estaba activo


/*nosotros*/
// main.js - Main JavaScript for MCA Website

jQuery(document).ready(function($) {
    
    // Team Members Carousel
    $('.team-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // Mobile Menu Toggle
    $('.mobile-menu-toggle').on('click', function() {
        $('.main-menu').slideToggle();
    });
    
    // Search Form
    $('.search-box form').on('submit', function(e) {
        var searchTerm = $(this).find('input[type="text"]').val().trim();
        if (searchTerm === '') {
            e.preventDefault();
        }
    });
    
    // Smooth Scroll for Anchor Links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
    
    // Fixed Header on Scroll
    var headerHeight = $('header').height();
    $(window).scroll(function() {
        if ($(this).scrollTop() > headerHeight) {
            $('.main-header').addClass('fixed');
        } else {
            $('.main-header').removeClass('fixed');
        }
    });
    
    // Initialize Tooltips
    $('[data-toggle="tooltip"]').tooltip();
    
    // Contact Form Validation
    $('#contact-form').submit(function(e) {
        var contactName = $('#contact-name').val().trim();
        var contactEmail = $('#contact-email').val().trim();
        var contactMessage = $('#contact-message').val().trim();
        var error = false;
        
        $('.error-message').remove();
        
        if (contactName === '') {
            $('#contact-name').after('<span class="error-message">Por favor, ingrese su nombre</span>');
            error = true;
        }
        
        if (contactEmail === '') {
            $('#contact-email').after('<span class="error-message">Por favor, ingrese su correo electrónico</span>');
            error = true;
        } else if(!isValidEmail(contactEmail)) {
            $('#contact-email').after('<span class="error-message">Por favor, ingrese un correo electrónico válido</span>');
            error = true;
        }
        
        if (contactMessage === '') {
            $('#contact-message').after('<span class="error-message">Por favor, ingrese su mensaje</span>');
            error = true;
        }
        
        if (error) {
            e.preventDefault();
        }
    });
    
    function isValidEmail(email) {
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return pattern.test(email);
    }
    
    // Social Media Sidebar Toggle
    $('.social-toggle').on('click', function() {
        $('.social-sidebar').toggleClass('open');
    });
    
    // Gallery Lightbox
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    // Initialize Google Map
    if ($('#map').length) {
        initMap();
    }
    
    function initMap() {
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(18.4717, -69.9353), // Santo Domingo coordinates
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{"color": "#444444"}]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{"color": "#f2f2f2"}]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{"saturation": -100}, {"lightness": 45}]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{"visibility": "simplified"}]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{"visibility": "off"}]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{"visibility": "off"}]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{"color": "#a6cbe2"}, {"visibility": "on"}]
                }
            ]
        };
        
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        
        // MCA Pasteur Location
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(18.4717, -69.9353), // Approximate - would need actual coordinates
            map: map,
            title: 'MCA Pasteur',
            icon: 'img/map-marker.png'
        });
        
        // MCA Naco Location
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(18.4747, -69.9323), // Approximate - would need actual coordinates
            map: map,
            title: 'MCA Naco',
            icon: 'img/map-marker.png'
        });
        
        // Info Windows
        var infoWindow1 = new google.maps.InfoWindow({
            content: '<div class="map-info-window"><h4>MCA Pasteur</h4><p>Calle Rafael Augusto Sánchez #4, Multiclinica II, 3er. Nivel</p></div>'
        });
        
        var infoWindow2 = new google.maps.InfoWindow({
            content: '<div class="map-info-window"><h4>MCA Naco</h4><p>Calle Federico Falco No. 24, Naco 3er. Nivel</p></div>'
        });
        
        // Open Info Window on Marker Click
        google.maps.event.addListener(marker1, 'click', function() {
            infoWindow1.open(map, marker1);
        });
        
        google.maps.event.addListener(marker2, 'click', function() {
            infoWindow2.open(map, marker2);
        });
    }
    
    // Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    
    // Testimonials Carousel
    $('.testimonials-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    
    // Appointment Form Date Picker
    if($('#appointment-date').length) {
        $('#appointment-date').datepicker({
            format: 'dd/mm/yyyy',
            startDate: '+1d',
            language: 'es',
            autoclose: true
        });
    }
    
    // FAQ Accordion
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle();
        $(this).toggleClass('active');
    });
    
    // Services Tabs
    $('.service-tabs li').click(function() {
        var tabId = $(this).attr('data-tab');
        
        $('.service-tabs li').removeClass('active');
        $('.tab-content').removeClass('active');
        
        $(this).addClass('active');
        $('#' + tabId).addClass('active');
    });
    
    // Newsletter Form
    $('#newsletter-form').submit(function(e) {
        var email = $('#newsletter-email').val().trim();
        var error = false;
        
        $('.error-message').remove();
        
        if (email === '') {
            $('#newsletter-email').after('<span class="error-message">Por favor, ingrese su correo electrónico</span>');
            error = true;
        } else if(!isValidEmail(email)) {
            $('#newsletter-email').after('<span class="error-message">Por favor, ingrese un correo electrónico válido</span>');
            error = true;
        }
        
        if (error) {
            e.preventDefault();
        } else {
            e.preventDefault();
            // AJAX form submission would go here
            $('#newsletter-form').html('<p class="success-message">¡Gracias por suscribirse a nuestro boletín!</p>');
        }
    });
    
    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    
    // Counter Animation for Statistics
    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
    
    // AOS Initialization for Animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});

/*equipo*/

document.addEventListener('DOMContentLoaded', function() {
    // Configuración del carrusel de doctores
    const doctorCards = document.querySelectorAll('.doctor-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPage = 0;
    const cardsPerPage = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const totalPages = Math.ceil(doctorCards.length / cardsPerPage);
    
    // Función para actualizar la visibilidad de los doctores según la página actual
    function updateDoctorCards() {
        doctorCards.forEach((card, index) => {
            if (index >= currentPage * cardsPerPage && index < (currentPage + 1) * cardsPerPage) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Actualizar estado de los botones
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }
    
    // Event listeners para los botones de navegación
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            updateDoctorCards();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateDoctorCards();
        }
    });
    
    // Responsive adjustment
    window.addEventListener('resize', function() {
        const newCardsPerPage = window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1;
        
        if (newCardsPerPage !== cardsPerPage) {
            currentPage = 0; // Reset to first page on layout change
            updateDoctorCards();
        }
    });
    
    // Initialize
    updateDoctorCards();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simulación de autenticación
    if (username === "juan" && password === "1234") {
        document.getElementById("loginModal").style.display = "none"; // Ocultar login
        document.getElementById("resultsPanel").style.display = "block"; // Mostrar resultados

        // Personalizar mensaje de bienvenida
        document.getElementById("userWelcome").innerText = `Bienvenido(a), ${username}`;

        // Registrar último acceso
        let now = new Date();
        let formattedDate = now.toLocaleDateString("es-ES") + " - " + now.toLocaleTimeString("es-ES");
        document.getElementById("lastAccess").innerText = `Último acceso: ${formattedDate}`;
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

function logoutUser() {
    document.getElementById("resultsPanel").style.display = "none"; // Ocultar resultados
    document.getElementById("loginModal").style.display = "flex"; // Mostrar login
}

function toggleAcordeon(element) {
    const content = element.nextElementSibling;
    const toggleIcon = element.querySelector('.acordeon-toggle');
    
    // Cerrar todos los acordeones activos
    const allContents = document.querySelectorAll('.acordeon-content');
    const allIcons = document.querySelectorAll('.acordeon-toggle');
    
    allContents.forEach(item => {
        if (item !== content) {
            item.classList.remove('active');
        }
    });
    
    allIcons.forEach(icon => {
        if (icon !== toggleIcon) {
            icon.textContent = '+';
        }
    });
    
    // Abrir/cerrar el acordeón actual
    content.classList.toggle('active');
    toggleIcon.textContent = content.classList.contains('active') ? '−' : '+';
}

//contacto

// Main JavaScript for MCA Contact Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Map
    initMap();
    
    // Map tab switching
    initMapTabs();
    
    // Form validation for contact form
    initContactForm();
});

// Google Map initialization
function initMap() {
    // This function would usually be called when the Google Maps API loads
    // Check if map container exists
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        // If Google Maps API is not loaded, add a fallback
        console.log('Google Maps API not loaded');
        return;
    }
    
    // Coordinates for the medical center locations
    const pantiniLocation = { lat: 18.467879, lng: -69.931702 }; // Example coordinates
    const nacoLocation = { lat: 18.472342, lng: -69.923456 }; // Example coordinates
    
    // Create a new map
    const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 15,
        center: pantiniLocation,
        mapTypeControl: false, // We're handling this with custom UI
        zoomControl: true,
        streetViewControl: true,
        fullscreenControl: true
    });
    
    // Add marker for Pantini location
    const pantiniMarker = new google.maps.Marker({
        position: pantiniLocation,
        map: map,
        title: 'MCA Pantini'
    });
    
    // Add marker for Naco location
    const nacoMarker = new google.maps.Marker({
        position: nacoLocation,
        map: map,
        title: 'MCA Naco'
    });
    
    // Add info windows
    const pantiniContent = '<div class="info-window"><h4>MCA Pantini</h4><p>Calle Rafael Augusto Sánchez No. 4, Edificio MedicalArt B, 3er. Nivel</p></div>';
    const nacoContent = '<div class="info-window"><h4>MCA Naco</h4><p>Calle Padre Fantino Falco No. 24, Edificio J, Báez</p></div>';
    
    const pantiniInfo = new google.maps.InfoWindow({
        content: pantiniContent
    });
    
    const nacoInfo = new google.maps.InfoWindow({
        content: nacoContent
    });
    
    pantiniMarker.addListener('click', function() {
        pantiniInfo.open(map, pantiniMarker);
    });
    
    nacoMarker.addListener('click', function() {
        nacoInfo.open(map, nacoMarker);
    });
}

// Map tab functionality
function initMapTabs() {
    const mapTabs = document.querySelectorAll('.map-tab');
    if (!mapTabs.length) return;
    
    mapTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            mapTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Change map type based on selected tab
            const mapType = this.textContent.trim();
            
            if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
                const map = document.getElementById('google-map').map;
                
                if (mapType === 'Mapa') {
                    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                } else if (mapType === 'Satélite') {
                    map.setMapTypeId(google.maps.MapTypeId.HYBRID);
                }
            }
        });
    });
}

// Contact form validation
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Get form fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone');
        const messageField = document.getElementById('message');
        
        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        // Validate name
        if (!nameField.value.trim()) {
            showError(nameField, 'Por favor ingrese su nombre');
            isValid = false;
        }
        
        // Validate email
        if (!validateEmail(emailField.value)) {
            showError(emailField, 'Por favor ingrese un correo electrónico válido');
            isValid = false;
        }
        
        // Validate phone
        if (!phoneField.value.trim() || !validatePhone(phoneField.value)) {
            showError(phoneField, 'Por favor ingrese un número de teléfono válido');
            isValid = false;
        }
        
        // Validate message
        if (!messageField.value.trim()) {
            showError(messageField, 'Por favor ingrese su mensaje');
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
        }
    });
    
    // Helper functions
    function showError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerText = message;
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = 'red';
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone.replace(/\D/g, ''));
    }
}

// Handle appointment request button
document.addEventListener('DOMContentLoaded', function() {
    const appointmentBtn = document.querySelector('.btn-primary');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show appointment form or redirect to appointment page
            window.location.href = 'solicitar-cita.html';
        });
    }
});

// Handle Facebook interaction
function initFacebookWidgets() {
    // This would set up any Facebook widgets or plugins
    if (typeof FB !== 'undefined') {
        FB.XFBML.parse();
    }
}

// Footer posts navigation
function initFooterPosts() {
    const prevBtn = document.querySelector('.slider-controls .prev');
    const nextBtn = document.querySelector('.slider-controls .next');
    const posts = document.querySelectorAll('.footer-post');
    
    if (!prevBtn || !nextBtn || posts.length === 0) return;
    
    let currentIndex = 0;
    const postsPerPage = 3;
    const totalPages = Math.ceil(posts.length / postsPerPage);
    
    // Show only first page of posts initially
    updatePostsVisibility();
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalPages) % totalPages;
        updatePostsVisibility();
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalPages;
        updatePostsVisibility();
    });
    
    function updatePostsVisibility() {
        posts.forEach((post, index) => {
            const startIdx = currentIndex * postsPerPage;
            const endIdx = startIdx + postsPerPage;
            
            if (index >= startIdx && index < endIdx) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }
}

// Initialize functions when page loads
window.addEventListener('load', function() {
    initFooterPosts();
    initFacebookWidgets();
});

// Google Maps callback function that would be called when API loads
window.initMapCallback = function() {
    initMap();
};

// especialidades

// JavaScript for Specialties and Services Sections

document.addEventListener('DOMContentLoaded', function() {
    // Animation for cards on scroll
    const specialtyCards = document.querySelectorAll('.specialty-card');
    const serviceItems = document.querySelectorAll('.service-item');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to add animation class when element is visible
    function checkVisibility() {
        specialtyCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('animate-in');
            }
        });
        
        serviceItems.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('animate-in');
            }
        });
    }
    
    // Initial check on page load
    checkVisibility();
    
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Add hover effect for better interactivity
    specialtyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        card.addEventListener('click', function() {
            // Here you could add navigation to specialty details page
            console.log('Specialty clicked: ' + this.querySelector('p').textContent);
        });
    });
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        item.addEventListener('click', function() {
            // Here you could add navigation to service details page
            console.log('Service clicked: ' + this.querySelector('p').textContent);
        });
    });
    
    // Add animation CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-in {
            animation: fadeInUp 0.5s ease forwards;
        }
        
        .specialty-card, .service-item {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
});