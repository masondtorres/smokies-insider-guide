export type BusinessCategory =
  | "restaurant"
  | "cabin or lodging"
  | "attraction"
  | "shop"
  | "guide"
  | "photographer"
  | "venue"
  | "service business"
  | "other";

export type BusinessListing = {
  id: string;
  name: string;
  category: BusinessCategory;
  location: string | null;
  address: string | null;
  phone: string | null;
  website: string | null;
  hours: string | null;
  description: string | null;
  photos: string[];
  map: string | null;
  coupons: string | null;
  featuredOffer: string | null;
  tags: string[];
  familyFriendlyStatus: "yes" | "no" | "unknown";
  localNotes: string | null;
  priceRange: string | null;
  bookingLink: string | null;
  socialLinks: string[];
  placementStatus: "standard" | "featured" | "sponsored" | "unknown";
  claimStatus: "unclaimed" | "claim requested" | "claimed" | "unknown";
  verifiedAt: string | null;
};

export const businessListingFields = [
  "name",
  "category",
  "location",
  "address",
  "phone",
  "website",
  "hours",
  "description",
  "photos",
  "map",
  "coupons",
  "featured offer",
  "tags",
  "family-friendly status",
  "local notes",
  "price range",
  "booking link",
  "social links",
  "sponsorship or featured status",
  "claim option",
] as const;

// Listings stay empty until a real business is submitted and its details are verified.
export const publishedBusinessListings: BusinessListing[] = [];
