import type { Question } from '@/types/question';

export const questions: Question[] = [
  {
    id: 1,
    title: "Soal 1 - Pola Pergeseran & Transformasi",
boxes: [
  { tl: { t: 'kapsul', f: false }, tr: { t: 'tetes_air', f: false, rot: 'atas' }, bl: { t: 'bintang_4', f: true }, br: { t: 'segi_enam', f: true, garis: 1 } },
  { tl: { t: 'segi_enam', f: false, garis: 2 }, tr: { t: 'kapsul', f: true }, bl: { t: 'tetes_air', f: false, rot: 'kiri' }, br: { t: 'bintang_4', f: true } },
  { tl: { t: 'bintang_4', f: true }, tr: { t: 'segi_enam', f: true, garis: 3 }, bl: { t: 'kapsul', f: false }, br: { t: 'tetes_air', f: false, rot: 'bawah' } },
  { tl: { t: 'tetes_air', f: false, rot: 'kanan' }, tr: { t: 'bintang_4', f: true }, bl: { t: 'segi_enam', f: false, garis: 4 }, br: { t: 'kapsul', f: true } },
],
options: [
  { label: 'A', tl: { t: 'kapsul', f: true }, tr: { t: 'tetes_air', f: false, rot: 'bawah' }, bl: { t: 'bintang_4', f: false }, br: { t: 'segi_enam', f: true, garis: 5 } },
  { label: 'B', tl: { t: 'kapsul', f: false }, tr: { t: 'tetes_air', f: true, rot: 'atas' }, bl: { t: 'bintang_4', f: true }, br: { t: 'segi_enam', f: false, garis: 5 } },
  { label: 'C', tl: { t: 'kapsul', f: false }, tr: { t: 'tetes_air', f: false, rot: 'kanan' }, bl: { t: 'bintang_4', f: true }, br: { t: 'segi_enam', f: true, garis: 4 } },
  { label: 'D', tl: { t: 'kapsul', f: false }, tr: { t: 'tetes_air', f: false, rot: 'atas' }, bl: { t: 'bintang_4', f: true }, br: { t: 'segi_enam', f: true, garis: 5 } },
  { label: 'E', tl: { t: 'kapsul', f: false }, tr: { t: 'tetes_air', f: false, rot: 'atas' }, bl: { t: 'bintang_4', f: false }, br: { t: 'segi_enam', f: true, garis: 6 } },
    ],
    correctAnswer: 'C',
    rules: [
      "Pergeseran: Keempat bangun bergeser berlawanan arah jarum jam setiap kotak",
      "Warna: Bangun di Kanan Atas & Kiri Bawah selalu HITAM",
      "Rotasi: Jajar Genjang berputar 90° setiap kotak (mendatar↔tegak)",
      "Atribut: Tanda Tambah bertambah 1 titik setiap kotak"
    ],
    explanation: [
      "Pertama, perhatikan aturan pergeseran posisi. Keempat bangun selalu bergeser berlawanan arah jarum jam sebanyak satu posisi setiap kali berpindah kotak.",
      "Kedua, perhatikan pola warna bersyarat. Bangun di posisi Kanan Atas dan Kiri Bawah akan selalu berubah warna menjadi Hitam pekat.",
      "Ketiga, perhatikan rotasi Jajar Genjang. Bangun Jajar Genjang selalu berputar 90 derajat setiap berpindah kotak, bergantian antara posisi mendatar dan tegak.",
      "Keempat, perhatikan atribut Tanda Tambah. Terdapat titik hitam di ujung lengannya yang jumlahnya bertambah satu buah secara konstan setiap pindah kotak."
    ]
  },
  {
    id: 2,
    title: "Soal 2 - Pertukaran Diagonal & Rotasi",
boxes: [
  { tl: { t: 'lensa', f: true }, tr: { t: 'layang_layang', f: true, rot: 'atas' }, bl: { t: 'pita', f: true, ekor: 2 }, br: { t: 'segi_delapan', f: false } },
  { tl: { t: 'layang_layang', f: false, rot: 'bawah' }, tr: { t: 'lensa', f: false }, bl: { t: 'segi_delapan', f: true }, br: { t: 'pita', f: false, ekor: 3 } },
  { tl: { t: 'segi_delapan', f: false }, tr: { t: 'pita', f: true, ekor: 4 }, bl: { t: 'layang_layang', f: true, rot: 'atas' }, br: { t: 'lensa', f: true } },
  { tl: { t: 'pita', f: false, ekor: 5 }, tr: { t: 'segi_delapan', f: true }, bl: { t: 'lensa', f: false }, br: { t: 'layang_layang', f: false, rot: 'bawah' } },
],
options: [
  { label: 'A', tl: { t: 'lensa', f: true }, tr: { t: 'layang_layang', f: true, rot: 'atas' }, bl: { t: 'pita', f: true, ekor: 6 }, br: { t: 'segi_delapan', f: false } },
  { label: 'B', tl: { t: 'lensa', f: false }, tr: { t: 'layang_layang', f: false, rot: 'bawah' }, bl: { t: 'pita', f: false, ekor: 6 }, br: { t: 'segi_delapan', f: true } },
  { label: 'C', tl: { t: 'layang_layang', f: true, rot: 'atas' }, tr: { t: 'lensa', f: true }, bl: { t: 'segi_delapan', f: false }, br: { t: 'pita', f: true, ekor: 6 } },
  { label: 'D', tl: { t: 'lensa', f: true }, tr: { t: 'layang_layang', f: true, rot: 'atas' }, bl: { t: 'pita', f: true, ekor: 5 }, br: { t: 'segi_delapan', f: false } },
  { label: 'E', tl: { t: 'pita', f: true, ekor: 6 }, tr: { t: 'segi_delapan', f: false }, bl: { t: 'layang_layang', f: true, rot: 'atas' }, br: { t: 'lensa', f: true } },    ],
    correctAnswer: 'E',
    rules: [
      "Pertukaran: Bergiliran Kiri Atas↔Kanan Bawah, lalu Kanan Atas↔Kiri Bawah",
      "Rotasi: Tanda Panah berputar 45° searah jarum jam setiap kotak",
      "Arah: Bulan Sabit membalik arah (kiri↔kanan) setiap kotak",
      "Kelopak: Bunga berkurang 1 kelopak setiap kotak"
    ],
    explanation: [
      "Pertama, perhatikan pertukaran posisi secara menyilang diagonal. Dari Kotak 1 ke 2: Kiri Atas↔Kanan Bawah. Dari Kotak 2 ke 3: Kanan Atas↔Kiri Bawah. Pola ini berulang.",
      "Kedua, perhatikan rotasi Tanda Panah. Panah selalu berputar 45 derajat searah jarum jam. Pada Kotak 4 (135°), maka Kotak 5 = 180° (lurus ke bawah).",
      "Ketiga, perhatikan arah Bulan Sabit. Bulan selalu membalik arah hadapnya setiap kotak. Kotak 4 menghadap kanan, maka Kotak 5 menghadap kiri.",
      "Keempat, perhatikan jumlah kelopak Bunga. Jumlahnya selalu berkurang satu: 8→7→6→5, maka Kotak 5 = 4 kelopak."
    ]
  },
  {
    id: 3,
    title: "Soal 3 - Jalur Z & Transformasi",
boxes: [
  { tl: { t: 'jam_pasir', f: false }, tr: { t: 'mahkota', f: false, titik: 3 }, bl: { t: 'perisai', f: true }, br: { t: 'daun', f: true, rot: 'atas' } },
  { tl: { t: 'mahkota', f: true, titik: 5 }, tr: { t: 'perisai', f: false }, bl: { t: 'daun', f: false, rot: 'kanan' }, br: { t: 'jam_pasir', f: true } },
  { tl: { t: 'perisai', f: true }, tr: { t: 'daun', f: true, rot: 'bawah' }, bl: { t: 'jam_pasir', f: false }, br: { t: 'mahkota', f: false, titik: 7 } },
  { tl: { t: 'daun', f: false, rot: 'kiri' }, tr: { t: 'jam_pasir', f: true }, bl: { t: 'mahkota', f: true, titik: 9 }, br: { t: 'perisai', f: false } },
],
options: [
  { label: 'A', tl: { t: 'jam_pasir', f: false }, tr: { t: 'mahkota', f: false, titik: 10 }, bl: { t: 'perisai', f: true }, br: { t: 'daun', f: true, rot: 'atas' } },
  { label: 'B', tl: { t: 'jam_pasir', f: false }, tr: { t: 'mahkota', f: false, titik: 11 }, bl: { t: 'perisai', f: true }, br: { t: 'daun', f: true, rot: 'atas' } },
  { label: 'C', tl: { t: 'jam_pasir', f: true }, tr: { t: 'mahkota', f: true, titik: 11 }, bl: { t: 'perisai', f: false }, br: { t: 'daun', f: false, rot: 'atas' } },
  { label: 'D', tl: { t: 'jam_pasir', f: false }, tr: { t: 'mahkota', f: false, titik: 11 }, bl: { t: 'perisai', f: true }, br: { t: 'daun', f: true, rot: 'kiri' } },
  { label: 'E', tl: { t: 'daun', f: true, rot: 'atas' }, tr: { t: 'jam_pasir', f: false }, bl: { t: 'mahkota', f: false, titik: 11 }, br: { t: 'perisai', f: true } },
    ],
    correctAnswer: 'B',
    rules: [
      "Jalur Z: Kiri Atas→Kanan Atas→Kiri Bawah→Kanan Bawah→Kiri Atas",
      "Warna: Bangun di Kiri Bawah selalu HITAM",
      "Orientasi: Silinder bergantian vertical↔horizontal",
      "Titik: Kubus bertambah 2 titik setiap kotak"
    ],
    explanation: [
      "Pertama, perhatikan rute pergerakan elemen yang membentuk jalur huruf Z berulang. Dari Kotak 4 ke Kotak 5, Silinder akan kembali naik menempati posisi Kiri Atas.",
      "Kedua, perhatikan pola pewarnaan berdasarkan letak ruang. Bangun di Kiri Bawah akan selalu berubah warna menjadi Hitam pekat. Kubus masuk ke Kiri Bawah, maka wajib Hitam.",
      "Ketiga, perhatikan transformasi orientasi Silinder. Orientasi bergantian antara berdiri tegak dan tidur mendatar. Kotak 4 = mendatar, maka Kotak 5 = tegak.",
      "Keempat, perhatikan deret aritmatika pada atribut Kubus. Jumlah titik bertambah 2 setiap kotak: 2→4→6→8, maka Kotak 5 = 10 titik."
    ]
  }
];
