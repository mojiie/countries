import { useNavigate } from 'react-router-dom'
import { CountryModel } from '../../_core/model/country-model'
import { updateCountry } from '../../_core/redux/country/country-slice'
import { useAppDispatch } from '../../_core/redux/hooks'

const CountryBox = ({ country }: { country: CountryModel }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const goToCountry = () => {
        dispatch(updateCountry(country))
        navigate('/country')
    }

    return (
        <div className='rounded-lg overflow-hidden shadow-sm bg-white dark:bg-countries-500 hover:shadow-md hover:dark:shadow-xl'>
            <button
                onClick={goToCountry}
                className='block w-full'
            >
                <img
                    src={country.flag}
                    alt={country.name}
                    className='w-full h-48 object-cover'
                />
                <div className='p-8'>
                    <h2 className='text-left text-xl font-bold h-16'>{country.name}</h2>

                    <div className='flex items-center gap-2'>
                        <label className='text-base'>Population:</label>
                        <p className='text-base text-gray-500 dark:text-gray-400'>
                            {country.population.toLocaleString()}
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <label className='text-base'>Region:</label>
                        <p className='text-base text-gray-500 dark:text-gray-400'>{country.region}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <label className='text-base'>Capital:</label>
                        <p className='text-base text-gray-500 dark:text-gray-400'>{country.capital}</p>
                    </div>
                </div>
            </button>
        </div>
    )
}

export default CountryBox
