import { createClient } from "@techsolace-studios/nucleus-sdk";
import type { NucleusClient, NucleusConfig } from "@techsolace-studios/nucleus-sdk";

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

// `createClient` validates its config synchronously and throws if the
// endpoint/API key env vars aren't set. Every call site already falls back
// to static content via `.catch(...)`, so rather than letting a missing
// env var crash the whole build (every page that imports Footer/Navbar),
// swap in a stub client whose methods reject — the existing fallbacks
// then kick in as designed. Real credentials still get a real client.
function safeCreateClient(config: NucleusConfig): NucleusClient {
  try {
    return createClient(config);
  } catch (error) {
    console.error(
      `[nucleus] client not configured, falling back to static content: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
    const reject = () => Promise.reject(error);
    return new Proxy({} as NucleusClient, { get: () => reject });
  }
}

export const nucleus = safeCreateClient({
  endpoint: process.env.NUCLEUS_ENDPOINT!,
  apiKey: process.env.NUCLEUS_API_KEY!,
  projectId: "mediortholink",
  environment: "staging",
});

export const nucleusWrite = safeCreateClient({
  endpoint: process.env.NUCLEUS_ENDPOINT!,
  apiKey: process.env.NUCLEUS_WRITE_API_KEY!,
  projectId: "mediortholink",
  environment: "staging",
});
