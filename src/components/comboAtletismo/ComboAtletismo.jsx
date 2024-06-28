'use client'
import React from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import CheckIcon from '../icons/CheckIcon'
import { useState } from 'react'
import './comboAtletismo.css'
import clsx from 'clsx'

const options = [
    {id: 1, name: 'Jumbo (60 en adelante) Varonil'},
    {id: 2, name: 'Master (40-49 años) Varonil'},
    {id: 3, name: 'Super-Master (50-59 años) Femenil'},
    {id: 4, name: 'Super-Master (50-59 años) Varonil'},
    {id: 5, name: 'Master (40-49 años) Femenil'},
    {id: 6, name: 'Master (40-49 años) Varonil'},
    {id: 7, name: 'Veterano (30-39 años) Femenil'},
    {id: 8, name: 'Veterano (30-39 años) Varonil'},
    {id: 9, name: 'Libre (hasta 29 años) Femenil'},
    {id: 10, name: 'Libre (hasta 29 años) Varonil'},
    {id: 11, name: 'Jumbo (60 en adelante) Femenil'},
    {id: 12, name: 'Super-Master (50-59 años) Femenil'},
    {id: 13, name: 'Jumbo (60 en adelante) Varonil'},
    {id: 14, name: 'Super-Master (50-59 años) Varonil'},
    {id: 15, name: 'Master (40-49 años) Varonil'},
    {id: 16, name: 'Veterano (30-39 años) Varonil'},
    {id: 17, name: 'Deportes de Exhibicion'},
]

export const ComboAtletismo = ({ children }) => {

    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(options[1])

    const filteredOptions = 
        query === ''
            ? options
            : options.filter((option) => {
                return option.name.toLowerCase().includes(query.toLowerCase())
            })

  return (
	<div className='combobox-container'>
        <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
            <div className='combobox-input'>
                <ComboboxInput
                    className={clsx('input-combo')}
                    displayValue={(option) => option?.name}
                    onChange={(event) => setQuery(event.target.value)}
                />

                <ComboboxButton className="button-combo">
                    <ChevronDownIcon className="icon-down" />
                </ComboboxButton>
            </div>

            <ComboboxOptions
                anchor="bottom"
                transition
                className={clsx('options-combo')}
            >
                {filteredOptions.map((option) => (
                    <ComboboxOption
                        key={option.id}
                        value={option}
                        className="item-combo"
                    >
                        <CheckIcon className="icon-check" />
                        <div className="name-item-combo">
                            {option.name}
                        </div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    </div>
  )
}