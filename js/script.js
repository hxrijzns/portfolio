// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    e.preventDefault()
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen ybs

    console.log("tujuan", tujuan)
    var elemenTujuan = $(tujuan);
    var destinationPosition = elemenTujuan.offset().top - 40

    console.log("original", elemenTujuan.offset().top)
    console.log("@@@destinationPosition", destinationPosition)

     // pindahkan scroll
    // $('body').animate({
    //     scrollTop: elemenTujuan.offset().top - 200
    //     // scrollTop: elemenTujuan.offset().top - elemenTujuan.offset().top
    // }, 1000);

    window.scrollTo(0, destinationPosition)
    


});