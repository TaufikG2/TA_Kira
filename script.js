$(document).ready(function(){
    
    // VARIABLE " Text Judul "
    var messageElement = document.getElementById('text-kira');
    // Mendefinisikan variabel pesan
    var message = "KIRA SERVER";
    // Memperbarui teks pada elemen HTML dengan nilai variabel pesan
    messageElement.textContent = message;

    // KONDISIONAL "IF Else"
     // Mendapatkan informasi tentang URL saat ini
     var currentURL = window.location.href;

     // Memeriksa apakah URL saat ini mengandung kata 'discord'
     if (currentURL.includes('KiraServer')) {
         // Jika URL mengandung kata 'discord', tampilkan pesan berikut
         document.getElementById('message').textContent = 'Anda sedang mengunjungi website Discord.';
     } else {
         // Jika tidak, tampilkan pesan berikut
         document.getElementById('message').textContent = 'Anda tidak mengunjungi website Discord.';
     }

    
    //  FUNGSI "Pengiriman pesan lewat webiste"
    $(function () {
        $('#Submit').click(function (e) {
            var url = $("#url").val(); var content = $("#content").val(); $.post(url, { "content": content }, function () {
                document.getElementById('wb-text').innerHTML = "Message Sent to Discord.";
                document.getElementById("form").style.display = "none";
                setTimeout(() => document.location.reload(), 5000);
            });
        });
    });

    // jQuery Event "dbclick"
    $(function(){
        $('.info').click(function(){
            alert('info')
        })
    })

    // jQuery DOM "remove class and add class"
    
    // AJAX 
    // $('.tombol').click(function(){

    //     $.ajax({
    //         url:'https://api.waifu.pics/sfw/waifu',
    //         method:'GET',
    //         success: function(resource){    
    //             // Update the image container with the fetched image
    //             $('.img-container').html('<img src="' + 'https://api.waifu.pics/sfw/waifu' + '"alt="Random Image">');
    //         },

    //         })
    // })
    

})