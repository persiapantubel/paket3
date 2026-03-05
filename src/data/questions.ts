import type { Question } from '@/types/question';

export const questions: Question[] = [
  {
    id: 1,
    title: "Soal 1 - Pola Pergeseran & Transformasi",
    boxes: [
      {
        tl: { type: 'trapesium', filled: false },
        tr: { type: 'elips', filled: true },
        bl: { type: 'tambah', filled: true, dots: 0 },
        br: { type: 'jajargenjang', filled: false, rotation: 'horizontal' }
      },
      {
        tl: { type: 'elips', filled: false },
        tr: { type: 'jajargenjang', filled: true, rotation: 'vertical' },
        bl: { type: 'trapesium', filled: true },
        br: { type: 'tambah', filled: false, dots: 0 }
      },
      {
        tl: { type: 'jajargenjang', filled: false, rotation: 'horizontal' },
        tr: { type: 'tambah', filled: true, dots: 0 },
        bl: { type: 'elips', filled: true },
        br: { type: 'trapesium', filled: false }
      },
      {
        tl: { type: 'tambah', filled: false, dots: 0 },
        tr: { type: 'trapesium', filled: true },
        bl: { type: 'jajargenjang', filled: true, rotation: 'vertical' },
        br: { type: 'elips', filled: false }
      }
    ],
    options: [
      {
        label: 'A',
        tl: { type: 'trapesium', filled: false },
        tr: { type: 'elips', filled: false },
        bl: { type: 'tambah', filled: true, dots: 0 },
        br: { type: 'jajargenjang', filled: false, rotation: 'vertical' }
      },
      {
        label: 'B',
        tl: { type: 'elips', filled: true },
        tr: { type: 'trapesium', filled: false },
        bl: { type: 'jajargenjang', filled: true, rotation: 'horizontal' },
        br: { type: 'tambah', filled: false, dots: 0 }
      },
      {
        label: 'C',
        tl: { type: 'trapesium', filled: false },
        tr: { type: 'elips', filled: true },
        bl: { type: 'tambah', filled: true, dots: 0 },
        br: { type: 'jajargenjang', filled: false, rotation: 'horizontal' }
      },
      {
        label: 'D',
        tl: { type: 'trapesium', filled: false },
        tr: { type: 'elips', filled: true },
        bl: { type: 'tambah', filled: true, dots: 0 },
        br: { type: 'jajargenjang', filled: false, rotation: 'horizontal' }
      },
      {
        label: 'E',
        tl: { type: 'tambah', filled: false, dots: 0 },
        tr: { type: 'trapesium', filled: true },
        bl: { type: 'elips', filled: true },
        br: { type: 'jajargenjang', filled: false, rotation: 'vertical' }
      }
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
      {
        tl: { type: 'hati', filled: false },
        tr: { type: 'panah', rotation: '0' },
        bl: { type: 'bulan', direction: 'left' },
        br: { type: 'bunga', petals: 8 }
      },
      {
        tl: { type: 'bunga', petals: 7 },
        tr: { type: 'panah', rotation: '45' },
        bl: { type: 'bulan', direction: 'right' },
        br: { type: 'hati', filled: false }
      },
      {
        tl: { type: 'bunga', petals: 6 },
        tr: { type: 'bulan', direction: 'left' },
        bl: { type: 'panah', rotation: '90' },
        br: { type: 'hati', filled: false }
      },
      {
        tl: { type: 'hati', filled: false },
        tr: { type: 'bulan', direction: 'right' },
        bl: { type: 'panah', rotation: '135' },
        br: { type: 'bunga', petals: 5 }
      }
    ],
    options: [
      {
        label: 'A',
        tl: { type: 'hati', filled: false },
        tr: { type: 'bulan', direction: 'left' },
        bl: { type: 'panah', rotation: '180' },
        br: { type: 'bunga', petals: 4 }
      },
      {
        label: 'B',
        tl: { type: 'bunga', petals: 4 },
        tr: { type: 'panah', rotation: '180' },
        bl: { type: 'bulan', direction: 'right' },
        br: { type: 'hati', filled: false }
      },
      {
        label: 'C',
        tl: { type: 'hati', filled: false },
        tr: { type: 'panah', rotation: '135' },
        bl: { type: 'bulan', direction: 'left' },
        br: { type: 'bunga', petals: 4 }
      },
      {
        label: 'D',
        tl: { type: 'hati', filled: false },
        tr: { type: 'panah', rotation: '180' },
        bl: { type: 'bulan', direction: 'right' },
        br: { type: 'bunga', petals: 4 }
      },
      {
        label: 'E',
        tl: { type: 'hati', filled: false },
        tr: { type: 'panah', rotation: '180' },
        bl: { type: 'bulan', direction: 'left' },
        br: { type: 'bunga', petals: 4 }
      }
    ],
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
      {
        tl: { type: 'silinder', filled: false, position: 'vertical' },
        tr: { type: 'kerucut', filled: false },
        bl: { type: 'kubus', filled: true, points: 0 },
        br: { type: 'piramida', filled: false }
      },
      {
        tl: { type: 'piramida', filled: false },
        tr: { type: 'silinder', filled: false, position: 'horizontal' },
        bl: { type: 'kerucut', filled: true },
        br: { type: 'kubus', filled: false, points: 0 }
      },
      {
        tl: { type: 'kubus', filled: false, points: 0 },
        tr: { type: 'piramida', filled: false },
        bl: { type: 'silinder', filled: true, position: 'vertical' },
        br: { type: 'kerucut', filled: false }
      },
      {
        tl: { type: 'kerucut', filled: false },
        tr: { type: 'kubus', filled: false, points: 0 },
        bl: { type: 'piramida', filled: true },
        br: { type: 'silinder', filled: false, position: 'horizontal' }
      }
    ],
    options: [
      {
        label: 'A',
        tl: { type: 'silinder', filled: false, position: 'horizontal' },
        tr: { type: 'kerucut', filled: true },
        bl: { type: 'kubus', filled: false, points: 0 },
        br: { type: 'piramida', filled: false }
      },
      {
        label: 'B',
        tl: { type: 'silinder', filled: false, position: 'vertical' },
        tr: { type: 'kerucut', filled: false },
        bl: { type: 'kubus', filled: true, points: 0 },
        br: { type: 'piramida', filled: false }
      },
      {
        label: 'C',
        tl: { type: 'silinder', filled: false, position: 'vertical' },
        tr: { type: 'kerucut', filled: false },
        bl: { type: 'kubus', filled: false, points: 0 },
        br: { type: 'piramida', filled: false }
      },
      {
        label: 'D',
        tl: { type: 'piramida', filled: false },
        tr: { type: 'silinder', filled: false, position: 'vertical' },
        bl: { type: 'kerucut', filled: true },
        br: { type: 'kubus', filled: false, points: 0 }
      },
      {
        label: 'E',
        tl: { type: 'silinder', filled: true, position: 'vertical' },
        tr: { type: 'kerucut', filled: false },
        bl: { type: 'kubus', filled: false, points: 0 },
        br: { type: 'piramida', filled: false }
      }
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
