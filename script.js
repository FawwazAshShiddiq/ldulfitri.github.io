function showMessage() {
    var button = document.getElementById("btnSelamat");
    var message = document.getElementById("selamatMessage");
    var message2 = document.getElementById("selamatMessage2");
    var message3 = document.getElementById("selamatMessage3");
    var message4 = document.getElementById("selamatMessage4");
    var message5 = document.getElementById("selamatMessage5");
    var message6 = document.getElementById("selamatMessage6");
    var message7 = document.getElementById("selamatMessage7");
    var message8 = document.getElementById("selamatMessage8");
    var message9 = document.getElementById("selamatMessage9");
    var message10 = document.getElementById("selamatMessage10");
    var message11 = document.getElementById("selamatMessage11");

    button.style.display = "none"; // Menghilangkan tombol
    message.style.display = "block"; // Menampilkan pesan

    // Mengatur waktu untuk menyembunyikan pesan pertama setelah 3 detik (3000 milidetik)
    setTimeout(function() {
        message.style.display = "none"; // Menghilangkan pesan pertama setelah 3 detik  
    }, 3000); // Waktu dalam milidetik (di sini, 3000 milidetik = 3 detik)

    // Menampilkan pesan kedua setelah animasi pertama selesai
    message.addEventListener("animationend", function() {
        setTimeout(function() {
            message2.style.display = "block"; // Menampilkan pesan kedua
        }, 2000); // Menunggu 2 detik sebelum menampilkan pesan kedua setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan kedua setelah 5 detik (5000 milidetik)
        setTimeout(function() {
            message2.style.display = "none"; // Menghilangkan pesan kedua setelah 5 detik  
        }, 6000); // Waktu dalam milidetik (di sini, 5000 milidetik = 5 detik)

        setTimeout(function() {
            message3.style.display = "block"; // Menampilkan pesan ketiga
        }, 6000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message3.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 7900); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)
        
        setTimeout(function() {
            message4.style.display = "block"; // Menampilkan pesan ketiga
        }, 8000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message4.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 11000); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)

        setTimeout(function() {
            message5.style.display = "block"; // Menampilkan pesan ketiga
        }, 12000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message5.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 16000); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)
        
        setTimeout(function() {
            message6.style.display = "block"; // Menampilkan pesan ketiga
        }, 16000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message6.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 21000); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)
        
        setTimeout(function() {
            message7.style.display = "block"; // Menampilkan pesan ketiga
        }, 21000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message7.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 25000); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)
        
        setTimeout(function() {
            message8.style.display = "block"; // Menampilkan pesan ketiga
        }, 25000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message8.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 27990); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)
        
        setTimeout(function() {
            message9.style.display = "block"; // Menampilkan pesan ketiga
        }, 28000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message9.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 31990); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)
        
        setTimeout(function() {
            message10.style.display = "block"; // Menampilkan pesan ketiga
        }, 32000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        setTimeout(function() {
            message10.style.display = "none"; // Menghilangkan pesan ketiga setelah 7.9 detik  
        }, 38000); // Waktu dalam milidetik (di sini, 7900 milidetik = 7.9 detik)

        setTimeout(function() {
            message11.style.display = "block"; // Menampilkan pesan ketiga
        }, 39000); // Menunggu 5 detik sebelum menampilkan pesan ketiga setelah animasi pertama selesai
        
        // Mengatur waktu untuk menyembunyikan pesan ketiga setelah 7.9 detik (7900 milidetik)
        playMusic();
    });

}

function playMusic() {
    var audio = new Audio('videoplayback.mp3');
    audio.play();
}