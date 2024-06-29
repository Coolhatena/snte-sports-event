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
    {id: 6, name: 'Master (40-49 años) Varonil 100'},
    {id: 7, name: 'Veterano (30-39 años) Femenil'},
    {id: 8, name: 'Veterano (30-39 años) Varonil'},
    {id: 9, name: 'Libre (hasta 29 años) Femenil'},
    {id: 10, name: 'Libre (hasta 29 años) Varonil'},
    {id: 11, name: 'Jumbo (60 en adelante) Femenil'},
    {id: 12, name: 'Super-Master (50-59 años) Femenil 1500'},
    {id: 13, name: 'Jumbo (60 en adelante) Varonil 1500'},
    {id: 14, name: 'Super-Master (50-59 años) Varonil 1500'},
    {id: 15, name: 'Master (40-49 años) Varonil 1500'},
    {id: 16, name: 'Veterano (30-39 años) Varonil 1500'},
    {id: 17, name: 'Deportes de Exhibición'},
]

export const ComboAtletismo = ({ selectedCategory, setSelectedCategory, query, setQuery }) => {

    const filteredOptions = 
        query === ''
            ? options
            : options.filter((option) => {
                return option.name.toLowerCase().includes(query.toLowerCase())
            })

  return (
	<div className='combobox-container'>
            <Combobox
                value={selectedCategory}
                onChange={(value) => {
                    setSelectedCategory(value.name);
                    setQuery(value.name);
                }}
                onClose={() => setQuery('')}
            >
            <div className='combobox-input'>
                <ComboboxInput
                    className={clsx('input-combo')}
                    displayValue={() => selectedCategory}
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