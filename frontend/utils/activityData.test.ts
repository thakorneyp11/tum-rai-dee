import { getActivities } from './activityData';

describe('getActivities', () => {
  it('returns an array of activities', async () => {
    const activities = await getActivities();
    expect(Array.isArray(activities)).toBe(true);
    expect(activities.length).toBeGreaterThan(0);
    expect(activities[0]).toHaveProperty('id');
    expect(activities[0]).toHaveProperty('title');
    expect(activities[0]).toHaveProperty('description');
    expect(activities[0]).toHaveProperty('image');
  });
});
