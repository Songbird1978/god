import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  type = "website",
  image,
  url 
}) => {
  // Default site info
  const siteName = "Gary O'Donnell and The Dime Store Heroes";
  const defaultDescription = "Country rock band from Portsmouth";
  const siteUrl = "https://garyodandthedsh.com";
  
  // Use provided values or defaults
  const fullTitle = title ? `${title} - ${siteName}` : siteName;
  const metaDescription = description || defaultDescription;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  // Structured data for MusicGroup (shown on all pages)
  const musicGroupSchema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": siteName,
    "url": siteUrl,
    "genre": ["Country", "Rock", "Songwriter", "Country Rock"],
    "description": defaultDescription,
    "foundingDate": "2020",
    "member": [
      {
        "@type": "Person",
        "name": "Gary O'Donnell"
      },
      {
        "@type": "Person",
        "name": "Gary Shaw"
      },
      {
        "@type": "Person",
        "name": "Bernie Fox"
      },
      {
        "@type": "Person",
        "name": "Matt Latter"
      },
      {
        "@type": "Person",
        "name": "Terry Wyatt"
      },
      {
        "@type": "Person",
        "name": "Gavin Driver"
      },
    ],
    "sameAs": [
      "https://garyodonnellthedimestoreheroes.bandcamp.com",
      "https://garyodonnellthedimestoreheroes.bandcamp.com/album/three-ways-from-nowhere",
      "https://linktr.ee/Gary_O_Donnell?utm_source=linktree_profile_share&ltsid=26eabaae-53fa-4ae5-8c8e-4bb11fc92387",
      "https://open.spotify.com/album/71TDQvoMMVDtvQYrMDhn8J",
      "https://open.spotify.com/artist/1XJ41uLGgFygsjP44hknkt",
      "https://www.facebook.com/WhosWhoUK/?locale=en_GB",
      "https://www.instagram.com/gary_odanddsh?igsh=a2ZxZ3BveHpkZDk=",
      "https://youtu.be/xnxFQ609t8Q?si=VMXlJEXYg8Z7lVVe",
      "https://www.expressfm.com/events/event/gary-odonnell-and-the-dime-store-heroes/",
      "https://www.wedgewood-rooms.co.uk/events/2026-03-05-gary-odonnell-and-the-dime-store-heroes-the-wedgewood-rooms",
      "https://www.facebook.com/TheWedgewoodRooms/posts/just-confirmed-gary-odonnell-the-dime-store-heroes-headline-the-edge-on-thursday/1246012770898316/",
      "https://www.studioone28.com",
    ],
    "studio": [
      "https://www.studioone28.com",
      "https://www.joncallender.com",
    ]
  };

  // Blog post schema (if type is article)
  const articleSchema = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": metaDescription,
    "url": pageUrl,
    "author": {
      "@type": "MusicGroup",
      "name": siteName
    }
  } : null;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      {image && <meta property="twitter:image" content={image} />}
      
      {/* Structured Data - Always include MusicGroup */}
      <script type="application/ld+json">
        {JSON.stringify(musicGroupSchema)}
      </script>
      
      {/* Structured Data - Article schema for blog posts */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;