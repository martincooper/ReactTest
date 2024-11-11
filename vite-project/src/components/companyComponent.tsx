// companyComponent.tsx
import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../services/companyService';
import { Company } from '../types';
import '../companyComponent.css'; // Import the CSS file

const CompanyComponent: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const data = await fetchCompanies();
        setCompanies(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    getCompanies();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="company-container">
      <h1>Companies</h1>
      <ul className="company-list">
        {companies.map((company) => (
          <li key={company.id} className="company-item">
            {company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyComponent;