import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Metha Anastasya",
  initials: "MA",
  url: "https://mth0zz.vercel.app",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description: "Undergraduate Student at Telkom University Jakarta",
  summary:
    " Information Technology student at Telkom University with a strong academic foundation in technology and a keen interest in Artificial Intelligence. Experienced in conducting academic projects and problem-solving. ",
  cvurl:
    "https://drive.google.com/drive/folders/13XIAQgtlvOJYdT-iQXWcqb5m674Y4z81?usp=drive_link",
  cvdownload: <Icons.download />,
  avatarUrl:
    "https://i.pinimg.com/736x/89/9d/f5/899df51dc00d405b8f2f36b39c4817a8.jpg",
  skills: [
    "GO",
    "Python",
    "C++",
  ],
  skills2: [
    "Figma",

  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mthanstsy03@gmail.com",
    tel: "+628189748968",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mth0zz",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/methanstya",
        icon: Icons.linkedin,

        navbar: true,
      },
    
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/xxntsyazz",
        icon: Icons.instagram,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:methanstsy03@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "International Conference on Information and Communication Technology (ICoICT)",
      href: "/",
      badges: [],
      location: "On-site",
      title: "Volunteer Editorial Team",
      logoUrl: "/ICOICT.png",
      start: "Jul 2025",
      end: "Jul 2025",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Assist the publication team in checking and adjusting 13 paper formatting according to the specified IEEE template.
          </li>
        </ul>
      ),
    },
    {
      company: "Telkom University Jakarta",
      href: "/",
      badges: [],
      location: "On-site",
      title: "Workshop Speaker",
      logoUrl: "",
      start: "May 2025",
      end: "May 2025",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; As a speaker in SMPN 67 Jakarta summit on the topic "Mengenal Chatgpt Dan Kecerdasan Buatan: Dari Menjawab Pertanyaan Hingga Menjaga Privasi Digital" where I share insight and experience on how to guard digital privacy on Chatgpt.
          </li>
        </ul>
      ),
    },
    {
      company: "Dukungan Teknologi Informasi Telkom University Jakarta",
      href: "/",
      badges: [],
      location: "Remote",
      title: "Freelance Blogwalking",
      logoUrl: "",
      start: "Aug 2024",
      end: "Aug 2024",
      description: (
        <ul className="ml-1">
          <li>
            &#x2022; Spread backlinks by commenting on 100 website articles using anchor text on the Indian 
            country domain.
          </li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: 'Telkom University Jakarta',
      href: "/",
      degree: "Bachelor's Degree of Information Technology",
      logoUrl: "/Logo_Telkom_University_potrait.png",
      start: "2023",
      end: "Present",
    },
  
  ],
  categories: ["Aplication", "Mobile", "ML"],
  projects: [
    {
      title: "Augmented Reality Phyton (ARPY)",
      href: "",
      dates: "",
      active: true,
      description:
        "Augmented Reality Mobile Apllication For Educational Python Programming build Using Flutter and Unity Engine",
      technologies: ["Unity", "Dart", "Flutter"],
      category: "Mobile",
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Article",
          href: "",
          icon: <Icons.paper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dnzvjp02d/image/upload/fl_preserve_transparency/v1754451459/ee1353f7608f1a88a3ffedf165ebd8c1_1_xcrdb9.jpg",
      video: "",
      design: "",
    },
    {
      title: "Southeast Asian Air Quality Qualification using Naive Bayes and KNN",
      href: "",
      dates: "",
      active: true,
      description:
        "Artificial Intelligence for Air Quality Qualification using Naive Bayes and KNN Algoritm resulting more than 90% Accuracy in Training Models.",
      technologies: ["Python", "Google Collab"],
      category: "ML",
      links: [
        {
          type: "Source",
          href: "https://colab.research.google.com/drive/1YXTp6x_nUsjRnz72Mgzia7x37cCKiEOh?usp=sharing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Article",
          href: "",
          icon: <Icons.paper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dnzvjp02d/image/upload/fl_preserve_transparency/v1754452038/image_2025-08-06_104125315_ujveac.jpg",
      video: "",
      design: "",
    },
    {
      title: "Goods Inventory App",
      href: "https://github.com/mth0zz/Aplikasi-Inventori-Barang-Logistik",
      dates: "",
      active: true,
      description:
        "Application used by the Sembako Institute. The data processed is the basic food data that enters the warehouse and also the goods that come out of the warehouse.",
      technologies: ["C++"],
      category: "Aplication",
      links: [
        {
          type: "Source",
          href: "https://github.com/mth0zz/Aplikasi-Inventori-Barang-Logistik",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dnzvjp02d/image/upload/fl_preserve_transparency/v1754452135/6e48a5c5c4e51bd9fb3333c527d97f31_m0zwyj.jpg",
      video: "",
      design: "",
    },
  ],
  hackathons: [],
} as const;
