const FLASHPUB_COMMUNITIES = {
  clinic: {
    url: 'https://clinic.flashpub.io',
    name: 'clinic',
    longName: 'Clinic',
    symbol: 'cl',
    id: '9f39c304-9c67-4251-83d9-86f7837c0135',
    color: (a?: number) => `rgba(208, 2, 27, ${a || 1})`,
  },
  ai: {
    url: 'https://ai.flashpub.io',
    name: 'ai',
    longName: 'Artificial Intelligence',
    symbol: 'ai',
    id: 'dcbb3983-4515-4754-b927-0992633de904',
    color: (a?: number) => `rgba(67, 85, 165, ${a || 1})`,
  },
  surgery: {
    url: 'https://surgery.flashpub.io',
    name: 'surgery',
    longName: 'Surgery',
    symbol: 'sx',
    id: '1e8bd2b5-b762-41cd-a79d-d04af88bbbde',
    color: (a?: number) => `rgba(208, 2, 27, ${a || 1})`,
  },
  outbreak: {
    url: 'https://outbreak.flashpub.io',
    name: 'outbreak',
    longName: 'Outbreak',
    symbol: 'dx',
    id: '962d873c-e0b6-4231-9ee2-80c792d36016',
    color: (a?: number) => `rgba(106, 151, 186, ${a || 1})`,
  },
};

const SELECTED_COMMUNITY = Object.values(FLASHPUB_COMMUNITIES).find((c) => {
  if (typeof window !== 'undefined') {
    window.location.pathname.includes(`${c.name}.flashpub.io`);
  }
});

const THIS_PROJECT = {
  COMMUNITY: SELECTED_COMMUNITY || FLASHPUB_COMMUNITIES.outbreak,
  SETUP: {
    PEER_REVIEW_PERIOD: 7,
  },
};

export default THIS_PROJECT;
