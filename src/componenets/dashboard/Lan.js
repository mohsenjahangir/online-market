import React from 'react'
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import '../dashboard/lan.css'
import { BsGlobe2 } from "react-icons/bs";

const Get_Lan = gql`
query GetLan{
    countries{
        native,
        emoji
      }
  }
`;

export const Lan = () => {
    const { loading, error, data, refetch, networkStatus } = useQuery(Get_Lan, {
        notifyOnNetworkStatusChange: true,
        pollInterval: 78000,
    });
    if (networkStatus === NetworkStatus.refetch) return ('refretching');
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <div className='lan'>
                        <select class="form-select w-25" aria-label="Default select example">
                <option selected >En</option>
                {data.countries.map(item =>
                <option className=' bg-secondary bg-opacity-10 rounded-3' key={item.id} >{item.emoji}{item.native}</option>
                )}
            </select>
        </div>

        
    )
}
