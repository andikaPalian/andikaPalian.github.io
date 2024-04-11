$(document).ready(function () {
  /*
   * Main variables
   */
  var content = [
    {
      title: "Rezky Amalia",
      desc: "Sayangggkuuuu Cintakuuuu Cantikkkuuuu Manisskuuuuu Duniakuuuuu",
    },
    {
      title: "Terima Kasih Sayangkuuuu",
      desc: "Sayangg terima kasih banyak sudah hadirkan kembali warna di kehidupanku, terima kasih telah memilihku dari sekian banyaknya yang mau sama kau dan bahkan lebih dari diriku sayangg, terima kasih atas rasa sayang dan cintamu yang kau berikan ke saya yang tidak pernah ku rasakan dari orang selain ibuku, terima kasih telah menjadi wanita yang tulus dan setia kepadaku, TERIMA KASIH BANYAKK SAYANGG UNTUK SEGALANYA THANKS FOR EVERYTHING SAYANGKUUU",
    },
    {
      title: "Beruntung Sekalika Sayanggg",
      desc: "Sangat beruntungka karena bisa punya pacar pasangan hidup seperti Liaa yang baik, tulus, setia, cantik, manis, tidak suka respon kalau ada laki-laki mau dekati. Seberuntung itu ka sayangggg",
    },
    {
      title: "Bersyukur Sekalika Sayanggg",
      desc: "Sangat bersyukurka dengan Tuhan karena telah kabulkan salah satu doa yang sering ku doakan setiap berdoaka, selaluka minta dulu ke Tuhan berikanka pasangan hidup sehidup semati yang baik tuluss setia dan sayangg dengan saya dan mintaka agar hanya itu satu satunya wanita yang kau berikan kepadaku untuk selama-lamanya dan Tuhan kabulkan lewat Rezky Amalia sangat bersyukurkan akan hal itu dan sampai kapanpun yakinka sayangg memang kau yang Tuhan berikan kepadaku dan pertemukan dengan saya maka dari itu akan ku jaga ko Sayanggg, akan ku sayangggko terusss dan cintaakooo terusss seumur hidupku, dan akan ku terima semua baik dan buruk sikapmu sayanggg semua kekuranganmu ku terima dan ku lengkapi sayanggg ku harap sekali Liaa memikirkan dan melakukan hal yang sama. Yang ku minta di Liaaa bukanji cantik dan lain lain tidak pedulija dengan fisiknya Liaa tidak perluja itu semua yang ku perlu di kau itu Rezky Amalia cuman kau mau tulus, setia, sayangg saya, tegur dan ingatkanka kalau buat salah atau sesuatu yang tidak mu suka ku buat dan ubah itu satu sifatmu yang kalau marah atau emosi minta putus cuman itu yang ku perlu sayanggg",
    },
    {
      title: "Sayang dan Cintaa Ku Ke Kau Sayangggg",
      desc: "Betapa ku sayangg dan cintaanyaaa dirimu Rezky Amalia ku sayanggg sekaliko setiap saatka mau bilang itu ke kau karena sebegitu sayangggkuuuu ke kamu Rezky Amalia. Sama-samaki terusna sayanggg, sama-samaki jadi yang terbaik. Karena ku sayangggmuuu Rezky Amalia semakin takutka kehilangan kamu apa lagi karen ulahku, takut sekalika kecewakanko Sayangggg, banyak ketakutanku dan berharapka agar tidak terjadi itu",
    },
    {
        title: "Ku Harap",
        desc: "Ku harap rasa sayangmu ke saya tidak akan pernah berubah sayangggg, ayok kuatki untuk bisa hadapi tantangan, rintangan, ataupun masalah yang akan diberikan Tuhan untuk uji keseriusanta Sayanggg na, Sama-sama ki teruss na Liaa Sayanggkuuu sama-samaki jadi yang terbaik bukan mencari yang terbaik na sayanggggkuuuu, Selaluka berdoa itu agar harapan dan tujuanta bersama untuk ke jenjang yang lebih serius pernikahan menua bersama dan bahkan jika hanya nama ta tinggal didunia rasa sayangg dan cinta kita tidak pernah hilang atau pudar dan abadi selamanya Sayaangggg 'Aminnnn",
    },
    {
        title: "I LOVEEE YOUUUUU MOREEEEE, I LOVEEEEE YOUUUUU SOOOO MUCCHHHHH, I LOVEEE YOUUUUU FOREEVEERRRR REZKY AMALIA SAYANGGKUUUUU",
        desc: "",
    },
    {
        title: "Dari Kekasihmu Pacarmu Andika Palian",
        desc: "Masih banyak yang ingin ku ungkapkan tentang betapa besarnya rasaa sayanggkuuu cintaakuuuu terima kasihku dan juga rasa syukurku tapi tidak tahuka bagaimana ungkapkan ke kau Sayanggg"
    }
  ];
  var currentPage = 0;
  //generate content
  for (var i = 0; i < content.length; i++) {
    //split content letters to array
    for (var obj in content[i]) {
      //if string
      if (typeof content[i][obj] === "string") {
        content[i][obj] = content[i][obj].split("");
        continue;
      }
      //if array (grouped text)
      else if (typeof content[i][obj] === "object") {
        var toPush = [];
        for (var j = 0; j < content[i][obj].length; j++) {
          for (var k = 0; k < content[i][obj][j].length; k++) {
            toPush.push(content[i][obj][j][k]);
          }
        }
        content[i][obj] = toPush;
      }
    }
    //set text to
    $("#segments").append(
      '<div class="letters-wrap mutable"><div class="soup-title"></div><div class="soup-desc"></div></div>'
    );
    setText();
    //clone to data
    $("#segments").append(
      '<div class="letters-wrap position-data"><div class="soup-title"></div><div class="soup-desc"></div></div>'
    );
    setText();
  }
  //initial arrangement
  arrangeCurrentPage();
  scrambleOthers();
  /*
   * Event handlers
   */
  $(window).resize(function () {
    arrangeCurrentPage();
    scrambleOthers();
  });
  $("#soup-prev").hide();
  $("#soup-prev").click(function () {
    $("#soup-next").show();
    currentPage--;
    if (currentPage === 0) {
      $("#soup-prev").hide();
    }
    arrangeCurrentPage();
    scrambleOthers();
  });
  $("#soup-next").click(function () {
    $("#soup-prev").show();
    currentPage++;
    if (currentPage === content.length - 1) {
      $("#soup-next").hide();
    }
    arrangeCurrentPage();
    scrambleOthers();
  });
  /*
   * Functions
   */
  function arrangeCurrentPage() {
    for (var i = 0; i < content[currentPage].title.length; i++) {
      $(".mutable:eq(" + currentPage + ") > .soup-title > .letter")
        .eq(i)
        .css({
          left:
            $(".position-data:eq(" + currentPage + ") > .soup-title > .letter")
              .eq(i)
              .offset().left + "px",
          top:
            $(".position-data:eq(" + currentPage + ") > .soup-title > .letter")
              .eq(i)
              .offset().top + "px",
          color: "#111",
          zIndex: 9001,
        });
    }
    for (var i = 0; i < content[currentPage].desc.length; i++) {
      $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter")
        .eq(i)
        .css({
          left:
            $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter")
              .eq(i)
              .offset().left + "px",
          top:
            $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter")
              .eq(i)
              .offset().top + "px",
          color: "#111",
          zIndex: 9001,
        });
    }
  }

  function setText() {
    var j;
    for (j = 0; j < content[i].title.length; j++) {
      $(".soup-title")
        .last()
        .append('<span class="letter">' + content[i].title[j] + "</span>");
    }
    for (j = 0; j < content[i].desc.length; j++) {
      $(".soup-desc")
        .last()
        .append('<span class="letter">' + content[i].desc[j] + "</span>");
    }
  }

  function scrambleOthers() {
    for (var i = 0; i < content.length; i++) {
      //don't scramble currentPage
      if (currentPage === i) continue;
      var parts = [
        ["title", ".soup-title"],
        ["desc", ".soup-desc"],
      ];
      //apply to .title h1s and .desc ps
      for (var j = 0; j < parts.length; j++) {
        for (var k = 0; k < content[i][parts[j][0]].length; k++) {
          //define random position on screen
          var randLeft = Math.floor(Math.random() * $(window).width());
          var randTop = Math.floor(Math.random() * $(window).height());
          //defining boundaries
          var offset = $(".position-data").eq(currentPage).offset();
          var bounds = {
            left: offset.left,
            top: offset.top,
            right: $(window).width() - offset.left,
            bottom: $(window).height() - offset.top,
          };
          var middleX =
            bounds.left + $(".position-data").eq(currentPage).width() / 2;
          var middleY =
            bounds.top + $(".position-data").eq(currentPage).height() / 2;
          //finally, apply all the scrambles
          $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter")
            .eq(k)
            .css({
              left: randLeft,
              top: randTop,
              color: "#DDD",
              zIndex: "initial",
            });
        }
      }
    }
  }
});
