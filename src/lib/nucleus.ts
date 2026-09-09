import { createClient } from "@techsolace-studios/nucleus-sdk";

declare module "@techsolace-studios/nucleus-sdk" {
  interface NucleusModels {
    leadership: {
      name: string;
      role: string;
      image?: string;
      order?: number;
    };
    testimonials: {
      name: string;
      designation?: string;
      quote: string;
      image?: string;
      order?: number;
    };
    "site-settings": {
      brandBio?: string;
      addressLine1?: string;
      addressLine2?: string;
      certificationText?: string;
      officePhone?: string;
      salesPhone?: string;
      email?: string;
      businessHours?: string;
    };
    inquiries: {
      category: string;
      name: string;
      phone: string;
      preferredDate?: string;
      status?: string;
    };
    products: {
      slug: string;
      sku: string;
      name: string;
      category: string;
      subcategory?: string;
      material?: string;
      certification?: string;
      image?: string;
      summary?: string;
      specs?: string[];
      order?: number;
    };
    blogs: {
      title: string;
      slug: string;
      excerpt?: string;
      content: string;
      coverImage?: string;
      author?: string;
      publishedDate: string;
      order?: number;
    };
  }
}

export const nucleus = createClient({
  endpoint: process.env.NUCLEUS_ENDPOINT!,
  apiKey: process.env.NUCLEUS_API_KEY!,
  projectId: "mediortholink",
  environment: "staging",
});

export const nucleusWrite = createClient({
  endpoint: process.env.NUCLEUS_ENDPOINT!,
  apiKey: process.env.NUCLEUS_WRITE_API_KEY!,
  projectId: "mediortholink",
  environment: "staging",
});
