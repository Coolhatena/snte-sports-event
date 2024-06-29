'use client'
import React from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import CheckIcon from '../icons/CheckIcon'
import { useState } from 'react'
import './comboAtletismo.css'
import clsx from 'clsx'

const options = [
    {id: 1, name: 'Deportes de Exhibición'},
    {id: 2, name: 'Jumbo (60 en adelante) Varonil 400'},
    {id: 3, name: 'Jumbo (60 en adelante) Varonil 1500'},
    {id: 4, name: 'Jumbo (60 en adelante) Varonil 5000'},
    {id: 5, name: 'Jumbo (60 en adelante) Varonil 10000'},
    {id: 6, name: 'Jumbo (60 en adelante) Femenil 400'},
    {id: 7, name: 'Jumbo (60 en adelante) Femenil 1500'},
    {id: 8, name: 'Jumbo (60 en adelante) Femenil 5000'},
    {id: 9, name: 'Libre (hasta 29 años) Femenil 100'},
    {id: 10, name: 'Libre (hasta 29 años) Varonil 100'},
    {id: 11, name: 'Libre (hasta 29 años) Varonil 400'},
    {id: 12, name: 'Master (40-49 años) Varonil 100'},
    {id: 13, name: 'Master (40-49 años) Varonil 400'},
    {id: 14, name: 'Master (40-49 años) Varonil 1500'},
    {id: 15, name: 'Master (40-49 años) Varonil 5000'},
    {id: 16, name: 'Master (40-49 años) Femenil 100'},
    {id: 17, name: 'Master (40-49 años) Femenil 400'},
    {id: 18, name: 'Super-Master (50-59 años) Varonil 100'},
    {id: 19, name: 'Super-Master (50-59 años) Varonil 400'},
    {id: 20, name: 'Super-Master (50-59 años) Varonil 1500'},
    {id: 21, name: 'Super-Master (50-59 años) Varonil 5000'},
    {id: 22, name: 'Super-Master (50-59 años) Femenil 100'},
    {id: 23, name: 'Super-Master (50-59 años) Femenil 400'},
    {id: 24, name: 'Super-Master (50-59 años) Femenil 1500'},
    {id: 25, name: 'Veterano (30-39 años) Varonil 100'},
    {id: 26, name: 'Veterano (30-39 años) Varonil 400'},
    {id: 27, name: 'Veterano (30-39 años) Varonil 1500'},
    {id: 28, name: 'Veterano (30-39 años) Varonil 5000'},
    {id: 29, name: 'Veterano (30-39 años) Femenil 100'},
    {id: 30, name: 'Veterano (30-39 años) Femenil 400'},
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