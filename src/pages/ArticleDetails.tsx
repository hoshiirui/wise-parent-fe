import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const textarea = event.target;
    const { value } = textarea;
    const maxCharacters = 1000;

    if (value.length <= maxCharacters) {
      textarea.style.height = "auto"; // Reset height to auto to allow textarea to resize
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight of the textarea
      setText(value);
    } else {
      // Truncate the input text if it exceeds the maximum character count
      setText(value.slice(0, maxCharacters));
    }
  };

  const handleSubmit = () => {
    if (text.trim() !== "") {
      // Add a new comment with the current text to the comments array
      setComments([...comments, text]);
      // Clear the textarea
      setText("");
    }
  };

  const data = [
    {
      title: "Manfaat Susu untuk Perkembangan Otak Anak",
      description:
        "Memiliki anak cerdas adalah harapan semua Bunda. Perkembangan otak Si Buah Hati tidak muncul begitu saja, ini dimulai sejak kandungan dan terus berkembang hingga masa kanak-kanak. Bunda mungkin juga telah mengkonsumsi susu untuk perkembangan otak anak  sejak mengandung.",
      timestamp: "3 Minutes Ago - Wise Parent Admin",
      imgTitle: "nutrisi.png",
      category: ["Nutrisi"],
      slug: "manfaat-susu-untuk-perkembangan-otak-anak",
    },
    {
      title: "Cara Efektif Mendidik Anak Agar Pintar dan Cerdas",
      description:
        "Anak yang pintar dianggap dapat lebih berprestasi di sekolah dan meraih kesuksesan dalam kehidupan. Karenanya, tidak jarang orang tua bersedia melakukan apapun agar anak lebih pintar, seperti mendaftarkan anak di program les/kursus.",
      timestamp: "60 Minutes Ago - Wise Parent Admin",
      imgTitle: "stimulasi.png",
      category: ["Stimulasi"],
      slug: "cara-efektif-mendidik-anak-agar-pintar-dan-cerdas",
    },
    {
      title: "Cara Mendukung Potensi Anak di Era Digital",
      description:
        "Kemajuan teknologi di era digital memberi banyak manfaat dalam kehidupan manusia, seperti memudahkan komunikasi, mencari informasi, hingga membantu proses belajar.",
      timestamp: "90 Minutes Ago - Wise Parent Admin",
      imgTitle: "parenting.png",
      category: ["Parenting", "Stimulasi"],
      slug: "cara-mendukung-potensi-anak-di-era-digital",
    },
    // Add more objects as needed
  ];

  const { slug } = useParams();

  return (
    <>
      <Navbar theme="light" selected="krisbu" />
      <div className="overflow-hidden bg-white mt-[40px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="my-16 mx-6">
            {slug === "manfaat-susu-untuk-perkembangan-otak-anak" ? (
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="col-span-8 flex flex-col">
                  <p className="text-4xl font-semibold leading-snug">
                    Manfaat Susu untuk Perkembangan Otak Anak
                  </p>
                  <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                    <p className="text-lg font-semibold text-gray-500">
                      Oleh Admin WiseParent
                    </p>
                    <p className="text-lg font-semibold text-gray-500">|</p>
                    <p className="text-lg font-semibold text-gray-500">
                      Rabu, 27 Desember 2024
                    </p>
                  </div>
                  <img src="/img/nutrisi.png" alt="artikel" className="mt-4" />
                  <p className="my-12 text-lg text-gray-700">
                    Memiliki anak cerdas adalah harapan semua Bunda.
                    Perkembangan otak Si Buah Hati tidak muncul begitu saja, ini
                    dimulai sejak kandungan dan terus berkembang hingga masa
                    kanak-kanak. Bunda mungkin juga telah mengkonsumsi susu
                    untuk perkembangan otak anak sejak mengandung.
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Ikatan Dokter Anak Indonesia (IDAI) menyebut, pemantauan
                    tumbuh kembang anak pada 1.000 hari pertama kehidupan (sejak
                    dalam kandungan sampai usia 2 tahun) sangat penting
                    mengingat pesatnya pertumbuhan dan perkembangan pada usia
                    ini. Sebab, di usia 2 tahun tinggi badan anak sudah mencapai
                    setengah tinggi orang dewasa dan perkembangan otaknya sudah
                    mencapai 80 persen dari otak dewasa.
                  </p>
                  <p className="mb-6 text-lg text-gray-700">
                    Faktanya Bunda, seberapa baik perkembangan otak tergantung
                    pada banyak faktor selain gen, yakni:
                  </p>
                  <ul className="mb-12">
                    <li className="text-lg mb-2 text-gray-700">
                      - Nutrisi yang dimulai pada masa kehamilan
                    </li>
                    <li className="text-lg mb-2 text-gray-700">
                      - Paparan racun atau infeksi
                    </li>
                    <li className="text-lg mb-2 text-gray-700">
                      - Pengalaman anak dengan orang lain
                    </li>
                    <li className="text-lg  text-gray-700">
                      - Pola pengasuhan.
                    </li>
                  </ul>
                  <p className="mb-12 text-lg text-gray-700">
                    Nutrisi didapat dari makanan dan minuman bergizi yang
                    dikonsumsi Bunda sejak mengandung si Buah Hati. Mulai dari
                    sayuran, lauk hewani maupun nabati, buah-buahan, dan susu
                    yang mendukung perkembangan otak. Dalam artikel ini, akan
                    membahas beberapa manfaat susu untuk perkembangan otak anak.
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Susu mengandung kalsium, vitamin D, protein, vitamin A, dan
                    seng yang semuanya penting untuk pertumbuhan dan
                    perkembangan Buah Hati. Susu juga mengandung lemak yang
                    merupakan sumber kalori untuk Si Buah Hati. Selain itu, susu
                    yang difortifikasi dengan mikronutrien dan asam lemak tak
                    jenuh ganda seperti omega 3 ternyata baik untuk perkembangan
                    kognitif Si Buah Hati.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    Kandungan Gizi dalam Susu yang Baik untuk Otak Anak
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Seperti yang disebutkan sebelumnya, susu mengandung banyak
                    nutrisi untuk mendukung fungsi otak. Lalu apa saja kandungan
                    gizi yang perlu ada pada susu untuk Si Buah Hati yang
                    membantu perkembangan fungsi otak?
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    1. Kalsium
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Salah satu nutrisi penting yang terkandung dalam susu dan
                    penting untuk kesehatan otak si Buah Hati adalah kalsium.
                    Kalsium tidak hanya penting untuk kesehatan tulang, tetapi
                    juga membantu perkembangan otak. Tubuh membutuhkan kalsium
                    agar otot dapat bergerak dan membantu saraf membawa pesan
                    dari otak ke seluruh tubuh. Kalsium juga membantu pembuluh
                    darah mengalirkan darah ke seluruh tubuh dan membantu
                    melepaskan hormon yang penting untuk tubuh.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    2. Protein
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Sistem saraf pusat, organ yang meliputi otak dan sumsum
                    tulang belakang, membutuhkan sejumlah asam amino yang
                    terdapat dalam makanan berprotein. Asam amino seperti
                    triptofan, tirosin, histidin dan arginin diperlukan agar
                    otak dapat berfungsi normal.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    3. Asam lemak omega-3
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Seperti yang disebutkan sebelumnya, susu yang difortifikasi
                    asam lemak tak jenuh ganda (PUFA) memiliki efek baik untuk
                    fungsi kognitif anak. Nah, salah satu jenis PUFA yang dapat
                    ditemui dalam susu adalah omega 3. Omega 3 merupakan asam
                    lemak tak jenuh ganda yang penting untuk kinerja kognitif di
                    semua tahap kehidupan. Eicosapentaenoic Acid (EPA),
                    Docosahexaenoic Acid (DHA), dan Alpha-linolenic Acid (ALA)
                    merupakan omega 3 dan ketiganya sangat penting untuk fungsi
                    otak. Penelitian menunjukkan, mengonsumsi omega-3
                    meningkatkan fungsi kognitif, pembelajaran, memori, dan
                    melancarkan aliran darah di otak.
                  </p>
                  <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                    4. Vitamin D
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Vitamin D sangat penting bagi kita karena Vitamin D membantu
                    pengaturan kalsium dalam tubuh agar tubuh berfungsi normal
                    dan juga bermanfaat untuk pembentukan tulang. Selain itu,
                    Vitamin D ternyata juga memainkan peran penting untuk
                    perkembangan otak dan saraf. Bunda bisa mendapatkan vitamin
                    D dengan cara berjemur selama 10-15 menit saat matahari
                    terbit sampai pukul 9 pagi atau mulai jam 3 sore sampai
                    matahari tenggelam. Selain itu Bunda juga mendapatkan
                    Vitamin D dari makanan seperti ikan, daging berwarna merah,
                    hati ayam atau sapi, kuning telur dan produk makanan yang
                    difortifikasi seperti susu formula.
                  </p>
                </div>
                <div className="col-span-4 flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-primary600 text-xl font-bold my-4">
                      Read Next
                    </p>
                    <div className="flex flex-col gap-6">
                      {data.map((item, index) => (
                        <a href={`${item.slug}`} key={index}>
                          <div className="grid lg:grid-cols-3 gap-4">
                            <img
                              className="w-full h-full col-span-1 rounded-lg"
                              src={`/img/${item.imgTitle}`}
                              alt="Wise Parent Hero"
                            />

                            <div className="flex flex-col col-span-2 gap-2">
                              <div className="flex flex-row gap-2">
                                {item.category.map((tags, index) => (
                                  <p
                                    key={index}
                                    className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                  >
                                    {tags}
                                  </p>
                                ))}
                              </div>
                              <p className="font-semibold text-md">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : slug === "cara-efektif-mendidik-anak-agar-pintar-dan-cerdas" ? (
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="col-span-8 flex flex-col">
                  <div className="col-span-8 flex flex-col">
                    <p className="text-4xl font-semibold leading-snug">
                      Cara Efektif Mendidik Anak Agar Pintar dan Cerdas
                    </p>
                    <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                      <p className="text-lg font-semibold text-gray-500">
                        Oleh Admin WiseParent
                      </p>
                      <p className="text-lg font-semibold text-gray-500">|</p>
                      <p className="text-lg font-semibold text-gray-500">
                        Rabu, 27 Desember 2024
                      </p>
                    </div>
                    <img
                      src="/img/stimulasi.png"
                      alt="artikel"
                      className="mt-4"
                    />
                    <p className="my-12 text-lg text-gray-700">
                      Bunda, sebagai orang tua tentu mengharapkan Si Buah Hati
                      dapat tumbuh menjadi anak pintar dan cerdas. Bukan semata
                      agar bisa membanggakan anak, namun demi kehidupan Si Buah
                      Hati di masa mendatang.
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Anak yang pintar dianggap dapat lebih berprestasi di
                      sekolah dan meraih kesuksesan dalam kehidupan. Karenanya,
                      tidak jarang orang tua bersedia melakukan apapun agar anak
                      lebih pintar, seperti mendaftarkan anak di program
                      les/kursus. Tapi sebenarnya apa saja faktor yang
                      mempengaruhi kecerdasan anak dan adakah cara membuat anak
                      menjadi cerdas dan pintar yang efektif?
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      Faktor yang Mempengaruhi Kecerdasan Anak
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Para peneliti telah lama mempelajari tentang kecerdasan
                      dan faktor yang mempengaruhinya. Seperti kebanyakan aspek
                      perilaku dan kognisi seseorang, kecerdasan adalah sifat
                      kompleks yang dipengaruhi oleh faktor genetik dan juga
                      lingkungan.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Dalam hal genetik, kecerdasan seorang anak juga tidak
                      hanya dikendalikan oleh satu gen kecerdasan, melainkan
                      hasil interaksi yang kompleks antara banyak gen. Faktor
                      genetik tersebut juga masih dipengaruhi oleh faktor
                      lingkungan yang turut menentukan bagaimana gen kecerdasan
                      yang dimiliki seorang anak diekspresikan.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Lalu, apa saja faktor lingkungan yang dapat mempengaruhi
                      kecerdasan anak? Hasil sebuah studi menyebutkan, sejumlah
                      faktor lingkungan seperti tempat tinggal, aktivitas fisik,
                      pendapatan keluarga, hingga pendidikan dan pekerjaan orang
                      tua dapat sangat memberi dampak pada tingkat kecerdasan
                      anak.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Karenanya, anak harus mendapat lingkungan yang baik dan
                      mendukung agar dapat mengembangkan potensi kecerdasannya
                      secara optimal.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Tingkat kecerdasan anak juga terbukti selaras dengan
                      pendidikan. Meski masih menjadi perdebatan karena kaitan
                      keduanya dapat memiliki dua arti. Pertama, bahwa anak yang
                      lebih cerdas cenderung mendapat pendidikan lebih lama,
                      atau kedua justru sebaliknya, jangka waktu pendidikan
                      lebih lama berperan meningkatkan kecerdasan anak.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                      Anak dengan tingkat kecerdasan di atas rata-rata biasanya
                      memiliki perilaku yang berbeda dibandingkan anak
                      seusianya. Bunda mungkin akan melihat ciri-ciri anak
                      pintar dan cerdas pada Si Buah Hati, seperti:
                    </p>
                    <ul className="mb-12">
                      <li className="text-lg mb-2 text-gray-700">
                        - Memiliki konsentrasi tinggi saat mengerjakan sesuatu
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Memiliki rasa penasaran yang tinggi
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Lebih cepat belajar
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Memiliki ingatan yang kuat
                      </li>
                      <li className="text-lg mb-2 text-gray-700">
                        - Imajinatif, atau
                      </li>
                      <li className="text-lg  text-gray-700">
                        - Lebih cepat lancar berbicara.
                      </li>
                    </ul>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      Cara Mendidik Anak Pintar dan Cerdas
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Terlepas dari faktor genetik atau ada tidaknya ciri-ciri
                      anak cerdas pada diri Si Buah Hati, cara orang tua dalam
                      merawat dan mendidiknya masih tetap berperan penting dalam
                      membentuk anak pintar dan cerdas.
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Banyak penelitian yang telah menunjukkan pentingnya
                      tahun-tahun awal kehidupan anak dalam perkembangan otak
                      dan membentuk kemampuan kognitifnya. Dalam hal ini, pola
                      pengasuhan orang tua dapat menentukan bagaimana kecerdasan
                      anak. Berikut beberapa tips cara mendidik anak agar pintar
                      dan cerdas yang dapat Bunda praktikkan bersama Si Buah
                      Hati:
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      1. Kenali Gaya Belajar Anak
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Gaya belajar anak bisa dibedakan menjadi tiga jenis, yakni
                      auditori atau memahami lewat pendengaran, visual atau
                      memahami melalui indera penglihatan, dan kinestetik atau
                      belajar lewat gerakan tubuh. Gaya belajar auditori
                      misalnya lewat lagu atau verbal, sedangkan visual bisa
                      melalui gambar atau tulisan. Sementara gaya belajar
                      kinestetik contohnya dengan permainan atau praktik
                      langsung. Memahami bagaimana Si Buah Hati belajar dapat
                      membantu pembelajarannya dengan metode yang sesuai dan
                      lebih cepat paham.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      2. Ciptakan Lingkungan yang Nyaman
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Kondisi di sekitar anak saat belajar juga bisa
                      mempengaruhi daya tangkapnya akan materi pembelajaran yang
                      diberikan Bunda. Buat suasana yang nyaman untuk anak
                      belajar. Jauhkan segala hal yang mungkin bisa mendistraksi
                      perhatian Si Buah Hati, seperti televisi atau gadget.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      3. Tanamkan Rasa Disiplin
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Mengajarkan disiplin pada anak tentang perilaku
                      bertanggung jawab dan konsekuensi yang akan ditanggung
                      dari tindakannya sendiri. Hal ini akan mendorong anak
                      belajar mengelola perasaan dan perilakunya, serta dapat
                      mengendalikan diri.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      4. Hargai Proses Belajar
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Saat hasil yang diperoleh Si Buah Hati belum sesuai dengan
                      yang diharapkan Bunda, maka tetap berikan apresiasi atas
                      usaha yang telah dilakukannya. Menghargai proses belajar
                      dibandingkan hasil akan membuat anak lebih percaya diri,
                      tidak mudah menyerah, dan memahami sukses adalah hasil
                      kerja keras.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      5. Biasakan Membaca sejak Dini
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Membaca adalah sumber pengetahuan. Bunda dapat membiasakan
                      Si Buah Hati kebiasaan membaca sejak dini dengan membaca
                      buku bersama. Cara ini membantu kemampuan bahasa anak
                      sekaligus dapat mempererat hubungan orang tua dengan anak.
                    </p>
                    <p className="mb-6 text-3xl leading-snug font-bold text-gray-700">
                      6. Penuhi Asupan Nutrisi
                    </p>
                    <p className="mb-12 text-lg text-gray-700">
                      Berikutnya, yang tidak kalah penting yakni memastikan
                      kebutuhan gizi anak terpenuhi. Otak membutuhkan gizi dari
                      makanan sehat untuk belajar dan agar dapat berkembang
                      optimal. Sejumlah nutrisi seperti DHA dan zat besi
                      berperan untuk membantu perkembangan kognitif dan
                      mendukung proses belajar.
                    </p>
                  </div>
                </div>
                <div className="col-span-4 flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-primary600 text-xl font-bold my-4">
                      Read Next
                    </p>
                    <div className="flex flex-col gap-6">
                      {data.map((item, index) => (
                        <a href={`${item.slug}`} key={index}>
                          <div className="grid lg:grid-cols-3 gap-4">
                            <img
                              className="w-full h-full col-span-1 rounded-lg"
                              src={`/img/${item.imgTitle}`}
                              alt="Wise Parent Hero"
                            />

                            <div className="flex flex-col col-span-2 gap-2">
                              <div className="flex flex-row gap-2">
                                {item.category.map((tags, index) => (
                                  <p
                                    key={index}
                                    className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                  >
                                    {tags}
                                  </p>
                                ))}
                              </div>
                              <p className="font-semibold text-md">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-12 gap-12">
                <div className="col-span-8 flex flex-col">
                  <p className="text-4xl font-semibold leading-snug">
                    Perlu Kamu Ketahui, Ini Starter Pack Wajib untuk Kamu
                    Berlibur Ke Bali!
                  </p>
                  <div className="flex flex-row justify-between md:justify-start gap-4 my-4">
                    <p className="text-lg font-semibold text-gray-500">
                      Oleh Admin WiseParent
                    </p>
                    <p className="text-lg font-semibold text-gray-500">|</p>
                    <p className="text-lg font-semibold text-gray-500">
                      Rabu, 27 Desember 2024
                    </p>
                  </div>
                  <img src="/img/mock.jpg" alt="artikel" className="mt-4" />
                  <p className="my-12 text-lg text-gray-700">
                    Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                    iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                    lengkap agar pengalaman liburanmu semakin berkesan. Bali
                    menawarkan beragam keindahan alam, budaya yang kaya, dan
                    aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                    semakin nyaman dan menyenangkan, ada beberapa item wajib
                    yang harus ada dalam starter packmu. Yuk, simak apa saja
                    yang perlu kamu siapkan sebelum berlibur ke Bali!
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                    iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                    lengkap agar pengalaman liburanmu semakin berkesan. Bali
                    menawarkan beragam keindahan alam, budaya yang kaya, dan
                    aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                    semakin nyaman dan menyenangkan, ada beberapa item wajib
                    yang harus ada dalam starter packmu. Yuk, simak apa saja
                    yang perlu kamu siapkan sebelum berlibur ke Bali!
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                    iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                    lengkap agar pengalaman liburanmu semakin berkesan. Bali
                    menawarkan beragam keindahan alam, budaya yang kaya, dan
                    aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                    semakin nyaman dan menyenangkan, ada beberapa item wajib
                    yang harus ada dalam starter packmu. Yuk, simak apa saja
                    yang perlu kamu siapkan sebelum berlibur ke Bali!
                  </p>
                  <p className="mb-12 text-lg text-gray-700">
                    Apakah kamu merencanakan liburan ke Pulau Dewata, Bali? Jika
                    iya, kamu pasti ingin memastikan bahwa persiapanmu sudah
                    lengkap agar pengalaman liburanmu semakin berkesan. Bali
                    menawarkan beragam keindahan alam, budaya yang kaya, dan
                    aktivitas seru yang bisa kamu nikmati. Nah, agar liburanmu
                    semakin nyaman dan menyenangkan, ada beberapa item wajib
                    yang harus ada dalam starter packmu. Yuk, simak apa saja
                    yang perlu kamu siapkan sebelum berlibur ke Bali!
                  </p>
                </div>
                <div className="col-span-4 flex flex-col">
                  <div className="flex flex-col">
                    <p className="text-primary600 text-xl font-bold my-4">
                      Read Next
                    </p>
                    <div className="flex flex-col gap-6">
                      {data.map((item, index) => (
                        <a href={`${item.slug}`} key={index}>
                          <div className="grid lg:grid-cols-3 gap-4">
                            <img
                              className="w-full h-full col-span-1 rounded-lg"
                              src={`/img/${item.imgTitle}`}
                              alt="Wise Parent Hero"
                            />

                            <div className="flex flex-col col-span-2 gap-2">
                              <div className="flex flex-row gap-2">
                                {item.category.map((tags, index) => (
                                  <p
                                    key={index}
                                    className="text-xs px-2 py-1 bg-secondary600 text-white rounded-lg"
                                  >
                                    {tags}
                                  </p>
                                ))}
                              </div>
                              <p className="font-semibold text-md">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="col-span-8 flex flex-col">
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="font-semibold text-lg">Comment</p>
                  <div className="bg-white border-gray-200 shadow-sm py-4 mt-4 rounded-lg">
                    <textarea
                      className="w-full px-4 focus:outline-none"
                      placeholder="Write Comment"
                      value={text}
                      onChange={handleChange}
                      style={{ minHeight: "80px" }} // Set a minimum height to prevent the textarea from becoming too small
                    />
                    <div className="border-b border-gray-200 my-4"></div>
                    <div className="flex flex-row mx-4 justify-between items-center">
                      <p className="text-sm">
                        {1000 - text.length} characters left
                      </p>
                      <button
                        className="text-sm bg-primary500 text-white px-4 py-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Render the comments */}
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="border border-gray-400 p-4 rounded-lg mt-4"
                  >
                    <div className="flex flex-row gap-2 items-center">
                      <img
                        id="avatarButton"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        src="/img/sampul.jpg"
                        alt="User dropdown"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">Miori Celesta</p>
                        <p className="text-xs">March, 20 2024</p>
                      </div>
                    </div>

                    <p className="my-2">{comment}</p>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex flex-row gap-1 items-center">
                        <img
                          src="/img/laiks.svg"
                          alt="like"
                          className="w-5 h-5"
                        />
                        <p className="text-sm">5</p>
                      </div>
                      <div className="flex flex-row gap-1 items-center">
                        <img
                          src="/img/dislaiks.svg"
                          alt="like"
                          className="w-5 h-5"
                        />
                        <p className="text-sm">5</p>
                      </div>
                      <p className="mx-2">Reply</p>
                      <p className="mx-2">Report</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
