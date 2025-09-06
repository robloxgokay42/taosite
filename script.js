// Basit bir JavaScript örneği: Menüdeki bağlantılara tıklandığında yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// İletişim formu gönderimi (şu an sadece konsola yazar)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        console.log('Form Gönderildi:');
        console.log('Ad Soyad:', name);
        console.log('E-posta:', email);
        console.log('Mesaj:', message);

        // Gerçek bir uygulamada, buraya form verisini sunucuya gönderme kodu eklenir.
        alert('Mesajınız başarıyla gönderildi! (Konsolu kontrol edin)');
        this.reset(); // Formu temizle
    });
}

// Not: Yukarıdaki script.js sadece temel bir örnektir.
// Gerçek bir site için daha karmaşık etkileşimler, API çağrıları vb. gerekebilir.
