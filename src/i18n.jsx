import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      supremeShop: "SupremeAlışveriş",
      search: "Ara",
      home: "Anasayfa",
      about: "Hakkımızda",
      campaigns: "Kampanyalar!",
      campaign: "Kampanya",
      //  sepet
      cart: "SEPET",
      product: "Ürün",
      total: "TOPLAM",
      price: "Fiyat",
      amount: "Miktar",
      buy: "Satın Al",
      keepShopping: "Alışverişe Devam Et!",
      //basketItem
      remove: "Kaldır",
      increase: "Ürün miktarı arttırıldı.",
      decrease: "Ürün miktarı azaltıldı.",
      delete: "Ürün silindi.",
      //Coppyright
      copyright: "Telif hakları SanDizayn'a aittir",
      //Footer
      general: "Genel",
      services: "Hizmetler",
      marketing: "Market",
      brandings: "Markalar",
      offline: "Mağazalar",
      ourStory: "Hikayemiz",
      benefits: "Faydalar",
      team: "Takımımız",
      careers: "Kariyer",
      faqs: "SSS",
      contact: "İletişim",
      security: "Güvenlik",
      guarantee: "Garanti",
      social: "Sosyal Medya",
      //Modal
      productAdded: "Ürün sepete eklendi.",
      addToBasket: "Sepete ekle",
      clickForMore: "Detaylar için Tıkla",
      choose: "Favorini Seç !",
      quality: "En İyi Kalite",
      bestPrice: "En İyi Fiyata",
      follow: "Fiyatı Takip Et",
      //productCard
      forMore: "Daha Fazlası",
      //productContainer
      headerProduct: "ÜRÜNLER",
      //json verileri
      products: {
        1: {
          name: "Ruj",
          description: "Çeşitli tonlarda mat ruj."
        },
        2: {
          name: "Fondöten",
          description: "Kusursuz bir cilt tonu için likit fondöten."
        },
        3: {
          name: "Maskara",
          description: "Dolgun kirpikler için Suya dayanıklı maskara."
        },
        4: {
          name: "Far Paleti",
          description: "Çeşitli görünümler için far renkleri paleti."
        },
        5: {
          name: "Kapatıcı",
          description: "Kusurları ve göz altı halkalarını gizlemek için kapatıcı."
        },
        6: {
          name: "Allık",
          description: "Doğal bir renk veren pudra allık."
        }
      },
    },
  },

  en: {
    translation: {
      supremeShop: "SupremeShop",
      search: "Search",
      home: "Home",
      about: "About",
      campaigns: "Campaigns!",
      campaign: "Campaign",
      //  sepet
      cart: "CART",
      product: "Product",
      price: "Price",
      amount: "Amount",
      total: "TOTAL",
      buy: "BUY",
      keepShopping: "KEEP SHOPPING!",
      //basketItem
      remove: "Remove",
      increase: "Amount was increased.",
      decrease: "Amount was decreased.",
      delete: "Product was deleted.",
      //Coppyright
      copyright: "Copyright 2023 By San Design",
      //Footer
      general: "General",
      services: "Services",
      marketing: "Marketing",
      brandings: "Brandings",
      offline: "Offline",
      ourStory: "Our Story",
      benefits: "Benefits",
      team: "Team",
      careers: "Careers",
      faqs: "FAQS",
      contact: "Contact",
      security: "Security",
      guarantee: "Guarantee",
      social: "Social",
      //Modal
      productAdded: "Product was added.",
      addToBasket: "Add to Basket",
      clickForMore: "Click, For More",
      choose: "Choose your favorite one !",
      quality: "with Best Quality",
      bestPrice: "with Best Price",
      follow: "Follow the Price",
      //productCard
      forMore: "For More",
      //productContainer
      headerProduct: "PRODUCT",
      //json verilerim
      products: {
        1: {
          name: "Lipstick",
          description: "Long-lasting matte lipstick in various shades."
        },
        2: {
          name: "Foundation",
          description: "Liquid foundation for a flawless complexion."
        },
        3: {
          name: "Mascara",
          description: "Waterproof mascara for voluminous lashes."
        },
        4: {
          name: "Palette",
          description: "Palette with a range of eyeshadow colors for versatile looks."
        },
        5: {
          name: "Concealer",
          description: "Concealer to hide imperfections and dark circles."
        },
        6: {
          name: "Blush",
          description: "Powder blush for a natural flush of color."
        }
      },
    },
  },
}

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});


export default i18n