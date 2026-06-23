import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';

const SelectCompany = () => {

  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {

    const { data, error } = await supabase
      .from('companies')
      .select('*');

    if (error) {
      console.log(error);
      return;
    }

    setCompanies(data);
  };


  const handleSelect = (company) => {

    localStorage.setItem(
      'createdCompany',
      JSON.stringify(company)
    );

    navigate('/dashboard');

  };


  return (

    <div style={{ padding: '40px' }}>

      <h2>Select Company</h2>


      {companies.length === 0 ? (

        <p>No companies found.</p>

      ) : (

        <ul>

          {companies.map((company) => (

            <li
              key={company.id}
              style={{
                marginBottom: '20px',
                border: '1px solid #ccc',
                padding: '15px'
              }}
            >

              <b>{company.name}</b>

              <br />

              Type : {company.company_type}

              <br />

              Country : {company.country}

              <br /><br />

              <button
                onClick={() => handleSelect(company)}
              >
                Load
              </button>

            </li>

          ))}

        </ul>

      )}


      <button
        onClick={() => navigate('/create-company')}
        style={{ marginTop: '20px' }}
      >
        Create New Company
      </button>


    </div>

  );

};

export default SelectCompany;