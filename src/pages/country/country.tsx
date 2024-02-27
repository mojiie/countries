/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom'
import Layout from '../../_core/components/layout/layout'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../_core/redux/hooks'
import { updateCountry } from '../../_core/redux/country/country-slice'

const CountryPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const country = useAppSelector((s) => s.country.value)

    useEffect(() => {
        if (country === undefined) navigate('/')
    }, [country])

    const back = () => {
        dispatch(updateCountry(undefined))
        navigate('/')
    }

    return (
        <Layout>
            <button
                onClick={back}
                className='button-style w-32 !justify-center'
            >
                Back
            </button>

            {country && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mg:gap-32 mt-12'>
                    <div className='col-span-1 h-48 md:h-80 lg:h-96 '>
                        <img
                            src={country.flag}
                            alt={country.name}
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div>
                        <h2 className='text-left text-xl font-bold h-16'>{country.name}</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex  gap-2'>
                                    <label className='text-base'>Native&nbsp;Name:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.nativeName}</p>
                                </div>

                                <div className='flex  gap-2'>
                                    <label className='text-base'>Population:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>
                                        {country.population.toLocaleString()}
                                    </p>
                                </div>

                                <div className='flex  gap-2'>
                                    <label className='text-base'>Region:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.region}</p>
                                </div>

                                <div className='flex  gap-2'>
                                    <label className='text-base'>Sub&nbsp;Region:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.subregion}</p>
                                </div>

                                <div className='flex  gap-2'>
                                    <label className='text-base'>Capital:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>{country.capital}</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex  gap-2'>
                                    <label className='text-base'>Top&nbsp;Level&nbsp;Domain:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>
                                        {country.topLevelDomain}
                                    </p>
                                </div>

                                <div className='flex  gap-2'>
                                    <label className='text-base'>Currencies:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>
                                        {country.currencies.map((item) => `${item.name}, `)}
                                    </p>
                                </div>

                                <div className='flex  gap-2'>
                                    <label className='text-base'>languages:</label>
                                    <p className='text-base text-gray-500 dark:text-gray-400'>
                                        {country.languages.map((item) => `${item.name}, `)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {country.borders && (
                            <div className='lg:flex items-center justify-start gap-4 mt-12'>
                                <p>Border&nbsp;Countries:</p>

                                <div className='flex flex-wrap items-center justify-center gap-4 my-4'>
                                    {country?.borders.map((item, index) => (
                                        <span
                                            key={`border-key-${index}`}
                                            className='bg-white dark:bg-countries-500 shadow-md gap-2 text-center cursor-default w-fit px-4 h-8 '
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default CountryPage
