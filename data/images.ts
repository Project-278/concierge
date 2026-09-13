export type EditorialImage = {
  url: string;
  remoteUrl: string;
  alt: string;
  credit: string;
  source: string;
  category: string;
};

// Licensed prototype photography. Local copies make the preview independent of third-party CDNs.
// Sector photographs illustrate capabilities; they do not represent Concierge-owned assets or personnel.
const pexels = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
export const images = {
  accra: {
    url: "/images/accra.jpg",
    remoteUrl:
      "https://images.unsplash.com/photo-1599393921693-857c47cf53c8?auto=format&fit=crop&w=2000&q=85",
    alt: "An elevated view across the Accra skyline in Ghana",
    credit: "Unsplash",
    source: "https://unsplash.com/photos/nw3yDem7SdM",
    category: "Ghana",
  },
  accraAlt: {
    url: "/images/accra-alt.jpg",
    remoteUrl:
      "https://images.unsplash.com/photo-1594159667349-2b4b2b911824?auto=format&fit=crop&w=2000&q=85",
    alt: "Aerial view of Accra beneath a dramatic evening sky",
    credit: "Etornam Ahiator / Unsplash",
    source: "https://unsplash.com/photos/QRhsaFOAfSo",
    category: "Ghana",
  },
  consult: {
    url: "/images/consult.jpg",
    remoteUrl: pexels("1181624"),
    alt: "Professional women considering ideas together in a contemporary meeting room",
    credit: "Christina Morillo / Pexels",
    source: "https://www.pexels.com/photo/1181624/",
    category: "Advisory",
  },
  properties: {
    url: "/images/properties.jpg",
    remoteUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    alt: "Warm materials and considered details in a contemporary interior",
    credit: "Unsplash",
    source: "https://unsplash.com",
    category: "Property",
  },
  energy: {
    url: "/images/energy.jpg",
    remoteUrl: pexels("356036"),
    alt: "Solar panels collecting energy beneath an open sky",
    credit: "Pixabay / Pexels",
    source: "https://www.pexels.com/photo/356036/",
    category: "Energy",
  },
  logistics: {
    url: "/images/logistics.jpg",
    remoteUrl: pexels("1554646"),
    alt: "Shipping containers and port infrastructure connecting international trade",
    credit: "Pexels",
    source: "https://www.pexels.com/photo/1554646/",
    category: "Logistics",
  },
  automobile: {
    url: "/images/automobile.jpg",
    remoteUrl: pexels("170811"),
    alt: "A contemporary blue sedan parked beside a tree-lined road",
    credit: "Pexels",
    source: "https://www.pexels.com/photo/170811/",
    category: "Mobility",
  },
  pr: {
    url: "/images/pr.jpg",
    remoteUrl: pexels("2774556"),
    alt: "An audience listening to a speaker at a professional event",
    credit: "Pexels",
    source: "https://www.pexels.com/photo/2774556/",
    category: "Communications",
  },
  foundation: {
    url: "/images/foundation.jpg",
    remoteUrl: pexels("14554004"),
    alt: "Children participating in a lesson in a warm, sunlit classroom",
    credit: "Kwaku Griffin / Pexels",
    source: "https://www.pexels.com/photo/14554004/",
    category: "Education and opportunity",
  },
  team: {
    url: "/images/team.jpg",
    remoteUrl: pexels("1181611"),
    alt: "A diverse group of professional women collaborating around a table",
    credit: "Christina Morillo / Pexels",
    source: "https://www.pexels.com/photo/1181611/",
    category: "Partnership",
  },
} satisfies Record<string, EditorialImage>;
