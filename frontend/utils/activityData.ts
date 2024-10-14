export interface Activity {
  id: number;
  title: string;
  description: string;
  images: string[];
  location: string;
  duration: string;
  bestTimeToVisit: string;
  priceRange: string;
  detailedDescription: string;
  tips: string[];
}

export async function getActivities(): Promise<Activity[]> {
  // This is a mock function. In a real application, you would fetch data from an API.
  return [
    {
      id: 1,
      title: 'Activity #1',
      description: 'Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand. Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      // images: ['/images/grand-palace-1.jpg', '/images/grand-palace-2.jpg', '/images/grand-palace-3.jpg'],
      images: [
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg'
      ],
      location: 'Bangkok, Thailand',
      duration: '2-3 hours',
      bestTimeToVisit: 'Morning',
      priceRange: 'Free',
      detailedDescription: 'The Grand Palace is a must-visit attraction in Bangkok, Thailand. It has been the official residence of the Kings of Siam (and later Thailand) since 1782. Explore the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      tips: [
        'Wear modest clothing to respect the local culture.',
        'Bring a bottle of water to stay hydrated.',
        'Use the provided audio guide to learn more about the history and culture of the Grand Palace.',
      ],
    },
    {
      id: 2,
      title: 'Activity #2',
      description: 'Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand. Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      // images: ['/images/grand-palace-1.jpg', '/images/grand-palace-2.jpg', '/images/grand-palace-3.jpg'],
      images: [
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
      ],
      location: 'Bangkok, Thailand',
      duration: '2-3 hours',
      bestTimeToVisit: 'Morning',
      priceRange: 'Free',
      detailedDescription: 'The Grand Palace is a must-visit attraction in Bangkok, Thailand. It has been the official residence of the Kings of Siam (and later Thailand) since 1782. Explore the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      tips: [
        'Wear modest clothing to respect the local culture.',
        'Bring a bottle of water to stay hydrated.',
        'Use the provided audio guide to learn more about the history and culture of the Grand Palace.',
      ],
    },
    {
      id: 3,
      title: 'Activity #3',
      description: 'Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand. Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      // images: ['/images/grand-palace-1.jpg', '/images/grand-palace-2.jpg', '/images/grand-palace-3.jpg'],
      images: [
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
      ],
      location: 'Bangkok, Thailand',
      duration: '2-3 hours',
      bestTimeToVisit: 'Morning',
      priceRange: 'Free',
      detailedDescription: 'The Grand Palace is a must-visit attraction in Bangkok, Thailand. It has been the official residence of the Kings of Siam (and later Thailand) since 1782. Explore the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      tips: [
        'Wear modest clothing to respect the local culture.',
        'Bring a bottle of water to stay hydrated.',
        'Use the provided audio guide to learn more about the history and culture of the Grand Palace.',
      ],
    },
    {
      id: 4,
      title: 'Activity #4',
      description: 'Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand. Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      // images: ['/images/grand-palace-1.jpg', '/images/grand-palace-2.jpg', '/images/grand-palace-3.jpg'],
      images: [
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
      ],
      location: 'Bangkok, Thailand',
      duration: '2-3 hours',
      bestTimeToVisit: 'Morning',
      priceRange: 'Free',
      detailedDescription: 'The Grand Palace is a must-visit attraction in Bangkok, Thailand. It has been the official residence of the Kings of Siam (and later Thailand) since 1782. Explore the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      tips: [
        'Wear modest clothing to respect the local culture.',
        'Bring a bottle of water to stay hydrated.',
        'Use the provided audio guide to learn more about the history and culture of the Grand Palace.',
      ],
    },
    // Add more activities here
  ];
}