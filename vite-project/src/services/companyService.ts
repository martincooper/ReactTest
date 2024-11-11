import { Company } from '../types';

const API_URL = 'https://fake-json-api.mock.beeceptor.com/companies';

export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Company[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};