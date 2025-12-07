import { Helmet } from 'react-helmet';

const StructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Gary O'Donnell and The Dime Store Heroes",
    "url": "https://garyodandthedsh.com",
    "genre": ["Country", "Rock", "Songwriter", "Country Rock"],
    "description": "Country rock band from Portsmouth",
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
        "https://garyodonnellthedimestoreheroes.bandcamp",
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;