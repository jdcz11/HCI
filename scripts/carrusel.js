let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");

        function showSlide(index) {
            const translateX = -index * 100;
            document.querySelector(".carousel").style.transform = `translateX(${translateX}%)`;
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        showSlide(currentIndex);