// image cover post
import cover_image_1 from "../assets/post/image_post_1.webp";
import cover_image_2 from "../assets/post/image_post_2.webp";
import cover_image_3 from "../assets/post/image_post_3.webp";
import cover_image_4 from "../assets/post/image_post_4.webp";
import cover_image_5 from "../assets/post/image_post_5.webp";
import cover_image_6 from "../assets/post/image_post_6.webp";
import cover_image_8 from "../assets/post/image_post_8.webp";
import cover_image_9 from "../assets/post/image_post_9.webp";
// image post detail
// DinhCongTrang
import image_1 from "../assets/post_detail/DinhCongTrang/1689305196729-M Village(ĐCT2)0267.webp"
import image_2 from "../assets/post_detail/DinhCongTrang/1689309378889-MVLLT_0019.webp"
import image_3 from "../assets/post_detail/DinhCongTrang/1689309378903-MVLLT_0007.webp"
// HaiBaTrung
import image_4 from "../assets/post_detail/HaiBaTrung/1688704384011-facade.webp"
import image_5 from "../assets/post_detail/HaiBaTrung/1689305196703-laundry.webp"
import image_6 from "../assets/post_detail/HaiBaTrung/1689305196717-M Village(ĐCT2)2404.webp"
// LeThanhTong
import image_7 from "../assets/post_detail/LeThanhTong/1688046869565-1.webp"
import image_8 from "../assets/post_detail/LeThanhTong/1688704383994-MVillage(PNL)4713.webp"
import image_9 from "../assets/post_detail/LeThanhTong/1688704383999-laundry.webp"
// NguyenVanThu
import image_10 from "../assets/post_detail/NguyenVanThu/1688021385992-M-Village(d4)5432.webp"
import image_11 from "../assets/post_detail/NguyenVanThu/1688046815000-thaodiencover.webp"
import image_12 from "../assets/post_detail/NguyenVanThu/1688046815018-101.webp"
// PhamNguLao
import image_13 from "../assets/post_detail/PhamNguLao/1687968443558-MVillage(NVT)2623.webp"
import image_14 from "../assets/post_detail/PhamNguLao/1688021385970-Copy of M-Village(1)1891_1.webp"
import image_15 from "../assets/post_detail/PhamNguLao/1688021385981-M-Village(1)1078_1.webp"

// ThaoDien
import image_16 from "../assets/post_detail/ThaoDien/1687962267013-MVillage(TTD2)0007.webp"
import image_17 from "../assets/post_detail/ThaoDien/1687968443536-MVillage(NVT)0552.webp"
import image_18 from "../assets/post_detail/ThaoDien/1687968443546-MVillage(NVT)0007.webp"
// TonThatDam
import image_19 from "../assets/post_detail/TonThatDam/1687961823271-hoahbt.webp"
import image_20 from "../assets/post_detail/TonThatDam/1687962266975-MVillage(TTD2)1593.webp"
import image_21 from "../assets/post_detail/TonThatDam/1687962266990-MV Tôn Thất Đạm 1.webp"
// VoThiSau
import image_22 from "../assets/post_detail/VoThiSau/1687947648324-1.webp"
import image_23 from "../assets/post_detail/VoThiSau/1687950633117-Facdehbt.webp"
import image_24 from "../assets/post_detail/VoThiSau/1687961823261-2.webp"

const PostData = [
  {
    id: 1,
    district: 'Quận 3' ,
    cover_image: cover_image_1,
    images:{image01: image_4,image02:image_5, image03:image_6},
    title: "SIGNATURE BY M VILLAGE",
    content:
      "The art of Indochina wonders. A meticulous hospitality experience inside the contemporary Indochina architecture. A great location to enjoy the stunning view of the most famous landmarks in Sai Gon’s center.",
    subtitle: "HAI BÀ TRƯNG",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 2,
    district: 'Quận 1' ,
    cover_image: cover_image_2,
    images:{image01:image_7,image02:image_8,image03:image_9},
    title: "SIGNATURE BY M VILLAGE",
    content:
      "Where the multi-culture meets. A modern space designed in a minimalist style, blending harmoniously with the nature amidst for Work-cation - Staycation. A place with a multicultural experience in the heart of “little Japan”.",
    subtitle: "LÊ THÁNH TÔNG",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 3,
    district: 'Quận 3' ,
    cover_image: cover_image_3,
    images:{image01:image_13,image02:image_14,image03:image_15},
    title: "M VILLAGE",
    content:
      "Located in the famous Western Quarter in the heart of Saigon, M Village Pham Ngu Lao is the combination of the classic beauty and the modernity, with the dome architecture inspired by old buildings in Saigon and the modern youthful hot colors. This is an ideal place to stay since its prime central location and the variety of convenient spaces right in the building such as the rooftop green garden, BBQ area or laundry room.",
    subtitle: "PHẠM NGŨ LÃO",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 4,
    district: 'Quận 2' ,
    cover_image: cover_image_4,
    images:{image01:image_10,image02:image_11,image03:image_12},
    title: "M VILLAGE",
    content:
      "Inspired by the Brutalism style through cement details in the design, the building gives you an extremely new and modern staycation. Located at a convenient place in a peaceful street in the center of HCMC, so it is easy to move to Notre Dame Cathedral or the Turtle Lake. You can enjoy a cup of coffee every morning at Every Half Coffee inside the building, or relax in your cozy, and light-filled room.",
    subtitle: "NGUYỄN VĂN THỦ",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 5,
    district: 'Q. Bình Thạnh' ,
    cover_image: cover_image_5,
    images:{image01:image_1,image02:image_2, image03:image_3},
    title: "M VILLAGE",
    content:
      "Located in a prime location in the center of District 1, it takes you only 5 minutes to go to Tan Dinh market, or just 10 minutes by motorbike to Turtle Lake. The building will impress you by the contrast between its youthful appearance and the elegant interior design of the rooms. This is an inspiring space for souls looking for unexpected adventures.",
    subtitle: "ĐINH CÔNG TRÁNG",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 6,
    cover_image: cover_image_6,
    district: 'Q. Bình Thạnh' ,
    images:{image01: image_22,image02:image_23,image03:image_24},
    title: "M VILLAGE",
    content:
      "M Village the Boutique Vo Thi Sau is located in a wide, civilized, secure and clean street, next to Disctrict 1 center. The building has many spacious and comfortable common spaces to bring tranquility but no less dynamism with Every Half Coffee Roastery cafe inside. We are friendly to nature and choose a modern lifestyle for the sake of the environment, so in every corner of the M Village The Boutique Vo Thi Sau you can see green trees and constant freshness inside and out.",
    subtitle: "VÕ THỊ SÁU",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 7,
    district: 'Q. Tân Bình' ,
    cover_image: cover_image_8,
    images:{image01:image_16,image02:image_17,image03:image_18},
    title: "M VILLAGE",
    content:
      "Located in a quiet street with a spacious old villa campus. The rooms are designed in the minimalist style typical of M Village, airy space and large windows. Each room has its own kitchen and comfort amenities giving you an inspiring and relaxing living space.",
    subtitle: "THẢO ĐIỀN",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
  {
    id: 8,
    cover_image: cover_image_9,
    images:{image01:image_19,image02:image_20,image03:image_21},
    district: 'Q. Phú Nhuận' ,
    content:
      "Located in a quiet street with a spacious old villa campus. The rooms are designed in the minimalist style typical of M Village, airy space and large windows. Each room has its own kitchen and comfort amenities giving you an inspiring and relaxing living space.",
    title: "SIGNATURE BY M VILLAGE",
    subtitle: "TÔN THẤT ĐÀM",
    address: "24 Le Thanh Ton, Ben Nghe Ward, District 1, HCMC",
    price: "from 1,800,000 - 3,500,000 VND ",
  },
];

export default PostData;
