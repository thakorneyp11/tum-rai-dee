export interface Activity {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export async function getActivities(): Promise<Activity[]> {
  // This is a mock function. In a real application, you would fetch data from an API.
  return [
    {
      id: 1,
      title: 'Visit Grand Palace #1',
      description: 'Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand. Explore the beautiful Grand Palace in Bangkok. Immerse yourself in Thai culture and history with this iconic landmark. The Grand Palace has been the official residence of the Kings of Siam (and later Thailand) since 1782. Marvel at the intricate architecture, golden spires, and elaborate murals that adorn this magnificent complex. Don\'t miss the famous Emerald Buddha, considered the most important Buddha image in Thailand.',
      // images: ['/images/grand-palace-1.jpg', '/images/grand-palace-2.jpg', '/images/grand-palace-3.jpg'],
      images: [
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        // 'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        // 'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
        // 'https://static.wixstatic.com/media/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2cc94a_f41bf7cbf0d34a2faaf7f0e27aabb3b3~mv2.jpg',
        // 'https://cdn.royalgrandpalace.th/images/history/sec1_mb.jpg',
        // 'https://cdn.royalgrandpalace.th/images/visit/banner_s.jpg',
      ]
    },
    {
      id: 2,
      title: 'Visit Grand Palace #2',
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
      ]
    },
    {
      id: 3,
      title: 'Visit Grand Palace #3',
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
      ]
    },
    {
      id: 4,
      title: 'Visit Grand Palace #4',
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
      ]
    },
    // Add more activities here
  ];
}
