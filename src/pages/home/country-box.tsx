import { Link } from 'react-router-dom'
import { CountryModel } from '../../_core/model/country-model'

const CountryBox = ({ country }: { country: CountryModel }) => {
    return (
        <Link
            to={''}
            className='block rounded-lg overflow-hidden shadow-sm bg-white dark:bg-countries-500 hover:shadow-md'
        >
            <img
                src={country.flag}
                alt={country.name}
                className='w-full h-48 object-cover'
            />
            <div className='p-8'>
                <h2 className='text-xl font-bold h-16'>{country.name}</h2>

                <div className='flex items-center gap-2'>
                    <label className='text-base'>Population:</label>
                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.population.toLocaleString()}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <label className='text-base'>Region:</label>
                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.region}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <label className='text-base'>Capital:</label>
                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default CountryBox
