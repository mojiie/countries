import Layout from '../../_core/components/layout/layout'
import CountryBox from './country-box'
import API_SERVICE from '../../_core/services/api-service'
import { IoMdSearch } from 'react-icons/io'
import { CountryModel } from '../../_core/model/country-model'
import { useEffect, useState } from 'react'

const HomePage = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterRegion, setFilterRegion] = useState<string>('')
    const [countriesList, setCountriesList] = useState<CountryModel[]>([])

    const getCountries = async () => {
        try {
            const response = await API_SERVICE.get('all')
            const data = await response.data
            setCountriesList(data)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <Layout>
            <div className='flex flex-wrap items-center justify-between mt-8 mb-12 gap-4'>
                <div className='bg-white dark:bg-countries-500 shadow-md rounded-lg h-12 px-4 flex items-center gap-2'>
                    <IoMdSearch className='text-lg' />
                    <input
                        value={searchValue}
                        placeholder='Search for a country ...'
                        className='bg-inherit text-inherit outline-none min-w-72'
                        onChange={(event) => setSearchValue(event?.target.value)}
                    />
                </div>

                <select
                    value={filterRegion}
                    onChange={(e) => setFilterRegion(e.target.value)}
                    className='bg-white dark:bg-countries-500 shadow-md rounded-lg h-12 px-4 flex items-center gap-2'
                >
                    <option value={''}>Filter by Region</option>
                    <option value={'Africa'}>Africa</option>
                    <option value={'Americas'}>Americas</option>
                    <option value={'Asia'}>Asia</option>
                    <option value={'Europe'}>Europe</option>
                    <option value={'Oceania'}>Oceania</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
                {countriesList
                    .filter((item) => (filterRegion === '' ? item : item.region === filterRegion))
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((country, index) => (
                        <div key={`key-of-country-${index}`}>
                            <CountryBox country={country} />
                        </div>
                    ))}
            </div>
        </Layout>
    )
}

export default HomePage
