// 1. FUNGSI UNTUK MEMBUAT BUNGA JATUH DARI ATAS KE BAWAH
        function createFallingFlower() {
            const flowers = ['🌸', '🌹', '🌺', '✨', '💕'];
            const flower = document.createElement('div');
            flower.className = 'falling-flower';
            
            // Pilih ikon bunga secara acak
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            
            // Tentukan posisi X awal secara acak (0 hingga lebar layar)
            flower.style.left = Math.random() * 100 + 'vw';
            
            // Durasi jatuh acak antara 3 - 6 detik
            const duration = Math.random() * 3 + 3;
            flower.style.animationDuration = duration + 's';
            
            // Ukuran kelopak bunga acak
            flower.style.fontSize = (Math.random() * 12 + 16) + 'px';

            document.body.appendChild(flower);

            // Hapus elemen bunga setelah animasi selesais
            setTimeout(() => {
                flower.remove();
            }, duration * 1000);
        }

        // Jalankan fungsi bunga jatuh setiap 300 milidetik
        setInterval(createFallingFlower, 300);

        // 2. FUNGSI UNTUK MEMBUKA ISI PESAN KETIKA TOMBOL "KLIK YA" DITEKAN
        function bukaPesan() {
            const coverView = document.getElementById('coverView');
            const letterView = document.getElementById('letterView');
            
            // Sembunyikan Cover Awal
            coverView.style.display = 'none';
            
            // Tampilkan Surat & Foto
            letterView.classList.add('show');
        }